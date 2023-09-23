/*eslint-disable  @typescript-eslint/no-explicit-any*/

import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { ChangeEvent } from 'react';
import { Control, Controller } from 'react-hook-form';

import { VerifyFieldType, VerifyFormType } from '@hooks/useVerify';

interface CodeInputProps {
  control: Control<VerifyFormType, any>;
  fields: VerifyFieldType[];
  fieldIDs: string[];
  allowOnlyOneNumber: (value: string) => string;
  handleFieldChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    value: string,
  ) => void;
}

function CodeInputField({
  control,
  fields,
  fieldIDs,
  allowOnlyOneNumber,
  handleFieldChange,
}: CodeInputProps) {
  return (
    <Stack direction='row' spacing={0.5}>
      {fields.map((num) => (
        <Controller
          key={num}
          name={num}
          control={control}
          render={({ field: { onChange, onBlur, value, name, ref } }) => (
            <TextField
              {...{ name, onBlur, value }}
              inputRef={ref}
              id={fieldIDs[parseInt(name, 10) - 1]}
              autoFocus={name === '1'}
              onChange={(e) => {
                const val = allowOnlyOneNumber(e.target.value);
                onChange(val);
                handleFieldChange(e, val);
              }}
              variant='outlined'
              size='small'
              sx={{ width: 40 }}
            />
          )}
        />
      ))}
    </Stack>
  );
}

export default CodeInputField;
