import * as S from './Category.styled';
import ItemGrid from './ItemGrid';
import TagBar from './TagBar';

interface StandardCategoryProps {
  index: number;
  menu: CategoryItemType[];
}

function StandardCategory({ index, menu }: StandardCategoryProps) {
  const { category, notes, items } = menu[index];

  return (
    <S.Category id={category} alignItems='center' spacing={{ xs: 1, sm: 1.5 }}>
      <div className='category-name'>{category}</div>

      <div className='category-notes'>{notes}</div>

      <TagBar />

      <ItemGrid items={items} />
    </S.Category>
  );
}

export default StandardCategory;
