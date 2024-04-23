import { Autocomplete, TextField, Typography } from '@mui/material';
import React from 'react'

const AutocompleteFC = ({
  getFieldProps ={},
  onChange,
  values,
  fullWidth = false,
  isOptionEqualToValue,
  options,
  label,
  placeholder = '',
  multiple = false,
  size = 'small',
  error = false,
  ...props
}) => {
  return (
    <div style={{ width: '100%' }}>
      {label && <Typography variant='body2' mb='0.5rem' color={error ? '#d32f2f' : '#000'}>{label}</Typography>}
      <Autocomplete
        fullWidth={fullWidth}
        multiple={multiple}
        {...getFieldProps}
        value={values}
        onChange={onChange}
        size={size}
        options={options}
        isOptionEqualToValue={isOptionEqualToValue}
        {...props}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder={placeholder}
            sx={{
              '& .MuiInputBase-root': {
                border: `0.5px solid #888888`,
                boxShadow: '0px 1px 0px 0px #00000040 inset',
                borderRadius: '8px',
              },
              '& fieldset': {
                border: 'none',
              },
            }}
          />
        )}
        ChipProps={{
          sx: {
            borderRadius: '8px',
          }
        }}
      />
    </div>
  )
}

export default AutocompleteFC