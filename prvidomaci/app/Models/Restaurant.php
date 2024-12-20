<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Restaurant extends Model
{
    /** @use HasFactory<\Database\Factories\RestaurantFactory> */
    use HasFactory;

    public function order()
    {
        return $this->hasMany(Order::class);
    }

    public function restaurant_dish()
    {
        return $this->hasMany(RestaurantDish::class);
    }

}
