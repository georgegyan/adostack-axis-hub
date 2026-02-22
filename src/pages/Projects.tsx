import { motion } from "framer-motion";
import ProjectsGrid from "@/components/ProjectsGrid";

const Projects = () => {
  return (
    <div>
      <section className="section-padding pt-28">
        <div className="container mx-auto text-center max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Our <span className="text-gradient">Projects</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg"
          >
            Explore our portfolio of software solutions built for clients worldwide.
          </motion.p>
        </div>
      </section>
      <ProjectsGrid />
    </div>
  );
};

export default Projects;
