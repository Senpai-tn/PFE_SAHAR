import React from 'react'
import Navbar from '../../components/Navbar'
import Landing from '../../components/Landing'
import { Box } from '@mui/material'
import Services from '../../components/Services'

const Home = () => {
  return (
    <Box>
      <Navbar />
      <Landing />
      <Services />
    </Box>
  )
}

export default Home
