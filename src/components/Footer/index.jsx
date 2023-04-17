import {
  Box,
  Divider,
  IconButton,
  Link,
  Stack,
  Typography,
} from '@mui/material'
import React from 'react'
import YouTubeIcon from '@mui/icons-material/YouTube'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
const Footer = () => {
  return (
    <Box py={'40px'} position={'relative'} height={'150px'}>
      <Stack
        justifyContent={'center'}
        spacing={4}
        direction={'row'}
        divider={
          <Divider
            flexItem
            orientation="vertical"
            sx={{
              borderRightWidth: 3,
            }}
          />
        }
      >
        <Link href="/">Services</Link>
        <Link href="/">Providers</Link>
        <Link href="/">About</Link>
        <Link href="/">Help</Link>
        <Link href="/">Terms of use</Link>
      </Stack>
      <Stack
        spacing={2}
        direction={'row'}
        justifyContent={'flex-start'}
        position={'absolute'}
        left={'10px'}
        bottom={'10px'}
      >
        <IconButton onClick={() => {}}>
          <YouTubeIcon htmlColor="red" />
        </IconButton>
        <IconButton onClick={() => {}}>
          <InstagramIcon htmlColor="orange" />
        </IconButton>
        <IconButton onClick={() => {}}>
          <FacebookIcon htmlColor="blue" />
        </IconButton>
      </Stack>
      <Typography
        textAlign={'center'}
        position={'absolute'}
        bottom={0}
        left={'50%'}
        sx={{ transform: 'translate(-50%,0)' }}
      >
        © 2023 Your Company. All rights reserved.
      </Typography>
    </Box>
  )
}

export default Footer
