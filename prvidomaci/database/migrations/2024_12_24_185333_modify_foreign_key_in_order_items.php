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
        Schema::table('order_items', function (Blueprint $table) {
            $table->foreign('restaurant_id')->references('restaurant_id')->on('restaurant_dishes')->onDelete('cascade');
            $table->foreign('dish_id')->references('dish_id')->on('restaurant_dishes')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('order_items', function (Blueprint $table) {
            $table->dropForeign(['restaurant_id']);
            $table->dropForeign(['dish_id']);
        });
    }
};
