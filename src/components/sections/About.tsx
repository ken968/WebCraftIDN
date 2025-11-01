import { Users, Laptop, Zap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Who We Are</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                In today's digital age, every business needs an impactful online presence. 
                <span className="text-primary font-semibold"> WebCraft</span> offers quality website creation services.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We are passionate about transforming ideas into stunning digital 
                experiences that help businesses grow and succeed online.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 animate-fade-in-right">
              <div className="p-6 rounded-lg bg-card shadow-card border border-border hover:shadow-glow transition-smooth">
                <Users className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">Expert Team</h3>
                <p className="text-muted-foreground">Skilled developers and designers working together to create excellence.</p>
              </div>
              
              <div className="p-6 rounded-lg bg-card shadow-card border border-border hover:shadow-glow transition-smooth">
                <Laptop className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">Latest Technology</h3>
                <p className="text-muted-foreground">Cutting-edge tools and frameworks for modern web development.</p>
              </div>
              
              <div className="p-6 rounded-lg bg-card shadow-card border border-border hover:shadow-glow transition-smooth">
                <Zap className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">Fast Delivery</h3>
                <p className="text-muted-foreground">completion time according to the specified deadline</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
