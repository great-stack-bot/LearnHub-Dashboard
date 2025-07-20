import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import {
  Home,
  Calendar,
  Book,
  PlayCircle,
  BarChart3,
  Users,
  UsersRound,
  DollarSign,
  Settings,
} from "lucide-react";

const navigationItems = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  { name: "Schedule", href: "/schedule", icon: Calendar },
  { name: "Courses", href: "/courses", icon: Book },
  { name: "Lessons", href: "/lessons", icon: PlayCircle },
  { name: "Reports", href: "/reports", icon: BarChart3 },
  { name: "Teachers", href: "/teachers", icon: Users },
  { name: "Teams", href: "/teams", icon: UsersRound },
  { name: "Sales", href: "/sales", icon: DollarSign },
  { name: "Settings", href: "/settings", icon: Settings },
];

export default function Sidebar() {
  const [location] = useLocation();

  return (
    <div className="hidden lg:flex lg:flex-shrink-0">
      <div className="flex flex-col w-64 bg-sidebar-background border-r border-sidebar-border">
        {/* Logo Section */}
        <div className="flex items-center h-16 px-6 border-b border-sidebar-border">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">C</span>
            </div>
            <span className="text-xl font-semibold text-sidebar-foreground">codemic</span>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 px-4 py-6 space-y-2">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = location === item.href || (location === "/" && item.href === "/dashboard");
            
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "sidebar-nav-item",
                  isActive && "sidebar-nav-active"
                )}
              >
                <Icon className="w-5 h-5 mr-3" />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
