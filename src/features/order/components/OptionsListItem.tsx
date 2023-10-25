import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';

import palette from '@utils/palette';

interface OptionsListItemProps {
  option: ModifierOption | NestedOption;
  value: number;
  InputComponent: JSX.Element;
}

function OptionsListItem({
  option,
  value,
  InputComponent,
}: OptionsListItemProps) {
  return (
    <div>
      <Box display='flex' flexDirection='row' alignItems='center'>
        <FormControlLabel
          control={InputComponent}
          value={value}
          sx={{ width: '100%' }}
          labelPlacement='end'
          label={
            <Typography
              sx={{
                color: palette.grey[800],
                fontWeight: 500,
                fontSize: { xs: '.75rem', sm: '1rem' },
                display: 'flex',
                flexGrow: 1,
              }}
            >
              {option.name}
            </Typography>
          }
        />

        {option.price !== null && (
          <Typography
            sx={{
              color: palette.grey[500],
              fontSize: { xs: '.75rem', sm: '1rem' },
            }}
          >{`+$${option.price.toFixed(2)}`}</Typography>
        )}

        {'groupId' in option && <KeyboardArrowRightIcon />}
      </Box>
      <Divider />
    </div>
  );
}

export default OptionsListItem;
