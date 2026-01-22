'use client';

import './globals.css';
import '../styles/header.css';
import '../styles/footer.css';
import '../styles/main.css';
import '../styles/sub.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingMenu from '@/components/common/FloatingMenu';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 400,
      easing: 'ease',
      once: false,
    });

    // Lenis smooth scroll (optional)
    const initLenis = async () => {
      try {
        const Lenis = (await import('lenis')).default;
        const lenis = new Lenis({
          duration: 2.3,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });

        function raf(time: number) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
      } catch (error) {
        console.log('Lenis not available');
      }
    };

    initLenis();
  }, []);

  return (
    <html lang="ko">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
        <meta name="format-detection" content="telephone=no, address=no, email=no" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet" />
        <meta name="description" content="영유아 건강검진부터 아동 발달과 성조숙증에 이르는 청소년기까지 전문의료진이 한 공간에서 원스톱 케어 시스템을 운영하는 메디모아의원입니다." />
        <meta name="keywords" content="메디모아의원, 수원소아과, 수원아동발달센터" />
        <meta name="author" content="WACUS" />
        <meta property="og:title" content="메디모아의원" />
        <meta property="og:description" content="영유아 건강검진부터 아동 발달과 성조숙증에 이르는 청소년기까지 전문의료진이 한 공간에서 원스톱 케어 시스템을 운영하는 메디모아의원입니다." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ko_KR" />
      </head>
      <body>
        <h1 className="blind">아이들의 발달과 성장을 전문 진료하는 메디모아의원</h1>
        <h2 className="blind">메디모아의원은 영유아 건강검진부터 아동 발달과 성조숙증에 이르는 청소년기까지 원스톱 케어 시스템을 제공합니다.</h2>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingMenu />
      </body>
    </html>
  );
}
