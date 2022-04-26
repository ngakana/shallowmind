import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";

function RadioGroupInput({ field, options, label, ...props }) {
  return (
    <div className="w-full border-2 border-gray-300 pl-2 pt-2 mb-4 rounded">
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">{label}</FormLabel>
        <RadioGroup
          defaultValue={options[0]}
          {...field}
          {...props}
        >
          {
            options.map(op => <FormControlLabel key={op} value={op.toLowerCase()} control={<Radio />} label={op} />)
          }
        </RadioGroup>
      </FormControl>
    </div>
  )
}

export default RadioGroupInput