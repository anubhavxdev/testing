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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Calendar, 
  Clock, 
  Users, 
  Video,
  Globe,
  BookOpen
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const events = [
  {
    id: 1,
    title: "Urban Gardening Workshop",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
    organizer: "City Greening Initiative",
    type: "workshop",
    format: "in-person",
    location: "Community Center, Portland, OR",
    date: "2025-05-15T10:00",
    duration: "3 hours",
    participants: {
      registered: 18,
      capacity: 30
    },
    description: "Learn practical techniques for growing food in small urban spaces. This hands-on workshop covers container gardening, vertical growing systems, and soil management.",
    tags: ["gardening", "urban", "food", "workshop"],
    price: "Free",
  },
  {
    id: 2,
    title: "Sustainable Fashion Panel Discussion",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
    organizer: "Eco Fashion Collective",
    type: "panel",
    format: "online",
    location: "Zoom Webinar",
    date: "2025-04-22T18:30",
    duration: "1.5 hours",
    participants: {
      registered: 142,
      capacity: 300
    },
    description: "Join industry experts for a discussion on sustainable practices in fashion, including ethical manufacturing, materials innovation, and circular business models.",
    tags: ["fashion", "sustainability", "industry", "webinar"],
    price: "$5",
  },
  {
    id: 3,
    title: "Community Bike Repair Workshop",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    organizer: "Green Transportation Alliance",
    type: "workshop",
    format: "in-person",
    location: "Central Park, Austin, TX",
    date: "2025-06-05T09:00",
    duration: "4 hours",
    participants: {
      registered: 25,
      capacity: 40
    },
    description: "Bring your bicycle for a free tune-up and learn basic maintenance skills. Tools and some spare parts will be provided by local bike shops.",
    tags: ["transportation", "repair", "bikes", "DIY"],
    price: "Free",
  },
  {
    id: 4,
    title: "Renewable Energy Home Solutions",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
    organizer: "Clean Energy Network",
    type: "webinar",
    format: "online",
    location: "YouTube Live",
    date: "2025-04-30T19:00",
    duration: "1 hour",
    participants: {
      registered: 87,
      capacity: 500
    },
    description: "Discover practical and affordable renewable energy solutions for your home. Experts will discuss solar, heat pumps, energy efficiency, and available incentives.",
    tags: ["energy", "solar", "home", "webinar"],
    price: "Free",
  },
  {
    id: 5,
    title: "Zero Waste Cooking Class",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
    organizer: "Sustainable Kitchen Collective",
    type: "class",
    format: "in-person",
    location: "Community Kitchen, Denver, CO",
    date: "2025-05-08T17:30",
    duration: "2.5 hours",
    participants: {
      registered: 12,
      capacity: 15
    },
    description: "Learn to reduce food waste while creating delicious meals. This hands-on cooking class focuses on using whole ingredients and repurposing leftovers.",
    tags: ["food", "cooking", "zero waste", "class"],
    price: "$25",
  },
  {
    id: 6,
    title: "Environmental Film Festival",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
    organizer: "Climate Action Coalition",
    type: "festival",
    format: "hybrid",
    location: "City Art Theater & Online",
    date: "2025-06-20T13:00",
    duration: "3 days",
    participants: {
      registered: 215,
      capacity: 400
    },
    description: "A weekend of inspiring environmental documentaries followed by director discussions and workshops on taking action in your community.",
    tags: ["film", "festival", "education", "community"],
    price: "$15 - $45",
  },
];

const eventTypes = Array.from(new Set(events.map(event => event.type)));
const eventFormats = Array.from(new Set(events.map(event => event.format)));

const Events = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedFormat, setSelectedFormat] = useState<string | null>(null);

  const filteredEvents = events.filter(event => {
    const matchesSearch = 
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesType = selectedType === null || event.type === selectedType;
    const matchesFormat = selectedFormat === null || event.format === selectedFormat;
    
    return matchesSearch && matchesType && matchesFormat;
  });

  const sortedEvents = [...filteredEvents].sort((a, b) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });

  const groupedEvents: Record<string, typeof events> = {};
  sortedEvents.forEach(event => {
    const date = new Date(event.date);
    const monthYear = date.toLocaleString('en-US', { month: 'long', year: 'numeric' });
    
    if (!groupedEvents[monthYear]) {
      groupedEvents[monthYear] = [];
    }
    groupedEvents[monthYear].push(event);
  });

  const getFormatIcon = (format: string) => {
    switch(format) {
      case 'online':
        return <Video className="h-4 w-4" />;
      case 'hybrid':
        return <Globe className="h-4 w-4" />;
      case 'in-person':
        return <MapPin className="h-4 w-4" />;
      default:
        return <BookOpen className="h-4 w-4" />;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  return (
    <MainLayout>
      <div className="space-y-8 animate-fade-in">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">Events & Workshops</h1>
            <p className="text-muted-foreground">
              Find and register for upcoming sustainability events near you.
            </p>
          </div>
          <Button onClick={() => navigate("/upload")}>Create Event</Button>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <Input 
            placeholder="Search events..." 
            className="md:max-w-xs" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          
          <div className="flex flex-wrap gap-2">
            <span className="text-sm font-medium self-center mr-2">Type:</span>
            <Badge 
              variant={selectedType === null ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() => setSelectedType(null)}
            >
              All
            </Badge>
            {eventTypes.map(type => (
              <Badge 
                key={type}
                variant={selectedType === type ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setSelectedType(type)}
              >
                {type}
              </Badge>
            ))}
          </div>
          
          <div className="flex flex-wrap gap-2 ml-0 md:ml-4">
            <span className="text-sm font-medium self-center mr-2">Format:</span>
            <Badge 
              variant={selectedFormat === null ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() => setSelectedFormat(null)}
            >
              All
            </Badge>
            {eventFormats.map(format => (
              <Badge 
                key={format}
                variant={selectedFormat === format ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setSelectedFormat(format)}
              >
                {format}
              </Badge>
            ))}
          </div>
        </div>

        <Tabs defaultValue="grid" className="w-full">
          <div className="flex justify-end">
            <TabsList>
              <TabsTrigger value="grid">Grid</TabsTrigger>
              <TabsTrigger value="list">List</TabsTrigger>
              <TabsTrigger value="calendar">Calendar</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="grid" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredEvents.length > 0 ? (
                filteredEvents.map(event => (
                  <Card key={event.id} className="eco-card overflow-hidden flex flex-col">
                    <div className="aspect-video relative">
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 left-3 bg-background/80 backdrop-blur-sm p-2 rounded-md">
                        <Badge className="capitalize">{event.type}</Badge>
                      </div>
                      <div className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm p-2 rounded-md flex items-center gap-1">
                        {getFormatIcon(event.format)}
                        <span className="text-xs font-medium capitalize">{event.format}</span>
                      </div>
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl line-clamp-1">
                        {event.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-1">
                        Organized by {event.organizer}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pb-2 flex-grow">
                      <div className="flex flex-col gap-2 mb-4 text-sm">
                        <div className="flex items-start gap-2">
                          <Calendar className="h-4 w-4 mt-0.5 shrink-0" />
                          <span>{formatDate(event.date)}</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Clock className="h-4 w-4 mt-0.5 shrink-0" />
                          <span>{event.duration}</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                          <span className="line-clamp-1">{event.location}</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground line-clamp-2">
                        {event.description}
                      </p>
                    </CardContent>
                    <CardFooter className="pt-4 border-t flex justify-between">
                      <div className="flex items-center gap-1 text-sm">
                        <Users className="h-4 w-4" />
                        <span>
                          {event.participants.registered}/{event.participants.capacity} spots filled
                        </span>
                      </div>
                      <Button size="sm">Register</Button>
                    </CardFooter>
                  </Card>
                ))
              ) : (
                <div className="text-center py-8 col-span-full">
                  <p className="text-muted-foreground">No events found matching your criteria.</p>
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="list" className="mt-6">
            <div className="space-y-6">
              {Object.keys(groupedEvents).length > 0 ? (
                Object.entries(groupedEvents).map(([monthYear, monthEvents]) => (
                  <div key={monthYear}>
                    <h3 className="text-lg font-semibold mb-4">{monthYear}</h3>
                    <div className="space-y-4">
                      {monthEvents.map(event => (
                        <Card key={event.id} className="eco-card overflow-hidden">
                          <div className="md:flex">
                            <div className="md:w-1/4 h-48 md:h-auto relative">
                              <img 
                                src={event.image} 
                                alt={event.title}
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute top-3 left-3 bg-background/80 backdrop-blur-sm p-2 rounded-md">
                                <Badge className="capitalize">{event.type}</Badge>
                              </div>
                            </div>
                            <div className="p-6 md:w-3/4 flex flex-col">
                              <div className="mb-2 flex items-center gap-2">
                                <div className="flex items-center gap-1">
                                  {getFormatIcon(event.format)}
                                  <span className="text-xs font-medium capitalize">{event.format}</span>
                                </div>
                                <span className="text-sm font-medium">{event.price}</span>
                              </div>
                              <h3 className="text-xl font-bold mb-1">{event.title}</h3>
                              <p className="text-sm text-muted-foreground mb-4">Organized by {event.organizer}</p>
                              
                              <div className="flex flex-wrap gap-x-6 gap-y-2 mb-4 text-sm">
                                <div className="flex items-center gap-2">
                                  <Calendar className="h-4 w-4" />
                                  <span>{formatDate(event.date)}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Clock className="h-4 w-4" />
                                  <span>{event.duration}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <MapPin className="h-4 w-4" />
                                  <span>{event.location}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Users className="h-4 w-4" />
                                  <span>
                                    {event.participants.registered}/{event.participants.capacity} registered
                                  </span>
                                </div>
                              </div>
                              
                              <p className="text-muted-foreground line-clamp-2 mb-4 flex-grow">
                                {event.description}
                              </p>
                              
                              <div className="flex justify-between items-center mt-2">
                                <div className="flex flex-wrap gap-2">
                                  {event.tags.slice(0, 3).map(tag => (
                                    <Badge key={tag} variant="outline" className="text-xs">
                                      {tag}
                                    </Badge>
                                  ))}
                                </div>
                                <Button>Register</Button>
                              </div>
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">No events found matching your criteria.</p>
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="calendar" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <div className="text-center py-10">
                  <h3 className="text-lg font-medium mb-2">Calendar View</h3>
                  <p className="text-muted-foreground">Calendar view coming soon!</p>
                  <p className="text-sm text-muted-foreground mt-4">In the meantime, please use the grid or list view to browse events.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default Events;
