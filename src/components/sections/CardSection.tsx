import Link from "next/link";
import Card from "@/components/atoms/Card";

interface CardSection {
  title: string;
}

const CardSection = ({ title }: CardSection) => {
  return (
    <section className="p-2 flex items-center flex-col">
      <h3 className="text-lg font-bold mb-8">{title}</h3>
      {/* Agregar scroll */}
      <div className="mb-4 box-border w-full">
        <div className="flex flex-wrap justify-evenly">
          <div className="mb-4">
            <Card description="Lorem lorem" />
          </div>
          <div className="mb-4">
            <Card description="Lorem lorem" />
          </div>
          <div className="mb-4">
            <Card description="Lorem lorem" />
          </div>
          <div>
            <Card description="Lorem lorem" />
          </div>
        </div>
      </div>
      <Link href="/llaveros">
        <button className="mt-5 bg-black text-white py-3 px-2 rounded-2xl text-sm">
          Ver todos los productos
        </button>
      </Link>
    </section>
  );
};

export default CardSection;
