import Smiling from "../Images/Smiling.jpg";

const Landingpage = () => {
  return (
    <section className="bg-gradient-to-r from-red-500 to-purple-500 p-10 text-white">
      <div className="flex flex-col lg:flex-row items-center gap-8">
        {/* Left Content */}
        <div className="lg:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold">
            WELCOME TO <span className="text-yellow-300">EAGLETS SCHOOLS</span>
          </h1>
          <p className="text-2xl md:text-4xl font-bold mt-4">
            Helping you shape the future of your kids.
          </p>
          <button className="mt-6 px-6 py-3 bg-white text-red-600 font-semibold rounded hover:bg-gray-200">
            EXPLORE MORE
          </button>
          <div className="mt-8 text-sl text-white leading-relaxed space-y-6">
            <p>
              Full Version: Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </p>
            <p>
              Full Version: Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </p>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row sm:gap-4">
            <button className="px-6 py-2 bg-white text-red-600 font-bold rounded shadow hover:bg-gray-200">
              Contact Us Today
            </button>
            <button className="px-6 py-2 bg-white text-red-600 font-bold rounded shadow hover:bg-gray-200 mt-4 sm:mt-0">
              Our Location
            </button>
          </div>
        </div>

        {/* Right Content */}
        <div className="lg:w-1/2 flex flex-col items-center lg:items-end">
          <img
            src={Smiling}
            alt="Hero"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Landingpage;
