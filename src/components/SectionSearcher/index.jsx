import { Box, Button, Divider, Stack, Typography } from '@mui/material'
import React from 'react'

const SectionSearcher = () => {
  return (
    <Box position={'relative'}>
      <Stack direction={'row'} justifyContent={'space-evenly'}>
        <Stack alignItems={'space-around'} width={'40%'}>
          <Typography
            textAlign={'center'}
            fontSize={'30px'}
            fontWeight={900}
            padding={'40px'}
          >
            Are you searching to hire someone to give you a service ?
          </Typography>
          <Typography fontSize={'14px'}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            tenetur nisi, nihil consequuntur quo officia sapiente eaque quisquam
            ipsam fugit velit autem pariatur quos quam earum aperiam reiciendis
            laborum laboriosam! Quibusdam, perspiciatis at exercitationem
            repudiandae, harum cupiditate ab facilis ipsam illo minus suscipit!
            Fugiat, illo, asperiores deserunt voluptate id quis labore alias
            quisquam sed laborum itaque harum sequi quam placeat!
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

export default SectionSearcher
