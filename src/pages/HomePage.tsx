import HeroSection from '../components/home/HeroSection';
import StatsStrip from '../components/home/StatsStrip';
import ProgramsPreview from '../components/home/ProgramsPreview';
import ScholarshipTeaser from '../components/home/ScholarshipTeaser';
import NewsSection from '../components/home/NewsSection';
import CTABanner from '../components/home/CTABanner';
import PageWrapper from '../components/layout/PageWrapper';

export default function HomePage() {
  return (
    <PageWrapper>
      <HeroSection />
      <StatsStrip />
      <ProgramsPreview />
      <ScholarshipTeaser />
      <NewsSection />
      <CTABanner />
    </PageWrapper>
  );
}
