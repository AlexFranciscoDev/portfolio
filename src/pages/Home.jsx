import { useScrollToHash } from "../hooks/useScrollToHash";
import { Hero } from "../components/sections/Hero";
import { SelectedWork } from "../components/sections/SelectedWork";
import { ProfessionalExperience } from "../components/sections/ProfessionalExperience";
import { Services } from "../components/sections/Services";
import { OtherWork } from "../components/sections/OtherWork";
import { About } from "../components/sections/About";
import { TechStack } from "../components/sections/TechStack";
import { Contact } from "../components/sections/Contact";

export function Home() {
  useScrollToHash();

  return (
    <>
      <Hero />
      <SelectedWork />
      <ProfessionalExperience />
      <Services />
      <OtherWork />
      <About />
      <TechStack />
      <Contact />
    </>
  );
}
