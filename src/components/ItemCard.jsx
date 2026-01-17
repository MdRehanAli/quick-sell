import Link from 'next/link'
import { FaLocationDot } from 'react-icons/fa6'

const ItemCard = ({ item }) => {
    return (
        <div
            className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4 hover:shadow-md transition flex flex-col justify-between gap-2"
        >
            <div className="">
                <img className='w-full rounded-2xl' src={item.image} alt="Product" />
            </div>

            <h3 className="font-bold text-lg">{item.title}</h3>
            <div className="flex items-center gap-1 text-[#658683]">
                <span className="material-symbols-outlined"><FaLocationDot className='text-xl'/></span>
                {item.location}
            </div>

            <div className="flex items-center justify-between">
                <span className="font-bold text-primary">${item.price}</span>

                {item.condition && (
                    <span className={`text-xs px-2 py-1 rounded-full ${item.conditionColor}`}>
                        {item.condition}
                    </span>
                )}
            </div>
            <Link className='btn btn-primary w-full' href={`/items/${item.id}`}>View Details</Link>
        </div>
    )
}

export default ItemCard