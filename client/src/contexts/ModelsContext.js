import { createContext, useState } from "react"
import axios from "axios";

import DrinkChoiceImg from "../assets/drink-choice-model-img.png";
import MonksModelImg from "../assets/monks-model-img.png";
import BalanceScaleImg from "../assets/balance-scale-model-img.png";

export const ModelsContext = createContext();

export const ModelsProvider = ({children}) => {

    const [models, setModels] = useState([]);
    const [currentModel, setCurrentModel] = useState(null);

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

    const changeCurrentModel = (id) => {
        const model = models.filter(model => model.id === id)[0];
        setCurrentModel(() => model);
    }

    return(
        <ModelsContext.Provider value={{models, getModels, currentModel, changeCurrentModel}}>
            {children}
        </ModelsContext.Provider>
    );
}