import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 gradient-hero relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-primary-foreground/10 rounded-full blur-3xl animate-float top-0 left-0" />
        <div className="absolute w-96 h-96 bg-primary-foreground/10 rounded-full blur-3xl animate-float animation-delay-2000 bottom-0 right-0" />
      </div>
    </section>
  );
};

export default CTA;
