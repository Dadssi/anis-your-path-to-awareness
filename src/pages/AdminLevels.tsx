import AdminLayout from "@/components/AdminLayout";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Plus, GripVertical } from "lucide-react";

const levels = [
  { id: 1, title: "Understanding Basics", icon: "📖", modules: 4, active: true },
  { id: 2, title: "Recognizing Patterns", icon: "🔍", modules: 5, active: true },
  { id: 3, title: "Building Awareness", icon: "🧠", modules: 6, active: true },
  { id: 4, title: "Coping Strategies", icon: "💪", modules: 5, active: false },
  { id: 5, title: "Long-term Resilience", icon: "🌟", modules: 6, active: false },
];

const AdminLevels = () => {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-display font-black text-foreground">Levels</h1>
          <Button className="gap-2"><Plus className="w-4 h-4" /> Add Level</Button>
        </div>

        <div className="ceramic-surface overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="px-4 py-3 text-left text-xs font-bold text-muted-foreground uppercase w-8"></th>
                <th className="px-4 py-3 text-left text-xs font-bold text-muted-foreground uppercase">Level</th>
                <th className="px-4 py-3 text-left text-xs font-bold text-muted-foreground uppercase">Modules</th>
                <th className="px-4 py-3 text-left text-xs font-bold text-muted-foreground uppercase">Status</th>
                <th className="px-4 py-3 text-right text-xs font-bold text-muted-foreground uppercase">Actions</th>
              </tr>
            </thead>
            <tbody>
              {levels.map(level => (
                <tr key={level.id} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                  <td className="px-4 py-3"><GripVertical className="w-4 h-4 text-muted-foreground cursor-grab" /></td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{level.icon}</span>
                      <span className="font-display font-bold text-foreground">{level.title}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">{level.modules}</td>
                  <td className="px-4 py-3"><Switch checked={level.active} /></td>
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

export default AdminLevels;
