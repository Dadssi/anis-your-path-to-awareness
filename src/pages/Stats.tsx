import LearnerLayout from "@/components/LearnerLayout";
import { useMemo } from "react";

const generateActivityData = () => {
  const data: { date: string; xp: number }[] = [];
  const today = new Date();
  for (let i = 364; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    data.push({ date: d.toISOString().split("T")[0], xp: Math.random() > 0.4 ? Math.floor(Math.random() * 200) + 10 : 0 });
  }
  return data;
};

const Stats = () => {
  const data = useMemo(generateActivityData, []);
  const weeks: typeof data[] = [];
  for (let i = 0; i < data.length; i += 7) weeks.push(data.slice(i, i + 7));

  const getColor = (xp: number) => {
    if (xp === 0) return "bg-muted";
    if (xp < 50) return "bg-primary/20";
    if (xp < 100) return "bg-primary/40";
    if (xp < 150) return "bg-primary/70";
    return "bg-primary";
  };

  const milestones = [
    { title: "Reached Level 5", date: "Mar 12", emoji: "🎯" },
    { title: "7-Day Streak", date: "Mar 10", emoji: "🔥" },
    { title: "First Perfect Score", date: "Mar 8", emoji: "💎" },
    { title: "Started Journey", date: "Mar 1", emoji: "🚀" },
  ];

  return (
    <LearnerLayout>
      <div className="container mx-auto px-4 py-8 max-w-3xl space-y-8">
        <h1 className="text-3xl font-display font-black text-foreground text-center">Your Stats</h1>

        {/* Activity grid */}
        <div className="ceramic-surface p-6">
          <h2 className="font-display font-bold text-lg text-foreground mb-4">365-Day Activity</h2>
          <div className="overflow-x-auto pb-2">
            <div className="flex gap-[3px] min-w-[680px]">
              {weeks.map((week, wi) => (
                <div key={wi} className="flex flex-col gap-[3px]">
                  {week.map((day, di) => (
                    <div key={di} className={`w-3 h-3 rounded-sm ${getColor(day.xp)}`} title={`${day.date}: ${day.xp} XP`} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Best Streak", value: "12 days" },
            { label: "Total XP", value: "2,450" },
            { label: "Avg Quiz", value: "78%" },
            { label: "Time Spent", value: "8.5h" },
          ].map(s => (
            <div key={s.label} className="ceramic-surface p-5 text-center">
              <p className="text-2xl font-display font-black text-foreground">{s.value}</p>
              <p className="text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Milestones */}
        <div className="ceramic-surface p-6">
          <h2 className="font-display font-bold text-lg text-foreground mb-4">Milestones</h2>
          <div className="space-y-4">
            {milestones.map(m => (
              <div key={m.title} className="flex items-center gap-4">
                <span className="text-2xl">{m.emoji}</span>
                <div className="flex-1">
                  <p className="font-display font-bold text-foreground">{m.title}</p>
                  <p className="text-sm text-muted-foreground">{m.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </LearnerLayout>
  );
};

export default Stats;
