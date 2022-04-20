
import { AvatarIcon, DataIcon, Logo } from "./SVGIcons";

function Navbar() {
    return (
        <div className="
            h-14 w-full bg-slate-700 text-white text-bold
            flex items-center justify-between pl-2 pr-4 py-1
            border-b-2 border-slate-500
            "
        >
            <div className="flex items-center">
                <Logo />
                <p className="text-xl font-bold p-1">ShallowMind</p>
            </div>
            <ul className="flex items-center">
                <li className="flex flex-col items-center py-4 px-4">
                    <DataIcon />
                    <p className="text-xs">Datasets</p>
                </li>
                <li className="flex flex-col items-center px-4">
                    <AvatarIcon />
                    <p className="text-xs">Login</p>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;