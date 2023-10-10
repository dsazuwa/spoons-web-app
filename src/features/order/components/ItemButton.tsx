import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { ellipsisTextStyles } from '@styles/typography.styles';
import palette from '@utils/palette';

const paddingStyle = { xs: '5px', sm: '7.5px', md: '10px' };

interface ItemButtonProps {
  item: MenuItemType;
  handleClick: () => void;
}

function ItemButton({ item, handleClick }: ItemButtonProps) {
  const { name, description, prices, photoUrl } = item;
  const hasBasePrice = prices.length === 1;

  return (
    <ButtonBase onClick={handleClick} sx={{ display: 'flex', width: '100%' }}>
      <Card variant='outlined' sx={{ display: 'flex', width: '100%' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
          <CardContent sx={{ padding: paddingStyle, flexGrow: 1 }}>
            <Stack direction='row' spacing={0.5} alignItems='center'>
              <Typography
                variant='h5'
                sx={{
                  color: palette.primary[900],
                  textAlign: 'left',
                  paddingBottom: '2px',
                  fontSize: { xs: '12px', sm: '14px', md: '16px' },
                  fontWeight: 500,
                  WebkitLineClamp: '1',
                  ...ellipsisTextStyles,
                }}
              >
                {name}
              </Typography>

              {!hasBasePrice && (
                <ArrowForwardIosIcon
                  sx={{ fontSize: { xs: '7px', sm: '8px', md: '9px' } }}
                />
              )}
            </Stack>

            <Typography
              variant='body2'
              color='text.secondary'
              sx={{
                fontSize: { xs: '10px', sm: '11.5px', md: '13px' },
                textAlign: 'left',
                lineHeight: 1.25,
                WebkitLineClamp: '2',
                ...ellipsisTextStyles,
              }}
            >
              {description}
            </Typography>
          </CardContent>

          {hasBasePrice && (
            <Typography
              sx={{
                color: palette.grey[500],
                fontSize: { xs: '9px', sm: '10.5px', md: '12px' },
                pl: paddingStyle,
                pb: paddingStyle,
                fontWeight: 500,
                textAlign: 'left',
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

        <Box
          sx={{
            position: 'absolute',
            bottom: paddingStyle,
            right: '5px',
            padding: '6px 8px',
            borderRadius: '30px',
            boxShadow: 2,

            fontWeight: 700,
            fontSize: { xs: '7px', sm: '8px', md: '9px' },

            color: palette.primary[950],
            backgroundColor: palette.base.white,
            transition: 'backgroundColor 0.1s, color 0.1s',
            ':hover': {
              color: palette.base.white,
              backgroundColor: palette.primary[300],
            },
          }}
        >
          Add
        </Box>
      </Card>
    </ButtonBase>
  );
}

export default ItemButton;
