'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItem {
  title: string;
  path: string;
  active?: boolean;
}

interface SubNavProps {
  items: NavItem[];
}

export default function SubNav({ items }: SubNavProps) {
  const pathname = usePathname();

  return (
    <nav className="sub_nav">
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <Link
              href={item.path}
              className={pathname === item.path ? 'active' : ''}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
