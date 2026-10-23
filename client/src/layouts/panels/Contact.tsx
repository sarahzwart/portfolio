import { ContactLinks } from "@/components/ContactLinks";
import { contact } from "@/content/site";

export const Contact = () => {
  return (
    <section id="contact" className="px-5 py-24 text-center">
      <h2 className="display text-xl sm:text-2xl">{contact.heading}</h2>
      <p className="mx-auto mt-4 max-w-xl leading-relaxed">{contact.text}</p>
      <ContactLinks className="mt-8 justify-center" />
    </section>
  );
};
