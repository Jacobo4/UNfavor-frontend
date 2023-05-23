// Core
import React from "react";
// Mui
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

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
    value: 10,
    label: '10km',
  },
  {
    value: 25,
    label: '25km',
  },
  {
    value: 40,
    label: '40km',
  },
];
function valuetext(value: number) {
  return `${value}km`;
}
export default function DiscreteSliderLabel({onChange, value, distance}) {
  return (
    <Box sx={{ width: 300 }}>
      <PrettoSlider
        aria-label="Always visible"
        defaultValue={distance}
        onChange={onChange}
        value={value}
        getAriaValueText={valuetext}
        step={1}
        min={0}
        max={60}
        marks={marks}
        color= "secondary"
        valueLabelDisplay="on"
      />
      
    </Box>
  );
}