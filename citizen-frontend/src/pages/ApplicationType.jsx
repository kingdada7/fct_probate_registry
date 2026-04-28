import {
  Home,
  CheckCircle,
  AlertCircle,
  FileText,
  Lock,
  Plus,
  ChevronDown,
  ExternalLink,
  Trash2,
} from "lucide-react";
// import { useState } from "react";

function ApplicationType() {
  //   const [fullName, setFullName] = useState("");
  //   const [relationship, setRelationship] = useState("");
  //   const [occupation, setOccupation] = useState("");
  //   const [idType, setIdType] = useState("National ID (NIN)");
  //   const [idNumber, setIdNumber] = useState("");
  //   const [address, setAddress] = useState("");
  //   const [phone, setPhone] = useState("");
  //   const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#1a5c3a] rounded-lg flex items-center justify-center">
              <Home className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="font-black text-gray-900 text-sm">
                FCT Customary Court
              </h1>
              <p className="text-xs text-[#1a5c3a] font-bold">PROBATE PORTAL</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-gray-700 text-sm font-medium hover:text-gray-900"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-700 text-sm font-medium hover:text-gray-900"
            >
              Dashboard
            </a>
            <a
              href="#"
              className="text-gray-700 text-sm font-medium hover:text-gray-900"
            >
              My Applications
            </a>
            <a
              href="#"
              className="text-gray-700 text-sm font-medium hover:text-gray-900"
            >
              Support
            </a>
            <div className="w-9 h-9 bg-yellow-100 rounded-full flex items-center justify-center">
              <Home className="w-5 h-5 text-yellow-700" />
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-1 max-w-7xl mx-auto w-full py-8 px-6">
        <h1 className="text-4xl font-black text-gray-900 mb-2">
          Step 3: Application Type & asssets
        </h1>
        <p className="text-gray-600">
          Specify if the deceased left a valid Will and provide a preliminary
          valuation of all assets within the Federal Capital Territory.
        </p>
        {/* <p className="text-[#1a5c3a] text-base mb-8">
          All information provided is under oath according to FCT Customary
          Court regulations.
        </p> */}

        <div className="grid grid-cols-4 gap-6 mt-8">
          <div className="col-span-1">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-[#1a5c3a] rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-sm">
                        Applicant Info
                      </p>
                    </div>
                  </div>
                  <div className="h-12 w-0.5 bg-gray-300 ml-4"></div>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-[#1a5c3a] rounded-full flex items-center justify-center">
                      <FileText className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-sm">
                        Deceased Info
                      </p>
                      <p className="text-xs text-[#1a5c3a] font-medium">
                        Active Step
                      </p>
                    </div>
                  </div>
                  <div className="h-12 w-0.5 bg-gray-300 ml-4"></div>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                      <FileText className="w-5 h-5 text-gray-500" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-sm">
                        Application Type
                      </p>
                      <p className="text-xs text-gray-500 font-medium">
                        Pending
                      </p>
                    </div>
                  </div>
                  <div className="h-12 w-0.5 bg-gray-300 ml-4"></div>
                </div>

                <div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                      <AlertCircle className="w-5 h-5 text-gray-500" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-sm">
                        Document Uploads
                      </p>
                      <p className="text-xs text-gray-500 font-medium">
                        Pending
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex gap-3 mb-3">
                    <AlertCircle className="w-5 h-5 text-green-700 flex-shrink-0" />
                    <p className="font-bold text-gray-900 text-xs">
                      INSTRUCTIONS
                    </p>
                  </div>
                  <p className="text-sm text-gray-700 mb-4">
                    Please ensure all details match your official government
                    identification (NIN, Passport, or Driver's License).
                    Mismatched data may lead to delays or rejection.
                  </p>
                  <a
                    href="#"
                    className="text-[#1a5c3a] font-bold text-sm inline-flex items-center gap-1 hover:underline"
                  >
                    View Guidelines
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 col-span-3 ">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-6 h-6 bg-[#00b757] rounded-full flex items-center justify-center text-white font-bold text-sm">
                  1
                </div>
                <h2 className="text-xl font-black text-gray-900">
                  Select Application Type
                </h2>
              </div>

              <div className="space-y-4  col-span-3 ">
                <label className="flex items-center p-4 border-2 border-[#00b757] rounded-lg cursor-pointer bg-green-50">
                  <input
                    type="radio"
                    name="appType"
                    value="grant-probate"
                    //   checked={applicationType === 'grant-probate'}
                    //   onChange={(e) => setApplicationType(e.target.value)}
                    className="w-5 h-5 accent-[#00b757]"
                  />
                  <div className="ml-4 flex-1">
                    <p className="font-bold text-gray-900">Grant of Probate</p>
                    <p className="text-sm text-[#00b757]">
                      Applied for when the deceased left a valid and properly
                      executed Will.
                    </p>
                  </div>
                </label>

                <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="appType"
                    value="letters-admin"
                    //   checked={applicationType === 'letters-admin'}
                    //   onChange={(e) => setApplicationType(e.target.value)}
                    className="w-5 h-5 accent-[#00b757]"
                  />
                  <div className="ml-4 flex-1">
                    <p className="font-bold text-gray-900">
                      Letters of Administration
                    </p>
                    <p className="text-sm text-gray-600">
                      Applied for when the deceased died intestate (without a
                      Will).
                    </p>
                  </div>
                </label>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-6 h-6 bg-[#00b757] rounded-full flex items-center justify-center text-white font-bold text-sm">
                  2
                </div>
                <h2 className="text-xl font-black text-gray-900">
                  Estate Summary
                </h2>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">
                  Estimated Total Value of Estate (₦)
                </label>
                <div className="text-3xl font-black text-gray-900 mb-4">
                  <input
                    type="text"
                    className="border border-gray-300 focus:ring-2 focus:ring-[#00b757] focus:outline-none rounded-md py-2 px-4"
                  />
                </div>
                <p className="text-sm text-[#00b757]">
                  This should represent the gross value of all movable and
                  immovable assets.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[#00b757] rounded-full flex items-center justify-center text-white font-bold text-sm">
                    3
                  </div>
                  <h2 className="text-xl font-black text-gray-900">
                    Asset Details
                  </h2>
                </div>
                <button className="flex items-center gap-2 bg-[#00b757] hover:bg-[#00a34d] text-white px-4 py-2 rounded-lg font-bold text-sm">
                  <Plus className="w-4 h-4" />
                  Add New Asset
                </button>
              </div>

              <div className="overflow-x-auto mb-6">
                <table className=" w-full ">
                  <thead className="bg-gray-100  ">
                    <tr>
                      <th className="px-6 py-3 text-xs font-bold text-[#00b757] tracking-wide text-left">
                        CATEGORY
                      </th>
                      <th className="px-6 py-3 text-xs font-bold text-[#00b757] tracking-wide  text-left">
                        DESCRIPTION / PARTICULARS
                      </th>
                      <th className="px-6 py-3 pl-50 text-xs font-bold text-[#00b757] tracking-wide text-right">
                        VALUE (₦)
                      </th>
                      <th className=" px-4 py-3 text-xs font-bold text-[#00b757] tracking-wide"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="px-4 py-4 border-none">
                        <div className="relative w-50">
                          <select className="w-full px-4 py-3 pr-10 rounded-lg bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] text-sm text-gray-700">
                            <option>Real Estate</option>
                            <option>Bank Account</option>
                            <option>Vehicle</option>
                            <option>Shares</option>
                            <option>Insurance</option>
                            <option>Personal Property</option>
                            <option>Other</option>
                          </select>

                          {/* Custom arrow */}
                          <ChevronDown className="w-4 h-4 text-gray-500 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                        </div>
                      </td>

                      <td className="px-4 py-4 text-gray-700 text-sm">
                        <textarea
                          name="assetDescription"
                          id=""
                          placeholder="e.g plot 442, maitama"
                          className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] text-sm text-gray-700 resize-none "
                        ></textarea>
                      </td>

                      <td className="px-4 py-4 text-gray-900 font-semibold text-sm text-right    ">
                        <textarea
                          name="assetValue"
                          id=""
                          placeholder="e.g 25,000,000"
                          className="w-40 h-10 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] text-sm text-gray-700 resize-none "
                        ></textarea>
                      </td>

                      {/* // Action buttons (Edit/Delete) - functionality to be implemented */}
                      <td className="">
                        <div className=" flex items-center justify-end gap-2 ">
                          <button className="p-2 text-gray-600 hover:text-red-600 ">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="flex justify-end items-center gap-4 pt-4 border-t border-gray-200">
                <div className="text-right">
                  <p className="text-sm text-gray-600 mb-1">Subtotal:</p>
                  <p className="text-2xl font-black text-[#00b757]">
                    ₦ 62,500,000.00
                  </p>
                </div>
              </div>

              <p className="text-xs text-gray-600 mt-4">
                Ensure all assets are listed for accurate legal processing.
              </p>
            </div>

            <div className="flex items-center justify-between">
              <button className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-bold hover:bg-gray-50">
                <span>←</span>
                Back to Deceased Info
              </button>
              <div className="flex items-center gap-3">
                <button className="px-6 py-3 text-gray-700 font-bold border border-gray-300 rounded-lg hover:bg-gray-50">
                  Save Draft
                </button>
                <button className="flex items-center gap-2 px-6 py-3 bg-[#00b757] hover:bg-[#00a34d] text-white font-bold rounded-lg">
                  Save & Continue
                  <span>→</span>
                </button>
              </div>
            </div>

            <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex gap-4">
              <AlertCircle className="w-5 h-5 text-yellow-700 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-yellow-900">
                <span className="font-bold">Notice:</span> Making a false
                declaration in a probate application is a criminal offense
                punishable under the Penal Code of the FCT. Ensure all
                information is accurate to the best of your knowledge.
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between text-xs text-gray-600">
          <p>© 2024 FCT Customary Court of Nigeria. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gray-900">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-900">
              Terms of Service
            </a>
            <a href="#" className="hover:text-gray-900">
              Contact Court Registry
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ApplicationType;
