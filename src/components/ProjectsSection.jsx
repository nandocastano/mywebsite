import { Github } from "lucide-react";
import { PageHeader, PageSection, SectionHeader } from "@/components/Page";
import { ProjectCarousel } from "@/components/ProjectCarousel";
import { projects, reportUrl, repoFolder, REPO_URL } from "@/data/projects";
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
    {children} <span aria-hidden="true">↗︎</span>
  </a>
);

// Featured projects go in the carousel; the list below holds every project.
const featured = projects.filter((project) => project.featured);

export const ProjectsSection = () => (
  <PageSection id="projects">
    <PageHeader title="Featured" accent="Projects" tight />

    <ProjectCarousel projects={featured} />

    <div className="mt-16">
      <SectionHeader
        title="All Projects"
        description="Every project, each with its own technical report."
        link={{ href: REPO_URL, label: "All on GitHub ↗︎" }}
      />
      <ol>
        {projects.map((project) => (
          <li
            key={project.slug}
            className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-x-10 gap-y-3 py-7 border-b border-border text-left"
          >
            <div>
              <p className="label">{project.meta}</p>
              <h3 className="mt-1 item-title">
                <a
                  href={reportUrl(project.slug)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  {project.title}
                </a>
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-2xl">
                {project.description}
              </p>
              {project.result && (
                <p className="mt-3 text-sm">
                  <span className="label mr-2">Result</span>
                  <span className="font-serif text-base text-primary">
                    {project.result}
                  </span>
                </p>
              )}
              <p className="mt-3 text-sm text-foreground/60">
                {project.tags.join(" · ")}
              </p>
            </div>
            <div className="flex flex-wrap md:flex-col gap-x-5 gap-y-1.5 text-sm md:items-end md:pt-5 md:whitespace-nowrap">
              <Out href={reportUrl(project.slug)}>Report</Out>
              <Out href={repoFolder(project.slug)}>Code</Out>
              {project.video && <Out href={project.video}>Video</Out>}
            </div>
          </li>
        ))}
      </ol>
    </div>

    {/* Engineering Lab (hidden until confirmed — see data/experiments.js) */}
    {SHOW_ENGINEERING_LAB && (
      <div className="mt-20">
        <SectionHeader
          title="Engineering Lab"
          description="Not polished — but real. Simulations, failed prototypes, research notebooks, and tools in progress."
          link={{ href: GITHUB_URL, label: "GitHub ↗︎" }}
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
