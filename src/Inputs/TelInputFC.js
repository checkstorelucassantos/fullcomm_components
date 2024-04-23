import { Typography } from '@mui/material'
import { MuiTelInput } from 'mui-tel-input'
import React from 'react'

const TelInputFC = ({ 
  label, 
  lang, 
  value, 
  onChange, 
  fullWidth = false, 
  error, 
  size = 'small' 
}) => {
  return (
    <div style={{ width: '100%' }}>
      {label && <Typography variant='body2' mb='0.5rem' color={error ? '#d32f2f' : '#000'}>{label}</Typography>}
      <MuiTelInput
        fullWidth={fullWidth}
        lang={lang}
        value={value}
        onChange={onChange}
        size={size}
        sx={{
          '& .MuiInputBase-root': {
            border: `0.5px solid ${error ? '#d32f2f' : '#888888'}`,
            boxShadow: '0px 1px 0px 0px #00000040 inset',
            borderRadius: '8px',
          },
          '& fieldset': {
            border: 'none',
          },
        }}
      />
    </div>
  )
}

export default TelInputFC