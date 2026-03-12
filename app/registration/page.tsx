"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { NeuralNetworkBg } from "@/components/neural-network-bg"
import { Button } from "@/components/ui/button"
import {
  Check,
  Calendar,
  MapPin,
  Users,
  GraduationCap,
  Building2,
  Sparkles,
} from "lucide-react"

const registrationTiers = [
  {
    name: "Student Pass",
    price: "Coming Soon",
    icon: GraduationCap,
    description: "For full-time students with valid ID",
    features: [
      "Access to all keynote sessions",
      "Access to research presentations",
      "Conference materials",
      "Networking events",
      "Coffee breaks & lunch",
      "Certificate of participation",
    ],
    highlight: false,
  },
  {
    name: "Professional Pass",
    price: "Coming Soon",
    icon: Users,
    description: "For researchers and professionals",
    features: [
      "Full conference access",
      "All keynotes and panels",
      "All workshops",
      "Networking dinner",
      "Conference materials",
      "Priority seating",
      "Certificate of participation",
    ],
    highlight: true,
  },
  {
    name: "Industry Pass",
    price: "Coming Soon",
    icon: Building2,
    description: "For enterprise and corporate attendees",
    features: [
      "VIP conference access",
      "All sessions and workshops",
      "Industry engagement sessions",
      "Private networking events",
      "Priority meeting scheduling",
      "Extended networking dinner",
      "Exclusive industry briefings",
    ],
    highlight: false,
  },
]

const importantDates = [
  { label: "Early Bird Registration", date: "Opens Soon" },
  { label: "Regular Registration", date: "Opens Soon" },
  { label: "Late Registration", date: "Opens Soon" },
  { label: "Conference Dates", date: "April 9-10, 2027" },
]

export default function RegistrationPage() {
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
              Join Us in Bangalore
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6">
              Conference{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Registration
              </span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Secure your place at NextGenAIForum 2027. Choose the pass that 
              best suits your needs and join us for two days of groundbreaking 
              AI content.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <div className="flex items-center gap-2 text-foreground">
                <Calendar className="w-5 h-5 text-primary" />
                <span>April 9 – 10, 2027</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-border" />
              <div className="flex items-center gap-2 text-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Bangalore, India</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Registration Tiers */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold font-display mb-4">
              Choose Your{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Pass
              </span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Registration opening soon. Sign up for notifications to be the 
              first to know when early bird pricing becomes available.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {registrationTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative p-6 lg:p-8 rounded-2xl border ${
                  tier.highlight
                    ? "bg-gradient-to-b from-primary/10 to-card border-primary/30"
                    : "bg-card border-border"
                }`}
              >
                {tier.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      Recommended
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <tier.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-foreground mb-1">
                    {tier.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {tier.description}
                  </p>
                  <div className="text-3xl font-bold text-primary">{tier.price}</div>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    tier.highlight
                      ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                      : "bg-muted hover:bg-muted/80 text-foreground"
                  }`}
                  disabled
                >
                  Coming Soon
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-bold font-display text-center mb-8">
              Important{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Dates
              </span>
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
                  <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
                  <p className="font-semibold text-foreground">{item.date}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Group Registration */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                Group Registration
              </h3>
              <p className="text-muted-foreground mb-6">
                Bringing a team? Contact us for special group rates for 
                organizations registering 5 or more attendees.
              </p>
              <Button
                variant="outline"
                className="border-primary/50 hover:bg-primary/10"
              >
                Contact for Group Rates
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
