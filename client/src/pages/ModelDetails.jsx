import { useContext, useState } from "react";
import { Formik, Form, Field, useFormik } from "formik";

import { ModelsContext } from "../contexts/ModelsContext";
import NumericField from "../components/NumericField";
import RadioGroupInput from "../components/RadioGroupInput";
import { Button } from "@mui/material";
import FileInput from "../components/FileInput";

function ModelDetails() {

    const { currentModel, inputObject } = useContext(ModelsContext);

    const formik = useFormik({
        initialValues: inputObject,
        onSubmit: () => { }
    });

    const [showingTab, setShowingTab] = useState({
        "isSingle": true,
        "isBatch": false
    });

    const switchTab = (tab) => {
        if (tab === "single") {
            setShowingTab(() => ({ "isSingle": true, "isBatch": false }))
        }
        else if (tab === "batch") {
            setShowingTab(() => ({ "isSingle": false, "isBatch": true }))
        }
    }

    return (
        <div className="
            h-screen w-screen overflow-y-scroll
            py-24 px-4
            flex flex-col items-center
        ">
            <p
                style={{ textShadow: "1px 1px 15px black" }}
                className="text-3xl text-center font-semibold text-slate-400 capitalize"
            >{currentModel && currentModel.attributes.name}</p>
            <p className="text-md text-slate-500 py-2 self-start">{currentModel && currentModel.attributes.description}</p>
            <div
                style={{ backgroundColor: 'antiquewhite' }}
                className={`
                    w-full
                    flex flex-col items-center
                `}
            >
                <div className="w-full h-8 flex justify-around bg-slate-900 text-slate-600 font-semibold">
                    <p
                        style={showingTab.isSingle ? { backgroundColor: 'antiquewhite' } : null}
                        className={`
                            relative
                            w-6/12
                            text-center rounded-t
                            ${showingTab.isSingle && `
                                after:content-[''] after:block after:absolute after:bottom-0 after:left-full after:w-2 after:h-2 after:rounded-full after:bg-slate-900
                                before:content-[''] before:block before:absolute before:bottom-0 before:left-full before:w-1.5 before:h-1.5 before:bg-zinc-200
                            `}
                        `}
                        onClick={() => switchTab("single")}
                    >Single</p>
                    <p
                        style={showingTab.isBatch ? { backgroundColor: 'antiquewhite' } : null}
                        className={`
                            relative
                            w-6/12
                            text-center rounded-t
                            ${showingTab.isBatch && `
                                after:content-[''] after:block after:absolute after:bottom-0 after:right-full after:w-2 after:h-2 after:rounded-full after:bg-slate-900
                                before:content-[''] before:block before:absolute before:bottom-0 before:right-full before:w-1.5 before:h-1.5 before:bg-zinc-200
                            `}
                        `}
                        onClick={() => switchTab("batch")}
                    >Batch</p>
                </div>
                {
                    showingTab.isSingle ?
                        <div
                            className="
                                w-full rounded-md 
                                px-2 py-4
                                self-start flex flex-col items-start
                            "
                        >
                            <Formik>
                                <Form className="flex flex-col w-full">
                                    {
                                        currentModel.attributes.metadata.attributes.map(input => {
                                            return (
                                                input.type.toLowerCase() === "continuous" ?
                                                    <Field key={input.name} label={input.question}
                                                        name={input.name}
                                                        value={formik.values[input.name]}
                                                        onChange={formik.handleChange}
                                                        component={NumericField}
                                                    />
                                                    :
                                                    <Field key={input.name} label={input.question}
                                                        name={input.name}
                                                        value={formik.values[input.name]}
                                                        onChange={formik.handleChange}
                                                        options={input.domain.values}
                                                        row
                                                        component={RadioGroupInput}
                                                    />
                                            )
                                        })
                                    }
                                    <Button variant="contained" >compute</Button>
                                </Form>
                            </Formik>
                        </div>
                        :
                        showingTab.isBatch && <FileInput />
                }
            </div>
        </div>
    )
}

export default ModelDetails;