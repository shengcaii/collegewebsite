import { motion, useMotionValue, useSpring } from 'framer-motion';
import React, { MutableRefObject, useEffect, useState, FC } from 'react';

interface MovingCursorProps {
  stickyElement: MutableRefObject<HTMLElement | null>;
}

const MovingCursor: FC<MovingCursorProps> = ({ stickyElement }) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const cursorSize: number = isHover ? 30 : 12;
  const mouse = {
    x: useMotionValue<number>(0),
    y: useMotionValue<number>(0),
  };
  const smoothOption = { damping: 20, stiffness: 250, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOption),
    y: useSpring(mouse.y, smoothOption),
  };

  const manageMouseMove = (e: MouseEvent): void => {
    const { clientX, clientY } = e;
    mouse.x.set(clientX - cursorSize / 2);
    mouse.y.set(clientY - cursorSize / 2);
  };

  const manageMouseOver = (): void => {
    const data = stickyElement.current?.getBoundingClientRect()
    console.log(data)
    setIsHover(true);
  };

  const manageMouseLeave = (): void => {
    setIsHover(false);
  };

  useEffect(() => {
    console.log(isHover)
    const stickyRef = stickyElement.current;
    window.addEventListener('mousemove', manageMouseMove);
    if (!stickyRef) return;
    stickyRef.addEventListener('mouseenter', manageMouseOver);
    stickyRef.addEventListener('mouseleave', manageMouseLeave);
    return () => {
      window.removeEventListener('mousemove', manageMouseMove);
      if (!stickyRef) return;
      stickyRef.removeEventListener('mouseenter', manageMouseOver);
      stickyRef.removeEventListener('mouseleave', manageMouseLeave);
    };
  },);

  return (
    <>
      <motion.div
        animate={{ width: cursorSize, height: cursorSize }}
        style={{ left: smoothMouse.x, top: smoothMouse.y }}
        className='fixed top-0 left-0 rounded-full w-4 h-4 bg-black' />
    </>
  );
};

export default MovingCursor;