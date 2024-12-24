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
        ['email' => 'borneo@example.com'], // Jedinstveni ključ za identifikaciju
        [
            'name' => 'Borneo',
            'address' => 'Njegoseva',
            'phone' => '011333444',
            'description' => 'Najbolja picerija u Pancevu.'
        ]
    );

    Restaurant::updateOrCreate(
        ['email' => 'vetrenjaca@example.com'], // Jedinstveni ključ za identifikaciju
        [
            'name' => 'Vetrenjaca',
            'address' => 'Tamiski kej',
            'phone' => '011222333',
            'description' => 'Najbolji restoran u Pancevu.'
        ]
    );

    Restaurant::updateOrCreate(
        ['email' => 'hilton@example.com'], // Jedinstveni ključ za identifikaciju
        [
            'name' => 'Hilton',
            'address' => 'Beogradska ulica',
            'phone' => '013343555',
            'description' => 'Najbolji restoran u Beogradu.'
        ]
    );

    Restaurant::updateOrCreate(
        ['email' => 'pocoloco@example.com'], // Jedinstveni ključ za identifikaciju
        [
            'name' => 'Poco loco',
            'address' => 'Brace jovanovica',
            'phone' => '013343777',
            'description' => 'Lep restoran sa velikim izborom hrane u Pancevu.'
        ]
    );
}
}
