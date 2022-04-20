import { Link } from 'react-router-dom';

function NavItem({ path, Icon, subtitle }) {
    return (
        <Link to={path} className="mx-2">
            <li className="
                        flex flex-col items-center 
                        py-1 px-3
                    ">
                <Icon />
                <p className="text-xs">{subtitle}</p>
            </li>
        </Link>
    )
}

export default NavItem;