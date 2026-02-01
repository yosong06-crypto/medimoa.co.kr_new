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
            <p style={{ fontSize: '20px', lineHeight: 1.8 }}>
              감기, 장염부터 예방접종까지
              <br className="pc_block" />
              아이들의 일반적인 건강 문제를 진료합니다.
            </p>
          </div>
        </div>
      </section>

      {/* 빨간색 테두리 박스 - 소아청소년과 진료 안내 */}
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
              소아청소년과에서는 이런 진료를 합니다
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
              <b>메디모아의원 소아청소년과</b>는 영유아부터 청소년까지 다양한 건강 문제를 전문적으로 진료합니다.
              <br /><br />
              <span style={{ color: '#333', fontWeight: 500 }}>
                호흡기 질환 (감기, 독감, 기관지염, 폐렴) | 소화기 질환 (장염, 설사, 변비, 복통)
                <br />
                피부 질환 (아토피, 두드러기, 발진) | 알레르기 (비염, 천식, 식품 알레르기)
                <br />
                감염 질환 (중이염, 수족구, 수두) | 예방접종 (국가필수, 선택 예방접종)
              </span>
              <br /><br />
              풍부한 임상 경험을 가진 소아청소년과 전문의가 아이의 건강을 꼼꼼하게 살펴드립니다.
            </p>
          </div>
        </div>
      </section>

      {/* 이미지 섹션 - general_1_2: 주요 진료 분야 + 예방접종 안내 - 전체 너비 */}
      <section style={{ padding: '0' }}>
        <div style={{ textAlign: 'center', overflow: 'hidden' }}>
          <Image
            src="/images/services/general/general_1_2.png"
            alt="소아청소년과 진료 분야 및 예방접종 안내"
            width={1920}
            height={640}
            style={{ width: '100%', height: 'auto' }}
            className="pc_block"
            data-aos="fade-right"
            data-aos-duration="1000"
          />
          <Image
            src="/images/services/general/general_1_2_m.png"
            alt="소아청소년과 진료 분야 및 예방접종 안내"
            width={800}
            height={600}
            style={{ width: '100%', height: 'auto' }}
            className="mobile_block"
            data-aos="fade-up"
            data-aos-duration="800"
          />
        </div>
      </section>

      {/* 진료 안내 */}
      <section style={{ padding: '100px 0', background: '#fff' }}>
        <div className="w1240">
          <div className="sub_tit_wrap" data-aos="fade-up">
            <h3>진료 안내</h3>
          </div>

          <div data-aos="fade-up" style={{ overflowX: 'auto' }}>
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontFamily: 'Pretendard',
                fontSize: '16px',
                minWidth: '600px',
              }}
            >
              <thead>
                <tr style={{ background: '#eb5945' }}>
                  <th style={{ padding: '18px 20px', color: '#fff', fontWeight: 600, textAlign: 'left', borderRadius: '12px 0 0 0' }}>
                    구분
                  </th>
                  <th style={{ padding: '18px 20px', color: '#fff', fontWeight: 600, textAlign: 'left', borderRadius: '0 12px 0 0' }}>
                    안내
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ background: '#fff', borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '20px', fontWeight: 600, color: '#333', verticalAlign: 'top', width: '180px' }}>
                    진료 시간
                  </td>
                  <td style={{ padding: '20px', color: '#666', lineHeight: 1.8 }}>
                    평일: 10:00 - 19:00 | 주말/공휴일: 10:00 - 14:00 | 점심시간: 13:00 - 14:00
                    <br />
                    <span style={{ color: '#eb5945' }}>* 둘째·넷째주 일요일 휴진</span>
                  </td>
                </tr>
                <tr style={{ background: '#fafafa', borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '20px', fontWeight: 600, color: '#333', verticalAlign: 'top' }}>
                    진료 순서
                  </td>
                  <td style={{ padding: '20px', color: '#666', lineHeight: 1.8 }}>
                    1. 접수 및 문진표 작성 → 2. 순서대로 진료실 호출 → 3. 전문의 진료 → 4. 처방전 수령 또는 원내 조제
                  </td>
                </tr>
                <tr style={{ background: '#fff' }}>
                  <td style={{ padding: '20px', fontWeight: 600, color: '#333', verticalAlign: 'top', borderRadius: '0 0 0 12px' }}>
                    준비물
                  </td>
                  <td style={{ padding: '20px', color: '#666', lineHeight: 1.8, borderRadius: '0 0 12px 0' }}>
                    건강보험증 또는 신분증 | 영유아의 경우 모자보건수첩 | 복용 중인 약이 있다면 지참
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
