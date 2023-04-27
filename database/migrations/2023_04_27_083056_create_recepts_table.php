<?php

use App\Models\Recept;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('recepts', function (Blueprint $table) {
            $table->id();
            $table->string('nev');
            $table->foreignId('kat_id')->references('id')->on('kategorias');
            $table->string('kep_eleresi_ut');
            $table->string('leiras');
            $table->date('datum')->nullable(); //CONTROLLERBEN KAPJA MEG A DEFAULTOT
        });

        Recept::create(['nev'=>'Lasagne','kat_id'=>1,'kep_eleresi_ut'=>'','leiras'=>'finom']);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('recepts');
    }
};
