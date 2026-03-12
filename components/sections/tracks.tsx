"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { ArrowRight, Layers, Radio, FileCode, Building2, GraduationCap, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"

const tracks = [
  {
    icon: Layers,
    title: "Generative AI & Foundation Models",
    description:
      "Large language models, multimodal systems, and the architecture of next-generation AI.",
    color: "from-cyan-500/20 to-blue-500/20",
  },
  {
    icon: Radio,
    title: "6G & Network Intelligence",
    description:
      "AI-native networks, edge computing, and the orchestration of intelligent infrastructure.",
    color: "from-blue-500/20 to-indigo-500/20",
  },
  {
    icon: FileCode,
    title: "AI Standards & Governance",
    description:
      "International standardization, policy frameworks, and responsible AI development.",
    color: "from-indigo-500/20 to-purple-500/20",
  },
  {
    icon: Building2,
    title: "Industry Applications",
    description:
      "Real-world deployment across telecommunications, healthcare, defense, and more.",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: GraduationCap,
    title: "Research & Academia",
    description:
      "Cutting-edge research presentations, workshops, and academic collaborations.",
    color: "from-pink-500/20 to-rose-500/20",
  },
  {
    icon: Lightbulb,
    title: "Startups & Innovation",
    description:
      "Emerging technologies, startup showcases, and venture opportunities in AI.",
    color: "from-rose-500/20 to-orange-500/20",
  },
]

export function TracksSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-card/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary font-medium mb-4">
            Research Tracks
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-6">
            Conference{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Tracks
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore diverse tracks covering the full spectrum of AI innovation, 
            from foundational research to real-world applications.
          </p>
        </motion.div>

        {/* Tracks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tracks.map((track, index) => (
            <motion.div
              key={track.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              {/* Gradient background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${track.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />

              <div className="relative p-6 lg:p-8">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <track.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                  {track.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {track.description}
                </p>

                {/* Link */}
                <Link
                  href="/call-for-papers"
                  className="inline-flex items-center text-sm text-primary font-medium group-hover:underline"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link href="/call-for-papers">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Submit Your Paper
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
