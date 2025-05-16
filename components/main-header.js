import React from 'react';
import NavLink from 'next/link';

export default function MainHeader() {
  return (
    <header>
      <NavLink href="/">Home</NavLink>
      <NavLink href="/news">News</NavLink>
    </header>
  );
}
