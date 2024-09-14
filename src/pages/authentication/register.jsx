import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();

    return (
        <div className='flex items-center justify-center  bg-gray-100 pt-24 pb-20'>
            <div className='bg-white p-8 rounded-lg shadow-lg w-96'>
                <h2 className='text-2xl font-bold mb-4'>Register</h2>
                <form>
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='firstName'>
                            First Name
                        </label>
                        <input id='firstName' type='text' value="" placeholder='First Name' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'/>
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='lastName'>
                            Last Name
                        </label>
                        <input id='lastName' type='text' value='' placeholder='Last Name' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'/>
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='Birth'>
                            Birth Date
                        </label>
                        <input id='Birth' type='date' value="" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='phone'> Phone Number</label>
                        <input id='phone' type='text' value="" placeholder='Phone Number' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'/>
                    </div>

                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>Password</label>
                        <input id='password' type='password' value="" placeholder='Password' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'/>
                    </div>

                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='passwordConfirm'>Confirm Password</label>

                        <input id='passwordConfirm' type='password' value="" placeholder='Confirm Password' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'/>
                    </div>

                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='gender'>Gender</label>
                        <select id='gender' value="" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'>
                            <option value=''>Select Gender</option>
                            <option value='male'>Male</option>
                            <option value='female'>Female</option>
                        </select>
                    </div>
                    <button type='submit' className='bg-[#e65540] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' onClick={() => navigate('/login')}>Register</button>
                    <p className='mt-4 text-sm'>Already have an account?{' '}
                        <a href='/login' className='text-[#e65540] hover:underline'>Login here</a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Register;
