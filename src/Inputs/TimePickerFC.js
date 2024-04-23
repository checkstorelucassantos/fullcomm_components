import React from 'react'
import { LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Box, Tooltip, Typography } from '@mui/material';

const TimePickerFC = ({ value, onChange, label, error = false, tooltip, fullWidth}) => {
  return (
    <div style={{ width: '100%' }}>
      {label && 
        <Box display='flex' gap='0.5rem' alignItems='center' mb='0.5rem'>
          <Typography variant='body2' color={error ? '#d32f2f' : '#000'}>{label}</Typography>
          {
            tooltip && 
            <Tooltip title={tooltip}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.4 3H6.6V4.2H5.4V3ZM5.4 5.4H6.6V9H5.4V5.4ZM6 0C2.688 0 0 2.688 0 6C0 9.312 2.688 12 6 12C9.312 12 12 9.312 12 6C12 2.688 9.312 0 6 0ZM6 10.8C3.354 10.8 1.2 8.646 1.2 6C1.2 3.354 3.354 1.2 6 1.2C8.646 1.2 10.8 3.354 10.8 6C10.8 8.646 8.646 10.8 6 10.8Z" fill="#888888"/>
              </svg>
            </Tooltip>
          }
        </Box>
      }
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={localStorage.getItem('i18nextLng') === "pt-BR" ? "pt-br" : localStorage.getItem('i18nextLng')}>
        <TimePicker
          value={value}
          onChange={onChange}
          slotProps={{
            textField: {
              size: 'small',
              fullWidth,
              sx: {
                border: '0.5px solid #888888',
                boxShadow: '0px 1px 0px 0px #00000040 inset',
                borderRadius: '8px',
                '& fieldset': {
                  border: 'none',
                },
              }
            },
          }}
          />
      </LocalizationProvider>
    </div>
  )
}

export default TimePickerFC