<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Auth;
use App\Models\Order;

class ExportController extends Controller
{
    public function exportToCsv()
    {

    $user = Auth::user();
    $orders = Order::where('user_id', $user->id, 'restaurant')->get();

    $filename = "orders.csv";
    header('Content-Type: text/csv');
    header('Content-Disposition: attachment; filename="' . $filename . '"');

    $output = fopen('php://output', 'w');

    fputcsv($output, ['Order ID', 'User', 'Restaurant', 'Total Price', 'Delivery Address', 'Created At']);

    foreach ($orders as $order) {
        fputcsv($output, [
            $order->id,
            $order->user->username ?? 'N/A',
            $order->restaurant->name ?? 'N/A',
            $order->total_price,
            $order->delivery_address,
            $order->created_at,
        ]);
    }

    fclose($output);

    exit; 
}
}
