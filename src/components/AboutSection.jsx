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
    title: "Robotics & Intelligence",
    description:
      "Automation, controls, ROS, digital twins, industrial sensing, and resilient platforms.",
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
      className="relative py-24 md:py-28 px-4 bg-background/70"
    >
      <div className="container mx-auto max-w-5xl">
        {/* Identity */}
        <div className="text-center mb-14 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Juan Fernando <span className="text-primary">Castaño</span>
          </h2>
          <p className="mt-3 text-lg md:text-xl text-muted-foreground">
            Mechanical Engineer · Systems Builder
          </p>
          <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground/60">
            NYU Abu Dhabi
          </p>
        </div>

        {/* Portrait + Philosophy/Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center mb-16 md:mb-20">
          <div className="w-full max-w-sm mx-auto md:mx-0">
            <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden border border-border/60">
              <img
                src="/projects/profile.jpg"
                alt="Juan Fernando Castaño"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-8 text-left">
            <div>
              <h3 className="text-2xl font-semibold mb-3">Why I Build</h3>
              <p className="text-muted-foreground leading-relaxed">
                I believe engineering is not just about inventing new
                technology. It's about making powerful technology
                accessible to the people who need it most. Engineering is
                an act of creation with purpose.
              </p>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-bold uppercase tracking-wide">
                <span className="text-primary">Mission: </span>
                Engineering with Kindness
              </h3>
              <p className="mt-2 text-muted-foreground">
                Every project follows one principle: build technologies that
                leave the laboratory and create measurable value in the real
                world.
              </p>
            </div>
          </div>
        </div>

        {/* Capabilities */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-stretch mb-14 md:mb-16">
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
