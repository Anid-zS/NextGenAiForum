import { NeuralNetworkBg } from "@/components/neural-network-bg"
import { Navigation } from "@/components/navigation"
import { HeroBanner } from "@/components/hero-banner"
import { BannerSlider } from "@/components/sections/banner-slider"
import { AgenticNetworkDiagram } from "@/components/sections/agentic-network-diagram"
import { AgenticEraSection } from "@/components/sections/agentic-era"
import { StatsSection } from "@/components/sections/stats"
import { TracksSection } from "@/components/sections/tracks"
import { CTASection } from "@/components/sections/cta"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <NeuralNetworkBg />
      <Navigation />
      <HeroBanner />
      <AgenticNetworkDiagram />
      <BannerSlider />
      <AgenticEraSection />
      <StatsSection />
      <TracksSection />
      <CTASection />
      <Footer />
    </main>
  )
}
