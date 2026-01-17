import { FaLocationDot } from "react-icons/fa6"

const ItemDetails = ({ item }) => {
    return (
        <section className="max-w-7xl mx-auto px-6 py-16">
            <div className="grid md:grid-cols-2 gap-20 items-center">
                <div className="">
                    <img
                        src={item.image}
                        alt={item.title}
                        className="rounded-2xl w-full"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <h1 className="text-3xl font-black mb-4">{item.title}</h1>
                    <div className="flex items-center gap-1 text-[#658683]">
                        <span className="material-symbols-outlined text-sm"><FaLocationDot className="text-xl"/></span>
                        {item.location}
                    </div>

                    <p className="text-2xl font-bold text-primary mb-6">
                        ${item.price}
                    </p>

                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                        {item.description}
                    </p>

                    <div className="flex gap-4 text-sm">
                        <span className="font-semibold">Brand:</span>
                        <span>{item.brand}</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ItemDetails