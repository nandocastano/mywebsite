import { SITE } from "@/data/site";

export const Footer = () => (
  <footer className="relative px-4 py-10 bg-card/60 border-t border-border">
    <div className="container mx-auto max-w-5xl text-left text-sm flex flex-col gap-6 md:flex-row md:justify-between">
      <div className="space-y-3">
        <p className="text-foreground">
          &copy; {new Date().getFullYear()} {SITE.name}
        </p>
        <p className="flex gap-6 text-foreground/60">
          <span>{SITE.latitude}</span>
          <span>{SITE.longitude}</span>
        </p>
      </div>

      <div className="space-y-1 md:text-right text-foreground/70">
        <p>
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            LinkedIn
          </a>
        </p>
        <p>
          <a href={`mailto:${SITE.email}`} className="text-link">
            {SITE.email}
          </a>
        </p>
      </div>
    </div>
  </footer>
);
