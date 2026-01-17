"use client"

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { FaRegUser } from 'react-icons/fa';
import Swal from 'sweetalert2';

const LoginPage = () => {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const demoEmail = 'quicksell@gmail.com';
    const demoPassword = 'QuickSell'


    const handleLogin = (e) => {
        e.preventDefault();
        if (email === demoEmail && password === demoPassword) {
            document.cookie = "auth=true; path=/";
            router.push("/items");

            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Login successfully",
                showConfirmButton: false,
                timer: 1500
            });
        }
        else {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Login failed! Provide correct credentials",
                showConfirmButton: false,
                timer: 1500
            });
        }
    }

    const handleDemoLogin = () => {
        setEmail(demoEmail);
        setPassword(demoPassword);

        // document.cookie = "auth=true; path=/";
        // router.push("/items");
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
                    <button onClick={() => handleDemoLogin()} className="flex flex-col items-center justify-center gap-2 p-3 rounded-lg border border-border-dark hover:border-primary/60 hover:bg-primary/10 transition-all group">
                        <div className='text-primary group-hover:scale-110 transition-transform text-2xl'><FaRegUser className='' /></div>
                        <span className="text-primary text-xl font-bold tracking-wider">Demo Login</span>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;