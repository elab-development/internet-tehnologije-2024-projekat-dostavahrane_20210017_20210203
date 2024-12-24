<?php
use App\Models\User;
use App\Http\Controllers\RestaurantController;
use App\Http\Controllers\RestaurantDishController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('restaurants', [RestaurantController::class, 'index']);
Route::get('users', [UserController::class, 'index']);
Route::get('restaurantdishes', [RestaurantDishController::class, 'index']);
Route::get('restaurantdishes/{id}', [RestaurantDishController::class, 'show']);
