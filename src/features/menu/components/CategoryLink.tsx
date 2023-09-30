import { MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Link from '@components/Link';
import { RootState } from '@store';
import palette from '@utils/palette';
import { setSelected } from '../api/menu.slice';

interface CategoryLinkProps {
  title: string;
  category: CategoryType;
}

function CategoryLink({ title, category }: CategoryLinkProps) {
  const dispatch = useDispatch();
  const selected = useSelector((state: RootState) => state.menuState.selected);

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    dispatch(setSelected(category));

    const scrollTarget = document.getElementById(category);
    const appBar = document.getElementById('client-app-bar');
    const categoryToggle = document.getElementById('category-toggle');

    if (scrollTarget && appBar && categoryToggle) {
      const offset = appBar?.offsetHeight + categoryToggle?.offsetHeight;

      window.scrollTo({
        top: scrollTarget.getBoundingClientRect().top + window.scrollY - offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Link
      href={`/menu/#${category}`}
      onClick={handleClick}
      sx={{
        fontSize: { xs: '8px', sm: '10px', md: '12px' },
        color: selected === category ? palette.primary[700] : palette.grey[400],
        fontWeight: selected === category ? 800 : 500,
        textDecoration: 'none',
      }}
    >
      {title}
    </Link>
  );
}

export default CategoryLink;
