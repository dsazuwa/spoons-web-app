import CardMedia from '@mui/material/CardMedia';

import * as S from './ItemCard.styled';

interface ItemCardProps {
  item: MenuItemType;
}

function ItemCard({ item }: ItemCardProps) {
  const { name, description, price, photoUrl } = item;
  const hasBasePrice = !!price;

  return (
    <S.Card variant='outlined'>
      <S.Stack spacing='4px'>
        <S.Box>
          <S.Name>{name}</S.Name>

          {!hasBasePrice && <S.ArrowIcon />}
        </S.Box>

        {description && (
          <S.Description variant='body2'>{description}</S.Description>
        )}

        {hasBasePrice && <S.Price>{`$${Number(price).toFixed(2)}`}</S.Price>}
      </S.Stack>

      <CardMedia
        component='img'
        image={`/menu-items/${photoUrl}`}
        alt={name}
        sx={{ width: { xs: '90px', sm: '100px', md: '150px' } }}
      />

      <S.AddButton>Add</S.AddButton>
    </S.Card>
  );
}

export default ItemCard;
