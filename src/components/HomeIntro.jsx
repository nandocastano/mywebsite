import { Link } from "react-router-dom";
import { projects } from "@/data/projects";
import { PageSection, SectionHeader } from "@/components/Page";
import { SITE } from "@/data/site";
import { social } from "@/data/social";

const socialLinks = [
  ...social.map((s) => ({ label: s.title, href: s.href })),
  { label: "Email", href: `mailto:${SITE.email}` },
];

const facts = [
  {
    label: "Focus",
    value: "Aerospace · Robotics · Control",
  },
  { label: "Mission", value: "Engineering to serve the world" },
];

const featured = projects.filter((project) => project.featured);

export const HomeIntro = () => {
  return (
    <PageSection>
      <div className="text-left">
        {/* Portrait + intro: both columns share the same height */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <div className="w-full max-w-sm mx-auto md:mx-0 md:max-w-none">
            <div className="w-full aspect-[4/5] md:aspect-auto md:h-full md:min-h-[28rem] rounded-2xl overflow-hidden border border-border/60">
              <img
                src="/projects/profile-800.webp"
                srcSet="/projects/profile-800.webp 800w, /projects/profile-1400.webp 1400w"
                sizes="(min-width: 768px) 45vw, 90vw"
                width="800"
                height="1000"
                loading="lazy"
                alt="Juan Fernando Castaño"
                decoding="async"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center gap-9">
            {/* Introduction */}
            <div>
              <p className="eyebrow">
                Mechanical Engineer · New York University
              </p>
              <p className="mt-5 font-serif text-2xl md:text-3xl font-normal leading-snug tracking-tight text-balance">
                I’ve always been fascinated by the process of turning an idea
                into something real.
              </p>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                That’s what engineering means to me: understanding how the
                world works, building things, breaking them, learning, and
                trying again, until something useful comes out of it.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                I work across aerospace, robotics, control, and AI, but the
                part I care about most is what comes after the prototype:
                whether what we build can actually make someone’s life a
                little better.
              </p>
              <Link to="/about" className="mt-5 inline-block text-foreground text-link">
                More about me →
              </Link>
            </div>

            {/* Focus and mission */}
            <dl className="border-t border-border">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex flex-col sm:flex-row sm:gap-6 py-3.5 border-b border-border"
                >
                  <dt className="sm:w-24 shrink-0 label sm:pt-1">
                    {fact.label}
                  </dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>

            {/* Elsewhere */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-muted-foreground">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  {link.label} ↗︎
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Selected work teaser */}
        <div className="mt-20 md:mt-28">
          <SectionHeader
            title="Selected Work"
            link={{ to: "/projects", label: "All projects →" }}
          />

          {featured.map((project) => (
            <Link
              key={project.slug}
              to="/projects"
              className="group block py-6 border-b border-border"
            >
              <h3 className="item-title group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="mt-1 text-muted-foreground max-w-2xl">
                {project.summary}
              </p>
              <p className="mt-2 text-sm text-foreground/60">
                {project.tags.join(" · ")}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </PageSection>
  );
};
