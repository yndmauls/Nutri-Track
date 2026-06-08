"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Scan, Beef, Wheat, Droplet, Flame } from "lucide-react"

const macro = [
  { icon: Flame, label: "Kalori", value: "540 kkal", pos: "left-4 top-4" },
  { icon: Beef, label: "Protein", value: "38 g", pos: "right-4 top-16" },
  { icon: Wheat, label: "Karbo", value: "45 g", pos: "left-6 bottom-20" },
  { icon: Droplet, label: "Lemak", value: "18 g", pos: "right-6 bottom-6" },
]

export function MagicScanner() {
  return (
    <section id="scanner" className="relative overflow-hidden px-6 py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
        {/* text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
            <Scan className="h-3.5 w-3.5" />
            Magic Scanner
          </span>
          <h2 className="mt-5 text-balance font-heading text-4xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-6xl">
            Satu Jepretan. Semua Data Kelihatan.
          </h2>
          <p className="mt-5 max-w-md text-pretty text-base leading-relaxed text-white/60">
            Males masukin data manual? Pake Artificial Intelligence Scanner kita. Cukup arahin kamera
            ke piring , dan biarin Artificial Intelligence yang ngitung kalori plus makro-nya
            otomatis.
          </p>

          <ul className="mt-8 space-y-4">
            {[
              "Deteksi porsi & bahan makanan otomatis",
              "Breakdown makro: protein, karbo, lemak",
              "Di peruntukan khusus scan makanan anda",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-white/80">
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary/20 text-primary">
                  <Scan className="h-3.5 w-3.5" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* visual */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="relative aspect-square overflow-hidden rounded-3xl border border-white/15 bg-white/5">
            <Image
              src="/ludo-poire-6yz447bBNwA-unsplash.jpg"
              alt="Mangkuk nasi ayam yang sedang di-scan oleh Artificial Intelligence"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 400px"
            />

            {/* scanning line */}
            <motion.div
              initial={{ top: "0%" }}
              whileInView={{ top: ["0%", "100%", "0%"] }}
              viewport={{ once: false }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="absolute inset-x-0 h-16 bg-gradient-to-b from-transparent via-primary/40 to-transparent"
            >
              <div className="absolute bottom-0 inset-x-0 h-0.5 bg-primary shadow-[0_0_20px_4px_var(--primary)]" />
            </motion.div>

            {/* corner brackets */}
            <div className="absolute left-4 top-4 h-8 w-8 rounded-tl-lg border-l-2 border-t-2 border-primary/70" />
            <div className="absolute right-4 top-4 h-8 w-8 rounded-tr-lg border-r-2 border-t-2 border-primary/70" />
            <div className="absolute bottom-4 left-4 h-8 w-8 rounded-bl-lg border-b-2 border-l-2 border-primary/70" />
            <div className="absolute bottom-4 right-4 h-8 w-8 rounded-br-lg border-b-2 border-r-2 border-primary/70" />

            {/* macro badges */}
            {macro.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + i * 0.25, type: "spring", stiffness: 200 }}
                className={`absolute ${m.pos} flex items-center gap-2 rounded-xl border border-white/15 bg-background/80 px-3 py-2 backdrop-blur-md`}
              >
                <m.icon className="h-4 w-4 text-primary" />
                <div className="text-left leading-tight">
                  <p className="text-[10px] text-white/50">{m.label}</p>
                  <p className="text-xs font-bold text-white">{m.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
