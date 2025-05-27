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
        Category::updateOrCreate(
            ['name' => 'Pizza 32cm'],
            ['name' => 'Pizza 32cm']
        );

        Category::updateOrCreate(
            ['name' => 'Paste'],
            ['name' => 'Paste']
        );

        Category::updateOrCreate(
            ['name' => 'Rostilj'],
            ['name' => 'Rostilj']
        );

        Category::updateOrCreate(
            ['name' => 'Pizza 50cm'],
            ['name' => 'Pizza 50cm']
        );

        Category::updateOrCreate(
            ['name' => 'Burgeri'],
            ['name' => 'Burgeri']
        );

        Category::updateOrCreate(
            ['name' => 'Obrok salate'],
            ['name' => 'Obrok salate']
        );

        Category::updateOrCreate(
            ['name' => 'Sendvici'],
            ['name' => 'Sendvici']
        );

        Category::updateOrCreate(
            ['name' => 'Pica'],
            ['name' => 'Pica']
        );

        Category::updateOrCreate(
            ['name' => 'Deserti'],
            ['name' => 'Deserti']
        );
    }
}
