import { SmoothScroll } from "@/components/smooth-scroll"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { LogoMarquee } from "@/components/logo-marquee"
import { BentoGrid } from "@/components/bento-grid"
import { Pricing } from "@/components/pricing"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function Index() {
  return (
    <>
      <Navbar />
      <SmoothScroll>
        <main className="min-h-screen bg-zinc-950">
          <div className="noise-overlay" aria-hidden="true" />
          <Hero />
        <LogoMarquee />
        <BentoGrid />
        <Pricing />
        <FinalCTA />
        <Footer />
        </main>
      </SmoothScroll>
    </>
  )
}
