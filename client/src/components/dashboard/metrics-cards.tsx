import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Users, DollarSign } from "lucide-react";
import type { Metrics } from "@shared/schema";

export default function MetricsCards() {
  const { data: metrics, isLoading } = useQuery<Metrics>({
    queryKey: ["/api/metrics"],
  });

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="animate-pulse">
            <CardContent className="p-6">
              <div className="h-20 bg-muted rounded"></div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (!metrics) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {/* Teachers Card */}
      <Card className="gradient-blue text-primary-foreground">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <GraduationCap className="w-5 h-5" />
              <span className="text-sm opacity-90">{metrics.teachersGrowth}</span>
            </div>
          </div>
          <div className="space-y-1">
            <h3 className="text-3xl font-bold">{metrics.totalTeachers.toLocaleString()}</h3>
            <p className="text-sm opacity-90">Total Teachers</p>
          </div>
        </CardContent>
      </Card>

      {/* Students Card */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm text-green-600 font-medium">{metrics.studentsGrowth}</span>
            </div>
          </div>
          <div className="space-y-1">
            <h3 className="text-3xl font-bold text-foreground">{metrics.totalStudents.toLocaleString()}</h3>
            <p className="text-sm text-muted-foreground">Total Students</p>
          </div>
        </CardContent>
      </Card>

      {/* Sales Card */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <DollarSign className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm text-green-600 font-medium">{metrics.salesGrowth}</span>
            </div>
            <Button variant="ghost" size="sm" className="text-primary hover:text-primary">
              Add
            </Button>
          </div>
          <div className="space-y-1">
            <h3 className="text-3xl font-bold text-foreground">
              ${parseFloat(metrics.totalSales).toLocaleString()}
            </h3>
            <p className="text-sm text-muted-foreground">Total Sales</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
