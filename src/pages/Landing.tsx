import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Ghost, BookOpen, Flame, Shield, ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";
import PublicLayout from "@/components/PublicLayout";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

const features = [
  {
    icon: Ghost,
    title: "100% Anonymous",
    description: "No real names. No tracking. Your journey is completely private.",
  },
  {
    icon: BookOpen,
    title: "Science-Based",
    description: "Content developed with health professionals and latest research.",
  },
  {
    icon: Flame,
    title: "Streaks & Rewards",
    description: "Build daily habits with XP, badges, and streak tracking.",
  },
];

const badges = ["🏆", "🔥", "⭐", "💎", "🎯", "🌟", "🏅", "💪", "🧠", "❤️", "🎓", "🚀"];

const Landing = () => {
  return (
    <PublicLayout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 py-20 md:py-32 relative">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              custom={0}
              variants={fadeUp}
              className="text-5xl md:text-7xl font-display font-black tracking-tight text-foreground leading-tight mb-6"
            >
              Take the lead on your life,{" "}
              <span className="text-gradient-hero">one level at a time.</span>
            </motion.h1>
            <motion.p
              custom={1}
              variants={fadeUp}
              className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-xl mx-auto"
            >
              A private, gamified path to understanding addiction. No judgment — just progress.
            </motion.p>
            <motion.div custom={2} variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/register">
                <Button variant="hero" size="xl" className="gap-2">
                  Start Learning <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="outline" size="xl">
                  Log In
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="ceramic-surface p-8 text-center hover:shadow-card-hover transition-shadow duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display font-bold text-xl mb-2 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Anonymity Guarantee */}
      <section className="bg-primary/8 py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Shield className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-display font-black text-foreground mb-4">
              No names. No judgment.
            </h2>
            <p className="text-2xl md:text-3xl font-display font-bold text-gradient-hero">
              Just progress.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="container mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-muted-foreground mb-6">Join 5,000+ others on their journey</p>
          <div className="flex items-center justify-center gap-1 mb-8">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-accent text-accent" />
            ))}
          </div>
          {/* Badge ticker */}
          <div className="overflow-hidden max-w-lg mx-auto">
            <motion.div
              className="flex gap-6 text-3xl"
              animate={{ x: [0, -200] }}
              transition={{ duration: 8, repeat: Infinity, repeatType: "loop", ease: "linear" }}
            >
              {[...badges, ...badges].map((badge, i) => (
                <span key={i} className="flex-shrink-0">{badge}</span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="ceramic-surface max-w-2xl mx-auto p-12">
          <h2 className="text-3xl font-display font-black text-foreground mb-4">
            Ready to start your journey?
          </h2>
          <p className="text-muted-foreground mb-8">5 minutes a day is all it takes.</p>
          <Link to="/register">
            <Button variant="hero" size="xl" className="gap-2">
              Create My Account <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </PublicLayout>
  );
};

export default Landing;
