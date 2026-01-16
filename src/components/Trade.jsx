import React from 'react';
import { MdVerifiedUser, MdSupportAgent } from "react-icons/md";
import { FaLock } from "react-icons/fa";

const Trade = () => {
    const features = [
        { icon: MdVerifiedUser, label: 'Identity Verified' },
        { icon: FaLock, label: 'Secure Payments' },
        { icon: MdSupportAgent, label: '24/7 Support' }
    ];

    return (
        <section className="my-20 bg-primary p-8 lg:p-12">
            <div className=" flex flex-col lg:flex-row items-center justify-between gap-8 text-white max-w-7xl w-11/12 mx-auto">
                <div className="max-w-md">
                    <h1 className="text-3xl font-black mb-4">Trade with Confidence</h1>
                    <p className="text-white/80 leading-relaxed">
                        We verify our members and monitor every transaction to ensure your safety.
                        Our support team is here for you 24/7.
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 lg:gap-12 w-full lg:w-auto">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={index}
                                className={`flex flex-col items-center gap-2 ${
                                    index === 2 ? 'col-span-2 sm:col-span-1' : ''
                                }`}
                            >
                                <Icon className="text-4xl" />
                                <span className="text-sm font-bold">{feature.label}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Trade;
