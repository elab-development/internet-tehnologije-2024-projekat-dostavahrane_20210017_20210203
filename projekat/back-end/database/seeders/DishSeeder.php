<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Dish;

class DishSeeder extends Seeder
{
    public function run(): void
    {
        Dish::updateOrCreate(
            ['name' => 'Capricciosa 32cm', 'category_id' => 1],
            ['description' => 'Pelat, gauda, sunka, sampinjoni, masline', 'isPopular' => false]
        );
        Dish::updateOrCreate(
            ['name' => 'Napolitana 32cm', 'category_id' => 1],
            ['description' => 'Pelat, gauda, sunka, masline', 'isPopular' => false]
        );
        Dish::updateOrCreate(
            ['name' => 'Funghi 32cm', 'category_id' => 1],
            ['description' => 'Pelat, gauda, sampinjoni, masline', 'isPopular' => false]
        );
        Dish::updateOrCreate(
            ['name' => 'Margherita 32cm', 'category_id' => 1],
            ['description' => 'Pelat, mocarela, bosiljak', 'isPopular' => true]
        );
        Dish::updateOrCreate(
            ['name' => 'Quatro staggione 32cm', 'category_id' => 1],
            ['description' => 'Pelat, gauda, sunka, sampinjoni, jaje, paprika, kobasica, slanina, feferoni, masline', 'isPopular' => false]
        );
        Dish::updateOrCreate(
            ['name' => 'Quatro formaggi 32cm', 'category_id' => 1],
            ['description' => 'Pelat, gorgonzola, mocarela, ementaler, parmezan, masline', 'isPopular' => false]
        );
        Dish::updateOrCreate(
            ['name' => 'Vegeterijana 32cm', 'category_id' => 1],
            ['description' => 'Pelat, gauda, sampinjoni, jaje, paprika, feferoni, krastavac, paradajz, masline', 'isPopular' => false]
        );
        Dish::updateOrCreate(
            ['name' => 'Veganska pizza 32cm', 'category_id' => 1],
            ['description' => 'Pelat, sampinjoni, paprika, feferoni, krastavac, kukuruz, paradajz, masline', 'isPopular' => true]
        );
        Dish::updateOrCreate(
            ['name' => 'Capricciosa 50cm', 'category_id' => 4],
            ['description' => 'Pelat, gauda, sunka, sampinjoni, masline', 'isPopular' => true]
        );
        Dish::updateOrCreate(
            ['name' => 'Napolitana 50cm', 'category_id' => 4],
            ['description' => 'Pelat, gauda, sunka, masline', 'isPopular' => false]
        );
        Dish::updateOrCreate(
            ['name' => 'Funghi 50cm', 'category_id' => 4],
            ['description' => 'Pelat, gauda, sampinjoni, masline', 'isPopular' => false]
        );
        Dish::updateOrCreate(
            ['name' => 'Margherita 50cm', 'category_id' => 4],
            ['description' => 'Pelat, mocarela, bosiljak', 'isPopular' => false]
        );
        Dish::updateOrCreate(
            ['name' => 'Quattro staggione 50cm', 'category_id' => 4],
            ['description' => 'Pelat, gauda, sunka, sampinjoni, jaje, paprika, kobasica, slanina, feferoni, masline', 'isPopular' => true]
        );
        Dish::updateOrCreate(
            ['name' => 'Quattro formaggi 50cm', 'category_id' => 4],
            ['description' => 'Pelat, gorgonzola, mocarela, ementaler, parmezan, masline', 'isPopular' => false]
        );
        Dish::updateOrCreate(
            ['name' => 'Vegeterijana 50cm', 'category_id' => 4],
            ['description' => 'Pelat, gauda, sampinjoni, jaje, paprika, feferoni, krastavac, paradajz, masline', 'isPopular' => false]
        );
        Dish::updateOrCreate(
            ['name' => 'Veganska pizza 50cm', 'category_id' => 4],
            ['description' => 'Pelat, sampinjoni, paprika, feferoni, krastavac, kukuruz, paradajz, masline', 'isPopular' => false]
        );
        Dish::updateOrCreate(
            ['name' => 'Carbonara', 'category_id' => 2],
            ['description' => 'Panceta, nautralna pavlaka, jaje, zacini', 'isPopular' => true]
        );
        Dish::updateOrCreate(
            ['name' => 'Bolognese', 'category_id' => 2],
            ['description' => 'Sos od paradajza i mlevenog mesa, parmezan, zacini', 'isPopular' => true]
        );
        Dish::updateOrCreate(
            ['name' => 'Pesto genovese', 'category_id' => 2],
            ['description' => 'Pileci file, pesto sos, neutralna pavlaka, zacini', 'isPopular' => false]
        );
        Dish::updateOrCreate(
            ['name' => 'Quatrro formaggi', 'category_id' => 2],
            ['description' => 'Gorgonzola, ementaler, parmezan, gauda, zacini', 'isPopular' => false]
        );
        Dish::updateOrCreate(
            ['name' => 'Pasta di mare', 'category_id' => 2],
            ['description' => 'Plodovi mora, paradajz, crni luk, zacini', 'isPopular' => false]
        );
        Dish::updateOrCreate(
            ['name' => 'Cevapi', 'category_id' => 3],
            ['description' => 'Mesavina junetina i svinjetina 200g', 'isPopular' => false]
        );
        Dish::updateOrCreate(
            ['name' => 'Batak na zaru', 'category_id' => 3],
            ['description' => 'Svezi socni batak pecena na cumuru 200g', 'isPopular' => false]
        );
        Dish::updateOrCreate(
            ['name' => 'Cheeseburger', 'category_id' => 5],
            ['description' => '150g junetina, gauda, panceta, paradajz, burger sos, kiseli krastavcici', 'isPopular' => true]
        );
        Dish::updateOrCreate(
            ['name' => 'Chickenburger', 'category_id' => 5],
            ['description' => '150g pohovana piletina, mocarela, panceta, zelena salata, burger sos', 'isPopular' => false]
        );
        Dish::updateOrCreate(
            ['name' => 'Cezar salata', 'category_id' => 6],
            ['description' => 'Dresing, zelena salata, domaci kackavalj, piletina, panceta', 'isPopular' => false]
        );
        Dish::updateOrCreate(
            ['name' => 'Tuna salata', 'category_id' => 6],
            ['description' => 'Tunjevina, zelena salata, posni majonez, posni sir, masline, paradajz', 'isPopular' => false]
        );
        Dish::updateOrCreate(
            ['name' => 'Club sendvic', 'category_id' => 7],
            ['description' => 'Mocarela, sunka, jaje, paradajz, zelena salata, majonez, pomfrit', 'isPopular' => false]
        );
        Dish::updateOrCreate(
            ['name' => 'Posni sendvic', 'category_id' => 7],
            ['description' => 'Zelena salata, posni namaz, paradajz, posni kackavalj, tunjevina', 'isPopular' => false]
        );
        Dish::updateOrCreate(
            ['name' => 'Coca cola 0.5', 'category_id' => 8],
            ['description' => 'Mala', 'isPopular' => false]
        );
        Dish::updateOrCreate(
            ['name' => 'Coca cola 1.5', 'category_id' => 8],
            ['description' => 'Velika', 'isPopular' => false]
        );
        Dish::updateOrCreate(
            ['name' => 'Fanta 0.5', 'category_id' => 8],
            ['description' => 'Mala', 'isPopular' => false]
        );
        Dish::updateOrCreate(
            ['name' => 'Fanta 1.5', 'category_id' => 8],
            ['description' => 'Velika', 'isPopular' => false]
        );
        Dish::updateOrCreate(
            ['name' => 'Cheesecake', 'category_id' => 9],
            ['description' => 'Malina, plazma, slatka pavlaka', 'isPopular' => true]
        );
        Dish::updateOrCreate(
            ['name' => 'Tiramisu', 'category_id' => 9],
            ['description' => 'Kafa, slag, piskote, vanila', 'isPopular' => false]
        );
    }
}
