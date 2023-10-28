import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import DialogAppBar from './DialogAppBar';

interface Props {
  handleClick: () => void;
}

function PreferencesDialog({ handleClick }: Props) {
  return (
    <>
      <DialogAppBar
        text='User Preferences'
        handleClick={handleClick}
        Icon={ArrowBackIcon}
        iconLabel='back'
      />

      <div className='dialog-content'>
        <div id='dialog-app-bar-anchor' className='dialog-name'>
          User Preferences
        </div>
      </div>
    </>
  );
}

export default PreferencesDialog;
