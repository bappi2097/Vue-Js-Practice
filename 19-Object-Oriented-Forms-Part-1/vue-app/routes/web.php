<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'ProjectController@create')->name('create');
Route::get('/projectsName', 'ProjectController@index')->name('projects.name');
Route::post('/projects', 'ProjectController@store')->name('project.store');
