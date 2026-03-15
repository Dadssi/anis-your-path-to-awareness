import AdminLayout from "@/components/AdminLayout";
import { Users, Activity, BookOpen, Target, TrendingUp } from "lucide-react";

const kpis = [
  { label: "Total Learners", value: "5,247", icon: Users, change: "+12%" },
  { label: "Active Today", value: "834", icon: Activity, change: "+5%" },
  { label: "Avg Quiz Score", value: "78%", icon: Target, change: "+3%" },
  { label: "Completion Rate", value: "62%", icon: TrendingUp, change: "+8%" },
];

const topModules = [
  { title: "Understanding Triggers", level: "Level 2", completionRate: 89 },
  { title: "Brain Chemistry 101", level: "Level 1", completionRate: 85 },
  { title: "Coping Mechanisms", level: "Level 3", completionRate: 78 },
  { title: "Social Pressure", level: "Level 2", completionRate: 74 },
  { title: "Building Routines", level: "Level 4", completionRate: 65 },
];

const AdminDashboard = () => {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-display font-black text-foreground">Admin Dashboard</h1>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {kpis.map(kpi => (
            <div key={kpi.label} className="ceramic-surface p-5">
              <div className="flex items-center justify-between mb-3">
                <kpi.icon className="w-5 h-5 text-muted-foreground" />
                <span className="text-xs font-bold text-primary">{kpi.change}</span>
              </div>
              <p className="text-2xl font-display font-black text-foreground">{kpi.value}</p>
              <p className="text-sm text-muted-foreground">{kpi.label}</p>
            </div>
          ))}
        </div>

        <div className="ceramic-surface p-6">
          <h2 className="font-display font-bold text-lg text-foreground mb-4">Top Modules by Completion</h2>
          <div className="space-y-3">
            {topModules.map((mod, i) => (
              <div key={mod.title} className="flex items-center gap-4">
                <span className="text-sm font-bold text-muted-foreground w-6">{i + 1}</span>
                <div className="flex-1">
                  <p className="font-display font-bold text-sm text-foreground">{mod.title}</p>
                  <p className="text-xs text-muted-foreground">{mod.level}</p>
                </div>
                <div className="w-24 h-2 rounded-full bg-muted overflow-hidden">
                  <div className="h-full rounded-full bg-primary" style={{ width: `${mod.completionRate}%` }} />
                </div>
                <span className="text-sm font-bold text-foreground w-10 text-right">{mod.completionRate}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
