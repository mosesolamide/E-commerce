import React  from "react"
import SideBar from "./SideBar"
import { Outlet } from "react-router-dom"

export default function AccountLayout(){
    return(
        <div className="py-10 flex flex-col md:flex-row items-center gap-10">
            <SideBar />
            <Outlet />
        </div>
    )
}