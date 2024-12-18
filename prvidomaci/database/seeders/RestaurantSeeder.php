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
        

        Restaurant::truncate();

        Restaurant::create([
            'name' => 'Borneo',
            'email' => 'borneo@example.com',
            'address'=> 'Njegoseva',
            'phone' => '011333444',
            'description' => ' Najbolja picerija u Pancevu.'


        ]);

        Restaurant::create([
            'name' => 'Vetrenjaca',
            'email' => 'vetrenjaca@example.com',
            'address' => 'Tamiski kej',
            'phone' => '011222333',
            'description' => ' Najbolji restoran u Pancevu.'
        ]);

        Restaurant::create([
            'name' => 'Hilton',
            'email' => 'hilton@example.com',
            'address' => 'Beogradska ulica',
            'phone' => '013343555',
            'description' => ' Najbolji restoran u Beogradu.'
            
        ]);

        Restaurant::create([
            'name' => 'Poco loco',
            'email' => 'pocoloco@example.com',
            'address' => 'Brace jovanovica',
            'phone' => '013343777',
            'description' => 'Lep restoran sa velikim izborom hrane u Pancevu.'
        ]);

    }
}
