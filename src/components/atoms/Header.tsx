import Image from "next/image"

const Header = () => {
    return (
        <header className="rounded-3xl bg-[#C1DCDC] p-5 z-10 w-full md:w-[50%] md:min-h-[250px]">
            <section className="mb-4">
                <h1 className="font-bold text-4xl mb-4">Magicblend</h1>
                <h2 className="mb-4 text-sm">Azu — Artista 2D & 3D.<br></br>Argentina | Buenos Aires</h2>
                <input className="rounded-2xl p-1 text-xs" placeholder="Buscás algo?"/>
            </section>
            <section className="right-0 top-0">
            {/* <Image
                src="/Images/header.jpg"
                width={120}
                height={120}
                alt="Picture of the author"
            /> */}
            </section>
        </header>
    )
}

export default Header