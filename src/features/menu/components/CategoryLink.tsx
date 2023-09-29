import { MouseEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';

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
    if (scrollTarget) {
      const appBarHeight = 64;
      const linkAppBarHeight = 22.5;
      const linkAppBarPadding = 10;
      const offset = appBarHeight + linkAppBarHeight + 2 * linkAppBarPadding;

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
        fontSize: '15px',
        color: selected === category ? palette.primary[700] : palette.grey[500],
        fontWeight: selected === category ? 600 : 400,
        textDecoration: 'none',
      }}
    >
      {title}
    </Link>
  );
}

export default CategoryLink;
