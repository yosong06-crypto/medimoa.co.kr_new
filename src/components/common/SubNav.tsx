'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

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
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    // 먼저 맨 위로 스크롤
    window.scrollTo({ top: 0, behavior: 'instant' });
    // 그 다음 페이지 이동
    router.push(path);
  };

  return (
    <nav className="sub_nav">
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <Link
              href={item.path}
              className={pathname === item.path ? 'active' : ''}
              onClick={(e) => handleClick(e, item.path)}
              scroll={true}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
