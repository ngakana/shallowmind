import NumericInput from 'material-ui-numeric-input';
import { getIn } from "formik";

function NumericField({ field, form, ...props }) {
    //get field errors on blur
    const errorText = getIn(form.touched, field.name) && getIn(form.errors, field.name);
    return (
        <div className='mb-4'>
            <NumericInput
                fullWidth
                precision={0}
                decimalChar=','
                thousandChar='.'
                variant='outlined'
                helperText={errorText}
                error={!!errorText}
                {...field}
                {...props}
            />
        </div>
    )
}

export default NumericField;