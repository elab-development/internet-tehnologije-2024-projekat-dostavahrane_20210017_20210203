<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\RestaurantDish;

class RestaurantDishSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        RestaurantDish::updateOrCreate(
            ['restaurant_id' => 1, 'dish_id' => 2],
            ['price' => 900]
        );
        RestaurantDish::updateOrCreate(
            ['restaurant_id' => 1, 'dish_id' => 3],
            ['price' => 950]
        );
        RestaurantDish::updateOrCreate(
            ['restaurant_id' => 1, 'dish_id' => 18],
            ['price' => 1000]
        );
        RestaurantDish::updateOrCreate(
            ['restaurant_id' => 1, 'dish_id' => 19],
            ['price' => 1050]
        );
        
        RestaurantDish::updateOrCreate(
            ['restaurant_id' => 2, 'dish_id' => 2],
            ['price' => 980]
        );
        RestaurantDish::updateOrCreate(
            ['restaurant_id' => 2, 'dish_id' => 5],
            ['price' => 850]
        );
        RestaurantDish::updateOrCreate(
            ['restaurant_id' => 2, 'dish_id' => 14],
            ['price' => 1500]
        );
        RestaurantDish::updateOrCreate(
            ['restaurant_id' => 2, 'dish_id' => 19],
            ['price' => 1000]
        );
        
        RestaurantDish::updateOrCreate(
            ['restaurant_id' => 3, 'dish_id' => 4],
            ['price' => 920]
        );
        RestaurantDish::updateOrCreate(
            ['restaurant_id' => 3, 'dish_id' => 8],
            ['price' => 1040]
        );
        RestaurantDish::updateOrCreate(
            ['restaurant_id' => 3, 'dish_id' => 21],
            ['price' => 1600]
        );
        RestaurantDish::updateOrCreate(
            ['restaurant_id' => 3, 'dish_id' => 20],
            ['price' => 1450]
        );
    }
}