<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRestaurantCategoriesTable extends Migration
{
    public function up()
    {
        Schema::create('restaurant_categories', function (Blueprint $table) {
            
            $table->foreignId('restaurant_id')->constrained()->onDelete('cascade');
            $table->foreignId('category_id')->constrained()->onDelete('cascade');
            $table->timestamps();

            $table->unique(['restaurant_id', 'category_id']); // da ne može duplikata
        });
    }

    public function down()
    {
        Schema::dropIfExists('restaurant_categories');
    }
}