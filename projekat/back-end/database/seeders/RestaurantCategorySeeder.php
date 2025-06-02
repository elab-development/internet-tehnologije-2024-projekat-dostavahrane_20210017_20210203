<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RestaurantCategorySeeder extends Seeder
{
    public function run()
    {
        DB::table('restaurant_categories')->insert([
            ['restaurant_id' => 1, 'category_id' => 1],
            ['restaurant_id' => 1, 'category_id' => 2],
            ['restaurant_id' => 1, 'category_id' => 3],
            ['restaurant_id' => 1, 'category_id' => 4],
            ['restaurant_id' => 1, 'category_id' => 5],
            ['restaurant_id' => 1, 'category_id' => 8],
            ['restaurant_id' => 1, 'category_id' => 9],

            ['restaurant_id' => 2, 'category_id' => 2],
            ['restaurant_id' => 2, 'category_id' => 3],
            ['restaurant_id' => 2, 'category_id' => 6],
            ['restaurant_id' => 2, 'category_id' => 8],
            ['restaurant_id' => 2, 'category_id' => 9],

            ['restaurant_id' => 3, 'category_id' => 1],
            ['restaurant_id' => 3, 'category_id' => 2],
            ['restaurant_id' => 3, 'category_id' => 3],
            ['restaurant_id' => 3, 'category_id' => 5],
            ['restaurant_id' => 3, 'category_id' => 7],
            ['restaurant_id' => 3, 'category_id' => 8],
            ['restaurant_id' => 3, 'category_id' => 9],

            ['restaurant_id' => 4, 'category_id' => 1],
            ['restaurant_id' => 4, 'category_id' => 2],
            ['restaurant_id' => 4, 'category_id' => 3],
            ['restaurant_id' => 4, 'category_id' => 4],
            ['restaurant_id' => 4, 'category_id' => 6],
            ['restaurant_id' => 4, 'category_id' => 8],
            ['restaurant_id' => 4, 'category_id' => 9],
        ]);
    }
}
