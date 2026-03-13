import {
  LayoutDashboard,
  Users,
  Shield,
  FileText,
  LogOut,
  Bell,
  ChevronRight,
  Share2,
  Eye,
  Settings,
  Clock,
  AlertCircle,
  Radio,
  Folder,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
  CheckCheckIcon,
  CircleX,
} from "lucide-react";
import SuperAdminLayout from "../layouts/SuperAdminLayout";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FaCheckCircle } from "react-icons/fa";
// import { useState } from 'react';

function SuperAdminManagement() {
  // const [currentPage, setCurrentPage] = useState(1);

  const adminStaff = [
    {
      initials: "CN",
      name: "Chidi Nwachukwu",
      email: "c.nwachukwu@fct.gov.ng",
      role: "ADMIN",
      department: "Registry Operations",
      lastActivity: "10 mins ago",
      status: "ACTIVE",
    },
    {
      initials: "OA",
      name: "Olawale Adeyemi",
      email: "o.adeyemi@fct.gov.ng",
      roles: ["SUPER", "ADMIN"],
      department: "Exec. Oversight",
      lastActivity: "Today, 08:12 AM",
      status: "ACTIVE",
    },
    {
      initials: "MM",
      name: "Mary Musa",
      email: "m.musa@fct.gov.ng",
      role: "ADMIN",
      department: "Audit & Compliance",
      lastActivity: "Yesterday, 16:45",
      status: "INACTIVE",
    },
  ];

  return (
    <SuperAdminLayout>
      <div className="min-h-screen bg-gray-100 flex">
        {/* <aside className="w-64 bg-[#1a5c3a] text-white flex flex-col">
        <div className="p-6 border-b border-green-700">
          <div className="w-16 h-16 mx-auto bg-white mb-4">
            <img src="/src/assets/download.jpeg" alt="COA Logo" />
          </div>
          <h1 className="text-xs font-bold tracking-wider leading-tight  text-center">
            FCT CUSTOMARY COURT
            <br />
            PROBATE APPLICATION PORTAL
          </h1>
        </div>

        {/* <nav className="flex-1 py-6 px-4 space-y-1">
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 rounded text-sm font-medium hover:bg-green-700"
          >
            <LayoutDashboard className="w-5 h-5" />
            Dashboard
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 rounded text-sm font-medium hover:bg-green-700"
          >
            <Users className="w-5 h-5" />
            User Management
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 rounded bg-green-700 text-sm font-medium"
          >
            <Shield className="w-5 h-5" />
            Admin Management
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 rounded text-sm font-medium hover:bg-green-700"
          >
            <FileText className="w-5 h-5" />
            Bank Approvals
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 rounded text-sm font-medium hover:bg-green-700"
          >
            <LogOut className="w-5 h-5" />
            System Logs
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 rounded text-sm font-medium hover:bg-green-700"
          >
            <Settings className="w-5 h-5" />
            Settings
          </a>
        </nav> */}

        {/* <div className="p-6 border-t border-green-700 text-xs">
          <p className="text-green-200 text-xs font-bold tracking-wider mb-1">
            SYSTEM SECURE
          </p>
          <p className="text-green-300">Last Audit: 24 Oct 2023 14:30</p>
        </div> */}
        {/* </aside> */}

        <main className="flex-1 overflow-auto">
          {/* <div className="bg-white border-b border-gray-200">
          <div className="px-8 py-5 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-black text-gray-900">
                Admin Management Oversight
              </h1>
              <p className="text-sm text-gray-500">
                Head of Probate Authority Panel
              </p>
            </div>
            <div className="flex items-center gap-4">
              <button className="relative p-2 text-gray-600 hover:text-gray-900">
                <Bell className="w-6 h-6" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="text-right">
                <p className="font-bold text-gray-900">Hon. Justice A. Bello</p>
                <p className="text-xs font-bold text-yellow-600 tracking-wide">
                  SUPER ADMIN
                </p>
              </div>
              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                <Users className="w-5 h-5 text-gray-600" />
              </div>
            </div>
          </div>
        </div> */}

          <div className="p-8 space-y-8">
            <div className="grid grid-cols-4 gap-6">
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-gray-600 tracking-wide">
                    TOTAL ADMIN STAFF
                  </span>
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-gray-400" />
                  </div>
                </div>
                <div className="text-4xl font-black text-gray-900 mb-2">24</div>
                <p className="text-xs text-green-600 font-bold">+2 this week</p>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-gray-600 tracking-wide">
                    PENDING APPROVALS
                  </span>
                  <div className="w-10 h-10 bg-yellow-50 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-yellow-600" />
                  </div>
                </div>
                <div className="text-4xl font-black text-red-600 mb-2">03</div>
                <p className="text-xs text-red-600 font-bold">
                  Action Required
                </p>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-gray-600 tracking-wide">
                    ACTIVE SESSIONS
                  </span>
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                    <Radio className="w-5 h-5 text-blue-500" />
                  </div>
                </div>
                <div className="text-4xl font-black text-gray-900 mb-2">08</div>
                <p className="text-xs text-gray-600 font-medium">
                  Currently online
                </p>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-gray-600 tracking-wide">
                    SYSTEM ALERTS
                  </span>
                  <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center">
                    <Folder className="w-5 h-5 text-purple-500" />
                  </div>
                </div>
                <div className="text-4xl font-black text-gray-900 mb-2">12</div>
                <p className="text-xs text-gray-600 font-medium">
                  Pending review
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="px-8 py-6 border-b border-gray-200 flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-black text-gray-900">
                    Administrative Personnel Overview
                  </h2>
                  <p className="text-sm text-gray-600 mt-1">
                    Manage access levels and review institutional staff status.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <button className="border border-gray-300 text-gray-900 px-4 py-2 rounded text-sm font-bold hover:bg-gray-50">
                    Export Logs
                  </button>
                  <button className="bg-[#1a5c3a] text-white px-4 py-2 rounded text-sm font-bold hover:bg-[#154d2f] flex items-center gap-2">
                    <span>+</span>
                    Add New Admin
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <th className="px-8 py-4 text-left text-xs font-bold text-gray-600 tracking-wide">
                        NAME & EMAIL
                      </th>
                      <th className="px-8 py-4 text-left text-xs font-bold text-gray-600 tracking-wide">
                        CURRENT ROLE
                      </th>
                      <th className="px-8 py-4 text-left text-xs font-bold text-gray-600 tracking-wide">
                        DEPARTMENT
                      </th>
                      <th className="px-8 py-4 text-left text-xs font-bold text-gray-600 tracking-wide">
                        LAST ACTIVITY
                      </th>
                      <th className="px-8 py-4 text-left text-xs font-bold text-gray-600 tracking-wide">
                        STATUS
                      </th>
                      <th className="px-8 py-4 text-left text-xs font-bold text-gray-600 tracking-wide">
                        ACTIONS
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {adminStaff.map((staff, idx) => (
                      <tr
                        key={idx}
                        className="border-b border-gray-200 hover:bg-gray-50"
                      >
                        <td className="px-8 py-5">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-green-100 to-green-50 rounded-lg flex items-center justify-center font-bold text-sm text-gray-700">
                              {staff.initials}
                            </div>
                            <div>
                              <p className="font-bold text-sm text-gray-900">
                                {staff.name}
                              </p>
                              <p className="text-xs text-gray-500">
                                {staff.email}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-8 py-5">
                          {staff.role ? (
                            <span className="inline-block bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">
                              {staff.role}
                            </span>
                          ) : (
                            <div className="flex gap-1">
                              <span className="inline-block bg-yellow-100 text-yellow-700 text-xs font-bold px-2 py-1 rounded">
                                SUPER
                              </span>
                              <span className="inline-block bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">
                                ADMIN
                              </span>
                            </div>
                          )}
                        </td>
                        <td className="px-8 py-5 text-sm text-gray-700">
                          {staff.department}
                        </td>
                        <td className="px-8 py-5 text-sm text-gray-700">
                          {staff.lastActivity}
                        </td>
                        <td className="px-8 py-5">
                          <span
                            className={`inline-flex items-center gap-1.5 text-xs font-bold px-2 py-1 rounded ${
                              staff.status === "ACTIVE"
                                ? "bg-green-100 text-green-700"
                                : "bg-gray-100 text-gray-600"
                            }`}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                            {staff.status}
                          </span>
                        </td>
                        <td className="px-8 py-5">
                          <div className="flex items-center gap-2">
                            <button className="p-1.5 hover:bg-gray-200 rounded">
                              <Share2 className="w-4 h-4 text-gray-600" />
                            </button>
                            <button className="p-1.5 hover:bg-gray-200 rounded">
                              <Eye className="w-4 h-4 text-gray-600" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="px-8 py-4 border-t border-gray-200 flex items-center justify-between text-xs text-gray-600">
                <p>Showing 1 to 3 of 24 Personnel Records</p>
                <div className="flex items-center gap-2">
                  <button className="px-3 py-1 rounded hover:bg-gray-100">
                    Previous
                  </button>
                  <button className="px-3 py-1 rounded bg-[#1a5c3a] text-white font-bold">
                    1
                  </button>
                  <button className="px-3 py-1 rounded hover:bg-gray-100">
                    2
                  </button>
                  <button className="px-3 py-1 rounded hover:bg-gray-100">
                    3
                  </button>
                  <button className="px-3 py-1 rounded hover:bg-gray-100">
                    Next
                  </button>
                </div>
              </div>
            </div>

            <Table className="w-full">
              <TableCaption></TableCaption>

              <TableHeader>
                <TableRow className="bg-gray-200">
                  <TableHead className="w-[35%] text-left">
                    STAFF NAME
                  </TableHead>
                  <TableHead className="w-[15%] text-left">STAFF ID </TableHead>
                  <TableHead className="w-[20%] text-left">ROLE</TableHead>
                  <TableHead className="w-[10%] text-center">
                    DEPARTMENT
                  </TableHead>
                  <TableHead className="w-[20%] text-right">ACTION</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                <TableRow>
                  <TableCell className="text-left">
                    Probate application created
                  </TableCell>

                  <TableCell className="text-left">
                    <span className="px-2 py-1 text-xs rounded bg-gray-100">
                      1234567890
                    </span>
                  </TableCell>

                  <TableCell className="text-left">
                    <span className="px-2 py-1 text-xs rounded bg-gray-100">
                      John Doe
                    </span>
                  </TableCell>

                  <TableCell className="text-center">
                    <span className="px-2 py-1 text-xs rounded bg-green-100 text-green-700">
                      Approved
                    </span>
                  </TableCell>

                  <TableCell className="">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-1.5 hover:bg-gray-200 rounded " >
                        <FaCheckCircle className="w-4 h-4 text-green-500" />
                      </button>
                      <button className="p-1.5 hover:bg-gray-200 rounded">
                        <CircleX className="w-4 h-4  text-red-500" />
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>

              <TableFooter />
            </Table>

            {/* <div className="grid grid-cols-3 gap-6">
            <div className="col-span-2 bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="px-8 py-6 border-b border-gray-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-gray-600" />
                  <h3 className="font-black text-gray-900">
                    Recent Authorization Logs
                  </h3>
                </div>
                <a
                  href="#"
                  className="text-[#1a5c3a] font-bold text-sm hover:underline"
                >
                  View All Logs
                </a>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="px-8 py-5 flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Shield className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">
                      <span className="font-bold">Olawale Adeyemi</span> updated
                      access permissions for Bank Portal 4
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      TODAY, 11:24 AM • IP: 192.168.1.45
                    </p>
                  </div>
                </div>
                <div className="px-8 py-5 flex items-start gap-4">
                  <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <AlertCircle className="w-4 h-4 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">
                      Failed login attempt on account{" "}
                      <span className="font-bold">m.musa@fct.gov.ng</span>
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      TODAY, 10:52 AM • IP: 196.225.85.33
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#1a5c3a] rounded-lg p-8 text-white">
              <p className="text-xs font-bold tracking-wider text-green-200 mb-2">
                ADMINISTRATIVE ADVISORY
              </p>
              <h3 className="text-2xl font-black mb-4">
                Bi-Annual Access Review Protocol
              </h3>
              <p className="text-sm leading-relaxed mb-6">
                According to Section 4.2 of the Judicial Admin Policy, all
                Administrative access levels must be verified every bi-annual
                cycle.
              </p>
              <button className="w-full bg-white text-[#1a5c3a] px-4 py-2 rounded font-bold text-sm hover:bg-gray-100">
                Review Schedule
              </button>
            </div>
          </div> */}
          </div>
        </main>
      </div>
    </SuperAdminLayout>
  );
}

export default SuperAdminManagement;
