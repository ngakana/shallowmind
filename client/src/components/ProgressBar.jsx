
function ProgressBar({ status }) {
    return (
        status.isUploading &&
        <div className="relative w-full h-3 my-6 bg-transparent border-2 border-slate-500 rounded">
            <div style={{ width: `${status.progress}%` }} className="absolute top-0 left-0 h-2 bg-sky-400"></div>
        </div>
    )
}

export default ProgressBar