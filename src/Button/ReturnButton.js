import { IconButton } from '@mui/material'
import React from 'react'

const ReturnButton = ({ margin }) => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <IconButton
    sx={{marginY: margin ? margin : "1rem"}}
    onClick={goBack}
  >
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.5 5.08333H3.51083L6.7925 1.7925L5.5 0.5L0 6L5.5 11.5L6.7925 10.2075L3.51083 6.91667H16.5V5.08333Z" fill="#888888"/>
    </svg>

    {/* {i18n.t("sprint.utils.headerButtons.returnButton.return")} */}
  </IconButton>
  )
}

export default ReturnButton