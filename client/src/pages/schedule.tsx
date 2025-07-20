import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Video, Users, Plus } from "lucide-react";

interface ScheduleEvent {
  id: string;
  title: string;
  type: "class" | "meeting" | "deadline" | "exam";
  time: string;
  date: string;
  instructor?: string;
  course?: string;
  participants?: number;
  status: "upcoming" | "ongoing" | "completed";
}

export default function Schedule() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  
  const mockEvents: ScheduleEvent[] = [
    {
      id: "1",
      title: "UI/UX Design Workshop",
      type: "class",
      time: "10:00 AM - 11:30 AM",
      date: "Today",
      instructor: "Sarah Johnson",
      course: "Complete UI/UX Design Course",
      participants: 45,
      status: "upcoming"
    },
    {
      id: "2",
      title: "Android Development Q&A",
      type: "meeting",
      time: "2:00 PM - 3:00 PM", 
      date: "Today",
      instructor: "Michael Chen",
      course: "Android App Development",
      participants: 32,
      status: "upcoming"
    },
    {
      id: "3",
      title: "Project Submission Deadline",
      type: "deadline",
      time: "11:59 PM",
      date: "Tomorrow",
      course: "iOS App Development",
      status: "upcoming"
    },
    {
      id: "4",
      title: "Graphic Design Fundamentals",
      type: "class",
      time: "9:00 AM - 10:30 AM",
      date: "Dec 23",
      instructor: "Emily Rodriguez",
      course: "Graphic Design Mastery",
      participants: 28,
      status: "upcoming"
    },
    {
      id: "5",
      title: "Mid-Term Examination",
      type: "exam",
      time: "1:00 PM - 3:00 PM",
      date: "Dec 25",
      course: "Complete UI/UX Design Course",
      status: "upcoming"
    }
  ];

  const getEventTypeColor = (type: string) => {
    const colors = {
      class: "bg-blue-500",
      meeting: "bg-green-500", 
      deadline: "bg-red-500",
      exam: "bg-purple-500"
    };
    return colors[type as keyof typeof colors] || "bg-gray-500";
  };

  const getEventTypeIcon = (type: string) => {
    const icons = {
      class: Video,
      meeting: Users,
      deadline: Clock,
      exam: Calendar
    };
    const Icon = icons[type as keyof typeof icons] || Calendar;
    return <Icon className="w-4 h-4" />;
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">My Schedule</h1>
        <p className="text-muted-foreground">Stay organized with your learning schedule and upcoming events</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Calendar Overview */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Calendar
              <Button size="sm">
                <Plus className="w-4 h-4 mr-1" />
                Add Event
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-7 gap-1 text-center text-xs font-medium text-muted-foreground">
                {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                  <div key={day} className="p-2">{day}</div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1 text-center text-sm">
                {Array.from({ length: 35 }, (_, i) => {
                  const day = i - 6; // Start from previous month
                  const isToday = day === 15;
                  const hasEvent = [15, 16, 18, 20, 23].includes(day);
                  return (
                    <div 
                      key={i} 
                      className={`p-2 rounded cursor-pointer transition-colors ${
                        isToday 
                          ? 'bg-primary text-primary-foreground' 
                          : hasEvent 
                            ? 'bg-muted hover:bg-accent' 
                            : 'hover:bg-accent'
                      } ${day < 1 || day > 31 ? 'text-muted-foreground' : ''}`}
                    >
                      {day > 0 && day <= 31 ? day : ''}
                      {hasEvent && day > 0 && day <= 31 && (
                        <div className="w-1 h-1 bg-primary rounded-full mx-auto mt-1"></div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Events */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockEvents.map((event) => (
                <div 
                  key={event.id} 
                  className="flex items-center space-x-4 p-4 border border-border rounded-lg hover:bg-accent transition-colors"
                >
                  <div className={`w-10 h-10 rounded-lg ${getEventTypeColor(event.type)} flex items-center justify-center text-white`}>
                    {getEventTypeIcon(event.type)}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="font-medium text-foreground">{event.title}</h3>
                      <Badge variant="outline" className="text-xs">
                        {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{event.course}</p>
                    <div className="flex items-center space-x-4 mt-2 text-xs text-muted-foreground">
                      <span>{event.date} • {event.time}</span>
                      {event.instructor && <span>with {event.instructor}</span>}
                      {event.participants && <span>{event.participants} participants</span>}
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    {event.type === "class" && (
                      <Button size="sm">Join Class</Button>
                    )}
                    {event.type === "meeting" && (
                      <Button size="sm" variant="outline">Join Meeting</Button>
                    )}
                    {event.type === "deadline" && (
                      <Button size="sm" variant="outline">View Details</Button>
                    )}
                    {event.type === "exam" && (
                      <Button size="sm">Prepare</Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-blue-600 mb-1">3</div>
            <div className="text-sm text-muted-foreground">Classes Today</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-green-600 mb-1">2</div>
            <div className="text-sm text-muted-foreground">Meetings This Week</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-red-600 mb-1">1</div>
            <div className="text-sm text-muted-foreground">Upcoming Deadline</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-purple-600 mb-1">1</div>
            <div className="text-sm text-muted-foreground">Exam This Month</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
