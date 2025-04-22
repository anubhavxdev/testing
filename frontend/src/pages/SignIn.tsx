import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import MainLayout from "@/components/layout/MainLayout";
import { LogIn } from "lucide-react";
import { Link } from "react-router-dom";
import axios from 'axios';

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5005/api/signin", {
        email,
        password,
      });

      alert("Sign in successful");
      console.log("User data:", response.data.user);
    } catch (error) {
      if (error.response) {
        alert(`Error: ${error.response.data.error}`);
      } else {
        alert("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <MainLayout>
      <div className="max-w-md mx-auto space-y-6 py-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-eco-leaf mb-4">
            Welcome Back
          </h1>
          <p className="text-muted-foreground">
            Sign in to continue your sustainable journey
          </p>
        </div>
        
        <form onSubmit={handleSignIn} className="space-y-4">
          <div className="space-y-2">
            <Label>Email</Label>
            <Input 
              type="email" 
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>
          
          <div className="space-y-2">
            <Label>Password</Label>
            <Input 
              type="password" 
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>
          
          <Button type="submit" className="w-full flex items-center gap-2">
            <LogIn className="h-4 w-4" />
            Sign In
          </Button>
        </form>
        
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            Don't have an account? {" "}
            <Link 
              to="/join" 
              className="text-eco-leaf hover:underline"
            >
              Join Now
            </Link>
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default SignIn;
