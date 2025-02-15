import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

import { benefitOne, benefitTwo } from "@/components/data";
export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle
        preTitle="DeepLove"
        title="Why You Need DeepLove to Improve Your Dating Life"
      >
        Struggling with dating conversations? DeepLove helps you navigate any interaction smoothly—whether it's on dating apps or in person.
        Get real-time suggestions, improve your flirting skills, and say the right thing at the right time.
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <SectionTitle
        preTitle="See It in Action"
        title="How DeepLove Helps You Master Dating Conversations"
      >
        Watch this quick demo to see how DeepLove crafts perfect responses, detects red flags, and helps you build deeper connections.
      </SectionTitle>

      <Video videoId="fZ0D0cnR88E" />

      <SectionTitle
        preTitle="Real Success Stories"
        title="How People Are Winning at Dating with DeepLove"
      >
        Don't just take our word for it—see how our users are improving their dating lives, gaining confidence, and securing more meaningful connections.
      </SectionTitle>

      <Testimonials />

      <SectionTitle preTitle="FAQs" title="Got Questions? We've Got Answers">
        Curious about how DeepLove can improve your dating game? Check out some common questions and learn how our tool works.
      </SectionTitle>

      <Faq />
      <Cta />
    </Container>

  );
}
