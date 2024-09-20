'use client';

import React, { useState } from "react";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { Menu, MenuItem } from "./ui/Navbar-menu";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu>
        <MenuItem setActive={setActive} active={active} item="Home">
          <Link href="/" onClick={() => setActive("Home")}>Home</Link>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Our Courses">
          <Link href="/courses" onClick={() => setActive("Our Courses")}>Our Courses</Link>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Contact">
          <Link href="/contact" onClick={() => setActive("Contact")}>Contact</Link>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default Navbar;
