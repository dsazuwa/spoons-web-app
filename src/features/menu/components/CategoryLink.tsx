import { MouseEvent } from 'react';

import Link from '@components/Link';

interface CategoryLinkProps {
  to: string;
  title: string;
}

function CategoryLink({ to, title }: CategoryLinkProps) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const scrollTarget = document.getElementById(to);
    const appBarHeight = 64;
    const linkAppBarHeight = 22.5;
    const linkAppBarPadding = 10;
    const offset = appBarHeight + linkAppBarHeight + 2 * linkAppBarPadding;

    if (scrollTarget)
      window.scrollTo({
        top: scrollTarget.getBoundingClientRect().top + window.scrollY - offset,
        behavior: 'smooth',
      });
  };

  return (
    <Link href={`/menu/#${to}`} onClick={handleClick}>
      {title}
    </Link>
  );
}

export default CategoryLink;
