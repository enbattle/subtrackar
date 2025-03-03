import type { CalendarEvent, CalendarMonth } from "../types";

// Get current date for generating relative dates
const today = new Date();
const currentMonth = today.getMonth();
const currentYear = today.getFullYear();

// Helper function to format date string
const formatDateString = (year: number, month: number, day: number) => {
  return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(
    2,
    "0"
  )}`;
};

// Add events for current month and next few months
export const calendarEvents: CalendarEvent[] = [
  // Current month events
  {
    id: "1",
    name: "Adobe Creative Cloud",
    date: formatDateString(currentYear, currentMonth, 15),
    amount: "$52.99",
    logo: "/placeholder.svg?height=40&width=40",
    type: "renewal",
  },
  {
    id: "2",
    name: "Slack",
    date: formatDateString(currentYear, currentMonth, 18),
    amount: "$12.50",
    logo: "/placeholder.svg?height=40&width=40",
    type: "renewal",
  },
  {
    id: "3",
    name: "AWS",
    date: formatDateString(currentYear, currentMonth, 20),
    amount: "$432.18",
    logo: "/placeholder.svg?height=40&width=40",
    type: "payment",
  },
  // Next month events
  {
    id: "4",
    name: "Google Workspace",
    date: formatDateString(currentYear, currentMonth + 1, 1),
    amount: "$138.00",
    logo: "/placeholder.svg?height=40&width=40",
    type: "renewal",
  },
  {
    id: "5",
    name: "Salesforce",
    date: formatDateString(currentYear, currentMonth + 1, 5),
    amount: "$150.00",
    logo: "/placeholder.svg?height=40&width=40",
    type: "renewal",
  },
  {
    id: "6",
    name: "Microsoft 365",
    date: formatDateString(currentYear, currentMonth + 1, 10),
    amount: "$99.99",
    logo: "/placeholder.svg?height=40&width=40",
    type: "renewal",
  },
  // Two months from now
  {
    id: "7",
    name: "Zoom",
    date: formatDateString(currentYear, currentMonth + 2, 15),
    amount: "$14.99",
    logo: "/placeholder.svg?height=40&width=40",
    type: "payment",
  },
  {
    id: "8",
    name: "ChatGPT Plus",
    date: formatDateString(currentYear, currentMonth + 2, 20),
    amount: "$20.00",
    logo: "/placeholder.svg?height=40&width=40",
    type: "expiration",
  },
  // Add some events for current month
  {
    id: "9",
    name: "Notion",
    date: formatDateString(currentYear, currentMonth, 25),
    amount: "$15.00",
    logo: "/placeholder.svg?height=40&width=40",
    type: "renewal",
  },
  {
    id: "10",
    name: "Figma",
    date: formatDateString(currentYear, currentMonth, 28),
    amount: "$12.00",
    logo: "/placeholder.svg?height=40&width=40",
    type: "payment",
  },
];

// Helper function to get events for a specific month
export const getMonthEvents = (
  month: number,
  year: number
): CalendarEvent[] => {
  return calendarEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate.getMonth() === month && eventDate.getFullYear() === year;
  });
};

// Helper function to generate calendar data for a specific month
export const getCalendarMonth = (
  month: number,
  year: number
): CalendarMonth => {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const monthEvents = getMonthEvents(month, year);

  const days = Array.from({ length: daysInMonth }, (_, i) => {
    const day = i + 1;
    const dateStr = formatDateString(year, month, day);
    return {
      day,
      events: monthEvents.filter((event) => event.date === dateStr),
    };
  });

  return {
    month,
    year,
    days,
  };
};

// Add current month's events
const currentDate = new Date();
export const currentMonthEvents = getMonthEvents(
  currentDate.getMonth(),
  currentDate.getFullYear()
);
