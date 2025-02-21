<?php
use Illuminate\Database\Seeder;
use Database\Seeders\EntityTypeSeeder;
use Database\Seeders\IndustryTypeSeeder;

class DatabaseSeeder extends Seeder
{
    public function run()
    {
        $this->call([
            EntityTypeSeeder::class,
            IndustryTypeSeeder::class,
        ]);
    }
}
