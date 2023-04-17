import { Box, Divider, Stack, Typography } from '@mui/material'
import React from 'react'
import Suggestion from '../Suggestion'

const SuggestionProvider = () => {
  const suggestions = ['', '', '', '', '', '', '', '']
  return (
    <Box bgcolor={'#f7f6f6'} height={'333px'}>
      <Typography
        textAlign={'center'}
        fontSize={'30px'}
        fontWeight={900}
        padding={'40px'}
      >
        Suggested Providers
      </Typography>
      <Stack direction={'row'} sx={{ overflow: 'scroll' }}>
        {suggestions.map((suggest, index) => {
          return <Suggestion />
        })}
      </Stack>
      <Divider
        variant="middle"
        sx={{
          position: 'absolute',
          bottom: '0',
          borderBottomWidth: 3,
        }}
      />
    </Box>
  )
}

export default SuggestionProvider
