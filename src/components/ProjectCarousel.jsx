import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { repoFile, repoFolder } from "@/data/projects";

const Out = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2.5 font-medium text-foreground hover:text-primary transition-colors"
  >
    <span
      aria-hidden="true"
      className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground text-background"
    >
      <ArrowUpRight size={15} />
    </span>
    {children}
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

const Slide = ({ project, position, total, eager, active }) => (
  <article
    role="group"
    aria-roledescription="slide"
    aria-label={`${position} of ${total}: ${project.title}`}
    className={`shrink-0 grow-0 snap-start grid grid-cols-1 md:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] gap-6 md:gap-10 items-center transition-opacity duration-500 ${active ? "opacity-100" : "opacity-40"}`}
    style={{ width: "calc(100% - var(--peek))" }}
  >
    <div>
      <div className="w-full max-w-[16rem] md:max-w-none mx-auto md:mx-0 aspect-square overflow-hidden border border-border/60 bg-card">
        {project.cover ? (
          <img
            src={project.cover}
            alt={project.alt}
            width="1000"
            height="1000"
            loading={eager ? "eager" : "lazy"}
            decoding="async"
            className="w-full h-full object-cover"
          />
        ) : (
          <Pipeline steps={project.pipeline} />
        )}
      </div>
    </div>

    <div className="flex flex-col gap-3 text-left">
      <h3 className="font-serif text-2xl md:text-4xl font-medium leading-tight tracking-tight">
        {project.title}
      </h3>
      <p className="text-base text-muted-foreground leading-relaxed max-w-md">
        {project.summary}
      </p>
      <div className="pt-3 flex flex-wrap gap-x-6 gap-y-3 text-sm">
        <Out href={repoFile(project.report)}>Report</Out>
        <Out href={repoFolder(project.slug)}>Code</Out>
        {project.video && <Out href={project.video}>Video</Out>}
      </div>
    </div>
  </article>
);

// Distance between the start of one slide and the next.
const stepOf = (track) => {
  const [a, b] = track.children;
  return b ? b.offsetLeft - a.offsetLeft : track.clientWidth;
};

// Swipeable, keyboard-friendly carousel built on native scroll-snap.
// No autoplay: visitors move through the projects at their own pace.
export const ProjectCarousel = ({ projects }) => {
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);
  const total = projects.length;

  const goTo = useCallback(
    (i) => {
      const track = trackRef.current;
      if (!track) return;
      const next = (i + total) % total;
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      track.scrollTo({
        left: next * stepOf(track),
        behavior: reduce ? "auto" : "smooth",
      });
    },
    [total],
  );

  // Keep the counter in step with swipes and button presses.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;
    const onScroll = () =>
      setIndex(Math.round(track.scrollLeft / stepOf(track)));
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  // Re-align the current slide when the window is resized.
  useEffect(() => {
    const onResize = () => {
      const track = trackRef.current;
      if (track) track.scrollTo({ left: index * stepOf(track) });
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [index]);

  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      goTo(index + 1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      goTo(index - 1);
    }
  };

  const buttonClass =
    "flex items-center justify-center h-9 w-9 rounded-full border border-border text-foreground/70 transition-colors duration-150 hover:border-primary/50 hover:text-primary";

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Featured projects"
      onKeyDown={onKeyDown}
      className="text-left"
    >
      <div className="flex items-center justify-end mb-4">
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-1.5">
            {projects.map((project, i) => (
              <button
                key={project.slug}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to project ${i + 1}: ${project.title}`}
                aria-current={i === index}
                className="group py-2"
              >
                <span
                  className={`block h-0.5 rounded-full transition-all duration-300 ${
                    i === index
                      ? "w-8 bg-primary"
                      : "w-4 bg-foreground/20 group-hover:bg-foreground/40"
                  }`}
                />
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              aria-label="Previous project"
              className={buttonClass}
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              aria-label="Next project"
              className={buttonClass}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={trackRef}
        aria-live="polite"
        style={{ "--peek": "var(--carousel-peek)" }}
        className="flex items-start gap-6 md:gap-10 overflow-x-auto snap-x snap-mandatory [--carousel-peek:2.5rem] md:[--carousel-peek:9rem] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {projects.map((project, i) => (
          <Slide
            key={project.slug}
            project={project}
            position={i + 1}
            total={total}
            eager={i === 0}
            active={i === index}
          />
        ))}
        <div
          aria-hidden="true"
          className="shrink-0 w-[calc(var(--peek)-1.5rem)] md:w-[calc(var(--peek)-2.5rem)]"
        />
      </div>
    </section>
  );
};
