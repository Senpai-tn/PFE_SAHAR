import {
  Box,
  Button,
  Checkbox,
  Chip,
  Divider,
  IconButton,
  InputAdornment,
  Link,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import React, { useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { Controller, useForm } from 'react-hook-form'
import { validation } from '../../validation'
import MuiPhoneNumber from 'mui-phone-number'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
const Register = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [checked, setChecked] = useState(false)

  const { control, handleSubmit, setError } = useForm({
    defaultValues: {
      firstname: '',
      lastname: '',
      phone: null,
      email: '',
      password: '',
      confirmPassword: '',
    },
    resolver: yupResolver(validation.register()),
  })
  const RegisterAction = (data) => {
    const { firstname, lastname, phone, email, password, confirmPassword } =
      data
    if (password !== confirmPassword) {
      setError('password', { message: "Password doesn't match" })
    } else {
      console.log(data)
      //axios
    }
  }
  return (
    <Stack justifyContent={'center'} alignItems={'center'} height={'100vh'}>
      <Box
        width={'367px'}
        height={'750px'}
        bgcolor={'#edf0f4'}
        position={'relative'}
      >
        <Typography fontWeight={900} pl={'15px'} pt={'17px'}>
          Register
        </Typography>
        <form onSubmit={handleSubmit(RegisterAction)}>
          <Stack
            alignItems={'center'}
            width={'100%'}
            height={'550px'}
            justifyContent="space-around"
          >
            <Controller
              name="firstname"
              control={control}
              render={({
                field: { value, onChange },
                fieldState: { error },
              }) => {
                return (
                  <TextField
                    label={'First Name'}
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    helperText={error && error.message}
                  />
                )
              }}
            />
            <Controller
              name="lastname"
              control={control}
              render={({
                field: { value, onChange },
                fieldState: { error },
              }) => {
                return (
                  <TextField
                    label={'Last Name'}
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    helperText={error && error.message}
                  />
                )
              }}
            />
            <Controller
              name="email"
              control={control}
              render={({
                field: { value, onChange },
                fieldState: { error },
              }) => {
                return (
                  <TextField
                    type="email"
                    label={'Email'}
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    helperText={error && error.message}
                  />
                )
              }}
            />
            <Controller
              name="phone"
              control={control}
              render={({
                field: { value, onChange },
                fieldState: { error },
              }) => {
                return (
                  <MuiPhoneNumber
                    value={value}
                    onChange={onChange}
                    defaultCountry="tn"
                    error={!!error}
                    helperText={error && error.message}
                  />
                )
              }}
            />
            <Controller
              name="password"
              control={control}
              render={({
                field: { value, onChange },
                fieldState: { error },
              }) => {
                return (
                  <div>
                    <TextField
                      sx={{ width: '190px' }}
                      type={showPassword ? 'text' : 'password'}
                      label="Password"
                      value={value}
                      onChange={onChange}
                      error={!!error}
                      helperText={error && error.message}
                    />
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => {
                        setShowPassword(!showPassword)
                      }}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </div>
                )
              }}
            />
            <Controller
              name="confirmPassword"
              control={control}
              render={({
                field: { value, onChange },
                fieldState: { error },
              }) => {
                return (
                  <div>
                    <TextField
                      sx={{ width: '190px' }}
                      type={showPassword ? 'text' : 'password'}
                      label="Confirm Password"
                      value={value}
                      onChange={onChange}
                      error={!!error}
                      helperText={error && error.message}
                    />
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => {
                        setShowPassword(!showPassword)
                      }}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </div>
                )
              }}
            />

            <div
              style={{
                display: 'flex',
                flexWrap: 'nowrap',
                alignContent: 'center',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Checkbox
                checked={checked}
                onChange={(event) => {
                  setChecked(event.target.checked)
                }}
                inputProps={{ 'aria-label': 'controlled' }}
              />
              <Typography>I agree to ODS Terms and Conditions</Typography>
            </div>

            <Button
              disabled={checked === false}
              variant="contained"
              sx={{ width: '221px' }}
              type="submit"
            >
              REGISTER NOW
            </Button>
          </Stack>
          <Divider
            variant="middle"
            sx={{
              borderBottomWidth: 3,
            }}
          >
            <Chip label="OR" />
          </Divider>
        </form>
        <img
          src="/assets/images/google.png"
          height={'50px'}
          width={'100%'}
          style={{
            marginTop: '15px',
            objectFit: 'contain',
            position: 'relative',
          }}
        />
        <Typography
          width={'100%'}
          pb={'20px'}
          textAlign={'center'}
          position={'absolute'}
          bottom={0}
        >
          Already a user ?{' '}
          <Link
            href="/login"
            onClick={() => {}}
            style={{ color: '#1976d2', fontWeight: 700 }}
          >
            LOGIN
          </Link>
        </Typography>
      </Box>
    </Stack>
  )
}
export default Register
