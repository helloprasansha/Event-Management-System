"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"

export const description = "An interactive area chart"

const chartData = [
  { date: "2024-04-01", registered: 250, attended: 220 },
  { date: "2024-04-02", registered: 180, attended: 160 },
  { date: "2024-04-03", registered: 210, attended: 185 },
  { date: "2024-04-04", registered: 320, attended: 295 },
  { date: "2024-04-05", registered: 450, attended: 420 },
  { date: "2024-04-06", registered: 510, attended: 475 },
  { date: "2024-04-07", registered: 380, attended: 340 },
  { date: "2024-04-08", registered: 560, attended: 530 },
  { date: "2024-04-09", registered: 170, attended: 145 },
  { date: "2024-04-10", registered: 300, attended: 275 },
  { date: "2024-04-11", registered: 430, attended: 390 },
  { date: "2024-04-12", registered: 360, attended: 330 },
  { date: "2024-04-13", registered: 490, attended: 450 },
  { date: "2024-04-14", registered: 240, attended: 210 },
  { date: "2024-04-15", registered: 220, attended: 190 },
  { date: "2024-04-16", registered: 260, attended: 235 },
  { date: "2024-04-17", registered: 610, attended: 570 },
  { date: "2024-04-18", registered: 520, attended: 490 },
  { date: "2024-04-19", registered: 330, attended: 295 },
  { date: "2024-04-20", registered: 150, attended: 125 },
  { date: "2024-04-21", registered: 240, attended: 215 },
  { date: "2024-04-22", registered: 310, attended: 285 },
  { date: "2024-04-23", registered: 280, attended: 250 },
  { date: "2024-04-24", registered: 470, attended: 435 },
  { date: "2024-04-25", registered: 340, attended: 305 },
  { date: "2024-04-26", registered: 140, attended: 120 },
  { date: "2024-04-27", registered: 540, attended: 500 },
  { date: "2024-04-28", registered: 260, attended: 225 },
  { date: "2024-04-29", registered: 420, attended: 385 },
  { date: "2024-04-30", registered: 620, attended: 580 },
];

const chartConfig = {
  registered: {
    label: "Registered",
    color: "var(--chart-1)",
  },
  attended: {
    label: "Attended",
    color: "var(--chart-2)",
  },
}; 

export function ChartAreaInteractive() {
  const [timeRange, setTimeRange] = React.useState("90d")

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date)
    const referenceDate = new Date("2024-06-30")
    let daysToSubtract = 90
    if (timeRange === "30d") {
      daysToSubtract = 30
    } else if (timeRange === "7d") {
      daysToSubtract = 7
    }
    const startDate = new Date(referenceDate)
    startDate.setDate(startDate.getDate() - daysToSubtract)
    return date >= startDate
  })

  return (
    <Card className="@container/card">
      <CardHeader>
        <CardTitle>Event attendance</CardTitle>
        <CardDescription>
          <span className="hidden @[540px]/card:block">
            Registrations and check-ins for the last 3 months
          </span>
          <span className="@[540px]/card:hidden">Attendance trend</span>
        </CardDescription>
        <CardAction>
          <ToggleGroup
            type="single"
            value={timeRange}
            onValueChange={setTimeRange}
            variant="outline"
            className="hidden *:data-[slot=toggle-group-item]:px-4! @[767px]/card:flex"
          >
            <ToggleGroupItem value="90d">Last 3 months</ToggleGroupItem>
            <ToggleGroupItem value="30d">Last 30 days</ToggleGroupItem>
            <ToggleGroupItem value="7d">Last 7 days</ToggleGroupItem>
          </ToggleGroup>
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger
              className="flex w-40 **:data-[slot=select-value]:block **:data-[slot=select-value]:truncate @[767px]/card:hidden"
              size="sm"
              aria-label="Select a value"
            >
              <SelectValue placeholder="Last 3 months" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="90d" className="rounded-lg">
                Last 3 months
              </SelectItem>
              <SelectItem value="30d" className="rounded-lg">
                Last 30 days
              </SelectItem>
              <SelectItem value="7d" className="rounded-lg">
                Last 7 days
              </SelectItem>
            </SelectContent>
          </Select>
        </CardAction>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillRegistered" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-registered)"
                  stopOpacity={1.0}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-registered)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillAttended" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-attended)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-attended)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="attended"
              type="natural"
              fill="url(#fillAttended)"
              stroke="var(--color-attended)"
              stackId="a"
            />
            <Area
              dataKey="registered"
              type="natural"
              fill="url(#fillRegistered)"
              stroke="var(--color-registered)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
