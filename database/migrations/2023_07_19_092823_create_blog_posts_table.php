<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     * `id`, `lang`, `tieuDe`, `tomTat`, `urlHinh`, `ngayDang`, `noiDung`, `idLT`, `xem`, `noiBat`, `anHien`, `tags`
     */
    public function up(): void
    {
        Schema::create('tin', function (Blueprint $table) {
            $table->id();
            $table->string('lang')->default('vi');
            $table->string('tieuDe');
            $table->string('tomTat')->nullable();
            $table->string('urlHinh');
            $table->string('ngayDang');
            $table->longText('noiDung');
            $table->bigInteger('idLT');
            $table->integer('xem')->default(0);
            $table->string('noiBat')->default(0);
            $table->integer('anHien')->default(1);
            $table->string('tags')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tin');
    }
};
