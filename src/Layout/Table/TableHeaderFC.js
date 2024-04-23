import { TableHead } from '@mui/material'
import React from 'react'

const TableHeaderFC = ({children, sx, ...props}) => {
  return (
    <TableHead
      sx={{
        backgroundColor: '#F3F3F3',
        ...sx,
      
      }}
      {...props}
    >
      {children}
    </TableHead>
  )
}

export default TableHeaderFC