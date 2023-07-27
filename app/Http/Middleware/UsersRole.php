<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class UsersRole
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, ...$roles)
    {
        $user = $request->user();
        if ($user && in_array($user->role, $roles)) {
            return $next($request);
        }
        if ($request->routeIs('login')) {
            // Handle unauthorized access differently, such as showing an error message or redirecting to another page
            return $next($request);
        }
        return redirect()->route('login');
    }
}
