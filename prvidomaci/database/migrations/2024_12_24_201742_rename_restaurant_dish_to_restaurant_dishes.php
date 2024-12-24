<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('restaurant_dishes', function (Blueprint $table) {
            Schema::rename('restaurant_dish', 'restaurant_dishes');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('restaurant_dishes', function (Blueprint $table) {
            Schema::rename('restaurant_dishes', 'restaurant_dish');
        });
    }
};
