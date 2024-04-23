import { Chip } from '@mui/material'
import React from 'react'

const ChipFC = ({sx, ...props}) => {
  return (
    <Chip
      size='small'
      sx={{
        fontWeight: 500,
        fontSize: '12px !important',
        lineHeight: '14.06px',
        paddingX: '0.5rem',
        paddingY: '2px',
        height: '20px',
        // width: '60px',
        borderRadius: '8px',
        ...sx,
      }}
      {...props}
    />
  )
}

export default ChipFC