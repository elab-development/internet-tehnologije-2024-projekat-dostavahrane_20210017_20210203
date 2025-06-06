<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\RestaurantDish;
use App\Models\Restaurant;
use App\Models\Dish;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $orders = Order::where('user_id', auth()->id())->with('orderItems')->get();

        return response()->json([
            'orders' => $orders
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
{
    $validated = $request->validate([
        'items' => 'required|array',
        'items.*.restaurant_id' => 'required|integer',
        'items.*.dish_id' => 'required|integer',
        'items.*.quantity' => 'required|integer|min:1',
        'delivery_address' => 'required|string|max:255',
        'phone_number' => 'required|string|regex:/^06\d{7,}$/',
    ]);

    $user = Auth::user();

    $deliveryAddress = $request->delivery_address;
    $phoneNumber = $validated['phone_number'];

    DB::beginTransaction();

    try {
        $totalPrice = 0;
        $orderItems = [];

        foreach ($validated['items'] as $item) {

            $dish = Dish::find($item['dish_id']);
            if (!$dish) {
                throw new \Exception("Dish with ID '{$item['dish_id']}' not found.");
            }

            $restaurant = Restaurant::find($item['restaurant_id']);
            if (!$restaurant) {
                throw new \Exception("Restaurant with ID '{$item['restaurant_id']}' not found.");
            }

            $restaurantDish = RestaurantDish::where('dish_id', $dish->id)
                ->where('restaurant_id', $restaurant->id)
                ->first();

            if (!$restaurantDish) {
                throw new \Exception("Dish '{$dish->name}' not available in restaurant '{$restaurant->name}'.");
            }

            $price = $restaurantDish->price;
            $quantity = $item['quantity'];

            $orderItems[] = [
                'restaurant_id' => $restaurant->id,
                'dish_id' => $dish->id,
                'quantity' => $quantity,
                'item_price' => $price,
                'created_at' => now(),
                'updated_at' => now(),
            ];

            $totalPrice += $price * $quantity;
        }

        
        $deliveryCost = count($validated['items']) <= 2 ? 200 : 250;
        $totalPrice += $deliveryCost;

        $order = Order::create([
            'user_id' => $user->id,
            'total_price' => $totalPrice,
            'delivery_address' => $deliveryAddress,
            'phone_number' => $phoneNumber,
        ]);

        foreach ($orderItems as &$orderItem) {
            $orderItem['order_id'] = $order->id;
        }

        OrderItem::insert($orderItems);

        DB::commit();

        return response()->json([
            'message' => 'Order created successfully!',
            'order' => $order,
            'items' => $orderItems,
            'delivery_cost' => $deliveryCost,
        ], 201);

    } catch (\Exception $e) {
        DB::rollBack();

        return response()->json([
            'message' => 'Failed to create order!',
            'error' => $e->getMessage(),
        ], 500);
    }
}


 public function getOrderCount()
{
    $user = auth()->user();
    $orderCount = Order::where('user_id', $user->id)->count();
    return response()->json(['orderCount' => $orderCount]);
}


    /**
     * Display the specified resource.
     */
    public function show(Order $order)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Order $order)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Order $order)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $order = Order::find($id);
        if (!$order) {
            return response()->json([
                'message' => 'Order not found'
            ], 404);
        }
        $order->delete();
        return response()->json([
            'message' => 'Order successfully deleted'
        ]);
    }

   
}
