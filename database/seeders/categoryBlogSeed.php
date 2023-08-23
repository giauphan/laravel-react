<?php

namespace Database\Seeders;

use App\Http\Controllers\Admin\category;
use App\Models\CategoryPost;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class categoryBlogSeed extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        CategoryPost::create([
            'id' => 3,
            'lang' => 'vi',
            'ten' => 'Du lịch',
            'thuTu' => 2,
            'anHien' => 1,
        ]);

        CategoryPost::create([
            'id' => 4,
            'lang' => 'vi',
            'ten' => 'Khoa học',
            'thuTu' => 4,
            'anHien' => 1,
        ]);

        CategoryPost::create([
            'id' => 9,
            'lang' => 'vi',
            'ten' => 'Xã hội',
            'thuTu' => 3,
            'anHien' => 1,
        ]);

        CategoryPost::create([
            'id' => 12,
            'lang' => 'vi',
            'ten' => 'Sống đẹp',
            'thuTu' => 72,
            'anHien' => 1,
        ]);

        CategoryPost::create([
            'id' => 24,
            'lang' => 'vi',
            'ten' => 'Mẹo vặt',
            'thuTu' => 12,
            'anHien' => 1,
        ]);

        CategoryPost::create([
            'id' => 52,
            'lang' => 'en',
            'ten' => 'People',
            'thuTu' => 24,
            'anHien' => 1,
        ]);

        CategoryPost::create([
            'id' => 54,
            'lang' => 'en',
            'ten' => 'Education',
            'thuTu' => 54,
            'anHien' => 1,
        ]);

        CategoryPost::create([
            'id' => 69,
            'lang' => 'en',
            'ten' => 'Property News',
            'thuTu' => 71,
            'anHien' => 1,
        ]);

        CategoryPost::create([
            'id' => 71,
            'lang' => 'en',
            'ten' => 'Environment',
            'thuTu' => 69,
            'anHien' => 1,
        ]);

        CategoryPost::create([
            'id' => 72,
            'lang' => 'en',
            'ten' => 'Financial Markets',
            'thuTu' => 74,
            'anHien' => 1,
        ]);

        CategoryPost::create([
            'id' => 74,
            'lang' => 'en',
            'ten' => 'Tourism News',
            'thuTu' => 79,
            'anHien' => 1,
        ]);

        CategoryPost::create([
            'id' => 79,
            'lang' => 'vi',
            'ten' => 'Sức khỏe',
            'thuTu' => 52,
            'anHien' => 1,
        ]);

        CategoryPost::create([
            'id' => 85,
            'lang' => 'vi',
            'ten' => 'Sức khỏe 2',
            'thuTu' => 9,
            'anHien' => 1,
        ]);
    }
}
