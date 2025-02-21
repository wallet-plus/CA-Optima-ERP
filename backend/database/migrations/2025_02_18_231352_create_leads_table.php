<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLeadsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('leads', function (Blueprint $table) {
            $table->id();
            $table->string('name'); // Name of the individual/company
            $table->string('contact_person')->nullable();
            $table->string('email')->unique();
            $table->string('phone_number')->nullable();
            $table->enum('business_type', ['Individual', 'LLP', 'Firm', 'Company', 'Trust', 'Non-Profit'])->nullable();
            $table->string('industry_type')->nullable();
            $table->string('source')->nullable(); // e.g. Referral, Website, etc.
            $table->foreignId('assigned_to')->nullable()->constrained('users')->onDelete('set null');

            // Additional fields
            $table->string('referred_by')->nullable(); // Who referred the lead
            $table->text('comments')->nullable(); // Notes and additional details

            // Lead-specific fields
            $table->enum('lead_stage', ['New', 'Contacted', 'Proposal Sent', 'Negotiation', 'Converted', 'Dropped'])->default('New');
            $table->decimal('expected_revenue', 15, 2)->nullable();
            $table->date('follow_up_date')->nullable();
            $table->integer('lead_score')->nullable();
            $table->date('conversion_date')->nullable(); // Date when a lead converts into a client

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
        Schema::dropIfExists('leads');
    }
}
