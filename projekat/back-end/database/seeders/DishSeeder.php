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
        Dish::updateOrCreate(
            ['name' => 'Capricciosa 32cm', 'category_id' => 1],
            ['description' => 'Pelat, gauda, sunka, sampinjoni, masline']
        );

        Dish::updateOrCreate(
            ['name' => 'Napolitana 32cm', 'category_id' => 1],
            ['description' => 'Pelat, gauda, sunka, masline']
        );

        Dish::updateOrCreate(
            ['name' => 'Funghi 32cm', 'category_id' => 1],
            ['description' => 'Pelat, gauda, sampinjoni, masline']
        );

        Dish::updateOrCreate(
            ['name' => 'Margherita 32cm', 'category_id' => 1],
            ['description' => 'Pelat, mocarela, bosiljak']
        );

        Dish::updateOrCreate(
            ['name' => 'Quatro staggione 32cm', 'category_id' => 1],
            ['description' => 'Pelat, gauda, sunka, sampinjoni, jaje, paprika, kobasica, slanina, feferoni, masline']
        );

        Dish::updateOrCreate(
            ['name' => 'Quatro formaggi 32cm', 'category_id' => 1],
            ['description' => 'Pelat, gorgonzola, mocarela, ementaler, parmezan, masline']
        );

        Dish::updateOrCreate(
            ['name' => 'Vegeterijana 32cm', 'category_id' => 1],
            ['description' => 'Pelat, gauda, sampinjoni, jaje, paprika, feferoni, krastavac, paradajz, masline']
        );

        Dish::updateOrCreate(
            ['name' => 'Veganska pizza 32cm', 'category_id' => 1],
            ['description' => 'Pelat, sampinjoni, paprika, feferoni, krastavac, kukuruz, paradajz, masline']
        );

        Dish::updateOrCreate(
            ['name' => 'Capricciosa 50cm', 'category_id' => 4],
            ['description' => 'Pelat, gauda, sunka, sampinjoni, masline']
        );

        Dish::updateOrCreate(
            ['name' => 'Napolitana 50cm', 'category_id' => 4],
            ['description' => 'Pelat, gauda, sunka, masline']
        );

        Dish::updateOrCreate(
            ['name' => 'Funghi 50cm', 'category_id' => 4],
            ['description' => 'Pelat, gauda, sampinjoni, masline']
        );

        Dish::updateOrCreate(
            ['name' => 'Margherita 50cm', 'category_id' => 4],
            ['description' => 'Pelat, mocarela, bosiljak']
        );

        Dish::updateOrCreate(
            ['name' => 'Quattro staggion 50cm', 'category_id' => 4],
            ['description' => 'Pelat, gauda, sunka, sampinjoni, jaje, paprika, kobasica, slanina, feferoni, masline']
        );

        Dish::updateOrCreate(
            ['name' => 'Quattro formaggi 50cm', 'category_id' => 4],
            ['description' => 'Pelat, gorgonzola, mocarela, ementaler, parmezan, masline']
        );

        Dish::updateOrCreate(
            ['name' => 'Vegeterijana 50cm', 'category_id' => 4],
            ['description' => 'Pelat, gauda, sampinjoni, jaje, paprika, feferoni, krastavac, paradajz, masline']
        );

        Dish::updateOrCreate(
            ['name' => 'Veganska pizza 50cm', 'category_id' => 4],
            ['description' => 'Pelat, sampinjoni, paprika, feferoni, krastavac, kukuruz, paradajz, masline']
        );

        Dish::updateOrCreate(
            ['name' => 'Carbonara', 'category_id' => 2],
            ['description' => 'Panceta, nautralna pavlaka, jaje, zacini']
        );

        Dish::updateOrCreate(
            ['name' => 'Bolognese', 'category_id' => 2],
            ['description' => 'Sos od paradajza i mlevenog mesa, parmezan, zacini']
        );

        Dish::updateOrCreate(
            ['name' => 'Pesto genovese', 'category_id' => 2],
            ['description' => 'Pileci file, pesto sos, neutralna pavlaka, zacini']
        );

        Dish::updateOrCreate(
            ['name' => 'Quatrro formaggi', 'category_id' => 2],
            ['description' => 'Gorgonzola, ementaler, parmezan, gauda, zacini']
        );

        Dish::updateOrCreate(
            ['name' => 'Pasta di mare', 'category_id' => 2],
            ['description' => 'Plodovi mora, paradajz, crni luk, zacini']
        );
    }
}