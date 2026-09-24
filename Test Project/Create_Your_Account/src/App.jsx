import React from "react";

const App = () => {
  return (
    <div className="min-h-screen w-full bg-blue-700 flex justify-center items-center p-5">

      <div className="bg-white w-full max-w-5xl rounded-2xl shadow-2xl overflow-hidden">

        {/* Header */}
        <div className="bg-blue-500 text-center py-10 px-5">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white">
            Create Your Account
          </h1>

          <p className="text-lg md:text-2xl text-white mt-3">
            Join our community and start your journey
          </p>
        </div>

        {/* Form */}
        <form className="p-5 md:p-8">

          {/* First and Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            <div>
              <label className="font-bold text-lg">
                First Name
              </label>

              <input
                type="text"
                placeholder="Enter Your First Name"
                className="border border-gray-300 h-12 w-full rounded-xl mt-2 px-4 text-lg outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="font-bold text-lg">
                Last Name
              </label>

              <input
                type="text"
                placeholder="Enter Your Last Name"
                className="border border-gray-300 h-12 w-full rounded-xl mt-2 px-4 text-lg outline-none focus:border-blue-500"
              />
            </div>

          </div>


          {/* Email and Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">

            <div>
              <label className="font-bold text-lg">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter Your Email"
                className="border border-gray-300 h-12 w-full rounded-xl mt-2 px-4 text-lg outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="font-bold text-lg">
                Phone Number
              </label>

              <input
                type="tel"
                placeholder="Enter Your Phone Number"
                className="border border-gray-300 h-12 w-full rounded-xl mt-2 px-4 text-lg outline-none focus:border-blue-500"
              />
            </div>

          </div>


          {/* Password */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">

            <div>
              <label className="font-bold text-lg">
                Password
              </label>

              <input
                type="password"
                placeholder="Create a Password"
                className="border border-gray-300 h-12 w-full rounded-xl mt-2 px-4 text-lg outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="font-bold text-lg">
                Confirm Password
              </label>

              <input
                type="password"
                placeholder="Confirm your Password"
                className="border border-gray-300 h-12 w-full rounded-xl mt-2 px-4 text-lg outline-none focus:border-blue-500"
              />
            </div>

          </div>


          {/* Date and Gender */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">

            <div>
              <label className="font-bold text-lg">
                Date of Birth
              </label>

              <input
                type="date"
                className="border border-gray-300 h-12 w-full rounded-xl mt-2 px-4 text-lg outline-none focus:border-blue-500"
              />
            </div>


            <div>
              <label className="font-bold text-lg">
                Gender
              </label>

              <div className="flex flex-wrap gap-5 mt-4">

                <label className="flex items-center gap-2 text-lg">
                  <input type="radio" name="gender" value="Male" />
                  Male
                </label>

                <label className="flex items-center gap-2 text-lg">
                  <input type="radio" name="gender" value="Female" />
                  Female
                </label>

                <label className="flex items-center gap-2 text-lg">
                  <input type="radio" name="gender" value="Other" />
                  Other
                </label>

              </div>
            </div>

          </div>


          {/* Country */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">

            <div>
              <label className="font-bold text-lg">
                Country
              </label>

              <select className="border border-gray-300 h-12 w-full rounded-xl mt-2 px-4 text-lg outline-none focus:border-blue-500">

                <option value="">
                  Select your country
                </option>

                <option value="Somalia">
                  Somalia
                </option>

                <option value="Kenya">
                  Kenya
                </option>

                <option value="Ethiopia">
                  Ethiopia
                </option>

              </select>
            </div>


            <div>
              <label className="font-bold text-lg">
                Address
              </label>

              <input
                type="text"
                placeholder="Enter Your Address"
                className="border border-gray-300 h-12 w-full rounded-xl mt-2 px-4 text-lg outline-none focus:border-blue-500"
              />
            </div>

          </div>


          {/* Terms */}
          <div className="flex items-center gap-2 mt-6">

            <input
              type="checkbox"
              id="terms"
            />

            <label htmlFor="terms">
              I agree to the Terms and Conditions
            </label>

          </div>


          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xl py-3 rounded-xl mt-6 transition"
          >
            Create Account
          </button>

        </form>

      </div>

    </div>
  );
};

export default App;