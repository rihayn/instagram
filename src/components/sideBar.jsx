import { Link } from "react-router-dom"
import Logo from "../assets/instagram.svg"
import HomeI from "../assets/iconHome.svg"
import SearchI from "../assets/iconSesrch.svg"
import CreateI from "../assets/iconCreate.svg"
import ProfileI from "../assets/iconProfilePic.svg"
import InstaIcon from "../assets/iconInstagram.svg"
import { useState } from "react"
import SearchBox from "./search"

export default function SideBar() {
    const [isTextHidden, setIsTextHidden] = useState(false);
    const [logo, setLogo] = useState(Logo);
    const [menuWidth, setMenuWidth] = useState();
    const [showSearch, setShowSearch] = useState(false);

    const handleSearchClick = () => {
        setIsTextHidden(!isTextHidden);
        setLogo(isTextHidden ? Logo : InstaIcon);
        setMenuWidth(isTextHidden ? "w-36" : "w-18");
        setShowSearch(!isTextHidden)
    };

    const handleShowClick = () => {
        setIsTextHidden(!isTextHidden);
        setLogo(isTextHidden ? Logo : InstaIcon);
        setMenuWidth(isTextHidden ? "w-36" : "w-18");
    };

    return (
        <div className="flex fixed">
            <div className={`bg-white h-screen border-r-2 border-[#DBDBDB] py-4 ${menuWidth} flex flex-col gap-4`}>
                <img src={logo} alt="Instagram" className="h-[29px]" />
                <nav>
                    <ul className="menu bg-white rounded-box flex flex-col gap-4">
                        <li className="bg-white text-black">
                            <Link to="/feed/home">
                                <img src={HomeI} alt="Home" />
                                {!isTextHidden && "Home"}
                            </Link>
                        </li>
                        <li className="bg-white text-black" onClick={handleSearchClick}>
                            <button >
                                <img src={SearchI} alt="Search" />
                                {!isTextHidden && "Search"}
                            </button>
                        </li>
                        <li className="bg-white text-black">
                            <button>
                                <img src={CreateI} alt="create" />
                                {!isTextHidden && "Create"}
                            </button>
                        </li>
                        <li className="bg-white text-black">
                            <Link to="/feed/profile">
                                <img src={ProfileI} alt="profile" />
                                {!isTextHidden && "Profile"}
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            {showSearch ? <SearchBox /> : null}

        </div>
    )
}