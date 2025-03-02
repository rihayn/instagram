import { Outlet } from "react-router-dom";
import SideBar from "./sideBar";

export default function Layout() {
    return (
        <div className="flex px-4 bg-white">
            <SideBar />
            <Outlet />
        </div>

    )
}