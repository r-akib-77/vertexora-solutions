export type ProcessStep = {
  index: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    index: "01",
    title: "Discover",
    description: "Understand objectives, users, requirements, and constraints.",
  },
  {
    index: "02",
    title: "Design",
    description: "Define the structure, visual direction, and user experience.",
  },
  {
    index: "03",
    title: "Develop",
    description: "Build the responsive product with maintainable code.",
  },
  {
    index: "04",
    title: "Launch & Refine",
    description: "Test, optimize, deploy, and improve.",
  },
];
