<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Order;
use App\Models\User;
use App\Models\Review;
use App\Models\Restaurant;
use Illuminate\Support\Facades\DB;
use App\Models\Dish;

class AdminController extends Controller
{
    public function dashboard()
    {
        return response()->json([
            'message' => 'Dobrodošli u admin panel.',
            'adminTools' => [
                'Pregled svih narudžbina',
                'Pregled svih korisnika',
                'Pregled svih recenzija',
            ]
        ]);
    }

    public function allOrders()
    {
        $orders = Order::with(['user'])->latest()->get();

        return response()->json([
            'orders' => $orders
        ]);
    }


    public function allUsers()
    {
        $users = User::where('role', 'user')->get();

        return response()->json([
            'users' => $users
        ]);
    }

    public function allReviews()
{
    $reviews = Review::with(['order.user'])->latest()->get();

    return response()->json([
        'reviews' => $reviews
    ]);
}
    public function ordersPerRestaurant()
{
    $data = DB::table('order_items')
        ->join('restaurants', 'order_items.restaurant_id', '=', 'restaurants.id')
        ->select('restaurants.name as restaurant', DB::raw('COUNT(DISTINCT order_items.order_id) as order_count'))
        ->groupBy('restaurants.name')
        ->get();

    return response()->json($data);
}

public function popularDishes()
{
    $popularDishes = DB::table('order_items')
        ->select('dish_id', DB::raw('SUM(quantity) as total_quantity'))
        ->groupBy('dish_id')
        ->orderByDesc('total_quantity')
        ->limit(10)
        ->get()
        ->map(function ($item) {
            $dish = Dish::find($item->dish_id);
            return [
                'dish_name' => $dish ? $dish->name : 'Nepoznato jelo',
                'quantity' => $item->total_quantity,
            ];
        });

    return response()->json($popularDishes);
}

public function revenueStatistics()
{
  
    $revenuePerRestaurant = DB::table('order_items')
        ->join('restaurants', 'order_items.restaurant_id', '=', 'restaurants.id')
        ->select('restaurants.name as restaurant', DB::raw('SUM(order_items.quantity * order_items.item_price) as revenue'))
        ->groupBy('restaurants.name')
        ->get();


    $dailyRevenue = DB::table('orders')
        ->selectRaw('DATE(created_at) as date, SUM(total_price) as revenue')
        ->groupByRaw('DATE(created_at)')
        ->orderByDesc('date')
        ->limit(30)
        ->get();


    $totalRevenue = DB::table('orders')->sum('total_price');

    return response()->json([
        'daily' => $dailyRevenue,
        'per_restaurant' => $revenuePerRestaurant,
        'total' => $totalRevenue
    ]);
}

}
