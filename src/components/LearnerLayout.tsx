import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const LearnerLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isAuthenticated username="Alex" streak={12} xp={2450} level={5} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default LearnerLayout;
