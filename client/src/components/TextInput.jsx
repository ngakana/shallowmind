import { TextField } from "@mui/material"
import { getIn } from "formik";

function TextInput({ form, field, ...props }) {

    const errorText = getIn(form.touched, field.name) && getIn(form.errors, field.name)

    return (
        <TextField
            fullWidth
            margin="dense"
            helperText={errorText}
            error={!!errorText}
            variant="filled"
            {...field}
            {...props}
        />
    );
}

export default TextInput;