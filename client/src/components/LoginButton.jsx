import { Link } from "react-router-dom";

function LoginButton({ url, icon: Icon, ctaText, color, scale }) {
    return (
        <Link to={url} className={`my-3 px-2 py-1 border-2 border-${color}-500 rounded-xl`}>
            <div className="flex items-center">
                {Icon && <Icon scale={scale} />}
                <p className={`px-4 font-semibold text-${color}-500`}>{ctaText}</p>
            </div>
        </Link>
    )
}

export default LoginButton;