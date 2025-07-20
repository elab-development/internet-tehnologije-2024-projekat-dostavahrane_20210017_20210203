<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Restaurant;

class RestaurantSeeder extends Seeder
{
    
    /**
     * Run the database seeds.
     */
    public function run(): void
{
    Restaurant::updateOrCreate(
        ['email' => 'borneo@example.com'],
        [
            'name' => 'Borneo',
            'address' => 'Njegoseva',
            'phone' => '011333444',
            'description' => 'Najbolja picerija u Pancevu.',
            'latitude' => 44.871072,
            'longitude' => 20.642723,
            'picture' => 'restaurant_pictures/borneopica.jpg'
        ]
    );

    Restaurant::updateOrCreate(
        ['email' => 'vetrenjaca@example.com'],
        [
            'name' => 'Vetrenjaca',
            'address' => 'Tamiski kej',
            'phone' => '011222333',
            'description' => 'Najbolji restoran u Pancevu.',
            'latitude' => 44.8690053,
            'longitude' => 20.633523,
            'picture' => 'restaurant_pictures/karadjordjeva.jpg'

        ]
    );

    Restaurant::updateOrCreate(
        ['email' => 'hilton@example.com'],
        [
            'name' => 'Hilton',
            'address' => 'Beogradska ulica',
            'phone' => '013343555',
            'description' => 'Najbolji restoran u Beogradu.',
            'latitude' => 44.8040303,
            'longitude' => 20.4635937,
            'picture' => 'restaurant_pictures/hiltonbiftek.jpg'
        ]
    );

    Restaurant::updateOrCreate(
        ['email' => 'pocoloco@example.com'],
        [
            'name' => 'Poco loco',
            'address' => 'Brace jovanovica',
            'phone' => '013343777',
            'description' => 'Lep restoran sa velikim izborom hrane u Pancevu.',
            'latitude' => 44.8715112,
            'longitude' => 20.6351265,
            'picture' => 'restaurant_pictures/pasta.jpg'
        ]
    );
}
}
