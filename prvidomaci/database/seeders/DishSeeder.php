<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Dish;

class DishSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        
        Dish::create([
            'name' => 'Capricciosa',
            'description' => 'Pelat, gauda, sunka, sampinjoni, masline',
            'price'=> 1100,
            'category_id' => 1,
            'availability' => true
        ]);

        Dish::create([
            'name' => 'Napolitana',
            'description' => 'Pelat, gauda, sunka, masline',
            'price'=> 1000,
            'category_id' => 1,
            'availability' => true
        ]);

        Dish::create([
            'name' => 'Funghi',
            'description' => 'Pelat, gauda, sampinjoni, masline',
            'price'=> 1050,
            'category_id' => 1,
            'availability' => true
        ]);

        Dish::create([
            'name' => 'Margherita',
            'description' => 'Pelat, mocarela, bosiljak',
            'price'=> 950,
            'category_id' => 1,
            'availability' => true
        ]);

        Dish::create([
            'name' => 'Quatro staggione',
            'description' => 'Pelat, gauda, sunka, sampinjoni, jaje, paprika, kobasica, slanina, feferoni, masline',
            'price'=> 1350,
            'category_id' => 1,
            'availability' => true
        ]);

        Dish::create([
            'name' => 'Quatro formaggi',
            'description' => 'Pelat, gorgonzola, mocarela, ementaler, parmezan, masline',
            'price'=> 1290,
            'category_id' => 1,
            'availability' => true
        ]);

        Dish::create([
            'name' => 'Vegeterijana',
            'description' => 'Pelat, gauda, sampinjoni, jaje, paprika, feferoni, krastavac, paradajz, masline',
            'price'=> 940,
            'category_id' => 1,
            'availability' => true
        ]);

        Dish::create([
            'name' => 'Veganska pizza',
            'description' => 'Pelat, sampinjoni, paprika, feferoni, krastavac, kukuruz, paradajz, masline',
            'price'=> 900,
            'category_id' => 1,
            'availability' => true
        ]);

        Dish::create([
            'name' => 'Capricciosa',
            'description' => 'Pelat, gauda, sunka, sampinjoni, masline',
            'price'=> 1600,
            'category_id' => 4,
            'availability' => true
        ]);

        Dish::create([
            'name' => 'Napolitana',
            'description' => 'Pelat, gauda, sunka, masline',
            'price'=> 1550,
            'category_id' => 4,
            'availability' => true
        ]);

        Dish::create([
            'name' => 'Funghi',
            'description' => 'Pelat, gauda, sampinjoni, masline',
            'price'=> 1500,
            'category_id' => 4,
            'availability' => true
        ]);

        Dish::create([
            'name' => 'Margherita',
            'description' => 'Pelat, mocarela, bosiljak',
            'price'=> 1300,
            'category_id' => 4,
            'availability' => true
        ]);

        Dish::create([
            'name' => 'Quattro staggione',
            'description' => 'Pelat, gauda, sunka, sampinjoni, jaje, paprika, kobasica, slanina, feferoni, masline',
            'price'=> 1800,
            'category_id' => 4,
            'availability' => true
        ]);

        Dish::create([
            'name' => 'Quattro formaggi',
            'description' => 'Pelat, gorgonzola, mocarela, ementaler, parmezan, masline',
            'price'=> 1700,
            'category_id' => 4,
            'availability' => true
        ]);

        Dish::create([
            'name' => 'Vegeterijana',
            'description' => 'Pelat, gauda, sampinjoni, jaje, paprika, feferoni, krastavac, paradajz, masline',
            'price'=> 1450,
            'category_id' => 4,
            'availability' => true
        ]);

        Dish::create([
            'name' => 'Veganska pizza',
            'description' => 'Pelat, sampinjoni, paprika, feferoni, krastavac, kukuruz, paradajz, masline',
            'price'=> 1350,
            'category_id' => 4,
            'availability' => true
        ]);

        Dish::create([
            'name' => 'Carbonara',
            'description' => 'Panceta, nautralna pavlaka, jaje, zacini',
            'price'=> 790,
            'category_id' => 2,
            'availability' => true
        ]);

        Dish::create([
            'name' => 'Bolognese',
            'description' => 'Sos od paradajza i mlevenog mesa, parmezan, zacini',
            'price'=> 810,
            'category_id' => 2,
            'availability' => true
        ]);

        Dish::create([
            'name' => 'Pesto genovese',
            'description' => 'Pileci file, pesto sos, neutralna pavlaka, zacini',
            'price'=> 790,
            'category_id' => 2,
            'availability' => true
        ]);

        Dish::create([
            'name' => 'Quatrro formaggi',
            'description' => 'Gorgonzola, ementaler, parmezan, gauda, zacini',
            'price'=> 810,
            'category_id' => 2,
            'availability' => true
        ]);

        Dish::create([
            'name' => 'Pasta di mare',
            'description' => 'Plodovi mora, paradajz, crni luk, zacini',
            'price'=> 790,
            'category_id' => 2,
            'availability' => true
        ]);


    }
}
