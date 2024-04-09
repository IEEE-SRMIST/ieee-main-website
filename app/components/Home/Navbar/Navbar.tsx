import React from 'react'

const Navbar = () => {
    return (
        <header className="bg-blue-100 max-w-screen-2xl mx-auto px-4 py-6 md:px-6 md:py-8 xl:px-8 xl:py-10">
            <div className="mx-auto flex items-center justify-between">
                <a href="/" className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl" aria-label="logo">
                    <img src="/assets/Logo/IEEE Logo/IEEE SRM SB.png" alt="IEEE SRM SB logo" className="w-24 xl:w-32 h-auto" />
                </a>
                <a href="/" className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl" aria-label="logo">
                    <img src="/assets/Logo/IEEE Logo/IEEE SRM SB.png" alt="IEEE SRM SB logo" className="w-24 xl:w-32 h-auto" />
                </a>
            </div>
        </header>
    )
}

export default Navbar