<?php

use App\Http\Controllers\client\Blog;
use App\Http\Controllers\client\HomeController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/',[HomeController::class,'index'])->name('HomePage');
// Route::get('/blog', [Blog::class, 'index']);
Route::get('/blog/{id}', [Blog::class, 'BlogDescription'])->name('Blog.description');
Route::get('/category/{id}', [Blog::class, 'BlogCategory'])->name('Blog.BlogCategory');
Route::get('/te',function(){
    return view('footer_only');
});
//admin
Route::get('/dashboard', [DashBoardController::class,"index"])->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
