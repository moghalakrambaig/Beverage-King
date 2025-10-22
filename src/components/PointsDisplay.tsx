import { Award, TrendingUp, Gift } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface PointsDisplayProps {
  points: number;
  totalEarned: number;
}

export const PointsDisplay = ({ points, totalEarned }: PointsDisplayProps) => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Your Rewards
          </span>
        </h2>
        <p className="text-xl text-muted-foreground">
          Track your points and unlock exclusive benefits
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-card/80 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
          <CardHeader className="relative">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-primary/10">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-lg">Current Points</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="relative">
            <p className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {points}
            </p>
            <p className="text-sm text-muted-foreground mt-2">Available to redeem</p>
          </CardContent>
        </Card>

        <Card className="bg-card/80 backdrop-blur-sm border-accent/20 hover:border-accent/40 transition-all overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />
          <CardHeader className="relative">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-accent/10">
                <TrendingUp className="w-8 h-8 text-accent" />
              </div>
              <CardTitle className="text-lg">Total Earned</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="relative">
            <p className="text-5xl font-bold text-foreground">
              {totalEarned}
            </p>
            <p className="text-sm text-muted-foreground mt-2">Lifetime points</p>
          </CardContent>
        </Card>

        <Card className="bg-card/80 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
          <CardHeader className="relative">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-primary/10">
                <Gift className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-lg">Next Reward</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="relative">
            <p className="text-5xl font-bold text-foreground">
              {Math.max(0, 500 - points)}
            </p>
            <p className="text-sm text-muted-foreground mt-2">Points needed</p>
          </CardContent>
        </Card>
      </div>

      {/* Rewards tiers */}
      <div className="mt-12 p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border">
        <h3 className="text-2xl font-bold mb-6 text-center">Rewards Tiers</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 rounded-xl bg-muted/30">
            <div className="text-3xl font-bold text-primary mb-2">500</div>
            <div className="font-semibold mb-2">Silver Tier</div>
            <div className="text-sm text-muted-foreground">10% discount on select items</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-muted/30">
            <div className="text-3xl font-bold text-primary mb-2">1000</div>
            <div className="font-semibold mb-2">Gold Tier</div>
            <div className="text-sm text-muted-foreground">15% discount + free delivery</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-muted/30">
            <div className="text-3xl font-bold text-primary mb-2">2000</div>
            <div className="font-semibold mb-2">Platinum Tier</div>
            <div className="text-sm text-muted-foreground">20% discount + exclusive access</div>
          </div>
        </div>
      </div>
    </div>
  );
};