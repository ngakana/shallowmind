import ProgressBar from "./ProgressBar";
import { DeleteIcon } from "./SVGIcons";

function UploadedFileCard({ status, file, handleRemove }) {
    let filesize = file.size;
    if (filesize >= 1000000) {
        filesize = `${Math.round(filesize / 1048576)}MB`
    } else {
        let fsize = Math.fround(filesize / 1024)
        filesize = `${fsize.toFixed(2)}KB`
    }
    return (
        status.isUploading ?
            <ProgressBar status={status} />
            :
            status.isUploaded &&
            <div className="w-full flex items-center justify-between py-3">
                <p className="text-slate-500">{`📄${file.name} [${filesize}]`}</p>
                <DeleteIcon handleClick={handleRemove} />
            </div>
    )
}

export default UploadedFileCard