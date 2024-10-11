"use client";

import { useState } from 'react';
import { Beaker } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Home() {
  const [userType, setUserType] = useState("shoppers");

  const handleUserTypeChange = (value: string) => {
    setUserType(value);
    if (value === "brands") {
      window.location.href = "https://grow.trylab.ai";
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <nav className="fixed top-0 left-0 right-0 flex justify-between items-center p-3 bg-white bg-opacity-90 backdrop-blur-sm">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Beaker className="h-6 w-6 text-blue-500" />
            <span className="text-xl font-bold font-outfit">Trylab</span>
          </div>
          <Select onValueChange={handleUserTypeChange} defaultValue={userType}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Select user type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="shoppers">For shoppers</SelectItem>
              <SelectItem value="brands">For brands</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </nav>

      <div className="text-center flex flex-col items-center justify-center flex-grow">
        <h2 className="text-sm mb-3 font-inter text-gray-600">coming soon</h2>
        <h1 className="text-5xl sm:text-6xl font-bold mb-6 font-outfit leading-tight">Try Products.<br />Earn Rewards.</h1>
        <p className="text-lg mb-6 font-inter text-gray-700 max-w-xl mx-auto">
          Join our loyalty program that rewards you for discussing the ecommerce products you've purchased with AI. Share your experiences, earn points, and unlock exclusive benefits!
        </p>
      </div>

      <footer className="text-center text-sm text-gray-500 mt-8">
        © 2025 Trylab. All rights reserved.
      </footer>
    </main>
  );
}