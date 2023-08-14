<?php

namespace App\Console\Commands;

use App\Models\BlogPost;
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
        // $ViewandLike = session('ViewandLike', []);
        // dd( $ViewandLike );
        // foreach ($ViewandLike as $item) {
        //     BlogPost::updateOrCreate(
        //         [
        //             'id' => $item['id'],
        //         ],
        //         [
        //             'xem' => $item['xem'],

        //         ]
        //     );
        // }
    }
}
