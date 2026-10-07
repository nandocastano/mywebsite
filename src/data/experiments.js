// The Engineering Lab is hidden on the live site until these entries are
// confirmed as real work. Set to true to show it.
export const SHOW_ENGINEERING_LAB = false;

// Add a `githubUrl` to any entry to make its card a link.
export const experiments = [
  {
    id: 1,
    name: "turbulence-signal-classifier",
    purpose: "Testing vortex energy capture stability under noisy flow conditions.",
    stack: ["Python", "SciPy", "FFT"],
    status: "Research",
    githubUrl: null,
  },
  {
    id: 2,
    name: "blade-geometry-optimizer",
    purpose: "Parametric sweep of airfoil camber vs. lift coefficient across AoA range.",
    stack: ["XFOIL", "Python", "Matplotlib"],
    status: "Prototype",
    githubUrl: null,
  },
  {
    id: 3,
    name: "microfluidic-channel-sim",
    purpose: "Exploring laminar-to-turbulent transition in sub-mm channel geometries.",
    stack: ["OpenFOAM", "ParaView"],
    status: "Experimental",
    githubUrl: null,
  },
  {
    id: 4,
    name: "sensor-fusion-logger",
    purpose: "Fusing IMU + pressure data for real-time flow regime estimation.",
    stack: ["C++", "Kalman", "RTOS"],
    status: "In Progress",
    githubUrl: null,
  },
  {
    id: 5,
    name: "vortex-energy-model",
    purpose: "Analytical model for extractable energy from Karman vortex streets at small scale.",
    stack: ["MATLAB", "LaTeX"],
    status: "Research",
    githubUrl: null,
  },
  {
    id: 6,
    name: "piezo-capture-rig",
    purpose: "Piezo array couldn't sustain resonance — material fatigue at 40Hz. Documented failure modes.",
    stack: ["Hardware", "Piezo"],
    status: "Experimental",
    githubUrl: null,
  },
];
