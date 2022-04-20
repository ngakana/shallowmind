import HeroBanner from "../components/HeroBanner";

function Home() {
    return (
        <div className="
            h-screen max-w-screen overflow-y-scroll overflow-x-hidden
            flex flex-col items-center justify-start
        ">
            <HeroBanner
                heroText="AI computation models for human expertise! Topics:"
            />
            <p className="text-center text-slate-500 font-bold">Home</p>
        </div>
    )
}

export default Home;