// This file contains data utilities and constants for the LMS application

export const mockVideoPlaylists = {
  uiux: [
    { title: "Introduction to UI/UX Design", duration: "12:34" },
    { title: "Design Thinking Process", duration: "18:22" },
    { title: "User Research Methods", duration: "15:45" },
    { title: "Wireframing Fundamentals", duration: "22:18" },
    { title: "Prototyping with Figma", duration: "28:56" },
  ],
  android: [
    { title: "Android Development Setup", duration: "15:30" },
    { title: "Activities and Intents", duration: "20:45" },
    { title: "Layouts and Views", duration: "18:12" },
    { title: "Data Storage", duration: "25:34" },
    { title: "API Integration", duration: "30:22" },
  ],
  ios: [
    { title: "iOS Development Basics", duration: "14:28" },
    { title: "Swift Programming", duration: "22:15" },
    { title: "Storyboard Design", duration: "16:45" },
    { title: "Core Data", duration: "28:30" },
    { title: "App Store Deployment", duration: "19:12" },
  ],
  graphics: [
    { title: "Design Principles", duration: "13:45" },
    { title: "Color Theory", duration: "17:20" },
    { title: "Typography Basics", duration: "21:30" },
    { title: "Logo Design", duration: "25:15" },
    { title: "Brand Identity", duration: "23:45" },
  ],
};

export const courseCategoryColors = {
  Design: "bg-red-500",
  Development: "bg-cyan-500", 
  Programming: "bg-purple-500",
  Graphics: "bg-green-500",
} as const;

export const getColorForCategory = (category: string): string => {
  return courseCategoryColors[category as keyof typeof courseCategoryColors] || "bg-blue-500";
};
