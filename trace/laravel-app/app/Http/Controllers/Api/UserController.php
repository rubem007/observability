<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class UserController extends Controller
{


    public function index(Request $request)
    {
        $users = array("rdn", "laravel", "nodejs");

        return $users;
    }
}
