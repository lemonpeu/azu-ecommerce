import { Roboto_Mono } from "next/font/google";

import Card from "@/components/atoms/Card";
import Nav from "@/components/atoms/Nav";
import ProductsSection from "@/components/sections/ProductsSection";

const roboto_Mono = Roboto_Mono({ subsets: ["latin"] });

const Products = () => {
  return (
    <div className="p-4">
      <div className={roboto_Mono.className}>
        <Nav />
        <input
          className="border-teal-400 rounded-md border-2 text-sm"
          placeholder="Buscá por nombre"
        />
        <ProductsSection title="Llaveros"/>
      </div>
    </div>
  );
};

export default Products;
