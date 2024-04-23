import { LoadingButton } from '@mui/lab'
import { Box, Button } from '@mui/material'
import React from 'react'

const ModalFooterFC = ({
  actionLabel,
  cancelLabel,
  handleAction,
  handleCancel,
  loading
}) => {
  return (
    <Box padding='1rem' display={"flex"} gap={1} justifyContent='end'>
      <LoadingButton loading={loading} variant="contained" className="btn-reprove large" onClick={handleAction}>
        {actionLabel}
      </LoadingButton>
      <Button variant="contained" className="btn-white large" onClick={handleCancel}>
        {cancelLabel}
      </Button>
    </Box>
  )
}

export default ModalFooterFC