/**
 * Analytics Page Component
 *
 * A client-side component that provides detailed analytics and insights
 * about subscription spending and usage patterns. Includes various charts
 * and metrics to help users understand their subscription costs.
 */

"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  AreaChart,
  Area,
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
import {
  spendingOverTime,
  categoryData,
  subscriptionTrends,
} from "@/shared/mock-data/analytics";

// Color palette for charts and visualizations
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"];

/**
 * AnalyticsPage Component
 *
 * Renders the analytics dashboard with:
 * - Key metrics and statistics
 * - Time period selector
 * - Download report functionality
 * - Tabbed interface for different views:
 *   - Spending over time
 *   - Category breakdown
 *   - Subscription trends
 *
 * @returns {JSX.Element} The analytics page component
 */
export default function AnalyticsPage() {
  return (
    <div className="flex flex-col gap-6 p-4 md:gap-8 md:p-8">
      {/* Page header with title and controls */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
          <p className="text-muted-foreground">
            Analyze your subscription spending and usage
          </p>
        </div>
        {/* Time period selector and download button */}
        <div className="flex items-center gap-2">
          <Select defaultValue="last30days">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="last7days">Last 7 days</SelectItem>
              <SelectItem value="last30days">Last 30 days</SelectItem>
              <SelectItem value="last90days">Last 90 days</SelectItem>
              <SelectItem value="lastyear">Last year</SelectItem>
              <SelectItem value="custom">Custom range</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon">
            <Download className="h-4 w-4" />
            <span className="sr-only">Download report</span>
          </Button>
        </div>
      </div>

      {/* Key metrics grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* Total Monthly Spend card */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">
              Total Monthly Spend
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$2,856</div>
            <p className="text-xs text-emerald-500">+12.5% from last month</p>
            <div className="mt-4 h-1 w-full rounded-full bg-muted">
              <div className="h-1 w-[70%] rounded-full bg-primary"></div>
            </div>
          </CardContent>
        </Card>

        {/* Annual Projection card */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">
              Annual Projection
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$34,272</div>
            <p className="text-xs text-emerald-500">+8.2% from last year</p>
            <div className="mt-4 h-1 w-full rounded-full bg-muted">
              <div className="h-1 w-[65%] rounded-full bg-primary"></div>
            </div>
          </CardContent>
        </Card>

        {/* Average Cost per Subscription card */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">
              Average Cost per Subscription
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$119</div>
            <p className="text-xs text-red-500">-2.3% from last month</p>
            <div className="mt-4 h-1 w-full rounded-full bg-muted">
              <div className="h-1 w-[45%] rounded-full bg-primary"></div>
            </div>
          </CardContent>
        </Card>

        {/* Subscription Count card */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">
              Subscription Count
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-emerald-500">+2 from last month</p>
            <div className="mt-4 h-1 w-full rounded-full bg-muted">
              <div className="h-1 w-[80%] rounded-full bg-primary"></div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tabbed interface for different views */}
      <Tabs defaultValue="spending">
        <TabsList className="grid w-full grid-cols-3 md:w-[400px]">
          <TabsTrigger value="spending">Spending</TabsTrigger>
          <TabsTrigger value="categories">Categories</TabsTrigger>
          <TabsTrigger value="trends">Trends</TabsTrigger>
        </TabsList>

        {/* Spending over time chart */}
        <TabsContent value="spending" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Spending Over Time</CardTitle>
              <CardDescription>
                Monthly subscription costs over the past year
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={spendingOverTime}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip
                      formatter={(value) => `$${value}`}
                      contentStyle={{
                        backgroundColor: "hsl(var(--background))",
                        border: "1px solid hsl(var(--border))",
                      }}
                    />
                    {/* Actual spending line */}
                    <Area
                      type="monotone"
                      dataKey="amount"
                      stroke="orangered"
                      fill="yellow"
                    />
                    {/* Projected spending line */}
                    <Area
                      type="monotone"
                      dataKey="projected"
                      stroke="skyblue"
                      fill="orange"
                      strokeDasharray="3 3"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Category breakdown charts */}
        <TabsContent value="categories" className="mt-4">
          <div className="grid gap-4 md:grid-cols-2">
            {/* Spending by Category pie chart */}
            <Card>
              <CardHeader>
                <CardTitle>Spending by Category</CardTitle>
                <CardDescription>
                  Breakdown of costs by subscription category
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={categoryData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={120}
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

            {/* Top Categories bar chart */}
            <Card>
              <CardHeader>
                <CardTitle>Top Categories</CardTitle>
                <CardDescription>
                  Categories with highest spending
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Category progress bars */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">Cloud Services</p>
                      <p className="text-sm font-medium">$432.18</p>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div className="h-2 w-[85%] rounded-full bg-primary"></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">Productivity</p>
                      <p className="text-sm font-medium">$237.99</p>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div className="h-2 w-[65%] rounded-full bg-primary"></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">CRM</p>
                      <p className="text-sm font-medium">$150.00</p>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div className="h-2 w-[45%] rounded-full bg-primary"></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">Design</p>
                      <p className="text-sm font-medium">$52.99</p>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div className="h-2 w-[25%] rounded-full bg-primary"></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">AI</p>
                      <p className="text-sm font-medium">$62.00</p>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div className="h-2 w-[20%] rounded-full bg-primary"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="trends" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Subscription Growth</CardTitle>
              <CardDescription>
                Number of subscriptions over time
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={subscriptionTrends}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--background))",
                        border: "1px solid hsl(var(--border))",
                      }}
                    />
                    <Bar dataKey="subscriptions" fill="hsl(var(--primary))" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Cost Optimization</CardTitle>
            <CardDescription>Potential savings opportunities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                      <Image
                        src="/placeholder.svg"
                        alt="Adobe Creative Cloud"
                        width={24}
                        height={24}
                        className="h-6 w-6"
                      />
                    </div>
                    <div>
                      <p className="font-medium">Adobe Creative Cloud</p>
                      <p className="text-sm text-muted-foreground">
                        Individual licenses vs. team plan
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-emerald-600">Save $120/mo</p>
                    <Button variant="link" className="h-auto p-0">
                      View details
                    </Button>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                      <Image
                        src="/placeholder.svg"
                        alt="Slack"
                        width={24}
                        height={24}
                        className="h-6 w-6"
                      />
                    </div>
                    <div>
                      <p className="font-medium">Slack</p>
                      <p className="text-sm text-muted-foreground">
                        Unused paid seats
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-emerald-600">Save $45/mo</p>
                    <Button variant="link" className="h-auto p-0">
                      View details
                    </Button>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                      <Image
                        src="/placeholder.svg"
                        alt="Zoom"
                        width={24}
                        height={24}
                        className="h-6 w-6"
                      />
                    </div>
                    <div>
                      <p className="font-medium">Zoom</p>
                      <p className="text-sm text-muted-foreground">
                        Duplicate with Microsoft Teams
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-emerald-600">Save $50/mo</p>
                    <Button variant="link" className="h-auto p-0">
                      View details
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Usage Insights</CardTitle>
            <CardDescription>Subscription usage analytics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Google Workspace</p>
                  <p className="text-sm font-medium">High usage</p>
                </div>
                <div className="h-2 w-full rounded-full bg-muted">
                  <div className="h-2 w-[95%] rounded-full bg-emerald-500"></div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Slack</p>
                  <p className="text-sm font-medium">High usage</p>
                </div>
                <div className="h-2 w-full rounded-full bg-muted">
                  <div className="h-2 w-[90%] rounded-full bg-emerald-500"></div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Adobe Creative Cloud</p>
                  <p className="text-sm font-medium">Medium usage</p>
                </div>
                <div className="h-2 w-full rounded-full bg-muted">
                  <div className="h-2 w-[60%] rounded-full bg-yellow-500"></div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Salesforce</p>
                  <p className="text-sm font-medium">Medium usage</p>
                </div>
                <div className="h-2 w-full rounded-full bg-muted">
                  <div className="h-2 w-[50%] rounded-full bg-yellow-500"></div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Zoom</p>
                  <p className="text-sm font-medium">Low usage</p>
                </div>
                <div className="h-2 w-full rounded-full bg-muted">
                  <div className="h-2 w-[25%] rounded-full bg-red-500"></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
