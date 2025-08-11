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

export default function App(): JSX.Element {
  return (
    <div className="min-h-screen bg-white">
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