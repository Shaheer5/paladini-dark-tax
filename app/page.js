import Image from "next/image";
import Footer from "@/components/Footer";
import LogoSlider from "@/components/LogoSlider";
import Testimonial from "@/components/Testimonial";
import About from "@/components/About";
import Founder from "@/components/Founder";
import TaxIssues from "@/components/TaxIssues";
import Book from "@/components/Book";
import FAQ from "@/components/FAQ";
import FreeConsultation from "@/components/FreeConsultation";
import Copyright from "@/components/Copyright";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { CustomJS } from "@/components/CustomJS";

export default function Home() {
  return (
    <main>
      <Hero />
      <LogoSlider />
      <Testimonial />
      <About />
      <Founder />
      <TaxIssues />
      <Book />
      <FAQ />
      <FreeConsultation />
      <Footer />
      <Copyright />
      <CustomJS />
    </main>
  );
}
