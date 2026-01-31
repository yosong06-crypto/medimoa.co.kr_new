'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade, Navigation } from 'swiper/modules';
import 'swiper/css/effect-fade';

// main_1 히어로 슬라이드 데이터 (원본 동일)
const heroSlides = [
  {
    image: '/images/main/main_1_img1.png',
    subtitle: '우리 아이, 발달이 느린걸까요?\n언어·감각·사회성까지 전문 치료 센터에서 함께합니다.',
    title: '아동발달센터',
  },
  {
    image: '/images/main/main_1_img2.png',
    subtitle: '또래보다 빠른 2차 성징과 작은 키로 고민이신가요?\n메디모아의원에서 소아청소년과 전문의가 함께합니다.',
    title: '성조숙증 성장클리닉',
  },
  {
    image: '/images/main/main_1_img3.png',
    subtitle: '건강한 성장의 첫 걸음!\n국가검진으로 우리 아이 발달을 조기에 체크하세요.',
    title: '영유아 건강검진',
  },
];

// main_2 특별함 데이터 (원본 동일)
const specialFeatures = [
  { text: '소아 · 성장에 특화된\n전문 의료진', image: '/images/main/main_2_img_cover_1.png' },
  { text: '성조숙증 및 성장치료,\n아동발달 분야 풍부한 경험', image: '/images/main/main_2_img_cover_2.png' },
  { text: '전문 치료사와 함께하는\n아동발달센터 운영', image: '/images/main/main_2_img_cover_3.png' },
  { text: '진단부터 치료까지\n원스톱 시스템', image: '/images/main/main_2_img_cover_4.png' },
  { text: '부모와 아이 모두를 위한\n따뜻한 진료환경', image: '/images/main/main_2_img_cover_5.png' },
];

// main_3 진료과목 데이터 (원본 동일)
const treatments = [
  {
    title: '성조숙증 성장 클리닉',
    description: '우리아이 키, 초경, 성조숙,\n비만 등 고민 해결',
    link: '/pages/puberty/puberty_1',
  },
  {
    title: '아동발달센터',
    description: '언어치료, 감각통합치료, 사회성치료 등\n맞춤형 발달 지원',
    link: '/pages/child/child_1',
  },
  {
    title: '영유아 발달 검사',
    description: '영유아 성장속도 점검 및 발달평가와 맞춤형 상담',
    link: '/pages/test/test_2',
  },
  {
    title: '일반진료',
    description: '소아청소년과 진료부터 성인 대사질환까지 케어',
    link: '/pages/general/general_1',
  },
];

// main_6_2 원내 둘러보기 이미지 (원본: 1~12.png)
const tourImages = Array.from({ length: 12 }, (_, i) => `/images/tour/${i + 1}.png`);

export default function Home() {
  const [activeFeature, setActiveFeature] = useState(2); // 중앙 (3번째) 기본 활성화 (원본 동일)
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <>
      {/* main_1: 히어로 슬라이더 */}
      <section className="main_1">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          effect="fade"
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            el: '.main_1 .swiper_pagination',
          }}
          loop={true}
          className="main_1_swiper"
        >
          {heroSlides.map((slide, index) => (
            <SwiperSlide key={index} className="slide_1">
              <div className="img_wrap _cover">
                <img src={slide.image} alt={slide.title} />
                <div className="txt_wrap">
                  <p style={{ whiteSpace: 'pre-line' }}>{slide.subtitle}</p>
                  <strong>{slide.title}</strong>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper_pagination"></div>
        <div className={`controller ${isPlaying ? 'stop' : 'start'}`} onClick={() => setIsPlaying(!isPlaying)}>
          <div className={`stop_btn btn ${isPlaying ? '' : 'off'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 12 14" fill="none">
              <path d="M8 14V0H12V14H8ZM0 14V0H4V14H0Z" fill="white"/>
            </svg>
          </div>
          <div className={`play_btn btn ${isPlaying ? 'off' : ''}`}>
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
              <path fill="white" d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
            </svg>
          </div>
          <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg">
            <circle className="circle circle_0 off" cx="20" cy="20" r="20" fill="none" stroke="#EB5945" strokeWidth="2"/>
          </svg>
        </div>
      </section>

      {/* main_2: 메디모아만의 특별함 (오각형 레이아웃) - 원본 동일 */}
      <section style={{ overflow: 'visible' }}>
        <div className="main_2">
          <div className="inner">
            <div className="polygon" data-aos="fade-up" data-aos-duration="1000">
              <div className="polygon_wrap">
                <div className="polygon_img">
                  <img src="/images/main/main_2_polygon.png" alt="" />
                  <div className="img_cover">
                    {specialFeatures.map((feature, index) => (
                      <img
                        key={index}
                        className={activeFeature === index ? 'on' : ''}
                        src={feature.image}
                        alt=""
                      />
                    ))}
                  </div>
                  <div className="txt_wrap">
                    <span>MEDIMOA MEDICAL CLINIC</span>
                    <strong>메디모아만의<br/>특별함</strong>
                  </div>
                </div>
              </div>
              <div className="polygon_text">
                {specialFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className={activeFeature === index ? 'active' : ''}
                    onMouseEnter={() => setActiveFeature(index)}
                  >
                    <p style={{ whiteSpace: 'pre-line' }}>{feature.text}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* 모바일용 텍스트 - 원본 동일 */}
            <div className="polygon_text_m mobile_block" data-aos="fade-in">
              <p>소아 · 성장에 특화된 전문 의료진</p>
              <p>성조숙증 및 성장치료,<br/>아동발달 분야 풍부한 경험</p>
              <p>전문 치료사와 함께하는<br/>아동발달센터 운영</p>
              <p>진단부터 치료까지 원스톱 시스템</p>
              <p>부모와 아이 모두를 위한<br/>따뜻한 진료환경</p>
            </div>
          </div>
        </div>
      </section>

      {/* main_3: 진료과목 */}
      <section className="main_3_wrap">
        <div className="main_3">
          <div className="inner">
            <div className="tit_wrap" data-aos="fade-up" data-aos-duration="1000">
              <span className="small_txt">MEDIMOA MEDICAL CLINIC</span>
              <h3>메디모아 <span className="txt_red">진료과목</span></h3>
            </div>
            <div className="con_wrap">
              {treatments.map((item, index) => (
                <div key={index} className="con" data-aos="fade-up" data-aos-duration="1000">
                  <Link href={item.link}>
                    <div className="txt_wrap">
                      <strong>{item.title}</strong>
                      <p style={{ whiteSpace: 'pre-line' }}>{item.description}</p>
                    </div>
                    <button className="btn">
                      <img className="btn_img_hover" src="/images/main/main_3_icon1_hover.svg" alt="" />
                      <img className="btn_img" src="/images/main/main_3_icon1.svg" alt="" />
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* main_4: 대표원장 인사말 */}
      <section>
        <div className="main_4">
          <div className="inner">
            <div className="tit_wrap" data-aos="fade-up" data-aos-duration="1000">
              <span className="small_txt">MEDIMOA MEDICAL CLINIC</span>
              <h3>메디모아 <span className="txt_red">대표원장 인사말</span></h3>
            </div>
            <div className="con_wrap">
              <div className="img_wrap" data-aos="fade-right" data-aos-duration="1000">
                <img src="/images/main/main_4_img1.png" alt="고창범 대표원장" />
              </div>
              <div className="txt_wrap" data-aos="fade-left" data-aos-duration="1000">
                <div className="top">
                  <strong>고창범 <span>대표원장</span></strong>
                  <p>소아청소년과 전문의 | 성장의학 전문의</p>
                </div>
                <div className="txt">
                  <p className="slogan">"우리 아이의 바른 성장, 메디모아의원이 함께합니다."</p>
                  <p>안녕하십니까. 메디모아의원 대표원장 고창범입니다.</p>
                  <p>본원은 영유아 건강검진부터 취학 전 아동에게 필요한 사회성, 언어, 인지 발달은 물론, 학부모님들의 깊은 고민인 학습 능력 발달까지 통합적으로 관리하는 발달 전문 의료기관입니다.</p>
                  <p>또한 아이가 자라면서 겪을 수 있는 성조숙증, 조기 사춘기, 키 성장 문제에 대해서도 풍부한 임상 경험을 바탕으로 체계적인 진료 시스템을 갖추고 있습니다.</p>
                  <p>영유아기부터 청소년기까지, 아이마다 다른 고유한 특성과 속도를 존중하며 성장의 전 과정을 책임지는 든든한 평생 주치의가 되겠습니다.</p>
                  <p>감사합니다.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* main_5: 메디모아의원의 강점 */}
      <section>
        <div className="main_5">
          <div className="inner">
            <div className="tit_wrap" data-aos="fade-up" data-aos-duration="1000">
              <span className="small_txt">MEDIMOA MEDICAL CLINIC</span>
              <h3>메디모아의원의 <span className="txt_red">강점</span></h3>
            </div>
            <div className="img_wrap" data-aos="fade-up" data-aos-duration="1000">
              <img src="/images/main/main_5_img1.png" alt="" />
              <img src="/images/main/main_5_img2.png" alt="" />
              <img src="/images/main/main_5_img3.png" alt="" />
            </div>
            <p className="bottom_txt" data-aos="fade-up" data-aos-duration="1000">
              영유아 건강검진부터 아동 발달과 성조숙증에 이르는 청소년기까지 <br className="pc_block"/>
              전문 의료진이 한 공간에서 원스톱 케어 시스템을 운영합니다. <br/>
              항상 따뜻하고 친절한 진료로 아이들과 부모의 마음까지 살피는 의원이 되겠습니다.
            </p>
          </div>
        </div>
      </section>

      {/* main_6: 원내 둘러보기 (NEWS 섹션 제거) */}
      <section>
        <div className="main_6">
          {/* main_6_2: 원내 둘러보기 - 원본 동일 구조 */}
          <div className="main_6_2" data-aos="fade-up" data-aos-duration="1000">
            <div className="inner">
              <div className="tit_wrap">
                <span className="small_txt">MEDIMOA MEDICAL CLINIC</span>
                <h3><span className="txt_red">메디모아 원내 둘러보기</span></h3>
              </div>
              <div className="con_wrap">
                <div className="tabcontent">
                  <div className="tabcon" id="center1">
                    <Swiper
                      modules={[Navigation, Autoplay, Pagination]}
                      spaceBetween={24}
                      slidesPerView={1}
                      loop={true}
                      autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                      }}
                      navigation={{
                        prevEl: '.center1_swiper .swiper_button_prev',
                        nextEl: '.center1_swiper .swiper_button_next',
                      }}
                      pagination={{
                        el: '.center1_swiper .swiper_pagination',
                        type: 'fraction',
                      }}
                      className="center1_swiper"
                    >
                      {tourImages.map((img, index) => (
                        <SwiperSlide key={index}>
                          <div className="img_wrap _cover">
                            <img src={img} alt={`원내 둘러보기 ${index + 1}`} style={{ width: '100%', height: 'auto', borderRadius: '20px' }} />
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                    <div className="controller">
                      <div className="swiper_button_prev navi">
                        <img src="/images/main/main_6_2_prev.svg" alt="이전" />
                      </div>
                      <div className="swiper_pagination"></div>
                      <div className="swiper_button_next navi">
                        <img src="/images/main/main_6_2_next.svg" alt="다음" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="txt_wrap">
                  <div className="txt_inner">
                    <div className="txt center1_txt on">
                      <strong>아동발달센터</strong>
                      <p>쾌적하고 체계화된 시스템</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
