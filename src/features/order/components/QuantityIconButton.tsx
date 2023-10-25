import IconButton from '@mui/material/IconButton';

import palette from '@utils/palette';

interface QuantityIconButtonProps {
  disabled: boolean;
  onClick: () => void;
  icon: React.ElementType;
}

function QuantityIconButton({
  disabled,
  onClick,
  icon: IconComponent,
}: QuantityIconButtonProps) {
  return (
    <IconButton disabled={disabled} onClick={onClick}>
      <IconComponent
        sx={{
          fontSize: { xs: '25px', sm: '35px' },
          color: disabled ? palette.grey[400] : palette.grey[700],
        }}
      />
    </IconButton>
  );
}

export default QuantityIconButton;
