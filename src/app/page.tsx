import StickyNav from '@/components/layout/StickyNav'
import PageTransition from '@/components/layout/PageTransition'
import BackToTop from '@/components/ui/BackToTop'
import HeroSection from '@/components/sections/HeroSection'
import MarqueeStrip from '@/components/sections/MarqueeStrip'
import ArmsSection from '@/components/sections/ArmsSection'
import FlywheelSection from '@/components/sections/FlywheelSection'
import MissionSection from '@/components/sections/MissionSection'
import JourneySection from '@/components/sections/JourneySection'
import PhilosophySection from '@/components/sections/PhilosophySection'
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
          <FlywheelSection />
          <MissionSection />
          <JourneySection />
          <PhilosophySection />
          <ToolsSection />
          <CTASection />
        </main>
        <Footer />
      </PageTransition>
      <BackToTop />
    </>
  )
}
