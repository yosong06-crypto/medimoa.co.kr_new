'use client';

import Image from 'next/image';
import SubNav from '@/components/common/SubNav';

const navItems = [
  { title: '인사말', path: '/pages/intro/intro_1' },
  { title: '의료진', path: '/pages/intro/intro_2' },
  { title: '둘러보기', path: '/pages/intro/intro_3' },
  { title: '오시는길', path: '/pages/intro/intro_4', active: true },
];

export default function Intro4Page() {
  return (
    <>
      {/* Sub Visual */}
      <div
        className="sub_visual"
        style={{ backgroundImage: 'url(/images/about/intro/sub_intro_bg.png)' }}
      >
        <div className="txt_wrap">
          <h2>오시는 길</h2>
          <p>메디모아의원으로 찾아오시는 방법을 안내합니다</p>
        </div>
      </div>

      {/* Sub Navigation */}
      <SubNav items={navItems} />

      {/* 지도 및 위치 정보 */}
      <section className="layout_about">
        <div className="w1240">
          <div className="sub_tit_wrap" data-aos="fade-up">
            <span className="small_txt">Location</span>
            <h3>
              <span className="point">메디모아의원</span> 오시는 길
            </h3>
          </div>

          {/* 지도 */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            style={{
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              marginBottom: '60px',
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3174.5!2d127.05!3d37.29!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDE3JzI0LjAiTiAxMjfCsDAzJzAwLjAiRQ!5e0!3m2!1sko!2skr!4v1625000000000!5m2!1sko!2skr"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* 위치 정보 카드 */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '30px',
            }}
          >
            {/* 주소 */}
            <div
              style={{
                background: 'var(--grayscale-5002)',
                borderRadius: '20px',
                padding: '40px 30px',
              }}
              data-aos="fade-up"
            >
              <div
                style={{
                  width: '60px',
                  height: '60px',
                  background: 'var(--primary-500)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                }}
              >
                <i
                  className="ri-map-pin-line"
                  style={{ fontSize: '28px', color: '#fff' }}
                ></i>
              </div>
              <h4
                style={{
                  fontFamily: 'Pretendard',
                  fontSize: '20px',
                  fontWeight: 600,
                  marginBottom: '12px',
                  color: 'var(--grayscale-800)',
                }}
              >
                주소
              </h4>
              <p
                style={{
                  fontFamily: 'Pretendard',
                  fontSize: '16px',
                  fontWeight: 300,
                  color: 'var(--grayscale-60001)',
                  lineHeight: 1.8,
                }}
              >
                경기 수원시 권선구 수인로 291
                <br />
                서수원이마트 3층 메디모아의원
              </p>
            </div>

            {/* 전화번호 */}
            <div
              style={{
                background: 'var(--grayscale-5002)',
                borderRadius: '20px',
                padding: '40px 30px',
              }}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div
                style={{
                  width: '60px',
                  height: '60px',
                  background: 'var(--primary-500)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                }}
              >
                <i
                  className="ri-phone-line"
                  style={{ fontSize: '28px', color: '#fff' }}
                ></i>
              </div>
              <h4
                style={{
                  fontFamily: 'Pretendard',
                  fontSize: '20px',
                  fontWeight: 600,
                  marginBottom: '12px',
                  color: 'var(--grayscale-800)',
                }}
              >
                전화번호
              </h4>
              <p
                style={{
                  fontFamily: 'Pretendard',
                  fontSize: '16px',
                  fontWeight: 300,
                  color: 'var(--grayscale-60001)',
                  lineHeight: 1.8,
                }}
              >
                대표번호: <strong style={{ color: 'var(--primary-500)' }}>031-294-1575</strong>
                <br />
                아동발달센터: 031-548-0615
              </p>
            </div>

            {/* 진료시간 */}
            <div
              style={{
                background: 'var(--grayscale-5002)',
                borderRadius: '20px',
                padding: '40px 30px',
              }}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div
                style={{
                  width: '60px',
                  height: '60px',
                  background: 'var(--primary-500)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                }}
              >
                <i
                  className="ri-time-line"
                  style={{ fontSize: '28px', color: '#fff' }}
                ></i>
              </div>
              <h4
                style={{
                  fontFamily: 'Pretendard',
                  fontSize: '20px',
                  fontWeight: 600,
                  marginBottom: '12px',
                  color: 'var(--grayscale-800)',
                }}
              >
                진료시간
              </h4>
              <p
                style={{
                  fontFamily: 'Pretendard',
                  fontSize: '16px',
                  fontWeight: 300,
                  color: 'var(--grayscale-60001)',
                  lineHeight: 1.8,
                }}
              >
                평일: 10:00 - 19:00
                <br />
                주말/공휴일: 10:00 - 14:00
                <br />
                <span style={{ color: 'var(--primary-500)' }}>
                  * 둘째·넷째주 일요일 휴진
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 교통안내 */}
      <section style={{ padding: '80px 0', background: '#fafafa' }}>
        <div className="w1240">
          <div className="sub_tit_wrap" data-aos="fade-up">
            <h3>교통 안내</h3>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '30px',
            }}
          >
            {/* 자가용 */}
            <div
              style={{
                background: '#fff',
                borderRadius: '20px',
                padding: '40px 30px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
              }}
              data-aos="fade-up"
            >
              <div
                style={{
                  fontSize: '48px',
                  marginBottom: '20px',
                }}
              >
                🚗
              </div>
              <h4
                style={{
                  fontFamily: 'Pretendard',
                  fontSize: '20px',
                  fontWeight: 600,
                  marginBottom: '15px',
                  color: 'var(--grayscale-800)',
                }}
              >
                자가용 이용 시
              </h4>
              <p
                style={{
                  fontFamily: 'Pretendard',
                  fontSize: '15px',
                  fontWeight: 300,
                  color: 'var(--grayscale-60001)',
                  lineHeight: 1.8,
                }}
              >
                네비게이션 "서수원이마트" 또는 "메디모아의원" 검색
                <br />
                이마트 주차장 이용 가능 (3시간 무료)
              </p>
            </div>

            {/* 대중교통 */}
            <div
              style={{
                background: '#fff',
                borderRadius: '20px',
                padding: '40px 30px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
              }}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div
                style={{
                  fontSize: '48px',
                  marginBottom: '20px',
                }}
              >
                🚌
              </div>
              <h4
                style={{
                  fontFamily: 'Pretendard',
                  fontSize: '20px',
                  fontWeight: 600,
                  marginBottom: '15px',
                  color: 'var(--grayscale-800)',
                }}
              >
                버스 이용 시
              </h4>
              <p
                style={{
                  fontFamily: 'Pretendard',
                  fontSize: '15px',
                  fontWeight: 300,
                  color: 'var(--grayscale-60001)',
                  lineHeight: 1.8,
                }}
              >
                서수원이마트 정류장 하차
                <br />
                이마트 3층으로 이동
              </p>
            </div>

            {/* 주차안내 */}
            <div
              style={{
                background: '#fff',
                borderRadius: '20px',
                padding: '40px 30px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
              }}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div
                style={{
                  fontSize: '48px',
                  marginBottom: '20px',
                }}
              >
                🅿️
              </div>
              <h4
                style={{
                  fontFamily: 'Pretendard',
                  fontSize: '20px',
                  fontWeight: 600,
                  marginBottom: '15px',
                  color: 'var(--grayscale-800)',
                }}
              >
                주차 안내
              </h4>
              <p
                style={{
                  fontFamily: 'Pretendard',
                  fontSize: '15px',
                  fontWeight: 300,
                  color: 'var(--grayscale-60001)',
                  lineHeight: 1.8,
                }}
              >
                이마트 주차장 이용 (무료)
                <br />
                지하 1층 ~ 지상 5층 주차 가능
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
