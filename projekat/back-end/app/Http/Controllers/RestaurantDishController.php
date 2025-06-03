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

    // Vrati kolekciju direktno kao JSON — Laravel će to lepo serijalizovati
    return RestaurantDishResource::collection($restaurantDishes);
}


    public function getByRestaurant($id)
    {
        
        $restaurantDishes = RestaurantDish::with(['restaurant', 'dish.category'])
                                          ->where('restaurant_id', $id)
                                          ->get();

       
        if ($restaurantDishes->isEmpty()) {
            return response()->json([
                'message' => 'This restaraunt does not exist or it doesnt have any meals.',
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
                'message' => 'This dish is not in any of the restaraunts or it doesnt exist.',
            ], 404);
        }

       
        
    $resource = RestaurantDishResource::collection($restaurantDishes);

    
    return response()->json([
        'restaurant_dishes' => $resource->response()->getData(true)['data']
    ]);
    }

    public function search(Request $request)
{
    $query = RestaurantDish::query();
    
    if ($request->has('dish_name')) {
        $query->whereHas('dish', function ($q) use ($request) {
            $q->where('name', 'like', '%' . $request->input('dish_name') . '%');
        });
    }

    if ($request->has('restaurant_name')) {
        $query->whereHas('restaurant', function ($q) use ($request) {
            $q->where('name', 'like', '%' . $request->input('restaurant_name') . '%');
        });
    }
    
    
    if ($request->has('min_price') || $request->has('max_price')) {
        if ($request->has('min_price')) {
            $query->where('price', '>=', $request->input('min_price'));
        }
        if ($request->has('max_price')) {
            $query->where('price', '<=', $request->input('max_price'));
        }
    }

   
    if ($request->has('sort_by_price')) {
        $sortDirection = $request->input('sort_by_price') === 'desc' ? 'desc' : 'asc';
        $query->orderBy('price', $sortDirection);
    }

    
    $restaurantDishes = $query->with(['restaurant', 'dish'])->get();

    
    if ($restaurantDishes->isEmpty()) {
        return response()->json([
            'message' => 'Record not found.',
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
