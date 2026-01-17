"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdSell } from "react-icons/md";

const Navbar = () => {
  const [isAuth, setIsAuth] = useState(false);

  const checkAuth = () => {
    setIsAuth(document.cookie.includes("auth=true"));
  };

  useEffect(() => {
    checkAuth();

    // listen for login/logout events
    window.addEventListener("auth-change", checkAuth);

    return () => {
      window.removeEventListener("auth-change", checkAuth);
    };
  }, []);

  const logout = () => {
    document.cookie = "auth=; Max-Age=0; path=/";
    window.dispatchEvent(new Event("auth-change"));
    window.location.href = "/login";
  };

  return (
    <header className="shadow-sm sticky top-0 z-50">
      <div className="navbar bg-base-100 w-11/12 max-w-7xl mx-auto">

        {/* LEFT */}
        <div className="navbar-start">
          <Link href="/" className="btn btn-ghost px-0 flex items-center gap-2">
            <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
              <MdSell />
            </div>
            <span className="text-xl font-bold">QuickSell</span>
          </Link>
        </div>

        {/* CENTER */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/items">Items</Link></li>
            {isAuth && <li><Link href="/items/add">Add Item</Link></li>}
          </ul>
        </div>

        {/* RIGHT — SINGLE BUTTON */}
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
