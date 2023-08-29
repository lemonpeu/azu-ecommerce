import Link from "next/link";
import Card from "@/components/atoms/Card";

interface CardSection {
  title: string;
}

const CardSection = ({ title }: CardSection) => {
  return (
    <section className="p-2 flex items-center flex-col">
      <h3 className="text-lg text-teal-600 font-bold mb-4">{title}</h3>
      {/* Agregar scroll */}
      <div className="mb-4 box-border w-full">
        <div className="flex flex-wrap justify-evenly">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <Link href="/llaveros">
        <button className="mt-5 bg-[#C1DCDC] py-3 px-2 rounded-2xl text-sm">
          Ver todos los productos
        </button>
      </Link>
    </section>
  );
};

export default CardSection;
