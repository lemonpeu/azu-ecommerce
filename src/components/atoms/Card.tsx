import Image from "next/image"

interface CardProps {
    price?: number
}

const Card = ({price}: CardProps) => {
    return (
        <article className="w-3/6 box-border pr-2">
            <Image
                src="/Images/image1.jpg"
                width={200}
                height={200}
                alt="Picture of the author"
            />
            <p className="my-2">${price}.00</p>
            <p className="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </article>
    )
}

export default Card