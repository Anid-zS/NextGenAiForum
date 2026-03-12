"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { NeuralNetworkBg } from "@/components/neural-network-bg"
import { Target, Handshake, Globe, Rocket, Building, HeartPulse, Shield, Satellite } from "lucide-react"

const objectives = [
  {
    icon: Target,
    title: "Premier Platform",
    description:
      "Establish an inclusive platform bringing together professionals, industry leaders, researchers, innovators, startups, and learners across all domains of AI and Machine Learning.",
  },
  {
    icon: Handshake,
    title: "Foster Collaboration",
    description:
      "Bridge the gap between academia, industry, and research institutions to accelerate AI innovation and deployment.",
  },
  {
    icon: Globe,
    title: "Global Networking",
    description:
      "Create networking opportunities for partnerships, research collaborations, and technology transfer on a global scale.",
  },
  {
    icon: Rocket,
    title: "Drive Innovation",
    description:
      "Enable knowledge exchange on AI innovation, deployment strategies, and emerging technologies across industries.",
  },
]

const applicationAreas = [
  { icon: Building, label: "Telecommunications" },
  { icon: HeartPulse, label: "Healthcare" },
  { icon: Shield, label: "Defense" },
  { icon: Satellite, label: "Space Technologies" },
]

export default function AboutPage() {
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
              About the Forum
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                NextGenAIForum
              </span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A strategic bridge between advanced AI research, industrial deployment, 
              and global regulatory standards.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 lg:py-24 bg-card/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
                Our{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Vision
                </span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  The NextGenAIForum annual international conference is envisioned as a 
                  strategic bridge between advanced AI research, industrial deployment, 
                  and global regulatory standards.
                </p>
                <p>
                  Its objective is to move artificial intelligence beyond experimental 
                  systems and integrate it into mission-critical infrastructure, ensuring 
                  that breakthroughs maintain the highest standards of security, reliability, 
                  and operational integrity.
                </p>
                <p>
                  The forum acts as a marketplace for real-world problems and technical 
                  solutions, creating opportunities for direct collaboration, technology 
                  transfer, and scalable innovation.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {applicationAreas.map((area, index) => (
                <div
                  key={area.label}
                  className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
                >
                  <area.icon className="w-8 h-8 text-primary mb-3" />
                  <span className="text-foreground font-medium">{area.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
              Our{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Objectives
              </span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Building a unified ecosystem for professionals, enterprises, startups, 
              and future AI leaders.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {objectives.map((obj, index) => (
              <motion.div
                key={obj.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 lg:p-8 rounded-2xl bg-card/50 border border-border hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <obj.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                  {obj.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {obj.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* National Focus */}
      <section className="py-16 lg:py-24 bg-card/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
                National Strategic{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Focus
                </span>
              </h2>
            </div>

            <div className="p-8 lg:p-12 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
              <p className="text-lg text-foreground leading-relaxed mb-6">
                For the Indian ecosystem, the forum seeks to:
              </p>
              <ul className="space-y-4">
                {[
                  "Highlight indigenous AI research and innovation",
                  "Accelerate national technology capability development",
                  "Reduce dependence on imported intellectual property",
                  "Strengthen sovereign AI infrastructure",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
