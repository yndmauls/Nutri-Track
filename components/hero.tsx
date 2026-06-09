"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles, Flame } from "lucide-react"
import { PhoneMockup } from "./phone-mockup"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const, delay: i * 0.1 },
  }),
}

function FloatingBadge({
  className,
  delay,
  children,
}: {
  className: string
  delay: number
  children: React.ReactNode
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5 }}
      className={`absolute z-20 ${className}`}
    >
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay }}
        className="flex items-center gap-2 rounded-2xl border border-white/15 bg-background/70 px-4 py-3 backdrop-blur-xl"
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pb-20 pt-32"
    >
      {/* glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-primary/20 blur-[140px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_55%,var(--background))]" />

      <motion.span
        variants={fadeUp}
        custom={0}
        initial="hidden"
        animate="show"
        className="z-10 mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary"
      >
        <Sparkles className="h-3.5 w-3.5" />
        Track kalori dengan  kecerdasan Artificial Intelligence
      </motion.span>

      <motion.h1
        variants={fadeUp}
        custom={1}
        initial="hidden"
        animate="show"
        className="z-10 max-w-4xl text-balance text-center font-heading text-5xl font-extrabold leading-[0.95] tracking-tight text-white sm:text-7xl md:text-8xl"
      >
        Check Nutrisi.
        <br />
        Tinggal <span className="text-primary">foto</span> beres.
      </motion.h1>

      <motion.p
        variants={fadeUp}
        custom={2}
        initial="hidden"
        animate="show"
        className="z-10 mt-6 max-w-xl text-pretty text-center text-base leading-relaxed text-white/60 sm:text-lg"
      >
       Scan makanan, dapatkan nutrisi instan. Tanpa hitung manual
      </motion.p>

      <motion.div
        variants={fadeUp}
        custom={3}
        initial="hidden"
        animate="show"
        className="z-10 mt-8 flex flex-col items-center gap-3 sm:flex-row"
      >
        <a
          href="#download"
          className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground transition-transform hover:scale-105"
        >
          Mulai Sekarang
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
        <a
          href="#scanner"
          className="rounded-full border border-white/15 px-7 py-3.5 font-semibold text-white/80 transition-colors hover:bg-white/5"
        >
         Intip Nutri Track
        </a>
      </motion.div>

      {/* phone */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}
        className="relative z-10 mt-16"
      >
        <motion.div
          animate={{ y: [0, -16, 0] }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
         <PhoneMockup />
        </motion.div>

        <FloatingBadge className="-left-6 top-10 sm:-left-24" delay={0.8}>
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary/20 text-primary">
            <Flame className="h-4 w-4" />
          </span>
          <div className="text-left">
            <p className="text-xs text-white/50">Terdeteksi</p>
            <p className="text-sm font-semibold text-white">540 kkal</p>
          </div>
        </FloatingBadge>

        <FloatingBadge className="-right-4 bottom-16 sm:-right-20" delay={1.1}>
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary/20 text-primary">
            <Sparkles className="h-4 w-4" />
          </span>
          <div className="text-left">
            <p className="text-xs text-white/50">Akurasi </p>
            <p className="text-sm font-semibold text-white">98,5%</p>
          </div>
        </FloatingBadge>
      </motion.div>
    </section>
  )
}