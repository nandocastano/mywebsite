import { ExternalLink, Github } from "lucide-react";
import { PageHeader, PageSection, SectionHeader } from "@/components/Page";
import { projects } from "@/data/projects";
import { experiments, SHOW_ENGINEERING_LAB } from "@/data/experiments";
import { social } from "@/data/social";

const GITHUB_URL = social.find((s) => s.title === "GitHub").href;

export const ProjectsSection = () => {
  return (
    <PageSection id="projects">
      {/* Featured Projects */}
      <PageHeader
        title="Featured"
        accent="Projects"
        description="Some of my latest engineering projects, driven by data, and built to reshape how we power, automate, and sustain our world."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
        {projects.map((project) => (
          <article
            key={project.id}
            className="surface-card overflow-hidden flex flex-col"
          >
            {project.image && (
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="p-6 flex flex-col gap-3 flex-1">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="pill">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="item-title">{project.title}</h3>
              <p className="text-sm text-muted-foreground">
                {project.description}
              </p>
              {(project.demoUrl || project.githubUrl) && (
                <div className="mt-auto pt-2 flex gap-4 text-foreground/70">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Live demo"
                      className="hover:text-primary transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Source on GitHub"
                      className="hover:text-primary transition-colors"
                    >
                      <Github size={20} />
                    </a>
                  )}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>

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
                  ? { href: exp.githubUrl, target: "_blank", rel: "noreferrer" }
                  : {})}
                className="surface-card p-6 flex flex-col gap-3"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="font-mono text-sm font-medium">
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
