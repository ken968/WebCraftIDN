import { TrendingUp, AlertTriangle, Lightbulb, Shield } from "lucide-react";

const swotData = [
  {
    icon: Shield,
    title: "Strengths",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/30",
    items: [
      "Experienced development team",
      "Flexible service offerings",
      "Competitive and affordable pricing",
      "High-quality deliverables"
    ]
  },
  {
    icon: AlertTriangle,
    title: "Weaknesses",
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/30",
    items: [
      "New brand in the market",
      "Building client testimonials",
      "Limited initial portfolio",
      "Establishing market presence"
    ]
  },
  {
    icon: Lightbulb,
    title: "Opportunities",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
    items: [
      "Growing digital transformation",
      "Rising website demand",
      "Untapped SME market",
      "Expanding online business needs"
    ]
  },
  {
    icon: TrendingUp,
    title: "Threats",
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/30",
    items: [
      "Competition from large agencies",
      "Freelancer marketplace growth",
      "Rapid technology changes",
      "Price pressure from competitors"
    ]
  }
];

const SWOT = () => {
  return (
    <section id="swot" className="py-24 bg-secondary/30">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">SWOT Analysis</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Understanding our position in the market
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {swotData.map((swot, index) => {
              const Icon = swot.icon;
              return (
                <div 
                  key={index}
                  className={`group p-8 rounded-lg bg-card border-2 ${swot.borderColor} ${swot.bgColor} hover:shadow-glow transition-smooth animate-scale-in cursor-pointer`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-lg ${swot.bgColor}`}>
                      <Icon className={`w-8 h-8 ${swot.color}`} />
                    </div>
                    <h3 className="text-2xl font-bold text-card-foreground">{swot.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {swot.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className={`w-2 h-2 rounded-full ${swot.color.replace('text-', 'bg-')} mt-2 flex-shrink-0`} />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SWOT;
