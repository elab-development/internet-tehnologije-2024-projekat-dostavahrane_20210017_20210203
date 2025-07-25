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
        Schema::table('restaurants', function (Blueprint $table) {
        $table->string('picture')->nullable()->after('description');
    });

    Schema::table('categories', function (Blueprint $table) {
        $table->string('picture')->nullable()->after('name');
    });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('restaurants', function (Blueprint $table) {
        $table->dropColumn('picture');
    });

    Schema::table('categories', function (Blueprint $table) {
        $table->dropColumn('picture');
    });
    }
};
