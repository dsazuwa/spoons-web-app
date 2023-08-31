import IconButton from '@mui/material/IconButton';
import React from 'react';

interface SocialIconButtonProps {
  icon: React.ReactNode;
}

function SocialIconButton({ icon }: SocialIconButtonProps) {
  return <IconButton size='small'>{icon}</IconButton>;
}

export default SocialIconButton;
