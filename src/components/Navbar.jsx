"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdSell } from "react-icons/md";

const Navbar = () => {
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        const checkAuth = () => {
            const hasAuth = document.cookie.includes("auth=true");
            setIsAuth(prev => (prev !== hasAuth ? hasAuth : prev));
        };

        checkAuth();
        window.addEventListener("auth-change", checkAuth);
        return () => window.removeEventListener("auth-change", checkAuth);
    }, []);

    const logout = () => {
        document.cookie = "auth=; Max-Age=0; path=/";
        window.dispatchEvent(new Event("auth-change"));
        window.location.href = "/login";
    };

    // ✅ NAV LINKS (REUSED FOR MOBILE & DESKTOP)
    const navLinks = (
        <>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/items">Items</Link></li>
            {isAuth && <li><Link href="/dashboard/add-items">Add Item</Link></li>}
        </>
    );

    return (
        <header className="shadow-sm sticky top-0 z-50 w-full bg-base-100">
            <div className="navbar w-11/12 max-w-7xl mx-auto">

                {/* START (LOGO + MOBILE MENU) */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>

                        {/* ✅ MOBILE DROPDOWN MENU */}
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
                        >
                            {navLinks}
                        </ul>
                    </div>

                    <Link href="/" className="btn btn-ghost px-0 flex items-center gap-2">
                        <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
                            <MdSell />
                        </div>
                        <span className="text-xl font-bold tracking-tight">QuickSell</span>
                    </Link>
                </div>

                {/* CENTER (DESKTOP MENU) */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>

                {/* END (LOGIN / LOGOUT BUTTON) */}
                <div className="navbar-end">
                    {!isAuth ? (
                        <Link href="/login" className="btn btn-primary">
                            Login
                        </Link>
                    ) : (
                        <button onClick={logout} className="btn btn-error">
                            Logout
                        </button>
                    )}
                </div>

            </div>
        </header>
    );
};

export default Navbar;
