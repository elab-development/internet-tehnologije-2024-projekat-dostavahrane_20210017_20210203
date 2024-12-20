<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Dish extends Model
{
    /** @use HasFactory<\Database\Factories\DishFactory> */
    use HasFactory;

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
    
    public function order_item()
    {
        return $this->hasMany(OrderItem::class);
    }

    public function restaurant_dish()
    {
        return $this->hasMany(RestaurantDish::class);
    }


}
