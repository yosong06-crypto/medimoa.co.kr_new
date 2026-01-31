'use client';

import Image from 'next/image';
import SubNav from '@/components/common/SubNav';

const navItems = [
  { title: '소아청소년과', path: '/pages/general/general_1' },
  { title: '내과', path: '/pages/general/general_2', active: true },
];

export default function General2Page() {
  return (
    <>
      {/* Sub Visual */}
      <div
        className="sub_visual"
        style={{ backgroundImage: 'url(/images/services/general/sub_general_bg.png)' }}
      >
        <div className="txt_wrap">
          <h2>내과</h2>
          <p>성인 일반 진료 및 건강검진</p>
        </div>
      </div>

      {/* Sub Navigation */}
      <SubNav items={navItems} />

      {/* 내과 소개 */}
      <section className="general_section">
        <div className="w1240">
          <div className="sub_tit_wrap" data-aos="fade-up">
            <span className="small_txt">Internal Medicine</span>
            <h3>
              <span className="point">내과</span> 진료 안내
            </h3>
            <p>
              감기, 소화기 질환부터 만성질환 관리까지
              <br className="pc_block" />
              성인의 일반적인 건강 문제를 진료합니다.
            </p>
          </div>

          <div className="img_wrap" data-aos="fade-up">
            <Image
              src="/images/services/general/general_2_1.png"
              alt="내과"
              width={1920}
              height={640}
              style={{ width: '100%', height: 'auto', borderRadius: '20px' }}
              className="pc_block"
            />
            <Image
              src="/images/services/general/general_2_1_m.png"
              alt="내과"
              width={800}
              height={600}
              style={{ width: '100%', height: 'auto', borderRadius: '20px' }}
              className="mobile_block"
            />
          </div>
        </div>
      </section>

      {/* 진료 분야 */}
      <section style={{ padding: '100px 0', background: '#fafafa' }}>
        <div className="w1240">
          <div className="sub_tit_wrap" data-aos="fade-up">
            <h3>주요 진료 분야</h3>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '20px',
            }}
            data-aos="fade-up"
          >
            {[
              { title: '호흡기 질환', desc: '감기, 독감, 기관지염, 폐렴', icon: '🫁' },
              { title: '소화기 질환', desc: '위염, 장염, 소화불량, 변비', icon: '🥣' },
              { title: '심혈관 질환', desc: '고혈압, 고지혈증 관리', icon: '❤️' },
              { title: '내분비 질환', desc: '당뇨병, 갑상선 질환', icon: '🔬' },
              { title: '건강검진', desc: '일반 건강검진, 채용검진', icon: '📋' },
              { title: '예방접종', desc: '독감, 폐렴, 대상포진 등', icon: '💉' },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  background: '#fff',
                  borderRadius: '16px',
                  padding: '30px 20px',
                  textAlign: 'center',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                }}
              >
                <div style={{ fontSize: '40px', marginBottom: '15px' }}>{item.icon}</div>
                <h4
                  style={{
                    fontFamily: 'Pretendard',
                    fontSize: '17px',
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
                    fontSize: '14px',
                    fontWeight: 300,
                    color: 'var(--grayscale-60001)',
                    lineHeight: 1.5,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 만성질환 관리 */}
      <section style={{ padding: '100px 0' }}>
        <div className="w1240">
          <div className="sub_tit_wrap" data-aos="fade-up">
            <h3>만성질환 관리</h3>
            <p>
              고혈압, 당뇨병, 고지혈증 등 만성질환을
              <br className="pc_block" />
              체계적으로 관리합니다.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '30px',
            }}
            data-aos="fade-up"
          >
            {[
              {
                title: '고혈압',
                desc: '혈압 조절을 위한 약물 치료 및 생활습관 개선 상담을 제공합니다. 정기적인 혈압 체크와 합병증 예방이 중요합니다.',
                icon: '💓',
              },
              {
                title: '당뇨병',
                desc: '혈당 조절을 위한 약물 치료, 식이 상담, 운동 요법을 안내합니다. 정기적인 검사로 합병증을 예방합니다.',
                icon: '🩸',
              },
              {
                title: '고지혈증',
                desc: '콜레스테롤 수치를 관리하여 심혈관 질환을 예방합니다. 식이요법과 약물 치료를 병행합니다.',
                icon: '🫀',
              },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  background: 'var(--grayscale-5002)',
                  borderRadius: '20px',
                  padding: '35px 30px',
                }}
              >
                <div style={{ fontSize: '45px', marginBottom: '20px' }}>{item.icon}</div>
                <h4
                  style={{
                    fontFamily: 'Pretendard',
                    fontSize: '20px',
                    fontWeight: 600,
                    marginBottom: '12px',
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

      {/* 건강검진 */}
      <section style={{ padding: '100px 0', background: '#fafafa' }}>
        <div className="w1240">
          <div className="sub_tit_wrap" data-aos="fade-up">
            <h3>건강검진 안내</h3>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '30px',
            }}
            data-aos="fade-up"
          >
            {/* 일반 건강검진 */}
            <div
              style={{
                background: '#fff',
                borderRadius: '20px',
                padding: '35px 30px',
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
                일반 건강검진
              </h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  '신체 계측 (키, 체중, 허리둘레, BMI)',
                  '혈압 측정',
                  '혈액 검사 (빈혈, 당뇨, 간기능, 콩팥기능, 지질)',
                  '소변 검사',
                  '흉부 X-ray',
                  '문진 및 상담',
                ].map((item, index) => (
                  <li
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      marginBottom: '10px',
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

            {/* 채용 건강검진 */}
            <div
              style={{
                background: '#fff',
                borderRadius: '20px',
                padding: '35px 30px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
              }}
            >
              <h4
                style={{
                  fontFamily: 'PT Bandoche',
                  fontSize: '22px',
                  marginBottom: '20px',
                  color: 'var(--grayscale-800)',
                }}
              >
                채용 건강검진
              </h4>
              <p
                style={{
                  fontSize: '15px',
                  color: 'var(--grayscale-60001)',
                  lineHeight: 1.8,
                  marginBottom: '15px',
                }}
              >
                취업, 입사를 위한 건강검진을 실시합니다.
                <br />
                당일 검사 및 결과 발급이 가능합니다.
              </p>
              <p
                style={{
                  fontSize: '14px',
                  color: 'var(--grayscale-60001)',
                  lineHeight: 1.6,
                }}
              >
                * 검진 항목은 회사 요구 사항에 따라 달라질 수 있습니다.
                <br />
                * 공복 상태 (8시간 금식)로 방문해 주세요.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 예방접종 안내 */}
      <section style={{ padding: '100px 0' }}>
        <div className="w1240">
          <div className="sub_tit_wrap" data-aos="fade-up">
            <h3>성인 예방접종</h3>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '20px',
            }}
            data-aos="fade-up"
          >
            {[
              { title: '독감 (인플루엔자)', desc: '매년 10~11월 접종 권장', icon: '🤒' },
              { title: '폐렴구균', desc: '65세 이상, 만성질환자 권장', icon: '🫁' },
              { title: '대상포진', desc: '50세 이상 권장', icon: '🩹' },
              { title: 'A/B형 간염', desc: '항체 없는 경우 접종', icon: '💉' },
              { title: '파상풍', desc: '10년마다 추가 접종', icon: '🩺' },
              { title: 'HPV (자궁경부암)', desc: '성인 여성 권장', icon: '👩' },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  background: 'var(--grayscale-5002)',
                  borderRadius: '16px',
                  padding: '25px 20px',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: '35px', marginBottom: '12px' }}>{item.icon}</div>
                <h4
                  style={{
                    fontFamily: 'Pretendard',
                    fontSize: '16px',
                    fontWeight: 600,
                    marginBottom: '8px',
                    color: 'var(--grayscale-800)',
                  }}
                >
                  {item.title}
                </h4>
                <p
                  style={{
                    fontFamily: 'Pretendard',
                    fontSize: '14px',
                    fontWeight: 300,
                    color: 'var(--grayscale-60001)',
                    lineHeight: 1.4,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
