import { useRef, useEffect, useState } from 'react';

function useScrollPercentage(): [React.RefObject<HTMLDivElement>, number] {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.body.scrollHeight;
      const percentage = (scrollPosition / (fullHeight - windowHeight)) * 100;
      setScrollPercentage(percentage);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return [scrollRef, scrollPercentage];
}

export default useScrollPercentage;
