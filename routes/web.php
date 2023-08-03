<?php

use App\Http\Controllers\Admin\BlogPost;
use App\Http\Controllers\Admin\category;
use App\Http\Controllers\Admin\DashBoardController;
use App\Http\Controllers\client\Blog;
use App\Http\Controllers\client\HomeController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

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

Route::get('/', [HomeController::class, 'index'])->name('HomePage');
// Route::get('/blog', [Blog::class, 'index']);
Route::get('/blog/{id}', [Blog::class, 'BlogDescription'])->name('Blog.description');
Route::get('/category/{id}', [Blog::class, 'BlogCategory'])->name('Blog.BlogCategory');
Route::get('/te', function () {
    return view('footer_only');
});

//admin
Route::middleware(['auth', 'verified', UsersRole::class . ':1'])->group(function () {
    Route::prefix('/admin')->group(function () {
        Route::get('/', [DashBoardController::class, "index"])->name('dashboard');
        // Route::get('/dashboard', [DashBoardController::class, "index"])->name('dashboard');
        Route::post('/post/blog', [BlogPost::class, "store"])->name('blog.add');
        Route::put('/post/blog/{id}', [BlogPost::class, "update"])->name('blog.update');
        Route::get('/category', [category::class, "index"])->name('category');
        Route::put('/category/{id}', [category::class, "update"])->name('category.update');
    });
});

Route::get('/blog/destroy/{id}', [BlogPost::class, "destroy"])->middleware('auth')->name('destroy');
Route::middleware('auth')->group(function () {

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
