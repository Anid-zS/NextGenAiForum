const facts = [
  { label: "Conference dates", value: "April 9–10", detail: "2027" },
  { label: "Research tracks", value: "6", detail: "Across AI research and applications" },
  { label: "Conference duration", value: "2 days", detail: "Research, industry, and policy" },
  { label: "Host city", value: "Bangalore", detail: "India" },
]

export function StatsSection() {
  return (
    <section className="py-12 lg:py-16 bg-secondary/30" aria-label="Conference at a glance">
      <div className="container mx-auto px-4 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {facts.map((fact) => (
          <div key={fact.label} className="text-center">
            <p className="text-sm text-muted-foreground mb-2">{fact.label}</p>
            <p className="text-3xl font-bold font-display text-primary mb-2">{fact.value}</p>
            <p className="text-sm text-muted-foreground">{fact.detail}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
