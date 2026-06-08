"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Target, UtensilsCrossed, Brain, Flame } from "lucide-react"

const card = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const, delay: i * 0.12 },
  }),
}

export function BentoFeatures() {
  return (
    <section id="fitur" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <h2 className="text-balance font-heading text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
            Semua yang anda Butuhkan,
            <br />
            <span className="text-primary">Ada dalam Satu App.</span>
          </h2>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-3 md:grid-rows-2">
          {/* Card 1 - large */}
          <motion.div
            variants={card}
            custom={0}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-card p-7 md:col-span-2 md:row-span-2"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary/15 blur-3xl transition-opacity group-hover:opacity-80" />
            <span className="inline-grid h-11 w-11 place-items-center rounded-xl bg-primary text-primary-foreground">
              <Target className="h-5 w-5" />
            </span>
            <h3 className="mt-5 font-heading text-2xl font-bold text-white sm:text-3xl">
              Pantau Target anda
            </h3>
            <p className="mt-2 max-w-sm text-pretty text-sm leading-relaxed text-white/60">
              Set target harian, lihat progress real-time lewat ring & grafik
              yang gampang dibaca. Konsisten jadi lebih gampang.
            </p>

            <div className="mt-7 rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-primary">
                  <Flame className="h-4 w-4" />
                  <span className="text-xs font-medium text-white/70">Kalori Hari Ini</span>
                </div>
                <span className="text-xs font-semibold text-primary">62%</span>
              </div>
              <div className="mt-3 h-2.5 w-full overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full rounded-full bg-primary"
                  initial={{ width: 0 }}
                  whileInView={{ width: "62%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                />
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                {[
                  ["Protein", "72%"],
                  ["Karbo", "48%"],
                  ["Lemak", "35%"],
                ].map(([l, v]) => (
                  <div key={l} className="rounded-xl bg-white/5 py-3">
                    <p className="font-heading text-lg font-bold text-white">{v}</p>
                    <p className="text-[10px] text-white/50">{l}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={card}
            custom={1}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-card p-7"
          >
            <Image
              src="/aldrin-rachman-pradana-B_1GyWCsc1s-unsplash.jpg"
              alt="Menu makanan sehat lokal"
              width={120}
              height={120}
              className="absolute -bottom-4 -right-4 h-28 w-28 rounded-2xl object-cover opacity-80 transition-transform group-hover:scale-110"
            />
            <span className="inline-grid h-11 w-11 place-items-center rounded-xl bg-primary/20 text-primary">
              <UtensilsCrossed className="h-5 w-5" />
            </span>
            <h3 className="mt-5 font-heading text-xl font-bold text-white">
              Ribuan Menu Lokal
            </h3>
            <p className="mt-2 max-w-[14rem] text-pretty text-sm leading-relaxed text-white/60">
              Dari nasi padang sampe gado-gado, 
              semua menu Indonesia nya lengkap!
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            variants={card}
            custom={2}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-card p-7"
          >
            <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-primary/10 blur-2xl" />
            <span className="inline-grid h-11 w-11 place-items-center rounded-xl bg-primary/20 text-primary">
              <Brain className="h-5 w-5" />
            </span>
            <h3 className="mt-5 font-heading text-xl font-bold text-white">
              ribet tapi pengen sehat?

            </h3>
            <p className="mt-2 text-pretty text-sm leading-relaxed text-white/60">
              Artificial Intelligence kami kasih saran menu yang pas sama sisa target kalori & selera makan
              hari ini.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
