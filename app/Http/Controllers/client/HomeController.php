<?php

namespace App\Http\Controllers\client;

use App\Http\Controllers\Controller;
use App\Models\BlogPost;
use Illuminate\Http\Request;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $blogPosts = BlogPost::join('loaitin', 'loaitin.id', '=', 'tin.idLT')
            ->select('tin.id as tinID', 'tin.lang', 'tieuDe', 'tomTat', 'urlHinh', 'ngayDang', 'noiDung', 'tin.idLT', 'xem', 'noiBat', 'tin.anHien', 'tags', 'loaitin.ten')
            ->paginate(3)->withQueryString();
        $blogOutstand = BlogPost::join('loaitin', 'loaitin.id', '=', 'tin.idLT')
        ->select('tin.id as tinID', 'tin.lang', 'tieuDe', 'tomTat', 'urlHinh', 'ngayDang', 'noiDung', 'idLT', 'xem', 'noiBat', 'tin.anHien', 'tags', 'loaitin.ten')->where('noibat', 1)->orderBy('ngayDang', 'desc')->first();
        return Inertia::render('Welcome', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
            'blogPosts' => $blogPosts,
            'blogOutstand' => $blogOutstand
        ]);
    }
}
