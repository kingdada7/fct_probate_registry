import React from "react";
import { IoMdArrowDown, IoMdArrowForward, IoMdSearch } from "react-icons/io";
import { FaPlusCircle } from "react-icons/fa";
import { IoMdArrowUp } from "react-icons/io";
import { ClipboardClock, Landmark } from "lucide-react";
import { TbXboxXFilled } from "react-icons/tb";
import { BsPatchCheckFill } from "react-icons/bs";
import { PiFolderSimpleUserDuotone } from "react-icons/pi";
import { BsQuestionSquare } from "react-icons/bs";
import { BsQuestionSquareFill } from "react-icons/bs";
import CreateApplication from "./CreateApplication";
import { Link } from "react-router";


function CitizenDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* header */}
      <header className="bg-white-700 text-black border-b ">
        <div className="w-full mx-auto px-6 py-4 flex items-center justify-between sm:px-6 lg:px-8 ">
          <div className="flex items-center gap-5">
            <div className="w-10 h-10 bg-[#0b602a] rounded-sm flex items-center justify-center">
              <Landmark className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-xl md:text-2xl font-semibold ">
              FCT Customary Probate Registry
            </h1>
          </div>
          <div className="flex items-center gap-6 ">
            <span className="font-medium bg-[#0b602a] px-3 py-2 rounded-md text-white sm:inline-block ">
              Musa Ibrahim
            </span>
            <button className="bg-gray-300 px-4 py-2 rounded-md font-medium hover:bg-gray-100">
              Logout
            </button>
            <div className="w-10 h-10 bg-gray-300 rounded-full "></div>
          </div>
        </div>
      </header>
      {/* //header ends here */}

      <main className="w-full pt-16  px-4 sm:px-6 lg:px-8 py-8 bg-[#f6f8f7] dark:bg-[#112117]">
        <div className=" flex flex-col  sm:flex-row sm:items-center sm:justify-between gap-6 mb-10">
          <div>
            {" "}
            <h2 className="text-3xl font-bold text-gray-800">Dashboard</h2>
            <p className="text-gray-600 mt-1">Welcome back, Musa Ibrahim!</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 ">
           <Link to="/citizen/createapplication">
            <button className="bg-[#0b602a] text-white px-4 py-2 rounded-md font-medium hover:bg-green-600  shadow-sm transition flex items-center gap-2">
              <span>
                <FaPlusCircle className="w-5 h-5 mr-2" />
              </span>{" "}
              New Application
            </button>
            </Link>

            <button className="bg-gray-100 text-black px-4 py-2 rounded-md font-medium hover:bg-gray-200 border shadow-sm transition-colors flex items-center gap-2">
              <span>
                <IoMdSearch className="w-5 h-5" />
              </span>
              View Applications Status
            </button>
          </div>
        </div>

        {/* stats card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* total applications */}
          <div className="bg-white rounded-md shadow p-6 border border-gray-100">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-400 font-medium uppercase tracking-wide">
                  Total Applications
                </p>
                <p className="mt-3 text-2xl font-bold text-gray-800">12</p>
                <p className="text-sm text-green-600 mt-3">
                  <IoMdArrowUp className="inline items-center w-3 h-3 mb-1" />
                  20% <span className="text-gray-400">from last month</span>
                </p>
              </div>
              <div className="bg-green-100 text-green-500 rounded-md p-3">
                <PiFolderSimpleUserDuotone className="w-6 h-6" />
              </div>
            </div>
          </div>

          {/* pending */}
          <div className="bg-white rounded-md shadow p-6 border border-gray-100">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-400 font-medium uppercase tracking-wide">
                  Pending
                </p>
                <p className="mt-3 text-2xl font-bold text-gray-800">5</p>
                <p className="text-sm text-orange-600 mt-3">
                  <IoMdArrowForward className="inline items-center w-3 h-3 mb-1" />
                  10% <span className="text-gray-400">awaiting review</span>
                </p>
              </div>
              <div className="bg-orange-100 text-orange-500 rounded-md p-3">
                <ClipboardClock className="w-6 h-6" />
              </div>
            </div>
          </div>

          {/* APPROVED */}

          <div className="bg-white rounded-md shadow p-6 border border-gray-100">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-400 font-medium uppercase tracking-wide">
                  Approved
                </p>
                <p className="mt-3 text-2xl font-bold text-gray-800">5</p>
                <p className="text-sm text-red-600 mt-3">
                  <IoMdArrowDown className="inline items-center w-3 h-3 mb-1" />
                  10% <span className="text-gray-400">compared to prev</span>
                </p>
              </div>
              <div className="bg-green-100 text-green-500 rounded-md p-3">
                <BsPatchCheckFill className="w-6 h-6" />
              </div>
            </div>
          </div>

          {/* REJECTED */}
          <div className="bg-white rounded-md shadow p-6 border border-gray-100">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-400 font-medium uppercase tracking-wide">
                  Rejected
                </p>
                <p className="mt-4 text-2xl font-bold text-gray-800">3</p>
                <p className="text-sm text-red-600 mt-3">
                  <IoMdArrowDown className="inline items-center w-3 h-3 mb-1" />
                  0% <span className="text-gray-400">no change</span>
                </p>
              </div>
              <div className="bg-red-100 text-red-500 rounded-md p-3">
                <TbXboxXFilled className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="px-6 py-5 border-b border-gray-200 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">
            Recent Application Activity
          </h3>
          <button className="text-emerald-600 hover:text-emerald-800 font-medium">
            View All
          </button>
        </div>
        <div className="bg-white rounded-xl shadow border border-gray-100 overflow-hidden mb-12">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Reference ID
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Estate Name
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Submission Date
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    #FCT-PR-2023-0089
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    Estate of Late Samuel Okoro
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    Oct 24, 2023
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex px-3 py-1 text-xs font-semibold rounded-full bg-amber-100 text-amber-800">
                      Pending Review
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <button className="text-[#0b602a] hover:text-emerald-800 font-semibold">
                      View Details
                    </button>
                  </td>
                </tr>

                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    #FCT-PR-2023-0054
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    Estate of Late Amina Bello
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    Sep 12, 2023
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex px-3 py-1 text-xs  rounded-full bg-emerald-100 text-emerald-800 font-semibold">
                      Approved
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <button className="text-[#0b602a] hover:text-emerald-800 font-semibold">
                      Download Grant
                    </button>
                  </td>
                </tr>

                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    #FCT-PR-2023-0042
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    Estate of Late Chinedu Azikiwe
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    Aug 30, 2023
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex px-3 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">
                      Rejected
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <button className="text-[#0b602a] hover:text-emerald-800 font-semibold">
                      View Reasons
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Help Section */}
        <div className="bg-[#0b602a]/5 border border-[#0b602a]/10 rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-[#0b602a] rounded-full flex items-center justify-center text-2xl shrink-0">
              <BsQuestionSquareFill className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900">
                Need Assistance?
              </h4>
              <p className="text-gray-600 mt-1">
                Access probate guidelines or chat with a registry officer.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button className="bg-white border border-[#0b602a]/10 text-emerald-700 px-6 py-3 rounded-lg font-medium hover:bg-emerald-50 transition">
              Probate FAQ
            </button>
            <button className="bg-[#0b602a] text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-700 transition">
              Contact Registry
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default CitizenDashboard;
