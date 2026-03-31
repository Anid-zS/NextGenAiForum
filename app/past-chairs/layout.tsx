import type { Metadata } from "next"
import { buildMetadata, MetadataLayout } from "@/lib/metadata"

export const metadata: Metadata = buildMetadata({
  title: "Past Chairs | NextGenAIForum 2027",
  description:
    "Past Chairs who significantly contributed to the growth of SENSORS Bangalore.",
  path: "/past-chairs",
  keywords: ["past chairs", "committee", "conference leadership", "SENSORS Bangalore"],
})

export default MetadataLayout
