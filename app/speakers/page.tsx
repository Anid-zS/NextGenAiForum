import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="pt-32 pb-12 lg:pt-40">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
          <p className="text-sm font-medium text-primary mb-4">NextGenAIForum 2027</p>
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">Speakers</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">The forum brings together perspectives on Generative AI, agentic systems, 6G orchestration, and AI standards.</p>
        </div>
      </section>
      <section className="pb-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl space-y-6">
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <h2 className="text-2xl font-semibold font-display mb-3">Speaker lineup</h2>
            <p className="text-muted-foreground mb-6">The speaker lineup has not yet been published. Explore the program for session themes, or contact the organizing team about speaking opportunities.</p>
            <div className="flex flex-wrap gap-3">
              <Button asChild><Link href="/program">Explore the program</Link></Button>
              <Button asChild variant="outline"><Link href="/contact">Speaking inquiries</Link></Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
