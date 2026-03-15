import { ReactNode } from "react";
import Navbar from "./Navbar";
import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, Layers, BookOpen, ClipboardList } from "lucide-react";
import { Button } from "@/components/ui/button";

const adminLinks = [
  { to: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { to: "/admin/niveaux", label: "Levels", icon: Layers },
  { to: "/admin/modules", label: "Modules", icon: BookOpen },
  { to: "/admin/quiz", label: "Quizzes", icon: ClipboardList },
];

const AdminLayout = ({ children }: { children: ReactNode }) => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isAuthenticated isAdmin username="Admin" streak={0} xp={0} level={99} />
      <div className="flex-1 flex">
        <aside className="hidden lg:flex w-60 border-r border-border bg-muted/20 p-4 flex-col gap-1">
          {adminLinks.map(link => (
            <Link key={link.to} to={link.to}>
              <Button
                variant={location.pathname === link.to ? "default" : "ghost"}
                className="w-full justify-start gap-2"
                size="sm"
              >
                <link.icon className="w-4 h-4" />
                {link.label}
              </Button>
            </Link>
          ))}
        </aside>
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
