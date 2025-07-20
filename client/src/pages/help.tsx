import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, HelpCircle, BookOpen, Video, User, CreditCard, ChevronDown, ChevronRight } from "lucide-react";
import { Link } from "wouter";

export default function Help() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { icon: BookOpen, title: "Getting Started", count: 12 },
    { icon: Video, title: "Video & Courses", count: 8 },
    { icon: User, title: "Account & Profile", count: 15 },
    { icon: CreditCard, title: "Billing & Payments", count: 6 },
  ];

  const faqs = [
    {
      question: "How do I enroll in a course?",
      answer: "To enroll in a course, simply browse our course catalog, click on the course you're interested in, and click the 'Enroll Now' button. If it's a paid course, you'll be directed to complete the payment process.",
      category: "Getting Started"
    },
    {
      question: "Can I download course videos for offline viewing?",
      answer: "Yes! Premium subscribers can download course videos for offline viewing using our mobile app. Downloaded videos are available for 30 days and will need to be re-downloaded after that period.",
      category: "Video & Courses"
    },
    {
      question: "How do I reset my password?",
      answer: "Click on 'Forgot Password' on the login page, enter your email address, and we'll send you a password reset link. Follow the instructions in the email to create a new password.",
      category: "Account & Profile"
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. All payments are processed securely through our payment partners.",
      category: "Billing & Payments"
    },
    {
      question: "Do you offer certificates upon course completion?",
      answer: "Yes! Upon successfully completing a course, you'll receive a certificate of completion that you can download and share on your LinkedIn profile or resume.",
      category: "Getting Started"
    },
    {
      question: "Can I access courses on mobile devices?",
      answer: "Absolutely! Our platform is fully responsive and works on all devices. We also have dedicated mobile apps for iOS and Android for the best mobile learning experience.",
      category: "Video & Courses"
    },
    {
      question: "How do I update my profile information?",
      answer: "Go to Settings > Profile tab where you can update your personal information, profile picture, bio, and other details. Don't forget to save your changes!",
      category: "Account & Profile"
    },
    {
      question: "Can I get a refund if I'm not satisfied?",
      answer: "Yes, we offer a 30-day money-back guarantee for all paid courses. If you're not satisfied, contact our support team within 30 days of purchase for a full refund.",
      category: "Billing & Payments"
    }
  ];

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
              How can we help you?
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Find answers to common questions, browse our help articles, or contact our support team.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Search for help articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 text-lg"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <Icon className="w-8 h-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">{category.title}</h3>
                    <Badge variant="secondary">{category.count} articles</Badge>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-8">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-4">
              {filteredFaqs.map((faq, index) => (
                <Card key={index}>
                  <CardHeader 
                    className="cursor-pointer"
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-start space-x-3">
                        <HelpCircle className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <CardTitle className="text-left text-lg">{faq.question}</CardTitle>
                          <Badge variant="outline" className="mt-2">{faq.category}</Badge>
                        </div>
                      </div>
                      {expandedFaq === index ? (
                        <ChevronDown className="w-5 h-5 text-muted-foreground" />
                      ) : (
                        <ChevronRight className="w-5 h-5 text-muted-foreground" />
                      )}
                    </div>
                  </CardHeader>
                  {expandedFaq === index && (
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
            
            {filteredFaqs.length === 0 && (
              <div className="text-center py-12">
                <HelpCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-2">No results found</h3>
                <p className="text-muted-foreground">Try adjusting your search terms or browse our categories above.</p>
              </div>
            )}
          </div>

          {/* Contact Support */}
          <div className="mt-16 text-center bg-muted/30 rounded-xl p-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Still need help?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our support team is here to help you with any questions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg">Contact Support</Button>
              </Link>
              <Button variant="outline" size="lg">
                Live Chat
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}