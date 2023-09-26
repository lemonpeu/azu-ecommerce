import Image from "next/image";

interface CardProps {
  price?: number;
  imagesSrc?: string;
  description?: string;
}

const Card = ({ price, imagesSrc, description }: CardProps) => {
  return (
    <article className="relative max-h-[400px] w-[300px] md:w-[200px]">
      <div className="w-full h-[300px] md:h-[200px] overflow-hidden relative p-2 rounded-lg md:mb-4 grayscale hover:grayscale-0 ease-in	transition">
        <Image
          src={imagesSrc || "/Images/skull.jpg"}
          alt="Picture of the author"
          layout="fill"
          objectFit="cover"
        />
      </div>
      {price && <p className="my-2">${price}.00</p>}
      <p className="text-xs md:text-sm text-center md:text-left">
        {description}
      </p>
    </article>
  );
};

export default Card;
