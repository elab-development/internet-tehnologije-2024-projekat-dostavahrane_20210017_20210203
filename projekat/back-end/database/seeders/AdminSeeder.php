<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::updateOrCreate(
            ['email' => 'admin123@email.com'],
            [
                'username' => 'admin',
                'email' => 'admin123@email.com',
                'password' => Hash::make('Adm!n12345*'),
                'role' => 'admin',
            ]
        );
    }
}
