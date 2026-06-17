"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Updated skill set — tailored to your profile
const skills = [
  // Systems Engineering & Simulation
  { name: "Digital Twins", level: 90, category: "systems" },
  { name: "MATLAB/Simulink", level: 80, category: "systems" },
  { name: "ANSYS / FEA", level: 75, category: "systems" },

  // Software Development
  { name: "JavaScript", level: 90, category: "software" },
  { name: "TypeScript", level: 85, category: "software" },
  { name: "React / Next.js", level: 90, category: "software" },
  { name: "Tailwind CSS", level: 90, category: "software" },

  // Infrastructure & Tooling
  { name: "Git / GitHub", level: 95, category: "tools" },
  { name: "Figma", level: 85, category: "tools" },
  { name: "Docker", level: 75, category: "tools" },

  // Hardware / IoT
  { name: "Arduino / ESP32", level: 80, category: "hardware" },
  { name: "Raspberry Pi", level: 70, category: "hardware" },
  { name: "PLC / SCADA", level: 65, category: "hardware" },

  // Data & Control
  { name: "Python", level: 85, category: "data" },
  { name: "Sensor Fusion", level: 70, category: "data" },
  { name: "Machine Learning", level: 65, category: "data" },
];

const categories = ["all", "software", "hardware", "systems", "data", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl font-bold text-center mb-10">🛠️ My Skillset</h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-4 py-2 rounded-full border",
                activeCategory === cat
                  ? "bg-primary text-white"
                  : "bg-white text-muted-foreground hover:bg-primary/10"
              )}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
                className="bg-white p-4 rounded-lg shadow-md"
              >
                <h4 className="font-semibold mb-2 text-muted-foreground">
                  {skill.name}
                </h4>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
