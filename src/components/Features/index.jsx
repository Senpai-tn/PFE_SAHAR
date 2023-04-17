import { Box, Divider, Stack, Typography } from '@mui/material'
import React from 'react'
import DoneIcon from '@mui/icons-material/Done'
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags'
import StarBorderIcon from '@mui/icons-material/StarBorder'
const Features = () => {
  return (
    <Stack pt={'40px'}>
      <Stack direction={'row'} justifyContent={'space-evenly'} height={'285px'}>
        <Box
          textAlign="center"
          width={'271px'}
          height={'168px'}
          borderRadius={'16px'}
        >
          <DoneIcon
            sx={{
              fontSize: '80px',
              bgcolor: '#ebebeb',
              borderRadius: '16px',
              p: '5px',
            }}
          />
          <Typography fontSize="21px">Feature One</Typography>
          <Typography fontSize="14px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis
            felis convallis, rhoncus leo id, scelerisque purus. Ut auctor
            gravida nulla.
          </Typography>
        </Box>
        <Box
          textAlign="center"
          width={'271px'}
          height={'168px'}
          borderRadius={'16px'}
        >
          <EmojiFlagsIcon
            sx={{
              fontSize: '80px',
              bgcolor: '#ebebeb',
              borderRadius: '16px',
              p: '5px',
            }}
          />
          <Typography fontSize="21px">Feature Two</Typography>
          <Typography fontSize="14px">
            Aliquam vel nibh iaculis, ornare purus sit amet, euismod dui. Cras
            sed tristique neque. Cras ornare dui lorem, vel rhoncus elit
            venenatis sit amet.
          </Typography>
          <Typography></Typography>
        </Box>
        <Box
          textAlign="center"
          width={'271px'}
          height={'168px'}
          borderRadius={'16px'}
        >
          <StarBorderIcon
            sx={{
              fontSize: '80px',
              bgcolor: '#ebebeb',
              borderRadius: '16px',
              p: '5px',
            }}
          />
          <Typography fontSize="21px">Feature Three</Typography>
          <Typography fontSize="14px">
            Vestibulum ultricies erat vitae faucibus vulputate. Sed finibus
            ipsum eu nibh volutpat, in congue sapien vehicula condimentum ligula
            vitae.
          </Typography>
        </Box>
      </Stack>
      <Stack direction={'row'} height={'251px'} justifyContent={'space-evenly'}>
        <Box width={'388px'}>
          <Typography fontSize={'36px'} fontWeight={700}>
            Heading explaining the main benefit of your app
          </Typography>
          <Typography fontSize={'14px'}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatiis. Ut auctor gravida nulla. Nam id
            erat elementum, accumsan dui non, porttitor lorem.
          </Typography>
        </Box>
        <img
          alt=""
          height={'242px'}
          width={'430px'}
          src="/assets/images/landing.png"
        />
      </Stack>
      <Divider
        variant="middle"
        sx={{
          borderBottomWidth: 3,
        }}
      />
    </Stack>
  )
}

export default Features
