
import Banner from "../assets/banner.jpg";
import TypeWriter from "./TypeWriter";

function HeroBanner({ heroText }) {
    return (
        <div
            className="
                relative
                h-1/3 w-screen
                px-4 pt-44
                flex flex-col items-center justify-end
            "
        >
            <div
                style={{
                    backgroundImage: 'url("' + Banner + '")',
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "top",
                    backgroundColor: "#000000",
                    backgroundAttachment: "fixed",
                    opacity: "0.2",
                }}
                className="absolute h-full w-full"
            ></div>
            <p
                style={{
                    textShadow: "2px 0 5px black"
                }}
                className="text-xl text-gray-300 text-center"
            >
                {heroText}
            </p>
            <br />
            <TypeWriter text={[
                ` drink choices🍹`, 1000,
                ` monks🧘🏽`, 1000,
                ` balance scales⚖️`, 1000
            ]} />
        </div>
    )
}

export default HeroBanner;