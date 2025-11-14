import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/">
            <h1 className="text-2xl font-bold text-primary">Dentify</h1>
          </Link>
          <nav className="flex gap-6 items-center">
            <Link href="/about" className="text-sm font-semibold text-primary">
              About
            </Link>
            <Link href="/services" className="text-sm hover:text-primary transition">
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
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">About Dentify</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-8">
              Dentify is a modern dental practice management system designed to streamline
              operations and improve patient care.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
            <p className="text-muted-foreground mb-6">
              We aim to revolutionize dental practice management by providing an intuitive,
              comprehensive platform that connects dentists, staff, and patients seamlessly.
              Our goal is to reduce administrative burden and allow dental professionals
              to focus on what matters most: patient care.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Why Choose Dentify?</h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <div>
                  <strong>User-Friendly Interface:</strong> Intuitive design that requires
                  minimal training for your staff
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <div>
                  <strong>Complete Patient Management:</strong> Comprehensive patient records,
                  medical history, and treatment notes
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <div>
                  <strong>Smart Scheduling:</strong> Intelligent appointment booking with
                  automated reminders
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <div>
                  <strong>Secure & Compliant:</strong> Built with security and healthcare
                  compliance in mind
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <div>
                  <strong>Cloud-Based:</strong> Access your practice data from anywhere,
                  anytime
                </div>
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Get Started Today</h2>
            <p className="text-muted-foreground mb-6">
              Join the growing number of dental practices that trust Dentify for their
              practice management needs. Sign up today and experience the difference.
            </p>

            <div className="flex gap-4">
              <Button asChild size="lg">
                <Link href="/auth/register">Get Started</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Contact Us</Link>
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
