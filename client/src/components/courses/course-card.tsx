import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import type { Course } from "@shared/schema";

interface CourseCardProps {
  course: Course;
  onStartCourse?: (course: Course) => void;
}

export default function CourseCard({ course, onStartCourse }: CourseCardProps) {
  const handleStartCourse = () => {
    onStartCourse?.(course);
  };

  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative">
        <img 
          src={course.thumbnail} 
          alt={course.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
          {course.videoCount} videos
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold text-foreground mb-2">{course.title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{course.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-muted-foreground">{course.rating}</span>
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-current" />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              ({course.enrollmentCount > 1000 ? `${(course.enrollmentCount / 1000).toFixed(1)}k` : course.enrollmentCount})
            </span>
          </div>
          <Button onClick={handleStartCourse}>
            Start Course
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
