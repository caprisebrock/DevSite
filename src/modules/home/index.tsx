/**
 * HomePage Module
 * Main landing page with hero, services, demos, projects, and CTA
 */
import { HeroSection } from './components/HeroSection'
import { TrustBar } from './components/TrustBar'
import { ServicesSection } from './components/ServicesSection'
import { LiveDemosSection } from './components/LiveDemosSection'
import { FeaturedProjects } from './components/FeaturedProjects'
import { FinalCTA } from './components/FinalCTA'

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <TrustBar />
      <ServicesSection />
      <LiveDemosSection />
      <FeaturedProjects />
      <FinalCTA />
    </main>
  )
}

export default HomePage
