"use client"

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { FaRegUser } from 'react-icons/fa';

const LoginPage = () => {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



    const handleLogin = (e) => {
        e.preventDefault();
        if (email === 'quicksell@gmail.com' && password === 'QuickSell') {
            document.cookie = "auth=true; path=/";
            router.push("/items")
        }
        else {

        }
    }

    const handleDemoLogin = (e) => {

    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleLogin} className="card-body text-primary">
                    <h1 className='text-center text-4xl font-bold text-primary mb-5'>Welcome Back</h1>
                    <fieldset className="fieldset">
                        <label className="label text-primary">Email</label>
                        <input type="email" required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="input w-full"
                            placeholder="Email" />
                        <label className="label text-primary">Password</label>
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="input w-full"
                            placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-primary mt-4">Login</button>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;