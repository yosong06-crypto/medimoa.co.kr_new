'use client';

import Image from 'next/image';
import SubNav from '@/components/common/SubNav';

const navItems = [
  { title: '국가영유아검진', path: '/pages/test/test_1', active: true },
  { title: '영유아발달검진', path: '/pages/test/test_2' },
];

export default function Test1Page() {
  return (
    <>
      {/* Sub Visual */}
      <div
        className="sub_visual"
        style={{ backgroundImage: 'url(/images/backgrounds/sub_test_bg.png)' }}
      >
        <div className="txt_wrap">
          <h2>국가영유아검진</h2>
          <p>국가에서 지원하는 영유아 건강검진 지정병원</p>
        </div>
      </div>

      {/* Sub Navigation */}
      <SubNav items={navItems} />

      {/* 국가영유아검진 소개 */}
      <section className="layout_about">
        <div className="w1240">
          <div className="sub_tit_wrap" data-aos="fade-up">
            <span className="small_txt">Infant Health Checkup</span>
            <h3>
              <span className="point">국가영유아검진</span>이란?
            </h3>
            <p>
              국민건강보험공단에서 지원하는 영유아 대상 건강검진 프로그램입니다.
              <br className="pc_block" />
              생후 4개월부터 71개월(만 6세 미만)까지 총 8차례 무료 검진을 받을 수 있습니다.
            </p>
          </div>

          {/* 이미지 - 전체 너비 1920x640 해상도 우선 표시 */}
          <div className="full_width_img" data-aos="fade-up" data-aos-delay="100" style={{ marginBottom: '60px' }}>
            <Image
              src="/images/services/test/test_1_1.png"
              alt="국가영유아검진"
              width={1920}
              height={640}
              style={{ width: '100%', height: 'auto', borderRadius: '20px' }}
              className="pc_block"
              priority
            />
            <Image
              src="/images/services/test/test_1_1_m.png"
              alt="국가영유아검진"
              width={800}
              height={600}
              style={{ width: '100%', height: 'auto', borderRadius: '20px' }}
              className="mobile_block"
            />
          </div>

          {/* 텍스트 박스 */}
          <div 
            className="txt_box"
            data-aos="fade-up"
            style={{
              border: '3px solid #eb5945',
              borderRadius: '60px',
              padding: '50px 60px',
              background: '#fff',
              maxWidth: '900px',
              margin: '0 auto',
            }}
          >
            <dl>
              <dt style={{
                fontFamily: 'PT Bandoche, sans-serif',
                fontSize: '32px',
                fontWeight: 400,
                color: '#1a1a1a',
                marginBottom: '20px',
              }}>아이의 건강한 성장을 위한 첫걸음</dt>
              <dd style={{
                fontFamily: 'Pretendard, sans-serif',
                fontSize: '18px',
                fontWeight: 300,
                color: '#525252',
                lineHeight: 1.7,
              }}>
                <span style={{ color: '#eb5945' }}>국가영유아검진</span>은 아이의 성장과 발달 상태를 정기적으로 확인하고,
                질병을 <span style={{ color: '#eb5945' }}>조기에 발견</span>하여 적절한 치료를 받을 수 있도록 하는 제도입니다.
                <br /><br />
                <span style={{ color: '#eb5945' }}>메디모아의원</span>은 국가영유아검진 지정병원으로, <span style={{ color: '#eb5945' }}>전문의</span>가 직접 꼼꼼하게
                검진을 진행합니다.
              </dd>
            </dl>
          </div>
        </div>
      </section>

      {/* 검진 시기 */}
      <section style={{ padding: '100px 0', background: '#fafafa' }}>
        <div className="w1240">
          <div className="sub_tit_wrap" data-aos="fade-up">
            <h3>검진 시기 및 항목</h3>
            <p>
              연령별로 정해진 검진 시기에 맞춰 건강검진을 받으세요.
            </p>
          </div>

          <div
            style={{
              overflowX: 'auto',
            }}
            data-aos="fade-up"
          >
            <table
              style={{
                width: '100%',
                minWidth: '700px',
                borderCollapse: 'collapse',
                background: '#fff',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
              }}
            >
              <thead>
                <tr style={{ background: 'var(--primary-500)', color: '#fff' }}>
                  <th style={{ padding: '18px 15px', fontWeight: 500 }}>차수</th>
                  <th style={{ padding: '18px 15px', fontWeight: 500 }}>검진 시기</th>
                  <th style={{ padding: '18px 15px', fontWeight: 500 }}>검진 항목</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { round: '1차', period: '생후 4~6개월', items: '문진, 진찰, 신체계측, 건강교육' },
                  { round: '2차', period: '생후 9~12개월', items: '문진, 진찰, 신체계측, 발달선별검사, 건강교육' },
                  { round: '3차', period: '생후 18~24개월', items: '문진, 진찰, 신체계측, 발달선별검사, 건강교육' },
                  { round: '4차', period: '생후 30~36개월', items: '문진, 진찰, 신체계측, 발달선별검사, 건강교육' },
                  { round: '5차', period: '생후 42~48개월', items: '문진, 진찰, 신체계측, 발달선별검사, 건강교육, 시력검사' },
                  { round: '6차', period: '생후 54~60개월', items: '문진, 진찰, 신체계측, 발달선별검사, 건강교육, 시력검사' },
                  { round: '7차', period: '생후 66~71개월', items: '문진, 진찰, 신체계측, 발달선별검사, 건강교육, 시력검사' },
                ].map((item, index) => (
                  <tr
                    key={index}
                    style={{
                      borderBottom: '1px solid #eee',
                      textAlign: 'center',
                    }}
                  >
                    <td style={{ padding: '16px 15px', fontWeight: 600, color: 'var(--primary-500)' }}>
                      {item.round}
                    </td>
                    <td style={{ padding: '16px 15px', color: 'var(--grayscale-800)' }}>
                      {item.period}
                    </td>
                    <td style={{ padding: '16px 15px', color: 'var(--grayscale-60001)', textAlign: 'left' }}>
                      {item.items}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 검진 항목 설명 */}
      <section style={{ padding: '100px 0' }}>
        <div className="w1240">
          <div className="sub_tit_wrap" data-aos="fade-up">
            <h3>검진 내용</h3>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '25px',
            }}
            data-aos="fade-up"
          >
            {[
              { title: '문진 및 진찰', desc: '보호자 문진표 확인, 시진, 청진, 촉진 등 전반적인 건강상태 확인', icon: '📋' },
              { title: '신체계측', desc: '키, 몸무게, 머리둘레 측정 및 성장 발달 평가', icon: '📏' },
              { title: '발달선별검사', desc: 'K-DST 검사를 통한 발달 상태 평가', icon: '🧩' },
              { title: '건강교육', desc: '안전사고 예방, 영양, 수면, 구강 건강 등 교육', icon: '📚' },
              { title: '시력검사', desc: '4차 이후 시력 및 눈 건강 검사', icon: '👁️' },
              { title: '구강검진', desc: '치아 발육 상태 및 구강 건강 확인', icon: '🦷' },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  background: 'var(--grayscale-5002)',
                  borderRadius: '16px',
                  padding: '35px 25px',
                }}
              >
                <div style={{ fontSize: '40px', marginBottom: '15px' }}>{item.icon}</div>
                <h4
                  style={{
                    fontFamily: 'Pretendard',
                    fontSize: '18px',
                    fontWeight: 600,
                    marginBottom: '10px',
                    color: 'var(--grayscale-800)',
                  }}
                >
                  {item.title}
                </h4>
                <p
                  style={{
                    fontFamily: 'Pretendard',
                    fontSize: '15px',
                    fontWeight: 300,
                    color: 'var(--grayscale-60001)',
                    lineHeight: 1.7,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 검진 준비물 및 안내 */}
      <section style={{ padding: '100px 0', background: '#fafafa' }}>
        <div className="w1240">
          <div className="sub_tit_wrap" data-aos="fade-up">
            <h3>검진 안내</h3>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '30px',
            }}
            data-aos="fade-up"
          >
            <div
              style={{
                background: '#fff',
                borderRadius: '20px',
                padding: '40px 30px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
              }}
            >
              <h4
                style={{
                  fontFamily: 'PT Bandoche',
                  fontSize: '22px',
                  marginBottom: '20px',
                  color: 'var(--primary-500)',
                }}
              >
                준비물
              </h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  '건강보험증 또는 신분증',
                  '문진표 (사전 작성)',
                  '모자보건수첩 (있는 경우)',
                ].map((item, index) => (
                  <li
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      marginBottom: '12px',
                      fontSize: '15px',
                      color: 'var(--grayscale-800)',
                    }}
                  >
                    <span style={{ color: 'var(--primary-500)' }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div
              style={{
                background: '#fff',
                borderRadius: '20px',
                padding: '40px 30px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
              }}
            >
              <h4
                style={{
                  fontFamily: 'PT Bandoche',
                  fontSize: '22px',
                  marginBottom: '20px',
                  color: 'var(--primary-500)',
                }}
              >
                검진 비용
              </h4>
              <p
                style={{
                  fontSize: '28px',
                  fontWeight: 700,
                  color: 'var(--grayscale-800)',
                  marginBottom: '15px',
                }}
              >
                무료
              </p>
              <p
                style={{
                  fontSize: '15px',
                  color: 'var(--grayscale-60001)',
                  lineHeight: 1.7,
                }}
              >
                국민건강보험공단에서 전액 지원합니다.
                <br />
                검진 대상자 확인은 건강보험 홈페이지 또는
                <br />
                고객센터(1577-1000)에서 확인하세요.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
