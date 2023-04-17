import { AccountCircle } from '@mui/icons-material'
import {
  Box,
  Button,
  Divider,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import Category from '../Category'
const Services = () => {
  const categories = ['', '', '', '', '', '', '', '', '']
  return (
    <Box textAlign={'center'}>
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
      <Typography sx={{ cursor: 'pointer', color: '#0288d1' }} pl={'30%'}>
        Advanced search
      </Typography>
      <Stack direction={'row'} flexWrap={'wrap'} justifyContent={'center'}>
        {categories.length <= 6
          ? categories.map((item, index) => {
              return <Category key={index} />
            })
          : categories.slice(0, 6).map((item, index) => {
              return <Category key={index} />
            })}
      </Stack>
      {categories.length > 6 && <Button>View More</Button>}
      <Divider
        variant="middle"
        sx={{
          borderBottomWidth: 3,
        }}
      />
    </Box>
  )
}

export default Services
