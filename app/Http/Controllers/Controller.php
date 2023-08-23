<?php

namespace App\Http\Controllers;

use App\Models\CategoryPost;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Inertia\Inertia;

class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;
    // public function __construct(){
    //     $category = CategoryPost::where('anhien', 1)->orderBy('thuTu', 'asc')->get();
    //     Inertia::share('category', $category);
    // }
}
