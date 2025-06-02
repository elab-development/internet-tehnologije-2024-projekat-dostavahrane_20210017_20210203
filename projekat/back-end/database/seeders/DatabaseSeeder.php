<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Category;
use App\Models\Restaurant;
use App\Models\Dish;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
         User::factory(10)->create();
         //Category::factory(5)->create();
      
         //Dish::factory(5)->create();
      //Restaurant::factory(5)->create();
        $this->call(RestaurantSeeder::class);
        $this->call(CategorySeeder::class);
        $this->call(DishSeeder::class);
        $this->call(RestaurantDishSeeder::class);
        $this->call(RestaurantCategorySeeder::class);
       // $this->call(OrderSeeder::class);
        //$this->call(OrderItemSeeder::class);
        
        //User::factory()->create([
          //  'username' => 'Test User',
            //'email' => 'test@example.com',
        //]);
    }
}
