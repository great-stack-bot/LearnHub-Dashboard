import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import MainLayout from "@/components/layout/main-layout";
import Landing from "@/pages/landing";
import Dashboard from "@/pages/dashboard";
import Courses from "@/pages/courses";
import Schedule from "@/pages/schedule";
import Lessons from "@/pages/lessons";
import Reports from "@/pages/reports";
import Teachers from "@/pages/teachers";
import Teams from "@/pages/teams";
import Sales from "@/pages/sales";
import Settings from "@/pages/settings";
import About from "@/pages/about";
import Careers from "@/pages/careers";
import Blog from "@/pages/blog";
import Contact from "@/pages/contact";
import Help from "@/pages/help";
import Privacy from "@/pages/privacy";
import Terms from "@/pages/terms";
import NotFound from "@/pages/not-found";

function DashboardRouter() {
  return (
    <MainLayout>
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/courses" component={Courses} />
        <Route path="/schedule" component={Schedule} />
        <Route path="/lessons" component={Lessons} />
        <Route path="/reports" component={Reports} />
        <Route path="/teachers" component={Teachers} />
        <Route path="/teams" component={Teams} />
        <Route path="/sales" component={Sales} />
        <Route path="/settings" component={Settings} />
        <Route component={NotFound} />
      </Switch>
    </MainLayout>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Landing} />
      <Route path="/about" component={About} />
      <Route path="/careers" component={Careers} />
      <Route path="/blog" component={Blog} />
      <Route path="/contact" component={Contact} />
      <Route path="/help" component={Help} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/terms" component={Terms} />
      <Route path="/dashboard/*?" component={DashboardRouter} />
      <Route path="/courses/*?" component={DashboardRouter} />
      <Route path="/schedule/*?" component={DashboardRouter} />
      <Route path="/lessons/*?" component={DashboardRouter} />
      <Route path="/reports/*?" component={DashboardRouter} />
      <Route path="/teachers/*?" component={DashboardRouter} />
      <Route path="/teams/*?" component={DashboardRouter} />
      <Route path="/sales/*?" component={DashboardRouter} />
      <Route path="/settings/*?" component={DashboardRouter} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
