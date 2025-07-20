import MetricsCards from "@/components/dashboard/metrics-cards";
import PopularCourses from "@/components/dashboard/popular-courses";
import RecentActivity from "@/components/dashboard/recent-activity";
import ReportsWidget from "@/components/dashboard/reports-widget";

export default function Dashboard() {
  return (
    <div>
      <MetricsCards />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <PopularCourses />
        <ReportsWidget />
      </div>

      <RecentActivity />
    </div>
  );
}
