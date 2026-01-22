'use client';

import Link from 'next/link';

interface SubNavItem {
  title: string;
  path: string;
  active?: boolean;
}

interface SubPageLayoutProps {
  title: string;
  subtitle?: string;
  breadcrumb: string[];
  subNav?: SubNavItem[];
  backgroundImage?: string;
  children: React.ReactNode;
}

export default function SubPageLayout({
  title,
  subtitle,
  breadcrumb,
  subNav,
  backgroundImage = '/images/hero/h_1.png',
  children
}: SubPageLayoutProps) {
  return (
    <>
      {/* Page Header */}
      <div 
        className="sub_visual"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '400px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '100px'
        }}
      >
        <div className="sub_visual_inner" style={{ textAlign: 'center', color: '#fff' }}>
          <h2 style={{ 
            fontSize: '48px', 
            fontWeight: '700', 
            marginBottom: '15px',
            textShadow: '0 2px 20px rgba(0,0,0,0.3)'
          }}>
            {title}
          </h2>
          {subtitle && (
            <p style={{ 
              fontSize: '18px', 
              opacity: 0.9,
              textShadow: '0 1px 10px rgba(0,0,0,0.3)'
            }}>
              {subtitle}
            </p>
          )}
          <div className="breadcrumb" style={{
            marginTop: '30px',
            display: 'flex',
            justifyContent: 'center',
            gap: '10px',
            fontSize: '14px',
            opacity: 0.8
          }}>
            <Link href="/" style={{ color: '#fff' }}>HOME</Link>
            {breadcrumb.map((item, idx) => (
              <span key={idx} style={{ color: '#fff' }}>
                &gt; {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Sub Navigation */}
      {subNav && subNav.length > 0 && (
        <div className="sub_nav" style={{
          background: '#fff',
          borderBottom: '1px solid #eee',
          position: 'sticky',
          top: '100px',
          zIndex: 100
        }}>
          <div style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 20px',
            display: 'flex',
            justifyContent: 'center',
            gap: '5px'
          }}>
            {subNav.map((item, idx) => (
              <Link 
                key={idx}
                href={item.path}
                style={{
                  display: 'block',
                  padding: '20px 30px',
                  fontSize: '15px',
                  fontWeight: item.active ? '600' : '400',
                  color: item.active ? '#eb5945' : '#666',
                  borderBottom: item.active ? '3px solid #eb5945' : '3px solid transparent',
                  transition: 'all 0.2s'
                }}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Page Content */}
      <div className="sub_content" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="w_1280">
          {children}
        </div>
      </div>
    </>
  );
}
