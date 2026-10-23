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
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">Conference Updates</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">Find the event information and participation resources currently available.</p>
        </div>
      </section>
      <section className="pb-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl space-y-6">
          {[
            { title: "April 9–10, 2027 · Bangalore", description: "The forum focuses on Generative AI, standards, 6G orchestration, and strategic AI autonomy.", href: "/about", label: "About the conference" },
            { title: "Research submissions", description: "Explore six research tracks, paper requirements, important dates, and the conference submission portal.", href: "/call-for-papers", label: "View submission information" },
            { title: "Program overview", description: "Browse the proposed two-day schedule, technical sessions, workshops, and industry activities.", href: "/program", label: "Explore the program" },
            { title: "Partner with the forum", description: "Discuss sponsorship and collaboration opportunities with the organizing team.", href: "/sponsors", label: "Partnership opportunities" },
          ].map((item) => (
            <article key={item.href} className="rounded-2xl border border-border bg-card p-6 md:p-8">
              <h2 className="text-xl font-semibold font-display mb-3">{item.title}</h2>
              <p className="text-muted-foreground mb-4">{item.description}</p>
              <Link href={item.href} className="text-primary underline underline-offset-4">{item.label}</Link>
            </article>
          ))}
          <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-primary/5 p-6">
            <p className="text-muted-foreground">Need information that is not listed here?</p>
            <Button asChild variant="outline"><Link href="/contact">Contact the organizers</Link></Button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
