import { Roboto_Mono } from "next/font/google";

import Card from "@/components/atoms/Card";
import Nav from "@/components/atoms/Nav";
import ProductsSection from "@/components/sections/ProductsSection";
import { fetcher } from "../../lib/api";

const roboto_Mono = Roboto_Mono({ subsets: ["latin"] });

const Products = ({items}) => {
  return (
    <div className="p-4">
      <div className={roboto_Mono.className}>
        <Nav />
        <input
          className="border-teal-400 rounded-md border-2 text-sm"
          placeholder="Buscá por nombre"
        />
        {items && <ProductsSection products={items} title="Keychains" />}
      </div>
    </div>
  );
};

export default Products;

export async function getStaticProps() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/products?populate=deep`);
  const products = await response.json();
  return {
    props: {
      items: products.data
    }
  }
}
