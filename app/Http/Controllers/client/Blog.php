<?php

namespace App\Http\Controllers\client;

use App\Http\Controllers\Controller;
use App\Models\BlogPost;
use App\Models\CategoryPost;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class Blog extends Controller
{
    public function index()
    {
        $blogPosts = BlogPost::join('loaitin', "loaitin.id", "tin.idLT ")
            ->select("tin.id as tinID", "lang", "tieuDe", "tomTat", "urlHinh", "ngayDang", "noiDung", "idLT", "xem", "noiBat", "anHien", "tags", "loaitin.ten")
            ->limit(10)->get();

        return Inertia::render(
            'Blog',
            [
                'blogPosts' => $blogPosts
            ]
        );
    }
    public function BlogDescription($id)
    {
        $blogPosts = BlogPost::where('tin.id', $id)
            ->join('loaitin', 'loaitin.id', '=', 'tin.idLT')
            ->select("tin.id as tinID", "tin.lang", "tieuDe", "tomTat", "urlHinh", "ngayDang", "noiDung", "idLT", "xem", "noiBat", "tin.anHien", "tags", "ten")
            ->first();


        return Inertia::render(
            'BlogDescription',
            [
                'blogPosts' => $blogPosts
            ]
        );
    }

    public function BlogCategory($id)
    {
        $blogPosts = BlogPost::where('tin.idLT', $id)
            ->join('loaitin', 'loaitin.id', '=', 'tin.idLT')
            ->select("tin.id as tinID", "tin.lang", "tieuDe", "tomTat", "urlHinh", "ngayDang", "noiDung", "idLT", "xem", "noiBat", "tin.anHien", "tags", "ten")
            ->paginate(8)->withQueryString();;
        $category = CategoryPost::where('anhien', 1)->where('id', $id)->first();
    
        return Inertia::render(
            'BlogCategory',
            [
                'blogPosts' => $blogPosts,
                'categoryOne' => $category
            ]
        );
    }
}
