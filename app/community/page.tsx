"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { NeuralNetworkBg } from "@/components/neural-network-bg"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  GraduationCap,
  Users,
  Heart,
  Award,
  Lightbulb,
  MessageCircle,
  ArrowRight,
  Star,
} from "lucide-react"

const ypBenefits = [
  {
    icon: GraduationCap,
    title: "Mentorship Programs",
    description:
      "Connect with experienced professionals and researchers for career guidance and technical mentorship.",
  },
  {
    icon: Users,
    title: "Networking Events",
    description:
      "Exclusive networking sessions designed for early-career professionals to build meaningful connections.",
  },
  {
    icon: Lightbulb,
    title: "Technical Workshops",
    description:
      "Hands-on workshops on cutting-edge AI technologies and research methodologies.",
  },
  {
    icon: Award,
    title: "Leadership Development",
    description:
      "Programs designed to develop technical leadership skills and professional growth.",
  },
]

const wieBenefits = [
  {
    icon: Star,
    title: "Recognition Programs",
    description:
      "Celebrating outstanding contributions of women in engineering and AI research.",
  },
  {
    icon: Users,
    title: "Community Building",
    description:
      "Building a supportive network of women engineers and researchers in AI.",
  },
  {
    icon: MessageCircle,
    title: "Panel Discussions",
    description:
      "Dedicated sessions featuring women leaders sharing their experiences and insights.",
  },
  {
    icon: Heart,
    title: "Inclusive Environment",
    description:
      "Creating opportunities for women to excel in technical leadership roles.",
  },
]

export default function CommunityPage() {
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
              Community Programs
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6">
              Young Professionals &{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Women in Engineering
              </span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Empowering the next generation of AI leaders through mentorship, 
              networking, and professional development opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Young Professionals */}
      <section className="py-16 lg:py-24 bg-card/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold font-display">
                  Young Professionals (YP)
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our Young Professionals initiative supports early-career engineers, 
                graduate researchers, and emerging AI innovators. The program is 
                designed to accelerate your career through structured mentorship, 
                networking opportunities, and technical development.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Whether you are a graduate student, a recent PhD, or an early-career 
                professional, our YP program provides the resources and connections 
                you need to thrive in the rapidly evolving field of artificial intelligence.
              </p>
              <Link href="/registration">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Join YP Program
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid sm:grid-cols-2 gap-4"
            >
              {ypBenefits.map((benefit, index) => (
                <div
                  key={benefit.title}
                  className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
                >
                  <benefit.icon className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Women in Engineering */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:order-2"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold font-display">
                  Women in Engineering (WiE)
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our Women in Engineering initiative is dedicated to promoting 
                inclusion, leadership development, and technical excellence within 
                the global engineering and AI community.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We celebrate the achievements of women in AI research and engineering, 
                while creating pathways for more women to enter and excel in technical 
                leadership roles. Through mentorship, networking, and recognition programs, 
                we are building a more inclusive future for AI.
              </p>
              <Link href="/registration">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Join WiE Program
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid sm:grid-cols-2 gap-4 lg:order-1"
            >
              {wieBenefits.map((benefit, index) => (
                <div
                  key={benefit.title}
                  className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
                >
                  <benefit.icon className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Conference Session */}
      <section className="py-16 lg:py-24 bg-card/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold font-display mb-6">
              Dedicated Conference{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Sessions
              </span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              NextGenAIForum 2027 includes dedicated sessions for Young Professionals 
              and Women in Engineering, featuring mentorship opportunities, networking 
              events, and career development workshops.
            </p>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
              <h3 className="text-xl font-display font-bold text-foreground mb-4">
                YP & WiE Session
              </h3>
              <p className="text-muted-foreground mb-2">
                <strong className="text-foreground">Day 2:</strong> April 10, 2027 | 14:00 - 15:30
              </p>
              <p className="text-muted-foreground">
                Join us for an inspiring session featuring mentorship, networking, 
                and career development discussions with leaders in AI.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
