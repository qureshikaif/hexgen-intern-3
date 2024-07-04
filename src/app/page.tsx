import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Main from "../../public/main.webp";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <div className="flex items-center justify-center">
        <Image src={Main} alt="main" className="object-cover h-screen" />
      </div>
      <Footer />
    </main>
  );
}
