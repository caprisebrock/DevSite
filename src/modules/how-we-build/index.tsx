/**
 * How We Build Page Module
 * Explains multi-agent orchestration and the Day One process
 */
import { HeroSection } from './components/HeroSection'
import { MultiAgentSection } from './components/MultiAgentSection'
import { ProcessSection } from './components/ProcessSection'
import { ProofSection } from './components/ProofSection'
import { CTASection } from './components/CTASection'

const HowWeBuildPage = () => {
  return (
    <main>
      <HeroSection />
      <MultiAgentSection />
      <ProcessSection />
      <ProofSection />
      <CTASection />
    </main>
  )
}

export default HowWeBuildPage
