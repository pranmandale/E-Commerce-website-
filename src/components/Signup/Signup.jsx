// SignUp.js
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const SignUp = ({ onClose, onLoginClick }) => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const onSubmit = data => {
    // Handle the sign-up process
    console.log(data);
    onClose();
  };

  const password = watch('password', '');

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block mb-2 text-gray-700 dark:text-gray-300" htmlFor="name">Name</label>
            <input
              className={`w-full px-3 py-2 border rounded ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
              type="text"
              id="name"
              {...register('name', { required: 'Name is required' })}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1" aria-live="assertive">{errors.name.message}</p>}
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-gray-700 dark:text-gray-300" htmlFor="email">Email</label>
            <input
              className={`w-full px-3 py-2 border rounded ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
              type="email"
              id="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: 'Invalid email address'
                }
              })}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1" aria-live="assertive">{errors.email.message}</p>}
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-gray-700 dark:text-gray-300" htmlFor="password">Password</label>
            <div className="relative">
              <input
                className={`w-full px-3 py-2 border rounded ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
                type={showPassword ? "text" : "password"}
                id="password"
                {...register('password', {
                  required: 'Password is required',
                  minLength: { value: 6, message: 'Password must be at least 6 characters' }
                })}
              />
              <span
                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? 'Hide' : 'Show'}
              </span>
            </div>
            {errors.password && <p className="text-red-500 text-sm mt-1" aria-live="assertive">{errors.password.message}</p>}
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-gray-700 dark:text-gray-300" htmlFor="confirmPassword">Confirm Password</label>
            <div className="relative">
              <input
                className={`w-full px-3 py-2 border rounded ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'}`}
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                {...register('confirmPassword', {
                  required: 'Please confirm your password',
                  validate: value => value === password || 'Passwords do not match'
                })}
              />
              <span
                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? 'Hide' : 'Show'}
              </span>
            </div>
            {errors.confirmPassword && <p className="text-red-500 text-sm mt-1" aria-live="assertive">{errors.confirmPassword.message}</p>}
          </div>
          <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600" type="submit">Sign Up</button>
          <button
            type="button"
            className="mt-2 w-full bg-gray-400 text-white py-2 rounded hover:bg-gray-600"
            onClick={onClose}
          >
            Cancel
          </button>
          <div className="mt-4">
            <p>Already have an account? <span className="text-blue-500 cursor-pointer" onClick={onLoginClick}>Log in</span></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
