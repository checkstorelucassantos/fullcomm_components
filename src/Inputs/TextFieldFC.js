import { InputAdornment, TextField, Typography } from '@mui/material'
import React from 'react'

const TextFieldFC = ({ 
  label, 
  value, 
  onChange, 
  fullWidth = false,
  error,
  helperText,
  size = 'small',
  required,
  placeholder = '',
  searchIcon = false,
  sx = {},
  ...props
}) => {
  return (
    <div style={{ width: fullWidth ? '100%' : 'auto' }}>
      {label && <Typography variant='body2' mb='0.5rem' color={error ? '#d32f2f' : '#000'}>{label}{required && <span style={{ color: '#e74c3c'}}> *</span>}</Typography>}
      <TextField
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        variant='outlined'
        fullWidth={fullWidth}
        size={size}
        error={error}
        helperText={helperText}
        InputProps={searchIcon && {
          startAdornment: (
              <InputAdornment position="start">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8.57633 7.54717H8.03431L7.8422 7.36192C8.51458 6.57976 8.91938 5.56432 8.91938 4.45969C8.91938 1.99657 6.92281 0 4.45969 0C1.99657 0 0 1.99657 0 4.45969C0 6.92281 1.99657 8.91938 4.45969 8.91938C5.56432 8.91938 6.57976 8.51458 7.36192 7.8422L7.54717 8.03431V8.57633L10.9777 12L12 10.9777L8.57633 7.54717ZM4.45969 7.54717C2.75129 7.54717 1.37221 6.1681 1.37221 4.45969C1.37221 2.75129 2.75129 1.37221 4.45969 1.37221C6.1681 1.37221 7.54717 2.75129 7.54717 4.45969C7.54717 6.1681 6.1681 7.54717 4.45969 7.54717Z" fill="#888888"/>
                  </svg>
              </InputAdornment>
          ),
        }}
        {...props}
        sx={{
          ...sx,
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

export default TextFieldFC