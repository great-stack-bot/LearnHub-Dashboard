import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import CourseCard from "@/components/courses/course-card";
import CoursePlayer from "@/components/courses/course-player";
import type { Course } from "@shared/schema";

export default function Courses() {
  const [selectedCourse, setSelectedCourse] = useState<Course | undefined>();
  
  const { data: courses, isLoading } = useQuery<Course[]>({
    queryKey: ["/api/courses"],
  });

  const handleStartCourse = (course: Course) => {
    setSelectedCourse(course);
  };

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-card rounded-xl p-6 animate-pulse">
                <div className="h-48 bg-muted rounded mb-4"></div>
                <div className="h-6 bg-muted rounded mb-2"></div>
                <div className="h-4 bg-muted rounded"></div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-card rounded-xl p-6 animate-pulse">
          <div className="h-64 bg-muted rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Course List */}
      <div className="lg:col-span-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {courses?.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onStartCourse={handleStartCourse}
            />
          ))}
        </div>
      </div>

      {/* Course Player */}
      <CoursePlayer course={selectedCourse} />
    </div>
  );
}
