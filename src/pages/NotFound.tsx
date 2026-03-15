import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Compass } from "lucide-react";
import PublicLayout from "@/components/PublicLayout";

const NotFound = () => {
  return (
    <PublicLayout>
      <div className="container mx-auto px-4 py-20 flex items-center justify-center min-h-[70vh]">
        <div className="text-center">
          <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-6 animate-float">
            <Compass className="w-10 h-10 text-muted-foreground" />
          </div>
          <h1 className="text-4xl font-display font-black text-foreground mb-3">You've wandered off the path.</h1>
          <p className="text-lg text-muted-foreground mb-8">This page doesn't exist — but your journey does.</p>
          <Link to="/">
            <Button variant="hero" size="lg">Back to Home</Button>
          </Link>
        </div>
      </div>
    </PublicLayout>
  );
};

export default NotFound;
