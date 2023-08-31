import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import {
  Controller,
  FieldErrors,
  FieldValues,
  UseControllerProps,
} from 'react-hook-form';

interface PropType<T extends FieldValues> extends UseControllerProps<T> {
  label: string;
  type: string;
  errors: FieldErrors<T> & {
    [key: string]: {
      message?: string;
    };
  };
}

function FormField<T extends FieldValues>(props: PropType<T>) {
  const { name: fieldName, control, label, type, errors } = props;

  return (
    <Controller
      name={fieldName}
      control={control}
      render={({ field: { onChange, onBlur, value, name, ref } }) => (
        <FormControl fullWidth>
          <InputLabel htmlFor={`textfield_${name}`}>{label}</InputLabel>
          <OutlinedInput
            id={`textfield_${name}`}
            fullWidth
            required
            {...{
              type,
              label,
              onChange,
              onBlur,
              value,
              name,
            }}
            inputRef={ref}
          />
          <FormHelperText error={!!errors[name]}>
            {errors[name] ? errors[name]?.message : ''}
          </FormHelperText>
        </FormControl>
      )}
    />
  );
}

export default FormField;
