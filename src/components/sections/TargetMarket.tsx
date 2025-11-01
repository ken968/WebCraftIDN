import { Store, Building2, Rocket, Briefcase } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const markets = [
  {
    icon: Store,
    title: "SMEs & Freelancers",
    description: "Simple, affordable websites or online stores tailored to small and medium enterprises.",
    color: "text-primary"
  },
  {
    icon: Building2,
    title: "Corporates",
    description: "Secure, high-performance enterprise solutions for established organizations.",
    color: "text-accent"
  },
  {
    icon: Rocket,
    title: "Startups",
    description: "Flexible and scalable landing pages designed for fast-growing ventures.",
    color: "text-primary"
  },
  {
    icon: Briefcase,
    title: "Agencies",
    description: "White-label solutions and partnership opportunities for marketing agencies.",
    color: "text-accent"
  }
];

const TargetMarket = () => {
  return (
    <section id="target-market" className="py-24 bg-secondary/30">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Who We Serve</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tailored web solutions for businesses of all sizes and industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {markets.map((market, index) => {
              const Icon = market.icon;
              return (
                <Card 
                  key={index}
                  className="group hover:shadow-glow transition-smooth hover:-translate-y-2 animate-scale-in border-border bg-card"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                      <Icon className={`w-8 h-8 ${market.color}`} />
                    </div>
                    <CardTitle className="text-card-foreground">{market.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground">{market.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetMarket;
