import { Rocket, Cpu, SlidersHorizontal } from "lucide-react";
import { Link } from "react-router-dom";
import { PageSection } from "@/components/Page";
import { CV_BUTTON_LABEL, CV_URL } from "@/data/cv";
import { SITE } from "@/data/site";

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
    icon: SlidersHorizontal,
    title: "Control & Intelligent Systems",
    description:
      "Stochastic control, estimation, Kalman filtering, PID/MPC, system identification, optimization, sensor fusion, and control of physical and microfluidic systems.",
  },
];

export const AboutSection = () => {
  return (
    <PageSection id="about">
      {/* Identity */}
      <header className="text-center mb-14 md:mb-16">
        <h1 className="page-title">
          Juan Fernando <span className="text-primary">Castaño</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground">
          Mechanical Engineer · Systems Builder
        </p>
        <p className="mt-2 label">New York University</p>
      </header>

      {/* Portrait + Philosophy/Mission */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 md:items-stretch mb-16 md:mb-20">
        <div className="w-full max-w-sm mx-auto md:mx-0 md:max-w-none">
          <div className="w-full aspect-[4/5] md:aspect-auto md:h-full md:min-h-[26rem] rounded-2xl overflow-hidden border border-border/60">
            <img
              src="/projects/profile-800.webp"
              srcSet="/projects/profile-800.webp 800w, /projects/profile-1400.webp 1400w"
              sizes="(min-width: 768px) 45vw, 90vw"
              width="800"
              height="1000"
              loading="lazy"
              decoding="async"
              alt="Juan Fernando Castaño"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="space-y-10 text-left">
          <div>
            <h2 className="section-title mb-3">Why I Build</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I’ve always been fascinated by the process of turning an idea
                into something real.
              </p>
              <p>
                That’s what engineering means to me: understanding how the
                world works, building things, breaking them, learning, and
                trying again, until something useful comes out of it.
              </p>
              <p>
                I care about technology, but I care just as much about what we
                choose to do with it.
              </p>
            </div>
          </div>

          <div>
            <h2 className="section-title mb-3">Where I’m From</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I’m from Santiago de Cali, Colombia. It’s home, and it’s a
                part of how I see the world: curious, warm, resourceful, and
                always looking for a way to make things work.
              </p>
              <p>
                Wherever engineering takes me, I want to carry that same
                spirit with me, building things that are useful, sharing what
                I learn, and using what I know to serve others.
              </p>
            </div>
          </div>

          <div>
            <p className="eyebrow">Mission</p>
            <h2 className="section-title mt-2">Engineering with Kindness</h2>
            <div className="mt-3 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I believe we can become extraordinarily capable embracing our
                humanity &amp; kindness.
              </p>
              <p>
                For me, that means building technology that doesn’t stop at
                the prototype or the laboratory, but finds its way into the
                real world and makes someone’s life a little better.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Capabilities */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-stretch mb-14 md:mb-16">
        {capabilities.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="surface-card h-full flex flex-col gap-3 p-6 text-left md:grid md:row-span-3 md:grid-rows-subgrid md:gap-y-3"
          >
            <div className="p-2.5 rounded-full bg-primary/10 w-fit">
              <Icon className="h-5 w-5 text-primary" />
            </div>
            <h3 className="item-title">{title}</h3>
            <p className="text-sm text-muted-foreground leading-snug">
              {description}
            </p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center">
        <a href={`mailto:${SITE.email}`} className="cosmic-button">
          Get in touch
        </a>
        <Link to="/projects" className="outline-button">
          View Projects →
        </Link>
        <a
          href={CV_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="outline-button"
        >
          {CV_BUTTON_LABEL}
        </a>
      </div>
    </PageSection>
  );
};
