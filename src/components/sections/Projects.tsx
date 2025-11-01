import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import image from "../../assets/firstProject.png";

const projects = [
  {
    id: 1,
    title: "Landing Page Company",
    description: "Modern landing page with responsive design, showcasing services and portfolio to attract potential clients.",
    image: image,
    liveUrl: "https://bengkelkingfarel.com/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-primary-hover to-primary bg-clip-text text-transparent">
            Our Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our latest work and see how we transform ideas into stunning digital experiences
          </p>
        </div>

        {/* Projects Grid */}
        <div className="justify-center flex border-red-400">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="max-w-[450px] group overflow-hidden hover:shadow-2xl transition-all duration-500 border-border/50 hover:border-primary/50 animate-fade-in bg-card/50 backdrop-blur-sm"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                  <Button
                    variant="secondary"
                    size="icon"
                    className="animate-scale-in"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="View live project">
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="animate-scale-in"
                    style={{ animationDelay: "100ms" }}
                    asChild
                  >
                  </Button>
                </div>
              </div>

              {/* Project Info */}
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        {/* <div className="text-center mt-12 animate-fade-in">
          <Button variant="outline" size="lg" className="group">
            View All Projects
            <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;
