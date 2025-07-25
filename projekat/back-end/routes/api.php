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
Route::get('/restaurants/{id}/reviews', [ReviewController::class, 'getReviewsByRestaurant']);


Route::middleware('auth:sanctum')->group(function () {
    Route::post('/orders', [OrderController::class, 'store']);
    Route::delete('/orders/{id}', [OrderController::class, 'destroy']);
    Route::get('/orders', [OrderController::class, 'index']);
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/export-orders', [ExportController::class, 'exportToCsv'])->name('orders.export');
    Route::get('/orders/count', [OrderController::class, 'getOrderCount']);
});

Route::middleware(['auth:sanctum', 'isAdmin'])->group(function () {
    Route::get('/admin/data', [AdminController::class, 'dashboard']);
    Route::get('/admin/orders', [AdminController::class, 'allOrders']);
    Route::get('/admin/users', [AdminController::class, 'allUsers']);
    Route::get('/admin/reviews', [AdminController::class, 'allReviews']);
    Route::get('/admin/statistics/orders-per-restaurant', [AdminController::class, 'ordersPerRestaurant']);
    Route::get('/admin/statistics/popular-dishes', [AdminController::class, 'popularDishes']);
    Route::get('/admin/statistics/revenue', [AdminController::class, 'revenueStatistics']);
    Route::get('admin/restaurants', [RestaurantController::class, 'index']);
    Route::get('admin/categories', [CategoryController::class, 'index']);
    Route::post('admin/restaurants/create', [AdminController::class, 'createRestaurant']);
    Route::delete('admin/restaurants/{id}/delete', [AdminController::class, 'deleteRestaurant']);
    Route::post('admin/categories/create', [AdminController::class, 'createCategory']);
    Route::delete('admin/categories/{id}/delete', [AdminController::class, 'deleteCategory']);
    Route::post('admin/restaurant-dishes/assign', [AdminController::class, 'assignDishToRestaurant']);
});