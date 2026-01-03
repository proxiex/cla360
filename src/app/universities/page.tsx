import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { UniversitiesContent } from "./UniversitiesContent";

export const metadata = {
  title: "For Universities - CLA360",
  description: "Verified readiness. Responsible engagement. Better outcomes. Connect with pre-verified, visa-ready students.",
};

export default function UniversitiesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <UniversitiesContent />
      </main>
      <Footer />
    </div>
  );
}
