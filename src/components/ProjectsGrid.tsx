import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "CloudSync Dashboard",
    description: "Real-time cloud monitoring and analytics platform for DevOps teams.",
    stack: ["React", "Node.js", "AWS", "PostgreSQL"],
  },
  {
    title: "PayFlow API",
    description: "High-throughput payment processing API with multi-currency support.",
    stack: ["Go", "gRPC", "Redis", "Stripe"],
  },
  {
    title: "DataLens Analytics",
    description: "Business intelligence dashboard with custom reporting and data visualization.",
    stack: ["Next.js", "Python", "BigQuery", "D3.js"],
  },
  {
    title: "DevPulse CLI",
    description: "Developer productivity tool for CI/CD pipeline management and monitoring.",
    stack: ["Rust", "TypeScript", "Docker", "GitHub Actions"],
  },
  {
    title: "HealthTrack SaaS",
    description: "HIPAA-compliant patient management system for healthcare providers.",
    stack: ["React", "Django", "PostgreSQL", "Azure"],
  },
  {
    title: "EduConnect Platform",
    description: "Learning management system with live collaboration and assessment tools.",
    stack: ["Vue.js", "Firebase", "WebRTC", "TailwindCSS"],
  },
];

const ProjectsGrid = () => {
  return (
    <section className="section-padding bg-navy-deep">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A selection of solutions we've engineered for clients across industries.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-xl overflow-hidden group hover:glow-border transition-shadow"
            >
              <div className="h-40 bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center">
                <span className="text-4xl font-black text-primary/30">{project.title.charAt(0)}</span>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-foreground">{project.title}</h3>
                  <ExternalLink size={16} className="text-muted-foreground mt-1 group-hover:text-primary transition-colors" />
                </div>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="text-xs px-2.5 py-1 rounded-md bg-muted text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
