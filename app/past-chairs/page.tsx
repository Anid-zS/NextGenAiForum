"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { NeuralNetworkBg } from "@/components/neural-network-bg"

type PastChair = {
  name: string
  role?: string
  affiliation: string
  years: string
  image?: string
}

const pastChairs: PastChair[] = [
  {
    name: "Late Dr. K. Natarajan",
    role: "Founding Chair",
    affiliation: "Prof, MSRIT",
    years: "(2014 - 2015)",
  },
  {
    name: "Dr. S. L. Pinjare",
    affiliation: "Prof NMIT",
    years: "(2017 - 2018)",
  },
  {
    name: "Dr. S. B. Bhanu Prashanth",
    affiliation: "BMSCE",
    years: "(2019 - 2020)",
  },
  {
    name: "Dr. Shobha K.R.",
    affiliation: "Prof MSRIT",
    years: "(2021 - 2022)",
    image: "/site-images/ExCom_2026/Dr. Shobha K R.jpeg",
  },
  {
    name: "Dr. Sumit Soman",
    affiliation: "Samsung (SRIB)",
    years: "(2022 - 2024)",
    image: "/site-images/ExCom_2026/Dr. Sumit Soman.jpeg",
  },
  {
    name: "Dr. K.P. Lakshmi",
    affiliation: "BMSCE",
    years: "2025",
    image: "/site-images/ExCom_2026/Dr. K.P. Lakshmi.jpeg",
  },
]

export default function PastChairsPage() {
  return (
    <main className="min-h-screen">
      <NeuralNetworkBg />
      <Navigation />

      <section className="pt-32 pb-20 lg:pt-40 lg:pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-5xl text-center mb-14"
          >
            <h1 className="mb-6 text-4xl font-bold font-display md:text-5xl lg:text-6xl">
              Past Chairs
            </h1>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground">
              Past Chair who significantly contributed to the growth of SENSORS Bangalore. They are always with us. We thank them for their leadership.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {pastChairs.map((chair, index) => (
              <motion.article
                key={chair.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 + index * 0.08 }}
                className="rounded-2xl border border-border bg-card/70 p-6 text-center shadow-sm"
              >
                <div className="mb-5 flex justify-center">
                  {chair.image ? (
                    <div className="relative h-32 w-32 overflow-hidden rounded-full border border-border bg-muted">
                      <Image src={chair.image} alt={chair.name} fill className="object-cover" />
                    </div>
                  ) : (
                    <div className="h-32 w-32 rounded-full border border-dashed border-border bg-muted/60" />
                  )}
                </div>

                <h2 className="text-2xl font-display font-bold text-foreground">{chair.name}</h2>
                {chair.role ? <p className="mt-1 text-lg text-muted-foreground">{chair.role}</p> : null}
                <p className="mt-1 text-lg text-muted-foreground">{chair.affiliation}</p>
                <p className="mt-1 text-lg text-muted-foreground">{chair.years}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
