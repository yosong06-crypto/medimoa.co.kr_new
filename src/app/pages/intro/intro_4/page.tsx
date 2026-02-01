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
          <div className="sub_tit_wrap">
            <span className="small_txt">Location</span>
            <h3>
              <span className="point">메디모아의원</span> 오시는 길
            </h3>
          </div>

          {/* 지도 */}
          <div
           
           
            style={{
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              marginBottom: '60px',
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=%EC%84%9C%EC%88%98%EC%9B%90%EC%9D%B4%EB%A7%88%ED%8A%B8&zoom=17"
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

      {/* 교통안내 - 표 형식 */}
      <section style={{ padding: '80px 0', background: '#fafafa' }}>
        <div className="w1240">
          <div className="sub_tit_wrap">
            <h3>교통 안내</h3>
          </div>

          <div
            style={{
              background: '#fff',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
            }}
           
          >
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
              }}
            >
              <thead>
                <tr style={{ background: 'var(--primary-500)' }}>
                  <th style={{ padding: '18px 20px', color: '#fff', fontWeight: 600, fontSize: '16px', textAlign: 'left', width: '25%' }}>
                    교통수단
                  </th>
                  <th style={{ padding: '18px 20px', color: '#fff', fontWeight: 600, fontSize: '16px', textAlign: 'left' }}>
                    이용 안내
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '20px', fontWeight: 500, color: 'var(--grayscale-800)', fontSize: '16px', background: 'var(--grayscale-5002)' }}>
                    자가용
                  </td>
                  <td style={{ padding: '20px', color: 'var(--grayscale-60001)', fontSize: '15px', lineHeight: 1.8 }}>
                    네비게이션 <strong style={{ color: 'var(--primary-500)' }}>"서수원이마트"</strong> 또는 <strong style={{ color: 'var(--primary-500)' }}>"메디모아의원"</strong> 검색<br />
                    이마트 주차장 이용 가능 (3시간 무료)
                  </td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '20px', fontWeight: 500, color: 'var(--grayscale-800)', fontSize: '16px', background: 'var(--grayscale-5002)' }}>
                    버스
                  </td>
                  <td style={{ padding: '20px', color: 'var(--grayscale-60001)', fontSize: '15px', lineHeight: 1.8 }}>
                    <strong style={{ color: 'var(--primary-500)' }}>서수원이마트 정류장</strong> 하차 → 이마트 3층으로 이동
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: '20px', fontWeight: 500, color: 'var(--grayscale-800)', fontSize: '16px', background: 'var(--grayscale-5002)' }}>
                    주차
                  </td>
                  <td style={{ padding: '20px', color: 'var(--grayscale-60001)', fontSize: '15px', lineHeight: 1.8 }}>
                    이마트 주차장 이용 (무료) / 지하 1층 ~ 지상 5층 주차 가능
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
