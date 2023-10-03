import Category from './Category';

function SandwichCategory({ data }: { data: GroupedMenuResponseType }) {
  const foodie = data.menu.foodie;
  const classics = data.menu.classics;

  const items = [...foodie.items, ...classics.items];

  return <Category name='sandwiches' items={items} />;
}

export default SandwichCategory;
