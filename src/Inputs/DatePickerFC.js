import React from 'react'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Box, FormControl, Tooltip, Typography } from '@mui/material';
import CalendarTodayRoundedIcon from '@mui/icons-material/CalendarTodayRounded';

const Icon = () => {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.6 1.27273H11.9V0H10.5V1.27273H3.5V0H2.1V1.27273H1.4C0.63 1.27273 0 1.84545 0 2.54545V12.7273C0 13.4273 0.63 14 1.4 14H12.6C13.37 14 14 13.4273 14 12.7273V2.54545C14 1.84545 13.37 1.27273 12.6 1.27273ZM12.6 12.7273H1.4V5.72727H12.6V12.7273ZM12.6 4.45455H1.4V2.54545H12.6V4.45455Z" fill="#888888"/>
    </svg>

  )
}

const DatePickerFC = ({ value, onChange, label, error = false, tooltip, fullwidth = false, sx = {}, ...props}) => {
  return (
    <div style={{ width: fullwidth ? '100%' : 'auto' }}>
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
      <FormControl fullWidth>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={localStorage.getItem('i18nextLng') === "pt-BR" ? "pt-br" : localStorage.getItem('i18nextLng')}>
          <DatePicker
            value={value}
            onChange={onChange}
            slots={{
              openPickerIcon: Icon
              
            }}
            slotProps={{
              textField: {
                size: 'small',
                fullWidth: fullwidth,
                sx: {
                  ...sx,
                  border: '0.5px solid #888888',
                  boxShadow: '0px 1px 0px 0px #00000040 inset',
                  borderRadius: '8px',
                  '& fieldset': {
                    border: 'none',
                  },
                }
              },
            }}
            {...props}
            />
        </LocalizationProvider>
      </FormControl>
    </div>
  )
}

export default DatePickerFC