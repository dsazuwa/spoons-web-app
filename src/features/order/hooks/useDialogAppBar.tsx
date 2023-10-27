import { useEffect, useState } from 'react';

const useDialogAppBar = () => {
  const [ready, setReady] = useState(true);
  const [scrolledPast, setScrolledPast] = useState(false);

  useEffect(() => {
    const appBar = document.querySelector('#dialog-app-bar');
    const observedElement = document.querySelector('#dialog-app-bar-anchor');

    if (!appBar || !observedElement) {
      setReady(false);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const appBarRect = appBar.getBoundingClientRect();
        const observedRect = entries[0].target.getBoundingClientRect();

        setScrolledPast(observedRect.bottom < appBarRect.bottom);
      },
      { threshold: 0 },
    );

    observer.observe(observedElement);
  }, [ready]);

  return { scrolledPast, setScrolledPast };
};

export default useDialogAppBar;
