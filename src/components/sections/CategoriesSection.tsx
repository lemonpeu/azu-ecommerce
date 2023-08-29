import Category from "../atoms/Category";

const categories = ["Charms", "Llaveros", "Pins", "Cuadros", "Stickers"];

const CategoriesSection = () => {
  return (
    <section>
      <p className="text-teal-600 font-bold text-xs">Categorias</p>
      <h3 className="text-md">Buscar por categoría</h3>
      <div className="flex justify-between mt-4 overflow-x-auto min-w-full md:justify-around md:wrap md:w-min">
        {categories.map((item, key) => (
          <Category key={key} pagination={item.toLowerCase()} category={item} />
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;
