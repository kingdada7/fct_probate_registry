import React from "react";
import SuperAdminLayout from "@/layouts/SuperAdminLayout";
import { ChartAreaInteractive } from "@/components/chart-area-interactive";
import { SectionCards } from "@/components/section-cards";
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



function SuperAdminDashboard() {
  return (
    <SuperAdminLayout>
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <SectionCards />
            <div className="px-4 lg:px-6">
              <ChartAreaInteractive />
            </div>
            <Table className="w-full">
              <TableCaption></TableCaption>

              <TableHeader>
                <TableRow className="bg-gray-200">
                  <TableHead className="w-[35%] text-left">
                    Activity Description
                  </TableHead>
                  <TableHead className="w-[15%] text-left">
                    File Number
                  </TableHead>
                  <TableHead className="w-[20%] text-left">
                    Admin Officer
                  </TableHead>
                  <TableHead className="w-[10%] text-center">Status</TableHead>
                  <TableHead className="w-[20%] text-right">
                    Timestamp
                  </TableHead>
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

                  <TableCell className="text-right">
                    2023-10-10 10:00 AM
                  </TableCell>
                </TableRow>
              </TableBody>

              <TableFooter />
            </Table>
          </div>
        </div>
      </div>
    </SuperAdminLayout>
  );
}

export default SuperAdminDashboard;
