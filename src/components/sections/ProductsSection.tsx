import Card from "@/components/atoms/Card";

interface Product {
  itemphoto?: {
    data?: {
      attributes?: {
        url?: string;
      };
    };
  };
}

interface ProductsSection {
  title: string;
  products: Product[];
}

const ProductsSection = ({ title, products }: ProductsSection) => {
  return (
    <section className="mt-4 ">
      <h1 className="text-gray-950 font-bold text-center mb-4">{title}</h1>
      <div className="flex flex-wrap md:justify-start justify-center">
        {products &&
          products.map((product, key) => (
            <div className="md:mr-6 mb-6" key={product.id}>
              <Card
                price={35}
                key={product.id}
                imagesSrc={`${
                  ("http://127.0.0.1:1336" +
                  product?.attributes?.product?.photo?.data?.attributes?.url) || "/Images/skull.jpg"}`
                }
                description={product?.attributes?.product?.description || "Lorem lorem lorem lorem lorem"}
                price={product?.attributes?.product?.price || 10}
              />
            </div>
          ))}
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
