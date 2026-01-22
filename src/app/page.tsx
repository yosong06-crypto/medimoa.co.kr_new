'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css/effect-fade';

const heroSlides = [
  {
    image: '/images/hero/h_1.png',
    title: '아이들의 건강한 성장을\n함께 응원합니다',
    subtitle: '영유아기부터 청소년기까지 전문 케어',
  },
  {
    image: '/images/hero/h_2.png',
    title: '전문의료진과 함께하는\n맞춤형 진료',
    subtitle: '성장클리닉, 성조숙증, 아동발달 전문',
  },
  {
    image: '/images/hero/h_3.png',
    title: '부모와 아이 모두를 위한\n따뜻한 진료공간',
    subtitle: '원스톱 케어 시스템으로 편리하게',
  },
  {
    image: '/images/hero/h_4.png',
    title: '영유아 건강검진부터\n청소년 성장관리까지',
    subtitle: '체계적인 검사와 꼼꼼한 상담',
  },
  {
    image: '/images/hero/h_5.png',
    title: '아이의 발달을\n세심하게 케어합니다',
    subtitle: '아동발달센터 전문 진료',
  },
  {
    image: '/images/hero/h_6.png',
    title: '건강한 내일을 위한\n오늘의 케어',
    subtitle: '메디모아의원이 함께합니다',
  },
];

const services = [
  {
    title: '성조숙증',
    description: '조기 발견과 적절한 치료로 건강한 성장을',
    image: '/images/main/main_2_img_cover_1.png',
    link: '/pages/puberty/puberty_1',
  },
  {
    title: '저신장',
    description: '성장 잠재력을 최대한 발휘할 수 있도록',
    image: '/images/main/main_2_img_cover_2.png',
    link: '/pages/puberty/puberty_2',
  },
  {
    title: '아동발달센터',
    description: '발달 지연 조기 발견 및 전문 케어',
    image: '/images/main/main_2_img_cover_3.png',
    link: '/pages/child/child_1',
  },
  {
    title: '영유아검진',
    description: '국가 영유아 건강검진 지정병원',
    image: '/images/main/main_2_img_cover_4.png',
    link: '/pages/test/test_1',
  },
  {
    title: '소아청소년과',
    description: '감기부터 예방접종까지 일반 진료',
    image: '/images/main/main_2_img_cover_5.png',
    link: '/pages/general/general_1',
  },
];

const features = [
  {
    icon: '/images/main/main_3_icon1.svg',
    title: '전문의료진',
    description: '풍부한 임상경험의 전문의가 직접 진료합니다',
  },
  {
    icon: '/images/main/main_3_icon1.svg',
    title: '원스톱 케어',
    description: '검사부터 진료까지 한 공간에서 편리하게',
  },
  {
    icon: '/images/main/main_3_icon1.svg',
    title: '맞춤형 치료',
    description: '아이 개개인의 특성에 맞는 맞춤 진료',
  },
  {
    icon: '/images/main/main_3_icon1.svg',
    title: '쾌적한 환경',
    description: '아이들을 위한 편안하고 청결한 진료공간',
  },
];

const notices = [
  {
    id: 1,
    title: '2025년 1월 진료 안내',
    date: '2025.01.15',
    link: '/pages/community/notice_list',
  },
  {
    id: 2,
    title: '연휴 진료 안내',
    date: '2025.01.10',
    link: '/pages/community/notice_list',
  },
  {
    id: 3,
    title: '영유아 건강검진 예약 안내',
    date: '2025.01.05',
    link: '/pages/community/notice_list',
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="main_visual">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          effect="fade"
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          loop={true}
          className="hero-swiper"
        >
          {heroSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="swiper-slide"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '100vh',
                  minHeight: '700px',
                }}
              >
                <div className="slide_content">
                  <h2 style={{ whiteSpace: 'pre-line' }}>{slide.title}</h2>
                  <p>{slide.subtitle}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Section 1 - About */}
      <section className="main_section1">
        <div className="w_1280">
          <div className="con_wrap" data-aos="fade-up">
            <div className="txt_wrap">
              <span className="small_txt">MEDIMOA CLINIC</span>
              <h3>
                아이들의 <span className="point">건강한 성장</span>을
                <br />
                함께 응원합니다
              </h3>
              <p>
                메디모아의원은 영유아기부터 청소년기까지 아이들의 건강한 성장과 발달을 전문적으로
                케어하는 의원입니다. 성장클리닉, 성조숙증, 아동발달센터 등 전문 진료를 통해
                아이들의 건강한 미래를 함께 만들어갑니다.
              </p>
            </div>
            <div className="img_wrap">
              <Image
                src="/images/main/main_1_img1.png"
                alt="메디모아의원"
                width={600}
                height={400}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Services */}
      <section className="main_section2">
        <div className="w_1280">
          <div className="sub_tit_wrap" data-aos="fade-up">
            <span className="small_txt">Our Services</span>
            <h3>진료 분야</h3>
          </div>
          <div className="service_list">
            {services.map((service, index) => (
              <Link
                href={service.link}
                key={index}
                className="service_item"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="img_cover">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={260}
                    height={200}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div className="txt_area">
                  <strong>{service.title}</strong>
                  <p>{service.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 - Features */}
      <section className="main_section3">
        <div className="w_1280">
          <div className="sub_tit_wrap" data-aos="fade-up">
            <span className="small_txt">Why MEDIMOA</span>
            <h3>메디모아의원이 특별한 이유</h3>
          </div>
          <div className="feature_list">
            {features.map((feature, index) => (
              <div
                key={index}
                className="feature_item"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="icon">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={80}
                    height={80}
                  />
                </div>
                <strong>{feature.title}</strong>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 - Info */}
      <section className="main_section4">
        <div className="w_1280">
          <div className="info_wrap" data-aos="fade-up">
            <div className="img_wrap">
              <Image
                src="/images/main/main_4_img1.svg"
                alt="진료 안내"
                width={500}
                height={400}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
            <div className="txt_wrap">
              <h3>진료 안내</h3>
              <div className="info_list">
                <div className="info_item">
                  <div className="text">
                    <strong>평일</strong>
                    <p>09:00 - 19:00</p>
                  </div>
                </div>
                <div className="info_item">
                  <div className="text">
                    <strong>토요일</strong>
                    <p>09:00 - 14:00</p>
                  </div>
                </div>
                <div className="info_item">
                  <div className="text">
                    <strong>점심시간</strong>
                    <p>13:00 - 14:00</p>
                  </div>
                </div>
                <div className="info_item">
                  <div className="text">
                    <strong>휴진</strong>
                    <p>일요일, 공휴일</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 - Notice */}
      <section className="main_section5">
        <div className="w_1280">
          <div className="notice_wrap" data-aos="fade-up">
            <div className="sub_tit_wrap">
              <h3>공지사항</h3>
              <Link href="/pages/community/notice_list">
                더보기 <i className="ri-arrow-right-line"></i>
              </Link>
            </div>
            <div className="notice_list">
              {notices.map((notice) => (
                <Link href={notice.link} key={notice.id} className="notice_item">
                  <span className="date">{notice.date}</span>
                  <p className="title">{notice.title}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 - Map */}
      <section className="main_section6">
        <div className="w_1280">
          <div className="map_wrap" data-aos="fade-up">
            <div className="map_area">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3174.9853760974867!2d127.04983031531646!3d37.29326057985071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b5c9f9f9f9f9f%3A0x9f9f9f9f9f9f9f9f!2z66mU65SU66qo7JWE7J2Y7LmY!5e0!3m2!1sko!2skr!4v1625000000000!5m2!1sko!2skr"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="info_area">
              <h3>오시는 길</h3>
              <p className="address">
                경기도 수원시 영통구 광교중앙로 156
                <br />
                광교퍼스트상가 B동 203호
              </p>
              <p className="tel">031-245-1675</p>
              <div className="hours">
                <p>평일 09:00 - 19:00</p>
                <p>토요일 09:00 - 14:00</p>
                <p>점심시간 13:00 - 14:00</p>
                <p>일요일/공휴일 휴진</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
