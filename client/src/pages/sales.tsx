import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DollarSign, TrendingUp, CreditCard, ShoppingCart, Users, Calendar } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";

interface SalesData {
  totalRevenue: number;
  monthlyGrowth: number;
  activeSubscriptions: number;
  courseSales: number;
}

export default function Sales() {
  // Mock sales data
  const salesData: SalesData = {
    totalRevenue: 1004971,
    monthlyGrowth: 7.6,
    activeSubscriptions: 12845,
    courseSales: 3274
  };

  const revenueData = [
    { month: 'Jan', revenue: 85000, subscriptions: 1200 },
    { month: 'Feb', revenue: 92000, subscriptions: 1350 },
    { month: 'Mar', revenue: 108000, subscriptions: 1500 },
    { month: 'Apr', revenue: 125000, subscriptions: 1680 },
    { month: 'May', revenue: 145000, subscriptions: 1850 },
    { month: 'Jun', revenue: 162000, subscriptions: 2100 },
  ];

  const topSellingCourses = [
    { name: "Complete UI/UX Design Course", sales: 124, revenue: 12400, rating: 4.8 },
    { name: "Android App Development", sales: 98, revenue: 9800, rating: 4.7 },
    { name: "iOS App Development", sales: 87, revenue: 8700, rating: 4.6 },
    { name: "Graphic Design Mastery", sales: 76, revenue: 7600, rating: 4.9 },
    { name: "Web Development Bootcamp", sales: 65, revenue: 6500, rating: 4.8 },
  ];

  const recentTransactions = [
    { id: "TXN001", customer: "John Doe", course: "UI/UX Design Course", amount: 99, date: "2024-12-20", status: "completed" },
    { id: "TXN002", customer: "Jane Smith", course: "Android Development", amount: 129, date: "2024-12-20", status: "completed" },
    { id: "TXN003", customer: "Mike Johnson", course: "iOS Development", amount: 149, date: "2024-12-19", status: "pending" },
    { id: "TXN004", customer: "Sarah Wilson", course: "Graphic Design", amount: 89, date: "2024-12-19", status: "completed" },
    { id: "TXN005", customer: "David Brown", course: "Web Development", amount: 199, date: "2024-12-18", status: "completed" },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Sales Dashboard</h1>
        <p className="text-muted-foreground">Track revenue, monitor course sales, and analyze financial performance</p>
      </div>

      {/* Revenue Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Total Revenue</p>
                <p className="text-2xl font-bold text-foreground">${salesData.totalRevenue.toLocaleString()}</p>
                <p className="text-sm text-green-600 flex items-center mt-1">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +{salesData.monthlyGrowth}% this month
                </p>
              </div>
              <DollarSign className="w-8 h-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Active Subscriptions</p>
                <p className="text-2xl font-bold text-foreground">{salesData.activeSubscriptions.toLocaleString()}</p>
                <p className="text-sm text-green-600 flex items-center mt-1">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +12% this month
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
                <p className="text-sm text-muted-foreground mb-1">Course Sales</p>
                <p className="text-2xl font-bold text-foreground">{salesData.courseSales.toLocaleString()}</p>
                <p className="text-sm text-green-600 flex items-center mt-1">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +8% this month
                </p>
              </div>
              <ShoppingCart className="w-8 h-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Avg. Order Value</p>
                <p className="text-2xl font-bold text-foreground">$127</p>
                <p className="text-sm text-green-600 flex items-center mt-1">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +5% this month
                </p>
              </div>
              <CreditCard className="w-8 h-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Revenue Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Revenue Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value, name) => [
                  name === 'revenue' ? `$${value?.toLocaleString()}` : value,
                  name === 'revenue' ? 'Revenue' : 'Subscriptions'
                ]} />
                <Line type="monotone" dataKey="revenue" stroke="#10b981" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Top Selling Courses */}
        <Card>
          <CardHeader>
            <CardTitle>Top Selling Courses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topSellingCourses.map((course, index) => (
                <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground text-sm">{course.name}</h4>
                    <div className="flex items-center space-x-4 mt-1">
                      <span className="text-xs text-muted-foreground">{course.sales} sales</span>
                      <span className="text-xs text-green-600">${course.revenue}</span>
                      <div className="flex items-center">
                        <span className="text-xs text-yellow-600">★ {course.rating}</span>
                      </div>
                    </div>
                  </div>
                  <Badge variant="secondary">#{index + 1}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Transactions */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Recent Transactions</CardTitle>
            <Button variant="outline" size="sm">
              <Calendar className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm text-muted-foreground border-b border-border">
                  <th className="pb-3 font-medium">Transaction ID</th>
                  <th className="pb-3 font-medium">Customer</th>
                  <th className="pb-3 font-medium">Course</th>
                  <th className="pb-3 font-medium">Amount</th>
                  <th className="pb-3 font-medium">Date</th>
                  <th className="pb-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {recentTransactions.map((transaction) => (
                  <tr key={transaction.id} className="text-sm">
                    <td className="py-4 font-mono text-primary">{transaction.id}</td>
                    <td className="py-4 text-foreground">{transaction.customer}</td>
                    <td className="py-4 text-muted-foreground">{transaction.course}</td>
                    <td className="py-4 font-medium text-foreground">${transaction.amount}</td>
                    <td className="py-4 text-muted-foreground">{transaction.date}</td>
                    <td className="py-4">
                      <Badge 
                        variant={transaction.status === 'completed' ? 'default' : 'secondary'}
                        className="text-xs"
                      >
                        {transaction.status}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
