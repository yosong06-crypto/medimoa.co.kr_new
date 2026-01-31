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

  const handleClick = () => {
    // 페이지 맨 위로 스크롤
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <nav className="sub_nav">
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <Link
              href={item.path}
              className={pathname === item.path ? 'active' : ''}
              onClick={handleClick}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
