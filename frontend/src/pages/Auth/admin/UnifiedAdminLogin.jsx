import React from "react";
import { MdAdminPanelSettings } from "react-icons/md";
import { IoShieldCheckmark } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { Eye, EyeOff, Key } from "lucide-react";
import { IoShieldOutline } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";
import { InfinitySpin } from "react-loader-spinner";
import { useEffect, useState } from "react";
const UnifiedAdminLogin = () => {
  const [adminTier, setAdminTier] = useState("standard");

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timmer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timmer);
  }, []);
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F5F7F6]">
        <InfinitySpin width="200" color="#0b602a" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <main className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full  max-w-md">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center mb-6">
              <div className="w-24 h-24  rounded-sm flex items-center justify-center">
                <img
                  className="w-16 h-16 object-cover mx-auto "
                  src="/src/assets/download.jpeg"
                  alt=""
                />
              </div>
            </div>
            <h1 className="text-3xl font-black text-gray-900 mb-2 tracking-tight">
              FCT CUSTOMARY COURT OF NIGERIA
            </h1>
            <p className="text-gray-600 text-sm font-medium">
              Official Probate Application Portal • Abuja
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-xl overflow-hidden ">
            <div className="bg-linear-to-r from-green-50 to-green-25 px-6 py-4 flex items-center justify-between border-b border-gray-200">
              <div className="flex items-center gap-2">
                <CiLock className="text-green-600 text-xl" />
                <span className="text-xs font-bold text-[#1a5c3a] tracking-widest">
                  SECURE GATEWAY
                </span>
              </div>
              <span className="text-xs font-bold bg-green-200 text-green-700 px-3 py-1 rounded-md">
                ENCRYPTED
              </span>
            </div>
            <div className="inline-flex bg-blue-200-100 rounded-lg p-1  w-full">
              <button
                onClick={() => setAdminTier("standard")}
                className={`flex-1 py-2.5 px-4 rounded-md font-bold text-sm transition-all flex items-center justify-center gap-2 ${adminTier === "standard" ? "bg-white text-green-600 shadow-sm" : "text-gray-600 hover:text-green-600"}`}
              >
                <IoShieldCheckmark /> Admin
              </button>
              <button
                onClick={() => setAdminTier("super")}
                className={`flex-1 py-2.5 px-4 rounded-md font-bold text-sm transition-all flex items-center justify-center gap-2 ${adminTier === "super" ? "bg-white text-[#C7A008] shadow-sm" : "text-gray-600 hover:text-[#C7A008]"}`}
              >
                <MdAdminPanelSettings />
                Super Admin
              </button>
            </div>
            <div className="">
              {adminTier === "standard" ? (
                <StandardAdminUI />
              ) : (
                <SuperAdminUI />
              )}
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-white border-t border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-3 text-xs text-gray-500">
          <p className="tracking-wide">
            FEDERAL REPUBLIC OF NIGERIA • FCT CUSTOMARY COURT • © 2026
          </p>
          <div className="flex items-center justify-center gap-4">
            <a href="#" className="hover:text-gray-700 font-medium">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="#" className="hover:text-gray-700 font-medium">
              Terms of Service
            </a>
            <span>•</span>
            <a href="#" className="hover:text-gray-700 font-medium">
              Security Statement
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

function StandardAdminUI() {
  const [hidePassword, setHidePassword] = useState(true);
  return (
    <div className="p-8 bg-linear-to-l from-green-50 to-green-25 ">
      <h2 className="text-2xl font-black text-gray-900 mb-2 text-center pb-6">
        Admin Login{" "}
      </h2>

      <form className="space-y-4 ">
        <div>
          <label className="block text-sm font-bold text-gray-900 mb-2">
            Official Email Address
          </label>
          <div className="relative">
            <MdAlternateEmail className="absolute left-3.5 top-3.5 w-5 h-5 text-gray-400" />

            <input
              type="email"
              placeholder="e.g. name.surname@judiciary.gov.ng"
              className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm placeholder-gray-400"
            />
          </div>
        </div>

        {/* passwoed */}
        <div>
          <label className=" text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2">
            Password
          </label>
          <div className="relative">
            <CiLock className="absolute left-3.5 top-3.5 w-5 h-5 text-gray-400" />
          </div>
          <div className="relative">
            <input
              type={hidePassword ? "password" : "text"}
              placeholder="Enter your password "
              className="w-full px-11 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm"
            />
            {hidePassword ? (
              <EyeOff
                onClick={() => setHidePassword(false)}
                className="absolute right-4 top-3.5 w-5 h-5 text-green-500 cursor-pointer"
              />
            ) : (
              <Eye
                onClick={() => setHidePassword(true)}
                className="absolute right-4 top-3.5 w-5 h-5 text-green-500 cursor-pointer"
              />
            )}
          </div>
          <a
            href=""
            className="text-sm font-semibold text-[#1a5c3a] hover:underline pl-65 pt-1"
          >
            {" "}
            Forgot Password?
          </a>
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-black py-3.5 rounded-lg transition-colors text-sm tracking-wide mt-6"
        >
          SECURE LOGIN
        </button>
      </form>
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-700">
          Don't have an account?{" "}
          <a
            href="/CitizenRegistration"
            className="text-[#1a5c3a] font-semibold hover:underline"
          >
            Register here
          </a>
        </p>
      </div>
    </div>
  );
}

const SuperAdminUI = () => {
  const [hidePassword, setHidePassword] = useState(true);
  return (
    <div className="p-8 bg-linear-to-l from-yellow-50 to-yellow-25 ">
      <h2 className="text-2xl font-black text-gray-900 text-center mb-6">
        H.O.D Probate{" "}
      </h2>

      <form className="space-y-4 ">
        <div>
          <label className="block text-sm font-bold text-gray-900 mb-2">
            Official Email Address
          </label>
          <div className="relative">
            <MdAlternateEmail className="absolute left-3.5 top-3.5 w-5 h-5 text-gray-400" />

            <input
              type="email"
              placeholder="e.g. name.surname@judiciary.gov.ng"
              className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C7A008] focus:border-transparent text-sm placeholder-gray-400"
            />
          </div>
        </div>

        {/* passwoed */}
        <div>
          <label className=" text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2">
            Password
          </label>
          <div className="relative">
            <CiLock className="absolute left-3.5 top-3.5 w-5 h-5 text-gray-400" />
          </div>
          <div className="relative">
            <input
              type={hidePassword ? "password" : "text"}
              placeholder="Enter your password "
              className="w-full px-11 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C7A008] focus:border-transparent text-sm"
            />
            {hidePassword ? (
              <EyeOff
                onClick={() => setHidePassword(false)}
                className="absolute right-4 top-3.5 w-5 h-5 text-[#c7a008] cursor-pointer "
              />
            ) : (
              <Eye
                onClick={() => setHidePassword(true)}
                className="absolute right-4 top-3.5 w-5 h-5 text-[#c7a008] cursor-pointer"
              />
            )}
          </div>
          <a
            href=""
            className="text-sm font-semibold text-[#C7A008] hover:underline pl-65 pt-1"
          >
            {" "}
            Forgot Password?
          </a>
        </div>

        <button
          type="submit"
          className="w-full bg-[#C7A008] hover:bg-[#C7A008]/90 text-white font-black py-3.5 rounded-lg transition-colors text-sm tracking-wide mt-6"
        >
          SECURE LOGIN
        </button>
      </form>
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-700">
          Don't have an account?{" "}
          <a
            href="/CitizenRegistration"
            className="text-[#C7A008] font-semibold hover:underline"
          >
            Register here
          </a>
        </p>
      </div>
    </div>
  );
};

export default UnifiedAdminLogin;
