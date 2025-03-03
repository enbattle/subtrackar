export interface Subscription {
  id: string;
  name: string;
  category: string;
  price: number;
  billingCycle: string;
  nextRenewal: string;
  logo: string;
  status: string;
}

export interface TeamMember {
  name: string;
  email: string;
  role: string;
  lastActive: string;
  status: string;
}

export interface DashboardStat {
  title: string;
  value: string;
  change: string;
  changeType: "increase" | "decrease" | "neutral";
}

export interface UpcomingRenewal {
  name: string;
  date: string;
  amount: string;
  logo: string;
}

export interface TopSubscription {
  name: string;
  amount: string;
  category: string;
  logo: string;
}

export interface CategorySpending {
  name: string;
  amount: number;
  percentage: number;
}

export interface UsageInsight {
  name: string;
  usageLevel: "High" | "Medium" | "Low";
  percentage: number;
}

export interface OptimizationOpportunity {
  name: string;
  description: string;
  potentialSavings: number;
  logo: string;
}

export interface BillingHistory {
  date: string;
  amount: number;
  status: string;
}

export interface UserProfile {
  name: string;
  email: string;
  company: string;
  role: string;
  avatar?: string;
}

export interface NotificationSettings {
  subscriptionRenewals: boolean;
  priceChanges: boolean;
  usageReports: boolean;
  browserNotifications: boolean;
  mobilePushNotifications: boolean;
}

export interface AppearanceSettings {
  theme: "light" | "dark" | "system";
  reducedMotion: boolean;
  highContrast: boolean;
}

export interface CalendarEvent {
  id: string;
  name: string;
  date: string;
  amount: string;
  logo: string;
  type: "renewal" | "payment" | "expiration";
}

export interface CalendarMonth {
  month: number;
  year: number;
  days: {
    day: number;
    events: CalendarEvent[];
  }[];
}
