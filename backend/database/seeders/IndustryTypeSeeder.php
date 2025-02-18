<?php
namespace Database\Seeders;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class IndustryTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('industry_type')->insert([
            ['name' => 'Agriculture & Farming', 'status' => 'active', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['name' => 'Automotive', 'status' => 'active', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['name' => 'Aerospace & Defense', 'status' => 'active', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['name' => 'Banking & Finance', 'status' => 'active', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['name' => 'Construction & Infrastructure', 'status' => 'active', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['name' => 'Education & Training', 'status' => 'active', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['name' => 'E-commerce', 'status' => 'active', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['name' => 'Energy & Utilities', 'status' => 'active', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['name' => 'Food & Beverage', 'status' => 'active', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['name' => 'Healthcare & Life Sciences', 'status' => 'active', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['name' => 'Hospitality & Tourism', 'status' => 'active', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['name' => 'Information Technology (IT)', 'status' => 'active', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['name' => 'Media & Entertainment', 'status' => 'active', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['name' => 'Mining & Extraction', 'status' => 'active', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['name' => 'Non-Profit & NGOs', 'status' => 'active', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['name' => 'Pharmaceuticals & Biotech', 'status' => 'active', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['name' => 'Retail & Consumer Goods', 'status' => 'active', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['name' => 'Telecommunications', 'status' => 'active', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['name' => 'Transportation & Logistics', 'status' => 'active', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['name' => 'Textiles & Apparel', 'status' => 'active', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
        ]);
    }
}
