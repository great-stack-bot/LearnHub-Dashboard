import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Metrics endpoint
  app.get("/api/metrics", async (req, res) => {
    try {
      const metrics = await storage.getMetrics();
      if (!metrics) {
        return res.status(404).json({ message: "Metrics not found" });
      }
      res.json(metrics);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch metrics" });
    }
  });

  // Courses endpoints
  app.get("/api/courses", async (req, res) => {
    try {
      const { category } = req.query;
      let courses;
      
      if (category && typeof category === 'string') {
        courses = await storage.getCoursesByCategory(category);
      } else {
        courses = await storage.getAllCourses();
      }
      
      res.json(courses);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch courses" });
    }
  });

  app.get("/api/courses/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const course = await storage.getCourse(id);
      
      if (!course) {
        return res.status(404).json({ message: "Course not found" });
      }
      
      res.json(course);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch course" });
    }
  });

  // Students endpoints
  app.get("/api/students", async (req, res) => {
    try {
      const students = await storage.getAllStudents();
      res.json(students);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch students" });
    }
  });

  // Teachers endpoints
  app.get("/api/teachers", async (req, res) => {
    try {
      const teachers = await storage.getAllTeachers();
      res.json(teachers);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch teachers" });
    }
  });

  // Activities endpoints
  app.get("/api/activities", async (req, res) => {
    try {
      const limit = req.query.limit ? parseInt(req.query.limit as string) : undefined;
      const activities = await storage.getRecentActivities(limit);
      res.json(activities);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch activities" });
    }
  });

  // Popular courses with stats
  app.get("/api/popular-courses", async (req, res) => {
    try {
      const courses = await storage.getAllCourses();
      const popularCourses = courses
        .sort((a, b) => b.enrollmentCount - a.enrollmentCount)
        .slice(0, 4)
        .map(course => ({
          name: course.title,
          students: course.enrollmentCount,
          color: getColorForCourse(course.category),
          progress: Math.min(100, (course.enrollmentCount / 5000) * 100)
        }));
      
      res.json(popularCourses);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch popular courses" });
    }
  });

  // Reports data
  app.get("/api/reports", async (req, res) => {
    try {
      const reports = {
        analyticalReports: 1033,
        researchReports: 751,
        departmentalReports: 1934,
        totalProgress: 178.4,
        totalTarget: 183.4,
        progressPercentage: 97.3
      };
      
      res.json(reports);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch reports" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

function getColorForCourse(category: string): string {
  const colors: Record<string, string> = {
    'Design': 'bg-red-500',
    'Development': 'bg-cyan-500',
    'Programming': 'bg-purple-500',
    'Graphics': 'bg-green-500'
  };
  return colors[category] || 'bg-blue-500';
}
