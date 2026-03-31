"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { NeuralNetworkBg } from "@/components/neural-network-bg"
import { Link2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface ExComMember {
  name: string
  role: string
  affiliation: string
  image?: string
  linkedin?: string
}

const excomMembers: ExComMember[] = [
  {
    name: "Dr. Navin Kumar",
    role: "Chair",
    affiliation: "Professor, Amrita School of Engineering",
    image: "/site-images/ExCom_2026/Dr. Navin Kumar.jpeg",
  },
  {
    name: "Dr. Himani Saini",
    role: "Vice Chair",
    affiliation: "ISRO Satellite Centre",
    image: "/site-images/ExCom_2026/Dr. Himani Saini.jpeg",
    linkedin: "https://www.linkedin.com/in/dr-himani-saini-b4950614/",
  },
]

const teamMembers: ExComMember[] = [
  {
    name: "Dr. Nagamani K",
    role: "Treasurer",
    affiliation: "RVCE",
    image: "/site-images/ExCom_2026/Dr. Nagamani K.jpeg",
  },
  {
    name: "Dr. Karthik P",
    role: "Secretary",
    affiliation: "Cambridge Institute of Technology",
    image: "/site-images/ExCom_2026/Dr. Karthik P.jpeg",
  },
  {
    name: "Ms. Ambika",
    role: "Lead, Technical Activities",
    affiliation: "Technical Activities",
    image: "/site-images/ExCom_2026/Ms. Ambika.jpeg",
  },
  {
    name: "Dr. Javed G S",
    role: "Lead, Membership Activities",
    affiliation: "Membership Activities",
    image: "/site-images/ExCom_2026/Dr. Javed G S.jpeg",
  },
  {
    name: "Dr. Dilip R",
    role: "Joint Secretary",
    affiliation: "SJB Institute of Technology, Bengaluru",
    image: "/site-images/ExCom_2026/Dr. Dilip R.jpeg",
  },
  {
    name: "Dr. Basavaraj Patil",
    role: "Joint Treasurer",
    affiliation: "RV University, Bengaluru",
    image: "/site-images/ExCom_2026/Dr. Basavaraj Patil.jpeg",
  },
  {
    name: "Dr. Abhishek Appaji",
    role: "Joint Treasurer",
    affiliation: "RV University, Bengaluru",
    image: "/site-images/ExCom_2026/Dr. Abhishek Appaji.jpeg",
  },
  {
    name: "Dr. Parimala P",
    role: "ExCom Member",
    affiliation: "Ramaiah Institute of Technology, Bengaluru",
    image: "/site-images/ExCom_2026/Dr. Parimala P.jpeg",
  },
  {
    name: "Dr. Ibrar Jahan M A",
    role: "ExCom Member",
    affiliation: "RNS Institute of Technology, Bengaluru",
    image: "/site-images/ExCom_2026/Dr. Ibrar Jahan M A.jpeg",
  },
  {
    name: "Dr. Ravishankar Holla",
    role: "ExCom Member",
    affiliation: "RV College of Engineering, Bengaluru",
    image: "/site-images/ExCom_2026/Dr. Ravishankar Holla.jpeg",
  },
  {
    name: "Dr. Sheshaprasad N",
    role: "ExCom Member",
    affiliation: "BNMIT, Bengaluru",
    image: "/site-images/ExCom_2026/Dr. Sheshaprasad N.jpeg",
  },
  {
    name: "Dr. Madhu B M",
    role: "ExCom Member",
    affiliation: "Siddaganga Institute of Technology, Tumakuru",
    image: "/site-images/ExCom_2026/Dr. Madhu B M.jpeg",
  },
  {
    name: "Dr Keerthi D S",
    role: "ExCom Member",
    affiliation: "Malnad College of Engineering, Hassan",
    image: "/site-images/ExCom_2026/Dr Keerthi D S.jpeg",
  },
  {
    name: "Mrs. Shubha Kumari K",
    role: "ExCom Member",
    affiliation: "Larsen & Toubro Precision Engineering",
    image: "/site-images/ExCom_2026/Mrs. Shubha Kumari K.jpeg",
  },
  {
    name: "Mr. Sundaresan",
    role: "ExCom Member",
    affiliation: "Poovalingam Infosys",
    image: "/site-images/ExCom_2026/Mr. Sundaresan.jpeg",
  },
  {
    name: "Santhosh Kumar D R Univ",
    role: "ExCom Member",
    affiliation: "BDT College of Engineering",
    image: "/site-images/ExCom_2026/Santhosh Kumar D R Univ.jpeg",
  },
  {
    name: "Dr. Sankar Prasad Bag",
    role: "ExCom Member",
    affiliation: "REVA University, Bengaluru",
    image: "/site-images/ExCom_2026/Dr. Sankar Prasad Bag.jpeg",
  },
  {
    name: "Dr. R Venkatesha",
    role: "ExCom Member",
    affiliation: "Prasad TuDelft",
    image: "/site-images/ExCom_2026/Dr. R Venkatesha.jpeg",
  },
  {
    name: "Dr. Jawed Qumar",
    role: "ExCom Member",
    affiliation: "DRDO, BANGALORE",
    image: "/site-images/ExCom_2026/Dr. Jawed Qumar.jpeg",
  },
  {
    name: "Mr. Kaushik Nanda",
    role: "ExCom Member",
    affiliation: "C-DAC Bangalore",
    image: "/site-images/ExCom_2026/Mr. Kaushik Nanda.jpeg",
  },
  {
    name: "Dr. Preeta Saran",
    role: "ExCom Member",
    affiliation: "The Oxford College of Engineering",
    image: "/site-images/ExCom_2026/Dr. Preeta Saran.jpeg",
  },
  {
    name: "Dr Soma Pandey",
    role: "ExCom Member",
    affiliation: "Reliance Jio",
    image: "/site-images/ExCom_2026/Dr Soma Pandey.jpeg",
  },
  {
    name: "Dr. Venugopal N",
    role: "ExCom Member",
    affiliation: "PES University, Bengaluru",
    image: "/site-images/ExCom_2026/Dr. Venugopal N.jpeg",
  },
  {
    name: "Dr. Madhusudhan Nadgir",
    role: "ExCom Member",
    affiliation: "Nadgir Polytechnic, Bengaluru",
    image: "/site-images/ExCom_2026/Dr. Madhusudhan Nadgir.jpeg",
  },
  {
    name: "Dr. Rajesh N",
    role: "ExCom Member",
    affiliation: "Nitte Meenakshi Institute of Technology",
    image: "/site-images/ExCom_2026/Dr. Rajesh N.jpeg",
  },
  {
    name: "Dr. S G Shivaprasad Yadav",
    role: "ExCom Member",
    affiliation: "MSRIT",
  },
  {
    name: "Dr. Shashidhar R",
    role: "ExCom Member",
    affiliation: "JSS Science and Technology University",
    image: "/site-images/ExCom_2026/Dr. Shashidhar R.jpeg",
  },
]

export default function ExComPage() {
  return (
    <main className="min-h-screen">
      <NeuralNetworkBg />
      <Navigation />

      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-5xl text-center mb-16"
          >
            <span className="mb-6 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              ExCom 2026
            </span>
            <h1 className="mb-6 text-4xl font-bold font-display md:text-5xl lg:text-6xl">
              Executive{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Committee
              </span>
            </h1>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground">
              Meet the leaders and innovators driving NextGenAIForum 2026. Our Executive Committee comprises distinguished academics, industry leaders, and visionary experts dedicated to advancing AI and agentic systems.
            </p>
          </motion.div>

          {/* Chair & Vice Chair */}
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="grid grid-cols-2 gap-8 max-w-2xl mx-auto"
            >
              {excomMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                  className="group relative rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-6 hover:border-primary/50 hover:bg-card/80 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative space-y-4">
                    {member.image ? (
                      <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-2 border-primary/20 group-hover:border-primary/50 transition-colors">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-32 h-32 mx-auto rounded-full border-2 border-dashed border-primary/35 bg-primary/10" />
                    )}
                    
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                      <p className="text-sm font-semibold text-primary mb-2">{member.role}</p>
                      <p className="text-sm text-muted-foreground">{member.affiliation}</p>
                    </div>

                    {member.linkedin && (
                      <div className="flex justify-center pt-2">
                        <Link
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-primary/30 bg-primary/10 hover:bg-primary/20 text-primary transition-all"
                        >
                          <Link2 className="w-4 h-4" />
                          <span className="text-xs font-medium">LinkedIn</span>
                        </Link>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Team Members Grid */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl font-bold text-center mb-12 text-foreground"
            >
              Committee Members
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + (index * 0.05) }}
                  className="group relative rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-6 hover:border-primary/50 hover:bg-card/80 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative space-y-4">
                    {member.image ? (
                      <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-primary/20 group-hover:border-primary/50 transition-colors">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-24 h-24 mx-auto rounded-full border-2 border-dashed border-primary/35 bg-primary/10" />
                    )}
                    
                    <div className="text-center">
                      <h3 className="text-sm font-bold text-foreground leading-tight">{member.name}</h3>
                      <p className="text-xs font-semibold text-primary mt-1">{member.role}</p>
                      <p className="text-xs text-muted-foreground mt-2">{member.affiliation}</p>
                    </div>

                    {member.linkedin && (
                      <div className="flex justify-center pt-2">
                        <Link
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center w-8 h-8 rounded-lg border border-primary/30 bg-primary/10 hover:bg-primary/20 text-primary transition-all"
                        >
                          <Link2 className="w-4 h-4" />
                        </Link>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
