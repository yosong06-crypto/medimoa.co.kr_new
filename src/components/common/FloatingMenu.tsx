'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function FloatingMenu() {
  const [showTopButton, setShowTopButton] = useState(false);
  const [quickOpen, setQuickOpen] = useState(false);

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
      {/* Desktop Floating Area */}
      <div className="floating_new" style={{ display: showTopButton ? 'block' : 'none' }}>
        <div className="quick_list">
          <div className="quick-item">
            <a
              href="https://blog.naver.com/medimoa_clinic"
              target="_blank"
              rel="noopener noreferrer"
              title="블로그"
            >
              <span
                className="ico"
                style={{
                  backgroundImage: 'url(/images/common/ico-blog-w.svg)',
                  width: '20px',
                  height: '20px',
                }}
              ></span>
              <span className="txt">블로그</span>
            </a>
          </div>
          <div className="quick-item">
            <a
              href="https://www.instagram.com/medimoa_clinic"
              target="_blank"
              rel="noopener noreferrer"
              title="인스타그램"
            >
              <span
                className="ico"
                style={{
                  backgroundImage: 'url(/images/common/ico-ig-w.svg)',
                  width: '20px',
                  height: '20px',
                }}
              ></span>
              <span className="txt">인스타</span>
            </a>
          </div>
          <div className="quick-item">
            <a
              href="http://pf.kakao.com/_medimoa"
              target="_blank"
              rel="noopener noreferrer"
              title="카카오톡"
            >
              <span
                className="ico"
                style={{
                  backgroundImage: 'url(/images/common/ico-kakao-w.svg)',
                  width: '20px',
                  height: '20px',
                }}
              ></span>
              <span className="txt">카카오</span>
            </a>
          </div>
          <div className="quick-item">
            <a href="tel:031-245-1675" title="전화">
              <span
                className="ico"
                style={{
                  backgroundImage: 'url(/images/common/ico-phone-w.svg)',
                  width: '20px',
                  height: '20px',
                }}
              ></span>
              <span className="txt">전화</span>
            </a>
          </div>
        </div>
        
        <button
          className="go_top"
          onClick={scrollToTop}
          style={{
            marginTop: '10px',
            width: '50px',
            height: '50px',
            borderRadius: '10px',
            background: '#fff',
            boxShadow: '0 0 20px rgba(0,0,0,0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          <Image
            src="/images/common/arw-ftop-bk.svg"
            alt="맨 위로"
            width={20}
            height={20}
          />
        </button>
      </div>

      {/* Mobile Floating Bar */}
      <div className="floating-bar mobile_block">
        <div className="quick-menu">
          <ul className="quick-list">
            <li className="quick-item">
              <a
                href="https://blog.naver.com/medimoa_clinic"
                target="_blank"
                rel="noopener noreferrer"
                className="link-quick"
              >
                <span
                  className="ico ico-blog"
                  style={{ backgroundImage: 'url(/images/common/ico-blog-w.svg)' }}
                ></span>
                <span className="txt">블로그</span>
              </a>
            </li>
            <li className="quick-item">
              <a
                href="https://www.instagram.com/medimoa_clinic"
                target="_blank"
                rel="noopener noreferrer"
                className="link-quick"
              >
                <span
                  className="ico ico-ig"
                  style={{ backgroundImage: 'url(/images/common/ico-ig-w.svg)' }}
                ></span>
                <span className="txt">인스타</span>
              </a>
            </li>
            <li className="quick-item">
              <a
                href="http://pf.kakao.com/_medimoa"
                target="_blank"
                rel="noopener noreferrer"
                className="link-quick"
              >
                <span
                  className="ico ico-kakao"
                  style={{ backgroundImage: 'url(/images/common/ico-kakao-w.svg)' }}
                ></span>
                <span className="txt">카카오</span>
              </a>
            </li>
            <li className="quick-item">
              <a href="tel:031-245-1675" className="link-quick">
                <span
                  className="ico ico-phone"
                  style={{ backgroundImage: 'url(/images/common/ico-phone-w.svg)' }}
                ></span>
                <span className="txt">전화</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <style jsx>{`
        .floating_new {
          position: fixed;
          bottom: 5vw;
          right: 20px;
          z-index: 99999;
        }
        .floating_new .quick_list {
          border-radius: 10px;
          background: rgb(234, 105, 87);
        }
        .floating_new .quick-item a {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          color: #fff;
          text-align: center;
          font-family: 'Pretendard', sans-serif;
          font-size: 13px;
          font-weight: 500;
          line-height: 120%;
          letter-spacing: -0.26px;
          padding: 15px 8px;
          border-radius: 10px;
          transition: 0.3s;
        }
        .floating_new .quick-item a:hover {
          background: rgb(239, 137, 123);
        }
        .floating_new .ico {
          width: 20px;
          height: 20px;
          background-repeat: no-repeat;
          background-position: center;
          background-size: 100%;
        }
        .floating-bar {
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          background-color: rgb(223, 114, 98);
          z-index: 999;
        }
        .floating-bar .quick-menu {
          padding: 13px 20px;
        }
        .floating-bar .quick-list {
          display: flex;
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
          height: 44px;
          background-color: #fff;
          transform: translateY(-50%);
        }
        .floating-bar .link-quick {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 8px;
          padding: 0 1.4rem;
        }
        .floating-bar .ico {
          width: 20px;
          height: 20px;
          background-repeat: no-repeat;
          background-position: center;
          background-size: 100%;
        }
        .floating-bar .txt {
          font-size: 14px;
          line-height: 1.2;
          letter-spacing: -0.56px;
          color: #fff;
        }
        @media screen and (min-width: 769px) {
          .floating-bar {
            display: none !important;
          }
        }
        @media screen and (max-width: 768px) {
          .floating_new {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
