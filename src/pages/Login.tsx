import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff } from "lucide-react";
import PublicLayout from "@/components/PublicLayout";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <PublicLayout>
      <div className="container mx-auto px-4 py-16 flex items-center justify-center min-h-[80vh]">
        <div className="ceramic-surface p-8 md:p-10 w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-12 h-12 rounded-2xl bg-gradient-hero flex items-center justify-center mx-auto mb-4">
              <span className="text-primary-foreground font-display font-black text-xl">A</span>
            </div>
            <h1 className="text-2xl font-display font-black text-foreground mb-2">Welcome back</h1>
            <p className="text-muted-foreground">Continue your journey.</p>
          </div>

          <form className="space-y-5" onSubmit={e => e.preventDefault()}>
            <div className="space-y-2">
              <Label htmlFor="identifier" className="font-display font-bold">Username or Email</Label>
              <Input id="identifier" placeholder="Your alias or email" className="rounded-xl h-12" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="font-display font-bold">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Your password"
                  className="rounded-xl h-12 pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember" className="text-sm text-muted-foreground">Remember me</Label>
              </div>
              <Link to="/forgot-password" className="text-sm text-secondary hover:underline font-bold">
                Forgot password?
              </Link>
            </div>

            <Button type="submit" className="w-full" size="lg">
              Log In
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-6">
            No account yet?{" "}
            <Link to="/register" className="text-primary font-bold hover:underline">Sign up</Link>
          </p>
        </div>
      </div>
    </PublicLayout>
  );
};

export default Login;
