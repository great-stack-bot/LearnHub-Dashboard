import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, MoreHorizontal } from "lucide-react";

interface ReportsData {
  analyticalReports: number;
  researchReports: number;
  departmentalReports: number;
  totalProgress: number;
  totalTarget: number;
  progressPercentage: number;
}

export default function ReportsWidget() {
  const { data: reports, isLoading } = useQuery<ReportsData>({
    queryKey: ["/api/reports"],
  });

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Reports</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="animate-pulse">
            <div className="h-32 bg-muted rounded"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!reports) {
    return null;
  }

  const reportItems = [
    { name: "Analytical reports", count: reports.analyticalReports },
    { name: "Research reports", count: reports.researchReports },
    { name: "Departmental report", count: reports.departmentalReports },
  ];

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Reports</CardTitle>
          <Button variant="ghost" size="icon">
            <MoreHorizontal className="w-4 h-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="space-y-4">
            {reportItems.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">{item.name}</span>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium">{item.count}</span>
                  <ChevronRight className="w-3 h-3 text-muted-foreground" />
                </div>
              </div>
            ))}
          </div>
          
          {/* Circular Progress */}
          <div className="relative w-24 h-24">
            <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
              <path 
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" 
                fill="none" 
                stroke="hsl(var(--muted))" 
                strokeWidth="2"
              />
              <path 
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" 
                fill="none" 
                stroke="hsl(var(--primary))" 
                strokeWidth="2" 
                strokeDasharray={`${reports.progressPercentage}, 100`}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-lg font-bold text-foreground">{reports.totalProgress}</span>
              <span className="text-xs text-muted-foreground">from {reports.totalTarget}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
