import { 
  users, type User, type InsertUser,
  courses, type Course, type InsertCourse,
  students, type Student, type InsertStudent,
  teachers, type Teacher, type InsertTeacher,
  activities, type Activity, type InsertActivity,
  metrics, type Metrics, type InsertMetrics
} from "@shared/schema";

export interface IStorage {
  // Users
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Courses
  getAllCourses(): Promise<Course[]>;
  getCourse(id: number): Promise<Course | undefined>;
  getCoursesByCategory(category: string): Promise<Course[]>;
  createCourse(course: InsertCourse): Promise<Course>;
  
  // Students
  getAllStudents(): Promise<Student[]>;
  getStudent(id: number): Promise<Student | undefined>;
  createStudent(student: InsertStudent): Promise<Student>;
  
  // Teachers
  getAllTeachers(): Promise<Teacher[]>;
  getTeacher(id: number): Promise<Teacher | undefined>;
  createTeacher(teacher: InsertTeacher): Promise<Teacher>;
  
  // Activities
  getRecentActivities(limit?: number): Promise<Activity[]>;
  createActivity(activity: InsertActivity): Promise<Activity>;
  
  // Metrics
  getMetrics(): Promise<Metrics | undefined>;
  updateMetrics(metrics: InsertMetrics): Promise<Metrics>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private courses: Map<number, Course>;
  private students: Map<number, Student>;
  private teachers: Map<number, Teacher>;
  private activities: Map<number, Activity>;
  private metrics: Metrics | null;
  private currentUserId: number;
  private currentCourseId: number;
  private currentStudentId: number;
  private currentTeacherId: number;
  private currentActivityId: number;

  constructor() {
    this.users = new Map();
    this.courses = new Map();
    this.students = new Map();
    this.teachers = new Map();
    this.activities = new Map();
    this.metrics = null;
    this.currentUserId = 1;
    this.currentCourseId = 1;
    this.currentStudentId = 1;
    this.currentTeacherId = 1;
    this.currentActivityId = 1;

    this.initializeData();
  }

  private initializeData() {
    // Initialize metrics
    this.metrics = {
      id: 1,
      totalTeachers: 31258,
      totalStudents: 739217,
      totalSales: "1004971.00",
      teachersGrowth: "+9.15%",
      studentsGrowth: "+13%",
      salesGrowth: "+7.6%",
      updatedAt: new Date(),
    };

    // Initialize courses with working YouTube playlist IDs
    const coursesData: InsertCourse[] = [
      {
        title: "Complete UI/UX Design Course",
        description: "Master modern design principles and create stunning user interfaces",
        thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
        youtubePlaylistId: "PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx",
        videoCount: 24,
        rating: "4.8",
        enrollmentCount: 4200,
        category: "Design",
      },
      {
        title: "Android App Development",
        description: "Build professional Android applications from scratch",
        thumbnail: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
        youtubePlaylistId: "PLsyeobzWxl7p-bZ3psHugHaUqugOHIt9o",
        videoCount: 32,
        rating: "4.7",
        enrollmentCount: 3850,
        category: "Development",
      },
      {
        title: "iOS App Development",
        description: "Create iOS apps using Swift and Xcode",
        thumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
        youtubePlaylistId: "PLMRqhzcHGw1ZqzYnpIuQAn2rcjhOtbqGX",
        videoCount: 28,
        rating: "4.6",
        enrollmentCount: 3500,
        category: "Development",
      },
      {
        title: "Graphic Design Mastery",
        description: "Learn design fundamentals and create stunning visuals",
        thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
        youtubePlaylistId: "PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx",
        videoCount: 18,
        rating: "4.9",
        enrollmentCount: 2030,
        category: "Design",
      },
    ];

    coursesData.forEach(course => this.createCourse(course));

    // Initialize recent activities
    const activitiesData: InsertActivity[] = [
      {
        studentId: 1,
        studentName: "Kristin Watson",
        studentAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b8fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&h=50",
        subject: "UI/UX Design",
        date: "Jul 29, 2021",
      },
      {
        studentId: 2,
        studentName: "Devon Lane",
        studentAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&h=50",
        subject: "iOS development",
        date: "Jul 22, 2021",
      },
      {
        studentId: 3,
        studentName: "Albert Flores",
        studentAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&h=50",
        subject: "Graphic design",
        date: "Jul 21, 2021",
      },
    ];

    activitiesData.forEach(activity => this.createActivity(activity));

    // Initialize teachers
    const teachersData: InsertTeacher[] = [
      {
        name: "Sarah Johnson",
        email: "sarah.johnson@codemic.com",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b8fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&h=50",
        specialization: "UI/UX Design",
        coursesCount: 5,
      },
      {
        name: "Michael Chen",
        email: "michael.chen@codemic.com",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&h=50",
        specialization: "Mobile Development",
        coursesCount: 8,
      },
      {
        name: "Emily Rodriguez",
        email: "emily.rodriguez@codemic.com",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&h=50",
        specialization: "Web Development",
        coursesCount: 12,
      },
      {
        name: "David Kim",
        email: "david.kim@codemic.com",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&h=50",
        specialization: "Data Science",
        coursesCount: 6,
      },
    ];

    teachersData.forEach(teacher => this.createTeacher(teacher));

    // Initialize students
    const studentsData: InsertStudent[] = [
      {
        name: "Alex Thompson",
        email: "alex.thompson@student.com",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&h=50",
        enrolledCourses: [] as string[],
      },
      {
        name: "Jessica Wang",
        email: "jessica.wang@student.com",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b8fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&h=50",
        enrolledCourses: [] as string[],
      },
      {
        name: "Ryan Martinez",
        email: "ryan.martinez@student.com",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&h=50",
        enrolledCourses: [] as string[],
      },
      {
        name: "Sophie Brown",
        email: "sophie.brown@student.com",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&h=50",
        enrolledCourses: [] as string[],
      },
    ];

    studentsData.forEach(student => this.createStudent(student));
  }

  // Users
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Courses
  async getAllCourses(): Promise<Course[]> {
    return Array.from(this.courses.values());
  }

  async getCourse(id: number): Promise<Course | undefined> {
    return this.courses.get(id);
  }

  async getCoursesByCategory(category: string): Promise<Course[]> {
    return Array.from(this.courses.values()).filter(
      course => course.category === category
    );
  }

  async createCourse(insertCourse: InsertCourse): Promise<Course> {
    const id = this.currentCourseId++;
    const course: Course = { 
      ...insertCourse, 
      id, 
      createdAt: new Date() 
    };
    this.courses.set(id, course);
    return course;
  }

  // Students
  async getAllStudents(): Promise<Student[]> {
    return Array.from(this.students.values());
  }

  async getStudent(id: number): Promise<Student | undefined> {
    return this.students.get(id);
  }

  async createStudent(insertStudent: InsertStudent): Promise<Student> {
    const id = this.currentStudentId++;
    const student: Student = { 
      ...insertStudent, 
      id, 
      createdAt: new Date(),
      enrolledCourses: insertStudent.enrolledCourses || [] as string[]
    };
    this.students.set(id, student);
    return student;
  }

  // Teachers
  async getAllTeachers(): Promise<Teacher[]> {
    return Array.from(this.teachers.values());
  }

  async getTeacher(id: number): Promise<Teacher | undefined> {
    return this.teachers.get(id);
  }

  async createTeacher(insertTeacher: InsertTeacher): Promise<Teacher> {
    const id = this.currentTeacherId++;
    const teacher: Teacher = { 
      ...insertTeacher, 
      id, 
      createdAt: new Date(),
      coursesCount: insertTeacher.coursesCount || 0
    };
    this.teachers.set(id, teacher);
    return teacher;
  }

  // Activities
  async getRecentActivities(limit: number = 10): Promise<Activity[]> {
    const activities = Array.from(this.activities.values());
    return activities
      .sort((a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0))
      .slice(0, limit);
  }

  async createActivity(insertActivity: InsertActivity): Promise<Activity> {
    const id = this.currentActivityId++;
    const activity: Activity = { 
      ...insertActivity, 
      id, 
      createdAt: new Date(),
      studentId: insertActivity.studentId || null
    };
    this.activities.set(id, activity);
    return activity;
  }

  // Metrics
  async getMetrics(): Promise<Metrics | undefined> {
    return this.metrics || undefined;
  }

  async updateMetrics(insertMetrics: InsertMetrics): Promise<Metrics> {
    const metrics: Metrics = {
      ...insertMetrics,
      id: 1,
      updatedAt: new Date(),
    };
    this.metrics = metrics;
    return metrics;
  }
}

export const storage = new MemStorage();
