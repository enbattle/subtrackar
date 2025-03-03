"use client";

import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  ArrowUpDown,
  Calendar,
  CreditCard,
  Download,
  Edit,
  Filter,
  MoreHorizontal,
  Plus,
  Search,
  Trash2,
} from "lucide-react";
import { api } from "@/shared/api";
import { Skeleton } from "@/components/ui/skeleton";
// Add Image import
import Image from "next/image";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Badge } from "@/components/ui/badge";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"];

const categoryData = [
  { name: "Cloud Services", value: 432.18 },
  { name: "Productivity", value: 237.99 },
  { name: "CRM", value: 150.0 },
  { name: "Design", value: 52.99 },
  { name: "AI", value: 62.0 },
];

const monthlyData = [
  { name: "Dec", amount: 2100 },
  { name: "Jan", amount: 2300 },
  { name: "Feb", amount: 2500 },
  { name: "Mar", amount: 2700 },
  { name: "Apr", amount: 2800 },
  { name: "May", amount: 2856 },
];

const upcomingRenewals = [
  {
    name: "Adobe Creative Cloud",
    date: "June 30, 2025",
    amount: "$52.99",
    logo: "/placeholder.svg",
  },
  {
    name: "AWS",
    date: "July 1, 2025",
    amount: "$432.18",
    logo: "/placeholder.svg",
  },
  {
    name: "Salesforce",
    date: "July 5, 2025",
    amount: "$150.00",
    logo: "/placeholder.svg",
  },
];

export default function SubscriptionsPage() {
  const { data: subscriptions, isLoading } = useQuery({
    queryKey: ["subscriptions"],
    queryFn: api.getSubscriptions,
  });

  return (
    <div className="flex flex-col gap-6 p-4 md:gap-8 md:p-8">
      {/* Header section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Subscriptions</h1>
          <p className="text-muted-foreground">
            Manage and track all your company subscriptions
          </p>
        </div>
        <Button className="gap-1">
          <Plus className="h-4 w-4" />
          Add Subscription
        </Button>
      </div>

      {/* Main content */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle>All Subscriptions</CardTitle>
          <CardDescription>
            You have {subscriptions?.length || 0} active subscriptions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search subscriptions..."
                    className="pl-8 w-[300px]"
                  />
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="gap-1">
                      <Filter className="h-4 w-4" />
                      Filter
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-[200px]">
                    <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Category</DropdownMenuItem>
                    <DropdownMenuItem>Billing Cycle</DropdownMenuItem>
                    <DropdownMenuItem>Price Range</DropdownMenuItem>
                    <DropdownMenuItem>Status</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button variant="outline" size="sm" className="gap-1">
                  <ArrowUpDown className="h-4 w-4" />
                  Sort
                </Button>
              </div>
              <Button variant="outline" size="sm" className="gap-1">
                <Download className="h-4 w-4" />
                Export
              </Button>
            </div>

            {/* Subscriptions table */}
            <div className="rounded-lg border">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b bg-muted/50">
                      <th className="px-4 py-3 text-left text-sm font-medium">
                        Name
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium">
                        Category
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium">
                        Price
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium">
                        Billing Cycle
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium">
                        Next Renewal
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium">
                        Status
                      </th>
                      <th className="px-4 py-3 text-right text-sm font-medium">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {isLoading
                      ? // Loading skeleton
                        Array(5)
                          .fill(0)
                          .map((_, index) => (
                            <tr key={index} className="border-b">
                              <td className="px-4 py-3">
                                <div className="flex items-center gap-3">
                                  <Skeleton className="h-10 w-10 rounded-full" />
                                  <Skeleton className="h-5 w-32" />
                                </div>
                              </td>
                              <td className="px-4 py-3">
                                <Skeleton className="h-5 w-24" />
                              </td>
                              <td className="px-4 py-3">
                                <Skeleton className="h-5 w-20" />
                              </td>
                              <td className="px-4 py-3">
                                <Skeleton className="h-5 w-24" />
                              </td>
                              <td className="px-4 py-3">
                                <Skeleton className="h-5 w-28" />
                              </td>
                              <td className="px-4 py-3">
                                <Skeleton className="h-5 w-16" />
                              </td>
                              <td className="px-4 py-3 text-right">
                                <Skeleton className="h-8 w-8 rounded-md ml-auto" />
                              </td>
                            </tr>
                          ))
                      : subscriptions?.map((subscription) => (
                          <tr key={subscription.id} className="border-b">
                            <td className="px-4 py-3">
                              <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                                  <Image
                                    src={
                                      subscription.logo || "/placeholder.svg"
                                    }
                                    alt={subscription.name}
                                    width={24}
                                    height={24}
                                    className="h-6 w-6"
                                  />
                                </div>
                                <div>
                                  <p className="font-medium">
                                    {subscription.name}
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td className="px-4 py-3 text-sm">
                              {subscription.category}
                            </td>
                            <td className="px-4 py-3 text-sm">
                              ${subscription.price?.toFixed(2)}
                            </td>
                            <td className="px-4 py-3 text-sm">
                              {subscription.billingCycle}
                            </td>
                            <td className="px-4 py-3 text-sm">
                              {subscription.nextRenewal}
                            </td>
                            <td className="px-4 py-3">
                              <div className="inline-flex items-center rounded-full border border-green-200 bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-800 dark:border-green-800 dark:bg-green-950 dark:text-green-400">
                                {subscription.status}
                              </div>
                            </td>
                            <td className="px-4 py-3 text-right">
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-8 w-8"
                                  >
                                    <MoreHorizontal className="h-4 w-4" />
                                    <span className="sr-only">Actions</span>
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuItem className="flex items-center gap-2">
                                    <Edit className="h-4 w-4" /> Edit
                                  </DropdownMenuItem>
                                  <DropdownMenuItem className="flex items-center gap-2">
                                    <Calendar className="h-4 w-4" /> Change
                                    renewal
                                  </DropdownMenuItem>
                                  <DropdownMenuItem className="flex items-center gap-2">
                                    <CreditCard className="h-4 w-4" /> Update
                                    payment
                                  </DropdownMenuItem>
                                  <DropdownMenuSeparator />
                                  <DropdownMenuItem className="flex items-center gap-2 text-red-600">
                                    <Trash2 className="h-4 w-4" /> Cancel
                                    subscription
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </td>
                          </tr>
                        ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Subscription Categories</CardTitle>
            <CardDescription>
              Breakdown of subscriptions by category
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[200px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) =>
                      `${name} ${(percent * 100).toFixed(0)}%`
                    }
                  >
                    {categoryData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value) => `$${value}`}
                    contentStyle={{
                      backgroundColor: "hsl(var(--background))",
                      border: "1px solid hsl(var(--border))",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Monthly Spending</CardTitle>
            <CardDescription>Total monthly subscription costs</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[200px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip
                    formatter={(value) => `$${value}`}
                    contentStyle={{
                      backgroundColor: "rgb(54, 69, 79)",
                      border: "1px solid hsl(var(--border))",
                    }}
                  />
                  <Bar dataKey="amount" fill="skyblue" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Renewal Calendar</CardTitle>
            <CardDescription>Upcoming subscription renewals</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingRenewals?.slice(0, 3).map((renewal) => (
                <div
                  key={renewal.name}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
                      <Image
                        src={renewal.logo || "/placeholder.svg"}
                        alt={renewal.name}
                        width={20}
                        height={20}
                        className="h-5 w-5"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{renewal.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {renewal.date}
                      </p>
                    </div>
                  </div>
                  <Badge variant="outline">{renewal.amount}</Badge>
                </div>
              ))}
              <Button variant="outline" className="w-full">
                View All
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
