import Footer from '@/components/footer';
import ContactSection from '@/sections/contact-us';
import HeroSection from '@/sections/hero';
import PartnerSection from '@/sections/partner';
import PricingSection from '@/sections/pricing';
import PromoSection from '@/sections/promo';

export default function Home() {
  return (
    <>
      <HeroSection id="hero" />
      <PartnerSection id="partners" />
      <PromoSection id="promo" />
      <PricingSection id="pricing" />
      <ContactSection id="contact" />
      <Footer />
    </>
  );
}
