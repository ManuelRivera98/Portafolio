import { useState, useEffect, useRef } from 'react';

const useNearScreen = () => {
  const [show, setShow] = useState(false);

  const element = useRef(null);


  useEffect(() => {
    Promise.resolve(typeof window.IntersectionObserver !== 'undefined'
      ? window.IntersectionObserver : import('intersection-observer'))
      .then(() => {
        const observer = new IntersectionObserver((entries) => {
          const { isIntersecting } = entries[0];
          if (isIntersecting) {
            setShow(true);
          }
        });
        observer.observe(element.current);
      });
  }, [element]);

  return { show, element };
};

export default useNearScreen;
