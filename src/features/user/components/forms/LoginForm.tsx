/* eslint-disable @typescript-eslint/no-explicit-any */

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import {
  Control,
  Controller,
  FieldErrors,
  SubmitHandler,
  UseFormHandleSubmit,
} from 'react-hook-form';

import FormField from '@components/FormField';
import { NextLinkComposed } from '@components/Link';

interface LoginFormProps {
  control: Control<LoginFormType>;
  errors: FieldErrors<LoginFormType>;
  handleSubmit: UseFormHandleSubmit<LoginFormType, any>;
  onSubmitHandler: SubmitHandler<LoginFormType>;
}

function LoginForm({
  control,
  errors,
  handleSubmit,
  onSubmitHandler,
}: LoginFormProps) {
  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <Stack spacing={2}>
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
      </Stack>

      <Box display='flex' alignItems='center' my={1}>
        <Controller
          name='remember'
          control={control}
          render={({ field: { onChange, onBlur, value, name, ref } }) => (
            <FormControlLabel
              label='Remember me'
              control={
                <Checkbox
                  checked={!!value}
                  {...{
                    onChange,
                    onBlur,
                    name,
                    ref,
                  }}
                />
              }
              sx={{ flexGrow: 1 }}
            />
          )}
        />

        <Typography
          color='primary'
          textTransform='none'
          component={NextLinkComposed}
          to={{
            pathname: '/recover',
          }}
        >
          Forgot Password?
        </Typography>
      </Box>

      <Button
        variant='contained'
        color='primary'
        fullWidth
        type='submit'
        sx={{ mb: 2 }}
      >
        Sign In
      </Button>
    </form>
  );
}

export default LoginForm;
