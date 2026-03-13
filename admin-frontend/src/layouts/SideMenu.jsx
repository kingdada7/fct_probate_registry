import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarFooter,
 
  SidebarHeader,
} from "@/components/ui/sidebar";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroup />
        <SidebarGroupContent>
          <SidebarMenu></SidebarMenu>
        </SidebarGroupContent>
      </SidebarContent>

      <SidebarFooter />
    </Sidebar>
  );
}
