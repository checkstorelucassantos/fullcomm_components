import { Box, Pagination, PaginationItem } from '@mui/material'
import React from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const PaginationFC = ({ sx, ...props }) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Pagination
        sx={{
          ...sx
        }}
        variant="outlined" 
        shape="rounded" 
        {...props}
        renderItem={(item) => {
          
          return (item.type === 'previous' || item.type === 'next') ? (
            <PaginationItem
              sx={{
                margin: '0',
                color: '#888888',
                border: '1px solid #D1D5DB',
                borderRight: item.type === 'previous' && 'none',
                width: '36px',
                borderTopRightRadius: item.type === 'previous' && '0',
                borderTopLeftRadius: item.type === 'next' && '0',
                borderBottomRightRadius: item.type === 'previous' && '0',
                borderBottomLeftRadius: item.type === 'next' && '0',
              }}
              slots={{ previous: ArrowBackIosNewIcon, next: ArrowForwardIosIcon }}
              {...item}
            />
          ) : (
            <></>
          )}}
      />
    </Box>
  )
}

export default PaginationFC