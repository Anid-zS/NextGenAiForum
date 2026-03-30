"use client"

import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight, Brain, Network } from "lucide-react"
import { Button } from "@/components/ui/button"

const slides = [
  {
    icon: Brain,
    title: "Autonomous AI Systems",
    description: "Explore the future of self-optimizing agentic systems that can reason, plan, and execute complex tasks with minimal human intervention.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Network,
    title: "6G Orchestration",
    description: "Discover how next-generation networks enable real-time AI coordination across distributed systems, powering tomorrow's infrastructure.",
    color: "from-purple-500 to-blue-500",
  },
]

export function BannerSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)
  }

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging) {
        nextSlide()
      }
    }, 5000)
    return () => clearInterval(interval)
  }, [isDragging])

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true)
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX
    setDragStart(clientX)
  }

  const handleDragEnd = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return
    setIsDragging(false)
    
    const clientX = "changedTouches" in e ? e.changedTouches[0].clientX : e.clientX
    const diff = dragStart - clientX
    
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide()
      } else {
        prevSlide()
      }
    }
  }

  return (
    <section className="py-12 lg:py-16 bg-gradient-to-b from-background to-secondary/20 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-3">
            Explore{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Conference Highlights
            </span>
          </h2>
          <p className="text-muted-foreground">
            Discover the key themes and focus areas of NextGenAI Forum 2027
          </p>
        </motion.div>

        {/* Slider Container */}
        <div 
          ref={containerRef}
          className="relative"
          onMouseDown={handleDragStart}
          onMouseUp={handleDragEnd}
          onMouseLeave={() => setIsDragging(false)}
          onTouchStart={handleDragStart}
          onTouchEnd={handleDragEnd}
        >
          {/* Slides */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{ cursor: isDragging ? "grabbing" : "grab" }}
            >
              {slides.map((slide, index) => (
                <motion.div
                  key={index}
                  className="min-w-full lg:min-w-[calc(50%-12px)] xl:min-w-[calc(33.333%-16px)]"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 h-full shadow-lg">
                    {/* Icon with gradient */}
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${slide.color} flex items-center justify-center mb-6 shadow-lg`}>
                      <slide.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                      {slide.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {slide.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Arrows - Hidden on mobile, shown on desktop */}
          <div className="hidden lg:block">
            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-background/90 backdrop-blur-sm border-border hover:bg-primary/10 hover:border-primary/30 shadow-lg"
              onClick={prevSlide}
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-background/90 backdrop-blur-sm border-border hover:bg-primary/10 hover:border-primary/30 shadow-lg"
              onClick={nextSlide}
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-8 bg-primary"
                  : "w-2 bg-border hover:bg-primary/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Mobile swipe hint */}
        <p className="text-center text-sm text-muted-foreground mt-6 lg:hidden">
          Swipe to explore more
        </p>
      </div>
    </section>
  )
}
