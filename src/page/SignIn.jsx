import React from 'react';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import RegisNav from '../components/RegisNav';
import Swal from 'sweetalert2';

const SignIn = () => {
  const navigate = useNavigate()

  const handleSigin = (e) => {
    e.preventDefault()
    Swal.fire({
      icon: "success",
      title: "Sign success",
      text: "Create account success"
    })
    navigate("/")
  }

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-b from-orange-500 to-orange-600">
      {/* Header */}
      <RegisNav />

      {/* Main Sign-up Section */}
      <div className="flex justify-center items-center flex-grow space-x-12">
        {/* Sign-up Form */}
        <form onSubmit={handleSigin} className="bg-white p-8 rounded-lg shadow-lg w-96 mb-6 mt-6">
          <h2 className="text-xl font-bold mb-5 text-center">Sign up</h2>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700"><b>Name:</b></label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full bg-white border-2 border-gray-500 rounded-sm p-2 focus:outline-none focus:border-orange-500"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700"><b>Lastname:</b></label>
              <input
                type="text"
                placeholder="Enter your lastname"
                className="w-full bg-white border-2 border-gray-500 rounded-sm p-2 focus:outline-none focus:border-orange-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-2">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700"><b>Phone number:</b></label>
              <input
                type="text"
                placeholder="Enter your number"
                className="w-full border-2 bg-white border-gray-500 rounded-sm p-2 focus:outline-none focus:border-orange-500"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700"><b>Date:</b></label>
              <input
                type="date"
                name='date'
                placeholder="mm/dd/yy"
                className="w-full date-color-[black] border-2 border-gray-500 rounded-sm p-2 focus:outline-none focus:border-orange-500"
                required
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="block mb-2 text-sm font-medium text-gray-700"><b>Email:</b></label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-white border-2 border-gray-500 rounded-sm p-2 focus:outline-none focus:border-orange-500"
            />
          </div>

          <div className="mt-2">
            <label className="block mb-2 text-sm font-medium text-gray-700"><b>Password:</b></label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full bg-white border-2 border-gray-500 rounded-sm p-2 focus:outline-none focus:border-orange-500"
            />
          </div>

          <div className="mt-2">
            <label className="block mb-2 text-sm font-medium text-gray-700"><b>Confirm password:</b></label>
            <input
              type="password"
              placeholder="Enter your confirm password"
              className="w-full bg-white border-2 border-gray-500 rounded-sm p-2 focus:outline-none focus:border-orange-500"
            />
          </div>

          {/* Sign-up Button */}
            <button type='submit' className="w-full bg-orange-500 text-white py-2 rounded-sm hover:bg-orange-600 transition-colors mt-6 ">
              Sign up
            </button>
        </form>

        {/* Sign-up with other options */}
        <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg w-96">
          <h2 className="text-xl font-bold mb-4 text-[#000000]">Sign up with:</h2>
          <div className="flex mb-6">
            <button className="text-2xl" ><img src="https://tse3.mm.bing.net/th?id=OIP.Fll7WPtNT6jrz1oBP8GbCgHaHj&pid=Api&P=0&h=220" alt="Google Logo" className="w-6 h-6 mr-2" /></button>
            <button className="text-3xl"><img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook Logo" className="w-6 h-6 mr-2" /></button>
            <button className="text-3xl"><img src="http://purepng.com/public/uploads/large/purepng.com-microsoft-logo-iconlogobrand-logoiconslogos-251519939091wmudn.png" alt="Facebook Logo" className="w-6 h-6 mr-2" /></button>
          </div>

          <hr className='mb-4 bg-[black] w-60'></hr>

          <div className="text-center text-sm">
            <p className='text-[#009990]'>Have an account? <a href="#" className="text-[#009990] hover:underline"><b>Login</b></a></p>
            <a href="#" className="text-sm text-[#009990] hover:underline"><b>Forgot password?</b></a>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <Footer/>
    </div>
  );
};

export default SignIn
