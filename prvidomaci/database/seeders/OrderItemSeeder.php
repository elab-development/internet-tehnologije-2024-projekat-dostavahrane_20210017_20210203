<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\OrderItem;

class OrderItemSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        OrderItem::updateOrCreate(
            ['order_id' => 1, 'dish_id' => 2],  // Svaka kombinacija order_id i dish_id
            ['restaurant_id' => 1, 'quantity' => 2, 'item_price' => 1800]
        );
        
        OrderItem::updateOrCreate(
            ['order_id' => 2, 'dish_id' => 5],  // Svaka kombinacija order_id i dish_id
            ['restaurant_id' => 2, 'quantity' => 1, 'item_price' => 850]
        );
        
        OrderItem::updateOrCreate(
            ['order_id' => 2, 'dish_id' => 14],  // Svaka kombinacija order_id i dish_id
            ['restaurant_id' => 2, 'quantity' => 1, 'item_price' => 1500]
        );
        
        OrderItem::updateOrCreate(
            ['order_id' => 3, 'dish_id' => 4],  // Svaka kombinacija order_id i dish_id
            ['restaurant_id' => 3, 'quantity' => 2, 'item_price' => 1840]
        );
        
        OrderItem::updateOrCreate(
            ['order_id' => 3, 'dish_id' => 8],  // Svaka kombinacija order_id i dish_id
            ['restaurant_id' => 3, 'quantity' => 1, 'item_price' => 1040]
        );
    }
}
