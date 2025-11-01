import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const GetStarted = () => {
  const navigate = useNavigate();
  return (
    <section id="get-started" className="py-24 gradient-hero relative overflow-hidden">
      {/* Animated background elements */}


      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-primary-foreground animate-fade-in">
            Ready to Build Your Digital Future?
          </h2>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 animate-fade-in animation-delay-200">
            Transform your business with a stunning website that drives results
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-400">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary animate-bounce"
              onClick={() => navigate("/Getstarted")}
            >
              <Mail className="mr-2" />
              Contact Us
            </Button>
          </div>
          <p className="mt-6 text-primary-foreground/70 animate-fade-in animation-delay-600">
            No obligation, no pressure - just great web solutions
          </p>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;