import Footer from '@/components/footer';
import HeroSection from '@/sections/hero';
import PartnerSection from '@/sections/partner';
import PricingSection from '@/sections/pricing';
import PromoSection from '@/sections/promo';

export default function Home() {
  return (
    <>
      <HeroSection />
      <PartnerSection />
      <PromoSection />
      <PricingSection />
      <Footer />
    </>
  );
}
