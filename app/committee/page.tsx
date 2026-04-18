"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { NeuralNetworkBg } from "@/components/neural-network-bg"
import { ArrowUpRight, Users } from "lucide-react"

const coreCommitteeMembers = [
  {
    name: "Navin Kumar, PhD",
    designation: "Professor and Chairman, ECE Dept.\nAmrita School of Engineering Bangalore",
    image: "/site-images/Core-Committee/Navin Kumar.jpeg",
    linkedin: "https://www.linkedin.com/in/navinkumar21india/",
  },
  {
    name: "Madhan Raj Kanagarathinam",
    designation: "Architect, Samsung Electronics",
    image: "/site-images/Core-Committee/madhan-kanagarathinam.jpeg",
    linkedin: "https://www.linkedin.com/in/madhanrajk/",
  },
  {
    name: "Dr. Sunil Kumar Vuppala",
    designation: "AI Partner, ArisGlobal",
    image: "/site-images/Core-Committee/Sunil Vuppala.png",
    linkedin: "https://www.linkedin.com/in/sunilvuppala/",
  },
  {
    name: "Sudhir Kumar Patnaik, PhD",
    designation: "Professor and Centre Director-CIR (Bangalore)\nAmrita Vishwa Vidyapeetham",
    image: "/site-images/Core-Committee/Sudhir-Patnaik.jpeg",
    linkedin: "https://www.linkedin.com/in/sudhirpatnaik/",
  },
  {
    name: "Muzammil Pasha",
    designation: "Secretary, IEEE Bangalore Young Professionals",
    image: "/site-images/Core-Committee/Muzammil-Pasa.jpeg",
    linkedin: "https://www.linkedin.com/in/muzammil-pasha28/",
  },
]

const committeeSections = [
  {
    id: "core-committee",
    label: "Core Committee",
    eyebrow: "Foundational Team",
    description:
      "The Core Committee anchors the execution of NextGenAIForum by driving planning cadence, cross-team coordination, and delivery readiness across all conference workstreams.",
    focusAreas: [
      "Coordinating weekly execution across program, logistics, outreach, and partnerships.",
      "Tracking milestones, dependencies, and readiness for conference delivery.",
      "Ensuring alignment between leadership decisions and implementation teams.",
    ],
  },
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
                    {section.id !== "core-committee" && (
                      <div className="mt-6 rounded-2xl border border-dashed border-border bg-background/80 p-4 text-sm text-muted-foreground">
                        Member names and detailed roles can be added here as they are finalized.
                      </div>
                    )}
                  </div>

                  {section.id === "core-committee" && (
                    <div className="lg:col-span-2">
                      <div className="mt-2 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {coreCommitteeMembers.map((member, memberIndex) => (
                          <motion.article
                            key={member.name}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: memberIndex * 0.06 }}
                            className="overflow-hidden rounded-2xl border border-border bg-background/85"
                          >
                            <div className="relative aspect-square">
                              <Image
                                src={member.image}
                                alt={member.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="p-5">
                              <div className="flex flex-col items-center text-center">
                                <h3 className="text-lg font-semibold font-display text-foreground">
                                  {member.name}
                                </h3>
                                <div className="mt-1 w-full rounded-lg bg-primary/5 border border-primary/10 px-3 py-2 text-sm text-muted-foreground font-medium whitespace-pre-line">
                                  {member.designation}
                                </div>
                              </div>
                              <a
                                href={member.linkedin}
                                target="_blank"
                                rel="noreferrer"
                                className="mt-4 inline-flex items-center gap-2 rounded-lg border border-primary/25 bg-primary/10 px-3 py-2 text-sm font-medium text-primary transition-colors hover:border-primary/40 hover:bg-primary/15"
                              >
                                <span className="inline-flex h-5 w-5 items-center justify-center rounded-sm bg-primary/15 text-[10px] font-bold uppercase">
                                  in
                                </span>
                                <span>LinkedIn</span>
                              </a>
                            </div>
                          </motion.article>
                        ))}
                      </div>
                    </div>
                  )}
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