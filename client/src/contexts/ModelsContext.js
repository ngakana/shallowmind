import { createContext, useState } from "react"
import axios from "axios";

import DrinkChoiceImg from "../assets/drink-choice-model-img.png";
import MonksModelImg from "../assets/monks-model-img.png";
import BalanceScaleImg from "../assets/balance-scale-model-img.png";

export const ModelsContext = createContext();

export const ModelsProvider = ({children}) => {

    const [models, setModels] = useState([]);
    const [currentModel, setCurrentModel] = useState(null);
    const [inputObject, setInputObject] = useState(null);

    const getModels = async () => {
        try {
            const res = await axios.get("/models");
            const temp = res.data.data;
            const data = temp.map((model) => {
                let name = model.attributes.name.toLowerCase();

                if (name.startsWith("drink")) {
                    return { "icon": DrinkChoiceImg, ...model }
                }
                else if (name.startsWith("monks")) {
                    return { "icon": MonksModelImg, ...model }
                }
                else if (name.startsWith("balance")) {
                    return { "icon": BalanceScaleImg, ...model }
                }
                return { "icon": BalanceScaleImg, ...model }
            });
            setModels(() => data);
            return data;
        } catch (error) {
            return error;
        }
    }

    const changeCurrentModel = async (id) => {
        let model;
        if ( !!models ) {
            model = models.filter(model => model.id === id)[0];
            setCurrentModel(() => model);
        } else {
            let data = await getModels();
            console.log(data);
            model = data.filter(model => model.id === id)[0];
            setCurrentModel(() => model);
        }

        const inputs = model.attributes.metadata.attributes;
        let object = {};
        inputs.map(input => {
            let name = input.name;
            if (input.type.toLowerCase() === "continuous") {
                object[name] = '';
            }
            else if (input.type.toLowerCase() === "nominal") {
                object[name] = input.domain.values[0].toLowerCase();            
            }
        })
        setInputObject(() => object);
    }

    return(
        <ModelsContext.Provider value={{models, getModels, currentModel, changeCurrentModel, inputObject}}>
            {children}
        </ModelsContext.Provider>
    );
}