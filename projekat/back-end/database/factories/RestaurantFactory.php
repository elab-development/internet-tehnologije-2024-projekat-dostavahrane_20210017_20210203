<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Restaurant>
 */
class RestaurantFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
           'name' => $this->faker->company(),  // Nasumičan naziv restorana (koristi se kao ime firme)
            'email' => $this->faker->unique()->safeEmail(),  // Nasumičan jedinstveni email
            'address' => $this->faker->address(),  // Nasumična adresa
            'phone' => $this->faker->phoneNumber(),  // Nasumičan broj telefona
            'description' => $this->faker->paragraph(),
        ];
    }
}
