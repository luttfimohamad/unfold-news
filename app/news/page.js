import React from 'react';
import Link from 'next/link';

export default function NewsPage() {
  return (
    <div>
      <h1>News Page</h1>
      <ul>
        <li>
          <Link href="/news/1">news 1</Link>
        </li>
        <li>
          <Link href="/news/2">news 2</Link>
        </li>
        <li>
          <Link href="/news/3">news 3</Link>
        </li>
      </ul>
    </div>
  );
}
