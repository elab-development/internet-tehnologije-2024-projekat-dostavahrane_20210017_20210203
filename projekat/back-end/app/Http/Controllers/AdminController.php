<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Order;
use App\Models\User;
use App\Models\Review;

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
}
