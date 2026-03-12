"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { NeuralNetworkBg } from "@/components/neural-network-bg"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Building2,
  Handshake,
  Lightbulb,
  Rocket,
  Users,
  ArrowRight,
  CheckCircle,
} from "lucide-react"

const engagementTypes = [
  {
    icon: Building2,
    title: "Government & PSUs",
    description:
      "Present real operational challenges to the research community and explore AI solutions for national infrastructure.",
    benefits: [
      "Direct access to cutting-edge research",
      "Technology transfer opportunities",
      "Collaboration with academia",
      "Innovation partnerships",
    ],
  },
  {
    icon: Handshake,
    title: "Private Enterprises",
    description:
      "Connect with researchers and startups to solve complex business challenges using AI and machine learning.",
    benefits: [
      "Research collaboration",
      "Talent acquisition pipeline",
      "Innovation scouting",
      "Technology partnerships",
    ],
  },
  {
    icon: Rocket,
    title: "Startups",
    description:
      "Showcase innovative AI solutions, connect with investors, and find enterprise customers.",
    benefits: [
      "Startup showcase platform",
      "Investor connections",
      "Enterprise partnerships",
      "Mentorship opportunities",
    ],
  },
  {
    icon: Users,
    title: "Academia",
    description:
      "Bridge the gap between research and real-world applications through industry collaboration.",
    benefits: [
      "Industry research funding",
      "Applied research opportunities",
      "Student placement programs",
      "Joint publications",
    ],
  },
]

const collaborationProcess = [
  {
    step: "1",
    title: "Problem Statement",
    description:
      "Organizations present their operational challenges and requirements to the forum.",
  },
  {
    step: "2",
    title: "Research Matching",
    description:
      "We match challenges with relevant researchers, startups, and technology providers.",
  },
  {
    step: "3",
    title: "Collaboration",
    description:
      "Facilitate direct collaboration between problem owners and solution providers.",
  },
  {
    step: "4",
    title: "Implementation",
    description:
      "Support technology transfer and deployment through structured partnerships.",
  },
]

export default function IndustryPage() {
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
              Industry Engagement
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6">
              Industry{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Engagement
              </span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              A marketplace for real-world problems and technical solutions. 
              Connect government agencies, enterprises, startups, and researchers 
              for direct collaboration and technology transfer.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Partner With Us
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Engagement Types */}
      <section className="py-16 lg:py-24 bg-card/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold font-display mb-4">
              Who Should{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Engage
              </span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              NextGenAIForum brings together diverse stakeholders to solve 
              real-world challenges through AI innovation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {engagementTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 lg:p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <type.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                  {type.title}
                </h3>
                <p className="text-muted-foreground mb-4">{type.description}</p>
                <ul className="space-y-2">
                  {type.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration Process */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold font-display mb-4">
              How It{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Works
              </span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our structured approach to industry-research collaboration 
              ensures successful technology transfer and innovation.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

              <div className="space-y-8">
                {collaborationProcess.map((step, index) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-6"
                  >
                    <div className="relative">
                      <div className="w-16 h-16 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl font-bold text-primary">{step.step}</span>
                      </div>
                    </div>
                    <div className="pt-2">
                      <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-card/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="p-8 lg:p-12 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
              <Lightbulb className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                Ready to Collaborate?
              </h3>
              <p className="text-muted-foreground mb-6">
                Whether you have a challenge to solve or a solution to offer, 
                we want to hear from you. Join our industry engagement program.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    Get in Touch
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/sponsors">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary/50 hover:bg-primary/10"
                  >
                    Become a Sponsor
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
