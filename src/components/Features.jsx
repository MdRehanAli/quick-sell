import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { IoIosHeart } from "react-icons/io";

const Features = () => {
    const listings = [
        {
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDkqyZIZAz-FYZFKU7GPGuIOlumH8SBcTMcBJekOQNFDcF-y-fBW4fyk1BV62_jy2NLEk5fhkDuwTNM52lZgW9dNO-g2XtI_V7dNhFoaU547iKGAJz4HY_viJFBCI-DdwWNp25I3d8scQSttRv4uCbHm649-PO1GjtN2H4QEjEpqPLevJ9_E5jGi1QkHC1hQXikL7A3MtQeyOT_l-MBYNDwezPtn0CvnC5UcIi0cAlJa3BpQ5JmIUZHmxv0xH_k_462llfPPNW9_Uk",
            price: "$120.00",
            badge: "Mint Condition",
            badgeColor: "bg-yellow-100 text-yellow-800",
            title: "Vintage Canon AE-1",
            location: "Uttara, Dhaka"
        },
        {
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAlbWXJCr_pdyD5JJk6zSJKfeuU2FGlKazQ8-n6kAIYzm7TP87ulcD3ygcn9_BOl_9aC1JN4VXX03qndi2d5pXWcY6i7eIMIVAU-g1tXy2PBWFjgzINRYjKeXhoz4gP3yQUUpOmpRLgLll3ClJpJGCrxuSxbItm-YCZZe9bIq7BqbCcLDgqUYAKB4hwyLJVYvHwyswvVeSyuz9gVC_WmqBK3BhBVxrlemvjmQ87PTYb_NFZejI7eTjCmoJFwacXtEVbwEiuSy1MDOo",
            price: "$450.00",
            badge: "Verified",
            badgeColor: "bg-green-100 text-green-800",
            title: "Gucci Shoulder Bag",
            location: "Mirpur, Dhaka"
        },
        {
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuABn32cXSwqMiD6seDWeTTaqSRzO6C6tj6ImseapE5Eo39-Yux57dlpXii1dfVjOOWl9xi-Kp_XChYHZqkJ15GimkE0z1Qem0ElJtpXWs_s8DPU5SWp01V6wGPTbWOSnYpNog42_XgPcITFXQeIYBfp941e3loEJNZsDurihlSfua37Wepgt7KBJOCwynwz67sRZShA9qkZ9rnAmnSYMSgcyEvE4fZrgQN0ZpPBPv61B5GBy3LyYDkOHiQ-7ZjhPL21u0dLOU_3b2I",
            price: "$300.00",
            badge: "Negotiable",
            badgeColor: "bg-[#f0f4f4] text-[#121717]",
            title: "Trek Mountain Bike",
            location: "Bbaria, Comilla"
        },
        {
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDfHLLCWd0NMK84SibG25q-ObzJfj149LZv6YRHMIeyM1Sw4yUBHlcx6bsLenKz5lMz1BHJIrcePLCbq7cOz45oCd3Th03ZarZHiJH9D7E6Pdi1QOhZAZLg8aRkRGQdbIiZXX_xi9djcqRN5ml9XNJeb4uuMbxH_HdAKqWZlhCDGdmTh7xHt4d1jhsBquYItcTitce_mALHgjjoktp0YF6YwRlG03q7d-S1R0br210CJNTRpEZaKjzO_GkCW95dHocpJcfii3Pk62I",
            price: "$150.00",
            badge: "Local Pickup",
            badgeColor: "bg-blue-100 text-blue-800",
            title: "Eames Style Lounge Chair",
            location: "Chandpur, Noakhali"
        }
    ]

    return (
        <section className="max-w-7xl mx-auto w-11/12 my-20 overflow-hidden">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold mb-8">Featured Listings</h2>
            </div>
            <div className="flex overflow-x-auto gap-6 pb-8 snap-x no-scrollbar">
                {listings.map((listing, index) => (
                    <div key={index} className="min-w-[280px] group flex flex-col gap-4 snap-start">
                        <div
                            className="relative w-full aspect-square bg-cover bg-center rounded-2xl overflow-hidden group-hover:shadow-lg transition-all"
                            style={{ backgroundImage: `url("${listing.image}")` }}
                        >
                            <button className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur rounded-full text-[#121717] hover:bg-primary hover:text-white transition-colors">
                                <span className="material-symbols-outlined text-xl"><IoIosHeart /></span>
                            </button>
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <p className="text-xl font-bold">{listing.price}</p>
                                <span className={`text-xs font-medium px-2 py-1 rounded ${listing.badgeColor}`}>
                                    {listing.badge}
                                </span>
                            </div>
                            <p className="text-[#658683] dark:text-gray-400 mt-1">{listing.title}</p>
                            <div className="flex items-center gap-1 mt-2 text-xs text-[#658683]">
                                <span className="material-symbols-outlined text-sm"><FaLocationDot /></span>
                                {listing.location}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
};

export default Features;