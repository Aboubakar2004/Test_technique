import Header from "@/components/Header";
import LandingPage from "@/components/LandingPage";
import Descritpion from "@/components/Descritpion";
import Card from "@/components/Card";

export default function Home() {
  return (
    <main className="min-h-screen ">
      <Header />
      <div className="max-w-7xl mx-auto px-6">
        <LandingPage />
        <Descritpion />
        <Card />
      </div>
    </main>
  );
}
