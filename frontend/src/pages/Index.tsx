import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Users, BookOpen, Calendar, TreePalm } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";

const Index = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-10 md:py-16">
        <div className="grid gap-6 md:grid-cols-2 md:gap-12 items-center">
          <div className="flex flex-col gap-4 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-eco-leaf">
              Building a Sustainable Future Together
            </h1>
            <p className="text-lg text-muted-foreground">
              Join our community of environmentally conscious individuals working together 
              to create a more sustainable world through knowledge sharing, collaboration, 
              and local action.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                size="lg" 
                className="bg-eco-leaf hover:bg-eco-leaf/90" 
                asChild
              >
                <Link to="/join">Join the Community</Link>
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl animate-fade-in">
            <img 
              src="https://images.unsplash.com/photo-1500673922987-e212871fec22" 
              alt="Sustainable forest landscape" 
              className="w-full h-auto object-cover aspect-video"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16">
        <div className="text-center mb-10 animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">How SustainaConnect Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our platform brings together like-minded individuals to share knowledge, 
            collaborate on projects, and organize events that make a real impact.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 animate-fade-in">
          <Card className="eco-card">
            <CardContent className="flex flex-col items-center text-center gap-4 p-6">
              <div className="p-3 rounded-full bg-primary/10 text-primary">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold">Forums</h3>
              <p className="text-muted-foreground">
                Engage in meaningful discussions about sustainability topics with 
                our global community.
              </p>
              <Link to="/forums" className="text-primary hover:underline">
                Join Discussions
              </Link>
            </CardContent>
          </Card>
          
          <Card className="eco-card">
            <CardContent className="flex flex-col items-center text-center gap-4 p-6">
              <div className="p-3 rounded-full bg-primary/10 text-primary">
                <BookOpen className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold">Resources</h3>
              <p className="text-muted-foreground">
                Access and share valuable guides, articles, and videos on sustainable living.
              </p>
              <Link to="/resources" className="text-primary hover:underline">
                Browse Resources
              </Link>
            </CardContent>
          </Card>
          
          <Card className="eco-card">
            <CardContent className="flex flex-col items-center text-center gap-4 p-6">
              <div className="p-3 rounded-full bg-primary/10 text-primary">
                <TreePalm className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold">Projects</h3>
              <p className="text-muted-foreground">
                Collaborate on local and global sustainability initiatives that make a difference.
              </p>
              <Link to="/projects" className="text-primary hover:underline">
                Explore Projects
              </Link>
            </CardContent>
          </Card>
          
          <Card className="eco-card">
            <CardContent className="flex flex-col items-center text-center gap-4 p-6">
              <div className="p-3 rounded-full bg-primary/10 text-primary">
                <Calendar className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold">Events</h3>
              <p className="text-muted-foreground">
                Discover workshops, webinars, and meetups focused on environmental awareness.
              </p>
              <Link to="/events" className="text-primary hover:underline">
                Find Events
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-eco-leaf-light/20 to-eco-sky-light/20 rounded-xl p-8 animate-fade-in">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Our Community Impact</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Together, our members are creating measurable change for a more sustainable future.
          </p>
        </div>
        
        <div className="grid gap-4 md:grid-cols-3">
          <div className="flex flex-col items-center p-4">
            <span className="text-4xl font-bold text-eco-leaf">5,280</span>
            <p className="text-sm text-muted-foreground">Trees Planted</p>
          </div>
          
          <div className="flex flex-col items-center p-4">
            <span className="text-4xl font-bold text-eco-leaf">12.4 tons</span>
            <p className="text-sm text-muted-foreground">CO₂ Emissions Reduced</p>
          </div>
          
          <div className="flex flex-col items-center p-4">
            <span className="text-4xl font-bold text-eco-leaf">8,430</span>
            <p className="text-sm text-muted-foreground">Community Members</p>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-12 md:py-16 animate-fade-in">
        <div className="bg-eco-leaf rounded-xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Join our growing community of environmental advocates and start contributing to a 
            sustainable future today.
          </p>
          <Button size="lg" className="bg-white text-eco-leaf hover:bg-white/90">
            Join SustainaConnect
          </Button>
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;
