import { Roboto_Mono } from "next/font/google";

import Header from "@/components/atoms/Header";
import Nav from "@/components/atoms/Nav";
import CardSection from "@/components/sections/CardSection";
import CategoriesSection from "@/components/sections/CategoriesSection";

const roboto_Mono = Roboto_Mono({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${roboto_Mono.className} p-4`}>
      <div className="mb-4">
        <Nav />
        <div className="flex justify-center md:justify-start">
          <Header />
        </div>
        
      </div>
      {false && (
        <div className="sales">
          <CardSection title="Ofertas" />
        </div>
      )}
      <div className="categories mb-5">
        <CategoriesSection />
      </div>
      <hr/>
      <div className="best-selling mt-4">
        <CardSection title="Favoritos" />
      </div>
    </main>
  );
}
