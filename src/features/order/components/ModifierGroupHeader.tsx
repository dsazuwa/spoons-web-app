import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Dispatch, SetStateAction } from 'react';

import palette from '@utils/palette';
import ModifierRequiredStatus from './ModifierRequiredStatus';
import ModifierRequiredStatusText from './ModifierRequiredStatusText';

interface ModifierGroupHeaderProps {
  modifier: Modifier;
  selectedOption: number;
  setSelectedOption: Dispatch<SetStateAction<number>>;
}

function ModifierGroupHeader({
  modifier,
  selectedOption,
}: ModifierGroupHeaderProps) {
  const { name, isRequired, minSelection, maxSelection } = modifier;

  const selectionPrompt =
    minSelection === null || maxSelection === null || minSelection === 1
      ? 'Select 1'
      : `Select up to ${maxSelection}`;

  return (
    <Stack direction='row' alignItems='flex-start'>
      <Box component='div' display='flex' flexGrow={1} mr={2}>
        <Stack spacing={0.5}>
          <Typography
            sx={{
              lineHeight: 1,
              fontWeight: 700,
              fontSize: { xs: '.8rem', sm: '1rem' },
            }}
          >
            {name}
          </Typography>

          <Typography
            sx={{
              color: palette.grey[500],
              fontSize: { xs: '.7rem', sm: '0.9rem' },
            }}
          >
            {selectionPrompt}
          </Typography>
        </Stack>
      </Box>

      {isRequired && <ModifierRequiredStatus selected={selectedOption > -1} />}

      {!isRequired && (
        <ModifierRequiredStatusText
          color={palette.grey[500]}
          text='(Optional)'
        />
      )}
    </Stack>
  );
}

export default ModifierGroupHeader;
