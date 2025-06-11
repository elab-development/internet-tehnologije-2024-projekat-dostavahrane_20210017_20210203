<?php
use App\Models\User;
use App\Http\Controllers\RestaurantController;
use App\Http\Controllers\RestaurantDishController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ExportController;
use App\Http\Controllers\DishController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\Auth\ForgotPasswordController;
use App\Http\Controllers\Auth\ResetPasswordController;
use App\Http\Controllers\ReviewController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('restaurants', [RestaurantController::class, 'index']);
Route::get('categories', [CategoryController::class, 'index']);
Route::get('/restaurantcategories', [RestaurantController::class, 'withCategories']);
Route::get('/dishes', [DishController::class, 'index']);
Route::get('/restaurants/{id}', [RestaurantController::class, 'show']);


Route::resource('restaurantdishes', RestaurantDishController::class);
Route::get('restaurants/{id}/dishes', [RestaurantDishController::class, 'getByRestaurant']);
Route::get('dishes/{id}/restaurants', [RestaurantDishController::class, 'getByDish']);

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::get('/restaurant-dishes/search', [RestaurantDishController::class, 'search']);
Route::post('/forgot-password', [ForgotPasswordController::class, 'sendResetLinkEmail']);
Route::post('/reset-password', [ResetPasswordController::class, 'reset']);



Route::post('/reviews', [ReviewController::class, 'store']);


Route::middleware('auth:sanctum')->group(function () {
    Route::post('/orders', [OrderController::class, 'store']);
    Route::delete('/orders/{id}', [OrderController::class, 'destroy']);
    Route::get('/orders', [OrderController::class, 'index']);
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/export-orders', [ExportController::class, 'exportToCsv'])->name('orders.export');
    Route::get('/orders/count', [OrderController::class, 'getOrderCount']);
});

Route::middleware(['auth:sanctum', 'isAdmin'])->get('/admin/data', function () {
    return response()->json([
        'message' => 'Dobrodošli, admin!',
        'adminTools' => ['Pregled korisnika', 'Pregled narudžbina', 'Upravljanje restoranima'],
    ]);
});