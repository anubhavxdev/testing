
import { Leaf } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary mt-auto">
      <div className="container py-12 px-4 md:px-6">
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="h-5 w-5 text-eco-leaf" />
              <span className="text-lg font-bold text-eco-leaf">SustainaConnect</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Building a sustainable future through community collaboration and knowledge sharing.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <span className="sr-only">Twitter</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <span className="sr-only">Instagram</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <span className="sr-only">GitHub</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary">Home</Link>
              </li>
              <li>
                <Link to="/forums" className="text-sm text-muted-foreground hover:text-primary">Forums</Link>
              </li>
              <li>
                <Link to="/resources" className="text-sm text-muted-foreground hover:text-primary">Resources</Link>
              </li>
              <li>
                <Link to="/projects" className="text-sm text-muted-foreground hover:text-primary">Projects</Link>
              </li>
              <li>
                <Link to="/events" className="text-sm text-muted-foreground hover:text-primary">Events</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary">Code of Conduct</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-4">Join the Movement</h3>
            <p className="text-sm text-muted-foreground mb-4">Subscribe to our newsletter for updates and sustainability tips.</p>
            <div className="flex space-x-2">
              <input type="email" placeholder="Email address" className="flex-1 rounded-md border border-input px-3 py-2 text-sm shadow-sm" />
              <button className="bg-primary text-primary-foreground rounded-md px-3 py-2 text-sm">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center">
          <p className="text-xs text-muted-foreground">© 2025 SustainaConnect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
