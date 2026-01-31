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
            <p style={{ fontSize: '20px', lineHeight: 1.8 }}>
              감기, 소화기 질환부터 만성질환 관리까지
              <br className="pc_block" />
              성인의 일반적인 건강 문제를 진료합니다.
            </p>
          </div>
        </div>
      </section>

      {/* 빨간색 테두리 박스 - 내과 진료 안내 */}
      <section style={{ padding: '0 0 80px 0' }}>
        <div className="w1240">
          <div
            data-aos="fade-up"
            style={{
              border: '3px solid #eb5945',
              borderRadius: '20px',
              padding: '50px 40px',
              textAlign: 'center',
              background: '#fff',
            }}
          >
            <h4
              style={{
                fontFamily: 'Pretendard',
                fontSize: '28px',
                fontWeight: 700,
                color: '#eb5945',
                marginBottom: '25px',
              }}
            >
              내과에서는 이런 진료를 합니다
            </h4>
            <p
              style={{
                fontFamily: 'Pretendard',
                fontSize: '18px',
                fontWeight: 400,
                color: '#555',
                lineHeight: 2,
                maxWidth: '900px',
                margin: '0 auto',
              }}
            >
              <b>메디모아의원 내과</b>는 성인의 다양한 건강 문제와 만성질환을 전문적으로 진료합니다.
              <br /><br />
              <span style={{ color: '#333', fontWeight: 500 }}>
                호흡기 질환 (감기, 독감, 기관지염, 폐렴) | 소화기 질환 (위염, 장염, 역류성 식도염)
                <br />
                심혈관 질환 (고혈압, 협심증) | 내분비 질환 (당뇨병, 갑상선 질환)
                <br />
                만성질환 관리 (고혈압, 당뇨병, 고지혈증) | 건강검진 및 예방접종
              </span>
              <br /><br />
              정확한 진단과 체계적인 치료로 환자분들의 건강한 일상을 지원합니다.
            </p>
          </div>
        </div>
      </section>

      {/* 이미지 섹션 - general_2_2: 진료 분야 + 만성질환 관리 + 건강검진 + 예방접종 안내 - 전체 너비 */}
      <section style={{ padding: '0' }}>
        <div data-aos="fade-up" style={{ textAlign: 'center' }}>
          <Image
            src="/images/services/general/general_2_2.png"
            alt="내과 진료 분야 및 건강검진 안내"
            width={1920}
            height={640}
            style={{ width: '100%', height: 'auto' }}
            className="pc_block"
          />
          <Image
            src="/images/services/general/general_2_2_m.png"
            alt="내과 진료 분야 및 건강검진 안내"
            width={800}
            height={600}
            style={{ width: '100%', height: 'auto' }}
            className="mobile_block"
          />
        </div>
      </section>
    </>
  );
}
