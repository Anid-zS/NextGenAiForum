"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroBanner() {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background z-10" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-20 pt-24 pb-12">
        <div className="max-w-5xl mx-auto">
          {/* Conference Logo/Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-8"
          >
            <div className="relative w-full max-w-md h-48 lg:h-56">
              {/* Placeholder for logo - will be replaced with actual conference logo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="inline-flex items-center gap-3 mb-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-xl">
                      <span className="text-white font-bold text-2xl">NG</span>
                    </div>
                    <div className="text-left">
                      <h1 className="text-4xl lg:text-5xl font-bold font-display">
                        <span className="text-primary">NEXTGEN</span>
                      </h1>
                      <p className="text-2xl lg:text-3xl font-bold text-accent">AI FORUM</p>
                    </div>
                  </div>
                  <p className="text-lg font-semibold text-foreground/80 tracking-wide">
                    INTERNATIONAL CONFERENCE
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Conference Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-6"
          >
            <p className="text-xl md:text-2xl text-primary font-semibold mb-2">
              6th International Conference on
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-4">
              Artificial Intelligence and Machine Learning
            </h2>
            <p className="text-lg md:text-xl text-amber-600 font-medium">
              Theme: Shaping the Next Era of AI Innovation, Responsibility Real-World Impact
            </p>
          </motion.div>

          {/* Date & Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8"
          >
            <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/20">
              <Calendar className="w-5 h-5 text-primary" />
              <span className="text-foreground font-semibold">APRIL 9-10, 2027</span>
            </div>
            <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-accent/10 border border-accent/20">
              <MapPin className="w-5 h-5 text-accent" />
              <span className="text-foreground font-semibold">BANGALORE, INDIA</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link href="/registration">
              <Button
                size="lg"
                className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 shadow-lg hover:shadow-xl transition-all"
              >
                Download Brochure
              </Button>
            </Link>
            <Link href="/registration">
              <Button
                size="lg"
                className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 shadow-lg hover:shadow-xl transition-all"
              >
                Register Now
              </Button>
            </Link>
            <Link href="/call-for-papers">
              <Button
                size="lg"
                className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 shadow-lg hover:shadow-xl transition-all"
              >
                Submit Abstract
              </Button>
            </Link>
            <Link href="/venue">
              <Button
                size="lg"
                className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 shadow-lg hover:shadow-xl transition-all"
              >
                Venue
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 shadow-lg hover:shadow-xl transition-all"
              >
                Past Conferences
              </Button>
            </Link>
          </motion.div>

          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 p-6 rounded-2xl bg-card/80 backdrop-blur-sm border border-border shadow-xl"
          >
            <div className="grid grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary">228</div>
                <div className="text-sm text-muted-foreground mt-1">Days</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary">03</div>
                <div className="text-sm text-muted-foreground mt-1">Hours</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary">02</div>
                <div className="text-sm text-muted-foreground mt-1">Minutes</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary">46</div>
                <div className="text-sm text-muted-foreground mt-1">Second</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
