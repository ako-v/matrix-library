import React from "react";
import { Meta } from "@storybook/react/*";

import { Button } from "../button/Button";
import { HomeIcon } from "../Icons/HomeIcon";
import { EyeOpenIcon } from "../Icons/EyeOpenIcon";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "./Sidebar";

const meta: Meta<typeof Sidebar> = {
  title: "Components/Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

const AppSidebar = () => {
  const [leftOpen, setLeftOpen] = React.useState(false);
  const [rightOpen, setRightOpen] = React.useState(false);
  return (
    <SidebarProvider open={rightOpen} onOpenChange={setRightOpen}>
      <SidebarProvider open={leftOpen} onOpenChange={setLeftOpen}>
        <Sidebar collapsible="icon" variant="sidebar" side="left" width={"12rem"} widthIcon="3rem">
          <SidebarContent className="bg-white">
            <SidebarGroup>
              <SidebarGroupLabel>Platform</SidebarGroupLabel>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton tooltip="dashboard">
                    <HomeIcon />
                    Dashboard
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroup>
            <SidebarGroup />
          </SidebarContent>
        </Sidebar>
        <SidebarInset className="p-4">
          <div>This is the main content</div>
          <div className="flex justify-between">
            <Button onClick={() => setLeftOpen(prev => !prev)}>Toggle Sidebar Left</Button>
            <Button onClick={() => setRightOpen(prev => !prev)}>Toggle Sidebar Right</Button>
          </div>
        </SidebarInset>
      </SidebarProvider>
      <Sidebar collapsible="offcanvas" variant="sidebar" side="right" widthMobile="12rem">
        <SidebarContent className="bg-gray-0">
          <SidebarGroup>
            <SidebarGroupLabel>Platform</SidebarGroupLabel>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="dashboard">
                  Watch
                  <EyeOpenIcon />
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
          <SidebarGroup />
        </SidebarContent>
        <SidebarFooter />
      </Sidebar>
    </SidebarProvider>
  );
};

export const Default = () => {
  return <AppSidebar />;
};

export default meta;
