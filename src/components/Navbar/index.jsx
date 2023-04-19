import React from 'react'
import { Box, Button, Divider, Link, Stack, Typography } from '@mui/material'
const Navbar = () => {
  return (
    <Box width={'100%'} height={'68px'} position={'relative'} id="navbar">
      <Stack
        direction={'row'}
        height={'100%'}
        width={'100%'}
        px={'33px'}
        py={'13px'}
        justifyContent={'space-between'}
      >
        <img
          alt="logo"
          src={'/assets/images/logo.png'}
          height={'100%'}
          width={'60px'}
        />
        <Stack
          direction={'row'}
          height={'100%'}
          width={'50%'}
          alignItems={'center'}
          justifyContent={'space-around'}
        >
          <Typography
            sx={{
              color: 'black',
              width: '35px',
              ':hover': {
                color: '#0288d1',
                cursor: 'pointer',
                fontWeight: 900,
              },
            }}
          >
            Home
          </Typography>
          <Typography
            sx={{
              color: 'black',
              width: '35px',
              ':hover': {
                color: '#0288d1',
                cursor: 'pointer',
                fontWeight: 900,
              },
            }}
          >
            Service
          </Typography>
          <Typography
            sx={{
              color: 'black',
              width: '35px',
              ':hover': {
                color: '#0288d1',
                cursor: 'pointer',
                fontWeight: 900,
              },
            }}
          >
            Providers
          </Typography>
          <Typography
            sx={{
              color: 'black',

              width: '35px',
              ':hover': {
                color: '#0288d1',
                cursor: 'pointer',
                fontWeight: 900,
              },
            }}
          >
            Contact
          </Typography>
          <Stack direction={'row'} spacing={2}>
            <Link href="/register">
              <Button variant="contained" color="info">
                Signup
              </Button>
            </Link>
            <Link href="/login">
              <Button variant="outlined">Login</Button>
            </Link>
          </Stack>
        </Stack>
      </Stack>
      <Divider variant="middle" sx={{ borderBottomWidth: 3 }} />
    </Box>
  )
}

export default Navbar
