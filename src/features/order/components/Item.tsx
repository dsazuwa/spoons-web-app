import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import palette from '@utils/palette';

function Item({ item }: { item: PublicMenuItemType }) {
  const { name, description, prices, photoUrl } = item;

  const hasBasePrice = prices.length === 1;

  return (
    <Box padding='10px'>
      <Card variant='outlined' sx={{ display: 'flex' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
          <CardContent sx={{ padding: '10px', flexGrow: 1 }}>
            <Stack direction='row' spacing={0.5} alignItems='center'>
              <Typography
                variant='h5'
                sx={{
                  color: palette.primary[900],
                  fontSize: { xs: '12px', sm: '14px', md: '16px' },
                  fontWeight: 500,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: '-webkit-box',
                  WebkitLineClamp: '1',
                  WebkitBoxOrient: 'vertical',
                }}
              >
                {name}
              </Typography>

              {!hasBasePrice && (
                <ArrowForwardIosIcon
                  sx={{
                    fontSize: { xs: '7px', sm: '8px', md: '9px' },
                  }}
                />
              )}
            </Stack>

            <Typography
              variant='body2'
              color='text.secondary'
              sx={{
                fontSize: { xs: '10px', sm: '11.5px', md: '13px' },
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: '2',
                WebkitBoxOrient: 'vertical',
              }}
            >
              {description}
            </Typography>
          </CardContent>

          {hasBasePrice && (
            <Typography
              sx={{
                display: 'flex',
                alignItems: 'center',
                pl: '10px',
                pb: '10px',
                fontSize: { xs: '10px', sm: '11.5px', md: '13px' },
              }}
            >
              {`$${Number(prices[0].price).toFixed(2)}`}
            </Typography>
          )}
        </Box>

        <CardMedia
          component='img'
          sx={{ width: { xs: '90px', sm: '100px', md: '150px' } }}
          image={`/menu-items/${photoUrl}`}
          alt={name}
        />
      </Card>
    </Box>
  );
}

export default Item;
