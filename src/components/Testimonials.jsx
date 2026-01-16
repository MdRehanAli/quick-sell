import React from 'react';
import { FaStar } from 'react-icons/fa';

const Testimonials = () => {
    const testimonials = [
        {
            text: "Found a beautiful mid-century chair for a fraction of the retail price. The seller was lovely and the meet-up was super safe.",
            name: "Md Rehan Ali",
            role: "Member since 2026",
            avatar: "https://i.ibb.co.com/zHtMXwky/rehan.jpg"
        },
        {
            text: "Selling my camera gear was so easy. I listed three items and they were all sold within a week. The in-app chat is great.",
            name: "Elena Rodriguez",
            role: "Top Rated Seller",
            avatar: "https://i.ibb.co.com/bwL7R3K/women10.png"
        },
        {
            text: "QuickSell has become my go-to for household upgrades. It's much cleaner and more professional than other marketplaces.",
            name: "Marcus Thorne",
            role: "Verified Buyer",
            avatar: "https://i.ibb.co.com/p2wwqVc/1.png"
        }
    ]

    return (
        <section className="max-w-7xl mx-auto w-11/12 my-16">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-2">What our neighbors say</h2>
                <p className="text-[#658683]">Thousands of successful trades every month</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-[#dce5e4] dark:border-gray-700 shadow-sm">
                        <div className="flex gap-1 text-yellow-400 mb-4">
                            {[...Array(5)].map((_, i) => (
                                <span key={i} className="material-symbols-outlined fill-1"><FaStar /></span>
                            ))}
                        </div>
                        <p className="text-[#121717] dark:text-gray-200 italic mb-6">"{testimonial.text}"</p>
                        <div className="flex items-center gap-3">
                            <img
                                alt={testimonial.name}
                                className="w-10 h-10 rounded-full"
                                src={testimonial.avatar}
                            />
                            <div>
                                <p className="font-bold text-sm">{testimonial.name}</p>
                                <p className="text-xs text-[#658683]">{testimonial.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
};

export default Testimonials;