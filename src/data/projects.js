// Projects shown on the Projects page (and the first `featured` ones on Home).
// Each project lives in the engineering-projects repository on GitHub.
//
//   slug         folder name in the repository (also the cover image name)
//   title        project title
//   meta         one line of context (course, institution, date)
//   summary      one sentence, used on the Home page
//   description  the full paragraph shown on the Projects page
//   result       optional headline result
//   tags         up to four short topic pills
//   cover        image in /public/projects, or null (María uses a diagram instead)
//   alt          description of the cover image for screen readers
//   pipeline     optional list of steps, drawn in place of a cover image
//   report       path to the PDF inside the repository
//   video        optional walkthrough link
//   featured     true for the projects shown on the Home page

export const REPO_URL = "https://github.com/nandocastano/engineering-projects";

export const repoFolder = (slug) => `${REPO_URL}/tree/main/${slug}`;
export const repoFile = (path) =>
  `${REPO_URL}/blob/main/${path.split("/").map(encodeURIComponent).join("/")}`;

export const projects = [
  {
    slug: "vawt-traffic-wind-harvester",
    title: "Harvesting Energy from Traffic-Induced Wind",
    meta: "NYU Abu Dhabi capstone · May 2025",
    summary:
      "A roadside vertical-axis turbine with a hand-laid carbon-fibre rotor: about 3.2× the mean voltage of the PLA version.",
    description:
      "A roadside vertical-axis turbine with a hand-laid carbon-fibre rotor, sized from flexural coupon tests and a finite-element study. In logged records it produced about 3.2× the mean voltage of the PLA version. The logger we built to measure it is included. Design details are withheld pending a patent filing.",
    result: "≈ 3.2× the mean voltage of the PLA prototype",
    tags: ["Aerodynamics", "Composites", "FEA", "Instrumentation"],
    cover: "/projects/vawt-traffic-wind-harvester.webp",
    alt: "The vertical-axis turbine prototype on its stand during a roadside field test",
    report: "vawt-traffic-wind-harvester/report/vawt_report.pdf",
    featured: true,
  },
  {
    slug: "kawasaki-ising-model-of-segregation",
    title: "Kawasaki–Ising Model of Segregation",
    meta: "Paper, code and experiments · 2026",
    summary:
      "Does the Monte Carlo sample what we think it does? An exact-checked sampler and paper for a lattice model of segregation.",
    description:
      "A pair-exchange Monte Carlo sampler for the two-dimensional Ising lattice gas, used as a lattice model of residential segregation, and the paper that asks whether its output can be trusted. We derive the exact exchange energy, prove the chain samples the intended distribution, and show that a common variance-peak estimate of the transition scatters by more than the whole composition dependence of the exact Onsager–Yang curve. Every table and figure is generated from stored raw output.",
    result: "Sampler checked against exact solutions on small tori",
    tags: ["Monte Carlo", "Statistical physics", "Python"],
    cover: "/projects/kawasaki-ising-model-of-segregation.webp",
    alt: "Ten snapshots of the simulated lattice as the two groups separate over time",
    report: "kawasaki-ising-model-of-segregation/paper/main.pdf",
    featured: true,
  },
  {
    slug: "tec-refrigerator",
    title: "Thermoelectric Refrigerator",
    meta: "NYU Abu Dhabi · Spring 2025",
    summary:
      "A compressor-less Peltier cooler with PID control that took a chamber from 24 to 18 °C.",
    description:
      "A compressor-less Peltier cooler with Arduino PID control. We tuned the loop from step-response trials, built the thermal stack in three printed generations, and traced MOSFET overheating to an under-driven gate. The chamber went from 24 to 18 °C, short of the 10 °C goal.",
    result: "Chamber 24 → 18 °C",
    tags: ["Control", "Thermal design", "Power electronics", "3D printing"],
    cover: "/projects/tec-refrigerator.webp",
    alt: "The cooler's printed thermal platform with stacked Peltier modules and fans",
    report: "tec-refrigerator/report/refrigerator_report.pdf",
    featured: true,
  },
  {
    slug: "fitpal-emg",
    title: "FitPal: Muscle-Activation Feedback",
    meta: "Team of three · M5Stack Core2",
    summary:
      "EMG biofeedback that tells a lifter whether each repetition worked the target muscle.",
    description:
      "EMG on an M5Stack Core2 that tells a lifter whether each repetition worked the target muscle: filtered 1 kHz sampling, a six-second per-user calibration and a repetition detector, all tested on a PC. Validated in simulation; real-sensor recordings are next.",
    result: "F1 0.995 on 60 simulated sessions",
    tags: ["Embedded", "Signal processing", "EMG"],
    cover: "/projects/fitpal-emg.webp",
    alt: "The FitPal device screens: a start screen, an effective repetition and a not-effective one",
    report: "fitpal-emg/report/fitpal_report.pdf",
  },
  {
    slug: "heat-exchanger-comsol",
    title: "Concentric Heat Exchanger Modelling",
    meta: "NYU Abu Dhabi · Thermal Systems · COMSOL",
    summary:
      "How fine does a mesh need to be? A coarse mesh matched the reference with about half the elements.",
    description:
      "How fine does a mesh need to be? We modelled a tube-in-tube heat exchanger in 3D and 2D, compared nine meshes over three inlet cases, and found that an extremely coarse triangular mesh matched the reference with about half the elements, while the mesh with the most elements gave a wrong profile. Checked qualitatively against bench-top data.",
    result: "About half the elements for the same answer (2D)",
    tags: ["CFD", "Heat transfer", "COMSOL"],
    cover: "/projects/heat-exchanger-comsol.webp",
    alt: "Tetrahedral mesh of the three-dimensional concentric heat-exchanger model",
    report: "heat-exchanger-comsol/report/heat_exchanger_report.pdf",
  },
  {
    slug: "matamata-rover-wheel",
    title: "Matamata Rover Wheel",
    meta: "NYU Abu Dhabi · Spring 2025",
    summary:
      "A planetary-rover wheel with a hexagonal tread inspired by the matamata turtle’s shell.",
    description:
      "A planetary-rover wheel with a hexagonal tread inspired by the matamata turtle’s shell. A 25% scale prototype shows what it took to make the geometry with a desktop printer and a laser cutter.",
    result: "25% scale prototype for $64.50",
    tags: ["Biomimicry", "CAD", "Additive manufacturing"],
    cover: "/projects/matamata-rover-wheel.webp",
    alt: "The 25% scale prototype wheel with its printed hexagonal tread and laser-cut core",
    report: "matamata-rover-wheel/report/matamata_report.pdf",
  },
  {
    slug: "maria-aip-palantir",
    title: "María: Farm Logistics on Palantir Foundry",
    meta: "Palantir Build Challenge",
    summary:
      "Palantir Foundry and AIP for farm logistics, built for the Palantir Build Challenge.",
    description:
      "Palantir Foundry and AIP for farm logistics: an ontology of farm data and sensors, with language-model triage and protocols referenced to FAO guidance. Built for the Palantir Build Challenge.",
    tags: ["Palantir Foundry", "AIP", "Ontology"],
    cover: null,
    pipeline: [
      "Sensor time series and farm records",
      "Foundry ontology",
      "AIP triage",
      "Protocol draft, checked against FAO guidance",
    ],
    report: "maria-aip-palantir/report/maria_aip_report.pdf",
    video: "https://youtu.be/ssvYMJInNas",
  },
];
