'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {
  Brain,
  BatteryLow,
  Target,
  AlertCircle,
  CheckCircle2,
  XCircle,
  Download,
  ShieldCheck,
  Clock,
  FileText,
  ShoppingCart,
  ChefHat,
  Apple,
  Cookie,
  Utensils,
  Sparkles,
  BookOpen,
  ClipboardList,
  Calendar,
  Sheet as SheetIcon,
  ArrowRight,
  Timer,
} from 'lucide-react'
import Image from 'next/image'

const HOTMART_CHECKOUT_URL = 'https://pay.hotmart.com/C104125906I'

// Countdown Timer Component
function CountdownTimer({ className = '' }: { className?: string }) {
  const [mounted, setMounted] = useState(false)
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  })

  useEffect(() => {
    // Mark as mounted after initial render
    const mountTimer = setTimeout(() => setMounted(true), 0)
    
    // Get or set end time (24 hours from first visit)
    const getEndTime = () => {
      const stored = localStorage.getItem('countdownEndTime')
      if (stored) {
        return parseInt(stored, 10)
      }
      const endTime = Date.now() + 24 * 60 * 60 * 1000 // 24 hours
      localStorage.setItem('countdownEndTime', endTime.toString())
      return endTime
    }

    const endTime = getEndTime()

    const calculateTimeLeft = () => {
      const difference = endTime - Date.now()
      if (difference > 0) {
        const totalHours = Math.floor(difference / (1000 * 60 * 60))
        setTimeLeft({
          hours: totalHours,
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => {
      clearTimeout(mountTimer)
      clearInterval(timer)
    }
  }, [])

  const pad = (num: number) => num.toString().padStart(2, '0')

  // Show placeholder during SSR to avoid hydration mismatch
  if (!mounted) {
    return (
      <div className={`flex items-center justify-center gap-1 ${className}`}>
        <div className="flex items-center gap-2 rounded-lg bg-red-600 px-4 py-3 text-white shadow-lg">
          <Timer className="h-5 w-5 animate-pulse" />
          <span className="font-mono text-xl font-bold tracking-wider">
            23:59:59
          </span>
        </div>
      </div>
    )
  }

  return (
    <div className={`flex items-center justify-center gap-1 ${className}`}>
      <div className="flex items-center gap-2 rounded-lg bg-red-600 px-4 py-3 text-white shadow-lg">
        <Timer className="h-5 w-5 animate-pulse" />
        <span className="font-mono text-xl font-bold tracking-wider">
          {pad(timeLeft.hours)}:{pad(timeLeft.minutes)}:{pad(timeLeft.seconds)}
        </span>
      </div>
    </div>
  )
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-50 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="text-center lg:text-left">
              {/* Video Connection Badge */}
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-800">
                <Sparkles className="h-4 w-4" />
                <span>From the video you just watched...</span>
              </div>

              <h1 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Still Feeling Foggy After That Video?{' '}
                <span className="text-green-600">Here&apos;s Your Next Simple Win...</span>
              </h1>

              <p className="mb-6 text-lg text-slate-600 sm:text-xl">
                The &apos;Feed Your Brain&apos; guide gives you{' '}
                <strong className="text-slate-800">60+ quick nutrition strategies</strong> (like the walnut trick) to help clear brain fog, stabilize energy, and finally focus — even if you&apos;ve failed every diet before.
              </p>

              <p className="mb-8 text-base leading-relaxed text-slate-600">
                You just saw how a handful of walnuts and an apple can jumpstart your brain. Now imagine having an entire collection of these &apos;simple wins&apos; at your fingertips — each one designed specifically for the ADHD brain that gets overwhelmed by complicated meal plans and rigid rules. Inside &apos;Feed Your Brain,&apos; you&apos;ll discover exactly what to eat (and when) to{' '}
                <strong>support mental clarity, stable energy, and better focus</strong> — without counting calories, measuring portions, or giving up foods you love.
              </p>

              {/* Countdown Timer */}
              <div className="mb-4 flex flex-col items-center gap-2 lg:items-start">
                <p className="text-sm font-medium text-red-600">
                  ⚡ Special price ends in:
                </p>
                <CountdownTimer />
              </div>

              <div className="mb-6 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-green-600 px-8 py-6 text-lg font-semibold text-white shadow-lg shadow-green-600/30 hover:bg-green-700 hover:shadow-xl sm:w-auto"
                >
                  <a href={HOTMART_CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
                    Get Instant Access - $20
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-slate-500 lg:justify-start">
                <div className="flex items-center gap-2">
                  <Download className="h-4 w-4 text-green-600" />
                  <span>Instant Download</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-green-600" />
                  <span>7-Day Money-Back Guarantee</span>
                </div>
              </div>
            </div>

            {/* Ebook Mockup */}
            <div className="relative mx-auto w-full max-w-md lg:mx-0">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-green-100 to-blue-50 p-8 shadow-2xl">
                <Image
                  src="/ebook-cover.png"
                  alt="Feed Your Brain - ADHD Nutrition Guide"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              {/* Floating elements */}
              <div className="absolute -right-4 -top-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-white shadow-lg">
                <span className="text-lg font-bold">$20</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl">
              Living with ADHD Feels Like...
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-lg text-slate-600">
              If you clicked through from the video, these probably sound familiar...
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="border-0 bg-white shadow-md transition-shadow hover:shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-100">
                  <Brain className="h-7 w-7 text-red-500" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900">Brain Fog</h3>
                <p className="text-sm text-slate-600">
                  That heavy, fuzzy feeling where thoughts just won&apos;t connect — like your brain is wading through molasses.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white shadow-md transition-shadow hover:shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-orange-100">
                  <BatteryLow className="h-7 w-7 text-orange-500" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900">Energy Crashes</h3>
                <p className="text-sm text-slate-600">
                  One minute you&apos;re fine, the next you can barely keep your eyes open — the rollercoaster is exhausting.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white shadow-md transition-shadow hover:shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-purple-100">
                  <Target className="h-7 w-7 text-purple-500" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900">Focus Struggles</h3>
                <p className="text-sm text-slate-600">
                  You know what you need to do, but actually starting? That&apos;s a whole different story.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white shadow-md transition-shadow hover:shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100">
                  <AlertCircle className="h-7 w-7 text-blue-500" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900">Overwhelm</h3>
                <p className="text-sm text-slate-600">
                  Too many options, too many rules — diet plans that look great on paper but fall apart in real life.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-10 rounded-xl bg-green-50 p-6 text-center">
            <p className="text-lg font-medium text-slate-800">
              <span className="text-green-600">It&apos;s not your fault.</span> Traditional diets aren&apos;t designed for ADHD brains.
            </p>
            <p className="mt-2 text-slate-600">
              They expect consistency, willpower, and the ability to follow complex rules. That&apos;s exactly what ADHD makes difficult.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-800">
              <BookOpen className="h-4 w-4" />
              <span>Introducing</span>
            </div>
            <h2 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl">
              Feed Your Brain
            </h2>
            <p className="mx-auto mb-4 max-w-2xl text-lg text-slate-600">
              Remember that walnut trick from the video? There are{' '}
              <strong className="text-green-600">60+ more simple wins</strong> just like it inside...
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="border border-green-200 bg-gradient-to-b from-green-50 to-white">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-600 text-white">
                  <Sparkles className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900">Quick & Simple</h3>
                <p className="text-sm text-slate-600">
                  Each strategy takes 30 seconds or less to understand. No complex meal prep required.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-green-200 bg-gradient-to-b from-green-50 to-white">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-600 text-white">
                  <Brain className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900">ADHD-Friendly</h3>
                <p className="text-sm text-slate-600">
                  Designed for brains that get overwhelmed by rules. Add, don&apos;t subtract.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-green-200 bg-gradient-to-b from-green-50 to-white">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-600 text-white">
                  <BatteryLow className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900">Stable Energy</h3>
                <p className="text-sm text-slate-600">
                  Support consistent energy throughout the day — no more afternoon crashes.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-green-200 bg-gradient-to-b from-green-50 to-white">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-600 text-white">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900">Better Focus</h3>
                <p className="text-sm text-slate-600">
                  Nutrients your brain needs to support mental clarity and concentration.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What's Inside Section */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl">
              What&apos;s Inside the Guide
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-600">
              <strong>87 pages</strong> of practical, easy-to-implement nutrition strategies for the ADHD brain.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Recipe Categories */}
            <Card className="border-0 bg-white shadow-lg">
              <CardContent className="p-6">
                <h3 className="mb-6 text-xl font-semibold text-slate-900">
                  60+ Brain-Healthy Recipes
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 rounded-lg bg-green-50 p-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-white">
                      <Utensils className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">Breakfast</p>
                      <p className="text-sm text-slate-500">15+ options</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-lg bg-blue-50 p-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
                      <ChefHat className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">Lunch</p>
                      <p className="text-sm text-slate-500">15+ options</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-lg bg-purple-50 p-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-600 text-white">
                      <Utensils className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">Dinner</p>
                      <p className="text-sm text-slate-500">15+ options</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-lg bg-orange-50 p-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-600 text-white">
                      <Apple className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">Snacks</p>
                      <p className="text-sm text-slate-500">15+ options</p>
                    </div>
                  </div>
                  <div className="col-span-2 flex items-center gap-3 rounded-lg bg-pink-50 p-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-600 text-white">
                      <Cookie className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">Desserts</p>
                      <p className="text-sm text-slate-500">10+ guilt-free options</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Format Explanation */}
            <Card className="border-0 bg-white shadow-lg">
              <CardContent className="p-6">
                <h3 className="mb-6 text-xl font-semibold text-slate-900">
                  The &quot;Simple Wins&quot; Format
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-600 text-sm font-bold text-white">
                      1
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">Quick to Read</p>
                      <p className="text-sm text-slate-600">
                        Each strategy is explained in plain English, no nutrition degree needed.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-600 text-sm font-bold text-white">
                      2
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">Easy to Implement</p>
                      <p className="text-sm text-slate-600">
                        Actionable steps you can take today — not theoretical concepts.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-600 text-sm font-bold text-white">
                      3
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">No Restriction Needed</p>
                      <p className="text-sm text-slate-600">
                        Add healthy foods without eliminating the ones you love.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-600 text-sm font-bold text-white">
                      4
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">Flexible Approach</p>
                      <p className="text-sm text-slate-600">
                        Pick what works for you, skip what doesn&apos;t — no pressure.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Bonus Stack Section */}
      <section className="bg-gradient-to-b from-green-600 to-green-700 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white">
              <Sparkles className="h-4 w-4" />
              <span>Limited Time Bonus</span>
            </div>
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
              Get $47 Worth of Bonuses — FREE
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-lg text-green-100">
              When you order &apos;Feed Your Brain&apos; today, you&apos;ll also receive these powerful tools to accelerate your progress.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Bonus 1 */}
            <Card className="border-0 bg-white shadow-xl">
              <CardContent className="p-6">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-green-100">
                  <ClipboardList className="h-7 w-7 text-green-600" />
                </div>
                <div className="mb-2 text-sm font-semibold text-green-600">
                  BONUS #1 — Value: $15
                </div>
                <h3 className="mb-2 text-lg font-bold text-slate-900">
                  The Food & Mood Journal
                </h3>
                <p className="mb-4 text-sm text-slate-600">
                  Printable PDF to track what you eat and drink. Rate your Energy (1-5) and Focus (1-5) after each meal to identify patterns between food and mental clarity.
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>Reusable format</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>Print as many as needed</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Bonus 2 */}
            <Card className="border-0 bg-white shadow-xl">
              <CardContent className="p-6">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100">
                  <ShoppingCart className="h-7 w-7 text-blue-600" />
                </div>
                <div className="mb-2 text-sm font-semibold text-blue-600">
                  BONUS #2 — Value: $10
                </div>
                <h3 className="mb-2 text-lg font-bold text-slate-900">
                  Master Shopping List
                </h3>
                <p className="mb-4 text-sm text-slate-600">
                  4-page printable PDF with a complete list of brain-healthy foods organized by category. Never forget a key ingredient again.
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>6 categories covered</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>Quantity & date tracking</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Bonus 3 */}
            <Card className="border-0 bg-white shadow-xl">
              <CardContent className="p-6">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-purple-100">
                  <Calendar className="h-7 w-7 text-purple-600" />
                </div>
                <div className="mb-2 text-sm font-semibold text-purple-600">
                  BONUS #3 — Value: $12
                </div>
                <h3 className="mb-2 text-lg font-bold text-slate-900">
                  Weekly Chain Builder
                </h3>
                <p className="mb-4 text-sm text-slate-600">
                  Habit tracker to build lasting habits: Protein at Breakfast, Ate a Vegetable, Drank Water, Took a 5-min Break.
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>&quot;Don&apos;t break the chain&quot; system</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>Green/red color coding</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Bonus 4 */}
            <Card className="border-0 bg-white shadow-xl">
              <CardContent className="p-6">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-orange-100">
                  <SheetIcon className="h-7 w-7 text-orange-600" />
                </div>
                <div className="mb-2 text-sm font-semibold text-orange-600">
                  BONUS #4 — Value: $10
                </div>
                <h3 className="mb-2 text-lg font-bold text-slate-900">
                  Bonus General Excel
                </h3>
                <p className="mb-4 text-sm text-slate-600">
                  All-in-one digital tool with auto-calculating averages, dropdown menus, and a library of 60+ brain-healthy recipes.
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>No printing required</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>Dynamic tracking</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-10 text-center">
            <p className="text-2xl font-bold text-white">
              Total Bonus Value: <span className="line-through opacity-70">$47</span>{' '}
              <span className="ml-2 text-green-300">YOURS FREE</span>
            </p>
          </div>
        </div>
      </section>

      {/* Who This Is For Section */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Is For You */}
            <Card className="border-2 border-green-200 bg-green-50">
              <CardContent className="p-6 sm:p-8">
                <h3 className="mb-6 text-xl font-bold text-slate-900">
                  This IS For You If...
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                    <span className="text-slate-700">
                      You&apos;re tired of brain fog getting in the way of your day
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                    <span className="text-slate-700">
                      You want simple, practical strategies — not another restrictive diet
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                    <span className="text-slate-700">
                      You&apos;ve tried other approaches but they were too complicated to stick with
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                    <span className="text-slate-700">
                      You&apos;re looking for science-backed ways to support your brain health
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Not For You */}
            <Card className="border-2 border-slate-200 bg-slate-50">
              <CardContent className="p-6 sm:p-8">
                <h3 className="mb-6 text-xl font-bold text-slate-900">
                  This is NOT For You If...
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <XCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-slate-400" />
                    <span className="text-slate-600">
                      You&apos;re looking for a medical treatment or cure for ADHD
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-slate-400" />
                    <span className="text-slate-600">
                      You want a rigid meal plan with strict rules to follow
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-slate-400" />
                    <span className="text-slate-600">
                      You&apos;re not willing to try small, simple changes over time
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Price & Guarantee Section */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Card className="border-0 bg-white shadow-2xl">
            <CardContent className="p-6 sm:p-10">
              <div className="text-center">
                <h2 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl">
                  Get Everything Today
                </h2>

                {/* Countdown Timer */}
                <div className="mb-6 flex flex-col items-center gap-2">
                  <p className="text-sm font-medium text-red-600">
                    ⚡ This special price expires in:
                  </p>
                  <CountdownTimer />
                </div>
                
                <div className="mb-6 flex items-center justify-center gap-4">
                  <div className="text-center">
                    <p className="text-sm text-slate-500">Total Value</p>
                    <p className="text-2xl font-bold text-slate-400 line-through">$67</p>
                  </div>
                  <div className="text-4xl text-slate-300">→</div>
                  <div className="text-center">
                    <p className="text-sm text-green-600">Today&apos;s Price</p>
                    <p className="text-5xl font-bold text-green-600">$20</p>
                  </div>
                </div>

                <div className="mb-8 rounded-xl bg-slate-50 p-4">
                  <div className="grid gap-2 text-sm sm:grid-cols-3">
                    <div className="flex items-center justify-center gap-2">
                      <FileText className="h-4 w-4 text-green-600" />
                      <span>Feed Your Brain eBook ($20)</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Sparkles className="h-4 w-4 text-green-600" />
                      <span>4 Bonus Tools ($47 value)</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <ShieldCheck className="h-4 w-4 text-green-600" />
                      <span>7-Day Guarantee</span>
                    </div>
                  </div>
                </div>

                <Button
                  asChild
                  size="lg"
                  className="w-full bg-green-600 px-8 py-6 text-lg font-semibold text-white shadow-lg shadow-green-600/30 hover:bg-green-700 hover:shadow-xl sm:w-auto"
                >
                  <a href={HOTMART_CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
                    Get Instant Access Now - $20
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>

                <p className="mt-4 text-sm text-slate-500">
                  Instant download • Secure checkout via Hotmart
                </p>
              </div>

              {/* Guarantee */}
              <div className="mt-8 rounded-xl border-2 border-green-200 bg-green-50 p-6">
                <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
                  <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-green-600 text-white">
                    <ShieldCheck className="h-8 w-8" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">
                      7-Day Money-Back Guarantee
                    </h4>
                    <p className="text-sm text-slate-600">
                      Try &apos;Feed Your Brain&apos; risk-free for 7 days. If you don&apos;t find the strategies helpful, just reach out and we&apos;ll refund your purchase — no questions asked.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>

          <Accordion type="single" collapsible className="mt-8 w-full">
            <AccordionItem value="q1" className="border-b border-slate-200 px-4">
              <AccordionTrigger className="text-left text-base font-medium text-slate-900 hover:no-underline">
                Is this a diet plan with strict rules?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600">
                No! This is NOT a restrictive diet plan. It&apos;s a collection of simple nutrition strategies you can add to your current eating habits. There&apos;s no counting calories, no forbidden foods, and no complicated rules to follow. Think of it as a menu of &quot;simple wins&quot; you can pick and choose from.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q2" className="border-b border-slate-200 px-4">
              <AccordionTrigger className="text-left text-base font-medium text-slate-900 hover:no-underline">
                Will this interfere with my medication?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600">
                The strategies in this guide focus on adding nutritious foods to support brain health — not replacing or interfering with any medical treatment. However, we always recommend consulting with your healthcare provider before making significant changes to your diet, especially if you&apos;re taking medication.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q3" className="border-b border-slate-200 px-4">
              <AccordionTrigger className="text-left text-base font-medium text-slate-900 hover:no-underline">
                What if it doesn&apos;t work for me?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600">
                We offer a 7-day money-back guarantee. If you don&apos;t find the strategies helpful, just reach out within 7 days of purchase and we&apos;ll refund your money — no questions asked. We&apos;re confident you&apos;ll find value, but we want you to feel completely secure in your purchase.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q4" className="border-b border-slate-200 px-4">
              <AccordionTrigger className="text-left text-base font-medium text-slate-900 hover:no-underline">
                How quickly will I see results?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600">
                Everyone&apos;s body is different, but many people notice small improvements in energy and focus within the first week of implementing the strategies. The key is consistency — small, simple changes compound over time. This isn&apos;t about overnight transformation, but steady progress.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q5" className="border-b border-slate-200 px-4">
              <AccordionTrigger className="text-left text-base font-medium text-slate-900 hover:no-underline">
                Is this suitable for vegetarians/vegans?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600">
                The guide includes a variety of recipes and strategies, many of which are naturally plant-based. While some recipes include animal products, the core principles can be adapted to any dietary preference. The focus is on adding brain-supporting nutrients, regardless of your dietary style.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          {/* Countdown Timer */}
          <div className="mb-6 flex flex-col items-center gap-2">
            <p className="text-sm font-medium text-red-400">
              ⚡ Offer expires soon:
            </p>
            <CountdownTimer />
          </div>

          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-green-600/20 px-4 py-2 text-sm font-medium text-green-400">
            <Clock className="h-4 w-4" />
            <span>Don&apos;t wait for the next foggy day</span>
          </div>

          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            Ready for More Simple Wins?
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-300">
            You&apos;ve already seen how one simple strategy — walnuts and an apple — can make a difference. Imagine having 60+ more strategies at your fingertips, ready whenever you need them.
          </p>

          <div className="mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="w-full bg-green-600 px-8 py-6 text-lg font-semibold text-white shadow-lg shadow-green-600/30 hover:bg-green-700 hover:shadow-xl sm:w-auto"
            >
              <a href={HOTMART_CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
                Get Instant Access - $20
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>

          <p className="text-sm text-slate-400">
            Instant download • 7-day guarantee • Secure checkout
          </p>
        </div>
      </section>

      {/* Footer with Disclaimers */}
      <footer className="bg-slate-100 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center text-xs text-slate-500">
            <p className="mb-4">
              <strong>Disclaimer:</strong> These statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease. This guide is for informational purposes only and is not a substitute for professional medical advice. Always consult with your healthcare provider before making changes to your diet or health routine.
            </p>
            <p className="mb-4">
              Results may vary. The strategies in this guide are designed to support brain health and are not a treatment for ADHD or any medical condition.
            </p>
            <p>
              © {new Date().getFullYear()} Feed Your Brain. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
