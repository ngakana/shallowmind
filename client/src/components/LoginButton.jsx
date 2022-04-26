import { Link } from "react-router-dom";

function LoginButton({ url, icon: Icon, ctaText, bgColor, scale }) {
    return (
        <Link to={url} className={`my-2 px-2 py-1 ${bgColor} rounded-md`}>
            <div className="flex items-center">
                {Icon && <Icon scale={scale} />}
                <p style={{ color: 'antiquewhite' }} className={`px-2 font-semibold`}>{ctaText}</p>
            </div>
        </Link>
    )
}

export default LoginButton;