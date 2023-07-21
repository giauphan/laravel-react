<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\BlogPost as ModelsBlogPost;
use Illuminate\Http\Request;

class BlogPost extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
      
        $request->validate([
            'title' => 'required',
            'content' => 'required',
            'hinh' => 'required',
            'tomtat' => 'required',
        ]);

        $data = [
            'tieuDe'=>$request->title,
             'tomTat'=>$request->tomtat,
              'urlHinh'=>$request->hinh, 
              'ngayDang'=>now() , 
              'noiDung'=>$request->content,
               'idLT'=>3,
        ];

        ModelsBlogPost::create($data);

        return redirect()->route('dashboard')
            ->with('success', 'Blog created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
