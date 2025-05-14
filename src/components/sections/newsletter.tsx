
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

export function NewsletterSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate newsletter subscription
    console.log("Newsletter subscription:", email);
    toast({
      title: "Subscribed!",
      description: "Thank you for subscribing to my newsletter.",
    });
    setEmail("");
  };

  return (
    <section className="py-16 bg-accent2 text-white">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Subscribe To Get Latest Updates From Me
            </h2>
            <p className="text-white/80">
              Stay updated with my latest projects, articles, and tech insights.
            </p>
          </div>
          <div className="lg:col-span-5">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus-visible:ring-white/50"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit" className="bg-white hover:bg-white/90 text-accent2 font-medium px-6">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
