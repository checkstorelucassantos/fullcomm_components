import { Checkbox, FormControlLabel } from '@mui/material'
import React from 'react'
const CheckboxFC = ({
  label,
  checked,
  ...props
}) => {
  return (
    <FormControlLabel 
      label={label} 
      control={
        <Checkbox 
          checked={checked} 
          {...props}
          checkedIcon={
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.75" y="0.75" width="14.5" height="14.5" rx="3.25" fill="#888888" stroke="#888888" stroke-width="1.5"/>
              <mask id="path-3-inside-1_1496_4886" fill="white">
              <path d="M5.81818 10.9104L2.95455 7.77612L2 8.8209L5.81818 13L14 4.04478L13.0455 3L5.81818 10.9104Z"/>
              </mask>
              <path d="M5.81818 10.9104L4.34165 12.2595L5.81818 13.8756L7.29472 12.2595L5.81818 10.9104ZM2.95455 7.77612L4.43108 6.4271L2.95455 4.811L1.47801 6.4271L2.95455 7.77612ZM2 8.8209L0.523465 7.47188L-0.709046 8.8209L0.523465 10.1699L2 8.8209ZM5.81818 13L4.34165 14.349L5.81818 15.9651L7.29472 14.349L5.81818 13ZM14 4.04478L15.4765 5.39379L16.709 4.04478L15.4765 2.69576L14 4.04478ZM13.0455 3L14.522 1.65098L13.0455 0.0348759L11.5689 1.65098L13.0455 3ZM7.29472 9.56143L4.43108 6.4271L1.47801 9.12514L4.34165 12.2595L7.29472 9.56143ZM1.47801 6.4271L0.523465 7.47188L3.47653 10.1699L4.43108 9.12514L1.47801 6.4271ZM0.523465 10.1699L4.34165 14.349L7.29472 11.651L3.47653 7.47188L0.523465 10.1699ZM7.29472 14.349L15.4765 5.39379L12.5235 2.69576L4.34165 11.651L7.29472 14.349ZM15.4765 2.69576L14.522 1.65098L11.5689 4.34902L12.5235 5.39379L15.4765 2.69576ZM11.5689 1.65098L4.34165 9.56143L7.29472 12.2595L14.522 4.34902L11.5689 1.65098Z" fill="#FAFAFA" mask="url(#path-3-inside-1_1496_4886)"/>
            </svg>
          }
          icon={
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.75" y="0.75" width="14.5" height="14.5" rx="3.25" stroke="#888888" stroke-width="1.5"/>
            </svg>
          }
        />
      }
    />
  )
}

export default CheckboxFC