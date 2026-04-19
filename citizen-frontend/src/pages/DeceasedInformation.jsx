import {
  Home,
  CheckCircle,
  AlertCircle,
  FileText,
  Lock,
  ExternalLink,
} from "lucide-react";
import { useState } from "react";

function DeceasedInformation() {
  const [fullName, setFullName] = useState("");
  const [relationship, setRelationship] = useState("");
  const [occupation, setOccupation] = useState("");
  const [idType, setIdType] = useState("National ID (NIN)");
  const [idNumber, setIdNumber] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

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
          Step 2: Deceased Information
        </h1>
        <p className="text-[#1a5c3a] text-base mb-8">
          All information provided is under oath according to FCT Customary
          Court regulations.
        </p>

        <div className="grid grid-cols-4 gap-6">
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

          <div className="col-span-3">
            <div className="bg-white rounded-lg border border-gray-200 p-8">
              {/* <div className="flex items-center gap-3 mb-6">
                <Lock className="w-6 h-6 text-[#1a5c3a]" />
                <h2 className="text-2xl font-black text-gray-900">
                  Personal Details
                </h2>
              </div> */}

              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">
                      Full Name of Deceased
                    </label>
                    <input
                      type="text"
                      // value={fullName}
                      // onChange={(e) => setFullName(e.target.value)}
                      placeholder="Surname First, Middle Name, Last N"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">
                      Date of Death
                    </label>
                    <input
                      type="date"
                      value={occupation}
                      onChange={(e) => setOccupation(e.target.value)}
                      placeholder="e.g. Civil Servant"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm placeholder-gray-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">
                      Place of Death
                    </label>
                    <input
                      type="text"
                      // value={fullName}
                      // onChange={(e) => setFullName(e.target.value)}
                      placeholder="Street name, City, LGA, State"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">
                      Date of Marriage
                    </label>
                    <input
                      type="date"
                      value={occupation}
                      onChange={(e) => setOccupation(e.target.value)}
                      placeholder="e.g. Civil Servant"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">
                      Spouse of Deceased
                    </label>
                    <input
                      type="text"
                      // value={fullName}
                      // onChange={(e) => setFullName(e.target.value)}
                      placeholder="Surname First, Middle Name, Last N"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">
                      Occupation and Place of Work
                    </label>
                    <input
                      type="text"
                      value={occupation}
                      onChange={(e) => setOccupation(e.target.value)}
                      placeholder="e.g. Civil Servant, XYZ Company"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm placeholder-gray-400"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">
                      Form of Marriage
                    </label>
                    <select
                      value={idType}
                      onChange={(e) => setIdType(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm text-gray-700 appearance-none"
                    >
                      <option value="Statutory Marriage">
                        Statutory Marriage
                      </option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">
                      Identification Type
                    </label>
                    <select
                      value={idType}
                      onChange={(e) => setIdType(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm text-gray-700 appearance-none"
                    >
                      <option value="National ID (NIN)">
                        National ID (NIN)
                      </option>
                      <option value="Passport">Passport</option>
                      <option value="Driver's License">Driver's License</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">
                      ID Number
                    </label>
                    <input
                      type="text"
                      value={idNumber}
                      onChange={(e) => setIdNumber(e.target.value)}
                      placeholder="Enter identification number"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm placeholder-gray-400"
                    />
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <div className="flex items-center gap-3 mb-6">
                    <FileText className="w-6 h-6 text-[#1a5c3a]" />
                    <h3 className="text-lg font-black text-gray-900">
                      Contact Information
                    </h3>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">
                      Last Known Residential Address of Deceased
                    </label>
                    <textarea
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Street name, City, LGA, State"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm placeholder-gray-400 resize-none"
                      rows={3}
                    ></textarea>
                  </div>

                  <div className="flex items-center gap-3 mt-6">
                    <FileText className="w-6 h-6 text-[#1a5c3a]" />
                    <h3 className="text-lg font-black text-gray-900">
                      Name of Deceased's Next of Kin (NOK)
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 gap-6 mt-8">
                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2">
                        Full Legal Name
                      </label>
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Surname First, Middle Name, Last N"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm placeholder-gray-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2">
                        Relationship to Deceased
                      </label>
                      <select
                        value={relationship}
                        onChange={(e) => setRelationship(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm text-gray-700 appearance-none"
                      >
                        <option value="">Select relationship</option>
                        <option value="spouse">Spouse</option>
                        <option value="child">Child</option>
                        <option value="parent">Parent</option>
                        <option value="sibling">Sibling</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6 mt-8">
                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2">
                        Full Legal Name
                      </label>
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Surname First, Middle Name, Last N"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm placeholder-gray-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2">
                        Relationship to Deceased
                      </label>
                      <select
                        value={relationship}
                        onChange={(e) => setRelationship(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm text-gray-700 appearance-none"
                      >
                        <option value="">Select relationship</option>
                        <option value="spouse">Spouse</option>
                        <option value="child">Child</option>
                        <option value="parent">Parent</option>
                        <option value="sibling">Sibling</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6 mt-6 p-4 border-b border-gray-200 ">
                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2">
                        Phone Number
                      </label>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          defaultValue="+234"
                          disabled
                          className="w-16 px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-sm text-gray-600 font-medium"
                        />
                        <input
                          type="text"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="8012345678"
                          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm placeholder-gray-400"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2">
                        Residential Address
                      </label>
                      <input
                        type="text"
                        // value={residentialAddress}
                        // onChange={(e) => setResidentialAddress(e.target.value)}
                        placeholder="Street name, City, LGA, State"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm placeholder-gray-400"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <div className="grid grid-cols-2 gap-6 mt-8">
                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2">
                        Full Name of Child of Deceased (if applicable)
                      </label>
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Surname First, Middle Name, Last N"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm placeholder-gray-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2">
                        Age of Child of Deceased (if applicable)
                      </label>
                      <input
                        type="number"
                        // value={age}
                        // onChange={(e) => setAge(e.target.value)}
                        placeholder="Enter age"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm placeholder-gray-400"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2">
                        Full Name of the Mother (if applicable)
                      </label>
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Surname First, Middle Name, Last N"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm placeholder-gray-400"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2">
                        Mother Phone Number (if applicable)
                      </label>
                      <input
                        type="text"
                        // value={fullName}
                        // onChange={(e) => setFullName(e.target.value)}
                        placeholder="8012345678"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm placeholder-gray-400"
                      />
                    </div>
                  </div>
                  <button
                    type="button"
                    // onClick={addChild}
                    className="mt-2 text-sm text-[#1a5c3a] font-bold hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    + Add another child
                  </button>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Name and Age of Minor Children of the Deceased
                  </label>
                  <textarea
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Provide the full names and ages of any minor children of the deceased. If there are no minor children, please write 'None'."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm placeholder-gray-400 resize-none"
                    rows={3}
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Name and Age of the Person with whom they are living (if
                    applicable)
                  </label>
                  <textarea
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Provide the full names and ages of any minor children of the deceased. If there are no minor children, please write 'None'."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm placeholder-gray-400 resize-none"
                    rows={3}
                  ></textarea>
                </div>
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">
                      Full Name of the Father of the Deceased (if applicable)
                    </label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Surname First, Middle Name, Last N"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm placeholder-gray-400"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">
                      Address of the Father (if applicable)
                    </label>
                    <input
                      type="text"
                      // value={fullName}
                      // onChange={(e) => setFullName(e.target.value)}
                      placeholder="Street name, City, LGA, State"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm placeholder-gray-400"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">
                      Full Name of the Mother of the Deceased (if applicable)
                    </label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Surname First, Middle Name, Last N"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm placeholder-gray-400"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">
                      Address of the Mother (if applicable)
                    </label>
                    <input
                      type="text"
                      // value={fullName}
                      // onChange={(e) => setFullName(e.target.value)}
                      placeholder="Street name, City, LGA, State"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm placeholder-gray-400"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">
                      Full Name of the Brother of the Deceased (if applicable)
                    </label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Surname First, Middle Name, Last N"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm placeholder-gray-400"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">
                      Address of the Brother (if applicable)
                    </label>
                    <input
                      type="text"
                      // value={fullName}
                      // onChange={(e) => setFullName(e.target.value)}
                      placeholder="Street name, City, LGA, State"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm placeholder-gray-400"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">
                      Full Name of the Sister (if applicable)
                    </label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Surname First, Middle Name, Last N"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm placeholder-gray-400"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">
                      Address of the Sister (if applicable)
                    </label>
                    <input
                      type="text"
                      // value={fullName}
                      // onChange={(e) => setFullName(e.target.value)}
                      placeholder="Street name, City, LGA, State"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm placeholder-gray-400"
                    />
                  </div>
                </div>
                {/* //bank and account no */}
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">
                      Name of the Bank
                    </label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. First Bank, GTBank, Zenith Bank"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">
                      Account Number
                    </label>
                    <input
                      type="text"
                      // value={fullName}
                      // onChange={(e) => setFullName(e.target.value)}
                      placeholder="Account Number"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm placeholder-gray-400"
                    />
                  </div>
                  <button
                    type="button"
                    // onClick={addChild}
                    className="mt-2 text-sm text-[#1a5c3a] font-bold hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    + Add another bank account
                  </button>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Personal Chatel
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="List any personal chattel (e.g. vehicles, jewelry, electronics) owned by the deceased that may be relevant to the probate application. If there are no personal chattel, please write 'None'."
                    className="w-full px-4 py-8 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm placeholder-gray-400"
                  />
                </div>

                <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">
                      Insurance Policies
                    </label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="List any insurance policies (e.g. life insurance, health insurance) held by the deceased that may be relevant to the probate application. Include the name of the insurance company and policy number if available. If there are no insurance policies, please write 'None'."
                      className="w-full px-4 py-8 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm placeholder-gray-400"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">
                    Share in Company (if any)
                    </label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="List any shares in companies or businesses owned by the deceased that may be relevant to the probate application. Include the name of the company, type of business, and percentage of ownership if available. If there are no shares in companies, please write 'None'."
                      className="w-full px-4 py-8 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm placeholder-gray-400"
                    />
                  </div>

                <div className="flex items-center gap-4 pt-8 border-t border-gray-200">
                  <button className="flex items-center gap-2 text-gray-700 text-sm font-bold hover:text-gray-900">
                    <Lock className="w-4 h-4" />
                    Save Draft
                  </button>
                  <div className="flex-1"></div>
                  <button className="px-6 py-3 text-gray-600 text-sm font-bold border border-gray-300 rounded-lg hover:bg-gray-50">
                    Previous
                  </button>
                  <button className="px-6 py-3 bg-[#1a5c3a] text-white text-sm font-bold rounded-lg hover:bg-[#154d2f] flex items-center gap-2">
                    Save & Continue
                    <span>→</span>
                  </button>
                </div>
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

export default DeceasedInformation;
