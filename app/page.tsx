import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Partnership from "@/components/Partnership";
import WhyAvanti from "@/components/WhyAvanti";
import WhatWeDo from "@/components/WhatWeDo";
import CaseStudiesPreview from "@/components/CaseStudiesPreview";
import SocialProof from "@/components/SocialProof";
import DarkCTA from "@/components/DarkCTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Nav />
      <div style={{ paddingTop: 52 }}>
        <Hero />
        <Partnership />
        <WhyAvanti />
        <WhatWeDo />
        <CaseStudiesPreview />
        <SocialProof />
        <DarkCTA
          title={<>Your Audience Is <span className="brand-gradient-text">Waiting.</span></>}
          sub="Let's build a program that earns attention, and keeps it."
        />
        <Footer />
      </div>
    </>
  );
}
