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
            'restaurant_name' => 'required|string|max:255',
            'items' => 'required|array',
            'items.*.name' => 'required|string|max:255',
            'items.*.quantity' => 'required|integer|min:1',
            'delivery_address' => 'required|string|max:255',
        ]);

        $user = Auth::user();

        $deliveryAddress = $request->delivery_address;

        $restaurantName = ucwords(strtolower($validated['restaurant_name']));
        $restaurant = Restaurant::where('name', $restaurantName)->first();

        if (!$restaurant) {
            return response()->json([
                'message' => "Restaurant '{$restaurantName}' not found."
            ], 404);
        }

        DB::beginTransaction();

        try {
            $totalPrice = 0;
            $orderItems = [];

            foreach ($validated['items'] as $item) {
                
                $formattedName = ucwords(strtolower($item['name']));
                $dish = Dish::where('name', $formattedName)->first();

                if (!$dish) {
                    throw new \Exception("Dish '{$formattedName}' not found.");
                }

                $restaurantDish = RestaurantDish::where('dish_id', $dish->id)
                    ->where('restaurant_id', $restaurant->id)
                    ->first();

                if (!$restaurantDish) {
                    throw new \Exception("Dish '{$formattedName}' not available in restaurant '{$restaurantName}'.");
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

            $order = Order::create([
                'user_id' => $user->id,
                'restaurant_id' => $restaurant->id,
                'total_price' => $totalPrice,
                'delivery_address' => $deliveryAddress
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
            ], 201);

        } catch (\Exception $e) {
            DB::rollBack();

            return response()->json([
                'message' => 'Failed to create order!',
                'error' => $e->getMessage(),
            ], 500);
        }
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
