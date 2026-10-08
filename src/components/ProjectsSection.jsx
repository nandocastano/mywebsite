import { Github } from "lucide-react";
import { PageHeader, PageSection, SectionHeader } from "@/components/Page";
import { projects, repoFile, repoFolder, REPO_URL } from "@/data/projects";
import { experiments, SHOW_ENGINEERING_LAB } from "@/data/experiments";
import { social } from "@/data/social";

const GITHUB_URL = social.find((s) => s.title === "GitHub").href;

const Out = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-link"
  >
    {children} <span aria-hidden="true">↗</span>
  </a>
);

// A project without photos gets its pipeline drawn instead.
const Pipeline = ({ steps }) => (
  <div className="w-full h-full flex flex-col items-center justify-center gap-1.5 p-6 bg-gradient-to-b from-primary/10 to-transparent">
    {steps.map((step, i) => (
      <div
        key={step}
        className="flex flex-col items-center gap-1.5 w-full max-w-xs"
      >
        {i > 0 && (
          <span aria-hidden="true" className="text-primary/70 leading-none">
            ↓
          </span>
        )}
        <span className="w-full text-center text-sm rounded-full border border-border/60 bg-card/60 px-4 py-2">
          {step}
        </span>
      </div>
    ))}
  </div>
);

const Cover = ({ project, fill = false }) => (
  <div
    className={`overflow-hidden bg-card aspect-[16/10] ${
      fill ? "md:aspect-auto md:h-full md:min-h-[22rem]" : ""
    }`}
  >
    {project.cover ? (
      <img
        src={project.cover}
        alt={project.alt}
        width="1200"
        height="900"
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />
    ) : (
      <Pipeline steps={project.pipeline} />
    )}
  </div>
);

const Details = ({ project, large = false }) => (
  <div className="p-6 md:p-7 flex flex-col gap-3 flex-1 text-left">
    <p className="label">{project.meta}</p>
    <h3
      className={
        large
          ? "font-serif text-2xl md:text-3xl font-medium leading-snug tracking-tight"
          : "item-title"
      }
    >
      {project.title}
    </h3>
    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
      {project.description}
    </p>
    {project.result && (
      <p className="text-sm">
        <span className="label mr-2">Result</span>
        <span className="font-serif text-base text-primary">
          {project.result}
        </span>
      </p>
    )}
    <div className="flex flex-wrap gap-2">
      {project.tags.map((tag) => (
        <span key={tag} className="pill">
          {tag}
        </span>
      ))}
    </div>
    <div className="mt-auto pt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm">
      <Out href={repoFile(project.report)}>Report</Out>
      <Out href={repoFolder(project.slug)}>Code</Out>
      {project.video && <Out href={project.video}>Video</Out>}
    </div>
  </div>
);

export const ProjectsSection = () => {
  const [featured, ...rest] = projects;

  return (
    <PageSection id="projects">
      <PageHeader
        title="Featured"
        accent="Projects"
        description="Engineering projects, each with a technical report and, where it’s mine to share, the code."
      />

      {/* Flagship project */}
      <article className="surface-card group overflow-hidden grid grid-cols-1 md:grid-cols-[5fr_7fr]">
        <Cover project={featured} fill />
        <Details project={featured} large />
      </article>

      {/* The rest */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {rest.map((project) => (
          <article
            key={project.slug}
            className="surface-card group overflow-hidden flex flex-col"
          >
            <Cover project={project} />
            <Details project={project} />
          </article>
        ))}
      </div>

      <p className="mt-10 text-center text-muted-foreground">
        All reports, code and figures are in one repository.{" "}
        <Out href={REPO_URL}>Browse it on GitHub</Out>
      </p>

      {/* Engineering Lab (hidden until confirmed — see data/experiments.js) */}
      {SHOW_ENGINEERING_LAB && (
        <div className="mt-20">
          <SectionHeader
            title="Engineering Lab"
            description="Not polished — but real. Simulations, failed prototypes, research notebooks, and tools in progress."
            link={{ href: GITHUB_URL, label: "GitHub ↗" }}
          />

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {experiments.map((exp) => {
              const Card = exp.githubUrl ? "a" : "div";
              return (
                <Card
                  key={exp.id}
                  {...(exp.githubUrl
                    ? {
                        href: exp.githubUrl,
                        target: "_blank",
                        rel: "noreferrer",
                      }
                    : {})}
                  className="surface-card p-6 flex flex-col gap-3"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="flex items-center gap-2 font-mono text-sm font-medium">
                      <Github size={15} />
                      {exp.name}
                    </span>
                    <span className="shrink-0 label">{exp.status}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {exp.purpose}
                  </p>
                  <div className="mt-auto pt-2 flex flex-wrap gap-2">
                    {exp.stack.map((s) => (
                      <span key={s} className="pill">
                        {s}
                      </span>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      )}
    </PageSection>
  );
};
