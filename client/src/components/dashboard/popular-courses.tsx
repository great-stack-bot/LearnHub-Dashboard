import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";

interface PopularCourse {
  name: string;
  students: number;
  color: string;
  progress: number;
}

export default function PopularCourses() {
  const { data: popularCourses, isLoading } = useQuery<PopularCourse[]>({
    queryKey: ["/api/popular-courses"],
  });

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Popular courses</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="h-6 bg-muted rounded"></div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  const getColorClass = (color: string) => {
    const colorMap: Record<string, string> = {
      'bg-red-500': 'bg-red-500',
      'bg-cyan-500': 'bg-cyan-500',
      'bg-purple-500': 'bg-purple-500',
      'bg-green-500': 'bg-green-500',
    };
    return colorMap[color] || 'bg-blue-500';
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Popular courses</CardTitle>
          <Button variant="ghost" size="icon">
            <MoreHorizontal className="w-4 h-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {popularCourses?.map((course, index) => (
            <div key={index} className="flex items-center justify-between py-3">
              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${getColorClass(course.color)}`}></div>
                <span className="text-sm text-foreground">{course.name}</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-muted-foreground">
                  {course.students > 1000 ? `${(course.students / 1000).toFixed(1)}k` : course.students}
                </span>
                <div className="w-24 bg-muted rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${getColorClass(course.color)}`}
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
