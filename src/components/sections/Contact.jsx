import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { ContactForm } from "./ContactForm";
import { social } from "../../data/social";

const ICONS = { mail: Mail, linkedin: Linkedin, github: Github, phone: Phone };

export function Contact() {
  return (
    <section id="contact" className="bg-ink py-24 text-bone sm:py-32">
      <Container className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="mb-6 font-mono text-xs uppercase tracking-[0.1em] text-muted-dark">Contact</p>
            <h2 className="text-[length:var(--font-size-h1)] font-medium leading-[1.05] tracking-[-0.02em]">
              Have a project in mind?
              <span className="block text-muted-dark">Let's build something together.</span>
            </h2>
          </Reveal>

          <Reveal delay={100} className="mt-10 space-y-3">
            {social
              .filter((item) => ICONS[item.icon])
              .map((item) => {
                const Icon = ICONS[item.icon];
                return (
                  <a
                    key={item.platform}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    className="link-swap flex w-fit items-center gap-3 text-muted-dark hover:text-bone"
                  >
                    <Icon size={16} strokeWidth={1.5} aria-hidden="true" />
                    {item.value}
                  </a>
                );
              })}
          </Reveal>
        </div>

        <Reveal delay={150} className="lg:col-span-7">
          <ContactForm />
        </Reveal>
      </Container>
    </section>
  );
}
