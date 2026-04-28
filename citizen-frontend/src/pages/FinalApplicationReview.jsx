import {
  Home,
  Bell,
  HelpCircle,
  User,
  Eye,
  Download,
  FileText,
  CheckCircle,
} from "lucide-react";
import { useState } from "react";

function FinalApplicationReview() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#00b757] rounded flex items-center justify-center">
              <Home className="w-5 h-5 text-white" />
            </div>
            <h1 className="font-black text-gray-900">
              FCT Customary Court Probate Portal
            </h1>
          </div>
          <div className="flex items-center gap-6">
            <button className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 font-medium">
              Dashboard
            </button>
            <button className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 font-medium">
              Applications
            </button>
            <button className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 font-medium">
              Court Fees
            </button>
            <button className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 font-medium">
              Help
            </button>
            <button className="relative p-2 text-gray-600 hover:text-gray-900">
              <Bell className="w-5 h-5" />
            </button>
            <div className="w-9 h-9 bg-orange-200 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-orange-700" />
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-1 max-w-6xl mx-auto w-full py-8 px-6">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
            <span>Probate Portal</span>
            <span>/</span>
            <span className="font-semibold text-gray-900">Final Review</span>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-black text-gray-900 mb-2">
                Final Application Review
              </h1>
              <p className="text-gray-600">
                Please review all information carefully before submitting your
                probate application.
              </p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg px-4 py-2">
              <p className="text-sm text-gray-600">Application ID:</p>
              <p className="text-lg font-bold text-green-700">PRB-2023-8821</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <section className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <User className="w-5 h-5 text-gray-600" />
                <h2 className="text-xl font-black text-gray-900">
                  Applicant Information
                </h2>
              </div>
              <button className="text-sm text-green-700 hover:text-green-800 font-semibold">
                Edit
              </button>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-xs font-bold text-gray-600 tracking-wide mb-1">
                  FULL LEGAL NAME
                </p>
                <p className="text-lg font-semibold text-gray-900"></p>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-600 tracking-wide mb-1">
                  RELATIONSHIP TO DECEASED
                </p>
                <p className="text-lg font-semibold text-gray-900"></p>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-600 tracking-wide mb-1">
                  EMAIL ADDRESS
                </p>
                <p className="text-lg font-semibold text-gray-900"></p>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-600 tracking-wide mb-1">
                  PHONE NUMBER
                </p>
                <p className="text-lg font-semibold text-gray-900"></p>
              </div>
              <div className="col-span-2">
                <p className="text-xs font-bold text-gray-600 tracking-wide mb-1">
                  RESIDENTIAL ADDRESS
                </p>
                <p className="text-lg font-semibold text-gray-900"></p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <Home className="w-5 h-5 text-gray-600" />
                <h2 className="text-xl font-black text-gray-900">
                  Deceased Details
                </h2>
              </div>
              <button className="text-sm text-green-700 hover:text-green-800 font-semibold">
                Edit
              </button>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-xs font-bold text-gray-600 tracking-wide mb-1">
                  FULL NAME OF DECEASED
                </p>
                <p className="text-lg font-semibold text-gray-900"></p>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-600 tracking-wide mb-1">
                  DATE OF DEATH
                </p>
                <p className="text-lg font-semibold text-gray-900"></p>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-600 tracking-wide mb-1">
                  DEATH CERTIFICATE NUMBER
                </p>
                <p className="text-lg font-semibold text-gray-900"></p>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-600 tracking-wide mb-1">
                  LAST KNOWN ADDRESS
                </p>
                <p className="text-lg font-semibold text-gray-900"></p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <Home className="w-5 h-5 text-gray-600" />
                <h2 className="text-xl font-black text-gray-900">
                  Inventory of Assets
                </h2>
              </div>
              <button className="text-sm text-green-700 hover:text-green-800 font-semibold">
                Edit
              </button>
            </div>

            <div className="overflow-x-auto mb-6">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left px-4 py-3 text-xs font-bold text-gray-600 tracking-wide">
                      ASSET TYPE
                    </th>
                    <th className="text-left px-4 py-3 text-xs font-bold text-gray-600 tracking-wide">
                      DESCRIPTION
                    </th>
                    <th className="text-left px-4 py-3 text-xs font-bold text-gray-600 tracking-wide">
                      ESTIMATED VALUE (₦)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-4 py-4 text-gray-900 font-medium"></td>
                    <td className="px-4 py-4 text-gray-700"></td>
                    <td className="px-4 py-4 text-gray-900 font-semibold">
                      ₦{" "}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex justify-end pt-4 border-t border-gray-200">
              <div className="text-right">
                <p className="text-sm text-gray-600 mb-2">
                  TOTAL ESTIMATED ESTATE VALUE
                </p>
                <p className="text-2xl font-black text-green-700">₦ </p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-gray-600" />
                <h2 className="text-xl font-black text-gray-900">
                  Supporting Documents
                </h2>
              </div>
              <button className="text-sm text-green-700 hover:text-green-800 font-semibold">
                Edit
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-900 font-medium"></span>
                </div>
                <button className="p-2 text-gray-600 hover:text-gray-900">
                  <Eye className="w-5 h-5" />
                </button>
              </div>
            </div>
          </section>

          <section className="bg-green-50 border border-green-200 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 text-green-700 font-black text-xl flex-shrink-0">
                !
              </div>
              <div>
                <h3 className="font-black text-gray-900 mb-2">
                  Declaration of Truth
                </h3>
                <p className="text-sm text-gray-900 mb-4">
                  <span className="font-semibold">
                    I, Chidimma Oluchi Okoro,
                  </span>{" "}
                  hereby solemnly declare that the information provided in this
                  application is true, accurate, and complete to the best of my
                  knowledge and belief. I understand that any false statement or
                  concealment of a material fact may lead to the revocation of
                  the Grant of Probate and may constitute an offense punishable
                  under the laws of the Federal Republic of Nigeria.
                </p>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-5 h-5 accent-green-700 rounded"
                  />
                  <span className="text-sm text-gray-900">
                    I solemnly declare that all information stated above is
                    correct and I accept the legal implications of this
                    submission.
                  </span>
                </label>
              </div>
            </div>
          </section>

          <div className="flex items-center justify-between gap-4">
            <button className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-bold hover:bg-gray-50">
              <Download className="w-4 h-4" />
              Download Draft PDF
            </button>
            <button className="flex items-center gap-2 px-8 py-3 rounded-lg font-bold text-white">
              Submit Final Application
              <span>→</span>
            </button>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between text-xs text-gray-600">
          <p>© 2024 FCT Customary Court of Nigeria. Official Probate Portal.</p>
          <div className="flex gap-6">
            <button className="hover:text-gray-900">Privacy Policy</button>
            <button className="hover:text-gray-900">Terms of Service</button>
            <button className="hover:text-gray-900">Contact Registry</button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default FinalApplicationReview;
