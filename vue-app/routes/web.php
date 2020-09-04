<?php

use Illuminate\Support\Facades\Route;


Route::get('/', function () {
    return view('welcome');
});

Route::get('skills', function () {
    return ['Laravel', 'Vue', "JS", "tooling"];
});

Route::get('show', 'ProjectController@create')->name('show');

Route::post('create', 'ProjectController@store')->name('create');

Route::get('projects', 'ProjectController@getProjects');
