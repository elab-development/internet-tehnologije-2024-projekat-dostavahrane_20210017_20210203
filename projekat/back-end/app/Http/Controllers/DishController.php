<?php

namespace App\Http\Controllers;

use App\Models\Dish;

class DishController extends Controller
{
    public function index()
    {
        $dishes = Dish::all();

        if ($dishes->isEmpty()) {
            return response()->json(['message' => 'No dishes found'], 404);
        }

        return response()->json($dishes, 200);
    }
}
