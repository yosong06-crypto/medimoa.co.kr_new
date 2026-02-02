'use client';

import { useState, useEffect } from 'react';

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
      {/* Desktop Floating Area - 원본 동일 */}
      <div className="floating floating_new">
        <div className="floating-box">
          <ul className="quick_list">
            <li className="quick-item">
              <a
                href="http://pf.kakao.com/_xlxfMPn"
                className="link-quick"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="ico ico-kakao"></i>
                <span className="txt">카톡 상담</span>
              </a>
            </li>
            <li className="quick-item">
              <a
                href="https://www.instagram.com/medimoa_/"
                className="link-quick"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="ico ico-ig"></i>
                <span className="txt">인스타그램</span>
              </a>
            </li>
            <li className="quick-item">
              <a
                href="https://blog.naver.com/medimoaped"
                className="link-quick"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="ico ico-blog"></i>
                <span className="txt">블로그</span>
              </a>
            </li>
          </ul>
          <div className={`floating-item go-to-top go_top pc ${showTopButton ? 'show' : ''}`}>
            <button className="btn-floating" onClick={scrollToTop}>
              <i className="ico ico-top"></i>
              <span className="txt">TOP</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Floating Bar - 원본 동일 */}
      <div className="floating floating-bar">
        <div className="quick-menu">
          <ul className="quick-list">
            <li className="quick-item">
              <a
                href="http://pf.kakao.com/_xlxfMPn"
                className="link-quick"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="ico ico-kakao"></i>
                <span className="txt">카카오 문의</span>
              </a>
            </li>
            <li className="quick-item">
              <a
                href="https://blog.naver.com/medimoaped"
                className="link-quick"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="ico ico-blog"></i>
                <span className="txt">블로그</span>
              </a>
            </li>
            <li className="quick-item">
              <a href="tel:031-294-1575" className="link-quick">
                <i className="ico ico-phone"></i>
                <span className="txt">대표전화</span>
              </a>
            </li>
            <li className="quick-item">
              <a href="tel:031-548-0615" className="link-quick">
                <i className="ico ico-kid"></i>
                <span className="txt">아동발달센터</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <style jsx>{`
        /* Desktop Floating Menu - 원본 동일 */
        .floating.floating_new {
          position: fixed;
          bottom: 5vw;
          right: 20px;
          z-index: 99999;
        }
        
        .floating_new .floating-box {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        .floating_new .quick_list {
          border-radius: 10px;
          background: rgb(234, 105, 87);
          overflow: hidden;
        }
        
        .floating_new .quick-item .link-quick {
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
          padding: 14px 12px;
          transition: background 0.3s;
        }
        
        .floating_new .quick-item .link-quick:hover {
          background: rgba(255, 255, 255, 0.15);
        }
        
        .floating_new .ico {
          width: 20px;
          height: 20px;
          background-repeat: no-repeat;
          background-position: center;
          background-size: 100%;
          display: block;
          transition: 0.3s ease-in-out;
        }
        
        .floating_new .ico-kakao {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M12 3c-5.5 0-10 3.58-10 8 0 2.79 1.86 5.24 4.66 6.62-.15.53-.96 3.42-1 3.58 0 .15.06.3.17.38.1.08.24.1.36.05.14-.04 3.94-2.6 4.58-3.03.72.1 1.48.15 2.23.15 5.5 0 10-3.58 10-8s-4.5-8-10-8z'/%3E%3C/svg%3E");
        }
        
        .floating_new .ico-ig {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z'/%3E%3C/svg%3E");
        }
        
        .floating_new .ico-blog {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z'/%3E%3C/svg%3E");
        }
        
        .floating_new .ico-top {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23333'%3E%3Cpath d='M12 4l-8 8h5v8h6v-8h5z'/%3E%3C/svg%3E");
        }
        
        .floating_new .go_top {
          margin-top: 10px;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s;
        }
        
        .floating_new .go_top.show {
          opacity: 1;
          visibility: visible;
        }
        
        .floating_new .go_top .btn-floating {
          width: 50px;
          height: 50px;
          border-radius: 10px;
          background: #fff;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2px;
          cursor: pointer;
          border: none;
          transition: all 0.3s;
        }
        
        .floating_new .go_top .btn-floating:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 25px rgba(0, 0, 0, 0.2);
        }
        
        .floating_new .go_top .txt {
          font-size: 10px;
          color: #333;
          font-weight: 600;
        }

        /* Mobile Floating Bar - 원본 동일 */
        .floating.floating-bar {
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          background-color: rgb(223, 114, 98);
          z-index: 999;
          display: none;
        }
        
        .floating-bar .quick-menu {
          padding: 10px 8px;
          padding-bottom: calc(10px + env(safe-area-inset-bottom));
          box-sizing: border-box;
          width: 100%;
          max-width: 100vw;
          overflow: hidden;
        }
        
        .floating-bar .quick-list {
          display: flex;
          width: 100%;
          list-style: none;
          margin: 0;
          padding: 0;
          justify-content: space-between;
        }
        
        .floating-bar .quick-item {
          flex: 1 1 25%;
          position: relative;
          min-width: 0;
          max-width: 25%;
        }
        
        .floating-bar .quick-item + .quick-item::before {
          content: '';
          display: block;
          position: absolute;
          top: 50%;
          left: 0;
          width: 1px;
          height: 44px;
          background-color: rgba(255, 255, 255, 0.5);
          transform: translateY(-50%);
        }
        
        .floating-bar .quick-item .link-quick {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 4px;
          position: relative;
          padding: 2px;
          text-decoration: none;
        }
        
        .floating-bar .ico {
          width: 18px;
          height: 18px;
          background-repeat: no-repeat;
          background-position: center;
          background-size: contain;
          display: block;
          flex-shrink: 0;
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
        
        .floating-bar .ico-kid {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z'/%3E%3C/svg%3E");
        }
        
        .floating-bar .txt {
          font-size: 10px;
          line-height: 1.2;
          letter-spacing: -0.3px;
          color: #fff;
          font-weight: 500;
          white-space: nowrap;
          text-align: center;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 100%;
        }

        /* Responsive - 원본 동일 */
        @media screen and (max-width: 768px) {
          .floating.floating_new {
            display: none !important;
          }
          .floating.floating-bar {
            display: block !important;
          }
          .floating-bar .quick-item + .quick-item::before {
            height: 30px;
          }
        }
        
        @media screen and (max-width: 360px) {
          .floating-bar .quick-menu {
            padding: 8px 4px;
            padding-bottom: calc(8px + env(safe-area-inset-bottom));
          }
          .floating-bar .txt {
            font-size: 9px;
          }
          .floating-bar .ico {
            width: 16px;
            height: 16px;
          }
          .floating-bar .quick-item .link-quick {
            gap: 3px;
          }
        }
        
        @media screen and (min-width: 769px) {
          .floating.floating-bar {
            display: none !important;
          }
        }
        
        /* 아주 작은 화면에서 텍스트 크기 조정 */
        @media screen and (max-width: 360px) {
          .floating-bar .txt {
            font-size: 10px;
          }
          .floating-bar .quick-menu {
            padding: 10px 10px;
            padding-bottom: calc(10px + env(safe-area-inset-bottom));
          }
          .floating-bar .quick-item .link-quick {
            gap: 6px;
            padding: 0 3px;
          }
        }
      `}</style>
    </>
  );
}
