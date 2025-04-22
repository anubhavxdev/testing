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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { FileText, Video, BookOpen, FileDown, Download, Star, Eye, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";

const resources = [
  {
    id: 1,
    title: "Complete Guide to Home Composting",
    type: "guide",
    format: "pdf",
    author: "GreenThumb",
    description: "A comprehensive guide to setting up and maintaining a home composting system. Covers different methods, troubleshooting, and using the finished compost.",
    tags: ["composting", "gardening", "waste reduction"],
    views: 2743,
    downloads: 1458,
    rating: 4.8,
    uploadDate: "2025-01-15",
  },
  {
    id: 2,
    title: "DIY Solar Water Heater Construction",
    type: "video",
    format: "video/mp4",
    author: "SolarPowered",
    description: "Step-by-step video tutorial on how to build an inexpensive solar water heater using reclaimed materials. Perfect for off-grid cabins or supplemental home heating.",
    tags: ["solar", "DIY", "renewable energy", "water heating"],
    views: 18543,
    downloads: 0,
    rating: 4.6,
    uploadDate: "2025-02-03",
  },
  {
    id: 3,
    title: "Plastic-Free Kitchen: A Beginner's Guide",
    type: "article",
    format: "html",
    author: "ZeroWaste",
    description: "An illustrated guide to eliminating single-use plastics from your kitchen. Includes product recommendations, DIY alternatives, and habit-forming tips.",
    tags: ["plastic-free", "zero waste", "kitchen", "beginner"],
    views: 9372,
    downloads: 2134,
    rating: 4.9,
    uploadDate: "2025-03-10",
  },
  {
    id: 4,
    title: "Seasonal Planting Calendar by Climate Zone",
    type: "guide",
    format: "pdf",
    author: "OrganicGardener",
    description: "A detailed planting calendar organized by USDA climate zones. Shows when to plant and harvest different vegetables, fruits, and herbs throughout the year.",
    tags: ["gardening", "seasonal", "planting", "climate"],
    views: 12593,
    downloads: 8749,
    rating: 4.7,
    uploadDate: "2025-01-22",
  },
  {
    id: 5,
    title: "Making Beeswax Food Wraps Tutorial",
    type: "video",
    format: "video/mp4",
    author: "HandmadeHaven",
    description: "Learn how to make your own reusable beeswax food wraps as a sustainable alternative to plastic wrap. Includes material sources and troubleshooting tips.",
    tags: ["DIY", "beeswax", "reusable", "kitchen"],
    views: 7532,
    downloads: 0,
    rating: 4.8,
    uploadDate: "2025-02-28",
  },
  {
    id: 6,
    title: "Guide to Setting Up a Community Repair Café",
    type: "article",
    format: "html",
    author: "FixItCollective",
    description: "A comprehensive guide to organizing and running a community repair café event where people can bring broken items to be fixed by volunteers.",
    tags: ["repair", "community", "events", "waste reduction"],
    views: 3845,
    downloads: 1294,
    rating: 4.6,
    uploadDate: "2025-03-15",
  },
];

const allTags = Array.from(new Set(resources.flatMap(resource => resource.tags)));

const Resources = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const navigate = useNavigate();

  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const filteredResources = resources.filter(resource => {
    const matchesSearch = 
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.author.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesType = typeFilter === "all" || resource.type === typeFilter;
    
    const matchesTags = 
      selectedTags.length === 0 || 
      selectedTags.some(tag => resource.tags.includes(tag));
    
    return matchesSearch && matchesType && matchesTags;
  });

  const getFormatIcon = (type: string) => {
    switch(type) {
      case 'guide':
        return <FileText className="h-5 w-5" />;
      case 'video':
        return <Video className="h-5 w-5" />;
      case 'article':
        return <BookOpen className="h-5 w-5" />;
      default:
        return <FileDown className="h-5 w-5" />;
    }
  };

  return (
    <MainLayout>
      <div className="space-y-8 animate-fade-in">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">Resource Library</h1>
            <p className="text-muted-foreground">
              Access guides, videos, and articles to help you live more sustainably.
            </p>
          </div>
          <Button onClick={() => navigate("/upload")}>Upload Resource</Button>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Input 
            placeholder="Search resources..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          
          <Select value={typeFilter} onValueChange={setTypeFilter}>
            <SelectTrigger>
              <SelectValue placeholder="Resource type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="guide">Guides</SelectItem>
              <SelectItem value="article">Articles</SelectItem>
              <SelectItem value="video">Videos</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="recent">Most Recent</SelectItem>
              <SelectItem value="popular">Most Popular</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-wrap gap-2">
          {allTags.slice(0, 10).map(tag => (
            <Badge 
              key={tag}
              variant={selectedTags.includes(tag) ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() => handleTagToggle(tag)}
            >
              {tag}
            </Badge>
          ))}
        </div>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredResources.length > 0 ? (
            filteredResources.map(resource => (
              <Card key={resource.id} className="eco-card flex flex-col">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-2 rounded-full bg-primary/10 text-primary">
                      {getFormatIcon(resource.type)}
                    </div>
                    <Badge>{resource.type}</Badge>
                  </div>
                  <CardTitle className="text-xl line-clamp-2">
                    {resource.title}
                  </CardTitle>
                  <CardDescription>
                    By {resource.author} · {new Date(resource.uploadDate).toLocaleDateString()}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground line-clamp-3">
                    {resource.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {resource.tags.map(tag => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="border-t pt-4 flex justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      {resource.views.toLocaleString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <Star className="h-4 w-4" />
                      {resource.rating}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    {resource.format === 'pdf' && (
                      <Button variant="outline" size="sm" className="flex items-center gap-1">
                        <Download className="h-4 w-4" />
                        <span className="hidden md:inline">Download</span>
                      </Button>
                    )}
                    <Button size="sm" className="flex items-center gap-1">
                      <ExternalLink className="h-4 w-4" />
                      <span className="hidden md:inline">View</span>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))
          ) : (
            <div className="text-center py-8 col-span-full">
              <p className="text-muted-foreground">No resources found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default Resources;
