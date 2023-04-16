import { AccountCircle } from '@mui/icons-material'
import { Box, TextField, Typography } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
const Services = () => {
  return (
    <Box>
      <Typography
        textAlign={'center'}
        fontWeight={900}
        fontSize={'30px'}
        pt={'68px'}
      >
        Find services you need
      </Typography>
      <Box
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <SearchIcon sx={{ mr: 1, my: 0.5 }} />
        <TextField label="Search" sx={{ width: '465px' }} />
      </Box>
      <Typography pl={'65%'}>Advanced search</Typography>
    </Box>
  )
}

export default Services
