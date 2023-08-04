<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\UserStoreRequest;
use App\Http\Requests\UserLoginRequest;

use App\Http\Resources\AuthResource;

use App\Models\User;
use Auth;

class AuthController extends Controller
{
    public function register(UserStoreRequest $request)
    {
        $data = $request->validated();
        $data['password'] = bcrypt($data['password']); // Hash the password
        User::create($data);
        return response()->json('User Registered!');
    }

    public function login(UserLoginRequest $request)
    {
        $credentials = $request->validated();
        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            $success['token'] = $user->createToken('MyApp')->plainTextToken;
            $success['name'] = $user->user_name;

            $response = [
                'success'=>true,
                'data'=>$success,
                'message' => 'Login Successfully'
            ];
            return response()->json($response);
        } else {
            $response = [
                'success' => false,
                'message' => 'Unauthorized'
            ];
            return response()->json($response);
        }
    }
}
