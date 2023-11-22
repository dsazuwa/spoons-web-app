import ItemGrid from './ItemGrid';

interface CategorySectionProps {
  category: string;
  items: MenuItemType[];
}

function CategorySection({ category, items }: CategorySectionProps) {
  return (
    <>
      <div className='category-section'>{category}</div>
      <ItemGrid items={items} />
    </>
  );
}

export default CategorySection;
