import { Box, Typography } from '@mui/material'
import React from 'react'
import VerifiedIcon from '@mui/icons-material/Verified'
import ReactStars from 'react-rating-stars-component'

const Suggestion = () => {
  return (
    <Box
      width={'272px'}
      minWidth={'272px'}
      height={'156px'}
      position={'relative'}
      border={'1px solid darksalmon'}
      borderRadius={'16px'}
      m={'20px 15px'}
    >
      <img
        src=""
        alt=""
        width={'69px'}
        height={'60px'}
        style={{ position: 'absolute', top: '9px', left: '12px' }}
      />
      <Typography
        position={'absolute'}
        fontSize={'18px'}
        top={'15px'}
        left={'102px'}
      >
        Title <VerifiedIcon sx={{ position: 'absolute', marginLeft: '6px' }} />
      </Typography>
      <Typography
        position={'absolute'}
        fontSize={'12px'}
        top={'45px'}
        left={'102px'}
      >
        Title
      </Typography>
      <Box position={'absolute'} top={'90px'} left={'16px'} height={'18px'}>
        <ReactStars
          count={5}
          value={3}
          edit={false}
          size={24}
          activeColor="#ffd700"
        />
      </Box>
    </Box>
  )
}

export default Suggestion
