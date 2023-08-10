<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class ViewandLike extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'view:like';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {
      $view = session()->has('view') ? session('view') : 0;
      $like = session()->has('like') ? session('like') : 0;

      
    }
}
