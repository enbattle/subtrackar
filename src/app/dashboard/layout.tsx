"use client";

import type React from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  BarChart3,
  Bell,
  Calendar,
  CreditCard,
  Home,
  LogOut,
  Menu,
  Search,
  Settings,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface SidebarNavProps {
  isCollapsed: boolean;
}

function SidebarNav({ isCollapsed }: SidebarNavProps) {
  const pathname = usePathname();

  const routes = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: Home,
    },
    {
      title: "Subscriptions",
      href: "/dashboard/subscriptions",
      icon: CreditCard,
    },
    {
      title: "Calendar",
      href: "/dashboard/calendar",
      icon: Calendar,
    },
    {
      title: "Analytics",
      href: "/dashboard/analytics",
      icon: BarChart3,
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: Settings,
    },
  ];

  return (
    <div
      data-collapsed={isCollapsed}
      className="group flex flex-col gap-4 py-2"
    >
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={`flex h-10 items-center gap-3 rounded-md px-3 text-sm font-medium ${
            pathname === route.href
              ? "bg-primary text-primary-foreground"
              : "hover:bg-muted/50"
          } ${isCollapsed ? "justify-center" : ""}`}
        >
          <route.icon className="h-5 w-5" />
          {!isCollapsed && <span>{route.title}</span>}
        </Link>
      ))}
    </div>
  );
}

function Input({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...props}
    />
  );
}

const queryClient = new QueryClient();

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const newIsMobile = window.innerWidth < 768;
      setIsMobile(newIsMobile);
      if (window.innerWidth < 1024) {
        setIsCollapsed(true);
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
          <div className="flex items-center gap-2 md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="shrink-0">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="flex flex-col">
                <div className="flex items-center gap-2 border-b pb-4">
                  <CreditCard className="h-6 w-6 text-primary" />
                  <span className="text-lg font-bold">Subtrackar</span>
                </div>
                <div className="flex-1 py-4">
                  <SidebarNav isCollapsed={false} />
                </div>
              </SheetContent>
            </Sheet>
            <Link href="/" className="flex items-center gap-2">
              <CreditCard className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">Subtrackar</span>
            </Link>
          </div>
          <div className="hidden gap-2 md:flex">
            <Link href="/" className="flex items-center gap-2">
              <CreditCard className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">Subtrackar</span>
            </Link>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0"
              onClick={() => setIsCollapsed(!isCollapsed)}
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </div>
          <div className="relative ml-auto flex-1 md:grow-0">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[300px]"
            />
          </div>
          <Button variant="outline" size="icon" className="shrink-0">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
          <Avatar>
            <AvatarImage src="" alt="User" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </header>
        <div className="flex flex-1">
          <aside
            data-collapsed={isCollapsed}
            className={`${
              isCollapsed ? "w-16" : "w-64"
            } hidden border-r bg-muted/40 ${isMobile ? "" : "md:block"}`}
          >
            <div className="flex h-full flex-col gap-2">
              <div className="flex h-14 items-center border-b px-4">
                {!isCollapsed && (
                  <span className="text-sm font-medium">Navigation</span>
                )}
              </div>
              <div className="flex-1 overflow-auto">
                <SidebarNav isCollapsed={isCollapsed} />
              </div>
              <div className="border-t p-4">
                <Button
                  variant="outline"
                  size="sm"
                  className={`w-full justify-start ${
                    isCollapsed ? "px-2" : ""
                  }`}
                >
                  <LogOut className="h-4 w-4" />
                  {!isCollapsed && <span className="ml-2">Log out</span>}
                </Button>
              </div>
            </div>
          </aside>
          <main className="flex-1">{children}</main>
        </div>
      </div>
    </QueryClientProvider>
  );
}
