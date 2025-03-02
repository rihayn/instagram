import { Link } from "react-router-dom"
import Logo from "../assets/instagram.svg"
import HomeI from "../assets/iconHome.svg"
import SearchI from "../assets/iconSesrch.svg"
import CreateI from "../assets/iconCreate.svg"
import ProfileI from "../assets/iconProfilePic.svg"

export default function SideBar() {
    return (
        <div className="bg-white h-screen border-r-2 border-[#DBDBDB] p-4">
            <img src={Logo} alt="Instagram" className="w-[100px]" />
            <nav>
                <ul className="menu bg-white rounded-box w-56">
                    <li className="bg-white text-black">
                        <Link to="/feed/home">
                            <img src={HomeI} alt="Home" />
                            Home
                        </Link>
                    </li>
                    <li className="bg-white text-black">
                        <Link to="/">
                            <img src={SearchI} alt="Search" />
                            Search
                        </Link>
                    </li>
                    <li className="bg-white text-black">
                        <Link to="/">
                            <img src={CreateI} alt="create" />
                            Create
                        </Link>
                    </li>
                    <li className="bg-white text-black">
                        <Link to="/feed/profile">
                            <img src={ProfileI} alt="profile" />
                            Profile
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}