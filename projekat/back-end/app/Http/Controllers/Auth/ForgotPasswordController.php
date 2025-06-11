<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Password;
use App\Notifications\CustomResetPassword;
use App\Models\User;

class ForgotPasswordController extends Controller
{
    public function sendResetLinkEmail(Request $request)
{
    $request->validate(['email' => 'required|email']);

    $user = User::where('email', $request->email)->first();

    if (!$user) {
        return response()->json(['message' => 'Korisnik sa ovom email adresom ne postoji.'], 404);
    }

    $token = Password::createToken($user);

    $user->notify(new CustomResetPassword($token));

    return response()->json(['message' => 'Link za resetovanje lozinke je poslat.']);
}
}
