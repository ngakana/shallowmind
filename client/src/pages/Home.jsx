import { Link } from "react-router-dom";

import HeroBanner from "../components/HeroBanner";

function Home() {

    return (
        <div
            className="
            h-screen max-w-screen overflow-y-scroll overflow-x-hidden
            px-4
            flex flex-col items-center justify-start
        ">
            <HeroBanner
                heroText="AI computation models for human expertise! Topics:"
            />
            <p className="self-start text-xl text-slate-400 font-semibold pt-8">How we help businesses?</p>
            <p className="text-justify text-slate-500 py-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur alias corrupti in dignissimos excepturi dolore
                id velit magni hic eum quaerat blanditiis saepe asperiores
                distinctio cupiditate.
            </p>
            <Link
                to="/models"
                className="self-end bg-blue-400 px-2 py-1 text-sm text-white rounded-full my-2"
            >
                <p>See available models</p>
            </Link>

            <p className="self-start text-xl text-slate-400 font-semibold pt-8">How We Help Businesses</p>
            <p className="text-justify text-slate-500 py-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur alias corrupti in dignissimos excepturi dolore
                id velit magni hic eum quaerat blanditiis saepe asperiores
                distinctio cupiditate.
            </p>

            <p className="self-start text-xl text-slate-400 font-semibold pt-8">About ShallowMind</p>
            <p className="text-justify text-slate-500 py-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur alias corrupti in dignissimos excepturi dolore
                id velit magni hic eum quaerat blanditiis saepe asperiores
                distinctio cupiditate.
            </p>

        </div>
    )
}

export default Home;