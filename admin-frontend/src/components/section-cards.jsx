import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  TrendingUpIcon,
  TrendingDownIcon,
  Users,
  Folder,
  FolderArchive,
  ClipboardClockIcon,
  BadgeCheckIcon,
  FileWarning,
  IdCardIcon,
  BuildingIcon,
} from "lucide-react";
import { CiMoneyBill } from "react-icons/ci";
import { IoDocumentText } from "react-icons/io5";
import { PiBuildingOffice } from "react-icons/pi";

export function SectionCards() {
  return (
    <div className="grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-linear-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4 dark:*:data-[slot=card]:bg-card">
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
            <IoDocumentText className="w-5 h-5 text-blue-500" />
          </div>
          <Badge variant="success" className="ml-2 bg-green-100 text-green-800">
            12.5%
          </Badge>
        </div>
        <span className="text-xs font-bold text-gray-600 tracking-wide">
          TOTAL APPLICATION
        </span>
        <div className="text-4xl font-black text-gray-900 mb-2">1430</div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
            <CiMoneyBill className="w-5 h-5 text-green-500" />
          </div>
          <Badge variant="success" className="ml-2 bg-green-100 text-green-800">
            92% Rate
          </Badge>
        </div>
        <span className="text-xs font-bold text-gray-600 tracking-wide">
          REVENUE GENERATED
        </span>
        <div className="text-4xl font-black text-gray-900 mb-2">
          &#x20A6;100,000
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
            <IdCardIcon className="w-5 h-5 text-green-500" />
          </div>
          <Badge variant="destructive" className="bg-red-100 text-orange-800">
            action needed
          </Badge>
        </div>
        <span className="text-xs font-bold text-gray-600 tracking-wide">
          ACTIVE STAFF
        </span>
        <div className="text-4xl font-black text-gray-900 mb-2">156</div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
            <PiBuildingOffice className="w-5 h-5 text-green-500" />
          </div>
          <Badge variant="destructive" className="bg-red-100 text-red-800">
            -2.1%
          </Badge>
        </div>
        <span className="text-xs font-bold text-gray-600 tracking-wide">
          PENDING VERFICATION
        </span>
        <div className="text-4xl font-black text-gray-900 mb-2">1</div>
        <p className="text-xs text-green-600 font-bold">+2 this week</p>
      </div>
    </div>
  );
}
