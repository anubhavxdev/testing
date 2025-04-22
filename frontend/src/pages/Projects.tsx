import { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  MapPin, 
  Calendar, 
  Users, 
  CheckCircle2, 
  AlertCircle,
  Clock,
  TreePalm,
  Droplets,
  Recycle,
  Leaf
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Community Garden Revitalization",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
    category: "Urban Greening",
    icon: <TreePalm className="h-5 w-5" />,
    location: "Portland, OR",
    startDate: "2025-05-15",
    endDate: "2025-08-30",
    participants: 24,
    progress: 65,
    tasks: {
      total: 18,
      completed: 12
    },
    description: "Transforming an abandoned lot into a thriving community garden with native plants, vegetables, and educational spaces for local schools.",
    tags: ["gardening", "community", "education", "urban"],
    status: "active",
  },
  {
    id: 2,
    title: "Neighborhood Stream Cleanup",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
    category: "Water Conservation",
    icon: <Droplets className="h-5 w-5" />,
    location: "Austin, TX",
    startDate: "2025-04-22",
    endDate: "2025-04-22",
    participants: 38,
    progress: 30,
    tasks: {
      total: 12,
      completed: 4
    },
    description: "Organizing a one-day cleanup effort to remove trash and invasive species from Cedar Creek, followed by water quality monitoring.",
    tags: ["water", "cleanup", "conservation", "volunteers"],
    status: "active",
  },
  {
    id: 3,
    title: "Zero Waste School Initiative",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    category: "Waste Reduction",
    icon: <Recycle className="h-5 w-5" />,
    location: "Minneapolis, MN",
    startDate: "2025-03-01",
    endDate: "2025-12-15",
    participants: 15,
    progress: 45,
    tasks: {
      total: 24,
      completed: 11
    },
    description: "Working with local schools to implement waste reduction strategies including composting programs, recycling education, and plastic-free lunches.",
    tags: ["schools", "zero waste", "education", "composting"],
    status: "active",
  },
  {
    id: 4,
    title: "Native Pollinator Garden Network",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
    category: "Biodiversity",
    icon: <Leaf className="h-5 w-5" />,
    location: "Denver, CO",
    startDate: "2025-06-10",
    endDate: "2025-10-15",
    participants: 42,
    progress: 20,
    tasks: {
      total: 30,
      completed: 6
    },
    description: "Creating a network of pollinator-friendly gardens throughout the city to support native bees, butterflies, and other beneficial insects.",
    tags: ["pollinators", "native plants", "biodiversity", "gardens"],
    status: "active",
  },
  {
    id: 5,
    title: "Community Solar Purchasing Group",
    image: "https://images.unsplash.com/photo-1509390144018-d41de1c7ea40",
    category: "Renewable Energy",
    icon: <Recycle className="h-5 w-5" />,
    location: "Burlington, VT",
    startDate: "2025-02-15",
    endDate: "2025-07-30",
    participants: 73,
    progress: 90,
    tasks: {
      total: 15,
      completed: 14
    },
    description: "Organizing a bulk purchase of residential solar panel systems to reduce costs for homeowners and increase renewable energy adoption.",
    tags: ["solar", "renewable energy", "group purchase", "residential"],
    status: "active",
  },
  {
    id: 6,
    title: "Food Waste Reduction Campaign",
    image: "https://images.unsplash.com/photo-1621798711395-1e6e56cdb1c2",
    category: "Food Systems",
    icon: <Recycle className="h-5 w-5" />,
    location: "Seattle, WA",
    startDate: "2025-03-10",
    endDate: "2025-09-15",
    participants: 28,
    progress: 55,
    tasks: {
      total: 22,
      completed: 12
    },
    description: "Partnering with local restaurants and grocery stores to implement food waste reduction strategies and create a food rescue network.",
    tags: ["food waste", "restaurants", "food rescue", "composting"],
    status: "active",
  },
];

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const navigate = useNavigate();

  const categories = Array.from(new Set(projects.map(project => project.category)));

  const filteredProjects = projects.filter(project => {
    const matchesSearch = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = 
      selectedCategory === null || project.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <MainLayout>
      <div className="space-y-8 animate-fade-in">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">Community Projects</h1>
            <p className="text-muted-foreground">
              Join or create sustainability projects to make a real impact in your area.
            </p>
          </div>
          <Button onClick={() => navigate("/upload")}>Start New Project</Button>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <Input 
            placeholder="Search projects..." 
            className="md:max-w-xs" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          
          <div className="flex flex-wrap gap-2">
            <Badge 
              variant={selectedCategory === null ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() => setSelectedCategory(null)}
            >
              All Categories
            </Badge>
            {categories.map(category => (
              <Badge 
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.length > 0 ? (
            filteredProjects.map(project => (
              <Card key={project.id} className="eco-card overflow-hidden flex flex-col">
                <div className="aspect-video relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-background/80 backdrop-blur-sm p-2 rounded-md flex items-center gap-2">
                    <div className="p-1 rounded-full bg-primary/10 text-primary">
                      {project.icon}
                    </div>
                    <span className="text-sm font-medium">{project.category}</span>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="flex flex-wrap gap-y-2 gap-x-4">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {project.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(project.startDate).toLocaleDateString()} - {new Date(project.endDate).toLocaleDateString()}
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-2 flex-grow">
                  <p className="text-muted-foreground line-clamp-2 mb-4">
                    {project.description}
                  </p>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-sm">
                      <span>Progress</span>
                      <span className="font-medium">{project.progress}%</span>
                    </div>
                    <Progress value={project.progress} className="h-2" />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        {project.tasks.completed}/{project.tasks.total} tasks done
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {project.participants} participants
                      </span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="pt-4 border-t flex justify-between">
                  <div className="flex gap-2">
                    {project.status === "active" ? (
                      <Badge className="bg-green-500">
                        <Clock className="h-3 w-3 mr-1" />
                        Active
                      </Badge>
                    ) : (
                      <Badge variant="outline">
                        <AlertCircle className="h-3 w-3 mr-1" />
                        Completed
                      </Badge>
                    )}
                  </div>
                  <Button size="sm">Join Project</Button>
                </CardFooter>
              </Card>
            ))
          ) : (
            <div className="text-center py-8 col-span-full">
              <p className="text-muted-foreground">No projects found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default Projects;
