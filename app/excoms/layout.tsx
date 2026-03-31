import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ExCom 2026 | NextGenAIForum",
  description: "Meet the Executive Committee members driving NextGenAIForum 2026 - distinguished academics and industry leaders dedicated to advancing AI and agentic systems.",
}

export default function ExComLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
