import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();


    return (
        <div className='flex items-center justify-center h-screen bg-gray-100'>
            <div className='bg-white p-8 rounded-lg shadow-lg w-96'>
                <h2 className='text-2xl font-bold mb-4'>Login</h2>
                <form>

                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='username'> Username </label>
                        <input id='username' type='text' value="" placeholder='Username' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'/>
                    </div>

                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>Password</label>
                        <input id='password' type='password' value="" placeholder='Password' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'/>
                    </div>

                    <button type='submit' className='bg-[#e65540] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' onClick={() => navigate('/')}>Login</button>

                    <p className='mt-4 text-sm'>
                        Don't have an account?{' '}
                        <a href='/register' className='text-[#e65540] hover:underline'>
                            Register here
                        </a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
