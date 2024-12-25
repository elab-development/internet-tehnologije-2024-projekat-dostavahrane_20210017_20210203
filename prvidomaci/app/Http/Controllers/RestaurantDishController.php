<?php

namespace App\Http\Controllers;

use App\Models\RestaurantDish;
use App\Http\Resources\RestaurantDishResource;
use Illuminate\Http\Request;

class RestaurantDishController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    
    public function index()
    {
        $restaurantDishes = RestaurantDish::with(['restaurant', 'dish.category'])->get();

    if ($restaurantDishes->isEmpty()) {
        return response()->json([
            'message' => 'No restaurant dishes found.',
        ], 404);
    }

  
    $resource = RestaurantDishResource::collection($restaurantDishes);

   
    return response()->json([
        'restaurant_dishes' => $resource->response()->getData(true)['data']
    ]);
    }

    public function getByRestaurant($id)
    {
        
        $restaurantDishes = RestaurantDish::with(['restaurant', 'dish.category'])
                                          ->where('restaurant_id', $id)
                                          ->get();

       
        if ($restaurantDishes->isEmpty()) {
            return response()->json([
                'message' => 'This dish is not in any of the restaraunts.',
            ], 404);
        }

       
       
    $resource = RestaurantDishResource::collection($restaurantDishes);

   
    return response()->json([
        'restaurant_dishes' => $resource->response()->getData(true)['data']
    ]);
    }


    public function getByDish($id)
    {
        
        $restaurantDishes = RestaurantDish::with(['restaurant', 'dish.category'])
                                          ->where('dish_id', $id)
                                          ->get();

       
        if ($restaurantDishes->isEmpty()) {
            return response()->json([
                'message' => 'This dish is not in any of the restaraunts.',
            ], 404);
        }

       
        
    $resource = RestaurantDishResource::collection($restaurantDishes);

    
    return response()->json([
        'restaurant_dishes' => $resource->response()->getData(true)['data']
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
        //
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        [$restaurant_id, $dish_id] = explode('-', $id);

        $restaurantDish = RestaurantDish::with('restaurant','dish.category')
                                         ->where('restaurant_id', $restaurant_id)
                                         ->where('dish_id', $dish_id)
                                         ->first();

        if (!$restaurantDish) {
            return response()->json(['message' => 'Record not found'], 404);
        }

        return new RestaurantDishResource($restaurantDish);
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
