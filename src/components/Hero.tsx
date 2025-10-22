import { Button } from "@/components/ui/button";
import { Wine, Award, Users } from "lucide-react";

interface HeroProps {
  onGetStarted: () => void;
}

export const Hero = ({ onGetStarted }: HeroProps) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-card">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,hsl(45_100%_60%/0.1),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(280_40%_20%/0.3),transparent)]" />
      
      <div className="container relative z-10 px-4 py-20 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo/Icon */}
          <div className="mb-8 flex justify-center">
            <div className="p-4 rounded-2xl bg-primary/10 backdrop-blur-sm border border-primary/20">
              <Wine className="w-16 h-16 text-primary" />
            </div>
          </div>

          {/* Main heading */}
          <h1 className="mb-6 text-5xl md:text-7xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Premium Spirits
            </span>
            <br />
            <span className="text-foreground">Exceptional Rewards</span>
          </h1>

          {/* Subheading */}
          <p className="mb-12 text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Join our exclusive loyalty program and earn points with every purchase. 
            Experience the finest selection of spirits and wines.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              onClick={onGetStarted}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-xl shadow-[0_0_30px_hsl(45_100%_60%/0.3)] hover:shadow-[0_0_40px_hsl(45_100%_60%/0.4)] transition-all"
            >
              Get Started
            </Button>
            <Button 
              onClick={onGetStarted}
              size="lg"
              variant="outline"
              className="border-primary/30 hover:bg-primary/10 text-foreground font-semibold px-8 py-6 text-lg rounded-xl"
            >
              Learn More
            </Button>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all">
              <Award className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Earn Points</h3>
              <p className="text-muted-foreground">Every purchase adds to your rewards balance</p>
            </div>
            <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all">
              <Wine className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Premium Selection</h3>
              <p className="text-muted-foreground">Curated collection of fine spirits</p>
            </div>
            <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Join Community</h3>
              <p className="text-muted-foreground">Connect with fellow enthusiasts</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};