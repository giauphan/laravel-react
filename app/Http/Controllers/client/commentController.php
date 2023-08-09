<?php

namespace App\Http\Controllers\client;

use App\Http\Controllers\Controller;
use App\Http\Requests\comment;
use App\Models\Comment as ModelsComment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class commentController extends Controller
{
    public function index()
    {
        $comments = ModelsComment::whereNull('parent_id')->with('replies')->get();
        return Inertia::render('comments.index', compact('comments'));
    }

    public function store(comment $request)
    {
        $validator = Validator::make($request->all(), [
            'content' => 'required',
            'Blogid' => 'required',
        ]);

        if ($validator->fails()) {
            return back()->withErrors($validator)->withInput();
        }
        // dd($request->input('parent_id'));
        $comment = new ModelsComment();
        $comment->parent_id =$request->input('parent_id');
        $comment->email = $request->user()->email;
        $comment->hoTen = $request->user()->name;
        $comment->ngayDang = now();
        $comment->noiDung = $request->input('content');
        $comment->idTin = $request->input('Blogid'); // Change 'idLT' to 'idTin'
        $comment->save();

        return redirect()->back();
    }
}
