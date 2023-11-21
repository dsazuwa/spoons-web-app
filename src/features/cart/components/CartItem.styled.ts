import { styled } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MuiGrid from '@mui/material/Grid';

import palette from '@utils/palette';

const Grid = styled(MuiGrid, {
  shouldForwardProp: (prop) => prop !== 'isFirst',
})<{ isFirst: boolean }>(({ isFirst }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '16px 8px',
  borderTop: isFirst ? `1px solid ${palette.grey[200]}` : undefined,
  borderBottom: `1px solid ${palette.grey[200]}`,
  transition: 'background-color 0.1s ease-in-out',

  ':hover': {
    backgroundColor: palette.grey[50],
  },

  '& .item-image-box': {
    width: '60px',
    height: '60px',
    borderRadius: '4px',
    overflow: 'hidden',
  },

  '& .item-image': {
    width: '60px',
    height: '60px',
    objectFit: 'cover',
  },

  '& .item-name': {
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: '20px',
    color: palette.base.black,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: '2',
    letterSpacing: '-0.04ch',
  },

  '& .item-options': {
    fontWeight: 500,
    fontSize: '12px',
    lineHeight: '18px',
    color: palette.grey[500],
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: '2',
    letterSpacing: '-0.06ch',
  },

  '& .item-price': {
    marginTop: '8px',
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: '20px',
    color: palette.base.black,
  },
}));

const QuantityControl = styled('div')(() => ({
  borderRadius: '1000px',
  boxShadow: 'rgba(0, 0, 0, 0.2) 0px 2px 8px',
  whiteSpace: 'nowrap',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',

  '& .item-quantity': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '32px',
    minWidth: '32px',
    fontWeight: 600,
    fontSize: '12px',
    lineHeight: '12px',
    color: palette.base.black,
  },
}));

const ActionButton = styled(IconButton)(({ disabled }) => ({
  boxShadow: 'transparent 0px 0px 0px 1px inset',

  svg: {
    fontSize: '16px',
    color: disabled ? palette.grey[300] : palette.grey[600],
  },
}));

export { ActionButton, Grid, QuantityControl };
