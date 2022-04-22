import { Link } from "react-router-dom"

function ModelCard({ id, name, icon, onClick }) {
    return (
        <Link to={`/models/${id}`}
            onClick={onClick}
            style={{
                boxShadow: "0 8px 10px black"
            }}
            className='
                w-38
                py-5 px-2
                border-2 border-slate-600 rounded-md
                drop-shadow-white drop-shadow-2xl
                flex flex-col items-center justify-between
            '
        >
            <img src={icon} alt="" />
            <p className='text-sm font-semibold text-center text-slate-300 capitaLinkze pt-2'>{name}</p>
        </Link>
    )
}

export default ModelCard