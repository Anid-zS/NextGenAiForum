"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  {
    label: "Committee",
    items: [
      { href: "/committee#steering-committee", label: "Steering Committee" },
      { href: "/committee#executive-chair", label: "Executive Chair" },
      { href: "/committee#general-co-chairs", label: "General Co-Chairs" },
      {
        href: "/committee#technical-program-committee",
        label: "Technical Program Committee",
      },
    ],
  },
  { href: "/program", label: "Program" },
  { href: "/speakers", label: "Speakers" },
  { href: "/call-for-papers", label: "Call for Papers" },
  {
    label: "More",
    items: [
      { href: "/industry", label: "Industry Engagement" },
      { href: "/community", label: "YP & WiE" },
      { href: "/venue", label: "Venue" },
      { href: "/sponsors", label: "Sponsors" },
      { href: "/news", label: "News" },
      { href: "/contact", label: "Contact" },
    ],
  },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-xl border-b border-border shadow-sm"
          : "bg-background/80 backdrop-blur-md border-b border-border/50"
      }`}
    >
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">AI</span>
              </div>
              <div className="absolute inset-0 w-10 h-10 rounded-lg bg-primary/30 blur-md group-hover:blur-lg transition-all" />
            </div>
            <div className="hidden sm:block">
              <span className="font-display text-lg font-bold tracking-tight text-foreground">
                NextGenAI
              </span>
              <span className="font-display text-lg font-light text-primary">Forum</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) =>
              "items" in item ? (
                <DropdownMenu key={item.label}>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="text-muted-foreground hover:text-foreground hover:bg-primary/10 gap-1"
                    >
                      {item.label}
                      <ChevronDown className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="end"
                    className="bg-card/95 backdrop-blur-xl border-border"
                  >
                    {item.items.map((subItem) => (
                      <DropdownMenuItem key={subItem.href} asChild>
                        <Link
                          href={subItem.href}
                          className="cursor-pointer hover:text-primary"
                        >
                          {subItem.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/registration">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium">
                Register Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border bg-background/95 backdrop-blur-xl">
            <div className="flex flex-col gap-2">
              {navItems.map((item) =>
                "items" in item ? (
                  <div key={item.label} className="space-y-1">
                    <span className="px-4 py-2 text-sm font-medium text-muted-foreground">
                      {item.label}
                    </span>
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className="block px-8 py-2 text-sm text-foreground hover:text-primary"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="px-4 py-2 text-sm text-foreground hover:text-primary"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              )}
              <div className="px-4 pt-4">
                <Link href="/registration" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Register Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
