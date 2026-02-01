'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import SubNav from '@/components/common/SubNav';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const navItems = [
  { title: '인사말', path: '/pages/intro/intro_1' },
  { title: '의료진', path: '/pages/intro/intro_2' },
  { title: '둘러보기', path: '/pages/intro/intro_3', active: true },
  { title: '오시는길', path: '/pages/intro/intro_4' },
];

const tourImages = [
  { src: '/images/about/tour/1.png', alt: '메디모아의원 내부 1' },
  { src: '/images/about/tour/2.png', alt: '메디모아의원 내부 2' },
  { src: '/images/about/tour/3.png', alt: '메디모아의원 내부 3' },
  { src: '/images/about/tour/4.png', alt: '메디모아의원 내부 4' },
  { src: '/images/about/tour/5.png', alt: '메디모아의원 내부 5' },
  { src: '/images/about/tour/6.png', alt: '메디모아의원 내부 6' },
  { src: '/images/about/tour/7.png', alt: '메디모아의원 내부 7' },
  { src: '/images/about/tour/8.png', alt: '메디모아의원 내부 8' },
  { src: '/images/about/tour/9.png', alt: '메디모아의원 내부 9' },
  { src: '/images/about/tour/10.png', alt: '메디모아의원 내부 10' },
  { src: '/images/about/tour/11.png', alt: '메디모아의원 내부 11' },
  { src: '/images/about/tour/12.png', alt: '메디모아의원 내부 12' },
];

export default function Intro3Page() {
  return (
    <>
      {/* Sub Visual */}
      <div
        className="sub_visual"
        style={{ backgroundImage: 'url(/images/about/intro/sub_intro_bg.png)' }}
      >
        <div className="txt_wrap">
          <h2>둘러보기</h2>
          <p>메디모아의원의 시설을 둘러보세요</p>
        </div>
      </div>

      {/* Sub Navigation */}
      <SubNav items={navItems} />

      {/* 시설 소개 */}
      <section className="layout_about">
        <div className="w1240">
          <div className="sub_tit_wrap" data-aos="fade-up">
            <span className="small_txt">Facility Tour</span>
            <h3>
              <span className="point">쾌적한 진료 환경</span>
            </h3>
            <p>
              아이들이 편안하게 진료받을 수 있는
              <br className="pc_block" />
              청결하고 쾌적한 진료 환경을 갖추고 있습니다.
            </p>
          </div>

          {/* 시설 슬라이더 */}
          <div data-aos="fade-up" data-aos-delay="100">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              loop={true}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              style={{ 
                paddingBottom: '50px',
                '--swiper-navigation-color': 'var(--primary-500)',
                '--swiper-pagination-color': 'var(--primary-500)',
              } as React.CSSProperties}
            >
              {tourImages.map((image, index) => (
                <SwiperSlide key={index}>
                  <div
                    style={{
                      borderRadius: '16px',
                      overflow: 'hidden',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                    }}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={400}
                      height={300}
                      style={{ width: '100%', height: '280px', objectFit: 'cover' }}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* 시설 특징 - 표 형식 */}
      <section style={{ padding: '80px 0', background: '#fafafa' }}>
        <div className="w1240">
          <div className="sub_tit_wrap" data-aos="fade-up">
            <h3>메디모아의원 시설 특징</h3>
          </div>

          <div
            style={{
              background: '#fff',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
            }}
            data-aos="fade-up"
          >
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
              }}
            >
              <thead>
                <tr style={{ background: 'var(--primary-500)' }}>
                  <th style={{ padding: '18px 20px', color: '#fff', fontWeight: 600, fontSize: '16px', textAlign: 'left', width: '30%' }}>
                    시설 구분
                  </th>
                  <th style={{ padding: '18px 20px', color: '#fff', fontWeight: 600, fontSize: '16px', textAlign: 'left' }}>
                    특징
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { title: '쾌적한 대기공간', desc: '넓고 편안한 대기공간에서 진료를 기다리실 수 있습니다.' },
                  { title: '청결한 진료실', desc: '매일 소독과 환기를 통해 청결한 진료 환경을 유지합니다.' },
                  { title: '최신 의료장비', desc: '정확한 검사와 진단을 위한 최신 의료장비를 갖추고 있습니다.' },
                  { title: '아이 친화적 공간', desc: '아이들이 긴장하지 않도록 따뜻하고 친근한 분위기로 꾸몄습니다.' },
                ].map((item, index) => (
                  <tr key={index} style={{ borderBottom: '1px solid #eee' }}>
                    <td style={{ padding: '20px', fontWeight: 500, color: 'var(--grayscale-800)', fontSize: '16px', background: 'var(--grayscale-5002)' }}>
                      {item.title}
                    </td>
                    <td style={{ padding: '20px', color: 'var(--grayscale-60001)', fontSize: '15px', lineHeight: 1.6 }}>
                      {item.desc}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 시설 이미지 갤러리 */}
      <section style={{ padding: '80px 0' }}>
        <div className="w1240">
          <div className="sub_tit_wrap" data-aos="fade-up">
            <h3>시설 갤러리</h3>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '15px',
            }}
            data-aos="fade-up"
          >
            {tourImages.slice(0, 8).map((image, index) => (
              <div
                key={index}
                style={{
                  borderRadius: '12px',
                  overflow: 'hidden',
                  aspectRatio: '4/3',
                }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={300}
                  height={225}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
