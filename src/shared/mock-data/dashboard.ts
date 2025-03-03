import type { DashboardStat, UpcomingRenewal, TopSubscription } from "../types";

export const dashboardStats: DashboardStat[] = [
  {
    title: "Total Subscriptions",
    value: "24",
    change: "+2",
    changeType: "increase",
  },
  {
    title: "Monthly Spend",
    value: "$2,856",
    change: "+12.5%",
    changeType: "increase",
  },
  {
    title: "Annual Projection",
    value: "$34,272",
    change: "+8.2%",
    changeType: "increase",
  },
  {
    title: "Average Cost/Sub",
    value: "$119",
    change: "-2.3%",
    changeType: "decrease",
  },
];

export interface SpendingChartData {
  name: string;
  amount: number;
}

export const monthlySpending: SpendingChartData[] = [
  { name: "Dec", amount: 2100 },
  { name: "Jan", amount: 2300 },
  { name: "Feb", amount: 2500 },
  { name: "Mar", amount: 2700 },
  { name: "Apr", amount: 2800 },
  { name: "May", amount: 2856 },
];

export const categoryDistribution: SpendingChartData[] = [
  { name: "Cloud", amount: 432.18 },
  { name: "Productivity", amount: 237.99 },
  { name: "CRM", amount: 150.0 },
];

export const upcomingRenewals: UpcomingRenewal[] = [
  {
    name: "Adobe Creative Cloud",
    date: "2025-05-15",
    amount: "$52.99",
    logo: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Slack",
    date: "2025-05-18",
    amount: "$12.50",
    logo: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "AWS",
    date: "2025-05-20",
    amount: "$432.18",
    logo: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Google Workspace",
    date: "2025-06-01",
    amount: "$138.00",
    logo: "/placeholder.svg?height=40&width=40",
  },
];

export const topSubscriptions: TopSubscription[] = [
  {
    name: "AWS",
    amount: "$432.18",
    category: "Cloud Services",
    logo: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Google Workspace",
    amount: "$138.00",
    category: "Productivity",
    logo: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Salesforce",
    amount: "$150.00",
    category: "CRM",
    logo: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Microsoft 365",
    amount: "$99.99",
    category: "Productivity",
    logo: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Adobe Creative Cloud",
    amount: "$52.99",
    category: "Design",
    logo: "/placeholder.svg?height=40&width=40",
  },
];
