/**
 * Capabilities Page Module
 * "Show, don't tell" - interactive demos and clear positioning
 */
import { HeroSection } from './components/HeroSection'
import { LiveDemosSection } from './components/LiveDemosSection'
import { TechStackSection } from './components/TechStackSection'
import { ProcessSection } from './components/ProcessSection'
import { IdealClientsSection } from './components/IdealClientsSection'
import { GuaranteesSection } from './components/GuaranteesSection'
import { CapabilitiesCTA } from './components/CapabilitiesCTA'

const CapabilitiesPage = () => {
  return (
    <main>
      <HeroSection />
      <LiveDemosSection />
      <TechStackSection />
      <ProcessSection />
      <IdealClientsSection />
      <GuaranteesSection />
      <CapabilitiesCTA />
    </main>
  )
}

export default CapabilitiesPage
