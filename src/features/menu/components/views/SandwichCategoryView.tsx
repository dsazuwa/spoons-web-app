import { IGroupedMenuResponse } from '../../api/types';
import CategoryHeader from '../CategoryHeader';
import CategoryNotes from '../CategoryNotes';
import CategorySection from '../CategorySection';
import TagBar from '../TagBar';

interface SandwichCategoryViewProps {
  data: IGroupedMenuResponse;
}

function SandwichCategoryView({ data }: SandwichCategoryViewProps) {
  const { foodie, classics } = data.menu;

  return (
    <>
      <CategoryHeader title='Cheffy Sandwiches' />

      <CategoryNotes notes={foodie.notes} />

      <TagBar category='Cheffy Sandwiches' />

      <CategorySection category={classics.category} items={classics.items} />

      <CategorySection category={foodie.category} items={foodie.items} />
    </>
  );
}
export default SandwichCategoryView;
