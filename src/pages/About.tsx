import { motion } from "framer-motion";
import { Target, Eye, Users } from "lucide-react";

const team = [
  { name: "Alex Carter", role: "CEO & Founder", initials: "AC" },
  { name: "Mia Chen", role: "CTO", initials: "MC" },
  { name: "Daniel Okoro", role: "Lead Engineer", initials: "DO" },
  { name: "Sara Patel", role: "Design Director", initials: "SP" },
];

const About = () => {
  return (
    <div>
      {/* Hero */}
      <section className="section-padding pt-28">
        <div className="container mx-auto text-center max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            About <span className="text-gradient">AdoStack Axis</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg leading-relaxed"
          >
            Founded on the belief that great software should be both innovative and reliable, AdoStack Axis brings together a team of passionate engineers, designers, and strategists dedicated to building the future of technology.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-navy-deep">
        <div className="container mx-auto grid md:grid-cols-2 gap-8 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-xl p-8 glow-border"
          >
            <Target className="text-primary mb-4" size={28} />
            <h3 className="font-bold text-xl mb-3 text-foreground">Mission</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              To deliver cutting-edge, reliable software that solves real problems and drives meaningful digital transformation for businesses of every size.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-xl p-8 glow-border"
          >
            <Eye className="text-accent mb-4" size={28} />
            <h3 className="font-bold text-xl mb-3 text-foreground">Vision</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              To be a global leader in software engineering, setting the standard for products that balance bold innovation with rock-solid stability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Users className="text-primary mx-auto mb-4" size={28} />
            <h2 className="text-3xl font-bold mb-4">Our <span className="text-gradient">Team</span></h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-12">
              A multidisciplinary team of builders, thinkers, and creators.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-xl p-6 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-3 text-primary-foreground font-bold text-lg">
                  {member.initials}
                </div>
                <h4 className="font-semibold text-sm text-foreground">{member.name}</h4>
                <p className="text-xs text-muted-foreground mt-1">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
