import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { NextLinkComposed } from '@components/Link';

interface AuthLinkProps {
  message: string;
  pathname: string;
  text: string;
}

function AuthLink({ message, pathname, text }: AuthLinkProps) {
  return (
    <Box display='flex' justifyContent='center' alignItems='center'>
      <Typography>
        {message}
        <Typography
          textTransform='none'
          component={NextLinkComposed}
          to={{ pathname }}
          sx={{ ml: 1 }}
        >
          {text}
        </Typography>
      </Typography>
    </Box>
  );
}

export default AuthLink;
