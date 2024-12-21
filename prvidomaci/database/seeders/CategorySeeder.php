<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Category;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        Category::create([
            'name' => 'Pizza 32cm',

        ]);

        
        Category::create([
            'name' => 'Paste',

        ]);

        
        Category::create([
            'name' => 'Rostilj',

        ]);

        
        Category::create([
            'name' => 'Pizza 50cm',

        ]);

        
        Category::create([
            'name' => 'Burgeri',

        ]);

        
        Category::create([
            'name' => 'Obrok salate',

        ]);

        
        Category::create([
            'name' => 'Sendvici',

        ]);

        
        Category::create([
            'name' => 'Pica',

        ]);

        
        Category::create([
            'name' => 'Deserti',

        ]);
    }
}
