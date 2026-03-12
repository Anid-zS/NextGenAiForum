"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { NeuralNetworkBg } from "@/components/neural-network-bg"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Award,
  Users,
  Globe,
  Megaphone,
  ArrowRight,
  Building2,
  GraduationCap,
  Landmark,
  Check,
} from "lucide-react"

const sponsorshipTiers = [
  {
    name: "Platinum",
    color: "from-cyan-400 to-blue-500",
    benefits: [
      "Premium logo placement on all materials",
      "Keynote speaking opportunity",
      "Exhibition booth (largest size)",
      "10 conference passes",
      "Private meeting room",
      "VIP dinner table",
      "Brand placement in all marketing",
      "Post-event attendee list",
    ],
  },
  {
    name: "Gold",
    color: "from-yellow-400 to-amber-500",
    benefits: [
      "Logo on conference materials",
      "Panel speaking opportunity",
      "Exhibition booth (large)",
      "6 conference passes",
      "Networking session access",
      "Brand mention in communications",
      "Logo on event signage",
    ],
  },
  {
    name: "Silver",
    color: "from-gray-300 to-gray-500",
    benefits: [
      "Logo on website and materials",
      "Exhibition booth (standard)",
      "4 conference passes",
      "Networking events access",
      "Logo on select signage",
      "Social media mention",
    ],
  },
]

const partnerCategories = [
  {
    icon: Building2,
    title: "Industry Partners",
    description:
      "Technology companies, enterprises, and organizations supporting AI innovation.",
    placeholders: ["Partner logos will be displayed here"],
  },
  {
    icon: GraduationCap,
    title: "Academic Partners",
    description:
      "Universities, research institutions, and academic organizations.",
    placeholders: ["Academic partner logos will be displayed here"],
  },
  {
    icon: Landmark,
    title: "Government Partners",
    description:
      "Government agencies, PSUs, and regulatory bodies supporting AI development.",
    placeholders: ["Government partner logos will be displayed here"],
  },
]

const sponsorshipBenefits = [
  {
    icon: Megaphone,
    title: "Brand Visibility",
    description: "Reach thousands of AI professionals, researchers, and decision-makers.",
  },
  {
    icon: Users,
    title: "Networking Access",
    description: "Connect with industry leaders, academics, and government officials.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Position your brand in front of an international audience from 50+ countries.",
  },
  {
    icon: Award,
    title: "Thought Leadership",
    description: "Showcase your expertise through speaking opportunities and exhibitions.",
  },
]

export default function SponsorsPage() {
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
              Partner With Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6">
              Sponsors &{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Partners
              </span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Join the leading organizations shaping the future of AI. 
              Partner with NextGenAIForum 2027 to connect with a global 
              audience of researchers, industry leaders, and policymakers.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Become a Sponsor
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Sponsor */}
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
              Why{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Sponsor
              </span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Position your organization at the forefront of the AI revolution.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sponsorshipBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-card border border-border text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship Tiers */}
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
              Sponsorship{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Tiers
              </span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose the sponsorship level that aligns with your goals.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {sponsorshipTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 lg:p-8 rounded-2xl bg-card border border-border"
              >
                <div className="text-center mb-6">
                  <div
                    className={`inline-block px-6 py-2 rounded-full bg-gradient-to-r ${tier.color} mb-4`}
                  >
                    <span className="font-display font-bold text-white">
                      {tier.name}
                    </span>
                  </div>
                  <p className="text-2xl font-bold text-foreground">Contact for Pricing</p>
                </div>

                <ul className="space-y-3">
                  {tier.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <Link href="/contact">
                    <Button
                      variant="outline"
                      className="w-full border-primary/50 hover:bg-primary/10"
                    >
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Categories */}
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
              Our{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Partners
              </span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Partner announcements coming soon. Join leading organizations 
              supporting NextGenAIForum 2027.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {partnerCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-card border border-border text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">
                  {category.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  {category.description}
                </p>
                <div className="aspect-[3/1] rounded-lg bg-muted/50 border border-border flex items-center justify-center">
                  <p className="text-xs text-muted-foreground">
                    {category.placeholders[0]}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="p-8 lg:p-12 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                Ready to Partner?
              </h3>
              <p className="text-muted-foreground mb-6">
                Contact our sponsorship team to discuss partnership opportunities 
                and customize a package that meets your objectives.
              </p>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Get in Touch
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
