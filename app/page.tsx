import Hero from "@/sections/Hero";
import About from "@/sections/about";
import OurAchievements from "@/sections/ourarchievements";
import GetTree from "@/sections/getTree";
import OurTeam from "@/sections/ourTeam";
import OurProjects from "@/sections/ourprojects";
import Testimonials from "@/sections/testimonials";
import GetInTouch from "@/sections/getintouch";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <GetTree />
      <OurAchievements />
      <OurProjects />
      <OurTeam />
      <Testimonials />
      <GetInTouch />
    </>
  );
}
