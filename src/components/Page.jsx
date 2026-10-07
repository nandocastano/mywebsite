import { Link } from "react-router-dom";

// Shared page building blocks so every page follows one structure.

export const PageSection = ({ id, children }) => (
  <section id={id} className="relative px-4 py-24 md:py-28">
    <div className="container mx-auto max-w-5xl">{children}</div>
  </section>
);

// Centered page title with an accent word, like "Featured Projects".
export const PageHeader = ({ title, accent, description }) => (
  <header className="text-center mb-12 md:mb-14">
    <h1 className="page-title">
      {title} <span className="text-primary">{accent}</span>
    </h1>
    {description && (
      <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
        {description}
      </p>
    )}
  </header>
);

// Left-aligned sub-section title with a rule underneath (also used for Selected Work).
export const SectionHeader = ({ title, description, link }) => (
  <div className="pb-5 border-b border-border text-left">
    <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
      <h2 className="section-title">{title}</h2>
      {link &&
        (link.to ? (
          <Link to={link.to} className="text-link">
            {link.label}
          </Link>
        ) : (
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            {link.label}
          </a>
        ))}
    </div>
    {description && (
      <p className="mt-2 text-muted-foreground max-w-2xl">{description}</p>
    )}
  </div>
);
