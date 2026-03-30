"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function AgenticNetworkDiagram() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-16 lg:py-24 bg-gradient-to-b from-background to-secondary/20 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary font-medium mb-4">
            Conference Architecture
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-6">
            The{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Agentic Network
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore the interconnected ecosystem of AI systems, 6G orchestration, 
            sovereign AI policies, and standards development that powers the next 
            generation of intelligent infrastructure.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden bg-card border border-border shadow-2xl">
            <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-5 sm:p-8 md:p-10">
              <div className="mx-auto max-w-4xl">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="w-3 h-3 rounded-full bg-cyan-500 animate-pulse" />
                  <span className="text-cyan-400 text-xs font-mono tracking-wider">NextGenAIForum</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-center">
                  <div className="order-2 md:order-1 space-y-3">
                    <div className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-lg text-center">
                      <p className="text-cyan-400 text-xs sm:text-sm font-semibold">6G ORCHESTRATION</p>
                    </div>
                    <div className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-lg text-center">
                      <p className="text-cyan-400 text-xs sm:text-sm font-semibold">AI STANDARDS</p>
                    </div>
                  </div>

                  <div className="order-1 md:order-2">
                    <div className="w-56 h-56 sm:w-64 sm:h-64 mx-auto rounded-full border-2 border-cyan-500/50 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                      <div className="text-center px-4">
                        <p className="text-cyan-400 text-base sm:text-lg font-bold">AGENTIC</p>
                        <p className="text-cyan-400 text-base sm:text-lg font-bold">NETWORK CORE</p>
                      </div>
                    </div>
                  </div>

                  <div className="order-3 space-y-3">
                    <div className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-lg text-center">
                      <p className="text-cyan-400 text-xs sm:text-sm font-semibold">SOVEREIGN AI</p>
                    </div>
                    <div className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-lg text-center">
                      <p className="text-cyan-400 text-xs sm:text-sm font-semibold">SDO POLICY LAYER</p>
                    </div>
                  </div>
                </div>

                <p className="text-slate-400 text-xs sm:text-sm text-center mt-6 md:mt-8">
                  Converging Generative AI, 6G Networks & Global Policy
                </p>
              </div>
            </div>
            
            {/* Caption */}
            <div className="p-6 bg-card border-t border-border">
              <p className="text-center text-sm text-muted-foreground">
                The Agentic Network architecture brings together autonomous AI systems, 
                next-generation network orchestration, and international policy frameworks 
                to create a unified, intelligent infrastructure.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Key Components */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto"
        >
          {[
            { label: "6G Orchestration", desc: "Next-gen network intelligence" },
            { label: "Sovereign AI", desc: "National AI autonomy" },
            { label: "SDO Policy Layer", desc: "Standards development" },
            { label: "Agentic Core", desc: "Autonomous AI systems" },
          ].map((item, index) => (
            <div
              key={item.label}
              className="p-4 rounded-xl bg-card/50 border border-border text-center hover:border-primary/30 transition-colors"
            >
              <p className="font-semibold text-foreground text-sm mb-1">{item.label}</p>
              <p className="text-xs text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
