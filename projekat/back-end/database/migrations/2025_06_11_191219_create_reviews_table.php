<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('reviews', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('order_id');
            $table->tinyInteger('delivery_rating')->unsigned();
            $table->tinyInteger('food_rating')->unsigned();
            $table->text('note')->nullable();
            $table->timestamps();

            $table->foreign('order_id')->references('id')->on('orders')->onDelete('cascade');
            $table->unique('order_id'); 
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('reviews');
    }
};

