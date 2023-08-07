<?php

namespace App\Providers;

// use Illuminate\Support\Facades\Gate;

use Illuminate\Auth\Notifications\VerifyEmail;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\App;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The model to policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        //
    ];

    /**
     * Register any authentication / authorization services.
     */
    public function boot(): void
    {
        VerifyEmail::toMailUsing(function (object $notifiable, string $url) {
            App::setLocale('vi'); // Set the locale to Vietnamese
            return (new MailMessage)
                ->subject('xác nhận địa chỉ email')
                ->line('Nhấp vào nút bên dưới để xác minh địa chỉ email của bạn.')
                ->action('xác nhận địa chỉ email', $url);
        });
    }
}
