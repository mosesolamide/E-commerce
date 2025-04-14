import React from "react"
import Header from "./Header"
import { Outlet } from "react-router-dom"
import Footer from "./Footer"

export default function Layout(){
    return(
        <>
            <Header />
            <main className="px-8 mb-6">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}