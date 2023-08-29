import Image from "next/image";

interface ProductProps {
  name: string;
  price: number;
  description: string;
}

const Product = ({ name, price, description }: ProductProps) => {
  return (
    <section>
      <div>
        <Image
          src="/Images/product.jpg"
          width={200}
          height={200}
          alt="Picture of the author"
        />
      </div>
      <div>
        <h1>{name}</h1>
        <p>${price}</p>
        <p>{description}</p>
      </div>
    </section>
  );
};

export default Product;
