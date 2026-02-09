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
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default PortalAccess;
