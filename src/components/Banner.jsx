import Link from 'next/link';
import React from 'react';
import { MdOutlinePayment, MdVerified } from "react-icons/md";

const Banner = () => {
    return (
        <section className="max-w-7xl mx-auto w-11/12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="flex flex-col gap-8">
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                            <span className="material-symbols-outlined text-sm"><MdVerified /></span> Verified Local Community
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight">
                            The smarter way to <span className="text-primary">buy & sell</span> locally.
                        </h1>
                        <p className="text-lg text-[#658683] dark:text-gray-400 max-w-md leading-relaxed">
                            Join 50,000+ neighbors trading everything from vintage cameras to modern furniture with total peace of mind.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href={"/items"} className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-[1.02] transition-transform shadow-lg shadow-primary/20">
                            Start Shopping
                        </Link>
                        <Link href={"#works"} className="bg-white dark:bg-gray-800 border border-[#dce5e4] dark:border-gray-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#f0f4f4] transition-colors">
                            How it works
                        </Link>
                    </div>
                    <div className="flex items-center gap-4 pt-4">
                        <div className="flex -space-x-3">
                            <img
                                alt="User avatar 1"
                                className="w-10 h-10 rounded-full border-2 border-white"
                                src="https://i.ibb.co.com/zHtMXwky/rehan.jpg"
                            />
                            <img
                                alt="User avatar 2"
                                className="w-10 h-10 rounded-full border-2 border-white"
                                src="https://i.ibb.co.com/bwL7R3K/women10.png"
                            />
                            <img
                                alt="User avatar 3"
                                className="w-10 h-10 rounded-full border-2 border-white"
                                src="https://i.ibb.co.com/p2wwqVc/1.png"
                            />
                        </div>
                        <p className="text-sm text-[#658683]">Trusted by <span className="font-bold text-[#121717] dark:text-white">4.9/5</span> rated sellers</p>
                    </div>
                </div>
                <div className="relative">
                    <div
                        className="aspect-square rounded-3xl bg-cover bg-center overflow-hidden shadow-2xl"
                        style={{
                            backgroundImage: 'url("https://i.ibb.co.com/HpbZGBW9/sell.jpg")'
                        }}
                    />
                    <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl flex items-center gap-4 border border-[#f0f4f4] dark:border-gray-700">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                            <span className="material-symbols-outlined text-2xl"><MdOutlinePayment /></span>
                        </div>
                        <div>
                            <p className="text-sm font-bold">Secure Payment</p>
                            <p className="text-xs text-[#658683]">Escrow protection enabled</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;