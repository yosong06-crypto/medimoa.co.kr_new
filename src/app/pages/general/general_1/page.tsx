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

          <div className="img_wrap" data-aos="fade-up">
            <Image
              src="/images/services/general/general_1_1.png"
              alt="소아청소년과"
              width={1920}
              height={640}
              style={{ width: '100%', height: 'auto', borderRadius: '20px' }}
              className="pc_block"
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

      {/* 이미지 섹션 - general_1_2: 주요 진료 분야 + 예방접종 안내 */}
      <section style={{ padding: '80px 0', background: '#fafafa' }}>
        <div className="w1240">
          <div data-aos="fade-up" style={{ textAlign: 'center' }}>
            <Image
              src="/images/services/general/general_1_2.png"
              alt="소아청소년과 진료 분야 및 예방접종 안내"
              width={1920}
              height={640}
              style={{ width: '100%', height: 'auto', borderRadius: '20px' }}
              className="pc_block"
            />
            <Image
              src="/images/services/general/general_1_2_m.png"
              alt="소아청소년과 진료 분야 및 예방접종 안내"
              width={800}
              height={600}
              style={{ width: '100%', height: 'auto', borderRadius: '20px' }}
              className="mobile_block"
            />
          </div>
        </div>
      </section>

      {/* 진료 안내 */}
      <section style={{ padding: '100px 0', background: '#fff' }}>
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
