import React, { memo } from "react"
import Header from "./Header"
import { Outlet } from "react-router-dom"
import Footer from "./Footer"

export default memo(function Layout(){
    return(
        <>
            <Header />
            <main className="px-5 mb-6 flex flex-col items-center justify-center">
                <Outlet />
            </main>
            <Footer />
        </>
    )
})