import MainContent from "@/components/maincontent";
import Sidebar from "@/components/sidebar";


export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white flex flex-col md:flex-row gap-4 px-4 sm:px-10 md:px-20 lg:px-32 pt-16">
    <Sidebar />
    <MainContent />
  </main>
  );
}
