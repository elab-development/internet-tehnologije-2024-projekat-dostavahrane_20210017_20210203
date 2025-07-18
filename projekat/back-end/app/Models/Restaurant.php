<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Restaurant extends Model
{
    /** @use HasFactory<\Database\Factories\RestaurantFactory> */
    use HasFactory;

    protected $fillable = [
        'name',
        'email',
        'address',
        'phone',
        'description',
        'latitude',
        'longitude'
    ];

    public function restaurant_dish()
    {
        return $this->hasMany(RestaurantDish::class);
    }
   public function categories()
{
    return $this->belongsToMany(Category::class, 'restaurant_categories');
}
}
