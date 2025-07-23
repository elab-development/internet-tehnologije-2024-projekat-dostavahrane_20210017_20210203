<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    /** @use HasFactory<\Database\Factories\CategoryFactory> */
    use HasFactory;

    protected $fillable = ['name','picture'];

    public function dishes()
    {
    return $this->hasMany(Dish::class);
    }
 public function restaurants()
{
    return $this->belongsToMany(Restaurant::class, 'restaurant_categories');
}


}
