import type {
  UserProfile,
  NotificationSettings,
  AppearanceSettings,
} from "../types";

export const userProfile: UserProfile = {
  name: "John Doe",
  email: "john@example.com",
  company: "Acme Inc.",
  role: "Administrator",
  avatar: "/placeholder.svg",
};

export const notificationSettings: NotificationSettings = {
  subscriptionRenewals: true,
  priceChanges: true,
  usageReports: false,
  browserNotifications: true,
  mobilePushNotifications: true,
};

export const appearanceSettings: AppearanceSettings = {
  theme: "system",
  reducedMotion: false,
  highContrast: false,
};
