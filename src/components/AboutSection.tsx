import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

const AboutSection = () => {
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
            Who We <span className="text-gradient">Are</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            AdoStack Axis is a forward-thinking technology company dedicated to building software that empowers businesses. We merge innovation with reliability to deliver solutions that truly scale.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass rounded-xl p-8 glow-border"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Target className="text-primary" size={24} />
            </div>
            <h3 className="font-bold text-lg mb-2 text-foreground">Our Mission</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              To deliver cutting-edge software solutions that solve real-world problems, empower teams, and drive digital transformation across industries.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass rounded-xl p-8 glow-border"
          >
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
              <Eye className="text-accent" size={24} />
            </div>
            <h3 className="font-bold text-lg mb-2 text-foreground">Our Vision</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              To be a global leader in software innovation, known for building products that redefine what's possible with modern technology.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
