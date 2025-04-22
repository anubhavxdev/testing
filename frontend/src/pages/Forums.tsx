import { useState } from "react";
import { Link } from "react-router-dom";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  MessageSquare, 
  ThumbsUp, 
  Clock, 
  Trash2, 
  Recycle, 
  Zap,
  Leaf, 
  ShoppingBag 
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const categories = [
  { id: 1, name: "Waste Management", icon: <Trash2 className="h-5 w-5" />, count: 46 },
  { id: 2, name: "Renewable Energy", icon: <Zap className="h-5 w-5" />, count: 32 },
  { id: 3, name: "Recycling", icon: <Recycle className="h-5 w-5" />, count: 28 },
  { id: 4, name: "Sustainable Living", icon: <Leaf className="h-5 w-5" />, count: 64 },
  { id: 5, name: "Eco-friendly Products", icon: <ShoppingBag className="h-5 w-5" />, count: 37 },
];

const threads = [
  {
    id: 1,
    title: "Tips for reducing plastic waste in everyday life",
    author: "EcoWarrior",
    category: "Waste Management",
    replies: 24,
    likes: 43,
    lastActivity: "2 hours ago",
    excerpt: "I've been trying to minimize plastic waste in my daily routine and wanted to share some effective strategies that worked for me...",
  },
  {
    id: 2,
    title: "Solar panel installation: DIY or professional?",
    author: "SolarPowered",
    category: "Renewable Energy",
    replies: 31,
    likes: 18,
    lastActivity: "6 hours ago",
    excerpt: "I'm considering installing solar panels on my home and am weighing the pros and cons of doing it myself versus hiring professionals...",
  },
  {
    id: 3,
    title: "Community composting initiative - seeking advice",
    author: "GreenThumb",
    category: "Waste Management",
    replies: 12,
    likes: 27,
    lastActivity: "1 day ago",
    excerpt: "Our neighborhood is starting a community composting program, and I'd appreciate any insights from those who have experience...",
  },
  {
    id: 4,
    title: "Best eco-friendly cleaning products?",
    author: "CleanGreen",
    category: "Eco-friendly Products",
    replies: 42,
    likes: 36,
    lastActivity: "3 days ago",
    excerpt: "Looking for recommendations on truly eco-friendly cleaning products that actually work well. I've tried several brands but...",
  },
  {
    id: 5,
    title: "Urban gardening in small spaces - share your success stories",
    author: "CityGardener",
    category: "Sustainable Living",
    replies: 19,
    likes: 51,
    lastActivity: "5 days ago",
    excerpt: "I've been growing herbs and some vegetables on my small apartment balcony and want to expand. Looking for creative solutions...",
  },
];

const Forums = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const filteredThreads = threads.filter(thread => 
    thread.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    thread.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    thread.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <MainLayout>
      <div className="space-y-8 animate-fade-in">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">Community Forums</h1>
            <p className="text-muted-foreground">
              Join discussions on sustainability topics and connect with like-minded individuals.
            </p>
          </div>
          <Button onClick={() => navigate("/upload")}>Create New Thread</Button>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          <div className="md:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Categories</CardTitle>
                <CardDescription>Browse by topic</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-1">
                  {categories.map(category => (
                    <Button 
                      key={category.id} 
                      variant="ghost" 
                      className="w-full justify-start rounded-none p-3 font-normal"
                    >
                      <div className="flex items-center gap-3">
                        {category.icon}
                        <span>{category.name}</span>
                        <span className="ml-auto bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                          {category.count}
                        </span>
                      </div>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="md:col-span-3 space-y-6">
            <div className="flex flex-col md:flex-row gap-4">
              <Input 
                placeholder="Search threads..." 
                className="md:max-w-xs" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              
              <Tabs defaultValue="latest" className="w-full md:w-auto ml-auto">
                <TabsList>
                  <TabsTrigger value="latest">Latest</TabsTrigger>
                  <TabsTrigger value="popular">Popular</TabsTrigger>
                  <TabsTrigger value="unanswered">Unanswered</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            
            <div className="space-y-4">
              {filteredThreads.length > 0 ? (
                filteredThreads.map(thread => (
                  <Card key={thread.id} className="eco-card">
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                          {thread.category}
                        </span>
                      </div>
                      <CardTitle className="text-xl">
                        <Link to={`/forums/thread/${thread.id}`}>
                          {thread.title}
                        </Link>
                      </CardTitle>
                      <CardDescription>
                        Posted by {thread.author}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{thread.excerpt}</p>
                    </CardContent>
                    <CardFooter className="border-t pt-4 flex justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <MessageSquare className="h-4 w-4" />
                          {thread.replies} replies
                        </span>
                        <span className="flex items-center gap-1">
                          <ThumbsUp className="h-4 w-4" />
                          {thread.likes} likes
                        </span>
                      </div>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {thread.lastActivity}
                      </span>
                    </CardFooter>
                  </Card>
                ))
              ) : (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">No threads found matching your search.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Forums;
