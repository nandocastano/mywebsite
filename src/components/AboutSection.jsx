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
            <h3 className="text-2xl font-semibold">About me... </h3>
            <p className="text-muted-foreground">
            I am a Colombian engineer and researcher fascinated by how technology can move from powerful ideas to real systems that serve people. 
            </p>
            <p className="text-muted-foreground">
            I studied Mechanical Engineering at New York University, to build engineering systems aimed to bring advanced technology closer to the frontlines, from food security in rural communities to low-cost diagnostics and resilient energy infrastructure. 
            </p>

            <p className="text-muted-foreground">
            At NYU, my work has explored microfluidic systems for low-cost diagnostics, urban energy harvesting, and infrastructure resilience through data-driven models. I’m drawn to the intersection of hardware, intelligence, and real-world deployment, where engineering stops being theoretical and starts becoming usable. 
            </p>
            <p className="text-muted-foreground">
            More than anything, I care about building systems that do not just work in the lab, but can actually make an impact.
            </p>
          </div>
        </div>

        {/* 🧑‍🎓 EXISTING BLOCK */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
            My Goal: Space-powered energy for every corner of the Americas            </h3>
            <p className="text-muted-foreground">
            I’m a Mechanical Engineering graduate from NYU, working at the intersection of aerospace, energy systems, and intelligent infrastructure — with a focus on building technologies that make the impossible possible.            </p>

            <p className="text-muted-foreground">
            My path has taken me through aerospace safety and turbine analysis at the GCAA, orbital systems thinking with ESA-aligned research, and microfluidic diagnostic systems and energy harvesting work at NYU. Along the way, I’ve worked with everything from mechanical failure modes in turbines to CNN-based sensing systems and digital twins for real-world environments.            </p>

            <p className="text-muted-foreground">
            What connects all of it is a single idea: systems should not only be advanced they should be deployable where they are needed most.         </p>


            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="https://www.linkedin.com/in/juan-f-castano-438107204"
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
