import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import MainLayout from "@/components/layout/main-layout";
import Dashboard from "@/pages/dashboard";
import Courses from "@/pages/courses";
import Schedule from "@/pages/schedule";
import Lessons from "@/pages/lessons";
import Reports from "@/pages/reports";
import Teachers from "@/pages/teachers";
import Teams from "@/pages/teams";
import Sales from "@/pages/sales";
import Settings from "@/pages/settings";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <MainLayout>
      <Switch>
        <Route path="/" component={Dashboard} />
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
