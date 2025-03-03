"use client";

import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  AlertCircle,
  ArrowUpRight,
  CreditCard,
  Plus,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import {
  dashboardStats,
  upcomingRenewals,
  topSubscriptions,
  monthlySpending,
  categoryDistribution,
} from "@/shared/mock-data/dashboard";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

// Add color constants
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"];

export default function DashboardPage() {
  const { data: stats, isLoading: isLoadingStats } = useQuery({
    queryKey: ["dashboardStats"],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 800));
      return dashboardStats;
    },
  });

  const { data: renewals, isLoading: isLoadingRenewals } = useQuery({
    queryKey: ["upcomingRenewals"],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return upcomingRenewals;
    },
  });

  const { data: topSubs, isLoading: isLoadingTop } = useQuery({
    queryKey: ["topSubscriptions"],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      return topSubscriptions;
    },
  });

  return (
    <div className="flex flex-col gap-6 p-4 md:gap-8 md:p-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Overview of your subscription management
          </p>
        </div>
        <Button className="gap-1">
          <Plus className="h-4 w-4" />
          Add Subscription
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {isLoadingStats
          ? Array(4)
              .fill(0)
              .map((_, i) => (
                <Card key={i}>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <Skeleton className="h-5 w-32" />
                    <Skeleton className="h-4 w-4" />
                  </CardHeader>
                  <CardContent>
                    <Skeleton className="h-7 w-20 mb-1" />
                    <Skeleton className="h-4 w-16" />
                  </CardContent>
                </Card>
              ))
          : stats?.map((stat, index) => (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">
                    {stat.title}
                  </CardTitle>
                  {stat.changeType === "increase" ? (
                    <TrendingUp className="h-4 w-4 text-emerald-500" />
                  ) : stat.changeType === "decrease" ? (
                    <TrendingDown className="h-4 w-4 text-red-500" />
                  ) : (
                    <CreditCard className="h-4 w-4 text-muted-foreground" />
                  )}
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p
                    className={`text-xs ${
                      stat.changeType === "increase"
                        ? "text-emerald-500"
                        : stat.changeType === "decrease"
                        ? "text-red-500"
                        : "text-muted-foreground"
                    }`}
                  >
                    {stat.change}
                  </p>
                </CardContent>
              </Card>
            ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Subscription Spending</CardTitle>
            <CardDescription>
              Your monthly subscription costs over time
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={monthlySpending}
                  margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip
                    formatter={(value) => `$${value}`}
                    contentStyle={{
                      backgroundColor: "hsl(var(--background))",
                      border: "1px solid hsl(var(--border))",
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="amount"
                    stroke="orange"
                    fill="skyblue"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Upcoming Renewals</CardTitle>
            <CardDescription>
              Subscriptions renewing in the next 7 days
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {isLoadingRenewals
                ? Array(3)
                    .fill(0)
                    .map((_, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <Skeleton className="h-10 w-10 rounded-full" />
                        <div className="flex-1 space-y-2">
                          <Skeleton className="h-4 w-[140px]" />
                          <Skeleton className="h-4 w-[100px]" />
                        </div>
                        <div className="flex items-center gap-2">
                          <Skeleton className="h-4 w-16" />
                          <Skeleton className="h-8 w-8 rounded-md" />
                        </div>
                      </div>
                    ))
                : renewals?.map((renewal, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                        <Image
                          src={renewal.logo || "/placeholder.svg"}
                          alt={renewal.name}
                          width={24}
                          height={24}
                          className="h-6 w-6"
                        />
                      </div>
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">
                          {renewal.name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {renewal.date}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <p className="font-medium">{renewal.amount}</p>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                        >
                          <ArrowUpRight className="h-4 w-4" />
                          <span className="sr-only">View details</span>
                        </Button>
                      </div>
                    </div>
                  ))}
              <Button variant="outline" className="w-full">
                View All Renewals
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Category Distribution</CardTitle>
            <CardDescription>Spending by category this month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categoryDistribution}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="amount"
                    label={({ name, percent }) =>
                      `${name} ${(percent * 100).toFixed(0)}%`
                    }
                  >
                    {categoryDistribution.map((entry, index) => (
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
            <CardTitle>Top Subscriptions by Cost</CardTitle>
            <CardDescription>
              Your most expensive monthly subscriptions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {isLoadingTop
                ? Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <Skeleton className="h-10 w-10 rounded-full" />
                        <div className="flex-1 space-y-2">
                          <Skeleton className="h-4 w-[140px]" />
                          <Skeleton className="h-4 w-[100px]" />
                        </div>
                        <Skeleton className="h-4 w-16" />
                      </div>
                    ))
                : topSubs?.map((subscription, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                        <Image
                          src={subscription.logo || "/placeholder.svg"}
                          alt={subscription.name}
                          width={24}
                          height={24}
                          className="h-6 w-6"
                        />
                      </div>
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">
                          {subscription.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {subscription.category}
                        </p>
                      </div>
                      <div className="font-medium">{subscription.amount}</div>
                    </div>
                  ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-orange-200 bg-orange-50 dark:bg-transparent dark:border-orange-900">
        <CardHeader className="flex flex-row items-center gap-2 pb-2">
          <AlertCircle className="h-4 w-4 text-orange-500" />
          <CardTitle className="text-sm font-medium text-orange-700 dark:text-orange-400">
            Optimization Opportunities
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-orange-700 dark:text-orange-400">
            We&apos;ve identified 3 subscriptions with potential savings of up
            to $215/month.{" "}
            <Button
              variant="link"
              className="h-auto p-0 text-orange-700 dark:text-orange-400"
            >
              View recommendations
            </Button>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
