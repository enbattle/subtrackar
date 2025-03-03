import { subscriptions } from "./mock-data/subscriptions";
import {
  dashboardStats,
  upcomingRenewals,
  topSubscriptions,
} from "./mock-data/dashboard";
import {
  categorySpending,
  usageInsights,
  optimizationOpportunities,
} from "./mock-data/analytics";
import { teamMembers } from "./mock-data/team";
import type {
  Subscription,
  DashboardStat,
  UpcomingRenewal,
  TopSubscription,
  CategorySpending,
  UsageInsight,
  OptimizationOpportunity,
  TeamMember,
} from "./types";

// Simulate API delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const api = {
  // Subscriptions
  getSubscriptions: async (): Promise<Subscription[]> => {
    await delay(1000);
    return subscriptions;
  },

  // Dashboard
  getDashboardStats: async (): Promise<DashboardStat[]> => {
    await delay(800);
    return dashboardStats;
  },

  getUpcomingRenewals: async (): Promise<UpcomingRenewal[]> => {
    await delay(1000);
    return upcomingRenewals;
  },

  getTopSubscriptions: async (): Promise<TopSubscription[]> => {
    await delay(1200);
    return topSubscriptions;
  },

  // Analytics
  getCategorySpending: async (): Promise<CategorySpending[]> => {
    await delay(1000);
    return categorySpending;
  },

  getUsageInsights: async (): Promise<UsageInsight[]> => {
    await delay(1200);
    return usageInsights;
  },

  getOptimizationOpportunities: async (): Promise<
    OptimizationOpportunity[]
  > => {
    await delay(900);
    return optimizationOpportunities;
  },

  // Team
  getTeamMembers: async (): Promise<TeamMember[]> => {
    await delay(800);
    return teamMembers;
  },
};
