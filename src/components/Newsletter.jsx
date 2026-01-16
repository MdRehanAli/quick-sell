import React from 'react';

const Newsletter = () => {
    return (
        <section className="max-w-7xl mx-auto px-6 py-24">
            <div className="bg-[#121717] text-white rounded-[2.5rem] p-12 lg:p-20 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full"></div>
                <div className="relative z-10 max-w-2xl mx-auto">
                    <h2 className="text-4xl lg:text-5xl font-black mb-6">Ready to start clearing space?</h2>
                    <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                        Get the best deals in your inbox every week and be the first to know about items in your neighborhood.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                        <input
                            className="flex-1 rounded-xl bg-white/10 border-white/20 focus:border-primary focus:ring-primary text-white py-4 px-6"
                            placeholder="Enter your email"
                            type="email"
                        />
                        <button className="bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-xl transition-all">
                            Join QuickSell
                        </button>
                    </div>
                    <p className="mt-6 text-sm text-gray-500">Join 50k+ active members. No spam, just deals.</p>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;