import CheckIcon from '@mui/icons-material/Check';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import { SxProps } from '@mui/material';
import Stack from '@mui/material/Stack';

import palette from '@utils/palette';
import ModifierRequiredStatusText from './ModifierRequiredStatusText';

function ModifierRequiredStatus({ selected }: { selected: boolean }) {
  const backgroundColor = selected
    ? palette.success[100]
    : palette.warning[100];
  const textColor = selected ? palette.success[700] : palette.warning[800];

  const iconStyle: SxProps = {
    color: textColor,
    fontSize: { xs: '.65rem', sm: '.9rem' },
  };

  return (
    <Stack
      direction='row'
      spacing={1}
      alignItems='center'
      sx={{ backgroundColor, p: '4px 6px', borderRadius: '8%' }}
    >
      {selected && (
        <CheckIcon
          sx={{ ...iconStyle, stroke: textColor, strokeWidth: '2px' }}
        />
      )}

      {!selected && <WarningAmberIcon sx={iconStyle} />}

      <ModifierRequiredStatusText color={textColor} text='Required' />
    </Stack>
  );
}

export default ModifierRequiredStatus;
