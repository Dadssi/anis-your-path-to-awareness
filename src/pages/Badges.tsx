import { Trophy } from "lucide-react";
import { motion } from "framer-motion";
import LearnerLayout from "@/components/LearnerLayout";

const allBadges = [
  { emoji: "🔥", title: "7-Day Streak", category: "engagement", unlocked: true, date: "Mar 12", rarity: "Common" },
  { emoji: "🔥", title: "30-Day Streak", category: "engagement", unlocked: false, rarity: "Rare", condition: "Maintain a 30-day streak" },
  { emoji: "⭐", title: "First Module", category: "progression", unlocked: true, date: "Mar 5", rarity: "Common" },
  { emoji: "🧠", title: "Quiz Master", category: "performance", unlocked: true, date: "Mar 10", rarity: "Uncommon" },
  { emoji: "💎", title: "Perfect Score", category: "performance", unlocked: false, rarity: "Epic", condition: "Score 100% on any quiz" },
  { emoji: "🏆", title: "Level 5 Complete", category: "progression", unlocked: false, rarity: "Rare", condition: "Complete level 5" },
  { emoji: "💪", title: "Consistency King", category: "engagement", unlocked: false, rarity: "Rare", condition: "Log in 50 days total" },
  { emoji: "🎯", title: "Sharpshooter", category: "performance", unlocked: true, date: "Mar 8", rarity: "Uncommon" },
  { emoji: "🌟", title: "Rising Star", category: "progression", unlocked: true, date: "Mar 3", rarity: "Common" },
  { emoji: "🚀", title: "Speed Learner", category: "special", unlocked: false, rarity: "Epic", condition: "Complete 3 modules in 1 day" },
  { emoji: "❤️", title: "Helper", category: "special", unlocked: true, date: "Mar 9", rarity: "Uncommon" },
  { emoji: "🎓", title: "Graduate", category: "progression", unlocked: false, rarity: "Legendary", condition: "Complete all levels" },
];

const rarityColors: Record<string, string> = {
  Common: "text-muted-foreground",
  Uncommon: "text-primary",
  Rare: "text-secondary",
  Epic: "text-accent-foreground",
  Legendary: "text-destructive",
};

const Badges = () => {
  return (
    <LearnerLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-display font-black text-foreground text-center mb-2">Badge Collection</h1>
        <p className="text-center text-muted-foreground mb-8">
          {allBadges.filter(b => b.unlocked).length} / {allBadges.length} unlocked
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {allBadges.map((badge, i) => (
            <motion.div
              key={badge.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className={`ceramic-surface p-5 text-center group cursor-pointer hover:shadow-card-hover transition-all ${
                !badge.unlocked ? "opacity-30 grayscale" : ""
              }`}
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                {badge.emoji}
              </div>
              <p className="font-display font-bold text-sm text-foreground mb-1">{badge.title}</p>
              <p className={`text-xs font-bold ${rarityColors[badge.rarity]}`}>{badge.rarity}</p>
              {badge.unlocked && badge.date && (
                <p className="text-xs text-muted-foreground mt-1">{badge.date}</p>
              )}
              {!badge.unlocked && badge.condition && (
                <p className="text-xs text-muted-foreground mt-1">{badge.condition}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </LearnerLayout>
  );
};

export default Badges;
