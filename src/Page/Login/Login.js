import React from 'react';
import { Link } from 'react-router-dom';
import OthersLogin from '../../comps/OthersLogin';

const Login = () => {
    return (
        <div>
            <div class="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat" style={{ "backgroundImage": "url('https://images.unsplash.com/photo-1499123785106-343e69e68db1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1748&q=80')" }}>
                <div class="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
                    <div class="text-white">
                        <div class="mb-8 flex flex-col items-center">
                            <h1 class="mb-2 text-2xl">Login</h1>
                            <span class="text-gray-300">Enter Login Details</span>
                        </div>
                        <form action="/#">
                            <div class="mb-4 text-lg">
                                <input class="rounded-3xl border-none  bg-opacity-50 px-6 py-2 text-center text-black placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="text" name="name" placeholder="id@email.com" />
                            </div>

                            <div class="mb-4 text-lg">
                                <input class="rounded-3xl border-none  bg-opacity-50 px-6 py-2 text-center text-black placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="Password" name="name" placeholder="*********" />
                            </div>
                            <div class="mt-8 flex justify-center text-lg text-black">
                                <button type="submit" class="shadow-xl primary_btn">Login</button>
                            </div>
                            <div className='text-center pt-2'>
                                <span class="text-white-300">Or <Link to='/register'>Register</Link></span>
                            </div>
                            <OthersLogin></OthersLogin>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;