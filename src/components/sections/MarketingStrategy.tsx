import { Megaphone, TrendingUp, Users2, Target } from "lucide-react";

const strategies = [
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Active social media presence, educational content, and engaging campaigns to build brand awareness.",
    step: "01"
  },
  {
    icon: Target,
    title: "Targeted Promotions",
    description: "Flexible pricing models, first-time customer discounts, and attractive referral bonus programs.",
    step: "02"
  },
  {
    icon: Users2,
    title: "Offline Marketing",
    description: "Direct outreach to SMEs through networking events, business conferences, and local partnerships.",
    step: "03"
  },
  {
    icon: TrendingUp,
    title: "Growth Strategy",
    description: "Continuous optimization based on analytics, customer feedback, and market trends for sustained growth.",
    step: "04"
  }
];

const MarketingStrategy = () => {
  return (
    <section id="strategy" className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Our Marketing Strategy</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive approach to reach and serve our clients effectively
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {strategies.map((strategy, index) => {
              const Icon = strategy.icon;
              return (
                <div 
                  key={index}
                  className="relative p-8 rounded-lg bg-card border border-border shadow-card hover:shadow-glow transition-smooth group animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute top-8 right-8 text-6xl font-bold text-primary/10 group-hover:text-primary/20 transition-smooth">
                    {strategy.step}
                  </div>
                  <div className="relative z-10">
                    <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-3 text-card-foreground">{strategy.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{strategy.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingStrategy;
