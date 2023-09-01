import { Roboto_Mono } from "next/font/google";

import Card from "@/components/atoms/Card";
import Nav from "@/components/atoms/Nav";
import ProductsSection from "@/components/sections/ProductsSection";
import { fetcher } from "../../lib/api";

const roboto_Mono = Roboto_Mono({ subsets: ["latin"] });

const Products = ({llaveros}) => {
  return (
    <div className="p-4">
      <div className={roboto_Mono.className}>
        <Nav />
        <input
          className="border-teal-400 rounded-md border-2 text-sm"
          placeholder="Buscá por nombre"
        />
        <ProductsSection llaveros={llaveros} title="Llaveros" />
      </div>
    </div>
  );
};

export default Products;

export async function getStaticProps() {
  const llaverosResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/Foto-llaveros?populate=*`);
  return {
    props: {
      llaveros: llaverosResponse.data[0].attributes.llaveros.data
    }
  }
}
