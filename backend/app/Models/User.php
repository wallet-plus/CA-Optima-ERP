<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    protected $fillable = [
        'name',
        'gender',
        'date_of_birth',
        'blood_group',
        'marital_status',
        'anniversary_date',
        'guardian_name',
        'nationality',
        'religion',
        'profile_picture',
        'email',
        'password',
    ];

    protected $hidden = [
        'password',
    ];
}
