import { SxProps } from '@mui/material';

/**
 * Make sure to set WebkitLineClamp
 */
export const ellipsisTextStyles: SxProps = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
};
