import { Link } from "react-router-dom";

import NavItem from "./NavItem";
import { AvatarIcon, DataIcon, Logo } from "./SVGIcons";

function Navbar() {
    return (
        <div
            className="
            absolute top-0 left-0 z-10
            h-16 w-full text-white text-bold
            flex items-center justify-between pl-4 pr-2 py-4"
            //border-b-2 border-slate-500
        >
            <Link to="/">
                <div className="flex items-center">
                    <Logo />
                    <p className="text-md font-bold p-1">ShallowMind</p>
                </div>
            </Link>
            <ul className="flex items-center">
                <NavItem path="/models" Icon={DataIcon} subtitle="models" />
                <NavItem path="/login" Icon={AvatarIcon} subtitle="login" />
            </ul>
        </div>
    )
}

export default Navbar;