import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LeadMagnet from './components/LeadMagnet'
import Services from './components/Services'
import LeadGeneration from './components/LeadGeneration'
import LeadNurture from './components/LeadNurture'
import ReputationManagement from './components/ReputationManagement'
import Steps from './components/Steps'
import PricingGuide from './components/PricingGuide'
import Footer from './components/Footer'
import Background from './components/Background'

export default function App(): JSX.Element {
  return (
    <div className="relative min-h-screen">
      <Background />
      <Navbar />
      <main>
        <Hero businessType="Yoga Studio" />
        <LeadMagnet />
        <Services />
        <LeadGeneration />
        <LeadNurture />
        <ReputationManagement />
        <Steps />
        <PricingGuide />
      </main>
      <Footer />
    </div>
  )
}