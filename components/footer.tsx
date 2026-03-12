import Link from "next/link"
import { Twitter, Linkedin, Youtube, Mail } from "lucide-react"

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

const socialLinks = [
  { href: "#", icon: Twitter, label: "Twitter" },
  { href: "#", icon: Linkedin, label: "LinkedIn" },
  { href: "#", icon: Youtube, label: "YouTube" },
  { href: "mailto:info@nextgenaiforum.org", icon: Mail, label: "Email" },
]

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
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
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
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
