"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
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
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { calendarEvents, getCalendarMonth } from "@/shared/mock-data/calendar";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, CreditCard, RefreshCw } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function CalendarPage() {
  // Initialize with the current month and year
  const [currentDate, setCurrentDate] = useState(() => {
    const now = new Date();
    return { month: now.getMonth(), year: now.getFullYear() };
  });

  // Remove isLoadingEvents since it's not being used
  const { data: events } = useQuery({
    queryKey: ["calendar-events"],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return calendarEvents;
    },
  });

  const { data: monthData, isLoading: isLoadingMonth } = useQuery({
    queryKey: ["calendar-month", currentDate.month, currentDate.year],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      return getCalendarMonth(currentDate.month, currentDate.year);
    },
  });

  const handlePreviousMonth = () => {
    setCurrentDate((prev) => {
      if (prev.month === 0) {
        return { month: 11, year: prev.year - 1 };
      }
      return { ...prev, month: prev.month - 1 };
    });
  };

  const handleNextMonth = () => {
    setCurrentDate((prev) => {
      if (prev.month === 11) {
        return { month: 0, year: prev.year + 1 };
      }
      return { ...prev, month: prev.month + 1 };
    });
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Add helper function to get event type styles
  const getEventTypeStyles = (type: string) => {
    switch (type) {
      case "renewal":
        return "bg-primary/10 border-primary/20 text-primary hover:bg-primary/20";
      case "payment":
        return "bg-green-100 border-green-200 text-green-700 dark:bg-green-900/30 dark:border-green-900 dark:text-green-400 hover:bg-green-200 dark:hover:bg-green-900/40";
      case "expiration":
        return "bg-red-100 border-red-200 text-red-700 dark:bg-red-900/30 dark:border-red-900 dark:text-red-400 hover:bg-red-200 dark:hover:bg-red-900/40";
      default:
        return "bg-primary/10 border-primary/20 text-primary hover:bg-primary/20";
    }
  };

  // Add helper function to format amount for display
  const formatAmount = (amount: string) => {
    return amount.startsWith("$") ? amount : `$${amount}`;
  };

  // Add helper function to get event type icon
  const getEventTypeIcon = (type: string) => {
    switch (type) {
      case "renewal":
        return <RefreshCw className="h-3 w-3" />;
      case "payment":
        return <CreditCard className="h-3 w-3" />;
      case "expiration":
        return <AlertCircle className="h-3 w-3" />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col gap-6 p-4 md:gap-8 md:p-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Renewal Calendar
          </h1>
          <p className="text-muted-foreground">
            Track upcoming subscription renewals
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" onClick={handlePreviousMonth}>
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous month</span>
          </Button>
          <Select
            value={`${currentDate.month}-${currentDate.year}`}
            onValueChange={(value) => {
              const [month, year] = value.split("-").map(Number);
              setCurrentDate({ month, year });
            }}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select month" />
            </SelectTrigger>
            <SelectContent>
              {Array.from({ length: 12 }, (_, i) => (
                <SelectItem key={i} value={`${i}-${currentDate.year}`}>
                  {monthNames[i]} {currentDate.year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon" onClick={handleNextMonth}>
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next month</span>
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>
            {monthNames[currentDate.month]} {currentDate.year}
          </CardTitle>
          <CardDescription>Subscription renewal calendar</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-7 gap-1 text-center font-medium">
            <div className="p-2">Sun</div>
            <div className="p-2">Mon</div>
            <div className="p-2">Tue</div>
            <div className="p-2">Wed</div>
            <div className="p-2">Thu</div>
            <div className="p-2">Fri</div>
            <div className="p-2">Sat</div>
          </div>

          {isLoadingMonth ? (
            <div className="grid grid-cols-7 gap-1">
              {Array.from({ length: 35 }).map((_, i) => (
                <div key={i} className="min-h-[100px] rounded-lg border p-2">
                  <Skeleton className="h-4 w-4 rounded mb-2" />
                  <Skeleton className="h-12 w-full rounded" />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-7 gap-1">
              {/* Empty cells for days before the first of the month */}
              {Array.from({
                length: new Date(
                  currentDate.year,
                  currentDate.month,
                  1
                ).getDay(),
              }).map((_, i) => (
                <div key={`empty-${i}`} className="p-0"></div>
              ))}

              {/* Calendar days */}
              {monthData?.days.map(({ day, events }) => (
                <div
                  key={day}
                  className={`min-h-[100px] rounded-lg border p-2 ${
                    events.length > 0 ? "bg-primary/5" : ""
                  }`}
                >
                  <div className="font-medium">{day}</div>
                  <div className="mt-1 space-y-1">
                    {events.map((event) => (
                      <DropdownMenu key={event.id}>
                        <DropdownMenuTrigger asChild>
                          <button
                            className={`flex w-full items-center gap-1 rounded-md border p-1 text-xs transition-colors ${getEventTypeStyles(
                              event.type
                            )}`}
                          >
                            <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-background">
                              <Image
                                src={event.logo || "/placeholder.svg"}
                                alt={event.name}
                                width={12}
                                height={12}
                                className="h-3 w-3"
                              />
                            </div>
                            <div className="flex min-w-0 flex-1 items-center justify-between gap-1">
                              <span className="truncate">{event.name}</span>
                              <span className="flex shrink-0 items-center gap-1">
                                {getEventTypeIcon(event.type)}
                                <span className="whitespace-nowrap font-medium">
                                  {formatAmount(event.amount)}
                                </span>
                              </span>
                            </div>
                          </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                          align="start"
                          className="w-[200px]"
                        >
                          <DropdownMenuLabel>{event.name}</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <div className="px-2 py-1.5">
                            <div className="text-xs">
                              <div className="flex items-center justify-between">
                                <span className="text-muted-foreground">
                                  Amount:
                                </span>
                                <span className="font-medium">
                                  {formatAmount(event.amount)}
                                </span>
                              </div>
                              <div className="flex items-center justify-between mt-1">
                                <span className="text-muted-foreground">
                                  Type:
                                </span>
                                <span className="font-medium capitalize">
                                  {event.type}
                                </span>
                              </div>
                            </div>
                          </div>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <Button
                              variant="ghost"
                              className="w-full justify-start p-0 h-auto text-xs"
                            >
                              View Details
                            </Button>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Renewals</CardTitle>
            <CardDescription>
              Subscriptions renewing in the next 30 days
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {events
                ?.filter((event) => event.type === "renewal")
                .map((event) => (
                  <div
                    key={event.id}
                    className="flex items-center justify-between rounded-lg border p-4"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                        <Image
                          src={event.logo || "/placeholder.svg"}
                          alt={event.name}
                          width={24}
                          height={24}
                          className="h-6 w-6"
                        />
                      </div>
                      <div>
                        <p className="font-medium">{event.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {new Date(event.date).toLocaleDateString("en-US", {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <p className="font-medium">{event.amount}</p>
                      <Button variant="outline" size="sm">
                        Manage
                      </Button>
                    </div>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Payments</CardTitle>
            <CardDescription>
              Scheduled payments in the next 30 days
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {events
                ?.filter((event) => event.type === "payment")
                .map((event) => (
                  <div
                    key={event.id}
                    className="flex items-center justify-between rounded-lg border p-4"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                        <Image
                          src={event.logo || "/placeholder.svg"}
                          alt={event.name}
                          width={24}
                          height={24}
                          className="h-6 w-6"
                        />
                      </div>
                      <div>
                        <p className="font-medium">{event.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {new Date(event.date).toLocaleDateString("en-US", {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge
                        variant="outline"
                        className="bg-green-100 text-green-700"
                      >
                        {event.amount}
                      </Badge>
                    </div>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
