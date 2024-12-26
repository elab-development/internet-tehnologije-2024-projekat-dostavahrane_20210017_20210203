<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderItem extends Model
{
    /** @use HasFactory<\Database\Factories\OrderItemFactory> */
    use HasFactory;

    protected $fillable = [
        'restaurant_id',
        'dish_id',
        'order_id',
    ];

    public function restaurant_dish()
    {
        return $this->belongsTo(RestaurantDish::class);
    }

    public function order()
    {
        return $this->belongsTo(Order::class);
    }

    
}
