<?php

use Illuminate\Support\Facades\Route;


Route::get('/', function () {
    return view('welcome');
});
Route::get('skills', function () {
    return ['Laravel', 'Vue', "JS", "tooling"];
});
