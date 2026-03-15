import AdminLayout from "@/components/AdminLayout";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const quizzes = [
  { id: 1, level: "Understanding Basics", questions: 10, avgScore: 82 },
  { id: 2, level: "Recognizing Patterns", questions: 10, avgScore: 75 },
  { id: 3, level: "Building Awareness", questions: 12, avgScore: 68 },
];

const AdminQuizzes = () => {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-display font-black text-foreground">Quizzes</h1>
          <Button className="gap-2"><Plus className="w-4 h-4" /> Add Quiz</Button>
        </div>

        <div className="ceramic-surface overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="px-4 py-3 text-left text-xs font-bold text-muted-foreground uppercase">Level</th>
                <th className="px-4 py-3 text-left text-xs font-bold text-muted-foreground uppercase">Questions</th>
                <th className="px-4 py-3 text-left text-xs font-bold text-muted-foreground uppercase">Avg Score</th>
                <th className="px-4 py-3 text-right text-xs font-bold text-muted-foreground uppercase">Actions</th>
              </tr>
            </thead>
            <tbody>
              {quizzes.map(quiz => (
                <tr key={quiz.id} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                  <td className="px-4 py-3 font-display font-bold text-foreground">{quiz.level}</td>
                  <td className="px-4 py-3 text-muted-foreground">{quiz.questions}</td>
                  <td className="px-4 py-3">
                    <span className={`font-bold ${quiz.avgScore >= 75 ? "text-primary" : "text-accent-foreground"}`}>
                      {quiz.avgScore}%
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

export default AdminQuizzes;
