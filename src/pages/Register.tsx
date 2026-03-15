import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff } from "lucide-react";
import PublicLayout from "@/components/PublicLayout";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [anonymous, setAnonymous] = useState(false);

  const getStrength = (p: string) => {
    let s = 0;
    if (p.length >= 8) s++;
    if (/[A-Z]/.test(p)) s++;
    if (/[0-9]/.test(p)) s++;
    if (/[^A-Za-z0-9]/.test(p)) s++;
    return s;
  };

  const strength = getStrength(password);
  const strengthColors = ["bg-destructive", "bg-accent", "bg-accent", "bg-primary"];
  const strengthLabels = ["Weak", "Fair", "Good", "Strong"];

  return (
    <PublicLayout>
      <div className="container mx-auto px-4 py-16 flex items-center justify-center min-h-[80vh]">
        <div className="ceramic-surface p-8 md:p-10 w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-12 h-12 rounded-2xl bg-gradient-hero flex items-center justify-center mx-auto mb-4">
              <span className="text-primary-foreground font-display font-black text-xl">A</span>
            </div>
            <h1 className="text-2xl font-display font-black text-foreground mb-2">Join ANIS</h1>
            <p className="text-muted-foreground">Start your journey — no names required.</p>
          </div>

          <form className="space-y-5" onSubmit={e => e.preventDefault()}>
            <div className="space-y-2">
              <Label htmlFor="username" className="font-display font-bold">Choose a fun alias</Label>
              <Input id="username" placeholder="e.g., CosmicPanda42" className="rounded-xl h-12" />
            </div>

            {!anonymous && (
              <div className="space-y-2">
                <Label htmlFor="email" className="font-display font-bold">Email <span className="text-muted-foreground font-normal">(optional)</span></Label>
                <Input id="email" type="email" placeholder="Only for password recovery" className="rounded-xl h-12" />
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="password" className="font-display font-bold">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="At least 8 characters"
                  className="rounded-xl h-12 pr-12"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {/* Strength meter */}
              {password.length > 0 && (
                <div className="space-y-1.5">
                  <div className="flex gap-1">
                    {[0, 1, 2, 3].map(i => (
                      <div
                        key={i}
                        className={`h-1.5 flex-1 rounded-full transition-colors ${i < strength ? strengthColors[strength - 1] : "bg-muted"}`}
                      />
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground">{strength > 0 ? strengthLabels[strength - 1] : "Too short"}</p>
                </div>
              )}
            </div>

            {/* Anonymous toggle */}
            <div className="flex items-center justify-between p-4 rounded-2xl bg-muted/50 border border-border">
              <div>
                <p className="font-display font-bold text-sm text-foreground">Stay fully anonymous</p>
                <p className="text-xs text-muted-foreground">Don't store my email</p>
              </div>
              <Switch checked={anonymous} onCheckedChange={setAnonymous} />
            </div>

            {/* Terms */}
            <div className="flex items-start gap-2">
              <Checkbox id="terms" className="mt-0.5" />
              <Label htmlFor="terms" className="text-sm text-muted-foreground leading-relaxed">
                I agree to the <Link to="/terms" className="text-primary hover:underline">Terms of Service</Link> and{" "}
                <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
              </Label>
            </div>

            <Button type="submit" className="w-full" size="lg">
              Create my account
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Already have an account?{" "}
            <Link to="/login" className="text-primary font-bold hover:underline">Log in</Link>
          </p>
        </div>
      </div>
    </PublicLayout>
  );
};

export default Register;
