import { useContext } from "react";
import { useQuery } from "react-query";

import ModelCard from "../components/ModelCard";

import { ModelsContext } from "../contexts/ModelsContext";

function Models() {

    const { getModels, changeCurrentModel } = useContext(ModelsContext);

    const { data, status } = useQuery("models", getModels, { staleTime: Infinity });

    return (
        <div className="
            h-screen w-screen
            pt-24
            flex flex-col items-center 
        ">
            <p
                style={{ textShadow: "1px 1px 15px black" }}
                className="text-3xl text-center font-semibold text-slate-500"
            >Models</p>
            <ul className="py-4 grid grid-cols-2 gap-5">
                {
                    status === "loading" ?
                        <p className="text-xl text-white text-center">Loading ...</p>
                        :
                        status === "error" ?
                            <p className="text-xl text-white" >Error!!!</p>
                            :
                            data &&
                            data.map((model, index) => (
                                <ModelCard key={index}
                                    id={index}
                                    name={model.attributes.name}
                                    icon={model.icon}
                                    onClick={() => changeCurrentModel(model.id)}
                                />
                            ))
                }
            </ul>
        </div>
    )
}

export default Models;