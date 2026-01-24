import React from 'react';
import HeroSection from '../components/camp/HeroSection';
import AboutSection from '../components/camp/AboutSection';
import VenueSection from '../components/camp/VenueSection';
import BenefitsSection from '../components/camp/BenefitsSection';
import GroupsSection from '../components/camp/GroupsSection';
import ProgramSection from '../components/camp/ProgramSection';
import TeamSection from '../components/camp/TeamSection';
import PricingSection from '../components/camp/PricingSection';
import FAQSection from '../components/camp/FAQSection';
import GallerySection from '../components/camp/GallerySection';
import TestimonialsSection from '../components/camp/TestimonialsSection';
import ContactSection from '../components/camp/ContactSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <VenueSection />
      <BenefitsSection />
      <GroupsSection />
      <ProgramSection />
      <TeamSection />
      <PricingSection />
      <FAQSection />
      <GallerySection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}