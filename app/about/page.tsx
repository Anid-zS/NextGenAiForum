"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { NeuralNetworkBg } from "@/components/neural-network-bg"

const aboutSubMenus = [{ id: "about", label: "About" }]

const objectivePoints = [
  "Attract top professionals and organizations leveraging AI/ML in diverse industries.",
  "Foster collaboration between academia, industry, and technology experts.",
  "Enable knowledge exchange on emerging AI-driven innovations and real-world deployments.",
  "Create networking and partnership opportunities for business growth and research advancement.",
  "Serve as a unified ecosystem for working professionals, domain experts, enterprises, startups, and aspiring learners in the AI landscape.",
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
                NextGenAiForum
              </span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A strategic bridge between AI research, industry application, and global regulatory standards.
            </p>
          </motion.div>

          <motion.nav
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            aria-label="About sub menu"
            className="max-w-4xl mx-auto mt-8"
          >
            <div className="flex flex-wrap items-center justify-center gap-3 rounded-2xl border border-border bg-card/40 p-3">
              {aboutSubMenus.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="rounded-xl border border-primary/30 bg-primary/10 px-5 py-2 text-sm font-medium text-primary"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.nav>
        </div>
      </section>

      {/* About Content */}
      <section id="about" className="py-16 lg:py-24 bg-card/30 scroll-mt-28">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto rounded-2xl border border-border bg-card/50 p-8 lg:p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-8 text-foreground">
              About NextGenAiForum
            </h2>

            <div className="space-y-5 text-muted-foreground leading-relaxed text-base md:text-lg">
              <p>
                The NextGenAIForum annual international conference is envisioned as a high-level strategic bridge between cutting-edge AI research, industrial application, and global regulatory standards. Its primary purpose is to move AI out of the "black box" and into mission-critical infrastructure such as telecommunication, health, defense, space and so on. The forum acts as a marketplace for problems and solutions. Through "Industry Engagement," Government organizations, PSUs, and private tech giants present real-world challenges to the academic community, fostering direct collaboration and technology transfer.
              </p>

              <p>
                Additionally, through various organizational units like Young Professionals (YP) and Women in Engineering (WiE) programs, the forum aims to mentor the next generation of leaders, ensuring a diverse and technically proficient workforce for the AI era.
              </p>

              <p>
                For the Indian landscape a core purpose is to showcase and accelerate indigenous R&amp;D, reducing reliance on imported intellectual property for strategic technologies.
              </p>
            </div>
          </motion.div>
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
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Objective</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto rounded-2xl border border-border bg-card/50 p-8 lg:p-12"
          >
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              To establish a premier and inclusive platform that brings together professionals, industry leaders, researchers, innovators, startups, and learners working across all domains of Artificial Intelligence and Machine Learning.
            </p>

            <p className="text-base md:text-lg text-foreground font-medium mb-4">
              The NextGenAIForum aims to:
            </p>

            <ul className="space-y-3">
              {objectivePoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-muted-foreground text-base md:text-lg">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
