import { Badge, Box, Link, Stack } from '@mui/material'
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
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import { useDispatch, useSelector } from 'react-redux'
import actions from '../../redux/actions'
const NavbarAuthentified = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const nom_user = useSelector((state) => state.nom_user)
  return (
    <Box width={'100%'} height={'68px'} position={'relative'} id="navbar">
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
                      navigate('/')
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
        <Stack direction={'row'} alignItems={'center'} spacing={2}>
          <ChatBubbleOutlineIcon />
          <Badge badgeContent={1000} color="primary" max={9}>
            <NotificationsNoneIcon />
          </Badge>
          <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
              <React.Fragment>
                {/* <Button variant="contained" {...bindTrigger(popupState)}>
                  Profil
                </Button> */}
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                  height={'60px'}
                  width={'60px'}
                  style={{ borderRadius: '50%' }}
                  {...bindTrigger(popupState)}
                />
                <Menu {...bindMenu(popupState)}>
                  <MenuItem
                    onClick={() => {
                      popupState.close()
                    }}
                  >
                    <PermIdentityIcon sx={{ mr: '10px' }} />
                    {nom_user}
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
                      dispatch({ type: actions.logout })
                      navigate('/')
                    }}
                  >
                    <ExitToAppIcon sx={{ mr: '10px' }} />
                    Logout
                  </MenuItem>
                </Menu>
              </React.Fragment>
            )}
          </PopupState>
        </Stack>
      </Stack>
    </Box>
  )
}

export default NavbarAuthentified
