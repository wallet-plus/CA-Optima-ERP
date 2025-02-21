<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Company;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use Illuminate\Http\Response;

class AuthController extends Controller
{
    /**
     * User Registration
     */
    public function register(Request $request)
    {

        $validatedData = $request->validate([
            'accountType' => 'required|in:individual,organization',
            'email' => 'required|email|unique:user',
            'password' => 'required|min:6',
            'companyName' => 'nullable|string|required_if:accountType,organization',
        ]);

        if (User::where('email', $validatedData['email'])->exists()) {
            return response()->json([
                'message' => 'Email already exists'
            ], Response::HTTP_OK); // 409 Conflict
        }

        if ($validatedData['accountType'] === 'individual') {


            // Create a user
            $user = User::create([
                'email' => $validatedData['email'],
                'password' => Hash::make($validatedData['password']),
            ]);

            return response()->json([
                'message' => 'Individual user registered successfully',
                'user' => $user
            ], Response::HTTP_CREATED);
        }

        if ($validatedData['accountType'] === 'organization') {

            $company = Company::create([
                'name' => $validatedData['companyName'],
            ]);
    
            $user = User::create([
                'email' => $validatedData['email'],
                'password' => Hash::make($validatedData['password']),
                'id_company' => $company->id, 
            ]);
    
            return response()->json([
                'message' => 'Organization user registered successfully',
                'user' => $user,
                'company' => $company
            ], Response::HTTP_CREATED);
        }
    }

    /**
     * User Login
     */
    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        if (!Auth::attempt($credentials)) {
            return response()->json(['message' => 'Invalid credentials'], Response::HTTP_UNAUTHORIZED);
        }

        $user = Auth::user();
        $token = $user->createToken('authToken')->plainTextToken;

        return response()->json(['message' => 'Login successful', 'token' => $token, 'user' => $user], Response::HTTP_OK);
    }

    /**
     * Forgot Password - Sends Reset Link
     */
    public function forgotPassword(Request $request)
    {
        $request->validate(['email' => 'required|email']);

        $status = Password::sendResetLink($request->only('email'));

        return $status === Password::RESET_LINK_SENT
            ? response()->json(['message' => 'Reset link sent'], Response::HTTP_OK)
            : response()->json(['message' => 'Unable to send reset link'], Response::HTTP_BAD_REQUEST);
    }

    /**
     * Reset Password
     */
    public function resetPassword(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'token' => 'required',
            'password' => 'required|min:6|confirmed',
        ]);

        $status = Password::reset(
            $request->only('email', 'password', 'password_confirmation', 'token'),
            function ($user, $password) {
                $user->forceFill([
                    'password' => Hash::make($password)
                ])->save();
            }
        );

        return $status === Password::PASSWORD_RESET
            ? response()->json(['message' => 'Password reset successful'], Response::HTTP_OK)
            : response()->json(['message' => 'Password reset failed'], Response::HTTP_BAD_REQUEST);
    }

    /**
     * Logout
     */
    public function logout(Request $request)
    {
        $request->user()->tokens()->delete();
        return response()->json(['message' => 'Logged out successfully'], Response::HTTP_OK);
    }
}
