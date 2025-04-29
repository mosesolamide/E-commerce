import React  from "react"
import SideBar from "./SideBar"
import { Outlet } from "react-router-dom"

export default function AccountLayout(){
    return(
        <div className="py-10 px-6 flex flex-col w-full md:flex-row md:items-start gap-10">
            <SideBar />
            <Outlet />
        </div>
    )
}