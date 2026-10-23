import Link from "next/link"
import { Mail } from "lucide-react"

const footerLinks = {
  conference: [
    { href: "/about", label: "About" },
    { href: "/program", label: "Program" },
    { href: "/speakers", label: "Speakers" },
    { href: "/venue", label: "Venue" },
  ],
  participate: [
    { href: "/registration", label: "Registration" },
    { href: "/call-for-papers", label: "Call for Papers" },
    { href: "/industry", label: "Industry Engagement" },
    { href: "/sponsors", label: "Become a Sponsor" },
  ],
  community: [
    { href: "/community", label: "Young Professionals" },
    { href: "/community", label: "Women in Engineering" },
    { href: "/news", label: "News & Updates" },
    { href: "/contact", label: "Contact Us" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-card/50 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">AI</span>
              </div>
              <div>
                <span className="font-display text-lg font-bold tracking-tight text-foreground">
                  NextGenAI
                </span>
                <span className="font-display text-lg font-light text-primary">Forum</span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mb-6">
              The preeminent international conference converging Generative AI, 
              6G Orchestration, and Global Technology Policy. 
              Defining the Agentic Network & Strategic AI Autonomy.
            </p>
            <a
              href="mailto:navinkumar@ieee.org"
              className="inline-flex min-h-10 items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              navinkumar@ieee.org
            </a>
          </div>

          {/* Conference Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Conference</h4>
            <ul className="space-y-3">
              {footerLinks.conference.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Participate Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Participate</h4>
            <ul className="space-y-3">
              {footerLinks.participate.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Community</h4>
            <ul className="space-y-3">
              {footerLinks.community.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2027 NextGenAIForum. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://www.teyzsec.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Powered by TeyzSec
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
