import type {
  CategorySpending,
  UsageInsight,
  OptimizationOpportunity,
} from "../types";

// Add chart data types
export interface ChartData {
  name: string;
  value: number;
}

export interface SpendingData {
  month: string;
  amount: number;
  projected?: number;
}

export interface TrendData {
  month: string;
  subscriptions: number;
}

// Add mock chart data
export const spendingOverTime: SpendingData[] = [
  { month: "Jan", amount: 2100, projected: 2100 },
  { month: "Feb", amount: 2300, projected: 2300 },
  { month: "Mar", amount: 2500, projected: 2500 },
  { month: "Apr", amount: 2700, projected: 2700 },
  { month: "May", amount: 2856, projected: 2856 },
  { month: "Jun", amount: 0, projected: 2900 },
  { month: "Jul", amount: 0, projected: 3000 },
  { month: "Aug", amount: 0, projected: 3100 },
  { month: "Sep", amount: 0, projected: 3200 },
  { month: "Oct", amount: 0, projected: 3300 },
  { month: "Nov", amount: 0, projected: 3400 },
  { month: "Dec", amount: 0, projected: 3500 },
];

export const categorySpending: CategorySpending[] = [
  {
    name: "Cloud Services",
    amount: 432.18,
    percentage: 85,
  },
  {
    name: "Productivity",
    amount: 237.99,
    percentage: 65,
  },
  {
    name: "CRM",
    amount: 150.0,
    percentage: 45,
  },
  {
    name: "Design",
    amount: 52.99,
    percentage: 25,
  },
  {
    name: "AI",
    amount: 62.0,
    percentage: 20,
  },
];

export const categoryData: ChartData[] = [
  { name: "Cloud Services", value: 432.18 },
  { name: "Productivity", value: 237.99 },
  { name: "CRM", value: 150.0 },
  { name: "Design", value: 52.99 },
  { name: "AI", value: 62.0 },
];

export const subscriptionTrends: TrendData[] = [
  { month: "Dec", subscriptions: 18 },
  { month: "Jan", subscriptions: 19 },
  { month: "Feb", subscriptions: 20 },
  { month: "Mar", subscriptions: 22 },
  { month: "Apr", subscriptions: 22 },
  { month: "May", subscriptions: 24 },
];

export const usageInsights: UsageInsight[] = [
  {
    name: "Google Workspace",
    usageLevel: "High",
    percentage: 95,
  },
  // ... rest of the usage insights
];

export const optimizationOpportunities: OptimizationOpportunity[] = [
  {
    name: "Adobe Creative Cloud",
    description: "Individual licenses vs. team plan",
    potentialSavings: 120,
    logo: "/placeholder.svg?height=40&width=40",
  },
  // ... rest of the opportunities
];
