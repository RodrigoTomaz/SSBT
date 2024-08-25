//Components
import Preloader from "@/components/Preloader"
import Header from "@/components/Header";
import SHome from "@/components/SHome";
import SAbout from "@/components/SAbout";
import SService from "@/components/SServices";
import SProducts from "@/components/SProducts";
import SContact from "@/components/SContact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="page">
      <Preloader />
      <Header />
      <SHome />
      <SAbout />
      <SService />
      <SProducts />
      <SContact />
      <Footer />
    </main>
  );
}
