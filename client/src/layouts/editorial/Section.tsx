// A labeled section: small caps label in the margin on desktop, stacked on phones
export const Section = ({ id, label, children }: { id: string; label: string; children: React.ReactNode }) => (
  <section id={id} className="grid scroll-mt-6 gap-6 border-t border-cocoa/15 py-16 md:grid-cols-[11rem_1fr] md:gap-10 md:py-20">
    <h2 className="caps flex items-center gap-2 self-start text-cocoa/80">
      <span aria-hidden className="text-ember">✦</span>
      {label}
    </h2>
    <div className="min-w-0 max-w-2xl">{children}</div>
  </section>
);
