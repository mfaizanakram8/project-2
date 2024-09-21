'use client';

import { motion } from "framer-motion";
import Link from "next/link";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  item,
  active,
  children,
}: {
  setActive: (item: string | null) => void; 
  item: string;
  active: string | null; 
  children?: React.ReactNode;
}) => {
  return (
    <div
      onMouseEnter={() => setActive(item)} 
      onMouseLeave={() => setActive(null)} 
      className="relative"
    >
      <motion.p
        transition={transition} 
        className={`cursor-pointer text-white hover:text-gray-300 ${active === item ? 'font-bold' : ''}`} 
      >
        {children}
      </motion.p>
    </div>
  );
};

export const Menu = ({ children }: { children: React.ReactNode }) => {
  return (
    <nav className="relative rounded-full border border-transparent bg-black shadow-input flex justify-center space-x-4 px-8 py-6">
      {children}
    </nav>
  );
};

export const HoveredLink = ({ children, href }: { children: React.ReactNode; href: string }) => {
  return (
    <Link href={href} className="text-gray-300 dark:text-gray-400 hover:text-white">
      {children}
    </Link>
  );
};
