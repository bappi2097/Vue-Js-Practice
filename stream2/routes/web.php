<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('statuses', 'StatusController@index')->name('index');

Route::post('statuses', 'StatusController@store')->name('store');
