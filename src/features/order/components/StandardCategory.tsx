import React from 'react';
import Category from './Category';

interface StandardCategoryProps {
  data: GroupedMenuResponseType;
  name: string;
}

function StandardCategory({ data, name }: StandardCategoryProps) {
  const { category, items } = (
    data.menu as Record<string, PublicCategoryItemType>
  )[name];

  return <Category name={category} items={items} />;
}

export default StandardCategory;
