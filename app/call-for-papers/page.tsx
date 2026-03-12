"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { NeuralNetworkBg } from "@/components/neural-network-bg"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Calendar,
  FileText,
  CheckCircle,
  ArrowRight,
  Brain,
  Network,
  Shield,
  Cpu,
  Globe,
  Lightbulb,
} from "lucide-react"

const researchTracks = [
  {
    icon: Brain,
    title: "Generative AI & Foundation Models",
    topics: [
      "Large Language Models (LLMs)",
      "Multimodal AI Systems",
      "Efficient Model Architectures",
      "Training & Fine-tuning Techniques",
      "Model Evaluation & Benchmarking",
    ],
  },
  {
    icon: Network,
    title: "Agentic AI Systems",
    topics: [
      "Autonomous AI Agents",
      "Multi-Agent Systems",
      "Planning & Reasoning",
      "Tool Use & Integration",
      "Self-Optimizing Systems",
    ],
  },
  {
    icon: Cpu,
    title: "AI Infrastructure & 6G",
    topics: [
      "AI-Native Networks",
      "Edge AI & Computing",
      "Network Intelligence",
      "Distributed AI Systems",
      "Real-time AI Orchestration",
    ],
  },
  {
    icon: Shield,
    title: "AI Safety & Governance",
    topics: [
      "Responsible AI Development",
      "AI Alignment",
      "Privacy-Preserving AI",
      "Regulatory Frameworks",
      "International Standards",
    ],
  },
  {
    icon: Globe,
    title: "Industry Applications",
    topics: [
      "Healthcare AI",
      "Defense & Security",
      "Telecommunications",
      "Smart Infrastructure",
      "Space Technologies",
    ],
  },
  {
    icon: Lightbulb,
    title: "Emerging Topics",
    topics: [
      "Quantum Machine Learning",
      "Neuromorphic Computing",
      "AI for Climate",
      "Human-AI Collaboration",
      "Cognitive Architectures",
    ],
  },
]

const importantDates = [
  { label: "Paper Submission Deadline", date: "January 15, 2027" },
  { label: "Notification of Acceptance", date: "February 15, 2027" },
  { label: "Camera-Ready Submission", date: "March 1, 2027" },
  { label: "Early Registration Deadline", date: "March 15, 2027" },
  { label: "Conference Dates", date: "April 9-10, 2027" },
]

const submissionGuidelines = [
  "Papers must be original and not simultaneously submitted to another venue",
  "Maximum 8 pages for full papers, 4 pages for short papers",
  "Use the provided LaTeX or Word template",
  "Double-blind review process - anonymize your submission",
  "Include an abstract of no more than 250 words",
  "PDF format only",
]

export default function CallForPapersPage() {
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
              Submit Your Research
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6">
              Call for{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Papers
              </span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We invite researchers, practitioners, and innovators to submit their 
              cutting-edge work on artificial intelligence, agentic systems, and 
              next-generation networks.
            </p>
            <Link href="https://cmt3.research.microsoft.com/NEXTGENAIFORUM2027" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Submit Paper
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-bold font-display mb-8 text-center">
              Important{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Dates
              </span>
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {importantDates.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-4 rounded-xl bg-card border border-border text-center"
                >
                  <Calendar className="w-5 h-5 text-primary mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                  <p className="font-semibold text-foreground">{item.date}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Research Tracks */}
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
              Research{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Tracks
              </span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Submit your work to one of our six research tracks covering the 
              full spectrum of AI innovation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchTracks.map((track, index) => (
              <motion.div
                key={track.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card/50 border border-border hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <track.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-4">
                  {track.title}
                </h3>
                <ul className="space-y-2">
                  {track.topics.map((topic, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Submission Guidelines */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold font-display mb-6">
                Submission{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Guidelines
                </span>
              </h2>
              <ul className="space-y-4">
                {submissionGuidelines.map((guideline, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{guideline}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20"
            >
              <h3 className="text-xl font-display font-bold text-foreground mb-4">
                Review Process
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  All submissions will undergo a rigorous double-blind peer review 
                  process by our technical program committee.
                </p>
                <p>
                  Papers will be evaluated based on originality, technical quality, 
                  significance, and clarity of presentation.
                </p>
                <p>
                  Accepted papers will be published in the conference proceedings 
                  and presented during the event.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-primary/20">
                <h4 className="font-semibold text-foreground mb-2">Need Help?</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Contact our program chairs for submission inquiries.
                </p>
                <Link href="/contact">
                  <Button variant="outline" className="border-primary/50 hover:bg-primary/10">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
