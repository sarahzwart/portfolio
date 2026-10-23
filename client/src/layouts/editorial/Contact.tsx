import { ContactLinks } from "@/components/ContactLinks";
import { contact } from "@/content/site";
import { Section } from "./Section";

export const Contact = () => (
  <Section id="contact" label="Contact">
    <h3 className="display text-lg sm:text-xl">{contact.heading}</h3>
    <p className="mt-3 max-w-xl leading-relaxed">{contact.text}</p>
    <ContactLinks className="mt-7" />
  </Section>
);
