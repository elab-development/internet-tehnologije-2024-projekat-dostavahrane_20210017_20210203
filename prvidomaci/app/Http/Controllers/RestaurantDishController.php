<?php

namespace App\Http\Controllers;

use App\Models\RestaurantDish;
use Illuminate\Http\Request;

class RestaurantDishController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $restaurantdishes = RestaurantDish::all();

        if ($restaurantdishes->isEmpty()) {
            return response()->json(['message' => 'No restaurant dishes found'], 404);
        }

        return response()->json($restaurantdishes, 200);
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
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(RestaurantDish $restaurantDish)
    {
        
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(RestaurantDish $restaurantDish)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, RestaurantDish $restaurantDish)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(RestaurantDish $restaurantDish)
    {
        //
    }
}
