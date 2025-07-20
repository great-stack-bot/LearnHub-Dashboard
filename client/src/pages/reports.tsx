import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, TrendingUp, Users, BookOpen, DollarSign, Download, Calendar, Filter } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from "recharts";

interface ReportsData {
  analyticalReports: number;
  researchReports: number;
  departmentalReports: number;
  totalProgress: number;
  totalTarget: number;
  progressPercentage: number;
}

export default function Reports() {
  const { data: reports, isLoading } = useQuery<ReportsData>({
    queryKey: ["/api/reports"],
  });

  // Mock chart data
  const enrollmentData = [
    { month: 'Jan', students: 1200, courses: 25 },
    { month: 'Feb', students: 1450, courses: 28 },
    { month: 'Mar', students: 1800, courses: 32 },
    { month: 'Apr', students: 2100, courses: 35 },
    { month: 'May', students: 2600, courses: 38 },
    { month: 'Jun', students: 3200, courses: 42 },
  ];

  const courseCategories = [
    { name: 'Design', value: 35, color: '#ef4444' },
    { name: 'Development', value: 45, color: '#06b6d4' },
    { name: 'Programming', value: 25, color: '#8b5cf6' },
    { name: 'Graphics', value: 15, color: '#10b981' },
  ];

  const performanceData = [
    { metric: 'Course Completion', value: 87, target: 90 },
    { metric: 'Student Satisfaction', value: 94, target: 95 },
    { metric: 'Teacher Rating', value: 4.8, target: 4.5 },
    { metric: 'Engagement Rate', value: 76, target: 80 },
  ];

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i} className="animate-pulse">
              <CardContent className="p-6">
                <div className="h-20 bg-muted rounded"></div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {[1, 2].map((i) => (
            <Card key={i} className="animate-pulse">
              <CardContent className="p-6">
                <div className="h-64 bg-muted rounded"></div>
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
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Analytics & Reports</h1>
            <p className="text-muted-foreground">Track performance and gain insights into your learning platform</p>
          </div>
          <div className="flex space-x-3">
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" size="sm">
              <Calendar className="w-4 h-4 mr-2" />
              Date Range
            </Button>
            <Button size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Total Students</p>
                <p className="text-2xl font-bold text-foreground">739,217</p>
                <p className="text-sm text-green-600 flex items-center mt-1">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +13% from last month
                </p>
              </div>
              <Users className="w-8 h-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Active Courses</p>
                <p className="text-2xl font-bold text-foreground">156</p>
                <p className="text-sm text-green-600 flex items-center mt-1">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +8% from last month
                </p>
              </div>
              <BookOpen className="w-8 h-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Revenue</p>
                <p className="text-2xl font-bold text-foreground">$1,004,971</p>
                <p className="text-sm text-green-600 flex items-center mt-1">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +7.6% from last month
                </p>
              </div>
              <DollarSign className="w-8 h-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Completion Rate</p>
                <p className="text-2xl font-bold text-foreground">87%</p>
                <p className="text-sm text-red-600 flex items-center mt-1">
                  <TrendingUp className="w-3 h-3 mr-1 rotate-180" />
                  -2% from last month
                </p>
              </div>
              <BarChart3 className="w-8 h-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Enrollment Trends */}
        <Card>
          <CardHeader>
            <CardTitle>Student Enrollment Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={enrollmentData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="students" stroke="#3b82f6" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Course Categories */}
        <Card>
          <CardHeader>
            <CardTitle>Course Distribution by Category</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={courseCategories}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {courseCategories.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Performance Metrics */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Performance Metrics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {performanceData.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">{item.metric}</span>
                  <span className="text-sm text-muted-foreground">
                    {item.metric === 'Teacher Rating' ? `${item.value}/5.0` : `${item.value}%`}
                  </span>
                </div>
                <div className="relative">
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full transition-all"
                      style={{ 
                        width: item.metric === 'Teacher Rating' 
                          ? `${(item.value / 5) * 100}%` 
                          : `${item.value}%` 
                      }}
                    ></div>
                  </div>
                  <div 
                    className="absolute top-0 w-0.5 h-2 bg-red-500"
                    style={{ 
                      left: item.metric === 'Teacher Rating' 
                        ? `${(item.target / 5) * 100}%` 
                        : `${item.target}%` 
                    }}
                  ></div>
                </div>
                <div className="text-xs text-muted-foreground">
                  Target: {item.metric === 'Teacher Rating' ? `${item.target}/5.0` : `${item.target}%`}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Report Summary */}
      {reports && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-foreground">Analytical Reports</h3>
                <BarChart3 className="w-5 h-5 text-blue-500" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">{reports.analyticalReports}</div>
              <p className="text-sm text-muted-foreground">Generated this month</p>
              <Button variant="outline" size="sm" className="w-full mt-4">
                View Reports
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-foreground">Research Reports</h3>
                <BookOpen className="w-5 h-5 text-green-500" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">{reports.researchReports}</div>
              <p className="text-sm text-muted-foreground">Generated this month</p>
              <Button variant="outline" size="sm" className="w-full mt-4">
                View Reports
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-foreground">Departmental Reports</h3>
                <Users className="w-5 h-5 text-purple-500" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">{reports.departmentalReports}</div>
              <p className="text-sm text-muted-foreground">Generated this month</p>
              <Button variant="outline" size="sm" className="w-full mt-4">
                View Reports
              </Button>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}