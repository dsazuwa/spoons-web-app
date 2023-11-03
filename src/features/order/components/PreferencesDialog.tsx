import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';

import DialogAppBar from './DialogAppBar';
import * as S from './PreferencesDialog.styled';

interface Props {
  handleBack: () => void;
}

function PreferencesDialog({ handleBack }: Props) {
  const acceptsRequests = false;

  const selectMenuItems = [
    'Go with merchant recommendation',
    'Refund this item',
    'Contact me',
    'Cancel the entire order',
  ];

  const disabledRequestsMessage =
    'The store has chosen not to accept special requests. Contact them directly with questions about their menus.';

  return (
    <>
      <DialogAppBar
        text='User Preferences'
        handleClick={handleBack}
        Icon={ArrowBackIcon}
        iconLabel='back'
      />

      <S.PreferencesContent
        className='dialog-content'
        acceptsRequests={acceptsRequests}
      >
        <div id='dialog-app-bar-anchor' className='dialog-name header'>
          User Preferences
        </div>

        <Stack spacing={2}>
          <Stack spacing={0.5}>
            <div className='section-header special-requests'>
              Add Special Instructions
            </div>

            <S.TextField
              id='special-instructions'
              variant='standard'
              fullWidth
              multiline
              minRows={4}
              maxRows={8}
              disabled={!acceptsRequests}
              defaultValue={acceptsRequests ? '' : disabledRequestsMessage}
              InputProps={{ disableUnderline: true }}
            />
          </Stack>

          <Stack spacing={0.5}>
            <div className='section-header'>If item is unavailable</div>

            <FormControl sx={{ width: '100%' }}>
              <S.Select
                displayEmpty
                defaultValue={0}
                inputProps={{
                  'aria-label': 'If item is unavailable',
                }}
              >
                {selectMenuItems.map((item, index) => (
                  <MenuItem
                    key={`item-unavailable-option-${index}`}
                    value={index}
                    dense={true}
                  >
                    {item}
                  </MenuItem>
                ))}
              </S.Select>
            </FormControl>
          </Stack>
        </Stack>
      </S.PreferencesContent>

      <div className='dialog-footer preferences-dialog-footer'>
        <Button variant='contained' className='dialog-footer-button'>
          Save
        </Button>
      </div>
    </>
  );
}

export default PreferencesDialog;
