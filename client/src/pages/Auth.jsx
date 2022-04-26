import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { Formik, Form, Field, useFormik } from "formik";
import { useState } from "react";

import LoginButton from "../components/LoginButton";
import { GitHubIcon, GoogleIcon, NinjaIcon } from "../components/SVGIcons";
import TextInput from "../components/TextInput";

function Auth() {

    const formik = useFormik({
        initialValues: {
            "username": '',
            "password": ''
        }
    });

    const [authFormType, setAuthFormType] = useState({
        "isLogin": true,
        "isRegister": false
    });

    const toggleFormType = () => {
        setAuthFormType(prevState => ({
            "isLogin": !prevState.isLogin,
            "isRegister": !prevState.isRegister
        }))
    }

    return (
        <div className="
            h-screen w-screen overflow-y-scroll overflow-x-hidden
            pt-24 pb-4 px-4
            flex flex-col items-center gap-4
        ">
            <p
                style={{ textShadow: "1px 1px 15px black" }}
                className="text-3xl text-center font-semibold text-slate-400 capitalize"
            >{authFormType.isLogin && "Login" || authFormType.isRegister && "Register"}</p>

            <Formik>
                <Form className="w-full">
                    <Box
                        sx={{
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'start',
                            backgroundColor: 'antiquewhite',
                            padding: '8px',
                            borderRadius: '5px'
                        }}
                    >
                        <LoginButton icon={GoogleIcon} scale={0.7} ctaText="Login with Google" url='/models' color="red" />
                        <p>OR</p>
                        <LoginButton icon={GitHubIcon} scale={0.7} ctaText="Login with GitHub" url='/models' color="violet" />
                        <p>OR</p>
                        <LoginButton ctaText="Login with a dummy account" url='/models' color="sky" />
                        <p>OR fill form below</p>
                        <Field
                            label="Username"
                            name="username"
                            value={formik.values.username}
                            onChange={formik.handleChange}
                            component={TextInput}
                        />
                        <Field
                            label="Password"
                            name="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            component={TextInput}
                            type="password"
                        />
                        {authFormType.isRegister &&
                            <Field
                                label="Verify password"
                                name="password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                component={TextInput}
                                type="password"
                            />
                        }
                        {authFormType.isLogin &&
                            <p className="self-end p-2 text-sky-500 text-sm underline cursor-pointer">Forgot Password?</p>
                        }
                        <div className="w-full flex justify-between items-end my-2">
                            <Button variant="contained">{authFormType.isLogin && "Login" || authFormType.isRegister && "Register"}</Button>
                            <p className="px-2 text-sky-500 text-sm">{authFormType.isLogin && "Don't have" || authFormType.isRegister && "Have"} an account?
                                <strong onClick={toggleFormType} className="cursor-pointer underline pl-1">{authFormType.isLogin && "Register" || authFormType.isRegister && "Login"}</strong>
                            </p>
                        </div>
                    </Box>
                </Form>
            </Formik>
        </div>
    )
}

export default Auth;