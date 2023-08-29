import Image from "next/image"

interface CardProps {
    price?: number
}

const Card = ({price}: CardProps) => {
    return (
        <article className="w-[150px] md:w-[250px] box-border pr-2 flex flex-col align-middle justify-center overflow-hidden">
            <Image
                src="/Images/image1.jpg"
                width={150}
                height={150}
                alt="Picture of the author"
            />
            {price && <p className="my-2">${price}.00</p>}
            <p className="text-xs md:text-sm text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </article>
    )
}

export default Card