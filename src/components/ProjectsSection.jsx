import { useState, useEffect } from "react";
import { ArrowRight, ExternalLink, Github, Clock, BookOpen } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "MicroTurbine: force-capture unit",
    description: "Unique airfoil design that harnesses both drag and lift forces.",
    image: "/projects/project1.png",
    tags: ["Aerospace", "Fluid Dynamics", "Control", "Electrical Eng."],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Orbit Analytics Dashboard",
    description: "Interactive analytics dashboard with data visualization and filtering capabilities.",
    image: "/projects/project2.png",
    tags: ["TypeScript", "D3.js", "Next.js"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description: "Full-featured e-commerce platform with user authentication and payment processing.",
    image: "/projects/project3.png",
    tags: ["React", "Node.js", "Stripe"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

const experiments = [
  {
    id: 1,
    name: "turbulence-signal-classifier",
    purpose: "Testing vortex energy capture stability under noisy flow conditions.",
    stack: ["Python", "SciPy", "FFT"],
    status: "Research",
    githubUrl: "#",
  },
  {
    id: 2,
    name: "blade-geometry-optimizer",
    purpose: "Parametric sweep of airfoil camber vs. lift coefficient across AoA range.",
    stack: ["XFOIL", "Python", "Matplotlib"],
    status: "Prototype",
    githubUrl: "#",
  },
  {
    id: 3,
    name: "microfluidic-channel-sim",
    purpose: "Exploring laminar-to-turbulent transition in sub-mm channel geometries.",
    stack: ["OpenFOAM", "ParaView"],
    status: "Experimental",
    githubUrl: "#",
  },
  {
    id: 4,
    name: "sensor-fusion-logger",
    purpose: "Fusing IMU + pressure data for real-time flow regime estimation.",
    stack: ["C++", "Kalman", "RTOS"],
    status: "In Progress",
    githubUrl: "#",
  },
  {
    id: 5,
    name: "vortex-energy-model",
    purpose: "Analytical model for extractable energy from Karman vortex streets at small scale.",
    stack: ["MATLAB", "LaTeX"],
    status: "Research",
    githubUrl: "#",
  },
  {
    id: 6,
    name: "piezo-capture-rig",
    purpose: "Piezo array couldn't sustain resonance — material fatigue at 40Hz. Documented failure modes.",
    stack: ["Hardware", "Piezo"],
    status: "Experimental",
    githubUrl: "#",
  },
];

const statusColors = {
  Research: "bg-purple-100 text-purple-700 border-purple-300",
  Prototype: "bg-amber-100 text-amber-700 border-amber-300",
  "In Progress": "bg-green-100 text-green-700 border-green-300",
  Experimental: "bg-orange-100 text-orange-700 border-orange-300",
};

const MEDIUM_USERNAME = "YOUR_MEDIUM_USERNAME";
const RSS_URL = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${MEDIUM_USERNAME}`;

export const ProjectsSection = () => {
  const [posts, setPosts] = useState([]);
  const [postsLoading, setPostsLoading] = useState(true);

  useEffect(() => {
    fetch(RSS_URL)
      .then((r) => r.json())
      .then((data) => {
        if (data.status === "ok") {
          setPosts(data.items.slice(0, 3));
        }
      })
      .catch(() => {})
      .finally(() => setPostsLoading(false));
  }, []);

  const readTime = (content = "") => {
    const words = content.replace(/<[^>]+>/g, "").split(/\s+/).length;
    return `${Math.max(1, Math.round(words / 200))} min read`;
  };

  const formatDate = (dateStr) =>
    new Date(dateStr).toLocaleDateString("en-US", { month: "short", year: "numeric" });

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">

        {/* Featured Projects */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Some of my latest engineering projects, driven by data, and built to reshape how we power, automate, and sustain our world.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a href={project.demoUrl} target="_blank" rel="noreferrer" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                      <ExternalLink size={20} />
                    </a>
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/machadop1407"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>

        {/* Latest Writing */}
        <div className="mt-24">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen size={20} className="text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold">
              Latest <span className="text-primary">Writing</span>
            </h2>
          </div>
          <p className="text-muted-foreground mb-10 max-w-2xl">
            Engineering notes and systems thinking — ideas too long for a commit message.
          </p>

          {postsLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-card rounded-lg p-6 animate-pulse">
                  <div className="h-3 bg-secondary rounded w-1/3 mb-4" />
                  <div className="h-4 bg-secondary rounded w-full mb-2" />
                  <div className="h-4 bg-secondary rounded w-3/4 mb-4" />
                  <div className="h-3 bg-secondary rounded w-1/2" />
                </div>
              ))}
            </div>
          ) : posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {posts.map((post) => (
                <a
                  key={post.guid}
                  href={post.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group bg-card rounded-lg p-6 border border-border hover:border-primary/50 transition-colors duration-300 card-hover flex flex-col"
                >
                  <span className="text-xs font-medium text-primary uppercase tracking-wider mb-3">
                    Engineering Notes
                  </span>
                  <h3 className="font-semibold text-foreground mb-2 leading-snug group-hover:text-primary transition-colors duration-300 flex-1">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {post.description?.replace(/<[^>]+>/g, "").slice(0, 120)}...
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mt-auto">
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {readTime(post.content)}
                    </span>
                    <span>{formatDate(post.pubDate)}</span>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Why most energy harvesting designs leave efficiency on the table", time: "8 min read", date: "Jun 2025" },
                { title: "Modeling turbulent flow with cheap sensors: a signal processing approach", time: "6 min read", date: "May 2025" },
                { title: "Data pipelines for physical systems: what software engineers get wrong", time: "5 min read", date: "Apr 2025" },
              ].map((post, i) => (
                <div key={i} className="bg-card rounded-lg p-6 border border-border flex flex-col">
                  <span className="text-xs font-medium text-primary uppercase tracking-wider mb-3">
                    Engineering Notes
                  </span>
                  <h3 className="font-semibold text-foreground mb-2 leading-snug flex-1">
                    {post.title}
                  </h3>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mt-auto">
                    <span className="flex items-center gap-1"><Clock size={12} />{post.time}</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="text-center mt-8">
            <a
              href={`https://medium.com/@${MEDIUM_USERNAME}`}
              target="_blank"
              rel="noreferrer"
              className="cosmic-button w-fit flex items-center mx-auto gap-2"
            >
              All posts on Medium <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* Engineering Lab */}
        <div className="mt-24">
          <div className="flex items-center gap-3 mb-4">
            <Github size={20} className="text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold">
              Engineering <span className="text-primary">Lab</span>
            </h2>
          </div>
          <p className="text-muted-foreground mb-10 max-w-2xl">
            Not polished — but real. Simulations, failed prototypes, research notebooks, and tools in progress.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {experiments.map((exp) => (
              <a
                key={exp.id}
                href={exp.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="group bg-card rounded-lg p-5 border border-border hover:border-primary/50 transition-colors duration-300 card-hover flex flex-col gap-3"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2 text-foreground/80 group-hover:text-primary transition-colors duration-300">
                    <Github size={15} />
                    <span className="text-sm font-mono font-medium">{exp.name}</span>
                  </div>
                  <span className={`text-xs px-2 py-0.5 rounded-full border font-medium shrink-0 ${statusColors[exp.status]}`}>
                    {exp.status}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm italic leading-relaxed">
                  "{exp.purpose}"
                </p>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {exp.stack.map((s) => (
                    <span key={s} className="px-2 py-0.5 text-xs border rounded-full bg-secondary text-secondary-foreground">
                      {s}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              className="cosmic-button w-fit flex items-center mx-auto gap-2"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/machadop1407"
            >
              Full lab on GitHub <ArrowRight size={16} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
