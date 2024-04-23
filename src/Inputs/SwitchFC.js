import * as React from 'react';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';

const Icon = () => {
  const svgCode = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="#10B981"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5261 8.12141C10.0486 7.62282 10.0658 6.83155 10.5643 6.35406C11.0629 5.87657 11.8542 5.89367 12.3317 6.39226L17.158 11.4318C17.5181 11.6512 17.7586 12.0475 17.7586 12.5001C17.7586 12.9532 17.5175 13.35 17.1566 13.5692L12.3317 18.6073C11.8542 19.1059 11.0629 19.123 10.5643 18.6455C10.0658 18.168 10.0486 17.3768 10.5261 16.8782L13.5219 13.7501H7.05491C6.36455 13.7501 5.80491 13.1904 5.80491 12.5001C5.80491 11.8097 6.36455 11.2501 7.05491 11.2501H13.5224L10.5261 8.12141Z" fill="#FAFAFA"/>
    </svg>
  `;
  const svgUrl = `data:image/svg+xml,${encodeURIComponent(svgCode)}`;
  return svgUrl;
}

const SwitchFC = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '& .MuiSwitch-thumb:before': {
      content: '""',
      display: 'block',
      width: '100%',
      height: '100%',
      backgroundImage: `url(${Icon()})`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
    },
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: '#10B981',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

export default SwitchFC;
