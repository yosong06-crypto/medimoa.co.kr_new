'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function FloatingMenu() {
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {/* Desktop Floating Area - 항상 표시 */}
      <div className="floating_new">
        <div className="quick_list">
          <div className="quick-item">
            <a
              href="http://pf.kakao.com/_xlxfMPn"
              target="_blank"
              rel="noopener noreferrer"
              title="카카오톡"
            >
              <span className="ico ico-kakao"></span>
              <span className="txt">카카오톡</span>
            </a>
          </div>
          <div className="quick-item">
            <a
              href="https://blog.naver.com/ccolorpeacew80"
              target="_blank"
              rel="noopener noreferrer"
              title="블로그"
            >
              <span className="ico ico-blog"></span>
              <span className="txt">블로그</span>
            </a>
          </div>
          <div className="quick-item phone">
            <a href="tel:031-294-1575" title="대표전화">
              <span className="ico ico-phone"></span>
              <span className="txt">대표전화</span>
              <span className="num">031-294-1575</span>
            </a>
          </div>
          <div className="quick-item phone">
            <a href="tel:031-548-0615" title="아동발달센터">
              <span className="ico ico-phone"></span>
              <span className="txt">발달센터</span>
              <span className="num">031-548-0615</span>
            </a>
          </div>
        </div>
        
        <button
          className={`go_top ${showTopButton ? 'show' : ''}`}
          onClick={scrollToTop}
          aria-label="맨 위로"
        >
          <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 10L10 2L18 10" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Mobile Floating Bar - 하단 고정 */}
      <div className="floating-bar">
        <div className="quick-menu">
          <ul className="quick-list">
            <li className="quick-item">
              <a
                href="http://pf.kakao.com/_xlxfMPn"
                target="_blank"
                rel="noopener noreferrer"
                className="link-quick"
              >
                <span className="ico ico-kakao"></span>
                <span className="txt">카카오톡</span>
              </a>
            </li>
            <li className="quick-item">
              <a
                href="https://blog.naver.com/ccolorpeacew80"
                target="_blank"
                rel="noopener noreferrer"
                className="link-quick"
              >
                <span className="ico ico-blog"></span>
                <span className="txt">블로그</span>
              </a>
            </li>
            <li className="quick-item">
              <a href="tel:031-294-1575" className="link-quick">
                <span className="ico ico-phone"></span>
                <span className="txt">대표전화</span>
              </a>
            </li>
            <li className="quick-item">
              <a href="tel:031-548-0615" className="link-quick">
                <span className="ico ico-phone"></span>
                <span className="txt">발달센터</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <style jsx>{`
        /* Desktop Floating Menu */
        .floating_new {
          position: fixed;
          bottom: 5vw;
          right: 20px;
          z-index: 9999;
        }
        
        .floating_new .quick_list {
          border-radius: 10px;
          background: #eb5945;
          overflow: hidden;
        }
        
        .floating_new .quick-item a {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          color: #fff;
          text-align: center;
          font-family: 'Pretendard', sans-serif;
          font-size: 12px;
          font-weight: 500;
          line-height: 120%;
          letter-spacing: -0.24px;
          padding: 14px 10px;
          transition: background 0.3s;
        }
        
        .floating_new .quick-item a:hover {
          background: rgba(255, 255, 255, 0.15);
        }
        
        .floating_new .quick-item.phone a {
          padding: 12px 10px;
        }
        
        .floating_new .quick-item .num {
          font-size: 10px;
          opacity: 0.9;
          margin-top: 2px;
        }
        
        .floating_new .ico {
          width: 24px;
          height: 24px;
          background-repeat: no-repeat;
          background-position: center;
          background-size: contain;
          display: block;
        }
        
        .floating_new .ico-kakao {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M12 3c-5.5 0-10 3.58-10 8 0 2.79 1.86 5.24 4.66 6.62-.15.53-.96 3.42-1 3.58 0 .15.06.3.17.38.1.08.24.1.36.05.14-.04 3.94-2.6 4.58-3.03.72.1 1.48.15 2.23.15 5.5 0 10-3.58 10-8s-4.5-8-10-8z'/%3E%3C/svg%3E");
        }
        
        .floating_new .ico-blog {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z'/%3E%3C/svg%3E");
        }
        
        .floating_new .ico-phone {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z'/%3E%3C/svg%3E");
        }
        
        .floating_new .go_top {
          margin-top: 10px;
          width: 50px;
          height: 50px;
          border-radius: 10px;
          background: #fff;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          border: none;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s;
        }
        
        .floating_new .go_top.show {
          opacity: 1;
          visibility: visible;
        }
        
        .floating_new .go_top:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 25px rgba(0, 0, 0, 0.2);
        }

        /* Mobile Floating Bar */
        .floating-bar {
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          background: #eb5945;
          z-index: 9998;
          display: none;
        }
        
        .floating-bar .quick-menu {
          padding: 12px 15px;
          padding-bottom: calc(12px + env(safe-area-inset-bottom));
        }
        
        .floating-bar .quick-list {
          display: flex;
          justify-content: space-around;
        }
        
        .floating-bar .quick-item {
          flex: 1;
          position: relative;
        }
        
        .floating-bar .quick-item + .quick-item::before {
          content: '';
          display: block;
          position: absolute;
          top: 50%;
          left: 0;
          width: 1px;
          height: 32px;
          background-color: rgba(255, 255, 255, 0.3);
          transform: translateY(-50%);
        }
        
        .floating-bar .link-quick {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 6px;
          padding: 5px;
        }
        
        .floating-bar .ico {
          width: 22px;
          height: 22px;
          background-repeat: no-repeat;
          background-position: center;
          background-size: contain;
          display: block;
        }
        
        .floating-bar .ico-kakao {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M12 3c-5.5 0-10 3.58-10 8 0 2.79 1.86 5.24 4.66 6.62-.15.53-.96 3.42-1 3.58 0 .15.06.3.17.38.1.08.24.1.36.05.14-.04 3.94-2.6 4.58-3.03.72.1 1.48.15 2.23.15 5.5 0 10-3.58 10-8s-4.5-8-10-8z'/%3E%3C/svg%3E");
        }
        
        .floating-bar .ico-blog {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z'/%3E%3C/svg%3E");
        }
        
        .floating-bar .ico-phone {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z'/%3E%3C/svg%3E");
        }
        
        .floating-bar .txt {
          font-size: 12px;
          line-height: 1.2;
          letter-spacing: -0.48px;
          color: #fff;
          font-weight: 500;
        }

        @media screen and (max-width: 768px) {
          .floating_new {
            display: none !important;
          }
          .floating-bar {
            display: block !important;
          }
        }
        
        @media screen and (min-width: 769px) {
          .floating-bar {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
