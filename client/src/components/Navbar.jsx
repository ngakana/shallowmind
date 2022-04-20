import { Link } from "react-router-dom";
import NavItem from "./NavItem";

import { AvatarIcon, DataIcon, Logo } from "./SVGIcons";

function Navbar() {
    return (
        <div className="
            h-14 w-full text-white text-bold
            flex items-center justify-between pl-2 pr-4 py-1
            border-b-2 border-slate-500
            "
        >
            <Link to="/">
                <div className="flex items-center">
                    <Logo />
                    <p className="text-xl font-bold p-1">ShallowMind</p>
                </div>
            </Link>
            <ul className="flex items-center">
                <NavItem path="/dashboard" Icon={DataIcon} subtitle="dashboard" />
                <NavItem path="/login" Icon={AvatarIcon} subtitle="login" />
            </ul>
        </div>
    )
}

export default Navbar;