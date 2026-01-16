import React from 'react';
import { FaCamera, FaHandshake } from "react-icons/fa";
import { MdForum } from "react-icons/md";

const Works = () => {
    const steps = [
        {
            icon: FaCamera,
            title: '1. Snap & Post',
            description: 'Take a few clear photos of your item, add a quick description, and set your price. It takes less than 60 seconds.'
        },
        {
            icon: MdForum,
            title: '2. Chat & Connect',
            description: 'Communicate safely using our built-in messenger. Ask questions, negotiate prices, and set meeting points.'
        },
        {
            icon: FaHandshake,
            title: '3. Safe Exchange',
            description: 'Meet up in person or use our integrated shipping. Payments are held securely until the deal is complete.'
        }
    ];

    return (
        <section id='works' className="bg-white dark:bg-gray-900/50 my-20">
            <div className="max-w-7xl mx-auto px-6 w-11/12">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-black mb-4">How QuickSell Works</h1>
                    <p className="text-[#658683] max-w-2xl mx-auto">
                        Selling and buying has never been this simple and secure. Follow these three steps to get started.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <div key={index} className="text-center space-y-6">
                                <div className="size-20 bg-primary/10 text-primary rounded-3xl flex items-center justify-center mx-auto">
                                    <Icon className="text-4xl" />
                                </div>
                                <h3 className="text-xl font-bold">{step.title}</h3>
                                <p className="text-[#658683] dark:text-gray-400">{step.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Works;
