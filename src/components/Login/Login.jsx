// Login.js
import React from 'react';
import { useForm } from 'react-hook-form';

const Login = ({ onClose, onSignupClick }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Log In</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block mb-2 text-gray-700 dark:text-gray-300" htmlFor="email">Email</label>
            <input
              className={`w-full px-3 py-2 border rounded ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
              type="email"
              id="email"
              {...register('email', { required: 'Email is required' })}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-gray-700 dark:text-gray-300" htmlFor="password">Password</label>
            <input
              className={`w-full px-3 py-2 border rounded ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
              type="password"
              id="password"
              {...register('password', { required: 'Password is required' })}
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-gray-400 text-white px-4 py-2 rounded mr-2 hover:bg-gray-600"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Log In
            </button>
          </div>
          <div className="mt-4">
            <p>Don't have an account? <span className="text-blue-500 cursor-pointer" onClick={onSignupClick}>Sign up</span></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
