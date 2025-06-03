<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\RestaurantCategory;

class RestaurantCategorySeeder extends Seeder
{
    public function run()
    {
        // Za restoran 1
        RestaurantCategory::updateOrCreate(['restaurant_id' => 1, 'category_id' => 1]);
        RestaurantCategory::updateOrCreate(['restaurant_id' => 1, 'category_id' => 2]);
        RestaurantCategory::updateOrCreate(['restaurant_id' => 1, 'category_id' => 3]);
        RestaurantCategory::updateOrCreate(['restaurant_id' => 1, 'category_id' => 4]);
        RestaurantCategory::updateOrCreate(['restaurant_id' => 1, 'category_id' => 5]);
        RestaurantCategory::updateOrCreate(['restaurant_id' => 1, 'category_id' => 8]);
        RestaurantCategory::updateOrCreate(['restaurant_id' => 1, 'category_id' => 9]);

        // Za restoran 2
        RestaurantCategory::updateOrCreate(['restaurant_id' => 2, 'category_id' => 2]);
        RestaurantCategory::updateOrCreate(['restaurant_id' => 2, 'category_id' => 3]);
        RestaurantCategory::updateOrCreate(['restaurant_id' => 2, 'category_id' => 6]);
        RestaurantCategory::updateOrCreate(['restaurant_id' => 2, 'category_id' => 8]);
        RestaurantCategory::updateOrCreate(['restaurant_id' => 2, 'category_id' => 9]);

        // Za restoran 3
        RestaurantCategory::updateOrCreate(['restaurant_id' => 3, 'category_id' => 1]);
        RestaurantCategory::updateOrCreate(['restaurant_id' => 3, 'category_id' => 2]);
        RestaurantCategory::updateOrCreate(['restaurant_id' => 3, 'category_id' => 3]);
        RestaurantCategory::updateOrCreate(['restaurant_id' => 3, 'category_id' => 5]);
        RestaurantCategory::updateOrCreate(['restaurant_id' => 3, 'category_id' => 7]);
        RestaurantCategory::updateOrCreate(['restaurant_id' => 3, 'category_id' => 8]);
        RestaurantCategory::updateOrCreate(['restaurant_id' => 3, 'category_id' => 9]);

        // Za restoran 4
        RestaurantCategory::updateOrCreate(['restaurant_id' => 4, 'category_id' => 1]);
        RestaurantCategory::updateOrCreate(['restaurant_id' => 4, 'category_id' => 2]);
        RestaurantCategory::updateOrCreate(['restaurant_id' => 4, 'category_id' => 3]);
        RestaurantCategory::updateOrCreate(['restaurant_id' => 4, 'category_id' => 4]);
        RestaurantCategory::updateOrCreate(['restaurant_id' => 4, 'category_id' => 6]);
        RestaurantCategory::updateOrCreate(['restaurant_id' => 4, 'category_id' => 8]);
        RestaurantCategory::updateOrCreate(['restaurant_id' => 4, 'category_id' => 9]);
    }
}
