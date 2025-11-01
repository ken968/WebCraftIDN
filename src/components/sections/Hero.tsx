import { Button } from "@/components/ui/button";
import { ArrowRight, Code2 } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 gradient-hero" />
      </div>

      {/* Animated particles background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="absolute w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float top-20 left-10"
        />
        <div
          className="absolute w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float animation-delay-2000 bottom-20 right-10"
        />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 animate-fade-in">
            <Code2 className="w-16 h-16 mx-auto mb-4 text-primary-foreground animate-glow" />
          </div>

          <h1 className="mb-6 text-5xl md:text-7xl font-bold text-primary-foreground animate-fade-in">
            Build Modern Websites That Drive Results
          </h1>

          <p className="mb-8 text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto animate-fade-in animation-delay-200">
            WebCraft empowers your business with responsive, innovative, and high-performing websites
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-400">
            <Button
              size="lg"
              variant="hero"
              className="group"
              onClick={() => {
                const el = document.querySelector("#get-started");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get Started
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              onClick={() => {
                const el = document.querySelector("#projects");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View Portfolio
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="mt-16 animate-bounce">
            <div className="w-6 h-10 mx-auto border-2 border-primary-foreground/50 rounded-full flex justify-center pt-2">
              <div className="w-1 h-3 bg-primary-foreground/50 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
