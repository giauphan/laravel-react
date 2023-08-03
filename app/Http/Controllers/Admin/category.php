<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\CategoryPost;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class category extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $csrfToken = csrf_token();
        return Inertia::render('Admin/Category', [
            'token' =>       $csrfToken
        ]);
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
    public function store()
    {
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
        $validator = Validator::make($request->all(), [
            'HiddenShow' => 'required|numeric',
            'lang' => 'required|string|max:255',
            'number' => 'required|numeric',
            'categoryName' => 'required'
        ]);
        if ($validator->fails()) {
            return back()->withErrors($validator)->withInput();
        }

        $data = [
            'ten' => $request->categoryName,
            'lang' => $request->lang,
            'thuTu' => $request->number,
            'anHien' => $request->HiddenShow
        ];
        $categoryUpdate = CategoryPost::findOrFail($id);
        $categoryUpdate->update($data);

        return  redirect()->route('category', [
            'success' => 'Blog created successfully.'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
