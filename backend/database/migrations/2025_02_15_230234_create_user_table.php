<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::dropIfExists('user');

        Schema::create('user', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->enum('gender', ['Male', 'Female', 'Other']);
            $table->date('date_of_birth');
            $table->string('blood_group')->nullable();
            $table->enum('marital_status', ['Single', 'Married', 'Divorced', 'Widowed']);
            $table->date('anniversary_date')->nullable();
            $table->string('guardian_name')->nullable();
            $table->string('nationality')->default('Indian');
            $table->string('religion')->nullable();
            $table->string('profile_picture')->nullable();
            $table->string('email')->unique();
            $table->string('password');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user');
    }
}
