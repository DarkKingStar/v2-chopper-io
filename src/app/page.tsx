import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { Video } from "@/components/Video";
import { Cta } from "@/components/Cta";

export default function Home() {
  return (
    <Container>
      <Hero />
      <Video videoId="VnT2GHE3MoU" />
      <Cta />
    </Container>
  );
}
