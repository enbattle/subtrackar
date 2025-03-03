"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ThemeSwitcher } from "./theme-switcher";
import { useTheme } from "next-themes";
import {
  AlertCircle,
  CreditCard,
  Loader2,
  Lock,
  Mail,
  Settings,
  Shield,
  UserPlus,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useQuery } from "@tanstack/react-query";
import {
  userProfile,
  notificationSettings,
  appearanceSettings,
} from "@/shared/mock-data/settings";

export default function SettingsPage() {
  // Remove unused variables from the queries
  const { data: profile } = useQuery({
    queryKey: ["user-profile"],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 800));
      return userProfile;
    },
  });

  // Remove unused notifications and appearance queries if they're not being used
  const { data: notifications } = useQuery({
    queryKey: ["notification-settings"],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 600));
      return notificationSettings;
    },
  });

  const { data: appearance } = useQuery({
    queryKey: ["appearance-settings"],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      return appearanceSettings;
    },
  });

  // Update your form state to use the fetched data
  const [profileData, setProfileData] = useState(
    profile || {
      name: "",
      email: "",
      company: "",
      role: "",
    }
  );

  // When the profile data loads, update the form state
  useEffect(() => {
    if (profile) {
      setProfileData(profile);
    }
  }, [profile]);

  const [isLoading, setIsLoading] = useState(false);
  const { theme } = useTheme();
  // const [profileData, setProfileData] = useState({
  //   name: "John Doe",
  //   email: "john@example.com",
  //   company: "Acme Inc.",
  //   role: "Administrator",
  // })

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({ ...prev, [name]: value }));
  };

  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  // Mock data for team members
  const teamMembers = [
    {
      name: "John Doe",
      email: "john@example.com",
      role: "Admin",
      lastActive: "2 hours ago",
      status: "Active",
    },
    {
      name: "Jane Smith",
      email: "jane@example.com",
      role: "Editor",
      lastActive: "1 day ago",
      status: "Active",
    },
    {
      name: "Mike Johnson",
      email: "mike@example.com",
      role: "Viewer",
      lastActive: "3 days ago",
      status: "Inactive",
    },
  ];

  return (
    <div className="flex flex-col gap-6 p-4 md:gap-8 md:p-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">
          Manage your account settings and preferences
        </p>
      </div>

      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid w-full grid-cols-5 md:w-[600px]">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
          <TabsTrigger value="team">Team</TabsTrigger>
        </TabsList>

        {/* Profile Tab Content */}
        <TabsContent value="profile" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Profile</CardTitle>
              <CardDescription>
                Manage your personal information and preferences
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleProfileSubmit}>
              <CardContent className="space-y-6">
                <div className="flex flex-col gap-6 md:flex-row">
                  <div className="flex-1 space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={profileData.name}
                        onChange={handleProfileChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={profileData.email}
                        onChange={handleProfileChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        name="company"
                        value={profileData.company}
                        onChange={handleProfileChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="role">Role</Label>
                      <Select defaultValue={profileData.role}>
                        <SelectTrigger id="role">
                          <SelectValue placeholder="Select role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Administrator">
                            Administrator
                          </SelectItem>
                          <SelectItem value="Manager">Manager</SelectItem>
                          <SelectItem value="User">User</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="flex flex-col items-center gap-4">
                    <Avatar className="h-32 w-32">
                      <AvatarImage src="" alt="Profile" />
                      <AvatarFallback className="text-4xl">JD</AvatarFallback>
                    </Avatar>
                    <Button variant="outline" size="sm">
                      Change Avatar
                    </Button>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Security</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Two-factor Authentication</Label>
                        <p className="text-sm text-muted-foreground">
                          Add an extra layer of security to your account
                        </p>
                      </div>
                      <Button variant="outline" size="sm" className="gap-2">
                        <Shield className="h-4 w-4" />
                        Enable
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Change Password</Label>
                        <p className="text-sm text-muted-foreground">
                          Update your password regularly to keep your account
                          secure
                        </p>
                      </div>
                      <Button variant="outline" size="sm" className="gap-2">
                        <Lock className="h-4 w-4" />
                        Update
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="justify-end space-x-2">
                <Button variant="ghost">Cancel</Button>
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Please wait
                    </>
                  ) : (
                    "Save Changes"
                  )}
                </Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>

        {/* Notifications Tab Content */}
        <TabsContent value="notifications" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
              <CardDescription>
                Configure how you receive notifications.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Email Notifications</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Subscription Renewals</Label>
                      <p className="text-sm text-muted-foreground">
                        Get notified before subscriptions renew
                      </p>
                    </div>
                    <Switch
                      defaultChecked={notifications?.subscriptionRenewals}
                    />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Price Changes</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive alerts about subscription price changes
                      </p>
                    </div>
                    <Switch defaultChecked={notifications?.priceChanges} />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Usage Reports</Label>
                      <p className="text-sm text-muted-foreground">
                        Weekly summary of subscription usage
                      </p>
                    </div>
                    <Switch defaultChecked={notifications?.usageReports} />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Push Notifications</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Browser Notifications</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive notifications in your browser
                      </p>
                    </div>
                    <Switch
                      defaultChecked={notifications?.browserNotifications}
                    />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Mobile Push Notifications</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive notifications on your mobile device
                      </p>
                    </div>
                    <Switch
                      defaultChecked={notifications?.mobilePushNotifications}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-muted-foreground">
                We&apos;ll always let you know about important changes, even if
                you turn off notifications.
              </p>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Appearance Tab Content */}
        <TabsContent value="appearance" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Appearance</CardTitle>
              <CardDescription>
                Customize the appearance of the application. Choose between
                light and dark mode.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Theme</Label>
                    <p className="text-sm text-muted-foreground">
                      Select your preferred theme for the dashboard.
                    </p>
                  </div>
                  <ThemeSwitcher />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Reduced Motion</Label>
                    <p className="text-sm text-muted-foreground">
                      Reduce motion effects throughout the interface.
                    </p>
                  </div>
                  <Switch defaultChecked={appearance?.reducedMotion} />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>High Contrast</Label>
                    <p className="text-sm text-muted-foreground">
                      Increase contrast for better visibility.
                    </p>
                  </div>
                  <Switch defaultChecked={appearance?.highContrast} />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-muted-foreground">
                Your theme preference is currently set to{" "}
                <span className="font-medium text-foreground">
                  {theme === "system"
                    ? "System"
                    : theme === "dark"
                    ? "Dark"
                    : "Light"}
                </span>
                .
              </p>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Billing Tab Content */}
        <TabsContent value="billing" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Billing</CardTitle>
              <CardDescription>
                Manage your subscription plan and billing information.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Current Plan</h3>
                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Professional Plan</p>
                      <p className="text-sm text-muted-foreground">$29/month</p>
                    </div>
                    <Badge>Current Plan</Badge>
                  </div>
                  <Separator className="my-4" />
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">Unlimited subscriptions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">Advanced analytics</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">Team collaboration</span>
                    </div>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <Button variant="outline">Change Plan</Button>
                    <Button variant="destructive">Cancel Plan</Button>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Payment Method</h3>
                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <CreditCard className="h-6 w-6" />
                      <div>
                        <p className="font-medium">•••• •••• •••• 4242</p>
                        <p className="text-sm text-muted-foreground">
                          Expires 12/24
                        </p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      Edit
                    </Button>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Billing History</h3>
                <div className="rounded-lg border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Invoice</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>Apr 1, 2025</TableCell>
                        <TableCell>$29.00</TableCell>
                        <TableCell>
                          <Badge variant="success">Paid</Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            Download
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Mar 1, 2025</TableCell>
                        <TableCell>$29.00</TableCell>
                        <TableCell>
                          <Badge variant="success">Paid</Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            Download
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Feb 1, 2025</TableCell>
                        <TableCell>$29.00</TableCell>
                        <TableCell>
                          <Badge variant="success">Paid</Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            Download
                          </Button>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Team Tab Content */}
        <TabsContent value="team" className="mt-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Team Members</CardTitle>
                  <CardDescription>
                    Manage your team members and their access levels.
                  </CardDescription>
                </div>
                <Button className="gap-2">
                  <UserPlus className="h-4 w-4" />
                  Add Member
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="rounded-lg border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Member</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Last Active</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {teamMembers.map((member) => (
                      <TableRow key={member.email}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src="" alt={member.name} />
                              <AvatarFallback>
                                {member.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">{member.name}</p>
                              <p className="text-sm text-muted-foreground">
                                {member.email}
                              </p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{member.role}</TableCell>
                        <TableCell>{member.lastActive}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              member.status === "Active"
                                ? "success"
                                : "secondary"
                            }
                          >
                            {member.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            <Settings className="h-4 w-4" />
                            <span className="sr-only">Settings</span>
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Pending Invitations</h3>
                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Mail className="h-6 w-6 text-muted-foreground" />
                      <div>
                        <p className="font-medium">sarah@example.com</p>
                        <p className="text-sm text-muted-foreground">
                          Invited 2 days ago
                        </p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      Revoke
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <p className="flex items-center gap-2 text-sm text-muted-foreground">
                <AlertCircle className="h-4 w-4" />
                Team members will be able to manage subscriptions based on their
                role.
              </p>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

function Check(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
