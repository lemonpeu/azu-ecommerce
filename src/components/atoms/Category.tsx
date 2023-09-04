import Image from "next/image";
import Link from "next/link";

interface CategoryProps {
  category: string;
  pagination: string;
}

const Category = ({ category, pagination }: CategoryProps) => {
  return (
    <Link href={`/${pagination}`}>
      <article className="flex items-center flex-col mr-2 p-3 rounded-sm overflow-hidden min-w-[150px] md:min-w-[200px]">
        <div className="w-full max-w-[100px] h-[100px] overflow-hidden relative p-2 rounded-lg">
          <Image
            src="/Images/categorysample.jpg"
            layout="fill"
            objectFit="cover"
            alt="Picture of the author"
          />
        </div>

        <p>{category}</p>
      </article>
    </Link>
  );
};

export default Category;
