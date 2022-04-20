
import Typical from 'react-typical';

function TypeWriter({ text }) {
    return (
        <strong className="text-xl text-gray-300 py-4 underline underline-offset-8">
            <Typical
                steps={text}
                wrapper="p"
                loop={Infinity}
            />
        </strong>
    )
}

export default TypeWriter