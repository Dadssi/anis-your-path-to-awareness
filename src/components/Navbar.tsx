import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Flame, Menu, X, Trophy, BarChart3, BookOpen, User, LogOut, Shield } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  isAuthenticated?: boolean;
  isAdmin?: boolean;
  username?: string;
  streak?: number;
  xp?: number;
  level?: number;
}

const Navbar = ({ isAuthenticated = false, isAdmin = false, username = "Learner", streak = 0, xp = 0, level = 1 }: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const publicLinks = [
    { to: "/", label: "Home" },
  ];

  const learnerLinks = [
    { to: "/dashboard", label: "Dashboard", icon: BarChart3 },
    { to: "/parcours", label: "Path", icon: BookOpen },
    { to: "/badges", label: "Badges", icon: Trophy },
    { to: "/statistiques", label: "Stats", icon: BarChart3 },
    { to: "/ressources", label: "Help", icon: BookOpen },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to={isAuthenticated ? "/dashboard" : "/"} className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-gradient-hero flex items-center justify-center">
            <span className="text-primary-foreground font-display font-black text-lg">A</span>
          </div>
          <span className="font-display font-black text-xl text-foreground">ANIS</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {isAuthenticated ? (
            learnerLinks.map(link => (
              <Link key={link.to} to={link.to}>
                <Button variant={isActive(link.to) ? "default" : "ghost"} size="sm" className="gap-1.5">
                  <link.icon className="w-4 h-4" />
                  {link.label}
                </Button>
              </Link>
            ))
          ) : (
            publicLinks.map(link => (
              <Link key={link.to} to={link.to}>
                <Button variant={isActive(link.to) ? "default" : "ghost"} size="sm">
                  {link.label}
                </Button>
              </Link>
            ))
          )}
        </div>

        {/* Right section */}
        <div className="hidden md:flex items-center gap-3">
          {isAuthenticated ? (
            <>
              {/* Streak */}
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent/15 text-accent-foreground">
                <Flame className="w-4 h-4 text-accent" />
                <span className="font-display font-bold text-sm">{streak}</span>
              </div>
              {/* XP */}
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-foreground">
                <span className="font-display font-bold text-sm">{xp} XP</span>
              </div>
              {/* Level badge */}
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary/15 text-foreground">
                <span className="font-display font-bold text-sm">Lv.{level}</span>
              </div>
              {/* Profile */}
              <Link to="/profil">
                <Button variant="ghost" size="icon">
                  <User className="w-5 h-5" />
                </Button>
              </Link>
              {isAdmin && (
                <Link to="/admin">
                  <Button variant="ghost" size="icon">
                    <Shield className="w-5 h-5" />
                  </Button>
                </Link>
              )}
            </>
          ) : (
            <>
              <Link to="/login">
                <Button variant="outline" size="sm">Log In</Button>
              </Link>
              <Link to="/register">
                <Button variant="default" size="sm">Sign Up</Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden border-b border-border"
          >
            <div className="p-4 flex flex-col gap-2">
              {isAuthenticated ? (
                <>
                  <div className="flex items-center gap-3 pb-3 border-b border-border mb-2">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent/15">
                      <Flame className="w-4 h-4 text-accent" />
                      <span className="font-display font-bold text-sm">{streak}</span>
                    </div>
                    <span className="font-display font-bold text-sm">{xp} XP</span>
                    <span className="font-display font-bold text-sm text-muted-foreground">Lv.{level}</span>
                  </div>
                  {learnerLinks.map(link => (
                    <Link key={link.to} to={link.to} onClick={() => setMobileOpen(false)}>
                      <Button variant={isActive(link.to) ? "default" : "ghost"} className="w-full justify-start gap-2">
                        <link.icon className="w-4 h-4" />
                        {link.label}
                      </Button>
                    </Link>
                  ))}
                  <Link to="/profil" onClick={() => setMobileOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start gap-2">
                      <User className="w-4 h-4" />
                      Profile
                    </Button>
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/login" onClick={() => setMobileOpen(false)}>
                    <Button variant="outline" className="w-full">Log In</Button>
                  </Link>
                  <Link to="/register" onClick={() => setMobileOpen(false)}>
                    <Button className="w-full">Sign Up</Button>
                  </Link>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
