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

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/documents', 'DocumentsController@index');
Route::post('/documents', 'DocumentsController@postDocument');

//Route::group(['middleware' => ['auth'], 'prefix' => 'documents'],
//    function () {
//        Route::get('/', 'DocumentsController@index')->name('getDocuments');
//        Route::post('/', 'DocumentsController@post')->name('postDocument');
//    }
//);
