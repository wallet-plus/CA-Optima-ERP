<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController; 

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});


// User Page Route
Route::prefix('users')->group(function () {
    Route::get('/', [UserController::class, 'index']); // Get all users
    Route::post('/', [UserController::class, 'store']); // Create user
    Route::get('/{id}', [UserController::class, 'show']); // Get user by ID
    Route::put('/{id}', [UserController::class, 'update']); // Update user
    Route::delete('/{id}', [UserController::class, 'destroy']); // Delete user
});