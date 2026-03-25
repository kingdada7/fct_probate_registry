import {
  Users,
  Share2,
  Eye,
  Clock,
  Radio,
  Folder,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
  CircleX,
  Trash2,
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
import { useState, useEffect } from "react";
import axiosInstance from "../utils/axiosInstanceAdmin";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

function SuperAdminManagement() {
  const [admins, setAdmins] = useState([]);
  const [approvedAdmins, setApprovedAdmins] = useState([]);
  const [onlineAdmins, setOnlineAdmins] = useState([]);
  const [deletedAdmins, setDeletedAdmins] = useState([]);

  const fetchAdmins = async () => {
    try {
      const res = await axiosInstance.get("/api/admin/pending");
      setAdmins(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchAdmins();
  }, []);

  const approveAdmin = async (id) => {
    try {
      await axiosInstance.put(`/api/admin/status/${id}`, {
        status: "approved",
      });

      alert("Admin approved");
      fetchAdmins(); // refresh list
    } catch (err) {
      console.error(err);
    }
  };

  const rejectAdmin = async (id) => {
    try {
      await axiosInstance.put(`/api/admin/status/${id}`, {
        status: "rejected",
      });

      alert("Admin rejected");
      fetchAdmins();
    } catch (err) {
      console.error(err);
    }
  };
  const fetchApprovedAdmins = async () => {
    try {
      const res = await axiosInstance.get("/api/admin/approved");
      setApprovedAdmins(res.data);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    fetchAdmins(); // pending
    fetchApprovedAdmins(); // approved
  }, []);

  const fetchOnlineAdmins = async (req, res) => {
    try {
      const res = await axiosInstance.get("/api/admin/online");
      setOnlineAdmins(res.data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  useEffect(() => {
    fetchOnlineAdmins();
  }, []);


const deleteAdmin = async (id) => {
  try {
    await axiosInstance.delete(`/api/admin/delete/${id}`);
    alert("Admin deleted");
    fetchAdmins(); // refresh list
  } catch (err) {
    console.error(err);
  }
};
 useEffect(() => {
  fetchAdmins();
  }, []);
    

  return (
    <SuperAdminLayout activeMenu="Dashboard">
      <div className="min-h-screen bg-gray-100 flex">
        <main className="flex-1 overflow-auto">
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
                <div className="text-4xl font-black text-gray-900 mb-2">
                  {approvedAdmins.length}
                </div>
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
                <div className="text-4xl font-black text-red-600 mb-2">
                  {admins.length}
                </div>
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
                <div className="text-4xl font-black text-gray-900 mb-2">
                  {onlineAdmins.length}
                </div>
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
                    {approvedAdmins.map((admin) => (
                      <tr
                        key={admin._id}
                        className="border-b border-gray-200 hover:bg-gray-50"
                      >
                        <td className="px-8 py-5">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-green-100 to-green-50 rounded-lg flex items-center justify-center font-bold text-sm text-gray-700">
                              {admin.name
                                .split(" ") // split full name by spaces
                                .map((n) => n[0]) // take first letter of each part
                                .join("") // join letters
                                .toUpperCase()}
                            </div>
                            <div>
                              <p className="font-bold text-sm text-gray-900">
                                {admin.name}
                              </p>
                              <p className="text-xs text-gray-500">
                                {admin.email}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-5">
                          <span className="inline-block bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">
                            {admin.role}
                          </span>
                        </td>
                        <td className="px-8 py-5 text-sm text-gray-700">
                          {admin.division}
                        </td>
                        <td className="px-8 py-5 text-sm text-gray-700">
                          {admin.lastActive ? (
                            <div>
                              <div>{dayjs(admin.lastActive).fromNow()}</div>
                              <div className="text-xs text-gray-400">
                                {new Date(admin.lastActive).toLocaleString()}
                              </div>
                            </div>
                          ) : (
                            "N/A"
                          )}
                        </td>
                        {/* status */}
                        <td className="px-8 py-5 text-sm">
                          {admin.lastActive ? (
                            (() => {
                              const now = new Date();
                              const last = new Date(admin.lastActive);
                              const diffMinutes = (now - last) / (1000 * 60);

                              let status = "";
                              let color = "";

                              if (diffMinutes <= 2) {
                                status = "Online";
                                color = "text-green-600";
                              } else if (diffMinutes <= 10) {
                                status = "Recently Active";
                                color = "text-yellow-600";
                              } else {
                                status = "Offline";
                                color = "text-red-500";
                              }

                              return (
                                <div className="flex flex-col">
                                  <span className={`font-medium ${color}`}>
                                    ● {status}
                                  </span>
                                  <span className="text-xs text-gray-400">
                                    {dayjs(admin.lastActive).fromNow()}
                                  </span>
                                </div>
                              );
                            })()
                          ) : (
                            <span className="text-gray-400">N/A</span>
                          )}
                        </td>
                        <td className="px-8 py-5">
                          <div className="flex items-center gap-2">
                            {/* delete button */}
                            <button
                              className="p-1.5 hover:bg-red-200 rounded"
                              onClick={() => deleteAdmin(admin._id)}
                            >
                              <Trash2 className="w-4 h-4 text-red-600" />
                            </button>
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

            {/* table for approval and rejection  */}
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
                {admins.map((admin) => (
                  <TableRow key={admin._id}>
                    <TableCell className="text-left">{admin.name}</TableCell>

                    <TableCell className="text-left">
                      <span className="px-2 py-1 text-xs rounded bg-gray-100">
                        {admin.staffId || "N/A"}
                      </span>
                    </TableCell>

                    <TableCell className="text-left">
                      <span className="px-2 py-1 text-xs rounded bg-gray-100">
                        {admin.role}
                      </span>
                    </TableCell>

                    <TableCell className="text-center">
                      {admin.division || "N/A"}
                    </TableCell>

                    <TableCell>
                      <div className="flex items-center justify-end gap-2">
                        {/*  APPROVE */}
                        <button
                          type="button"
                          onClick={() => approveAdmin(admin._id)}
                          className="p-1.5 hover:bg-gray-200 rounded"
                        >
                          <FaCheckCircle className="w-4 h-4 text-green-500" />
                        </button>

                        {/*  REJECT */}
                        <button
                          type="button"
                          onClick={() => rejectAdmin(admin._id)}
                          className="p-1.5 hover:bg-gray-200 rounded"
                        >
                          <CircleX className="w-4 h-4 text-red-500" />
                        </button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter />
            </Table>
          </div>
        </main>
      </div>
    </SuperAdminLayout>
  );
}

export default SuperAdminManagement;
