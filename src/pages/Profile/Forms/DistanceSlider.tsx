import React, { useEffect } from "react";
import { Controller } from "react-hook-form";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';

const PrettoSlider = styled(Slider)({
    color: '#00D4A6',
    height: 8,
    '& .MuiSlider-track': {
      border: 'none',
    },
    '& .MuiSlider-thumb': {
      height: 24,
      width: 24,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
        boxShadow: 'inherit',
      },
      '&:before': {
        display: 'none',
      },
    },
    '& .MuiSlider-valueLabel': {
      lineHeight: 1.2,
      fontSize: 12,
      background: 'unset',
      padding: 0,
      width: 32,
      height: 32,
      borderRadius: '50% 50% 50% 0',
      backgroundColor: '#00D4A6',
      transformOrigin: 'bottom left',
      transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
      '&:before': { display: 'none' },
      '&.MuiSlider-valueLabelOpen': {
        transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
      },
      '& > *': {
        transform: 'rotate(45deg)',
      },
    },
  });
  
const marks = [
  {
    value: 3,
    label: '3km',
  },
  {
    value: 6,
    label: '6km',
  },
  {
    value: 10,
    label: '10km',
  },
];

function valuetext(value: number) {
  return `${value}°C`;
}

export default function DiscreteSliderLabel() {
  return (
    <Box sx={{ width: 300 }}>
      <PrettoSlider
        aria-label="Always visible"
        defaultValue={5}
        getAriaValueText={valuetext}
        step={1}
        min={0}
        max={10}
        marks={marks}
        color= "secondary"
        valueLabelDisplay="on"
      />
    </Box>
  );
}