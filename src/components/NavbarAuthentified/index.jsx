import { Box, Link, Stack } from '@mui/material'
import React from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state'
import { useNavigate } from 'react-router-dom'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import BarChartIcon from '@mui/icons-material/BarChart'
import SettingsIcon from '@mui/icons-material/Settings'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
const NavbarAuthentified = () => {
  const navigate = useNavigate()
  return (
    <Box width={'100%'} height={'68px'} position={'relative'}>
      <Stack
        direction={'row'}
        height={'100%'}
        width={'100%'}
        px={'33px'}
        py={'13px'}
        justifyContent={'space-between'}
      >
        <img
          alt="logo"
          src={'/assets/images/logo.png'}
          height={'100%'}
          width={'60px'}
        />
        <Stack
          id="navbar"
          direction={'row'}
          height={'100%'}
          width={'50%'}
          alignItems={'center'}
          justifyContent={'space-around'}
        >
          <Button>Home page</Button>
          <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
              <React.Fragment>
                <Button {...bindTrigger(popupState)}>Service Requests</Button>
                <Menu {...bindMenu(popupState)}>
                  <MenuItem
                    onClick={() => {
                      popupState.close()
                    }}
                  >
                    All posts
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      popupState.close()
                    }}
                  >
                    Add new post
                  </MenuItem>
                </Menu>
              </React.Fragment>
            )}
          </PopupState>
          <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
              <React.Fragment>
                <Button {...bindTrigger(popupState)}>Hires</Button>
                <Menu {...bindMenu(popupState)}>
                  <MenuItem
                    onClick={() => {
                      popupState.close()
                    }}
                  >
                    Find Hires
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      popupState.close()
                    }}
                  >
                    Favourites
                  </MenuItem>
                </Menu>
              </React.Fragment>
            )}
          </PopupState>
          <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
              <React.Fragment>
                <Button {...bindTrigger(popupState)}>Jobs</Button>
                <Menu {...bindMenu(popupState)}>
                  <MenuItem
                    onClick={() => {
                      popupState.close()
                    }}
                  >
                    Find Jobs
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      popupState.close()
                    }}
                  >
                    My Jobs
                  </MenuItem>
                </Menu>
              </React.Fragment>
            )}
          </PopupState>
        </Stack>
        <Box>
          <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
              <React.Fragment>
                <Button variant="contained" {...bindTrigger(popupState)}>
                  Profil
                </Button>
                <Menu {...bindMenu(popupState)}>
                  <MenuItem
                    onClick={() => {
                      popupState.close()
                    }}
                  >
                    <PermIdentityIcon sx={{ mr: '10px' }} />
                    View profile
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      popupState.close()
                    }}
                  >
                    <BarChartIcon sx={{ mr: '10px' }} />
                    Account analytics
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      popupState.close()
                    }}
                  >
                    <SettingsIcon sx={{ mr: '10px' }} />
                    Settings
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      popupState.close()
                    }}
                  >
                    <HelpOutlineIcon sx={{ mr: '10px' }} />
                    Help and assistance
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      popupState.close()
                    }}
                  >
                    <ExitToAppIcon sx={{ mr: '10px' }} />
                    Logout
                  </MenuItem>
                </Menu>
              </React.Fragment>
            )}
          </PopupState>
        </Box>
      </Stack>
    </Box>
  )
}

export default NavbarAuthentified
