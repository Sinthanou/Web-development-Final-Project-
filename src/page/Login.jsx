import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import RegisNav from '../components/RegisNav';

const Login = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-500 to-orange-600 flex flex-col justify-between">
      {/* Header */}
      <RegisNav />

      {/* Main Login Section */}
      <div className="flex justify-center items-center flex-grow ">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <div className="mb-6 mt-6">
            <label className="flex items-center mb-2 text-sm">
              <span className="mr-2">👤 Account:</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full  rounded-sm p-2 focus:outline-none focus:border-orange-500 border-2 bg-white border-gray-500 "
            />
          </div>
          <div className="mb-8">
            <label className="flex items-center mb-2 text-sm">
              <span className="mr-2">🔒 Password:</span>
              <a href="#" className="ml-auto text-sm text-[#009990] hover:underline">
                Forgot password?
              </a>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full  rounded-sm p-2 focus:outline-none focus:border-orange-500 border-2 bg-white border-gray-500 "
            />
          </div>

          {/* Sign-in Button */}
          <Link to={"/home"}>
            <button className="w-full bg-orange-500 text-white py-2 rounded-sm hover:bg-orange-600 transition-colors mb-4">
              Sign in
            </button>
          </Link>

          {/* Create Account Link */}
          <div className="text-end text-sm">
            <Link to={"/sign-in"}>
              <a href="#" className="ml-auto text-sm text-[#009990] hover:underline">
                Create account
              </a>
            </Link>
          </div>

          {/* Sign-in with Other Options */}
          <div className="mt-6 text-center text-sm">
            <p>Sign in with:</p>
            <div className="flex justify-center  mt-2">
              <button className="text-2xl"><img src="https://tse3.mm.bing.net/th?id=OIP.Fll7WPtNT6jrz1oBP8GbCgHaHj&pid=Api&P=0&h=220" alt="Facebook Logo" className="w-8 h-8 mr-2" /></button>
              <button className="text-3xl"><img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook Logo" className="w-8 h-8 mr-2" /></button>
              <button className="text-3xl"><img src="http://purepng.com/public/uploads/large/purepng.com-microsoft-logo-iconlogobrand-logoiconslogos-251519939091wmudn.png" alt="Facebook Logo" className="w-8 h-8 mr-2" /></button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <Footer/>
    </div>
  );
};

export default Login
