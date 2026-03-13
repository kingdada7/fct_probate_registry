import { AppSidebar } from "@/components/app-sidebar";

// import { DataTable } from "@/components/data-table";

import { SiteHeader } from "@/components/site-header";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

// import data from "../../src/pages/auth/data.json";

export default function SuperAdminLayout({ children }) {
  return (
    <SidebarProvider
      style={{
        "--sidebar-width": "calc(var(--spacing) * 72)",
        "--header-height": "calc(var(--spacing) * 12)",
      }}
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />

        <div className="">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
