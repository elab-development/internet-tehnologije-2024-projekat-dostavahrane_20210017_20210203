<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Dish;
use App\Models\Restaurant;
use App\Models\Category;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Dish>
 */
class DishFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
          'name' => $this->faker->randomElement([
    'Pizza Margherita',
    'Grilled Chicken',
    'Caesar Salad',
    'Pasta Bolognese',
    'Cheeseburger',
    'Vegetarian Pizza',
    'Sushi Rolls',
    'Peking Duck',
    'Spaghetti Carbonara',
    'Chicken Curry'
]),
            'description' => $this->faker->sentence(),  // Nasumičan opis jela
            'category_id' => Category::inRandomOrder()->take(10)->pluck('id')->random(),  // Nasumična kategorija (samo 10 kategorija)
            'availability' => $this->faker->boolean(80),
        ];
    }
}
