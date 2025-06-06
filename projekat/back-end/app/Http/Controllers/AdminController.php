<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Attributes\Middleware;

class AdminController extends Controller
{
     public function index()
    {
        return response()->json([
            'message' => 'Dobrodošli, admin!',
            'adminTools' => ['Upravljanje korisnicima', 'Pregled porudžbina', 'Upravljanje jelima']
        ]);
    }
}
