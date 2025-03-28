/**
 * Home Page Component
 *
 * This is the main landing page of the application.
 * It showcases the key features, pricing, and testimonials of the subscription management platform.
 */

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BarChart3,
  Calendar,
  CreditCard,
  Shield,
  Zap,
  Quote,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";

/**
 * Home Component
 *
 * Renders the landing page with:
 * - Navigation header
 * - Hero section
 * - Features showcase
 * - Pricing information
 * - Testimonials
 *
 * @returns {JSX.Element} The home page component
 */
export default function Home() {
  return (
    // Main container with dark theme
    <div className="min-h-screen bg-black text-white">
      {/* Sticky header with navigation */}
      <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo and brand name */}
            <div className="flex items-center gap-2">
              <CreditCard className="h-6 w-6" />
              <span className="text-xl font-bold">Subtrackar</span>
            </div>
            {/* Main navigation links */}
            <nav className="hidden md:flex gap-6">
              <Link
                href="#features"
                className="text-sm font-medium text-white/70 hover:text-white transition-colors"
              >
                Features
              </Link>
              <Link
                href="#pricing"
                className="text-sm font-medium text-white/70 hover:text-white transition-colors"
              >
                Pricing
              </Link>
              <Link
                href="#testimonials"
                className="text-sm font-medium text-white/70 hover:text-white transition-colors"
              >
                Testimonials
              </Link>
              <Link
                href="#faq"
                className="text-sm font-medium text-white/70 hover:text-white transition-colors"
              >
                FAQ
              </Link>
            </nav>
            <div className="flex items-center gap-4">
              <Link href="/login">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white hover:text-white/90"
                >
                  Log in
                </Button>
              </Link>
              <Link href="/signup">
                <Button
                  size="sm"
                  className="bg-white text-black hover:bg-white/90"
                >
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section className="relative overflow-hidden">
          <div className="container mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 md:py-32 lg:py-40">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-8 text-center lg:text-left">
                <div className="space-y-6">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none">
                    Take Control of Your Company Subscriptions
                  </h1>
                  <p className="mx-auto lg:mx-0 max-w-[600px] text-white/70 text-xl">
                    Track, manage, and optimize all your subscription services
                    in one place. Save time and money with Subtrackar.
                  </p>
                </div>
                <div className="flex flex-col gap-3 min-[400px]:flex-row justify-center lg:justify-start">
                  <Link href="/signup">
                    <Button
                      size="lg"
                      className="bg-white text-black hover:bg-white/90 gap-2 w-full min-[400px]:w-auto"
                    >
                      Start Free Trial <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="#demo">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white/20 text-white hover:bg-white/10 w-full min-[400px]:w-auto"
                    >
                      See Demo
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center lg:justify-end">
                <div className="relative w-full max-w-[600px] h-[400px] rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20" />
                  <div className="absolute inset-0 backdrop-blur-[2px]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black/80 backdrop-blur-xl p-8 rounded-xl shadow-2xl">
                      <h3 className="text-xl font-medium text-white/70 mb-4">
                        Average company wastes
                      </h3>
                      <p className="text-6xl font-bold mb-2">$10,000+</p>
                      <p className="text-white/50">
                        on unused subscriptions yearly
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Gradient background effects */}
          <div className="absolute inset-0 -z-50 bg-black">
            <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[800px] h-[800px] bg-purple-500/20 rounded-full blur-3xl" />
            <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[800px] h-[800px] bg-blue-500/20 rounded-full blur-3xl" />
          </div>
        </section>

        <section
          id="features"
          className="w-full py-24 md:py-32 border-t border-white/10"
        >
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-white/10 px-3 py-1 text-sm">
                  Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Everything You Need
                </h2>
                <p className="mx-auto max-w-[900px] text-white/70 text-xl">
                  {`Subtrackar provides all the tools you need to manage your
                  company's subscriptions effectively.`}
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {/* Feature cards with dark theme */}
              <div className="flex flex-col items-center space-y-2 rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="rounded-full bg-white/10 p-3">
                  <CreditCard className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Subscription Tracking</h3>
                <p className="text-center text-white/70">
                  Track all your subscriptions in one place with renewal dates
                  and payment amounts.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="rounded-full bg-white/10 p-3">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Spending Analytics</h3>
                <p className="text-center text-white/70">
                  Visualize your subscription spending with detailed charts and
                  reports.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="rounded-full bg-white/10 p-3">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Renewal Reminders</h3>
                <p className="text-center text-white/70">
                  Get notified before subscriptions renew so you never miss a
                  cancellation window.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="rounded-full bg-white/10 p-3">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">One-Click Cancellation</h3>
                <p className="text-center text-white/70">
                  Cancel subscriptions directly through our platform with just
                  one click.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="rounded-full bg-white/10 p-3">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Secure Data</h3>
                <p className="text-center text-white/70">
                  Your subscription data is encrypted and securely stored with
                  enterprise-grade protection.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="rounded-full bg-white/10 p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Team Collaboration</h3>
                <p className="text-center text-white/70">
                  Invite team members to collaborate on subscription management
                  with role-based access.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="pricing"
          className="w-full py-24 md:py-32 border-t border-white/10"
        >
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-white/10 px-3 py-1 text-sm">
                  Pricing
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Simple, Transparent Pricing
                </h2>
                <p className="mx-auto max-w-[900px] text-white/70 text-xl">
                  Start with a 14-day free trial. No credit card required.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col rounded-lg border border-white/10 bg-white/5 shadow-sm">
                <div className="p-6">
                  <h3 className="text-2xl font-bold">Starter</h3>
                  <div className="mt-4 flex items-baseline text-white">
                    <span className="text-4xl font-bold tracking-tight">
                      $9
                    </span>
                    <span className="ml-1 text-xl font-semibold">/month</span>
                  </div>
                  <p className="mt-4 text-white/70">
                    Perfect for small teams and startups.
                  </p>
                  <ul className="mt-6 space-y-3">
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Up to 20 subscriptions
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Basic analytics
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Email reminders
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      1 team member
                    </li>
                  </ul>
                </div>
                <div className="flex flex-1 flex-col justify-end p-6 pt-0">
                  <Button className="w-full bg-white text-black hover:bg-white/90">
                    Start Free Trial
                  </Button>
                </div>
              </div>
              <div className="relative flex flex-col rounded-lg border border-primary shadow-sm bg-white/5">
                <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  Most Popular
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold">Professional</h3>
                  <div className="mt-4 flex items-baseline text-white">
                    <span className="text-4xl font-bold tracking-tight">
                      $29
                    </span>
                    <span className="ml-1 text-xl font-semibold">/month</span>
                  </div>
                  <p className="mt-4 text-white/70">
                    For growing businesses with more needs.
                  </p>
                  <ul className="mt-6 space-y-3">
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Unlimited subscriptions
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Advanced analytics
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Email & SMS reminders
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Up to 5 team members
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      One-click cancellation
                    </li>
                  </ul>
                </div>
                <div className="flex flex-1 flex-col justify-end p-6 pt-0">
                  <Button className="w-full bg-white text-black hover:bg-white/90">
                    Start Free Trial
                  </Button>
                </div>
              </div>
              <div className="flex flex-col rounded-lg border border-white/10 bg-white/5 shadow-sm">
                <div className="p-6">
                  <h3 className="text-2xl font-bold">Enterprise</h3>
                  <div className="mt-4 flex items-baseline text-white">
                    <span className="text-4xl font-bold tracking-tight">
                      $99
                    </span>
                    <span className="ml-1 text-xl font-semibold">/month</span>
                  </div>
                  <p className="mt-4 text-white/70">
                    For large organizations with complex needs.
                  </p>
                  <ul className="mt-6 space-y-3">
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Unlimited everything
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Custom analytics
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Priority support
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Unlimited team members
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      API access
                    </li>
                  </ul>
                </div>
                <div className="flex flex-1 flex-col justify-end p-6 pt-0">
                  <Button className="w-full border border-white/20 text-white hover:bg-white/10">
                    Contact Sales
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section
          id="testimonials"
          className="w-full py-24 md:py-32 border-t border-white/10"
        >
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-white/10 px-3 py-1 text-sm">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Loved by Businesses
                </h2>
                <p className="mx-auto max-w-[900px] text-white/70 text-xl">
                  {`Don't just take our word for it. Here's what our customers
                  have to say about Subtrackar.`}
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="relative overflow-hidden border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <Quote className="absolute right-6 top-6 h-12 w-12 text-white/10" />
                <div className="relative space-y-4">
                  <blockquote className="text-lg">
                    &quot;Subtrackar has saved us thousands of dollars by
                    helping us identify and eliminate unused subscriptions. The
                    ROI was immediate.&quot;
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg" />
                      <AvatarFallback>SD</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">Sarah Davis</div>
                      <div className="text-sm text-white/70">
                        CFO at TechCorp
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
              <Card className="relative overflow-hidden border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <Quote className="absolute right-6 top-6 h-12 w-12 text-white/10" />
                <div className="relative space-y-4">
                  <blockquote className="text-lg">
                    &quot;The analytics and reporting features are incredible.
                    We now have complete visibility into our subscription
                    spending.&quot;
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg" />
                      <AvatarFallback>MJ</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">Michael Johnson</div>
                      <div className="text-sm text-white/70">
                        CTO at StartupX
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
              <Card className="relative overflow-hidden border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <Quote className="absolute right-6 top-6 h-12 w-12 text-white/10" />
                <div className="relative space-y-4">
                  <blockquote className="text-lg">
                    &quot;The automated renewal reminders have been a
                    game-changer. We never miss a cancellation window now.&quot;
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg" />
                      <AvatarFallback>EW</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">Emily Wilson</div>
                      <div className="text-sm text-white/70">
                        Operations Manager at GrowthCo
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section
          id="faq"
          className="w-full py-24 md:py-32 border-t border-white/10"
        >
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-white/10 px-3 py-1 text-sm">
                  FAQ
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Frequently Asked Questions
                </h2>
                <p className="mx-auto max-w-[900px] text-white/70 text-xl">
                  Everything you need to know about Subtrackar and how it can
                  help your business.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl py-12">
              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem value="item-1" className="border-white/10">
                  <AccordionTrigger className="text-left">
                    How does Subtrackar help me save money?
                  </AccordionTrigger>
                  <AccordionContent className="text-white/70">
                    Subtrackar helps you identify unused or underutilized
                    subscriptions, tracks renewal dates to avoid unwanted
                    charges, and provides insights into spending patterns. Our
                    customers typically save 20-30% on their subscription costs
                    within the first three months.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border-white/10">
                  <AccordionTrigger className="text-left">
                    Can I manage subscriptions for multiple departments?
                  </AccordionTrigger>
                  <AccordionContent className="text-white/70">
                    Yes! Subtrackar allows you to organize subscriptions by
                    department, team, or cost center. You can assign different
                    administrators for each department while maintaining
                    centralized oversight.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="border-white/10">
                  <AccordionTrigger className="text-left">
                    Is there a limit to how many subscriptions I can track?
                  </AccordionTrigger>
                  <AccordionContent className="text-white/70">
                    Our Starter plan includes up to 20 subscriptions, while our
                    Professional and Enterprise plans offer unlimited
                    subscription tracking. You can upgrade or downgrade your
                    plan at any time.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4" className="border-white/10">
                  <AccordionTrigger className="text-left">
                    How secure is my subscription data?
                  </AccordionTrigger>
                  <AccordionContent className="text-white/70">
                    We take security seriously. Subtrackar uses enterprise-grade
                    encryption, regular security audits, and complies with SOC 2
                    and GDPR requirements. Your data is encrypted both in
                    transit and at rest.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5" className="border-white/10">
                  <AccordionTrigger className="text-left">
                    Can I integrate Subtrackar with my existing tools?
                  </AccordionTrigger>
                  <AccordionContent className="text-white/70">
                    Yes! Subtrackar integrates with popular accounting software,
                    expense management tools, and SSO providers. We also offer a
                    robust API for custom integrations on our Enterprise plan.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6" className="border-white/10">
                  <AccordionTrigger className="text-left">
                    What kind of support do you offer?
                  </AccordionTrigger>
                  <AccordionContent className="text-white/70">
                    All plans include email support with 24-hour response time.
                    Professional plans include priority email support, while
                    Enterprise plans get dedicated account management and 24/7
                    phone support.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-white/10">
        <div className="container mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-2">
              <CreditCard className="h-6 w-6" />
              <span className="text-xl font-bold">Subtrackar</span>
            </div>
            <nav className="flex gap-4 sm:gap-6">
              <Link
                href="#"
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                Terms
              </Link>
              <Link
                href="#"
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="#"
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                Contact
              </Link>
            </nav>
            <div className="flex items-center gap-4">
              <p className="text-sm text-white/50">
                © 2025 Subtrackar. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="text-primary hover:underline">
          Sign up
        </Link>
      </div>
    </div>
  );
}
