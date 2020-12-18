<?php

use Illuminate\Http\Request;
use App\Http\Controllers\TodoController;
use App\Todo;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get("todos" , function() {
    // If the Content-Type and Accept headers are set to 'application/json', 
    // this will return a JSON structure. This will be cleaned up later.
    return Todo::all();
});
Route::post("todos" , [TodoController::class , 'create']);
Route::get('todos/{title}', function($title) {
    return Todo::where('title','LIKE','%'.$title.'%')->get();
});

Route::put('todos/{id}', function(Request $request, $id) {
    $todo = Todo::findOrFail($id);
    $todo->update($request->all());
    return $todo;
});