import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import DialogAppBar from './DialogAppBar';

interface Props {
  handleBack: () => void;
}

function PreferencesDialog({ handleBack }: Props) {
  return (
    <>
      <DialogAppBar
        text='User Preferences'
        handleClick={handleBack}
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
