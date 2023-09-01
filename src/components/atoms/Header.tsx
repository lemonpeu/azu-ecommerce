import Image from "next/image";

const Header = () => {
  return (
    <header className="z-10 w-full md:mt-[-50px] md:flex md:items-center md:justify-evenly">
      <section className="p-10 bg-gray-950 md:min-h-[290px] md:w-[50%]">
        <h1 className="font-bold text-4xl mb-4 text-slate-50">Magicblend</h1>
        <h2 className="mb-4 text-sm text-slate-50">
          Azu — Artista 2D & 3D.<br></br>Argentina | Buenos Aires
        </h2>
        <input className="rounded-2xl p-1 text-xs" placeholder="Buscás algo?" />
      </section>
      <section className="w-[100%] relative md:w-[500px] aspect-square rounded-3xl">
          <Image
            src="/Images/IMG_20220828_195706.jpg"
            fill
            objectFit="contain"
            alt="Picture of the author"
          />
      </section>
    </header>
  );
};

export default Header;
