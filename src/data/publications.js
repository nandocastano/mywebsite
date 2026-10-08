// Publication list. Add new entries at the top of the right group (newest first).
//
// Each entry:
//   year      shown in the left column
//   title     the paper / talk title
//   doi       optional — makes the title a link (full https://doi.org/... URL)
//   authors   array of names; any name starting with "Castaño" is shown in bold,
//             and "et al." is shown in italics
//   venue     journal / conference name (shown in italics)
//   detail    optional — place, dates, pages, publisher
//   tags      optional — short highlights shown as small pills
export const publicationGroups = [
  {
    title: "Journal Articles",
    items: [
      {
        year: 2026,
        title:
          "Synthetic Polymer-Based Nano Drug Delivery Systems for Precise Alzheimer’s Disease Therapy",
        doi: "https://doi.org/10.69709/CTEC.2026.104050",
        authors: ["Castaño, J.F.", "et al."],
        venue: "SciFiniti",
        detail: "2026",
      },
    ],
  },
  {
    title: "Peer-Reviewed Conference Proceedings",
    items: [
      {
        year: 2026,
        title:
          "Deep Learning-Enabled Origami Microfluidic Device for Oil Quality Assessment",
        authors: ["Castaño, J.F.", "et al."],
        venue: "AURAK Biotechnology Conference",
        detail: "2026",
        tags: ["First author", "Awarded 3rd place"],
      },
      {
        year: 2025,
        title: "Paper Microfluidic Origami Device for Detection of Edible Oil Quality",
        authors: [
          "Sukumar, P.",
          "Castaño, F.",
          "Deliorman, M.",
          "Ali, L.S.",
          "Abujalban, D.H.",
          "Alu Datt, M.",
          "Qasaimeh, M.A.",
        ],
        venue: "Diagnostics for Global Health, Global Health Workshop 2025",
        detail: "Virtual Conference, June 17–18, 2025",
      },
      {
        year: 2023,
        title: "Fluidic Manipulation of a Paper Origami for Oil Quality Testing",
        doi: "https://doi.org/10.1109/MARSS58567.2023.10294158",
        authors: [
          "Sukumar, P.",
          "Deliorman, M.",
          "Castaño, F.",
          "Ali, L.S.",
          "Abujalban, D.H.",
          "Alu Datt, M.",
          "Qasaimeh, M.A.",
        ],
        venue:
          "International Conference on Manipulation, Automation and Robotics at Small Scales (MARSS)",
        detail: "IEEE, pp. 1–6, 2023",
      },
      {
        year: 2023,
        title: "Origami Paper Microfluidic Assay to Test Edible Oil Quality",
        authors: [
          "Sukumar, P.",
          "Deliorman, M.",
          "Castaño, F.",
          "Abujalban, D.H.",
          "Alu Datt, M.",
          "Qasaimeh, M.A.",
        ],
        venue:
          "27th International Conference on Miniaturized Systems for Chemistry and Life Sciences (MicroTAS)",
        detail: "Katowice, Poland, October 15–19, 2023",
      },
    ],
  },
  {
    title: "Presentations (Oral / Poster)",
    items: [
      {
        year: 2023,
        title: "Microfluidic Origami Platform for Edible Oil Quality",
        authors: [
          "Sukumar, P.",
          "Deliorman, M.",
          "Castaño, F.",
          "Ali, L.S.",
          "Abujalban, D.H.",
          "Datt, M.A.",
          "Qasaimeh, M.A.",
        ],
        venue: "1st UAE Thermo-Fluids Day",
        detail: "Khalifa University, Abu Dhabi, UAE, November 25, 2023",
        tags: ["Oral talk"],
      },
      {
        year: 2023,
        title: "Microfluidic Paper Platform for Detection of Oil Quality",
        authors: [
          "Sukumar, P.",
          "Deliorman, M.",
          "Castaño, F.",
          "Ali, L.S.",
          "Abujalban, D.H.",
          "Datt, M.A.",
          "Qasaimeh, M.A.",
        ],
        venue:
          "International Conference on Digitization and Advancements in Materials and Metallurgical Industries (ICDAMMI)",
        detail: "Jaipur, India, August 19–20, 2023",
        tags: ["Oral talk"],
      },
    ],
  },
];
