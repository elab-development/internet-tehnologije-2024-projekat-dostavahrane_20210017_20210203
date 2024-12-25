<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class RestaurantDishResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public static $wrap = 'restaurant_dish';
    public function toArray($request)
    {
        //return parent::toArray($request);
        return [
            'restaurant' => [
                'id' => $this->restaurant->id,
                'name' => $this->restaurant->name,
                'address' => $this->restaurant->address,
                'phone' => $this->restaurant->phone,
                'description' => $this->restaurant->description

            ],
            'dish' => [
                'id' => $this->dish->id,
                'name' => $this->dish->name,
                'description' => $this->dish->description,
                'category' => $this->dish->category->name,
                'availability' => $this->dish->availability
            ],
            'price' => $this->price,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
