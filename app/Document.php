<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Document extends Model
{
    // make fields mass assignable
    protected $fillable = ['title', 'user_id', 'path'];

    function user()
    {
        return $this->belongsTo(User::class);
    }
}
