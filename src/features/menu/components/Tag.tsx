import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import React from 'react';

import palette from '@utils/palette';

function Tag({ tags }: { tags: string[] }) {
  return (
    <Stack direction='row' spacing={1}>
      {tags.map((tag, index) => (
        <React.Fragment key={index}>
          <Typography
            sx={{ color: palette.grey[500], fontSize: '10px', fontWeight: 500 }}
          >
            {tag}
          </Typography>

          {index < tags.length - 1 && (
            <Divider orientation='vertical' variant='middle' flexItem />
          )}
        </React.Fragment>
      ))}
    </Stack>
  );
}

export default Tag;
