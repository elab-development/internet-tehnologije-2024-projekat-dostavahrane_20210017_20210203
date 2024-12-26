<?php
use App\Models\User;
use App\Http\Controllers\RestaurantController;
use App\Http\Controllers\RestaurantDishController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\OrderController;


Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('restaurants', [RestaurantController::class, 'index']);
Route::get('users', [UserController::class, 'index']);

//Route::get('restaurantdishes', [RestaurantDishController::class, 'index']);
//Route::get('restaurantdishes/{id}', [RestaurantDishController::class, 'show']);

Route::resource('restaurantdishes', RestaurantDishController::class);
Route::get('restaurant/{id}/dishes', [RestaurantDishController::class, 'getByRestaurant']);
Route::get('dish/{id}/restaurants', [RestaurantDishController::class, 'getByDish']);

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/profile', function(Request $request) {
        return auth()->user();
    });
    Route::post('/orders', [OrderController::class, 'store']);
    Route::delete('/orders/{id}', [OrderController::class, 'destroy']);
    Route::get('/orders', [OrderController::class, 'index']);
    Route::post('/logout', [AuthController::class, 'logout']);

});