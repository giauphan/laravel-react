<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CategoryPost extends Model
{
    use HasFactory;
    protected $table = "loaitin";
    protected $fillable = [ "lang", "ten", "thuTu", "anHien"];

}
