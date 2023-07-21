<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\BlogPost;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashBoardController extends Controller
{
    public function index()
    {
        $csrfToken = csrf_token();
        $blogPosts = BlogPost::join('loaitin', 'loaitin.id', '=', 'tin.idLT')
            ->select("tin.id as tinID", "tin.lang", "tieuDe", "tomTat", "urlHinh", "ngayDang", "noiDung", "idLT", "xem", "noiBat", "tin.anHien", "tags", "ten")
            ->paginate(8)->withQueryString();

        return Inertia::render('Dashboard', [
            'blog' => $blogPosts,
            'token' =>       $csrfToken
        ]);
    }
}
