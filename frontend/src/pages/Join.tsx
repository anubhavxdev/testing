import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import MainLayout from "@/components/layout/MainLayout";
import { UserPlus } from "lucide-react";
import { Link } from "react-router-dom";
import axios from 'axios';

const Join = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleJoin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5005/api/join", {
        name,
        email,
        password,
      });

      alert("Account created successfully");
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
            Join SustainaConnect
          </h1>
          <p className="text-muted-foreground">
            Create your account and start making a difference
          </p>
        </div>
        
        <form onSubmit={handleJoin} className="space-y-4">
          <div className="space-y-2">
            <Label>Full Name</Label>
            <Input 
              type="text" 
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required 
            />
          </div>
          
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
              placeholder="Choose a strong password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>
          
          <div className="space-y-2">
            <Label>Confirm Password</Label>
            <Input 
              type="password" 
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required 
            />
          </div>
          
          <Button type="submit" className="w-full flex items-center gap-2">
            <UserPlus className="h-4 w-4" />
            Create Account
          </Button>
        </form>
        
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            Already have an account? {" "}
            <Link 
              to="/signin" 
              className="text-eco-leaf hover:underline"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Join;
