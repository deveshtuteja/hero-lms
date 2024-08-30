import { HERO_LOGO_URL } from "@/utils/constants";
// import { toggleTheme } from "@/utils/themeSlice";
import { useState } from "react";
import { FaUser, FaLock, FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";

const LoginPage = () => {
  const [loginMethod, setLoginMethod] = useState("adid");
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const isDarkTheme = useSelector((state) => state.theme.isDark);

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-transparent dark:bg-gray-900">
        <div className="absolute -z-10">
          <img
            src="https://wallpapercave.com/wp/wp12902662.jpg"
            alt="hero-bg"
            className="w-screen h-screen object-fill"
          />
        </div>
        <div className="absolute top-4 right-4 z-10">
          {/* <button
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            onClick={() => {
              dispatch(toggleTheme());
            }}
          >
            {!isDarkTheme ? "🌙" : "🔆"}
          </button> */}
        </div>
        <div className="max-w-md w-full space-y-8 p-10 bg-gray-700 dark:bg-gray-800 rounded-xl shadow-lg">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src={HERO_LOGO_URL}
              alt="Hero"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-100 dark:text-white">
              Leave Management System
            </h2>
          </div>
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => setLoginMethod("adid")}
              className={`px-4 py-2 rounded-md ${
                loginMethod === "adid"
                  ? "bg-red-700 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
              }`}
            >
              ADID
            </button>
            <button
              onClick={() => setLoginMethod("google")}
              className={`px-4 py-2 rounded-md ${
                loginMethod === "google"
                  ? "bg-red-700 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
              }`}
            >
              Google
            </button>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="adid" className="sr-only">
                  ADID
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaUser
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                  <input
                    id="adid"
                    name="adid"
                    type="text"
                    autoComplete="username"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-50 rounded-t-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white bg-slate-800"
                    placeholder="ADID"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaLock
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-50 rounded-b-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white bg-slate-800"
                    placeholder="Password"
                  />
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-800 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                onClick={() => navigate("/")}
              >
                Sign in
              </button>
            </div>
          </form>
          {loginMethod === "google" && (
            <div>
              <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:border-gray-600">
                <FaGoogle className="mr-2" />
                Sign in with Google
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default LoginPage;
