import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, DollarSign, Users, Code, Palette, BookOpen } from "lucide-react";
import { Link } from "wouter";

export default function Careers() {
  const benefits = [
    "Competitive salary and equity",
    "Remote-first culture",
    "Health, dental, and vision insurance",
    "401(k) with company matching",
    "Unlimited PTO policy",
    "Professional development budget",
    "Top-tier equipment",
    "Team retreats and events"
  ];

  const openings = [
    {
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      salary: "$120k - $160k",
      description: "Build beautiful, responsive user interfaces using React and TypeScript.",
      requirements: ["5+ years React experience", "TypeScript proficiency", "UI/UX sensibility"],
      icon: Code
    },
    {
      title: "Product Designer",
      department: "Design",
      location: "San Francisco / Remote",
      type: "Full-time", 
      salary: "$100k - $140k",
      description: "Design intuitive learning experiences that delight our users.",
      requirements: ["3+ years product design", "Figma expertise", "Educational technology experience"],
      icon: Palette
    },
    {
      title: "Content Strategist",
      department: "Education",
      location: "Remote",
      type: "Full-time",
      salary: "$80k - $110k", 
      description: "Develop engaging educational content and curriculum strategies.",
      requirements: ["Educational background", "Content creation experience", "Strong writing skills"],
      icon: BookOpen
    },
    {
      title: "Engineering Manager",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      salary: "$150k - $190k",
      description: "Lead and mentor a team of talented engineers building educational technology.",
      requirements: ["5+ years engineering leadership", "Technical expertise", "Team building skills"],
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white dark:bg-gray-900 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">C</span>
                </div>
                <span className="text-xl font-semibold text-foreground">codemic</span>
              </div>
            </Link>
            <Link href="/dashboard">
              <Button>Dashboard</Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Join Our Mission
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Help us democratize education and build the future of learning. 
              We're looking for passionate individuals who want to make a real impact.
            </p>
          </div>

          {/* Benefits */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-foreground mb-8">Why Work With Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-2 p-3 bg-muted/30 rounded-lg">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Open Positions */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-foreground mb-8">Open Positions</h2>
            <div className="space-y-6">
              {openings.map((job, index) => {
                const Icon = job.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-4 flex-1">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold text-foreground mb-2">{job.title}</h3>
                            <p className="text-muted-foreground mb-4">{job.description}</p>
                            
                            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                              <div className="flex items-center">
                                <MapPin className="w-4 h-4 mr-1" />
                                {job.location}
                              </div>
                              <div className="flex items-center">
                                <Clock className="w-4 h-4 mr-1" />
                                {job.type}
                              </div>
                              <div className="flex items-center">
                                <DollarSign className="w-4 h-4 mr-1" />
                                {job.salary}
                              </div>
                            </div>

                            <div className="flex flex-wrap gap-2 mb-4">
                              <Badge variant="secondary">{job.department}</Badge>
                              {job.requirements.map((req, i) => (
                                <Badge key={i} variant="outline" className="text-xs">
                                  {req}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                        <Button>Apply Now</Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-muted/30 rounded-xl p-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Don't See Your Role?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              We're always looking for talented people. Send us your resume!
            </p>
            <Button size="lg" className="text-lg px-8 py-4">
              Send Resume
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}