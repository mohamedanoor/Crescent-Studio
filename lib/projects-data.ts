export interface Project {
  id: number;
  name: string;
  category: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  status?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    name: "Holding Care",
    category: "Web Design & Development",
    description: "Full-service website for a home health care company in Portland, Maine. Built with Next.js and Tailwind CSS — featuring service pages, a careers section with job application form, and contact forms connected to Resend.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Resend"],
    liveUrl: "https://holdingcare.co",
    status: "Live",
    
  },
  {    
    id: 2,
    name: " Portfolio",
    category: "Portfolio & Personal Branding",
    description: "Personal portfolio site for a General Manager and technologist based in Portland, Maine. Built with Next.js featuring dark mode by default, Geist font, and a clean minimal layout showcasing professional background and projects.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Resend"],
    liveUrl: "https://mohamednoor.com",
    status: "Live",
},
{
    id: 3,
    name: "LuminCards",
    category: "Project",
    description: "A full-stack web app that transforms any text, topic, or uploaded document into structured study flashcards using Claude AI. Features three study modes, user authentication, deck sharing, PDF export, and a study analytics dashboard.",
    liveUrl:"https://lumincards.app",
    tags:["Python", "Flask", "PostgreSQL", "Claude AI", "JavaScript"],
    status: "Live",
  },
];
