<?php
namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    /**
     * Get all users.
     */
    public function index(): JsonResponse
    {
        $users = User::all();
        return response()->json(['success' => true, 'data' => $users], 200);
    }

    /**
     * Store a new user.
     */
    public function store(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'gender' => 'required|in:Male,Female,Other',
            'date_of_birth' => 'required|date',
            'blood_group' => 'nullable|string|max:5',
            'marital_status' => 'required|in:Single,Married,Divorced,Widowed',
            'anniversary_date' => 'nullable|date',
            'guardian_name' => 'nullable|string|max:255',
            'nationality' => 'nullable|string|max:100',
            'religion' => 'nullable|string|max:100',
            'profile_picture' => 'nullable|string|max:255',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:6',
        ]);

        if ($validator->fails()) {
            return response()->json(['success' => false, 'errors' => $validator->errors()], 422);
        }

        $user = User::create([
            'name' => $request->name,
            'gender' => $request->gender,
            'date_of_birth' => $request->date_of_birth,
            'blood_group' => $request->blood_group,
            'marital_status' => $request->marital_status,
            'anniversary_date' => $request->anniversary_date,
            'guardian_name' => $request->guardian_name,
            'nationality' => $request->nationality ?? 'Indian',
            'religion' => $request->religion,
            'profile_picture' => $request->profile_picture,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        return response()->json(['success' => true, 'message' => 'User created successfully', 'data' => $user], 201);
    }

    /**
     * Get a specific user by ID.
     */
    public function show($id): JsonResponse
    {
        $user = User::find($id);

        if (!$user) {
            return response()->json(['success' => false, 'message' => 'User not found'], 404);
        }

        return response()->json(['success' => true, 'data' => $user], 200);
    }

    /**
     * Update an existing user.
     */
    public function update(Request $request, $id): JsonResponse
    {
        $user = User::find($id);

        if (!$user) {
            return response()->json(['success' => false, 'message' => 'User not found'], 404);
        }

        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'gender' => 'required|in:Male,Female,Other',
            'date_of_birth' => 'required|date',
            'blood_group' => 'nullable|string|max:5',
            'marital_status' => 'required|in:Single,Married,Divorced,Widowed',
            'anniversary_date' => 'nullable|date',
            'guardian_name' => 'nullable|string|max:255',
            'nationality' => 'nullable|string|max:100',
            'religion' => 'nullable|string|max:100',
            'profile_picture' => 'nullable|string|max:255',
            'email' => 'required|email|unique:users,email,' . $id,
        ]);

        if ($validator->fails()) {
            return response()->json(['success' => false, 'errors' => $validator->errors()], 422);
        }

        $user->update($request->all());

        return response()->json(['success' => true, 'message' => 'User updated successfully', 'data' => $user], 200);
    }

    /**
     * Delete a user.
     */
    public function destroy($id): JsonResponse
    {
        $user = User::find($id);

        if (!$user) {
            return response()->json(['success' => false, 'message' => 'User not found'], 404);
        }

        $user->delete();

        return response()->json(['success' => true, 'message' => 'User deleted successfully'], 200);
    }
}
