import React from 'react';
import { MdDevicesOther, MdSportsSoccer } from "react-icons/md";
import { GiAmpleDress } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
import { BsStars } from "react-icons/bs";

const Categories = () => {
    const categories = [
        { icon: MdDevicesOther, name: 'Electronics' },
        { icon: GiAmpleDress, name: 'Fashion' },
        { icon: FaHome, name: 'Home & Garden' },
        { icon: MdSportsSoccer, name: 'Sports' },
        { icon: BsStars, name: 'Collectibles' }
    ];

    return (
        <section className="max-w-7xl mx-auto w-11/12 my-20">
            <h2 className="text-2xl font-bold mb-8">Popular Categories</h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {categories.map((category, index) => {
                    const Icon = category.icon;
                    return (
                        <div
                            key={index}
                            className="group cursor-pointer flex flex-col gap-3 rounded-2xl border border-[#dce5e4] dark:border-gray-800 bg-white dark:bg-gray-800/50 p-6 items-center transition-all hover:border-primary hover:shadow-md"
                        >
                            <div className="size-14 bg-[#f0f4f4] dark:bg-gray-800 rounded-xl flex items-center justify-center text-[#121717] dark:text-white group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                                <Icon className="text-3xl" />
                            </div>

                            <h2 className="text-base font-bold">{category.name}</h2>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Categories;
