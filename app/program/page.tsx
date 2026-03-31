"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { NeuralNetworkBg } from "@/components/neural-network-bg"
import { Clock, MapPin, Users, Mic, BookOpen, Coffee } from "lucide-react"
import { Button } from "@/components/ui/button"

const days = [
  { id: "day1", label: "Day 1", date: "April 9, 2027" },
  { id: "day2", label: "Day 2", date: "April 10, 2027" },
]

const scheduleData = {
  day1: [
    {
      time: "08:00 - 09:00",
      title: "Registration & Welcome Coffee",
      type: "break",
      icon: Coffee,
      location: "Main Lobby",
    },
    {
      time: "09:00 - 09:30",
      title: "Inaugural Ceremony",
      type: "keynote",
      icon: Mic,
      description: "Welcome address and opening remarks",
      location: "Main Auditorium",
    },
    {
      time: "09:30 - 10:30",
      title: "Keynote: The Agentic Network Revolution",
      type: "keynote",
      icon: Mic,
      speaker: "Speaker to be announced",
      description: "Exploring the paradigm shift toward autonomous AI systems",
      location: "Main Auditorium",
    },
    {
      time: "10:30 - 11:00",
      title: "Networking Break",
      type: "break",
      icon: Coffee,
      location: "Exhibition Hall",
    },
    {
      time: "11:00 - 12:30",
      title: "Panel: Generative AI & Foundation Models",
      type: "panel",
      icon: Users,
      description: "Industry leaders discuss the future of LLMs and multimodal systems",
      location: "Hall A",
    },
    {
      time: "11:00 - 12:30",
      title: "Research Track: AI Infrastructure",
      type: "session",
      icon: BookOpen,
      description: "Paper presentations on scalable AI deployment",
      location: "Hall B",
    },
    {
      time: "12:30 - 14:00",
      title: "Lunch & Industry Exhibition",
      type: "break",
      icon: Coffee,
      location: "Exhibition Hall",
    },
    {
      time: "14:00 - 15:30",
      title: "Workshop: 6G Network Intelligence",
      type: "workshop",
      icon: BookOpen,
      description: "Hands-on session on AI-native network orchestration",
      location: "Workshop Room 1",
    },
    {
      time: "14:00 - 15:30",
      title: "Panel: AI Standards & Governance",
      type: "panel",
      icon: Users,
      description: "3GPP, ITU, and TSDSI representatives discuss standardization",
      location: "Hall A",
    },
    {
      time: "15:30 - 16:00",
      title: "Afternoon Break",
      type: "break",
      icon: Coffee,
      location: "Exhibition Hall",
    },
    {
      time: "16:00 - 17:30",
      title: "Industry Engagement Session",
      type: "session",
      icon: Users,
      description: "Government, PSUs, and enterprises present real-world challenges",
      location: "Main Auditorium",
    },
    {
      time: "18:00 - 20:00",
      title: "Welcome Reception & Networking Dinner",
      type: "networking",
      icon: Users,
      location: "Grand Ballroom",
    },
  ],
  day2: [
    {
      time: "08:30 - 09:00",
      title: "Morning Coffee",
      type: "break",
      icon: Coffee,
      location: "Main Lobby",
    },
    {
      time: "09:00 - 10:00",
      title: "Keynote: Strategic AI Autonomy",
      type: "keynote",
      icon: Mic,
      speaker: "Speaker to be announced",
      description: "Building sovereign AI capabilities for national infrastructure",
      location: "Main Auditorium",
    },
    {
      time: "10:00 - 11:00",
      title: "Keynote: The Future of Agentic Systems",
      type: "keynote",
      icon: Mic,
      speaker: "Speaker to be announced",
      description: "From rule-based to autonomous self-optimizing systems",
      location: "Main Auditorium",
    },
    {
      time: "11:00 - 11:30",
      title: "Networking Break",
      type: "break",
      icon: Coffee,
      location: "Exhibition Hall",
    },
    {
      time: "11:30 - 13:00",
      title: "Research Track: Generative AI Applications",
      type: "session",
      icon: BookOpen,
      description: "Paper presentations on practical applications",
      location: "Hall A",
    },
    {
      time: "11:30 - 13:00",
      title: "Workshop: Responsible AI Development",
      type: "workshop",
      icon: BookOpen,
      description: "Best practices for ethical AI implementation",
      location: "Workshop Room 1",
    },
    {
      time: "13:00 - 14:00",
      title: "Lunch",
      type: "break",
      icon: Coffee,
      location: "Exhibition Hall",
    },
    {
      time: "14:00 - 15:30",
      title: "Panel: Healthcare & Defense AI Applications",
      type: "panel",
      icon: Users,
      description: "Mission-critical AI deployment case studies",
      location: "Hall A",
    },
    {
      time: "14:00 - 15:30",
      title: "Young Professionals & WiE Session",
      type: "session",
      icon: Users,
      description: "Mentorship, networking, and career development",
      location: "Hall B",
    },
    {
      time: "15:30 - 16:00",
      title: "Afternoon Break",
      type: "break",
      icon: Coffee,
      location: "Exhibition Hall",
    },
    {
      time: "16:00 - 17:00",
      title: "Startup Showcase",
      type: "session",
      icon: Mic,
      description: "Emerging AI startups present innovative solutions",
      location: "Main Auditorium",
    },
    {
      time: "17:00 - 17:30",
      title: "Closing Ceremony & Awards",
      type: "keynote",
      icon: Mic,
      description: "Best paper awards and closing remarks",
      location: "Main Auditorium",
    },
  ],
}

const programMenuSections = [
  {
    title: "Symposium (Research Paper Call)",
    items: [
      "AI in Industry and Manufacturing",
      "AI in Healthcare and Bio-Tech",
      "AI for Smart Cities and Infrastructure",
      "AI in Telecommunications and Networks",
      "AI in Finance and Business Analytics",
      "AI in Agriculture and Education",
      "AI in Transportation: land, marine and space",
      "Edge AI and IoT Systems",
      "AI Startups and Innovation",
    ],
  },
  {
    title: "Industry Exhibition Zone",
    items: [
      "AI startups showcase",
      "IoT hardware demos",
      "Enterprise AI solutions",
      "Sponsor booths",
    ],
  },
  {
    title: "Hands-on Workshops (Parallel) Example",
    items: [
      "Workshop 1: LLM Deployment in Enterprise",
      "Workshop 2: Edge AI on Low-Power Devices",
      "Workshop 3: MLOps & AI DevOps in Production",
      "Workshop 4: Agentic AI",
    ],
  },
  {
    title: "Hackathon and Innovation Challenge",
    items: [
      "24-hour AI build challenge",
      "Industry problem statements",
      "Sponsored challenges",
      "Prize awards",
    ],
  },
  {
    title: "Panel Discussions",
    items: [
      "Where we stand in AI?",
      "Is AI Future or shortterm hype?",
      "Role of AI in Space and Defence: Opportunities for Startups",
    ],
  },
  {
    title: "AI Product Demo Arena",
    items: [
      "10-minute rapid demo sessions",
      "Startup pitching",
      "Live AI tool demonstrations",
    ],
  },
  {
    title: "Certification Program",
    items: [
      "1-day AI professional certification",
      "AI Ethics certification",
      "Industry co-branded certification",
    ],
  },
  {
    title: "Networking Events",
    items: [
      "AI Leaders Roundtable",
      "Women in AI session",
      "Startup-Investor Meet",
      "Closed-door CXO discussion",
    ],
  },
]

const typeColors: Record<string, string> = {
  keynote: "bg-primary/20 text-primary border-primary/30",
  panel: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  workshop: "bg-green-500/20 text-green-400 border-green-500/30",
  session: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  break: "bg-muted text-muted-foreground border-border",
  networking: "bg-pink-500/20 text-pink-400 border-pink-500/30",
}

export default function ProgramPage() {
  const [activeDay, setActiveDay] = useState("day1")

  return (
    <main className="min-h-screen">
      <NeuralNetworkBg />
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary font-medium mb-6">
              Conference Schedule
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6">
              Program{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Schedule
              </span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Two days of keynotes, panels, workshops, and networking opportunities 
              with world-leading AI researchers and industry pioneers.
            </p>
            <div className="mt-6 flex justify-center">
              <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-sm text-amber-500 font-medium">
                ⚠️ Tentative Schedule - Under Construction
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Schedule */}
      <section className="pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Day Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex p-1 rounded-xl bg-card border border-border">
              {days.map((day) => (
                <Button
                  key={day.id}
                  variant={activeDay === day.id ? "default" : "ghost"}
                  className={`px-6 py-3 ${
                    activeDay === day.id
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={() => setActiveDay(day.id)}
                >
                  <span className="font-semibold">{day.label}</span>
                  <span className="ml-2 text-sm opacity-75">{day.date}</span>
                </Button>
              ))}
            </div>
          </div>

          {/* Schedule Items */}
          <motion.div
            key={activeDay}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-4xl mx-auto space-y-4"
          >
            {scheduleData[activeDay as keyof typeof scheduleData].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`p-6 rounded-xl border ${
                  item.type === "break"
                    ? "bg-muted/30 border-border"
                    : "bg-card/50 border-border hover:border-primary/30"
                } transition-colors`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                  {/* Time */}
                  <div className="flex items-center gap-2 lg:w-40 flex-shrink-0">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-foreground">
                      {item.time}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                          typeColors[item.type]
                        }`}
                      >
                        {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {item.title}
                    </h3>
                    {item.speaker && (
                      <p className="text-sm text-primary mb-1">{item.speaker}</p>
                    )}
                    {item.description && (
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    )}
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-2 text-sm text-muted-foreground lg:w-40 flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center text-sm text-muted-foreground mt-12"
          >
            Schedule is subject to change. Speaker details will be announced soon.
          </motion.p>
        </div>
      </section>

      {/* Program Menu */}
      <section className="pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-3">
                Program (Conference Events)
              </h2>
              <p className="text-muted-foreground">
                Explore the full set of symposium tracks, industry activities,
                workshops, and networking sessions.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {programMenuSections.map((section) => (
                <div
                  key={section.title}
                  className="rounded-xl border border-border bg-card/50 p-6"
                >
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {section.title}
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
