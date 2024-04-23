import { Card } from '@mui/material'
import React from 'react'

const CardFC = ({ children, sx = {}, ...props }) => {
  return (
    <Card 
      {...props}
      sx={{
        padding: '16px, 16px, 24px, 16px',
        boxShadow: '0px 2px 2px 0px #00000026',
        ...sx,
      }}
    >
      {children}
    </Card>
  )
}

export default CardFC