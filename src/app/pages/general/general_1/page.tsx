'use client';

import Image from 'next/image';
import SubNav from '@/components/common/SubNav';

const navItems = [
  { title: '소아청소년과', path: '/pages/general/general_1', active: true },
  { title: '내과', path: '/pages/general/general_2' },
];

export default function General1Page() {
  return (
    <>
      {/* Sub Visual */}
      <div
        className="sub_visual"
        style={{ backgroundImage: 'url(/images/services/general/sub_general_bg.png)' }}
      >
        <div className="txt_wrap">
          <h2>소아청소년과</h2>
          <p>영유아부터 청소년까지 일반 진료</p>
        </div>
      </div>

      {/* Sub Navigation */}
      <SubNav items={navItems} />

      {/* 소아청소년과 소개 */}
      <section className="general_section">
        <div className="w1240">
          <div className="sub_tit_wrap" data-aos="fade-up">
            <span className="small_txt">Pediatrics</span>
            <h3>
              <span className="point">소아청소년과</span> 진료 안내
            </h3>
            <p>
              감기, 장염부터 예방접종까지
              <br className="pc_block" />
              아이들의 일반적인 건강 문제를 진료합니다.
            </p>
          </div>

          <div className="img_wrap full_width_img" data-aos="fade-up">
            <Image
              src="/images/services/general/general_1_1.png"
              alt="소아청소년과"
              width={1920}
              height={640}
              style={{ width: '100%', height: 'auto', borderRadius: '20px' }}
              className="pc_block"
              priority
            />
            <Image
              src="/images/services/general/general_1_1_m.png"
              alt="소아청소년과"
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
              { title: '소화기 질환', desc: '장염, 설사, 변비, 복통', icon: '🥣' },
              { title: '피부 질환', desc: '아토피, 두드러기, 발진', icon: '🩹' },
              { title: '알레르기', desc: '비염, 천식, 식품 알레르기', icon: '🤧' },
              { title: '감염 질환', desc: '중이염, 수족구, 수두', icon: '🦠' },
              { title: '예방접종', desc: '국가필수, 선택 예방접종', icon: '💉' },
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

      {/* 예방접종 안내 */}
      <section style={{ padding: '100px 0' }}>
        <div className="w1240">
          <div className="sub_tit_wrap" data-aos="fade-up">
            <h3>예방접종 안내</h3>
            <p>
              국가필수예방접종부터 선택 예방접종까지 모두 가능합니다.
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
            {/* 국가필수예방접종 */}
            <div
              style={{
                background: 'var(--grayscale-5002)',
                borderRadius: '20px',
                padding: '35px 30px',
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
                국가필수예방접종 (무료)
              </h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  'BCG (결핵)',
                  'B형간염',
                  'DTaP (디프테리아, 파상풍, 백일해)',
                  'Polio (소아마비)',
                  'MMR (홍역, 유행성이하선염, 풍진)',
                  '수두',
                  '일본뇌염',
                  'Hib (뇌수막염)',
                  '폐렴구균',
                  'A형간염',
                  'HPV (자궁경부암, 만 11~12세)',
                  '인플루엔자 (독감)',
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

            {/* 선택 예방접종 */}
            <div
              style={{
                background: 'var(--grayscale-5002)',
                borderRadius: '20px',
                padding: '35px 30px',
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
                선택 예방접종 (유료)
              </h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  '로타바이러스',
                  '수막구균',
                  '대상포진',
                  '인플루엔자 (4가)',
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
                    <span style={{ color: '#888' }}>•</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p
                style={{
                  marginTop: '20px',
                  fontSize: '14px',
                  color: 'var(--grayscale-60001)',
                  lineHeight: 1.6,
                }}
              >
                * 예방접종 종류 및 비용은 문의 바랍니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 진료 안내 */}
      <section style={{ padding: '100px 0', background: '#fafafa' }}>
        <div className="w1240">
          <div className="sub_tit_wrap" data-aos="fade-up">
            <h3>진료 안내</h3>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '30px',
            }}
            data-aos="fade-up"
          >
            {[
              {
                title: '진료 시간',
                content: (
                  <>
                    평일: 10:00 - 19:00
                    <br />
                    주말/공휴일: 10:00 - 14:00
                    <br />
                    점심시간: 13:00 - 14:00
                    <br />
                    <span style={{ color: 'var(--primary-500)' }}>* 둘째·넷째주 일요일 휴진</span>
                  </>
                ),
                icon: '🕐',
              },
              {
                title: '진료 순서',
                content: (
                  <>
                    1. 접수 및 문진표 작성
                    <br />
                    2. 순서대로 진료실 호출
                    <br />
                    3. 전문의 진료
                    <br />
                    4. 처방전 수령 또는 원내 조제
                  </>
                ),
                icon: '📋',
              },
              {
                title: '준비물',
                content: (
                  <>
                    건강보험증 또는 신분증
                    <br />
                    영유아의 경우 모자보건수첩
                    <br />
                    복용 중인 약이 있다면 지참
                  </>
                ),
                icon: '📦',
              },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  background: '#fff',
                  borderRadius: '20px',
                  padding: '35px 30px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                }}
              >
                <div style={{ fontSize: '40px', marginBottom: '15px' }}>{item.icon}</div>
                <h4
                  style={{
                    fontFamily: 'Pretendard',
                    fontSize: '20px',
                    fontWeight: 600,
                    marginBottom: '15px',
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
                    lineHeight: 1.8,
                  }}
                >
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
