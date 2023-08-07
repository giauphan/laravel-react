<?php

namespace App\Providers;

use App\Models\CategoryPost;
use Illuminate\Support\Facades\View;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        $category = CategoryPost::where('anhien', 1)->orderBy('thuTu', 'asc')->get();
        Inertia::share('category', $category);

    }
}
