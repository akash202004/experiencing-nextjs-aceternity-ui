import FeaturedSection from "@/components/FeaturedSection";
import HeroSection from "@/components/HeroSection";
import TestimonialCard from "@/components/TestimonialCard";
import WhyChooseUs from "@/components/WhyChooseUs";
import "./globals.css";
import UpcomingWebinar from "@/components/UpcomingWebinar";
import GeminiEffect from "@/components/GeminiEffect";
import Instructor from "@/components/Instructor";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] hide-scrollbar">
      <HeroSection />
      <FeaturedSection />
      <WhyChooseUs />
      <TestimonialCard />
      <UpcomingWebinar />
      <GeminiEffect />
      <Instructor />
    </main>
  );
}
