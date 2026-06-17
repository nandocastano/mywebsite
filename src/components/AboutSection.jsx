import {
  Rocket,
  Wrench,
  ZapIcon,
} from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Juan F <span className="text-primary">Castaño</span> </h2>
          <h3 className="text-lg md:text-xl font-medium text-center text-muted-foreground leading-snug">
            B.S. Mechanical Engineering
          </h3>
          <h3 className="text-lg md:text-xl font-medium text-center mb-12 text-muted-foreground">
            New York University
          </h3>
        </div>

        

        {/* 👤 NEW BLOCK: image left, text right, compact and aligned */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-20">
          {/* Image */}
          <div className="w-full max-w-sm mx-auto md:mx-0">
            <div className="w-full aspect-[4/5] bg-muted/10 rounded-2xl overflow-hidden shadow-md">
              <img
                src="/projects/profile.jpg"
                alt="Juan Fernando Castaño"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Text */}
          <div className="space-y-4 text-left">
            <h3 className="text-2xl font-semibold">A bit more about me... </h3>
            <p className="text-muted-foreground">
            I’m a Colombian engineer and researcher focused on how Space and Energy technologies can drive peace and resilience in underserved regions. I earned a full-ride at New York University presenting a prototype of a solar-powered autonomous greenhouse tackling food insecurity in rural Colombia — merging renewables, automation, and remote sensing to empower vulnerable farmers.
            </p>
            <p className="text-muted-foreground">
            At New York University, my research has spanned microfluidic oil analysis for automated diagnostics, urban wind harvesting with microturbines, and digital twins for power grid resilience. I work at the intersection of hardware, intelligence, and infrastructure, translating ideas into deployable systems — from smart diagnostics that improve equipment longevity, to distributed energy solutions that rethink access for the Global South. My vision is to engineer a future where satellites, semiconductors, and solar arrays form the backbone of a safer and interconnected world.
            </p>
          </div>
        </div>

        {/* 🧑‍🎓 EXISTING BLOCK */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              My Goal: Space-powered energy for every corner of the Americas.
            </h3>

            <p className="text-muted-foreground">
              Mechanical Engineering graduate from NYU with hands-on experience in aerospace commissioning and safety, smart energy systems, and AI-driven diagnostics. At GCAA, I analyzed turbine failures; with ESA advisors, I helped design orbital safety systems; and at NYU, I patented a microturbine for urban wind harvesting blending PLC-SCADA automation, CNNs, and digital twins. Check my IEEE-published work on oil diagnostics.
            </p>

            <p className="text-muted-foreground">
              I engineer systems at the intersection of satellites, renewables, and intelligent control, targeting energy access for underserved regions, starting from rural farmers — the cornerstone of The Americas! — using space-enabled networks and resilient infrastructure.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="projects/juanfcastano.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Rocket className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Aerospace</h4>
                  <p className="text-muted-foreground">
                    Supported satellite safety systems, propulsion diagnostics, and orbital commissioning.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Wrench className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Control & Electrical Systems</h4>
                  <p className="text-muted-foreground">
                  Developed Closed-loop control automation systems integrating PLC–SCADA, sensor arrays, for fluidics and power systems.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <ZapIcon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Power Systems</h4>
                  <p className="text-muted-foreground">
                  Designed microturbine energy solutions and using digital twins to optimize grid performance and resilience in underserved urban contexts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
