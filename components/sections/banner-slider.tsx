import { Brain, Network } from "lucide-react"
import Link from "next/link"

const highlights = [
  { icon: Brain, title: "Autonomous AI Systems", description: "Explore agentic systems that reason, plan, and execute complex tasks with minimal human intervention." },
  { icon: Network, title: "6G Orchestration", description: "Discover how next-generation networks enable real-time AI coordination across distributed systems." },
]

export function BannerSlider() {
  return (
    <section className="py-12 lg:py-16 bg-secondary/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-3">Conference Highlights</h2>
          <p className="text-muted-foreground">Explore two central themes of NextGenAIForum 2027.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {highlights.map((item) => (
            <article key={item.title} className="p-6 md:p-8 rounded-2xl bg-card border border-border">
              <item.icon className="w-8 h-8 text-primary mb-5" aria-hidden="true" />
              <h3 className="text-2xl font-display font-bold mb-3">{item.title}</h3>
              <p className="text-muted-foreground mb-5">{item.description}</p>
              <Link href="/call-for-papers" className="text-primary underline underline-offset-4">Explore research tracks</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
