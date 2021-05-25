import { useEffect, useState } from 'react';
import { getMaxScreenWidth, ScreenSize } from './constants';

export const useScreenWidth = () => {
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const resize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  return screenWidth;
};

export const useScreenType = (): ScreenSize => {
  const screenSize = useScreenWidth();
  return getMaxScreenWidth(screenSize)[1];
};
