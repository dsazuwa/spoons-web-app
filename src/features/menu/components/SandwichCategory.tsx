import * as S from './Category.styled';
import CategorySection from './CategorySection';
import TagBar from './TagBar';

interface SandwichCategoryProps {
  index: number;
  menu: CategoryItemType[];
}

function SandwichCategory({ index, menu }: SandwichCategoryProps) {
  const { category, items, notes } = menu[index];

  const foodies = items.filter((x) => x.subCategory === 'foodie favorites');
  const classics = items.filter((x) => x.subCategory === 'craveable classics');

  return (
    <div id={category}>
      <S.Category alignItems='center' spacing={1.5}>
        <div className='category-name'>{category}</div>

        <div className='category-notes'>{notes}</div>

        <TagBar />

        <CategorySection category='craveable classics' items={classics} />

        <CategorySection category='foodie favorites' items={foodies} />
      </S.Category>
    </div>
  );
}

export default SandwichCategory;
