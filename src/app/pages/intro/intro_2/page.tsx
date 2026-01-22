'use client';

import Image from 'next/image';
import Link from 'next/link';
import SubNav from '@/components/common/SubNav';

const navItems = [
  { title: '메디모아의원 소개', path: '/pages/intro/intro_1' },
  { title: '의료진 소개', path: '/pages/intro/intro_2', active: true },
  { title: '병원 둘러보기', path: '/pages/intro/intro_3' },
  { title: '오시는 길', path: '/pages/intro/intro_4' },
];

export default function Intro2Page() {
  return (
    <>
      {/* Sub Visual - 원본 동일 */}
      <section className="sub_top">
        <div className="sub_top_bg intro" style={{ backgroundImage: 'url(/images/about/intro/sub_intro_bg.png)' }}>
          <div className="sub_top_w">
            <div className="title_box">
              <h2>의료진 소개</h2>
              <p>아이들의 건강한 성장과 발달을 돕는 메디모아의원이 아이와 부모님들을 찾아갑니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sub Navigation */}
      <SubNav items={navItems} />

      {/* 의료진 소개 - 원본 동일: intro_2_new1 */}
      <section>
        <div className="intro_2_new1">
          <img className="pc_block" src="/images/about/intro/intro_2_new1.png" alt="의료진 소개" style={{ width: '100%' }} />
          <img className="mobile_block" src="/images/about/intro/intro_2_new1_m.png" alt="의료진 소개" style={{ width: '100%' }} />
        </div>
      </section>

      {/* 의료진 상세 정보 - 원본 동일: intro_2_1 */}
      <section>
        <div className="intro_2_1">
          <div className="w1280">
            <img className="intro_2_1_1 pc_block" src="/images/about/intro/intro_2_1_img1.svg" alt="" style={{ marginBottom: '40px' }} />
            <img className="intro_2_1_1 mobile_block" src="/images/about/intro/intro_2_1_img1_m.svg" alt="" style={{ marginBottom: '30px', width: '100%' }} />
            <img className="pc_block" src="/images/about/intro/intro_2_1_img2.png" alt="" style={{ width: '100%' }} />
            <img className="mobile_block" src="/images/about/intro/intro_2_1_img2_m.png" alt="" style={{ width: '100%' }} />
          </div>
          {/* 롤링 텍스트 */}
          <div className="roll_wrap" style={{ marginTop: '60px' }}>
            <img src="/images/main/roll_txt.png" alt="" />
            <img src="/images/main/roll_txt.png" alt="" />
          </div>
        </div>
      </section>

      {/* 예약 배너 - 원본 동일: intro_2_2 (예약 링크 제거됨) */}
      <section>
        <div className="intro_2_2 intro_vid_sec">
          <div style={{ position: 'relative' }}>
            <video 
              src="/videos/intro_vid.mp4" 
              autoPlay 
              muted 
              loop 
              playsInline
              style={{ 
                width: '100%', 
                height: 'auto',
                display: 'block'
              }}
            />
            <img className="pc_block" src="/images/about/intro/intro_2_2.png" alt="" style={{ 
              position: 'absolute', 
              top: 0, 
              left: 0, 
              width: '100%', 
              height: '100%',
              objectFit: 'cover',
              pointerEvents: 'none'
            }} />
            <img className="mobile_block" src="/images/about/intro/intro_2_2_m.png" alt="" style={{ 
              position: 'absolute', 
              top: 0, 
              left: 0, 
              width: '100%', 
              height: '100%',
              objectFit: 'cover',
              pointerEvents: 'none'
            }} />
          </div>
        </div>
      </section>

      <style jsx>{`
        .sub_top {
          margin-top: 100px;
        }
        
        .sub_top_bg {
          min-height: 300px;
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .sub_top_w {
          width: 90%;
          max-width: 1280px;
          margin: 0 auto;
        }
        
        .title_box {
          text-align: center;
        }
        
        .title_box h2 {
          font-family: 'PT Bandoche', sans-serif;
          font-size: 48px;
          font-weight: 700;
          color: #262626;
          margin-bottom: 15px;
        }
        
        .title_box p {
          font-family: 'Pretendard', sans-serif;
          font-size: 18px;
          color: #525252;
          line-height: 1.6;
        }
        
        .intro_2_new1 {
          width: 100%;
        }
        
        .intro_2_1 {
          padding: 100px 0;
        }
        
        .w1280 {
          width: 90%;
          max-width: 1280px;
          margin: 0 auto;
        }
        
        .intro_2_2 {
          position: relative;
        }
        
        .roll_wrap {
          display: flex;
          overflow: hidden;
        }
        
        .roll_wrap img {
          max-width: unset;
          animation: rolltxt 20s linear infinite;
          padding-right: 100px;
        }
        
        .roll_wrap img:last-child {
          animation: rolltxt2 20s linear infinite;
        }
        
        @keyframes rolltxt {
          0% { transform: translateX(0); }
          50% { transform: translateX(-100%); }
          50.1% { transform: translateX(100%); }
          100% { transform: translateX(0); }
        }
        
        @keyframes rolltxt2 {
          0% { transform: translateX(0); }
          100% { transform: translateX(-200%); }
        }
        
        .pc_block {
          display: block;
        }
        
        .mobile_block {
          display: none;
        }
        
        @media screen and (max-width: 1024px) {
          .sub_top {
            margin-top: 70px;
          }
          
          .sub_top_bg {
            min-height: 200px;
          }
          
          .title_box h2 {
            font-size: 32px;
          }
          
          .title_box p {
            font-size: 15px;
          }
        }
        
        @media screen and (max-width: 768px) {
          .sub_top {
            margin-top: 60px;
          }
          
          .sub_top_bg {
            min-height: 150px;
          }
          
          .title_box h2 {
            font-size: 26px;
          }
          
          .title_box p {
            font-size: 14px;
          }
          
          .intro_2_1 {
            padding: 60px 0;
          }
          
          .pc_block {
            display: none !important;
          }
          
          .mobile_block {
            display: block !important;
          }
        }
      `}</style>
    </>
  );
}
