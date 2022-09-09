import React from 'react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
    return (
        <div className="w-full min-h-screen bg-slate-300">
            <div className="w-full h-[6vh]">
                <Navbar />
            </div>
            <div className="w-full min-h-[88vh] flex flex-col justify-center items-center">
                <Outlet />
            </div>
            <div className="w-full h-[6vh]">
                <Footer />
            </div>
        </div >
    )
}

export { MainLayout }