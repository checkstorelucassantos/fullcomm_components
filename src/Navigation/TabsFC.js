import { Tabs } from '@mui/material'
import React from 'react'

const TabsFC = ({ children, ...props }) => {
  return (
    <Tabs
      variant='scrollable'
      {...props}
      sx={{
        "& .MuiTabs-indicator": { 
          backgroundColor: "#4ECA80",
          height: '3px',
          borderTopRightRadius: '8px',
          borderTopLeftRadius: '8px',
        },
        "& .MuiButtonBase-root": {
          color: '#000',
          borderBottom: '1px solid #D1D5DB',
          textTransform: "none",
        },
        "& .Mui-selected": {
        },
      }}
    >
      {children}
    </Tabs>
  )
}

export default TabsFC