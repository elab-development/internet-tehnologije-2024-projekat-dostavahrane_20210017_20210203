<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderItem extends Model
{
    /** @use HasFactory<\Database\Factories\OrderItemFactory> */
    use HasFactory;

    public function restaurant_dish()
    {
        return $this->belongsTo(RestaurantDish::class);
    }

    public function order()
    {
        return $this->belongsTo(Order::class);
    }

    
}
