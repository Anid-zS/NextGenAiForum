"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { NeuralNetworkBg } from "@/components/neural-network-bg"
import { ArrowUpRight, Users } from "lucide-react"

const committeeSections = [
  {
    id: "steering-committee",
    label: "Steering Committee",
    eyebrow: "Strategic Direction",
    description:
      "The Steering Committee provides the long-range vision for NextGenAIForum, aligns the conference with its mission, and oversees the strategic priorities that shape the event.",
    focusAreas: [
      "Defining the forum's strategic direction and long-term impact.",
      "Ensuring alignment between conference themes, industry priorities, and research outcomes.",
      "Guiding major policy, collaboration, and governance decisions.",
    ],
  },
  {
    id: "executive-chair",
    label: "Executive Chair",
    eyebrow: "Leadership & Oversight",
    description:
      "The Executive Chair leads overall conference execution, coordinates with all organizing teams, and ensures the forum is delivered with operational clarity and consistency.",
    focusAreas: [
      "Providing overall leadership across planning, execution, and stakeholder coordination.",
      "Supervising timelines, responsibilities, and cross-functional decision making.",
      "Representing the forum in key external and institutional engagements.",
    ],
  },
  {
    id: "general-co-chairs",
    label: "General Co-Chairs",
    eyebrow: "Cross-Functional Coordination",
    description:
      "The General Co-Chairs support conference-wide management by coordinating committees, streamlining decisions, and helping deliver a unified participant experience across all tracks and activities.",
    focusAreas: [
      "Coordinating the work of organizational units and conference teams.",
      "Supporting planning for sessions, logistics, partnerships, and outreach.",
      "Maintaining continuity across academic, industry, and community-facing activities.",
    ],
  },
  {
    id: "technical-program-committee",
    label: "Technical Program Committee",
    eyebrow: "Review & Technical Quality",
    description:
      "The Technical Program Committee manages the technical review process, curates high-quality contributions, and supports the intellectual rigor of the conference program.",
    focusAreas: [
      "Reviewing submissions for quality, originality, and relevance.",
      "Curating technical sessions, presentations, and scholarly discussions.",
      "Maintaining the standards of the conference's research and innovation program.",
    ],
  },
]

export default function CommitteePage() {
  return (
    <main className="min-h-screen">
      <NeuralNetworkBg />
      <Navigation />

      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-5xl text-center"
          >
            <span className="mb-6 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              Conference Leadership
            </span>
            <h1 className="mb-6 text-4xl font-bold font-display md:text-5xl lg:text-6xl">
              Committee{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Structure
              </span>
            </h1>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground">
              Explore the organizing structure behind NextGenAIForum, including the committees and leadership roles responsible for strategic direction, execution, and technical quality.
            </p>
          </motion.div>

          <motion.nav
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            aria-label="Committee sub menu"
            className="mx-auto mt-8 max-w-5xl"
          >
            <div className="flex flex-wrap items-center justify-center gap-3 rounded-2xl border border-border bg-card/40 p-3">
              {committeeSections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="rounded-xl border border-primary/20 bg-background/70 px-5 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
                >
                  {section.label}
                </a>
              ))}
            </div>
          </motion.nav>
        </div>
      </section>

      <section className="pb-24 lg:pb-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-6">
            {committeeSections.map((section, index) => (
              <motion.section
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="scroll-mt-28 overflow-hidden rounded-3xl border border-border bg-card/55"
              >
                <div className="grid gap-8 p-8 lg:grid-cols-[1.2fr_0.8fr] lg:p-10">
                  <div>
                    <div className="mb-4 flex items-center gap-3 text-sm font-medium text-primary">
                      <Users className="h-4 w-4" />
                      <span>{section.eyebrow}</span>
                    </div>
                    <h2 className="mb-4 text-3xl font-bold font-display text-foreground">
                      {section.label}
                    </h2>
                    <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                      {section.description}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-primary/15 bg-primary/5 p-6">
                    <div className="mb-4 flex items-center justify-between gap-3">
                      <h3 className="text-lg font-semibold text-foreground">Key Focus Areas</h3>
                      <ArrowUpRight className="h-5 w-5 text-primary" />
                    </div>
                    <ul className="space-y-3">
                      {section.focusAreas.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground md:text-base">
                          <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 rounded-2xl border border-dashed border-border bg-background/80 p-4 text-sm text-muted-foreground">
                      Member names and detailed roles can be added here as they are finalized.
                    </div>
                  </div>
                </div>
              </motion.section>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}