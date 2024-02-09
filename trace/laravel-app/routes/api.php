<?php

use App\Http\Controllers\Api\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Spatie\OpenTelemetry\Facades\Measure;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::get('/', function () {
    Measure::start('parent');
     echo "1234";
     Measure::start('child');
     echo "4321";
     Measure::stop('child');
    Measure::stop('parent');

    return response()->json([
        'success' => true,
    ]);
});

Route::get('/users', [UserController::class, 'index']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
