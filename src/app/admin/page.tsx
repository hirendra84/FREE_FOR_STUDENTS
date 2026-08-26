import { prisma } from "@/lib/prisma";
import { Users, Mail, Calendar, Clock, Database } from "lucide-react";
import Link from "next/link";

export default async function AdminPage() {
  const subscribers = await prisma.subscriber.findMany({
    orderBy: {
      subscribedAt: 'desc'
    }
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Admin Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-primary/20 p-2 rounded-lg text-primary">
              <Database className="w-5 h-5" />
            </div>
            <span className="text-xl font-bold tracking-tight">Admin Dashboard</span>
          </div>
          <Link 
            href="/"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Return to Site
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Subscribers</h1>
          <p className="text-muted-foreground">Manage your newsletter signups and user details.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 text-primary rounded-lg">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-medium">Total Subscribers</p>
                <p className="text-3xl font-bold">{subscribers.length}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Data Table */}
        <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-muted/50 border-b border-border">
                  <th className="p-4 font-semibold text-muted-foreground text-sm">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" /> Name
                    </div>
                  </th>
                  <th className="p-4 font-semibold text-muted-foreground text-sm">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4" /> Email
                    </div>
                  </th>
                  <th className="p-4 font-semibold text-muted-foreground text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" /> Grad Year
                    </div>
                  </th>
                  <th className="p-4 font-semibold text-muted-foreground text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" /> Subscribed
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {subscribers.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="p-8 text-center text-muted-foreground">
                      No subscribers found.
                    </td>
                  </tr>
                ) : (
                  subscribers.map((sub) => (
                    <tr key={sub.id} className="hover:bg-muted/30 transition-colors">
                      <td className="p-4 font-medium">{sub.name}</td>
                      <td className="p-4 text-muted-foreground">{sub.email}</td>
                      <td className="p-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary/10 text-secondary border border-secondary/20">
                          {sub.gradYear}
                        </span>
                      </td>
                      <td className="p-4 text-sm text-muted-foreground">
                        {new Date(sub.subscribedAt).toLocaleString()}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
