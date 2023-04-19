import React from 'react'
import Navbar from '../../components/Navbar'
import Landing from '../../components/Landing'
import { Box } from '@mui/material'
import Services from '../../components/Services'
import SuggestionProvider from '../../components/Providers'
import SectionProvider from '../../components/SectionProvider'
import SectionSearcher from '../../components/SectionSearcher'
import SectionHowItWork from '../../components/SectionHowItWork'
import Features from '../../components/Features'
import Footer from '../../components/Footer'
import NavbarAuthentified from '../../components/NavbarAuthentified'
import { useSelector } from 'react-redux'

const Home = () => {
  const user = useSelector((state) => state.nom_user)
  return (
    <Box>
      {user === null ? <Navbar /> : <NavbarAuthentified />}
      <Landing />
      <Services />
      <SuggestionProvider />
      <SectionProvider />
      {user !== null && <SectionSearcher />}
      {user === null && <SectionHowItWork />}
      <Features />
      <Footer />
    </Box>
  )
}

export default Home
