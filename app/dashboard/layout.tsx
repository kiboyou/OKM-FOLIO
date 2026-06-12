import { redirect } from "next/navigation";
import { isSupabaseConfigured } from "@/lib/supabase/config";
import { getCurrentUser } from "@/lib/auth";
import Sidebar from "./_components/Sidebar";
import "./dashboard.css";

export const metadata = { title: "Dashboard — OKM" };

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (!isSupabaseConfigured) {
    return (
      <div className="dash-login">
        <div className="card">
          <h1>Dashboard indisponible</h1>
          <p>
            Configurez Supabase dans <code>.env.local</code> (NEXT_PUBLIC_SUPABASE_URL
            et NEXT_PUBLIC_SUPABASE_ANON_KEY) puis redémarrez l&apos;application.
          </p>
        </div>
      </div>
    );
  }

  const user = await getCurrentUser();
  if (!user) redirect("/login");

  return (
    <div className="dash-shell">
      <Sidebar email={user.email} />
      <main className="dash-main">{children}</main>
    </div>
  );
}
