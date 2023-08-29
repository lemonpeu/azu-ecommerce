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
        <Image
          src="/Images/icon.jpg"
          width={100}
          height={100}
          alt="Picture of the author"
        />
        <p>{category}</p>
      </article>
    </Link>
  );
};

export default Category;
