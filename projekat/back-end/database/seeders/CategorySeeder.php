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
            ['name' => 'Pizza 32cm',
            'picture' => 'category_pictures/smallpizza.png']
        );

        Category::updateOrCreate(
            ['name' => 'Paste'],
            ['name' => 'Paste',
            'picture' => 'category_pictures/pasta.png']
        );

        Category::updateOrCreate(
            ['name' => 'Rostilj'],
            ['name' => 'Rostilj',
            'picture' => 'category_pictures/rostilj.png']
        );

        Category::updateOrCreate(
            ['name' => 'Pizza 50cm'],
            ['name' => 'Pizza 50cm',
            'picture' => 'category_pictures/pizza.png']
        );

        Category::updateOrCreate(
            ['name' => 'Burgeri'],
            ['name' => 'Burgeri',
            'picture' => 'category_pictures/burger.png']
        );

        Category::updateOrCreate(
            ['name' => 'Obrok salate'],
            ['name' => 'Obrok salate',
            'picture' => 'category_pictures/salata.png']
        );

        Category::updateOrCreate(
            ['name' => 'Sendvici'],
            ['name' => 'Sendvici',
            'picture' => 'category_pictures/sendvic.png']
        );

        Category::updateOrCreate(
            ['name' => 'Pica'],
            ['name' => 'Pica',
            'picture' => 'category_pictures/pica.png']
        );

        Category::updateOrCreate(
            ['name' => 'Deserti'],
            ['name' => 'Deserti',
            'picture' => 'category_pictures/desert.png']
        );
    }
}
