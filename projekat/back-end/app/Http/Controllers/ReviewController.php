<?php

namespace App\Http\Controllers;

use App\Models\Review;
use Illuminate\Http\Request;

class ReviewController extends Controller
{
    
    public function store(Request $request)
    {
        
        $validatedData = $request->validate([
            'order_id' => 'required|exists:orders,id|unique:reviews,order_id',
            'delivery_rating' => 'required|integer|between:1,5',
            'food_rating' => 'required|integer|between:1,5',
            'note' => 'nullable|string',
        ]);

        
        $review = Review::create($validatedData);

        
        return response()->json([
            'message' => 'Review submitted successfully',
            'review' => $review,
        ], 201);
    }
}
