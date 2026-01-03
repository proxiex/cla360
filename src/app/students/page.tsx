import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { StudentsContent } from "./StudentsContent";

export const metadata = {
  title: "For Students - CLA360",
  description: "Know Before You Go. Visa readiness. Financial preparedness. Verified pathways to universities.",
};

export default function StudentsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <StudentsContent />
      </main>
      <Footer />
    </div>
  );
}
