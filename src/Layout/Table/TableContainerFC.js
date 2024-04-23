import { Paper, TableContainer } from '@mui/material'
import React from 'react'

const TableContainerFC = ({children, border, sx, ...props}) => {
  return (
    <TableContainer 
      component={Paper} 
      sx={{
        boxShadow: border !== null && '0px 4px 4px 0px #0000001A',
        borderRadius: '4px',
        border: border !== null && '1px solid #D1D5DB',
        borderBottom: 'none',
        ...sx,
      }}
      {...props}
    >
      {children}
    </TableContainer>
  )
}

export default TableContainerFC