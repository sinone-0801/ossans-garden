import Image from "next/image"
interface ServiceCategoryProps {
  title: string
  image: string
  services: string[]
  id: string
}

export default function ServiceCategory({ title, image, services, id }: ServiceCategoryProps) {
  return (
    <div
      id={id}
      className="bg-ossan-box rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row"
    >
      <Image
        src={image || "/placeholder.svg"}
        alt={title}
        width={400}
        height={300}
        className="w-full md:w-1/3 h-64 md:h-auto object-cover"
      />
      <div className="p-6 flex-1">
        <h2 className="text-2xl md:text-3xl font-bold text-ossan-strong border-b-2 border-ossan-strong pb-2 mb-4 font-serif">
          {title}
        </h2>
        <ul className="list-none pl-0 space-y-2">
          {services.map((service, index) => (
            <li
              key={index}
              className="mb-2 pl-5 relative text-ossan-text"
            >
              <span className="absolute left-0 text-ossan-strong">•</span>
              {service}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
