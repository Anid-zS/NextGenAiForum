"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { NeuralNetworkBg } from "@/components/neural-network-bg"
import { Calendar, ArrowRight, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const newsItems = [
  {
    date: "Coming Soon",
    title: "Speaker Announcements",
    excerpt:
      "We will be announcing our keynote speakers and panelists soon. Stay tuned for updates on the world-leading experts joining us at NextGenAIForum 2027.",
    category: "Speakers",
  },
  {
    date: "Coming Soon",
    title: "Call for Papers Now Open",
    excerpt:
      "Submit your research to NextGenAIForum 2027. We are accepting papers across all tracks including Generative AI, Agentic Systems, AI Infrastructure, and more.",
    category: "Submissions",
  },
  {
    date: "Coming Soon",
    title: "Early Bird Registration",
    excerpt:
      "Early bird registration will open soon with special discounted rates for early registrants. Sign up for our newsletter to be notified.",
    category: "Registration",
  },
  {
    date: "Coming Soon",
    title: "Industry Partnership Program",
    excerpt:
      "Our industry engagement program is designed to connect enterprises with cutting-edge AI research. Partnership opportunities will be announced soon.",
    category: "Partners",
  },
  {
    date: "Coming Soon",
    title: "Venue Announcement",
    excerpt:
      "We will be announcing the specific venue details for NextGenAIForum 2027 in Bangalore, India. Stay tuned for more information.",
    category: "Venue",
  },
  {
    date: "Coming Soon",
    title: "Workshop Schedule",
    excerpt:
      "Hands-on workshops on 6G Network Intelligence, Responsible AI Development, and more will be part of the conference program.",
    category: "Program",
  },
]

export default function NewsPage() {
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
              Stay Updated
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6">
              News &{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Updates
              </span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Latest announcements, updates, and news about NextGenAIForum 2027.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 text-center">
              <Bell className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-display font-bold text-foreground mb-2">
                Get Notified
              </h3>
              <p className="text-muted-foreground mb-6">
                Be the first to know about speaker announcements, registration 
                openings, and important updates.
              </p>
              <Link href="/contact">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Subscribe to Updates
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* News Grid */}
      <section className="pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsItems.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {item.excerpt}
                </p>
                <div className="flex items-center text-xs text-muted-foreground">
                  <Calendar className="w-3.5 h-3.5 mr-1.5" />
                  {item.date}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
