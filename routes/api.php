<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::namespace('App\Http\Controllers')->controller(AuthController::class)->middleware(['api' ])->prefix('auth')
    ->group(function ($router) {

        Route::post('login', 'login');
        Route::post('logout', 'logout');
        Route::post('refresh', 'refresh');
        Route::post('me', 'me');

        Route::group(['middleware' => 'auth:api'], function() {
            Route::group(['namespace' => 'Fruit', 'prefix' => 'fruits'], function() {
                Route::get('/', [\App\Http\Controllers\Fruit\IndexController::class, 'index']);
            });
        });



    });
Route::group(['namespace' => 'User', 'prefix' => 'users'], function() {
Route::post('/', [\App\Http\Controllers\User\StoreController::class, 'index']);
});




