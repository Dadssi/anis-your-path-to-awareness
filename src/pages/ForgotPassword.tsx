import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, CheckCircle } from "lucide-react";
import PublicLayout from "@/components/PublicLayout";

const ForgotPassword = () => {
  const [sent, setSent] = useState(false);

  return (
    <PublicLayout>
      <div className="container mx-auto px-4 py-16 flex items-center justify-center min-h-[80vh]">
        <div className="ceramic-surface p-8 md:p-10 w-full max-w-md text-center">
          {!sent ? (
            <>
              <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-6">
                <Mail className="w-7 h-7 text-secondary" />
              </div>
              <h1 className="text-2xl font-display font-black text-foreground mb-2">Reset password</h1>
              <p className="text-muted-foreground mb-8">Enter the email linked to your account.</p>

              <form className="space-y-5 text-left" onSubmit={e => { e.preventDefault(); setSent(true); }}>
                <div className="space-y-2">
                  <Label htmlFor="email" className="font-display font-bold">Email address</Label>
                  <Input id="email" type="email" placeholder="your@email.com" className="rounded-xl h-12" />
                </div>
                <Button type="submit" className="w-full" size="lg">Send reset link</Button>
              </form>
            </>
          ) : (
            <>
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-7 h-7 text-primary" />
              </div>
              <h1 className="text-2xl font-display font-black text-foreground mb-2">Check your inbox</h1>
              <p className="text-muted-foreground">
                If an account exists with this email, a reset link is on its way.
              </p>
            </>
          )}
          <p className="text-sm text-muted-foreground mt-6">
            <Link to="/login" className="text-primary font-bold hover:underline">← Back to login</Link>
          </p>
        </div>
      </div>
    </PublicLayout>
  );
};

export default ForgotPassword;
