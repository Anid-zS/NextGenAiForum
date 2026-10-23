"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  MapPin,
  Plane,
  Car,
  Train,
  Globe,
  Calendar,
  ArrowRight,
} from "lucide-react"

const travelInfo = [
  {
    icon: Plane,
    title: "By Air",
    description:
      "Kempegowda International Airport (BLR) is well-connected to major international destinations. The airport is approximately 35-40 km from the city center.",
  },
  {
    icon: Train,
    title: "By Rail",
    description:
      "Bangalore City Railway Station (SBC) and Bangalore Cantonment are major railway stations connecting to all parts of India.",
  },
  {
    icon: Car,
    title: "Local Transport",
    description:
      "Uber, Ola, and metro services are readily available. The Namma Metro connects major parts of the city.",
  },
]

export default function VenuePage() {
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
              Conference Location
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6">
              Venue:{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Bangalore, India
              </span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              India's Silicon Valley and a global hub for technology innovation. 
              Join us in one of Asia's most dynamic tech ecosystems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Venue Details */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold font-display mb-6">
                Conference{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Venue
                </span>
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">
                      Venue details will be announced soon
                    </p>
                    <p className="text-muted-foreground">
                      Bangalore, Karnataka, India
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">April 9 – 10, 2027</p>
                    <p className="text-muted-foreground">Two full days of sessions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Time Zone</p>
                    <p className="text-muted-foreground">IST (UTC+5:30)</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link href="/registration">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    Registration Info
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* About Bangalore */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold font-display mb-4">
              About{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Bangalore
              </span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Bangalore, officially Bengaluru, is India's premier technology hub 
              and home to thousands of tech companies, startups, and research 
              institutions. Known as the "Silicon Valley of India," it offers a 
              perfect setting for NextGenAIForum.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {travelInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-card border border-border"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                  {info.title}
                </h3>
                <p className="text-sm text-muted-foreground">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      <Footer />
    </main>
  )
}
