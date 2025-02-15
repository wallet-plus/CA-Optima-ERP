<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Company;
use Illuminate\Http\Request;

class CompanyController extends Controller
{
    /**
     * Display a listing of companies.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $companies = Company::all();
        return response()->json($companies);
    }

    /**
     * Store a newly created company in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        // Validate the request data
        $validatedData = $request->validate([
            'name'                => 'required|string|max:255',
            'address'             => 'required|string',
            'city'                => 'nullable|string|max:100',
            'state'               => 'nullable|string|max:100',
            'postal_code'         => 'nullable|string|max:20',
            'country'             => 'nullable|string|max:100',
            'email'               => 'required|email|unique:company,email',
            'mobile_number'       => 'required|string|max:20',
            'telephone'           => 'nullable|string|max:20',
            'website_url'         => 'nullable|url',
            'registration_number' => 'nullable|string|max:100|unique:company,registration_number',
            'tax_id'              => 'nullable|string|max:100|unique:company,tax_id',
            'industry'            => 'nullable|string|max:100',
            'logo_url'            => 'nullable|url',
            'established_date'    => 'nullable|date',
            'description'         => 'nullable|string',
            'linkedin_url'        => 'nullable|url',
            'facebook_url'        => 'nullable|url',
            'twitter_url'         => 'nullable|url',
            'status'              => 'sometimes|in:Active,Inactive',
        ]);

        $company = Company::create($validatedData);
        return response()->json($company, 201);
    }

    /**
     * Display the specified company.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        $company = Company::findOrFail($id);
        return response()->json($company);
    }

    /**
     * Update the specified company in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, $id)
    {
        $company = Company::findOrFail($id);

        // Validate the request data
        $validatedData = $request->validate([
            'name'                => 'sometimes|required|string|max:255',
            'address'             => 'sometimes|required|string',
            'city'                => 'nullable|string|max:100',
            'state'               => 'nullable|string|max:100',
            'postal_code'         => 'nullable|string|max:20',
            'country'             => 'nullable|string|max:100',
            'email'               => 'sometimes|required|email|unique:company,email,' . $company->id,
            'mobile_number'       => 'sometimes|required|string|max:20',
            'telephone'           => 'nullable|string|max:20',
            'website_url'         => 'nullable|url',
            'registration_number' => 'nullable|string|max:100|unique:company,registration_number,' . $company->id,
            'tax_id'              => 'nullable|string|max:100|unique:company,tax_id,' . $company->id,
            'industry'            => 'nullable|string|max:100',
            'logo_url'            => 'nullable|url',
            'established_date'    => 'nullable|date',
            'description'         => 'nullable|string',
            'linkedin_url'        => 'nullable|url',
            'facebook_url'        => 'nullable|url',
            'twitter_url'         => 'nullable|url',
            'status'              => 'sometimes|in:Active,Inactive',
        ]);

        $company->update($validatedData);
        return response()->json($company);
    }

    /**
     * Remove the specified company from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {
        $company = Company::findOrFail($id);
        $company->delete();
        return response()->json(null, 204);
    }
}
