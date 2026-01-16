import Link from 'next/link';
import React from 'react';
import { FaAddressCard, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { MdOutlineAccountBalance, MdOutlinePayment, MdSell } from 'react-icons/md';
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    const footerSections = [
        {
            title: 'Shop',
            links: [
                { name: 'All Categories', href: '#' },
                { name: 'Featured Items', href: '#' },
                { name: 'New Arrivals', href: '#' },
                { name: 'Nearby Deals', href: '#' }
            ]
        },
        {
            title: 'Support',
            links: [
                { name: 'Safety Center', href: '#' },
                { name: 'Help Help', href: '#' },
                { name: 'Community Rules', href: '#' },
                { name: 'Contact Us', href: '#' }
            ]
        },
        {
            title: 'Company',
            links: [
                { name: 'About Us', href: '#' },
                { name: 'Careers', href: '#' },
                { name: 'Privacy Policy', href: '#' },
                { name: 'Terms of Service', href: '#' }
            ]
        }
    ]

    return (
        <footer className="border-t border-[#dce5e4] dark:border-gray-800 bg-white dark:bg-background-dark py-16 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
                <div className="col-span-2 md:col-span-1 space-y-6">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
                            <span className=""><MdSell /></span>
                        </div>
                        <span className="text-xl font-bold tracking-tight">QuickSell</span>
                    </Link>
                    <p className="text-[#658683] text-sm leading-relaxed">
                        The neighborhood marketplace designed for trust, safety, and community trading.
                    </p>
                    <div className="flex gap-4">
                        <Link href="#" className="text-white hover:text-primary transition-colors p-3 bg-primary hover:bg-secondary rounded-full">
                            <span className=""><FaFacebookF /></span>
                        </Link>
                        <Link href="#" className="text-white hover:text-primary transition-colors p-3 bg-primary hover:bg-secondary rounded-full">
                            <span className=""><FaXTwitter /></span>
                        </Link>
                        <Link href="#" className="text-white hover:text-primary transition-colors p-3 bg-primary hover:bg-secondary rounded-full">
                            <span className=""><FaLinkedinIn /></span>
                        </Link>
                    </div>
                </div>
                {footerSections.map((section, index) => (
                    <div key={index}>
                        <h4 className="font-bold mb-6">{section.title}</h4>
                        <ul className="space-y-4 text-sm text-[#658683]">
                            {section.links.map((link, linkIndex) => (
                                <li key={linkIndex}>
                                    <Link href={link.href} className="hover:text-primary transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-[#f0f4f4] dark:border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
                <p className="text-sm text-[#658683]">© 2026 QuickSell Marketplace Inc. All rights reserved.</p>
                <div className="flex items-center gap-6">
                    <span className=" text-gray-300"><MdOutlinePayment /></span>
                    <span className=" text-gray-300"><MdOutlineAccountBalance /></span>
                    <span className=" text-gray-300"><FaAddressCard /></span>
                </div>
            </div>
        </footer>
    )
};

export default Footer;