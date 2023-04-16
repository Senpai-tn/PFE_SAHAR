import { Box, Button, Divider, Stack, Typography } from '@mui/material'
import MuiPhoneNumber from 'mui-phone-number'
import React, { useState } from 'react'

const Landing = () => {
  return (
    <Box height={'auto'} width={'100%'}>
      <Stack
        paddingTop={'64px'}
        direction={'row'}
        justifyContent={'space-between'}
        flexWrap={'wrap'}
      >
        <Stack spacing={2} width={'429px'} paddingLeft={'131px'}>
          <Typography fontSize={'38px'} fontWeight={900} color={'#08284c'}>
            Find the suitable service,anywhere anytime
          </Typography>
          <Typography color={'#94cee6'} height={'82px'}>
            Are you searching for a specific service?
            <br /> Are you a service provider ?<br />
            we got you
          </Typography>
          <Button
            variant="contained"
            sx={{
              width: '228px',
              color: 'white',

              backgroundColor: '#e55d2e',
              ':hover': { bgcolor: '#e55d2e94' },
            }}
          >
            SIGN UP NOW
          </Button>
        </Stack>
        <Stack width={'100%'} maxWidth={'790px'} alignItems={'flex-end'}>
          <img
            src="/assets/images/landing.jpg"
            height={'450px'}
            width={'100%'}
            style={{
              objectFit: 'contain',
              position: 'relative',
              right: '30px',
            }}
          />
        </Stack>
      </Stack>
      <Divider
        variant="middle"
        sx={{
          borderBottomWidth: 3,
        }}
      />
    </Box>
  )
}

export default Landing
