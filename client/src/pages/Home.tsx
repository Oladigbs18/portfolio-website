import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";

/**
 * Portfolio Website - Modern Minimalist Design
 * Design Philosophy: Clean typography, strategic whitespace, geometric accents
 * Color Palette: Cream background, deep charcoal text, teal accents
 * Typography: Playfair Display (headings), Inter (body), IBM Plex Mono (code)
 */

interface Project {
  id: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  deliverables: string[];
  figmaLink: string;
}

const projects: Project[] = [
  {
    id: "fintech",
    title: "Fintech Mobile App Redesign",
    description: "A modern financial management experience focused on clarity, trust, and ease of use.",
    problem: "Users struggle to track spending and manage transactions efficiently.",
    solution: "Designed a clean fintech dashboard with expense tracking, budget overview, transaction history, and savings goals.",
    deliverables: ["User flow", "Low-fidelity wireframes", "High-fidelity screens", "Interactive prototype"],
    figmaLink: "https://rise-recap-67005995.figma.site/",
  },
  {
    id: "ecommerce",
    title: "E-Commerce Fashion Store",
    description: "An intuitive shopping experience designed to improve conversion and customer satisfaction.",
    problem: "Customers abandon purchases due to confusing navigation.",
    solution: "Created a seamless shopping experience with product catalog, detail pages, shopping cart, and optimized checkout flow.",
    deliverables: ["Product catalog", "Product detail page", "Shopping cart", "Checkout flow"],
    figmaLink: "https://omen-open-45063717.figma.site/",
  },
  {
    id: "community",
    title: "Community Analytics Dashboard",
    description: "A data-driven dashboard that helps community managers monitor engagement and member growth.",
    problem: "Community managers lack visibility into engagement metrics and member activity.",
    solution: "Built an analytics dashboard with member analytics, rewards tracking, event management, and engagement metrics.",
    deliverables: ["Dashboard layout", "Analytics visualizations", "Real-time data display", "Export functionality"],
    figmaLink: "https://quartz-gauge-34589032.figma.site/",
  },
];

const skills = {
  design: ["UI Design in Figma", "Design Systems and Components", "Wireframing and Prototyping", "Visual Hierarchy and Typography", "User-Centered Design"],
  soft: ["Communication", "Stakeholder Management", "Problem Solving", "Community Building", "Leadership"],
  tools: ["Figma", "FigJam", "Canva", "Adobe Express"],
};

const designProcess = [
  { step: 1, title: "Research & Discovery", description: "Understanding user needs and business goals." },
  { step: 2, title: "Wireframing", description: "Structuring information and user flows." },
  { step: 3, title: "Visual Design", description: "Applying typography, color systems, and layouts." },
  { step: 4, title: "Prototyping", description: "Creating interactive experiences for testing and validation." },
  { step: 5, title: "Iteration", description: "Refining designs based on feedback and usability insights." },
];

export default function Home() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="text-2xl font-bold font-serif">Aaliyah Oladigbolu</div>
          <div className="flex items-center gap-8">
            <a href="#work" className="text-sm hover:text-accent transition-colors">Work</a>
            <a href="#process" className="text-sm hover:text-accent transition-colors">Process</a>
            <a href="#skills" className="text-sm hover:text-accent transition-colors">Skills</a>
            <a href="#contact" className="text-sm hover:text-accent transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663490559998/iSWd6cdnEkqRLLVwheuuWa/hero-background-J7D9KEQdwahQumfyB4Wj86.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <div className="mb-6 text-accent font-mono text-sm tracking-widest">UI DESIGNER</div>
            <h1 className="mb-6 leading-tight">Designing intuitive digital experiences</h1>
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed max-w-xl">
              I'm a technology professional focused on UI design, developing interfaces for web and mobile products using Figma. I transform complex ideas into simple, intuitive, and visually appealing user experiences.
            </p>
            <div className="flex gap-4">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300"
                onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
              >
                View My Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-foreground/30 hover:border-accent hover:text-accent transition-colors"
              >
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-background border-t border-border">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="mb-6">About Me</h2>
              <p className="text-foreground/80 mb-4 leading-relaxed">
                I'm a technology professional with experience managing digital communities, coordinating product initiatives, and working closely with users across Web3 and technology ecosystems. My background has given me a strong understanding of user behavior, product adoption, communication, and digital experiences.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Over the past year, I have focused on UI design, developing interfaces for web and mobile products using Figma. I enjoy transforming complex ideas into simple, intuitive, and visually appealing user experiences. I am passionate about creating digital products that are both beautiful and easy to use.
              </p>
            </div>
            <div className="space-y-6">
              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-sm font-mono text-accent mb-2">My Strengths</h3>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">→</span>
                    <span>UI Design in Figma</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">→</span>
                    <span>Design Systems and Components</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">→</span>
                    <span>User-Centered Design</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">→</span>
                    <span>Cross-functional Collaboration</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="work" className="py-24 bg-secondary/20">
        <div className="container">
          <div className="mb-16">
            <h2 className="mb-4">Selected Work</h2>
            <div className="w-16 h-1 bg-accent" />
          </div>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="pb-8 border-b border-border/50">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="text-accent text-sm font-mono mb-2">Project {index + 1}</div>
                      <h3 className="text-2xl mb-3 group-hover:text-accent transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-foreground/70 mb-6 max-w-2xl leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 mb-6">
                    <div>
                      <h4 className="text-sm font-mono text-foreground/60 mb-2">Problem</h4>
                      <p className="text-foreground/80">{project.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-mono text-foreground/60 mb-2">Solution</h4>
                      <p className="text-foreground/80">{project.solution}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-mono text-foreground/60 mb-3">Deliverables</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.deliverables.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1 bg-background border border-border/50 rounded text-sm text-foreground/70"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={project.figmaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent hover:gap-3 transition-all duration-300 font-medium"
                  >
                    View on Figma
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process Section */}
      <section id="process" className="py-24 bg-background">
        <div className="container">
          <div className="mb-16">
            <h2 className="mb-4">Design Process</h2>
            <div className="w-16 h-1 bg-accent" />
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {designProcess.map((item, index) => (
              <div key={item.step} className="relative">
                {index < designProcess.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-full w-8 h-0.5 bg-border/50" />
                )}
                <div className="flex flex-col items-start">
                  <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold mb-4">
                    {item.step}
                  </div>
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-foreground/70">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-secondary/20">
        <div className="container">
          <div className="mb-16">
            <h2 className="mb-4">Skills & Tools</h2>
            <div className="w-16 h-1 bg-accent" />
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <span className="w-1 h-6 bg-accent" />
                Design Tools
              </h3>
              <ul className="space-y-3">
                {skills.tools.map((skill) => (
                  <li key={skill} className="text-foreground/80 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <span className="w-1 h-6 bg-accent" />
                UI Design
              </h3>
              <ul className="space-y-3">
                {skills.design.map((skill) => (
                  <li key={skill} className="text-foreground/80 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <span className="w-1 h-6 bg-accent" />
                Soft Skills
              </h3>
              <ul className="space-y-3">
                {skills.soft.map((skill) => (
                  <li key={skill} className="text-foreground/80 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-background border-t border-border">
        <div className="container text-center">
          <h2 className="mb-4">Let's Connect</h2>
          <p className="text-foreground/70 mb-12 max-w-xl mx-auto">
            I'm always interested in hearing about new projects and opportunities. Feel free to reach out if you'd like to collaborate or just say hello.
          </p>

          <div className="flex justify-center gap-6 mb-12">
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded hover:bg-accent/90 transition-colors"
            >
              <Mail size={18} />
              Email Me
            </a>
            <a
              href="https://linkedin.com/in/aaliyah-oladigbolu-54a452244"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border hover:border-accent hover:text-accent rounded transition-colors"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
            <a
              href="https://github.com/Oladigbs18"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border hover:border-accent hover:text-accent rounded transition-colors"
            >
              <Github size={18} />
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-secondary/30 border-t border-border">
        <div className="container text-center text-sm text-foreground/60">
          <p>© 2024 Aaliyah Oladigbolu. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
