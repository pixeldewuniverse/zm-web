import StickyNav from '@/components/layout/StickyNav'
import PageTransition from '@/components/layout/PageTransition'
import BackToTop from '@/components/ui/BackToTop'
import HeroSection from '@/components/sections/HeroSection'
import MarqueeStrip from '@/components/sections/MarqueeStrip'
import ArmsSection from '@/components/sections/ArmsSection'
import MissionSection from '@/components/sections/MissionSection'
import ToolsSection from '@/components/sections/ToolsSection'
import CTASection from '@/components/sections/CTASection'
import Footer from '@/components/layout/Footer'

export default function HomePage() {
  return (
    <>
      <StickyNav />
      <PageTransition>
        <main>
          <HeroSection />
          <MarqueeStrip />
          <ArmsSection />
          <MissionSection />
          <ToolsSection />
          <CTASection />
        </main>
        <Footer />
      </PageTransition>
      <BackToTop />
    </>
  )
}
