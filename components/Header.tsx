import { MenuIcon } from 'lucide-react';
import React, { forwardRef, ReactNode, Ref } from 'react';

interface HeaderProps extends React.HTMLProps<HTMLDivElement> {}

const Header = forwardRef<HTMLDivElement, HeaderProps>(function index(props, ref: Ref<HTMLDivElement>) {
  return (
    <div
      {...props}
      ref={ref}
      className='w-32 h-32 fixed top-5 right-5 bg-sky-400'>
    </div>
  );
});

export default Header;