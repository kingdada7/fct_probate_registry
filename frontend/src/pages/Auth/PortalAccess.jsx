import React, { useEffect, useState } from "react";
import { InfinitySpin } from "react-loader-spinner";
import {
  Landmark,
  User,
  Gavel,
  ArrowRight,
  ShieldUser,
  ShieldCheck,
  LogIn,
} from "lucide-react";

function PortalAccess() {
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
    <div className="min-h-screen bg-[#F5F7F6] flex flex-col">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#0b602a] rounded flex items-center justify-center">
                <Landmark className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-base font font-semibold text-gray-900">
                  FCT Customary Court of Appeal
                </div>
                <div className="text-xs font-medium text-[#0b602a]">ABUJA</div>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a
                href="#"
                className="text-sm font-medium text-gray-900 hover:text-[#0b602a]"
              >
                Home
              </a>
              <a
                href="#"
                className="text-sm font-medium text-gray-900 hover:text-[#0b602a]"
              >
                About Probate
              </a>
              <a
                href="#"
                className="text-sm font-medium text-gray-900 hover:text-[#0b602a]"
              >
                Help Center
              </a>
              <a
                href="#"
                className="text-sm font-medium text-gray-900 hover:text-[#0b602a]"
              >
                Contact
              </a>
              <button className="bg-[#0b602a] text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition-colors">
                Support
              </button>
            </nav>
          </div>
        </div>
      </header>

      <main className="pt-20 flex flex-col items-center justify-center px-4 py-12">
        <div className="w-full max-w-6xl">
          <div className="flex flex-col items-center mb-12">
            <div className="rounded-full bg-white w-24 h-24 flex items-center justify-center ">
              <img
                className="w-16 h-16 object-cover mx-auto "
                src="/src/assets/download.jpeg"
                alt="nigeria coat of arm"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4">
              Probate Registry
            </h1>
            <p className="text-lg text-[#13a046] text-center font-medium max-w-xl">
              Federal Capital Territory Customary Court of Appeal, Nigeria
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#13a046]/10 rounded-lg flex items-center justify-center mb-6">
                <User className="w-6 h-6 text-[#13a046]" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Citizen Portal
              </h2>
              <p className=" text-gray-600 mb-8 leading-relaxed">
                {" "}
                Apply for Letters of Administration or Probate, track your
                application status in real-time, and manage your legal documents
                securely.
              </p>
              <button className="w-full bg-[#13a046] text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-[#13a046]/90 transition-colors  cursor-pointer">
                Login as Citizen <LogIn className="w-5 h-5" />
              </button>
            </div>
            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#C5A059]/10 rounded-lg flex items-center justify-center mb-6">
                <Gavel className="w-6 h-6 text-[#C5A059]" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Administrative Portal
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Secure access for Court Registrars, Judges, and authorized
                Administrative Staff to review, process, and manage probate
                filings
              </p>
              <button className="w-full bg-[#C5A059] text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-[#C5A059]/90 transition-colors cursor-pointer">
                Login as Official <ShieldUser className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="text-center">
            <p className="text-gray-600">
              New to the Portal?{""}{" "}
              <a
                href="#"
                className="text-[#13a046] font-semibold underline underline-offset-4 decoration-[#13a046]/30 hover:decoration-[#13a046] "
              >
                Read the applicatin Guide
              </a>
            </p>
          </div>
        </div>
      </main>
      <footer className="bg-white border-t border-gray-200 py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 mb-6">
              <ShieldCheck className="w-5 h-5 text-[#13a046]" />
              <span className="text-sm font-semibold text-[#13a046] tracking-wide">
                {" "}
                OFFICIAL GOVERNMENT PORTAL
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-6 mb-6">
              {" "}
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                Accessibility
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                Legal Disclaimer
              </a>
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-500 mb-1">
                © 2026 FCT Customary Court of Nigeria. All Rights Reserved.
              </p>
              <p className="text-sm text-gray-500">
                Court Complex, Abuja, Nigeria.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default PortalAccess;
