import { Box, IconButton, Typography } from '@mui/material'
import React from 'react'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const ModalHeaderFC = ({title, onClick}) => {
  return (
    <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
      padding: 2,
      alignItems: "center"
    }}
  >
    <Typography variant="h5">{title}</Typography>
    <IconButton
      sx={{
        float: 'top'
      }}
     onClick={onClick}
    >
      <CloseOutlinedIcon
        sx={{
          color: "#86888c",
        }}
      />
    </IconButton>
  </Box>
  )
}

export default ModalHeaderFC