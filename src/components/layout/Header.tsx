'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const menuItems = [
  {
    title: '메디모아의원',
    path: '/pages/intro/intro_1',
    subMenus: [
      { title: '메디모아의원 소개', path: '/pages/intro/intro_1' },
      { title: '의료진 소개', path: '/pages/intro/intro_2' },
      { title: '병원 둘러보기', path: '/pages/intro/intro_3' },
      { title: '오시는길', path: '/pages/intro/intro_4' },
    ],
  },
  {
    title: '성조숙증 성장 클리닉',
    path: '/pages/puberty/puberty_1',
    subMenus: [
      { title: '성조숙증', path: '/pages/puberty/puberty_1' },
      { title: '저신장', path: '/pages/puberty/puberty_2' },
    ],
  },
  {
    title: '아동발달센터',
    path: '/pages/child/child_1',
    subMenus: [
      { title: '아동발달센터', path: '/pages/child/child_1' },
    ],
  },
  {
    title: '영유아 발달검사',
    path: '/pages/test/test_1',
    subMenus: [
      { title: '국가 영유아검진', path: '/pages/test/test_1' },
      { title: '영유아 발달 정밀 검진', path: '/pages/test/test_2' },
    ],
  },
  {
    title: '일반진료',
    path: '/pages/general/general_1',
    subMenus: [
      { title: '소아청소년과 진료', path: '/pages/general/general_1' },
      { title: '내과진료', path: '/pages/general/general_2' },
    ],
  },
  {
    title: '커뮤니티',
    path: '/pages/community/notice_list',
    subMenus: [
      { title: '공지사항/이벤트', path: '/pages/community/notice_list' },
    ],
  },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    document.body.style.overflow = !mobileMenuOpen ? 'hidden' : '';
  };

  const toggleSubMenu = (index: number) => {
    setActiveMenu(activeMenu === index ? null : index);
  };

  return (
    <>
      <header className={`global_header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="gnb">
          <div className="logo">
            <Link href="/">
              <img
                src="/images/logo/t_logo.svg"
                alt="메디모아"
              />
            </Link>
          </div>

          {/* Desktop Navigation - 개별 드롭다운 방식 */}
          <ul className="nav" onMouseLeave={() => setActiveDropdown(null)}>
            {menuItems.map((menu, index) => (
              <li 
                key={index} 
                className={`nav_menu ${activeDropdown === index ? 'active' : ''}`}
                onMouseEnter={() => setActiveDropdown(index)}
              >
                <Link href={menu.path}>
                  {menu.title}
                </Link>
                {menu.subMenus.length > 0 && (
                  <div className={`drop ${activeDropdown === index ? 'show' : ''}`}>
                    {menu.subMenus.map((subMenu, subIndex) => (
                      <div key={subIndex} className="drop_menu">
                        <Link href={subMenu.path}>{subMenu.title}</Link>
                      </div>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          <div className="side_btn">
            <button
              className={`burger ${mobileMenuOpen ? 'on' : ''}`}
              onClick={toggleMobileMenu}
              aria-label="전체 메뉴 열기"
            >
              <span></span>
              <span></span>
              <span></span>
              <span className="blind">전체 메뉴 열기</span>
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className={`mnav_wrap ${mobileMenuOpen ? 'on' : ''}`}>
            <div>
              <div className="top"></div>
              <ul className="mnav">
                {menuItems.map((menu, index) => (
                  <li key={index} className="mnav_menu">
                    <a
                      href="javascript:void(0);"
                      className={activeMenu === index ? 'on' : ''}
                      onClick={() => toggleSubMenu(index)}
                    >
                      <span>{menu.title}</span>
                    </a>
                    <ul
                      className="mdrop"
                      style={{ display: activeMenu === index ? 'block' : 'none' }}
                    >
                      {menu.subMenus.map((subMenu, subIndex) => (
                        <li key={subIndex} className="mdrop_menu">
                          <Link
                            href={subMenu.path}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subMenu.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
