"use client"

import { motion } from "framer-motion"
import { Flame, Camera, TrendingUp } from "lucide-react"

function Ring({
  value,
  label,
  color,
}: {
  value: number
  label: string
  color: string
}) {
  const r = 26
  const c = 2 * Math.PI * r
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="relative h-16 w-16">
        <svg viewBox="0 0 64 64" className="h-16 w-16 -rotate-90">
          <circle cx="32" cy="32" r={r} fill="none" stroke="white" strokeOpacity="0.1" strokeWidth="6" />
          <motion.circle
            cx="32"
            cy="32"
            r={r}
            fill="none"
            stroke={color}
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={c}
            initial={{ strokeDashoffset: c }}
            whileInView={{ strokeDashoffset: c - (c * value) / 100 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: "easeOut", delay: 0.2 }}
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-white">
          {value}%
        </span>
      </div>
      <span className="text-[10px] text-white/50">{label}</span>
    </div>
  )
}

export function PhoneMockup({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className="relative mx-auto w-[260px] rounded-[2.75rem] border border-white/15 bg-neutral-950 p-3 shadow-2xl shadow-black/60 sm:w-[300px]">
        <div className="absolute left-1/2 top-3 z-10 h-6 w-28 -translate-x-1/2 rounded-full bg-black" />
        <div className="overflow-hidden rounded-[2.1rem] bg-gradient-to-b from-neutral-900 to-neutral-950 p-5 pt-10">
          {/* header */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[11px] text-white/50">Halo, Rian</p>
              <p className="font-heading text-lg font-bold text-white">Hari ini</p>
            </div>
            <div className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground">
              <Camera className="h-4 w-4" />
            </div>
          </div>

          {/* calorie card */}
          <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="flex items-center gap-2 text-primary">
              <Flame className="h-4 w-4" />
              <span className="text-xs font-medium text-white/70">Sisa Kalori</span>
            </div>
            <p className="mt-1 font-heading text-3xl font-extrabold text-white">
              1.240
              <span className="ml-1 text-sm font-medium text-white/40">kkal</span>
            </p>
            <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full rounded-full bg-primary"
                initial={{ width: 0 }}
                whileInView={{ width: "62%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              />
            </div>
          </div>

          {/* macros */}
          <div className="mt-4 flex justify-around rounded-2xl border border-white/10 bg-white/5 py-4">
            <Ring value={72} label="Protein" color="oklch(0.87 0.24 145)" />
            <Ring value={48} label="Karbo" color="oklch(0.8 0.16 200)" />
            <Ring value={35} label="Lemak" color="oklch(0.85 0.18 90)" />
          </div>

          {/* recent */}
          <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-3">
            <div className="flex items-center gap-2">
              <div className="grid h-8 w-8 place-items-center rounded-lg bg-primary/20 text-primary">
                <TrendingUp className="h-4 w-4" />
              </div>
              <div className="flex-1">
                <p className="text-xs font-medium text-white">Nasi Ayam Geprek</p>
                <p className="text-[10px] text-white/40">Baru saja di-scan</p>
              </div>
              <span className="text-xs font-semibold text-primary">+540</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
