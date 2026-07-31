import { Rocket, Cpu, Zap } from "lucide-react";

const capabilities = [
  {
    icon: Rocket,
    title: "Aerospace Systems",
    description:
      "Satellite systems, propulsion diagnostics, mission operations, and flight-critical engineering.",
  },
  {
    icon: Cpu,
    title: "Intelligent Infrastructure",
    description:
      "Automation, controls, digital twins, industrial sensing, and resilient platforms.",
  },
  {
    icon: Zap,
    title: "Energy Systems",
    description:
      "Distributed power, turbines, urban energy, and sustainable infrastructure.",
  },
];

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative py-24 md:py-32 px-4 bg-background/70"
    >
      <div className="container mx-auto max-w-2xl">
        {/* Portrait */}
        <div className="relative w-40 sm:w-48 md:w-56 mx-auto mb-8">
          <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden border border-border/60 bg-muted/10">
            <img
              src="/projects/profile.jpg"
              alt="Juan Fernando Castaño"
              className="w-full h-full object-contain"
            />
          </div>
          <span
            className="absolute -bottom-2 -right-4 sm:-right-10 text-[13px] text-blue-500/20 whitespace-nowrap select-none pointer-events-none -rotate-6"
            style={{ fontFamily: "'Segoe Script', 'Bradley Hand', cursive" }}
          >
            Wonder comes first.
          </span>
        </div>

        {/* Identity */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Juan Fernando Castaño
          </h2>
          <p className="mt-3 text-lg md:text-xl text-muted-foreground">
            Mechanical Engineer · Systems Builder
          </p>
          <p className="mt-4 max-w-md mx-auto text-muted-foreground">
            Building technologies that move from curiosity to real-world
            impact.
          </p>
          <p className="mt-4 text-xs uppercase tracking-[0.2em] text-muted-foreground/60">
            NYU Abu Dhabi
          </p>
        </div>

        {/* Philosophy */}
        <div className="text-center mb-16 md:mb-20">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">
            Why I Build
          </h3>
          <p className="max-w-prose mx-auto text-muted-foreground leading-relaxed">
            I build engineering systems where hardware, intelligence, and
            people intersect. From aerospace to resilient energy
            infrastructure, my work focuses on transforming ambitious ideas
            into practical solutions. I believe the best engineering isn't
            defined by complexity—it's defined by usefulness.
          </p>
        </div>

        {/* Mission */}
        <div className="text-center mb-16 md:mb-20">
          <h3 className="text-xs md:text-sm font-semibold uppercase tracking-[0.25em] text-primary mb-4">
            Mission
          </h3>
          <p className="text-2xl md:text-3xl font-medium leading-snug max-w-xl mx-auto">
            Reliable, resilient infrastructure for the communities that need
            it most.
          </p>
          <p className="mt-4 max-w-prose mx-auto text-muted-foreground">
            Every project follows one principle: build technologies that
            leave the laboratory and create measurable value in the real
            world.
          </p>
        </div>

        {/* Capabilities */}
        <div className="mb-16 md:mb-20">
          <h3 className="text-xs md:text-sm font-semibold uppercase tracking-[0.25em] text-muted-foreground text-center mb-6">
            Capabilities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-stretch">
            {capabilities.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="h-full flex flex-col gap-3 rounded-2xl border border-border/60 bg-card/40 p-6 transition-all duration-150 ease-out hover:-translate-y-0.5 hover:border-primary/40"
              >
                <div className="p-2.5 rounded-full bg-primary/10 w-fit">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h4 className="font-semibold">{title}</h4>
                <p className="text-sm text-muted-foreground leading-snug">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#projects" className="cosmic-button">
            View Projects →
          </a>
          <a
            href="https://www.linkedin.com/in/juan-f-castano-438107204"
            className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};
