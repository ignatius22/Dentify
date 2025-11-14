import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { signOut } from "@/lib/auth";

export default async function DashboardPage() {
  const session = await auth();

  if (!session) {
    redirect("/auth/login");
  }

  const handleSignOut = async () => {
    "use server";
    await signOut({ redirectTo: "/" });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">Dentify</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">
              {session.user.email} ({session.user.role})
            </span>
            <form action={handleSignOut}>
              <Button type="submit" variant="outline" size="sm">
                Sign Out
              </Button>
            </form>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">
            Welcome back, {session.user.name || session.user.email}!
          </h2>
          <p className="text-muted-foreground">Here's what's happening with your practice today.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Today's Appointments</CardTitle>
              <CardDescription>Scheduled for today</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">0</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Total Patients</CardTitle>
              <CardDescription>Active patients</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">0</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Pending Appointments</CardTitle>
              <CardDescription>Awaiting confirmation</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">0</div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-4">
            {session.user.role === "PATIENT" && (
              <>
                <Button>Book Appointment</Button>
                <Button variant="outline">View My Appointments</Button>
                <Button variant="outline">Medical History</Button>
              </>
            )}
            {(session.user.role === "DENTIST" || session.user.role === "STAFF") && (
              <>
                <Button>New Appointment</Button>
                <Button variant="outline">View Patients</Button>
                <Button variant="outline">Today's Schedule</Button>
              </>
            )}
            {session.user.role === "ADMIN" && (
              <>
                <Button>Manage Users</Button>
                <Button variant="outline">View All Appointments</Button>
                <Button variant="outline">Practice Settings</Button>
              </>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
