import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { styled } from '@mui/material';
import MuiBox from '@mui/material/Box';
import MuiCard from '@mui/material/Card';
import MuiStack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import palette from '@utils/palette';

const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  width: '100%',

  height: '115px',

  [theme.breakpoints.only('sm')]: {
    height: '105px',
  },

  [theme.breakpoints.only('xs')]: {
    height: '95px',
  },
}));

const Stack = styled(MuiStack)({
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  justifyContent: 'center',
  padding: '.75em',
});

const Box = styled(MuiBox)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
});

const Name = styled(Typography)(({ theme }) => ({
  color: palette.primary[900],
  textAlign: 'left',
  WebkitLineClamp: '1',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',

  fontWeight: 600,
  fontSize: '0.8rem',

  [theme.breakpoints.only('sm')]: {
    fontSize: '0.75rem',
  },

  [theme.breakpoints.only('xs')]: {
    fontSize: '0.7rem',
  },
}));

const Description = styled(Typography)(({ theme }) => ({
  textAlign: 'left',
  lineHeight: 1.25,
  WebkitLineClamp: '2',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',

  fontSize: '0.7rem',

  [theme.breakpoints.only('sm')]: {
    fontSize: '0.65rem',
  },

  [theme.breakpoints.only('xs')]: {
    fontSize: '0.6rem',
  },
}));

const Price = styled(Typography)(({ theme }) => ({
  color: palette.grey[500],
  fontWeight: 600,
  textAlign: 'left',

  fontSize: '0.8rem',

  [theme.breakpoints.only('sm')]: {
    fontSize: '0.75rem',
  },

  [theme.breakpoints.only('xs')]: {
    fontSize: '0.7rem',
  },
}));

const ArrowIcon = styled(ArrowForwardIosIcon)(({ theme }) => ({
  marginLeft: '2px',
  fontSize: '9px',

  [theme.breakpoints.only('sm')]: {
    fontSize: '8px',
  },

  [theme.breakpoints.only('xs')]: {
    fontSize: '7px',
  },
}));

const AddButton = styled('div')({
  position: 'absolute',
  right: '.6em',
  bottom: '.7em',
  padding: '0.5em 0.75em',
  borderRadius: '40%',
  boxShadow:
    '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
  color: palette.primary[950],
  backgroundColor: palette.base.white,

  fontSize: '.7em',
  fontWeight: 600,

  transition: 'background-color 0.1s, color 0.1s',

  '&:hover': {
    color: palette.base.white,
    backgroundColor: palette.primary[300],
  },
});

export { AddButton, ArrowIcon, Box, Card, Description, Name, Price, Stack };
