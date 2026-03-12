"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Brain, Network, Shield, Zap, Globe, Cpu } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "Autonomous AI Systems",
    description:
      "Explore the shift from passive, rule-based infrastructures toward autonomous, self-optimizing agentic systems that can reason, plan, and execute complex tasks.",
  },
  {
    icon: Network,
    title: "6G Orchestration",
    description:
      "Discover how next-generation networks will enable real-time AI coordination across distributed systems, powering the agentic infrastructure of tomorrow.",
  },
  {
    icon: Shield,
    title: "Standards & Compliance",
    description:
      "Alignment with 3GPP, ITU, and TSDSI ensures breakthroughs in AI maintain the highest standards of security, reliability, and operational integrity.",
  },
  {
    icon: Zap,
    title: "Generative AI",
    description:
      "From large language models to multimodal systems, explore the cutting edge of generative AI and its applications across industries.",
  },
  {
    icon: Globe,
    title: "Global Policy",
    description:
      "Bridge the gap between technical innovation and regulatory frameworks, shaping policies that foster responsible AI development worldwide.",
  },
  {
    icon: Cpu,
    title: "AI Infrastructure",
    description:
      "Build the foundation for scalable, efficient AI deployment with advanced compute architectures and optimized inference systems.",
  },
]

export function AgenticEraSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 lg:py-32 relative overflow-hidden bg-gradient-to-b from-background to-secondary/30">
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-accent/3 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary font-medium mb-4">
            Conference Focus
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-6">
            Shaping the{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Agentic Era
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            At NextGenAIForum 2027, our mandate is to pioneer the shift from passive, 
            rule-based infrastructures toward autonomous, self-optimizing agentic systems. 
            Where technical innovation meets regulatory scrutiny.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-6 lg:p-8 rounded-2xl bg-card/50 border border-border hover:border-primary/30 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
