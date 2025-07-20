import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Scale, Shield, AlertTriangle } from "lucide-react";
import { Link } from "wouter";

export default function Terms() {
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-muted-foreground">
              Please read these terms carefully before using our platform.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Last updated: December 20, 2024
            </p>
          </div>

          {/* Key Points */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="text-center">
              <CardContent className="p-6">
                <FileText className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Clear Terms</h3>
                <p className="text-sm text-muted-foreground">Easy to understand language</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Scale className="w-8 h-8 text-green-500 mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Fair Usage</h3>
                <p className="text-sm text-muted-foreground">Reasonable policies for all users</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Shield className="w-8 h-8 text-purple-500 mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Your Rights</h3>
                <p className="text-sm text-muted-foreground">Protected user interests</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <AlertTriangle className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Obligations</h3>
                <p className="text-sm text-muted-foreground">What we expect from users</p>
              </CardContent>
            </Card>
          </div>

          {/* Terms Content */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>1. Acceptance of Terms</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  By accessing or using Codemic's services, you agree to be bound by these Terms of Service 
                  and our Privacy Policy. If you do not agree to these terms, you may not use our services.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. Description of Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Codemic provides an online learning platform that offers:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Educational courses and content</li>
                  <li>Interactive learning tools and features</li>
                  <li>Progress tracking and certificates</li>
                  <li>Community features and collaboration tools</li>
                  <li>Customer support services</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. User Accounts</CardTitle>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold text-foreground mb-2">Account Creation:</h4>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-4">
                  <li>You must be at least 13 years old to create an account</li>
                  <li>Provide accurate and complete registration information</li>
                  <li>Maintain the security of your password and account</li>
                  <li>You are responsible for all activities under your account</li>
                </ul>
                <h4 className="font-semibold text-foreground mb-2">Account Termination:</h4>
                <p className="text-muted-foreground">
                  We may suspend or terminate your account for violations of these terms, 
                  illegal activities, or other reasons at our discretion.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Payment and Billing</CardTitle>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold text-foreground mb-2">Subscription Plans:</h4>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-4">
                  <li>Monthly and annual subscription options available</li>
                  <li>Automatic renewal unless cancelled</li>
                  <li>Price changes with 30 days notice</li>
                  <li>Taxes may apply based on your location</li>
                </ul>
                <h4 className="font-semibold text-foreground mb-2">Refunds:</h4>
                <p className="text-muted-foreground">
                  30-day money-back guarantee for new subscriptions. Refunds are processed 
                  within 5-10 business days to the original payment method.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Content and Intellectual Property</CardTitle>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold text-foreground mb-2">Our Content:</h4>
                <p className="text-muted-foreground mb-4">
                  All course materials, videos, text, graphics, and other content are owned by 
                  Codemic or our content partners and are protected by copyright and other intellectual property laws.
                </p>
                <h4 className="font-semibold text-foreground mb-2">Your Content:</h4>
                <p className="text-muted-foreground mb-4">
                  You retain ownership of any content you submit, but grant us a license to use, 
                  modify, and display it in connection with our services.
                </p>
                <h4 className="font-semibold text-foreground mb-2">Prohibited Uses:</h4>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Downloading or redistributing course content</li>
                  <li>Sharing account credentials with others</li>
                  <li>Using content for commercial purposes without permission</li>
                  <li>Reverse engineering or copying our platform</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. User Conduct</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">You agree not to:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Violate any applicable laws or regulations</li>
                  <li>Harass, abuse, or harm other users</li>
                  <li>Submit false or misleading information</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Use our platform for spam or commercial solicitation</li>
                  <li>Interfere with the normal operation of our services</li>
                  <li>Upload malicious software or harmful content</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>7. Privacy and Data Protection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Your privacy is important to us. Please review our Privacy Policy, which explains 
                  how we collect, use, and protect your information. By using our services, you 
                  consent to the collection and use of information as described in our Privacy Policy.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>8. Disclaimers and Limitations</CardTitle>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold text-foreground mb-2">Service Availability:</h4>
                <p className="text-muted-foreground mb-4">
                  We strive to maintain service availability but cannot guarantee uninterrupted access. 
                  We may temporarily suspend services for maintenance or updates.
                </p>
                <h4 className="font-semibold text-foreground mb-2">Educational Outcomes:</h4>
                <p className="text-muted-foreground mb-4">
                  While we provide high-quality educational content, we cannot guarantee specific 
                  learning outcomes or career results.
                </p>
                <h4 className="font-semibold text-foreground mb-2">Limitation of Liability:</h4>
                <p className="text-muted-foreground">
                  Our liability is limited to the amount you paid for our services in the 12 months 
                  prior to the claim. We are not liable for indirect, incidental, or consequential damages.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>9. Modifications to Terms</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We may modify these terms from time to time. We will notify users of material 
                  changes via email or platform notifications. Continued use of our services after 
                  changes constitutes acceptance of the new terms.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>10. Governing Law and Disputes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  These terms are governed by the laws of the State of California, United States. 
                  Any disputes will be resolved through binding arbitration, except for claims that 
                  can be brought in small claims court.
                </p>
                <h4 className="font-semibold text-foreground mb-2">Contact for Legal Matters:</h4>
                <p className="text-muted-foreground">
                  For legal inquiries, please contact: legal@codemic.com
                </p>
              </CardContent>
            </Card>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center bg-muted/30 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Questions about our terms?
            </h2>
            <Link href="/contact">
              <Button size="lg">Contact Legal Team</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}