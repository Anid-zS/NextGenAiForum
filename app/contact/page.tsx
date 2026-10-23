"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Mail } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
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
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6">
              Contact{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Us
              </span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              For all inquiries about NextGenAIForum 2027, please use the email
              address below.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-xl rounded-2xl border border-border bg-card p-8 text-center"
          >
            <Mail className="mx-auto mb-4 h-8 w-8 text-primary" aria-hidden="true" />
            <h2 className="mb-3 text-2xl font-display font-bold text-foreground">
              Email Us
            </h2>
            <a
              href="mailto:navinkumar@ieee.org"
              className="text-lg font-medium text-primary hover:underline"
            >
              navinkumar@ieee.org
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
