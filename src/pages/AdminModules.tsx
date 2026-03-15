import AdminLayout from "@/components/AdminLayout";
import { Button } from "@/components/ui/button";
import { Plus, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const modules = [
  { id: 1, title: "What is Addiction?", level: "Understanding Basics", xp: 100, status: "Published" },
  { id: 2, title: "Brain Chemistry 101", level: "Understanding Basics", xp: 150, status: "Published" },
  { id: 3, title: "Understanding Triggers", level: "Recognizing Patterns", xp: 200, status: "Published" },
  { id: 4, title: "Social Pressure", level: "Recognizing Patterns", xp: 200, status: "Draft" },
  { id: 5, title: "Building Routines", level: "Coping Strategies", xp: 250, status: "Draft" },
];

const AdminModules = () => {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-display font-black text-foreground">Modules</h1>
          <Button className="gap-2"><Plus className="w-4 h-4" /> Add Module</Button>
        </div>

        <div className="flex gap-3">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Search modules..." className="pl-10 rounded-xl" />
          </div>
        </div>

        <div className="ceramic-surface overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="px-4 py-3 text-left text-xs font-bold text-muted-foreground uppercase">Title</th>
                <th className="px-4 py-3 text-left text-xs font-bold text-muted-foreground uppercase">Level</th>
                <th className="px-4 py-3 text-left text-xs font-bold text-muted-foreground uppercase">XP</th>
                <th className="px-4 py-3 text-left text-xs font-bold text-muted-foreground uppercase">Status</th>
                <th className="px-4 py-3 text-right text-xs font-bold text-muted-foreground uppercase">Actions</th>
              </tr>
            </thead>
            <tbody>
              {modules.map(mod => (
                <tr key={mod.id} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                  <td className="px-4 py-3 font-display font-bold text-foreground">{mod.title}</td>
                  <td className="px-4 py-3 text-muted-foreground text-sm">{mod.level}</td>
                  <td className="px-4 py-3 text-sm font-bold text-foreground">{mod.xp}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                      mod.status === "Published" ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
                    }`}>
                      {mod.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <Button variant="ghost" size="sm">Edit</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminModules;
