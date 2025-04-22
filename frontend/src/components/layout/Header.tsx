
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Leaf, LogIn, UserPlus } from "lucide-react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Forums", path: "/forums" },
  { name: "Resources", path: "/resources" },
  { name: "Projects", path: "/projects" },
  { name: "Events", path: "/events" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <Leaf className="h-6 w-6 text-eco-leaf" />
            <span className="text-xl font-bold text-eco-leaf">SustainaConnect</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === item.path
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Button 
            variant="outline" 
            className="ml-4" 
            asChild
          >
            <Link to="/signin" className="flex items-center gap-2">
              <LogIn className="h-4 w-4" />
              Sign In
            </Link>
          </Button>
          <Button asChild>
            <Link to="/join" className="flex items-center gap-2">
              <UserPlus className="h-4 w-4" />
              Join Now
            </Link>
          </Button>
        </nav>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 -mr-2"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden animate-fade-in">
          <nav className="container py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  location.pathname === item.path
                    ? "bg-primary text-white"
                    : "hover:bg-accent"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex flex-col gap-2 mt-4 px-4">
              <Button 
                variant="outline" 
                className="w-full justify-center"
                asChild
              >
                <Link to="/signin" className="flex items-center gap-2">
                  <LogIn className="h-4 w-4" />
                  Sign In
                </Link>
              </Button>
              <Button 
                className="w-full justify-center"
                asChild
              >
                <Link to="/join" className="flex items-center gap-2">
                  <UserPlus className="h-4 w-4" />
                  Join Now
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
