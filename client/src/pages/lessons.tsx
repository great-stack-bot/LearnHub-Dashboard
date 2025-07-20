import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Play, Clock, BookOpen, Search, Filter } from "lucide-react";
import type { Course } from "@shared/schema";

interface Lesson {
  id: string;
  title: string;
  duration: string;
  completed: boolean;
  courseId: string;
  courseName: string;
  thumbnail: string;
}

export default function Lessons() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState<"all" | "completed" | "incomplete">("all");
  
  const { data: courses, isLoading } = useQuery<Course[]>({
    queryKey: ["/api/courses"],
  });

  // Mock lessons data - in a real app, this would come from the API
  const mockLessons: Lesson[] = [
    {
      id: "1",
      title: "Introduction to UI/UX Design Principles",
      duration: "12:34",
      completed: true,
      courseId: "1",
      courseName: "Complete UI/UX Design Course",
      thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=100"
    },
    {
      id: "2", 
      title: "Design Thinking Process & Methods",
      duration: "18:22",
      completed: true,
      courseId: "1",
      courseName: "Complete UI/UX Design Course",
      thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=100"
    },
    {
      id: "3",
      title: "User Research & Personas",
      duration: "15:45",
      completed: false,
      courseId: "1",
      courseName: "Complete UI/UX Design Course",
      thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=100"
    },
    {
      id: "4",
      title: "Android Development Setup",
      duration: "20:15",
      completed: false,
      courseId: "2",
      courseName: "Android App Development",
      thumbnail: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=100"
    },
    {
      id: "5",
      title: "Activities and Intents in Android",
      duration: "25:30",
      completed: false,
      courseId: "2",
      courseName: "Android App Development",
      thumbnail: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=100"
    },
    {
      id: "6",
      title: "iOS Development with Swift",
      duration: "22:45",
      completed: false,
      courseId: "3",
      courseName: "iOS App Development",
      thumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=100"
    }
  ];

  const filteredLessons = mockLessons.filter(lesson => {
    const matchesSearch = lesson.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         lesson.courseName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterStatus === "all" || 
                         (filterStatus === "completed" && lesson.completed) ||
                         (filterStatus === "incomplete" && !lesson.completed);
    return matchesSearch && matchesFilter;
  });

  const completedCount = mockLessons.filter(lesson => lesson.completed).length;
  const totalCount = mockLessons.length;

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="animate-pulse">
          <div className="h-8 bg-muted rounded w-1/3 mb-4"></div>
          <div className="h-4 bg-muted rounded w-2/3"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Card key={i} className="animate-pulse">
              <CardContent className="p-6">
                <div className="h-24 bg-muted rounded"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">My Lessons</h1>
        <p className="text-muted-foreground">
          Continue your learning journey • {completedCount}/{totalCount} lessons completed
        </p>
      </div>

      {/* Progress Overview */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">{totalCount}</div>
              <div className="text-sm text-muted-foreground">Total Lessons</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-1">{completedCount}</div>
              <div className="text-sm text-muted-foreground">Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-1">{totalCount - completedCount}</div>
              <div className="text-sm text-muted-foreground">In Progress</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Search lessons..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex space-x-2">
          <Button
            variant={filterStatus === "all" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilterStatus("all")}
          >
            All
          </Button>
          <Button
            variant={filterStatus === "completed" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilterStatus("completed")}
          >
            Completed
          </Button>
          <Button
            variant={filterStatus === "incomplete" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilterStatus("incomplete")}
          >
            In Progress
          </Button>
        </div>
      </div>

      {/* Lessons Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredLessons.map((lesson) => (
          <Card key={lesson.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative">
              <img 
                src={lesson.thumbnail} 
                alt={lesson.title}
                className="w-full h-32 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <Button size="sm" className="bg-white text-black hover:bg-gray-100">
                  <Play className="w-4 h-4 mr-1" />
                  Play
                </Button>
              </div>
              <div className="absolute top-2 right-2 flex space-x-1">
                <Badge variant={lesson.completed ? "default" : "secondary"} className="text-xs">
                  {lesson.completed ? "Completed" : "In Progress"}
                </Badge>
              </div>
            </div>
            <CardContent className="p-4">
              <div className="flex items-start space-x-2 mb-2">
                <BookOpen className="w-4 h-4 text-muted-foreground mt-0.5" />
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-foreground text-sm leading-tight mb-1">
                    {lesson.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">{lesson.courseName}</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-xs text-muted-foreground">
                  <Clock className="w-3 h-3 mr-1" />
                  {lesson.duration}
                </div>
                <Button size="sm" variant={lesson.completed ? "outline" : "default"}>
                  {lesson.completed ? "Review" : "Continue"}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredLessons.length === 0 && (
        <Card>
          <CardContent className="p-8 text-center">
            <BookOpen className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium text-foreground mb-2">No lessons found</h3>
            <p className="text-muted-foreground">
              {searchQuery ? "Try adjusting your search terms" : "Start learning by enrolling in a course"}
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}