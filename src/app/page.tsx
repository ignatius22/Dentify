import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">Dentify</h1>
          <nav className="flex gap-6 items-center">
            <Link href="/about" className="text-sm hover:text-primary transition">
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
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">
            Modern Dental Practice Management
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Streamline your dental practice with our comprehensive management system.
            Manage appointments, patients, and staff all in one place.
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/auth/register">Get Started</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Patient Management</h3>
            <p className="text-muted-foreground">
              Easily manage patient records, medical history, and personal information.
            </p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Appointment Scheduling</h3>
            <p className="text-muted-foreground">
              Intuitive calendar system with automated reminders and notifications.
            </p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Staff Dashboard</h3>
            <p className="text-muted-foreground">
              Comprehensive dashboard for dentists and admin staff to manage operations.
            </p>
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
