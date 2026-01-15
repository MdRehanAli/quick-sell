import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <header>
            <nav>
                <Link href="/">Home</Link>
                <Link href="/items">Items</Link>
                <Link href="/login">Login</Link>
            </nav>
        </header>
    );
};

export default Header;