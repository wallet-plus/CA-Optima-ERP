<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    use HasFactory;

    protected $table = 'user'; // specify the singular table name

    protected $fillable = [
        'name',
        'id_company',
        'id_business_unit',
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
