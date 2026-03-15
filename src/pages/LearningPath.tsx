import { motion } from "framer-motion";
import { Lock, Check, Zap, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import LearnerLayout from "@/components/LearnerLayout";

const pathNodes = [
  { id: 1, title: "Understanding Basics", xp: 500, modules: 4, status: "completed" as const },
  { id: 2, title: "Recognizing Patterns", xp: 750, modules: 5, status: "completed" as const },
  { id: 3, title: "Building Awareness", xp: 1000, modules: 6, status: "current" as const },
  { id: 4, title: "Coping Strategies", xp: 1200, modules: 5, status: "locked" as const },
  { id: 5, title: "Long-term Resilience", xp: 1500, modules: 6, status: "locked" as const },
  { id: 6, title: "Helping Others", xp: 2000, modules: 7, status: "locked" as const },
];

const LearningPath = () => {
  return (
    <LearnerLayout>
      <div className="container mx-auto px-4 py-8 max-w-lg">
        <h1 className="text-3xl font-display font-black text-foreground text-center mb-2">Your Path</h1>
        <p className="text-center text-muted-foreground mb-12">Complete each level to unlock the next</p>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-border -translate-x-1/2 rounded-full" />

          <div className="space-y-8 relative">
            {pathNodes.map((node, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={node.id}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="relative flex items-center"
                >
                  {/* Node circle in center */}
                  <div className="absolute left-1/2 -translate-x-1/2 z-10">
                    <div
                      className={`w-14 h-14 rounded-full flex items-center justify-center shadow-card transition-all ${
                        node.status === "completed"
                          ? "bg-primary text-primary-foreground"
                          : node.status === "current"
                          ? "bg-primary/15 border-[3px] border-primary text-primary"
                          : "bg-muted text-muted-foreground border border-border"
                      }`}
                    >
                      {node.status === "completed" ? (
                        <Check className="w-6 h-6" />
                      ) : node.status === "current" ? (
                        <BookOpen className="w-6 h-6" />
                      ) : (
                        <Lock className="w-5 h-5" />
                      )}
                    </div>
                    {node.status === "current" && (
                      <div className="absolute inset-0 rounded-full border-2 border-primary animate-pulse-ring" />
                    )}
                  </div>

                  {/* Card */}
                  <div
                    className={`w-[calc(50%-44px)] ${isLeft ? "" : "ml-auto"}`}
                  >
                    <div
                      className={`ceramic-surface p-4 ${
                        node.status === "current" ? "border-primary/40 border-2" : ""
                      } ${node.status === "locked" ? "opacity-50" : ""}`}
                    >
                      <h3 className="font-display font-bold text-foreground text-sm mb-1">
                        Level {node.id}: {node.title}
                      </h3>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                        <span className="flex items-center gap-1"><BookOpen className="w-3 h-3" /> {node.modules} modules</span>
                        <span className="flex items-center gap-1"><Zap className="w-3 h-3" /> {node.xp} XP</span>
                      </div>
                      {node.status === "current" && (
                        <Button size="sm" className="w-full text-xs">Continue</Button>
                      )}
                      {node.status === "completed" && (
                        <span className="text-xs text-primary font-bold">✓ Completed</span>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </LearnerLayout>
  );
};

export default LearningPath;
