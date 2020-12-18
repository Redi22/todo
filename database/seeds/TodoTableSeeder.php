<?php

use Illuminate\Database\Seeder;
use App\Todo;
class TodoTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $todo = new Todo();
        $todo->title =" Some title";
        $todo->content = "Thus this that them there tho Thus this that them there tho  Thus this that them there tho Thus this that them there thoThus this that them there tho Thus this that them there tho";
        $todo->completed = false;
        $todo->save();

        $todo = new Todo();
        $todo->title =" another title";
        $todo->content = "Thus this that them there tho Thus this that them there tho  Thus this that them there tho Thus this that them there thoThus this that them there tho Thus this that them there tho";
        $todo->completed = false;
        $todo->save();

    }
}
