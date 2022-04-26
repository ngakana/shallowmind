import { Button } from '@mui/material';
import { useRef, useState } from 'react';
import UploadedFileCard from './UploadedFileCard';

function FileInput() {

    const fileInput = useRef();

    const [uploadedFile, setUploadedFile] = useState(null);
    const [uploadStatus, setUploadStatus] = useState({
        isUploading: false,
        isUploaded: false,
        progress: 0
    });

    const handleFileUpload = () => {
        setUploadedFile(fileInput.current.files[0]);
        const fileReader = new FileReader();
        fileReader.readAsText(fileInput.current.files[0]);

        // file upload started
        fileReader.onloadstart = () => {
            setUploadStatus({ isUploading: true, progress: 0 });
        }
        // uploading
        fileReader.onprogress = (ev) => {
            let progress = Math.round(100 * ev.loaded / ev.total);
            setUploadStatus(prevState => ({ ...prevState, progress }));
        }
        // successfully done
        fileReader.onload = () => {
            setUploadStatus({ isUploading: false, isUploaded: true, progress: 0 });
        }
        // error
        fileReader.onerror = () => {
            console.log("Could not upload file");
        }
    }

    const removeUploadedFile = () => {
        setUploadStatus({ isUploading: false, isUploaded: false, progress: 0 });
        setUploadedFile(null);
    }

    return (
        <div className='w-full my-4 px-2 flex flex-col items-end'>
            {
                uploadStatus.isUploading || uploadStatus.isUploaded ?
                    <UploadedFileCard status={uploadStatus} file={uploadedFile && uploadedFile} handleRemove={removeUploadedFile} />
                    :
                    <div className='relative flex flex-col w-full h-12 bg-zinc-300 my-4 border-dashed border-2 border-sky-500 rounded-md'>
                        <input
                            name="file"
                            onChange={handleFileUpload}
                            className="absolute top-0 w-full h-full opacity-0"
                            type="file" accept='text/csv'
                            ref={fileInput}
                        />
                        <label htmlFor="file" className='text-md text-center text-slate-900 font-semibold py-2'><strong className='text-slate-600'>Select</strong> or <strong className='text-slate-600'>Drag and Drop</strong> your CSV file</label>
                    </div>
            }
            <Button variant="contained">Process file</Button>
        </div>
    )
}

export default FileInput