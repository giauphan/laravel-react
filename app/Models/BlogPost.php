<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BlogPost extends Model
{
    use HasFactory;
    protected $table = "tin";
    protected $fillable = ['lang', 'tieuDe', 'tomTat', 'urlHinh', 'ngayDang', 'noiDung', 'idLT', 'xem', 'noiBat', 'anHien', 'tags'];
}
