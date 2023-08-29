import Card from "@/components/atoms/Card";

interface ProductsSection {
  title: string;
}

const ProductsSection = ({ title }: ProductsSection) => {
  return (
    <section className="mt-4">
      <h1 className="text-teal-600 font-bold text-center">{title}</h1>
      <div className="flex flex-wrap md:justify-start justify-center space-x-3 space-y-3">
        <Card price={35} />
        <Card price={35} />
        <Card price={35} />
        <Card price={35} />
        <Card price={35} />
        <Card price={35} />
        <Card price={35} />
        <Card price={35} />
        <Card price={35} />
        <Card price={35} />
      </div>
      <div id="pagination" className="flex justify-center mt-8">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
            />
          </svg>
        </button>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default ProductsSection;
