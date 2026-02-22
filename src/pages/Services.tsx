import { motion } from "framer-motion";
import { Cloud, Code2, Layout, BarChart3, CheckCircle } from "lucide-react";

const services = [
  {
    icon: Cloud,
    title: "SaaS Platforms",
    description: "We design, build, and scale multi-tenant SaaS applications with modern architectures. From authentication to billing, we handle the full stack.",
    features: ["Multi-tenant architecture", "Subscription management", "Cloud-native deployment", "Auto-scaling infrastructure"],
  },
  {
    icon: Code2,
    title: "Dev Tools & APIs",
    description: "Custom developer tools, REST & GraphQL APIs, CLI utilities, and SDK development that accelerate engineering productivity.",
    features: ["RESTful & GraphQL APIs", "SDK development", "CLI tools", "Third-party integrations"],
  },
  {
    icon: Layout,
    title: "Frontend & Backend Solutions",
    description: "Full-stack web applications built with modern frameworks. Responsive UIs paired with performant, secure backend services.",
    features: ["React / Next.js frontends", "Node.js / Python backends", "Real-time features", "Progressive Web Apps"],
  },
  {
    icon: BarChart3,
    title: "Data & Analytics Systems",
    description: "End-to-end data solutions from pipelines to dashboards. We help you collect, process, and visualize data at scale.",
    features: ["ETL pipelines", "Real-time dashboards", "Custom reporting", "Machine learning integration"],
  },
];

const Services = () => {
  return (
    <div>
      <section className="section-padding pt-28">
        <div className="container mx-auto text-center max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Our <span className="text-gradient">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg"
          >
            Comprehensive software engineering services built for scale, performance, and reliability.
          </motion.p>
        </div>
      </section>

      <section className="section-padding pt-8">
        <div className="container mx-auto space-y-8 max-w-4xl">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-xl p-8 glow-border"
            >
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <service.icon className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.description}</p>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {service.features.map((f) => (
                      <div key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle size={14} className="text-primary shrink-0" />
                        {f}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
