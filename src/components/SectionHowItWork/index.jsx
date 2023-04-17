import { Box, Button, Divider, Stack, Typography } from '@mui/material'
import React from 'react'

const SectionHowItWork = () => {
  return (
    <Box position={'relative'} bgcolor={'#f7f6f6'} pb={'120px'}>
      <Stack width={'100%'} alignItems={'center'}>
        <Typography
          width={'400px'}
          textAlign={'center'}
          fontSize={'30px'}
          fontWeight={900}
          py={'40px'}
        >
          HOW DOES IT WORK ?
        </Typography>
        <Typography width={'400px'} fontSize={'14px'} pb={'40px'}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          tenetur nisi, nihil consequuntur quo officia sapiente eaque quisquam
          ipsam fugit velit autem pariatur quos quam earum aperiam reiciendis
          laborum laboriosam! Quibusdam, perspiciatis at exercitationem
          repudiandae, harum cupiditate ab facilis ipsam illo minus suscipit!
          Fugiat, illo, asperiores deserunt voluptate id quis labore alias
          quisquam sed laborum itaque harum sequi quam placeat!
        </Typography>
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

export default SectionHowItWork
