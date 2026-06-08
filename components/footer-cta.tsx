"use client"

import { motion } from "framer-motion"
import { Apple, Play, Leaf } from "lucide-react"

export function FooterCta() {
  return (
    <section id="download" className="relative overflow-hidden px-6 py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[150px]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 mx-auto max-w-4xl text-center"
      >
        <h2 className="text-balance font-heading text-5xl font-extrabold leading-[0.95] tracking-tight text-white sm:text-7xl md:text-8xl">
          Udah Siap Bikin Badan Lebih{" "}
          <span className="text-primary">Fit?</span>
        </h2>
        <p className="mx-auto mt-6 max-w-md text-pretty text-base leading-relaxed text-white/60 sm:text-lg">
          Gabung sama ribuan orang yang udah ngubah cara mereka makan. Gratis,
          tinggal download.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#"
            className="group inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 font-semibold text-primary-foreground transition-transform hover:scale-105"
          >
            <Apple className="h-5 w-5" />
            <span className="text-left leading-none">
              <span className="block text-[10px] font-normal opacity-70">Download di</span>
              App Store
            </span>
          </a>
          <a
            href="#"
            className="group inline-flex items-center gap-3 rounded-full border border-white/15 px-7 py-4 font-semibold text-white transition-colors hover:bg-white/5"
          >
            <Play className="h-5 w-5" />
            <span className="text-left leading-none">
              <span className="block text-[10px] font-normal opacity-50">Download di</span>
              Google Play
            </span>
          </a>
        </div>
      </motion.div>

      <footer className="relative z-10 mx-auto mt-28 flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-primary text-primary-foreground">
            <Leaf className="h-3.5 w-3.5" />
          </span>
          <span className="font-heading text-base font-extrabold text-white">
            Nutri<span className="text-primary">Track</span>
          </span>
        </div>
        <p className="text-xs text-white/40">
          &copy; {new Date().getFullYear()} NutriTrack. Dibikin biar anda sehat.
        </p>
      </footer>
    </section>
  )
}
