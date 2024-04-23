


import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Icon from '@mui/material/Icon';

const DropdownButton = ({
    items,
    itemClickHandlers,
    i,
    sx
  }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        sx={{
          color: '#888888',
          ...sx,
        }}
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.2 12.2C7.2 11.9347 7.30535 11.6804 7.49289 11.4928C7.68043 11.3053 7.93478 11.2 8.2 11.2C8.46521 11.2 8.71957 11.3053 8.9071 11.4928C9.09464 11.6804 9.2 11.9347 9.2 12.2C9.2 12.4652 9.09464 12.7195 8.9071 12.9071C8.71957 13.0946 8.46521 13.2 8.2 13.2C7.93478 13.2 7.68043 13.0946 7.49289 12.9071C7.30535 12.7195 7.2 12.4652 7.2 12.2ZM7.2 8.19995C7.2 7.93473 7.30535 7.68038 7.49289 7.49284C7.68043 7.30531 7.93478 7.19995 8.2 7.19995C8.46521 7.19995 8.71957 7.30531 8.9071 7.49284C9.09464 7.68038 9.2 7.93473 9.2 8.19995C9.2 8.46517 9.09464 8.71952 8.9071 8.90706C8.71957 9.09459 8.46521 9.19995 8.2 9.19995C7.93478 9.19995 7.68043 9.09459 7.49289 8.90706C7.30535 8.71952 7.2 8.46517 7.2 8.19995ZM7.2 4.19995C7.2 3.93473 7.30535 3.68038 7.49289 3.49284C7.68043 3.30531 7.93478 3.19995 8.2 3.19995C8.46521 3.19995 8.71957 3.30531 8.9071 3.49284C9.09464 3.68038 9.2 3.93473 9.2 4.19995C9.2 4.46517 9.09464 4.71952 8.9071 4.90706C8.71957 5.09459 8.46521 5.19995 8.2 5.19995C7.93478 5.19995 7.68043 5.09459 7.49289 4.90706C7.30535 4.71952 7.2 4.46517 7.2 4.19995Z" fill="#888888"/>
        </svg>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {items.map((item, index) => (
          item && <MenuItem
            key={index}
            onClick={() => {
              itemClickHandlers[index]();
              handleClose();
            }}
          >
            {item}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default DropdownButton;