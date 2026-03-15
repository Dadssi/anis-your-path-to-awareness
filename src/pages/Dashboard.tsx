import { motion } from "framer-motion";
import { Flame, Zap, BookOpen, Trophy, Clock, Target, ArrowRight, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import LearnerLayout from "@/components/LearnerLayout";
import { Link } from "react-router-dom";
import { useMemo } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.4 },
  }),
};

// Generate mock activity data
const generateActivityData = () => {
  const data: { date: string; xp: number }[] = [];
  const today = new Date();
  for (let i = 364; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const active = Math.random() > 0.4;
    data.push({
      date: d.toISOString().split("T")[0],
      xp: active ? Math.floor(Math.random() * 200) + 10 : 0,
    });
  }
  return data;
};

const stats = [
  { label: "Modules", value: "12", icon: BookOpen, color: "bg-primary/10 text-primary" },
  { label: "Quizzes", value: "8", icon: Target, color: "bg-secondary/10 text-secondary" },
  { label: "Total XP", value: "2,450", icon: Zap, color: "bg-accent/15 text-accent-foreground" },
  { label: "Badges", value: "6", icon: Trophy, color: "bg-primary/10 text-primary" },
];

const recentBadges = [
  { emoji: "🔥", title: "7-Day Streak", date: "Mar 12" },
  { emoji: "🧠", title: "Quiz Master", date: "Mar 10" },
  { emoji: "⭐", title: "First Module", date: "Mar 5" },
];

const levels = [
  { id: 1, title: "Understanding Basics", status: "completed" as const, modules: 4 },
  { id: 2, title: "Recognizing Patterns", status: "completed" as const, modules: 5 },
  { id: 3, title: "Building Awareness", status: "in-progress" as const, modules: 6, progress: 60 },
  { id: 4, title: "Coping Strategies", status: "locked" as const, modules: 5 },
  { id: 5, title: "Long-term Resilience", status: "locked" as const, modules: 6 },
];

const ActivityGrid = () => {
  const data = useMemo(generateActivityData, []);
  const weeks: { date: string; xp: number }[][] = [];
  for (let i = 0; i < data.length; i += 7) {
    weeks.push(data.slice(i, i + 7));
  }

  const getColor = (xp: number) => {
    if (xp === 0) return "bg-muted";
    if (xp < 50) return "bg-primary/20";
    if (xp < 100) return "bg-primary/40";
    if (xp < 150) return "bg-primary/70";
    return "bg-primary";
  };

  return (
    <div className="overflow-x-auto pb-2">
      <div className="flex gap-[3px] min-w-[680px]">
        {weeks.map((week, wi) => (
          <div key={wi} className="flex flex-col gap-[3px]">
            {week.map((day, di) => (
              <div
                key={di}
                className={`w-3 h-3 rounded-sm ${getColor(day.xp)} transition-colors`}
                title={`${day.date}: ${day.xp} XP`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const Dashboard = () => {
  return (
    <LearnerLayout>
      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Section 1: Welcome Hero */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="rounded-2xl bg-gradient-hero p-6 md:p-8 text-primary-foreground"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-display font-black mb-2">Welcome back, Alex! 👋</h1>
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5">
                  <Flame className="w-5 h-5" /> 12 day streak
                </span>
                <span className="flex items-center gap-1.5">
                  <Zap className="w-5 h-5" /> Level 5
                </span>
              </div>
              <div className="mt-3 flex items-center gap-3">
                <Progress value={65} className="h-3 flex-1 max-w-xs bg-primary-foreground/20 [&>div]:bg-primary-foreground" />
                <span className="text-sm font-bold">2,450 / 3,000 XP</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Section 2: Daily CTA */}
        <motion.div
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="ceramic-surface p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div>
            <p className="font-display font-bold text-lg text-foreground">Ready for your daily 5-minute session?</p>
            <p className="text-muted-foreground">Continue: <span className="text-foreground font-bold">Building Awareness</span></p>
          </div>
          <Link to="/parcours">
            <Button variant="hero" className="gap-2 whitespace-nowrap">
              Continue <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </motion.div>

        {/* Section 3: Stats Grid */}
        <motion.div
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="ceramic-surface p-5 text-center">
              <div className={`w-10 h-10 rounded-xl ${stat.color} flex items-center justify-center mx-auto mb-3`}>
                <stat.icon className="w-5 h-5" />
              </div>
              <p className="text-2xl font-display font-black text-foreground">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Section 4: Activity Calendar */}
        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="ceramic-surface p-6"
        >
          <h2 className="font-display font-bold text-lg text-foreground mb-4">Activity</h2>
          <ActivityGrid />
          <div className="flex items-center gap-2 mt-3 text-xs text-muted-foreground">
            <span>Less</span>
            <div className="flex gap-1">
              <div className="w-3 h-3 rounded-sm bg-muted" />
              <div className="w-3 h-3 rounded-sm bg-primary/20" />
              <div className="w-3 h-3 rounded-sm bg-primary/40" />
              <div className="w-3 h-3 rounded-sm bg-primary/70" />
              <div className="w-3 h-3 rounded-sm bg-primary" />
            </div>
            <span>More</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Section 5: Recent Badges */}
          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="ceramic-surface p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-display font-bold text-lg text-foreground">Recent Badges</h2>
              <Link to="/badges" className="text-sm text-primary font-bold hover:underline">View all</Link>
            </div>
            <div className="flex gap-4">
              {recentBadges.map(badge => (
                <div key={badge.title} className="flex-1 text-center">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-2 text-3xl animate-float" style={{ animationDelay: `${Math.random() * 2}s` }}>
                    {badge.emoji}
                  </div>
                  <p className="font-display font-bold text-sm text-foreground">{badge.title}</p>
                  <p className="text-xs text-muted-foreground">{badge.date}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Section 6: Level Progression */}
          <motion.div
            custom={5}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="ceramic-surface p-6"
          >
            <h2 className="font-display font-bold text-lg text-foreground mb-4">Your Roadmap</h2>
            <div className="space-y-3">
              {levels.map(level => (
                <div
                  key={level.id}
                  className={`flex items-center gap-3 p-3 rounded-xl border transition-colors ${
                    level.status === "completed"
                      ? "border-primary/30 bg-primary/5"
                      : level.status === "in-progress"
                      ? "border-primary bg-primary/10"
                      : "border-border bg-muted/30 opacity-60"
                  }`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    level.status === "completed"
                      ? "bg-primary text-primary-foreground"
                      : level.status === "in-progress"
                      ? "bg-primary/20 text-primary"
                      : "bg-muted text-muted-foreground"
                  }`}>
                    {level.status === "completed" ? "✓" : level.id}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-display font-bold text-sm text-foreground truncate">{level.title}</p>
                    <p className="text-xs text-muted-foreground">{level.modules} modules</p>
                  </div>
                  {level.status === "in-progress" && level.progress && (
                    <Progress value={level.progress} className="w-16 h-2" />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </LearnerLayout>
  );
};

export default Dashboard;
