<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Kategoria;
use App\Models\Recept;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ReceptController extends Controller
{
    public function index()
    {
        $receptek = Recept::all();
        foreach ($receptek as $recept) {
            $recept->kat_nev = Kategoria::find($recept->kat_id)->nev;
        }
        return $receptek;
    }

    public function filterByCategory(Request $request)
    {
        return DB::table('recepts')->where('kat_id', $request->kat_id)->get();
    }

    public function createRecept(Request $request)
    {
       
            $recept = new Recept();
            $recept->nev = $request->nev;
            $recept->kat_id = DB::table('kategorias')->where('nev', $request->kategoria)->first()->id;
            $recept->kep_eleresi_ut = $request->kep_eleresi_ut;
            $recept->leiras = $request->leiras;
            $recept->datum = is_null($request->datum) ? Carbon::now() : $request->datum;
            $recept->save();
            
        
    }

    public function destroy($id)
    {
        try {
            Recept::find($id)->delete();
            return response(['message'=>'sikeres törlés'],200);
        } catch (\Throwable $th) {
            return response(['message'=>'sikertelen törlés'],500)   ;
        }
    }
}
