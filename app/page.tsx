import { SiteNav } from "@/components/site-nav"
import { Hero } from "@/components/hero"
import { MagicScanner } from "@/components/magic-scanner"
import { BentoFeatures } from "@/components/bento-features"
import { FooterCta } from "@/components/footer-cta"

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background">
      <SiteNav />
      <Hero />
      <MagicScanner />
      <BentoFeatures />
      <FooterCta />
    </main>
  )
}
