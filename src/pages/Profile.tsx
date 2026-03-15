import LearnerLayout from "@/components/LearnerLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, Calendar, Shield, Trash2 } from "lucide-react";
import { useState } from "react";

const Profile = () => {
  const [editing, setEditing] = useState(false);

  return (
    <LearnerLayout>
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="ceramic-surface p-8 mb-6">
          {/* Avatar + header */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 rounded-full bg-gradient-hero flex items-center justify-center text-3xl">
              🐼
            </div>
            <div>
              <h1 className="text-2xl font-display font-black text-foreground">CosmicPanda42</h1>
              <p className="text-muted-foreground flex items-center gap-1.5 text-sm">
                <Calendar className="w-4 h-4" /> Joined March 2026
              </p>
            </div>
            <Button variant="outline" size="sm" className="ml-auto" onClick={() => setEditing(!editing)}>
              {editing ? "Save" : "Edit"}
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 p-4 rounded-2xl bg-muted/50 mb-6">
            <div className="text-center">
              <p className="text-xl font-display font-black text-foreground">12</p>
              <p className="text-xs text-muted-foreground">Modules</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-display font-black text-foreground">2,450</p>
              <p className="text-xs text-muted-foreground">XP</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-display font-black text-foreground">6</p>
              <p className="text-xs text-muted-foreground">Badges</p>
            </div>
          </div>

          {/* Edit fields */}
          {editing && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label className="font-display font-bold">Username</Label>
                <Input defaultValue="CosmicPanda42" className="rounded-xl h-12" />
              </div>
              <div className="space-y-2">
                <Label className="font-display font-bold">Email (optional)</Label>
                <Input type="email" placeholder="Add email for recovery" className="rounded-xl h-12" />
              </div>
            </div>
          )}
        </div>

        {/* Security */}
        <div className="ceramic-surface p-6 mb-6">
          <h2 className="font-display font-bold text-lg text-foreground flex items-center gap-2 mb-4">
            <Shield className="w-5 h-5" /> Security
          </h2>
          <Button variant="outline">Change Password</Button>
        </div>

        {/* Danger zone */}
        <div className="rounded-2xl border-2 border-destructive/30 p-6">
          <h2 className="font-display font-bold text-lg text-foreground flex items-center gap-2 mb-2">
            <Trash2 className="w-5 h-5 text-destructive" /> Danger Zone
          </h2>
          <p className="text-sm text-muted-foreground mb-4">
            Permanently delete your account and all data. This cannot be undone.
          </p>
          <Button variant="destructive">Delete Account</Button>
        </div>
      </div>
    </LearnerLayout>
  );
};

export default Profile;
