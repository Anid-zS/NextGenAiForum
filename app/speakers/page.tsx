"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { NeuralNetworkBg } from "@/components/neural-network-bg"
import { User, Linkedin, Twitter } from "lucide-react"

const speakerCategories = [
  {
    title: "Keynote Speakers",
    speakers: [
      {
        name: "Speaker to be announced",
        role: "Keynote Speaker",
        affiliation: "Details coming soon",
        topic: "The Agentic Network Revolution",
      },
      {
        name: "Speaker to be announced",
        role: "Keynote Speaker",
        affiliation: "Details coming soon",
        topic: "Strategic AI Autonomy",
      },
      {
        name: "Speaker to be announced",
        role: "Keynote Speaker",
        affiliation: "Details coming soon",
        topic: "The Future of Agentic Systems",
      },
    ],
  },
  {
    title: "Industry Leaders",
    speakers: [
      {
        name: "Speaker to be announced",
        role: "Industry Expert",
        affiliation: "Details coming soon",
        topic: "Generative AI in Enterprise",
      },
      {
        name: "Speaker to be announced",
        role: "Industry Expert",
        affiliation: "Details coming soon",
        topic: "6G Network Intelligence",
      },
      {
        name: "Speaker to be announced",
        role: "Industry Expert",
        affiliation: "Details coming soon",
        topic: "AI Infrastructure at Scale",
      },
    ],
  },
  {
    title: "Research Leaders",
    speakers: [
      {
        name: "Speaker to be announced",
        role: "Research Leader",
        affiliation: "Details coming soon",
        topic: "Foundation Models Research",
      },
      {
        name: "Speaker to be announced",
        role: "Research Leader",
        affiliation: "Details coming soon",
        topic: "AI Safety & Alignment",
      },
      {
        name: "Speaker to be announced",
        role: "Research Leader",
        affiliation: "Details coming soon",
        topic: "Multimodal AI Systems",
      },
    ],
  },
  {
    title: "Policy & Standards",
    speakers: [
      {
        name: "Speaker to be announced",
        role: "Policy Expert",
        affiliation: "Details coming soon",
        topic: "Global AI Governance",
      },
      {
        name: "Speaker to be announced",
        role: "Standards Expert",
        affiliation: "Details coming soon",
        topic: "3GPP & ITU Standards",
      },
      {
        name: "Speaker to be announced",
        role: "Policy Expert",
        affiliation: "Details coming soon",
        topic: "Responsible AI Policy",
      },
    ],
  },
]

function SpeakerCard({
  speaker,
  index,
}: {
  speaker: {
    name: string
    role: string
    affiliation: string
    topic: string
  }
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
    >
      {/* Photo placeholder */}
      <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
        <User className="w-20 h-20 text-primary/30" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-display font-semibold text-foreground mb-1">
          {speaker.name}
        </h3>
        <p className="text-sm text-primary mb-1">{speaker.role}</p>
        <p className="text-sm text-muted-foreground mb-3">{speaker.affiliation}</p>
        
        <div className="pt-3 border-t border-border">
          <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
            Session Topic
          </p>
          <p className="text-sm text-foreground">{speaker.topic}</p>
        </div>

        {/* Social links placeholder */}
        <div className="flex items-center gap-2 mt-4">
          <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center opacity-50">
            <Linkedin className="w-4 h-4" />
          </div>
          <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center opacity-50">
            <Twitter className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Hover effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </motion.div>
  )
}

export default function SpeakersPage() {
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
              Meet the Experts
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Speakers
              </span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              World-leading researchers, industry pioneers, and policymakers 
              shaping the future of artificial intelligence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Speaker Categories */}
      {speakerCategories.map((category, categoryIndex) => (
        <section
          key={category.title}
          className={`py-16 ${categoryIndex % 2 === 0 ? "" : "bg-card/30"}`}
        >
          <div className="container mx-auto px-4 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-3xl font-bold font-display mb-8"
            >
              {category.title}
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.speakers.map((speaker, index) => (
                <SpeakerCard key={index} speaker={speaker} index={index} />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Call to Action */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
              <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                Interested in Speaking?
              </h3>
              <p className="text-muted-foreground mb-6">
                We are currently accepting speaker proposals for NextGenAIForum 2027. 
                Share your expertise with our global audience.
              </p>
              <p className="text-sm text-muted-foreground">
                Speaker announcements coming soon. Stay tuned for updates.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
