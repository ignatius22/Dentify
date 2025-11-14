import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/">
            <h1 className="text-2xl font-bold text-primary">Dentify</h1>
          </Link>
          <nav className="flex gap-6 items-center">
            <Link href="/about" className="text-sm hover:text-primary transition">
              About
            </Link>
            <Link href="/services" className="text-sm font-semibold text-primary">
              Services
            </Link>
            <Link href="/contact" className="text-sm hover:text-primary transition">
              Contact
            </Link>
            <Button asChild size="sm">
              <Link href="/auth/login">Sign In</Link>
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Our Services</h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive features designed for modern dental practices
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Patient Management</CardTitle>
                <CardDescription>Complete patient record system</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Patient registration and profiles</li>
                  <li>• Medical history tracking</li>
                  <li>• Insurance information management</li>
                  <li>• Emergency contact details</li>
                  <li>• Quick search and filtering</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Appointment Scheduling</CardTitle>
                <CardDescription>Intelligent booking system</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Real-time availability checking</li>
                  <li>• Automated email reminders</li>
                  <li>• Calendar integration</li>
                  <li>• Recurring appointments</li>
                  <li>• Easy rescheduling and cancellation</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Treatment Notes</CardTitle>
                <CardDescription>Digital treatment records</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Detailed treatment documentation</li>
                  <li>• Diagnosis tracking</li>
                  <li>• Prescription management</li>
                  <li>• Procedure history</li>
                  <li>• Secure and compliant storage</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Staff Dashboard</CardTitle>
                <CardDescription>Centralized management hub</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Daily schedule overview</li>
                  <li>• Patient list management</li>
                  <li>• Appointment status tracking</li>
                  <li>• Quick access to patient records</li>
                  <li>• Task prioritization</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Admin Panel</CardTitle>
                <CardDescription>Practice-wide controls</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• User account management</li>
                  <li>• Role-based access control</li>
                  <li>• Practice settings configuration</li>
                  <li>• Analytics and reporting</li>
                  <li>• System-wide oversight</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Notifications</CardTitle>
                <CardDescription>Automated communication</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Appointment confirmation emails</li>
                  <li>• Reminder notifications</li>
                  <li>• Status update alerts</li>
                  <li>• Customizable templates</li>
                  <li>• Multi-channel delivery</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-6">
              Join Dentify today and transform your dental practice management
            </p>
            <div className="flex gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/auth/register">Sign Up Free</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t mt-auto">
        <div className="container mx-auto px-4 py-6 text-center text-muted-foreground">
          <p>&copy; 2025 Dentify. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
