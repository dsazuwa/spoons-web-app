/* eslint-disable @typescript-eslint/no-explicit-any */

import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import {
  Control,
  Controller,
  FieldErrors,
  SubmitHandler,
  UseFormHandleSubmit,
} from 'react-hook-form';

import FormField from '@components/FormField';

interface RegisterFormProps {
  control: Control<RegisterFormType>;
  errors: FieldErrors<RegisterFormType>;
  handleSubmit: UseFormHandleSubmit<RegisterFormType, any>;
  onSubmitHandler: SubmitHandler<RegisterFormType>;
}

function RegisterForm({
  control,
  errors,
  handleSubmit,
  onSubmitHandler,
}: RegisterFormProps) {
  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <Stack spacing={2} marginBottom={2}>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={{ xs: 2, md: 1 }}
          alignItems='center'
          justifyItems='center'
        >
          <FormField
            name='firstName'
            label='First Name'
            type='text'
            {...{ control, errors }}
          />
          <FormField
            name='lastName'
            label='Last Name'
            type='text'
            {...{ control, errors }}
          />
        </Stack>

        <FormField
          name='email'
          label='Email Address'
          type='text'
          {...{ control, errors }}
        />
        <FormField
          name='password'
          label='Password'
          type='password'
          {...{ control, errors }}
        />
        <FormField
          name='confirm'
          label='Confirm Password'
          type='password'
          {...{ control, errors }}
        />

        <Controller
          name='agreeToTerms'
          control={control}
          render={({ field: { onChange, value, name, ref } }) => (
            <FormControl fullWidth>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={!!value}
                    {...{ onChange, name, ref }}
                    sx={{ py: 0 }}
                  />
                }
                label={
                  <Typography>
                    {'I agree to the '}
                    <Link
                      href='/register'
                      style={{
                        color: 'primary',
                        textDecoration: 'inherit',
                      }}
                    >
                      Terms & Conditions
                    </Link>
                    {' of spoons'}
                  </Typography>
                }
              />
              <FormHelperText error={!!errors[name]} sx={{ pl: 2 }}>
                {errors[name] ? errors[name]?.message : ''}
              </FormHelperText>
            </FormControl>
          )}
        />

        <Button variant='contained' color='primary' fullWidth type='submit'>
          Sign Up
        </Button>
      </Stack>
    </form>
  );
}

export default RegisterForm;
