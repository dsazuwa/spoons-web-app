import { IGroupedMenuResponse } from '../../api/types';
import CategoryHeader from '../CategoryHeader';
import CategoryNotes from '../CategoryNotes';
import ItemGrid from '../ItemGrid';
import TagBar from '../TagBar';

interface StandardCategoryViewProps {
  data: IGroupedMenuResponse;
  name: string;
}

function StandardCategoryView({ data, name }: StandardCategoryViewProps) {
  const { category, notes, items } = (
    data.menu as Record<string, PublicCategoryItemType>
  )[name];

  return (
    <>
      <CategoryHeader title={category} />

      <CategoryNotes notes={notes} />

      <TagBar category={category} />

      <ItemGrid items={items} />
    </>
  );
}
export default StandardCategoryView;
