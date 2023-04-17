import { Box, Button, Divider, Stack, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const SectionProvider = () => {
  const navigate = useNavigate()
  return (
    <Box position={'relative'} pb={'100px'}>
      <Stack direction={'row'} justifyContent={'space-evenly'}>
        <Stack alignItems={'space-around'} width={'40%'}>
          <Typography
            textAlign={'center'}
            fontSize={'30px'}
            fontWeight={900}
            padding={'40px'}
          >
            Are you a service provider?
          </Typography>
          <Typography fontSize={'14px'}>
            Are you a service provider? Join SOD, the essential platform to find
            new clients and increase your online visibility. Create your free
            account now and gain visibility and notoriety thanks to our
            community of users looking for home services and qualified
            providers.
          </Typography>
          <br />
          <Typography fontSize={'14px'}>
            Stand out from the competition and develop your business on SOD the
            trusted matchmaking platform. Register now to boost your business!
          </Typography>
        </Stack>
        <img
          src="/assets/images/landing.png"
          height={'450px'}
          width={'40%'}
          style={{
            objectFit: 'contain',
            position: 'relative',
            right: '30px',
          }}
        />
      </Stack>
      <Typography textAlign={'center'}>
        Signup now. Its free and takes less than 3 minutes
      </Typography>
      <Button
        onClick={() => {
          navigate('/register')
        }}
        variant="contained"
        sx={{
          position: 'absolute',
          left: '50%',
          transform: 'translate(-50%,0)',
        }}
      >
        SIGN UP FOR FREE
      </Button>
      <Divider
        variant="middle"
        sx={{
          position: 'absolute',
          bottom: 0,
          width: 'calc( 100vw - 32px )',
          borderBottomWidth: 3,
        }}
      />
    </Box>
  )
}

export default SectionProvider
