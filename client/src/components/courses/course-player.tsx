import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Course } from "@shared/schema";

interface CoursePlayerProps {
  course?: Course;
}

interface PlaylistItem {
  title: string;
  duration: string;
  isActive?: boolean;
}

// Helper function to extract video ID from playlist
function getVideoIdFromPlaylist(playlistId: string): string {
  // Map playlist IDs to specific video IDs for demo purposes
  const playlistToVideoMap: Record<string, string> = {
    'PLyuRouwmQCjkVfiHE9IEbZu53H0P83hZP': 'dQw4w9WgXcQ', // UI/UX Design
    'PLvq-jIkSeTUYvTXW5Hb1pUOLCxJ8B_pv2': 'M7lc1UVf-VE', // Android Development  
    'PLWKjhJtqVAbkArDMazoARtNz1aMwNWmvC': 'F2JCjVSZlG0', // iOS Development
    'PLyuRouwmQCjkvQeVjL1-6STaLbSDk93K3': 'kVdV8VESix4', // Graphic Design
    'PLWKjhJtqVAbknyJ7hSrf1WKh_Xnv9RL1r': 'UB1O30fR-EE', // Web Development
    'PLWKjhJtqVAbkhUangWdVekw65XB2H1kgE': '9bZkp7q19f0' // Machine Learning
  };
  return playlistToVideoMap[playlistId] || 'dQw4w9WgXcQ';
}

export default function CoursePlayer({ course }: CoursePlayerProps) {
  const [selectedVideo, setSelectedVideo] = useState(0);

  // Mock playlist data - in a real app, this would come from YouTube API
  const playlist: PlaylistItem[] = [
    { title: "Introduction to UI/UX Design", duration: "12:34", isActive: true },
    { title: "Design Thinking Process", duration: "18:22" },
    { title: "User Research Methods", duration: "15:45" },
    { title: "Wireframing Fundamentals", duration: "22:18" },
    { title: "Prototyping with Figma", duration: "28:56" },
  ];

  if (!course) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="text-center text-muted-foreground">
            Select a course to start learning
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Course Player</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        {/* YouTube Embedded Player */}
        <div className="aspect-video bg-slate-900 rounded-lg mb-4 overflow-hidden">
          <iframe 
            width="100%" 
            height="100%" 
            src={`https://www.youtube.com/embed/${getVideoIdFromPlaylist(course.youtubePlaylistId)}?autoplay=0&rel=0&modestbranding=1`}
            title={`${course.title} - Course Video Player`}
            className="rounded-lg"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
        
        <div className="space-y-3">
          <h4 className="font-medium text-foreground">Course Playlist</h4>
          <div className="space-y-2 max-h-64 overflow-y-auto">
            {playlist.map((video, index) => (
              <div 
                key={index}
                className="flex items-center space-x-3 p-2 hover:bg-accent rounded cursor-pointer"
                onClick={() => setSelectedVideo(index)}
              >
                <div className={`w-2 h-2 rounded-full ${
                  index === selectedVideo ? 'bg-primary' : 'bg-muted-foreground'
                }`}></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">{video.title}</p>
                  <p className="text-xs text-muted-foreground">{video.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
