import HomeHero from "@/components/HomeHero";
import HomeStats from "@/components/HomeStats";
import Proposition from "@/components/Proposition";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return <article className="home">
    <HomeHero/>
    <HomeStats/>
    <Proposition/>
    <Testimonials/>
  </article>;
}
