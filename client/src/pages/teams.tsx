import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Users, Plus, Search, MessageCircle, Calendar, Video, MoreHorizontal, Crown, User } from "lucide-react";
import type { Student, Teacher } from "@shared/schema";

interface TeamMember {
  id: string;
  name: string;
  role: "student" | "teacher" | "admin";
  avatar: string;
  email: string;
  joinDate: string;
  coursesEnrolled?: number;
  coursesTeaching?: number;
  status: "active" | "inactive";
}

interface Team {
  id: string;
  name: string;
  description: string;
  members: TeamMember[];
  course: string;
  createdAt: string;
  isPublic: boolean;
}

export default function Teams() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<"myTeams" | "discover">("myTeams");

  const { data: students } = useQuery<Student[]>({ queryKey: ["/api/students"] });
  const { data: teachers } = useQuery<Teacher[]>({ queryKey: ["/api/teachers"] });

  // Mock teams data
  const mockTeams: Team[] = [
    {
      id: "1",
      name: "UI/UX Design Champions",
      description: "A collaborative team focused on mastering UI/UX design principles and sharing best practices",
      course: "Complete UI/UX Design Course",
      createdAt: "2024-12-01",
      isPublic: true,
      members: [
        {
          id: "1",
          name: "Sarah Johnson",
          role: "teacher",
          avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b8fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&h=50",
          email: "sarah.johnson@codemic.com",
          joinDate: "2024-12-01",
          coursesTeaching: 5,
          status: "active"
        },
        {
          id: "2",
          name: "Alex Thompson",
          role: "student",
          avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&h=50",
          email: "alex.thompson@student.com",
          joinDate: "2024-12-02",
          coursesEnrolled: 3,
          status: "active"
        },
        {
          id: "3",
          name: "Jessica Wang",
          role: "student",
          avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b8fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&h=50",
          email: "jessica.wang@student.com",
          joinDate: "2024-12-03",
          coursesEnrolled: 2,
          status: "active"
        }
      ]
    },
    {
      id: "2",
      name: "Mobile Dev Squad",
      description: "Android and iOS developers working together on real-world projects and code reviews",
      course: "Android App Development",
      createdAt: "2024-11-15",
      isPublic: true,
      members: [
        {
          id: "4",
          name: "Michael Chen",
          role: "teacher",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&h=50",
          email: "michael.chen@codemic.com",
          joinDate: "2024-11-15",
          coursesTeaching: 8,
          status: "active"
        },
        {
          id: "5",
          name: "Ryan Martinez",
          role: "student",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&h=50",
          email: "ryan.martinez@student.com",
          joinDate: "2024-11-16",
          coursesEnrolled: 4,
          status: "active"
        }
      ]
    },
    {
      id: "3",
      name: "Design Thinking Lab",
      description: "Exploring innovative design methodologies and user research techniques",
      course: "Graphic Design Mastery",
      createdAt: "2024-12-10",
      isPublic: false,
      members: [
        {
          id: "6",
          name: "Emily Rodriguez",
          role: "teacher",
          avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&h=50",
          email: "emily.rodriguez@codemic.com",
          joinDate: "2024-12-10",
          coursesTeaching: 12,
          status: "active"
        },
        {
          id: "7",
          name: "Sophie Brown",
          role: "student",
          avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&h=50",
          email: "sophie.brown@student.com",
          joinDate: "2024-12-11",
          coursesEnrolled: 2,
          status: "active"
        }
      ]
    }
  ];

  const filteredTeams = mockTeams.filter(team => 
    team.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    team.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    team.course.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getRoleIcon = (role: string) => {
    switch (role) {
      case "teacher":
        return <Crown className="w-3 h-3 text-yellow-500" />;
      case "admin":
        return <Crown className="w-3 h-3 text-purple-500" />;
      default:
        return <User className="w-3 h-3 text-blue-500" />;
    }
  };

  const getRoleBadgeVariant = (role: string) => {
    switch (role) {
      case "teacher":
        return "default";
      case "admin":
        return "destructive";
      default:
        return "secondary";
    }
  };

  return (
    <div>
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Teams</h1>
            <p className="text-muted-foreground">Collaborate with peers and instructors on your learning journey</p>
          </div>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Create Team
          </Button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-1 mb-6">
        <Button
          variant={activeTab === "myTeams" ? "default" : "ghost"}
          onClick={() => setActiveTab("myTeams")}
        >
          My Teams
        </Button>
        <Button
          variant={activeTab === "discover" ? "default" : "ghost"}
          onClick={() => setActiveTab("discover")}
        >
          Discover Teams
        </Button>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
        <Input
          placeholder="Search teams, courses, or members..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="p-6 text-center">
            <Users className="w-8 h-8 text-blue-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground mb-1">3</div>
            <div className="text-sm text-muted-foreground">Teams Joined</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <MessageCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground mb-1">24</div>
            <div className="text-sm text-muted-foreground">Messages Today</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <Calendar className="w-8 h-8 text-purple-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground mb-1">2</div>
            <div className="text-sm text-muted-foreground">Meetings This Week</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <Video className="w-8 h-8 text-orange-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground mb-1">5</div>
            <div className="text-sm text-muted-foreground">Study Sessions</div>
          </CardContent>
        </Card>
      </div>

      {/* Teams Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredTeams.map((team) => (
          <Card key={team.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-lg mb-1">{team.name}</CardTitle>
                  <p className="text-sm text-muted-foreground mb-2">{team.description}</p>
                  <Badge variant="outline" className="text-xs">
                    {team.course}
                  </Badge>
                </div>
                <div className="flex items-center space-x-2">
                  {!team.isPublic && <Badge variant="secondary" className="text-xs">Private</Badge>}
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Team Members */}
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-3">
                    Members ({team.members.length})
                  </h4>
                  <div className="space-y-2">
                    {team.members.slice(0, 3).map((member) => (
                      <div key={member.id} className="flex items-center space-x-3">
                        <Avatar className="w-6 h-6">
                          <AvatarImage src={member.avatar} alt={member.name} />
                          <AvatarFallback className="text-xs">
                            {member.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-foreground truncate">
                            {member.name}
                          </p>
                        </div>
                        <div className="flex items-center space-x-1">
                          {getRoleIcon(member.role)}
                          <Badge 
                            variant={getRoleBadgeVariant(member.role)} 
                            className="text-xs"
                          >
                            {member.role}
                          </Badge>
                        </div>
                      </div>
                    ))}
                    {team.members.length > 3 && (
                      <p className="text-xs text-muted-foreground">
                        +{team.members.length - 3} more members
                      </p>
                    )}
                  </div>
                </div>

                {/* Team Actions */}
                <div className="flex space-x-2 pt-2">
                  <Button size="sm" className="flex-1">
                    <MessageCircle className="w-3 h-3 mr-1" />
                    Chat
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Video className="w-3 h-3 mr-1" />
                    Meet
                  </Button>
                </div>

                {/* Team Info */}
                <div className="text-xs text-muted-foreground pt-2 border-t border-border">
                  Created {new Date(team.createdAt).toLocaleDateString()}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredTeams.length === 0 && (
        <Card>
          <CardContent className="p-8 text-center">
            <Users className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium text-foreground mb-2">No teams found</h3>
            <p className="text-muted-foreground mb-4">
              {searchQuery ? "Try adjusting your search terms" : "Start collaborating by joining or creating a team"}
            </p>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Create Your First Team
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}