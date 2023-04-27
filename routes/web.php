<?php

use App\Http\Controllers\KategoriaController;
use App\Http\Controllers\ReceptController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/receptek',[ReceptController::class, 'index']);
Route::get('/receptByCategory',[ReceptController::class, 'filterByCategory']);
Route::post('/recept',[ReceptController::class, 'createRecept']);
Route::delete('/destroy/{id}',[ReceptController::class, 'destroy']);

Route::get('kategoriak',[KategoriaController::class, 'index']);