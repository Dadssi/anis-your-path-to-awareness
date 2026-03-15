import LearnerLayout from "@/components/LearnerLayout";
import { Phone, ExternalLink, FileDown, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const filters = ["All", "Alcohol", "Gaming", "Substances"];

const resources = [
  {
    title: "Fil Santé Jeunes",
    description: "Anonymous and free helpline for young people.",
    phone: "0 800 235 236",
    website: "https://www.filsantejeunes.com",
    tags: ["All"],
    emergency: false,
  },
  {
    title: "Drogues Info Service",
    description: "National helpline for drug-related issues.",
    phone: "0 800 23 13 13",
    website: "https://www.drogues-info-service.fr",
    tags: ["Substances"],
    emergency: true,
  },
  {
    title: "Alcool Info Service",
    description: "Support and information about alcohol.",
    phone: "0 980 980 930",
    website: "https://www.alcool-info-service.fr",
    tags: ["Alcohol"],
    emergency: false,
  },
  {
    title: "Joueurs Info Service",
    description: "Help for gaming and gambling addiction.",
    phone: "09 74 75 13 13",
    website: "https://www.joueurs-info-service.fr",
    tags: ["Gaming"],
    emergency: false,
  },
];

const Resources = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All" ? resources : resources.filter(r => r.tags.includes(activeFilter));

  return (
    <LearnerLayout>
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="text-3xl font-display font-black text-foreground text-center mb-2">Resources & Help</h1>
        <p className="text-center text-muted-foreground mb-8">You're not alone. Help is available.</p>

        {/* Emergency */}
        <div className="rounded-2xl border-2 border-destructive bg-destructive/5 p-6 mb-8 text-center">
          <p className="font-display font-black text-xl text-foreground mb-2">Need help now?</p>
          <a href="tel:113">
            <Button variant="destructive" size="lg" className="gap-2">
              <Phone className="w-5 h-5" /> Call 113
            </Button>
          </a>
        </div>

        {/* Filters */}
        <div className="flex gap-2 mb-6 flex-wrap">
          {filters.map(f => (
            <Button
              key={f}
              variant={activeFilter === f ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </Button>
          ))}
        </div>

        {/* Cards */}
        <div className="space-y-4">
          {filtered.map(r => (
            <div key={r.title} className="ceramic-surface p-6">
              <h3 className="font-display font-bold text-lg text-foreground mb-1">{r.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{r.description}</p>
              <div className="flex flex-wrap gap-3">
                {r.phone && (
                  <a href={`tel:${r.phone.replace(/\s/g, "")}`}>
                    <Button variant="outline" size="sm" className="gap-1.5">
                      <Phone className="w-3.5 h-3.5" /> {r.phone}
                    </Button>
                  </a>
                )}
                {r.website && (
                  <a href={r.website} target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="sm" className="gap-1.5">
                      <ExternalLink className="w-3.5 h-3.5" /> Website
                    </Button>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </LearnerLayout>
  );
};

export default Resources;
