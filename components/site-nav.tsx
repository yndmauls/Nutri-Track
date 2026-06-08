"use client"

import { motion } from "framer-motion"
import { Leaf } from "lucide-react"

export function SiteNav() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-4 z-50 mx-auto flex w-[92%] max-w-5xl items-center justify-between rounded-full border border-white/10 bg-background/60 px-5 py-3 backdrop-blur-xl"
    >
      <a href="#hero" className="flex items-center gap-2">
        <span className="grid h-8 w-8 place-items-center rounded-full bg-primary text-primary-foreground">
          <Leaf className="h-4 w-4" />
        </span>
        <span className="font-heading text-lg font-extrabold tracking-tight text-white">
          Nutri<span className="text-primary">Track</span>
        </span>
      </a>

      <nav className="hidden items-center gap-7 text-sm text-white/60 md:flex">
        <a href="#scanner" className="transition-colors hover:text-white">
          Artificial Intelligence Scanner
        </a>
        <a href="#fitur" className="transition-colors hover:text-white">
          Fitur
        </a>
        <a href="#download" className="transition-colors hover:text-white">
          Download
        </a>
      </nav>

      <a
        href="#download"
        className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
      >
        Mulai
      </a>
    </motion.header>
  )
}
