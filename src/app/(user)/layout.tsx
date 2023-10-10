import Header from "@/components/User/Header";
import Sidebar from "@/components/User/Sidebar";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1">
        <Header />
        {children}
      </div>
    </section>
  );
}
