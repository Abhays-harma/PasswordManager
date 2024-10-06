import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-green-500 lg:w-full'>
            <div className='font-bold mx-auto tracking-widest px-4 flex flex-col items-center h-auto py-4 lg:flex-row lg:justify-between lg:items-center lg:w-[1024px] '>
                <div className='tracking-wide text-2xl text-white mb-4'>
                    &lt;Pass<span className='text-red-600'>OP/&gt;</span>
                </div>

                <div className='flex justify-center gap-4'>
                    <a className='hover:text-slate-600' href="/" aria-label="Home">Home</a>
                    <a className='hover:text-slate-600' href="/about" aria-label="About">About</a>
                    <a className='hover:text-slate-600' href="/contact" aria-label="Contact">Contact</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar