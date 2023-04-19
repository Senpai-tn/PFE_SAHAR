import {
  Box,
  Button,
  Chip,
  Divider,
  Link,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import React from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { Controller, useForm } from 'react-hook-form'
import { validation } from '../../validation'
import { useDispatch } from 'react-redux'
import actions from '../../redux/actions'
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { control, handleSubmit, setError } = useForm({
    defaultValues: { email: '', password: '' },
    resolver: yupResolver(validation.login()),
  })
  const loginAction = (data) => {
    const { email, password } = data
    console.log(data)
    //axios
    dispatch({ type: actions.login })
    navigate('/')
  }
  return (
    <Stack justifyContent={'center'} alignItems={'center'} height={'100vh'}>
      <Box width={'367px'} height={'568px'} bgcolor={'#edf0f4'}>
        <Typography fontWeight={900} pl={'15px'} pt={'17px'}>
          Login
        </Typography>
        <form onSubmit={handleSubmit(loginAction)}>
          <Stack
            alignItems={'center'}
            width={'100%'}
            height={'300px'}
            justifyContent="space-around"
          >
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
              name="password"
              control={control}
              render={({
                field: { value, onChange },
                fieldState: { error },
              }) => {
                return (
                  <TextField
                    type="password"
                    label={'Password'}
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    helperText={error && error.message}
                  />
                )
              }}
            />
            <Button variant="contained" sx={{ width: '221px' }} type="submit">
              LOGIN
            </Button>
          </Stack>
          <Typography textAlign={'center'} m={'10px'}>
            Forget password!
          </Typography>
          <Divider
            variant="middle"
            sx={{
              borderBottomWidth: 3,
            }}
          >
            <Chip label="OR" />
          </Divider>
        </form>
        <br />
        <img
          src="/assets/images/google.png"
          height={'50px'}
          width={'100%'}
          style={{
            objectFit: 'contain',
            position: 'relative',
          }}
        />
        <Typography p={'30px'}>
          Still don't have an account ?{' '}
          <Link
            href="/register"
            onClick={() => {}}
            style={{ color: '#1976d2', fontWeight: 700 }}
          >
            Register now
          </Link>
        </Typography>
      </Box>
    </Stack>
  )
}
export default Login
