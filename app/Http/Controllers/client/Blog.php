<?php

namespace App\Http\Controllers\client;

use App\Http\Controllers\Controller;
use App\Models\BlogPost;
use App\Models\CategoryPost;
use App\Models\Comment;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class Blog extends Controller
{
    public function index()
    {
        $blogPosts = BlogPost::join('loaitin', 'loaitin.id', '=', 'tin.idLT')
            ->select("tin.id as tinID", "tin.lang", "tieuDe", "tomTat", "urlHinh", "ngayDang", "noiDung", "idLT", "xem", "noiBat", "tin.anHien", "tags", "ten")
            ->paginate(8)->withQueryString();
        return Inertia::render(
            'Blog',
            [
                'blogPosts' => $blogPosts
            ]
        );
    }
    public function BlogDescription(BlogPost $blog)
    {
        // dd($blog->id);
        $ViewandLike = session('ViewandLike', []);

        if (isset($ViewandLike[$blog->id])) {
            // Increment the xem if the blog is already in the array
            $ViewandLike[$blog->id]['xem']++;
        } else {
            // Add the blog to the array with xem of 1
            $ViewandLike[$blog->id] = [
                'id' => $blog->id,
                'xem' => 1,
            ];
        }
        foreach ($ViewandLike as $item) {
            BlogPost::updateOrCreate(
                [
                    'id' => $item['id'],
                ],
                [
                    'xem' => $item['xem'],

                ]
            );
        }
        session(['ViewandLike' => $ViewandLike]); 

        $comments = Comment::where('idTin', $blog->id)
            ->whereNull('parent_id')
            ->with('replies')
            ->get();
        $csrfToken = csrf_token();
        $blogPosts = BlogPost::where('tin.id', $blog->id)
            ->join('loaitin', 'loaitin.id', '=', 'tin.idLT')
            ->select("tin.id as tinID", "tin.lang", "tieuDe", "tomTat", "urlHinh", "ngayDang", "noiDung", "idLT", "xem", "noiBat", "tin.anHien", "tags", "ten")
            ->first();
        return Inertia::render(
            'BlogDescription',
            [
                'token' =>       $csrfToken,
                'blogPosts' => $blogPosts,
                'comment' => $comments,
                'blogid' => $blog->id,
                'ViewandLike' =>   $ViewandLike[$blog->id]['xem']
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
