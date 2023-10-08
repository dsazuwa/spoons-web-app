import Category from './Category';

function SandwichCategory({ data }: { data: GroupedMenuResponseType }) {
  const name = 'cheffy sandwiches';
  const { items } = data.menu[name];

  return <Category id={name} name={name} items={items} />;
}

export default SandwichCategory;
