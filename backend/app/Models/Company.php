<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    use HasFactory;

    protected $table = 'company'; // specify the singular table name

    protected $fillable = [
        'name',
        'address',
        'city',
        'state',
        'postal_code',
        'country',
        'email',
        'mobile_number',
        'telephone',
        'website_url',
        'registration_number',
        'tax_id',
        'industry',
        'logo_url',
        'established_date',
        'description',
        'linkedin_url',
        'facebook_url',
        'twitter_url',
        'status',
    ];
}
