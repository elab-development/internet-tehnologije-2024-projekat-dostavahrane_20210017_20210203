<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Review extends Model
{
    use HasFactory;

    protected $fillable = [
        'order_id',
        'delivery_rating',
        'food_rating',
        'note',
    ];

    public function order()
    {
        return $this->belongsTo(Order::class);
    }
}
