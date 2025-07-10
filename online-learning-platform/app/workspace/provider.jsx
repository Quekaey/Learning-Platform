import React from "react";
import { SidebarTrigger, SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "./_components/AppSidebar";

function WorkspaceProvider({ children }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarTrigger />
      <div>{children}</div>
    </SidebarProvider>
  );
}

export default WorkspaceProvider;
