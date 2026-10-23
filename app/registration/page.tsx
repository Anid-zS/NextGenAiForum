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
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">Conference Registration</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">Join NextGenAIForum in Bangalore, India, on April 9–10, 2027.</p>
        </div>
      </section>
      <section className="pb-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl space-y-6">
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <h2 className="text-2xl font-semibold font-display mb-3">Registration information</h2>
            <p className="text-muted-foreground mb-6">Online registration is not open yet. Pass prices and booking details have not been published. Contact the organizing team for individual, student, or group registration inquiries.</p>
            <Button asChild><a href="mailto:navinkumar@ieee.org?subject=NextGenAIForum%202027%20registration%20inquiry">Ask about registration</a></Button>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="text-xl font-semibold font-display mb-3">Conference dates</h2>
              <p className="text-muted-foreground">April 9–10, 2027 · Bangalore, India</p>
              <p className="text-muted-foreground mt-2">Sessions use India Standard Time (UTC+5:30).</p>
              <Link href="/venue" className="inline-block mt-4 text-primary underline underline-offset-4">Venue information</Link>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="text-xl font-semibold font-display mb-3">Presenting research?</h2>
              <p className="text-muted-foreground">Review the research tracks, submission guidelines, and author deadlines before submitting your paper.</p>
              <Link href="/call-for-papers" className="inline-block mt-4 text-primary underline underline-offset-4">Call for papers</Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
