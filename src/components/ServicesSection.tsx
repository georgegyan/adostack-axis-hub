import { motion } from "framer-motion";
import { Cloud, Code2, Layout, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Cloud,
    title: "SaaS Platforms",
    description: "End-to-end SaaS development from architecture to deployment. We build multi-tenant, scalable cloud applications.",
  },
  {
    icon: Code2,
    title: "Dev Tools & APIs",
    description: "Custom developer tools, RESTful & GraphQL APIs, SDKs, and integrations that streamline engineering workflows.",
  },
  {
    icon: Layout,
    title: "Frontend & Backend",
    description: "Modern web applications with React, Next.js, Node.js, and cloud-native backend services built for performance.",
  },
  {
    icon: BarChart3,
    title: "Data & Analytics",
    description: "Data pipelines, dashboards, and analytics systems that turn raw data into actionable business intelligence.",
  },
];

const ServicesSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What We <span className="text-gradient">Build</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            From concept to deployment, we deliver software solutions across the full technology stack.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-xl p-6 hover:glow-border transition-shadow group cursor-default"
            >
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="text-primary" size={22} />
              </div>
              <h3 className="font-bold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
