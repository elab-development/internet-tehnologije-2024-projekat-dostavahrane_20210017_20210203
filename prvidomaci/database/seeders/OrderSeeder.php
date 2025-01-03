<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Order;

class OrderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Order::updateOrCreate(
            ['user_id' => 3], 
            ['total_price' => 1800, 'delivery_address' => 'Kikindska 9/9']
        );
        
        Order::updateOrCreate(
            ['user_id' => 4],
            ['total_price' => 2350, 'delivery_address' => 'Savska 6']
        );
        
        Order::updateOrCreate(
            ['user_id' => 6],
            ['total_price' => 2880, 'delivery_address' => 'Brace Jovanovica 92/3']
        );
    }
}
