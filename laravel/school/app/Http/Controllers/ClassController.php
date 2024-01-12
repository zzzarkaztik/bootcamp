<?php

namespace App\Http\Controllers;

use DB;

use App\Models\Classes;
use Illuminate\Http\Request;

class ClassController extends Controller
{
    public function index() {

        $classes = Classes::query()
            ->select('class_id', 'name', 'room', 'schedule')
            ->join('subjects', 'classes.subject_id', '=', 'subjects.subject_id')
            ->orderBy('class_id') 
            ->get();

        return view('classes', compact('classes'));
    }
}
