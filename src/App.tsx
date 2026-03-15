import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import Dashboard from "./pages/Dashboard";
import LearningPath from "./pages/LearningPath";
import Badges from "./pages/Badges";
import Stats from "./pages/Stats";
import Resources from "./pages/Resources";
import Profile from "./pages/Profile";
import AdminDashboard from "./pages/AdminDashboard";
import AdminLevels from "./pages/AdminLevels";
import AdminModules from "./pages/AdminModules";
import AdminQuizzes from "./pages/AdminQuizzes";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public */}
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* Learner */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/parcours" element={<LearningPath />} />
          <Route path="/badges" element={<Badges />} />
          <Route path="/statistiques" element={<Stats />} />
          <Route path="/ressources" element={<Resources />} />
          <Route path="/profil" element={<Profile />} />

          {/* Admin */}
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/niveaux" element={<AdminLevels />} />
          <Route path="/admin/modules" element={<AdminModules />} />
          <Route path="/admin/quiz" element={<AdminQuizzes />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
