<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\RestaurantDish;

class RestaurantDishSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        RestaurantDish::updateOrCreate(['restaurant_id' => 1, 'dish_id' => 2], ['price' => 900]);
RestaurantDish::updateOrCreate(['restaurant_id' => 1, 'dish_id' => 3], ['price' => 900]);
RestaurantDish::updateOrCreate(['restaurant_id' => 1, 'dish_id' => 9], ['price' => 1400]);
RestaurantDish::updateOrCreate(['restaurant_id' => 1, 'dish_id' => 10], ['price' => 1450]);
RestaurantDish::updateOrCreate(['restaurant_id' => 1, 'dish_id' => 18], ['price' => 1000]);
RestaurantDish::updateOrCreate(['restaurant_id' => 1, 'dish_id' => 19], ['price' => 1050]);
RestaurantDish::updateOrCreate(['restaurant_id' => 1, 'dish_id' => 22], ['price' => 950]);
RestaurantDish::updateOrCreate(['restaurant_id' => 1, 'dish_id' => 23], ['price' => 1000]);
RestaurantDish::updateOrCreate(['restaurant_id' => 1, 'dish_id' => 24], ['price' => 1200]);
RestaurantDish::updateOrCreate(['restaurant_id' => 1, 'dish_id' => 25], ['price' => 1300]);
RestaurantDish::updateOrCreate(['restaurant_id' => 1, 'dish_id' => 30], ['price' => 120]);
RestaurantDish::updateOrCreate(['restaurant_id' => 1, 'dish_id' => 31], ['price' => 200]);
RestaurantDish::updateOrCreate(['restaurant_id' => 1, 'dish_id' => 32], ['price' => 120]);
RestaurantDish::updateOrCreate(['restaurant_id' => 1, 'dish_id' => 33], ['price' => 200]);
RestaurantDish::updateOrCreate(['restaurant_id' => 1, 'dish_id' => 34], ['price' => 350]);
RestaurantDish::updateOrCreate(['restaurant_id' => 1, 'dish_id' => 35], ['price' => 400]);

RestaurantDish::updateOrCreate(['restaurant_id' => 2, 'dish_id' => 19], ['price' => 1100]);
RestaurantDish::updateOrCreate(['restaurant_id' => 2, 'dish_id' => 20], ['price' => 1300]);
RestaurantDish::updateOrCreate(['restaurant_id' => 2, 'dish_id' => 22], ['price' => 1000]);
RestaurantDish::updateOrCreate(['restaurant_id' => 2, 'dish_id' => 23], ['price' => 1130]);
RestaurantDish::updateOrCreate(['restaurant_id' => 2, 'dish_id' => 26], ['price' => 1180]);
RestaurantDish::updateOrCreate(['restaurant_id' => 2, 'dish_id' => 27], ['price' => 1340]);
RestaurantDish::updateOrCreate(['restaurant_id' => 2, 'dish_id' => 30], ['price' => 100]);
RestaurantDish::updateOrCreate(['restaurant_id' => 2, 'dish_id' => 31], ['price' => 180]);
RestaurantDish::updateOrCreate(['restaurant_id' => 2, 'dish_id' => 32], ['price' => 100]);
RestaurantDish::updateOrCreate(['restaurant_id' => 2, 'dish_id' => 33], ['price' => 180]);
RestaurantDish::updateOrCreate(['restaurant_id' => 2, 'dish_id' => 35], ['price' => 380]);

RestaurantDish::updateOrCreate(['restaurant_id' => 3, 'dish_id' => 1], ['price' => 1080]);
RestaurantDish::updateOrCreate(['restaurant_id' => 3, 'dish_id' => 4], ['price' => 920]);
RestaurantDish::updateOrCreate(['restaurant_id' => 3, 'dish_id' => 7], ['price' => 1090]);
RestaurantDish::updateOrCreate(['restaurant_id' => 3, 'dish_id' => 8], ['price' => 1040]);
RestaurantDish::updateOrCreate(['restaurant_id' => 3, 'dish_id' => 20], ['price' => 1450]);
RestaurantDish::updateOrCreate(['restaurant_id' => 3, 'dish_id' => 21], ['price' => 1600]);
RestaurantDish::updateOrCreate(['restaurant_id' => 3, 'dish_id' => 22], ['price' => 1200]);
RestaurantDish::updateOrCreate(['restaurant_id' => 3, 'dish_id' => 23], ['price' => 1300]);
RestaurantDish::updateOrCreate(['restaurant_id' => 3, 'dish_id' => 24], ['price' => 990]);
RestaurantDish::updateOrCreate(['restaurant_id' => 3, 'dish_id' => 25], ['price' => 1030]);
RestaurantDish::updateOrCreate(['restaurant_id' => 3, 'dish_id' => 28], ['price' => 830]);
RestaurantDish::updateOrCreate(['restaurant_id' => 3, 'dish_id' => 30], ['price' => 300]);
RestaurantDish::updateOrCreate(['restaurant_id' => 3, 'dish_id' => 32], ['price' => 300]);
RestaurantDish::updateOrCreate(['restaurant_id' => 3, 'dish_id' => 34], ['price' => 550]);
RestaurantDish::updateOrCreate(['restaurant_id' => 3, 'dish_id' => 35], ['price' => 510]);

RestaurantDish::updateOrCreate(['restaurant_id' => 4, 'dish_id' => 2], ['price' => 800]);
RestaurantDish::updateOrCreate(['restaurant_id' => 4, 'dish_id' => 3], ['price' => 820]);
RestaurantDish::updateOrCreate(['restaurant_id' => 4, 'dish_id' => 5], ['price' => 950]);
RestaurantDish::updateOrCreate(['restaurant_id' => 4, 'dish_id' => 6], ['price' => 980]);
RestaurantDish::updateOrCreate(['restaurant_id' => 4, 'dish_id' => 9], ['price' => 1300]);
RestaurantDish::updateOrCreate(['restaurant_id' => 4, 'dish_id' => 10], ['price' => 1200]);
RestaurantDish::updateOrCreate(['restaurant_id' => 4, 'dish_id' => 17], ['price' => 840]);
RestaurantDish::updateOrCreate(['restaurant_id' => 4, 'dish_id' => 18], ['price' => 810]);
RestaurantDish::updateOrCreate(['restaurant_id' => 4, 'dish_id' => 19], ['price' => 900]);
RestaurantDish::updateOrCreate(['restaurant_id' => 4, 'dish_id' => 22], ['price' => 960]);
RestaurantDish::updateOrCreate(['restaurant_id' => 4, 'dish_id' => 23], ['price' => 1040]);
RestaurantDish::updateOrCreate(['restaurant_id' => 4, 'dish_id' => 26], ['price' => 890]);
RestaurantDish::updateOrCreate(['restaurant_id' => 4, 'dish_id' => 27], ['price' => 750]);
RestaurantDish::updateOrCreate(['restaurant_id' => 4, 'dish_id' => 30], ['price' => 240]);
RestaurantDish::updateOrCreate(['restaurant_id' => 4, 'dish_id' => 31], ['price' => 360]);
RestaurantDish::updateOrCreate(['restaurant_id' => 4, 'dish_id' => 32], ['price' => 240]);
RestaurantDish::updateOrCreate(['restaurant_id' => 4, 'dish_id' => 33], ['price' => 360]);
RestaurantDish::updateOrCreate(['restaurant_id' => 4, 'dish_id' => 34], ['price' => 400]);
RestaurantDish::updateOrCreate(['restaurant_id' => 4, 'dish_id' => 35], ['price' => 450]);

    }
}
