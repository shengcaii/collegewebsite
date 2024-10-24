"use client"
import { FC, ReactNode, SetStateAction, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
interface Position {
    left: number | string;
    width: number;
    opacity: number;
}

const NavigationBar: FC = () => {
    const [position, setPosition] = useState<Position>({
        left: 0,
        width: 0,
        opacity: 0
    });

    return (
        <>
            <ul className='relative flex items-center justify-between px-1 py-1.5 border border-black bg-white rounded-full'
            onMouseLeave={()=>{
                setPosition((pre)=>({
                    ...pre,
                    opacity:0,
                }))
            }}
            >
                <Tab setPosition={setPosition}><Link href={'/'}>Home</Link></Tab>
                <Tab setPosition={setPosition}><Link href={'/about'}>About</Link></Tab>
                <Tab setPosition={setPosition}>Activity</Tab>
                <Tab setPosition={setPosition}>Campus</Tab>
                <Tab setPosition={setPosition}>Contact</Tab>
                <Cursor position={position} />
            </ul>
        </>
    );
};

export default NavigationBar;

interface TabProps {
    setPosition: (value: SetStateAction<Position>) => void;
    children: ReactNode;
}

const Tab: FC<TabProps> = ({ children, setPosition }) => {
    const ref = useRef<HTMLLIElement | null>(null);
    
    return (
        <li
            ref={ref}
            onMouseEnter={() => {
                if (!ref.current) return;
                const { width } = ref.current.getBoundingClientRect();
                setPosition({
                    width,
                    left: ref.current.offsetLeft,
                    opacity: 1
                });
            }}
            className='cursor-pointer z-20 mix-blend-difference text-white px-2'>{children}</li>
    );
};

interface CursorProps {
    position: Position;
}

const Cursor: FC<CursorProps> = ({ position }) => {
    return (
        <motion.li
            animate={{...position}}
            className='bg-black w-20 h-8 z-0 absolute rounded-full' />
    );
};