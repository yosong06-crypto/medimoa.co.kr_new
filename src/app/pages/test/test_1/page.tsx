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

      {/* 검진 시기 및 항목 - 전체 너비 이미지 유지 */}
      <section style={{ padding: '0' }}>
        <div data-aos="fade-up" style={{ textAlign: 'center' }}>
          <Image
            src="/images/services/test/test_1_2.png"
            alt="검진 시기 및 항목"
            width={1920}
            height={640}
            style={{ width: '100%', height: 'auto' }}
            className="pc_block"
          />
          <Image
            src="/images/services/test/test_1_2_m.png"
            alt="검진 시기 및 항목"
            width={800}
            height={600}
            style={{ width: '100%', height: 'auto' }}
            className="mobile_block"
          />
        </div>
      </section>

      {/* 항목별 검진 방법 */}
      <section style={{ padding: '100px 0', background: '#fff' }}>
        <div className="w1240">
          <div className="sub_tit_wrap" data-aos="fade-up">
            <h3>항목별 검진 방법</h3>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '24px',
            }}
            className="checkup_grid"
            data-aos="fade-up"
          >
            {[
              {
                title: '문진 및 진찰',
                desc: '문진표, 진찰, 청각 및 시각문진, 시력검사',
              },
              {
                title: '신체계측',
                desc: '키, 몸무게(체질량 지수), 머리둘레',
              },
              {
                title: '건강교육',
                desc: '영양, 수면, 안전, 구강, 대소변 가리기, 정서 및 사회성, 개인위생, 취학준비 등 교육',
              },
              {
                title: '발달선별검사',
                desc: 'K-ASQ(Korean-Ages & Stages Quest), DENVER-2(덴버발달 검사), 영유아 발달 진단검사도구 등에 의한 검사',
              },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  background: '#fff',
                  borderRadius: '16px',
                  padding: '30px 24px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                }}
              >
                <h4
                  style={{
                    fontFamily: 'Pretendard',
                    fontSize: '18px',
                    fontWeight: 600,
                    marginBottom: '16px',
                    color: '#eb5945',
                    paddingBottom: '12px',
                    borderBottom: '2px solid #eb5945',
                  }}
                >
                  {item.title}
                </h4>
                <p
                  style={{
                    fontFamily: 'Pretendard',
                    fontSize: '15px',
                    fontWeight: 400,
                    color: '#525252',
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

      {/* 메디모아의원 영유아검진 */}
      <section style={{ padding: '100px 0', background: '#FFF8E7' }}>
        <div className="w1240">
          <div className="sub_tit_wrap" data-aos="fade-up">
            <h3>메디모아의원 영유아검진</h3>
          </div>

          <div
            style={{
              display: 'flex',
              gap: '40px',
              alignItems: 'center',
            }}
            className="medimoa_checkup"
            data-aos="fade-up"
          >
            {/* 이미지 영역 */}
            <div style={{ flex: '0 0 45%', position: 'relative' }}>
              <Image
                src="/images/services/test/test_1_1.png"
                alt="메디모아의원 영유아검진"
                width={600}
                height={400}
                style={{ 
                  width: '100%', 
                  height: 'auto', 
                  borderRadius: '20px',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                }}
              />
            </div>

            {/* 특징 리스트 */}
            <div style={{ flex: 1 }}>
              {[
                { num: '1', text: '소아전문 의료진의 꼼꼼한 진료' },
                { num: '2', text: '발달 이상 발견 시 아동발달센터 연계 가능' },
                { num: '3', text: '보호자와의 충분한 소통과 맞춤 상담 제공' },
                { num: '4', text: '진료와 상담이 한 번에 진행되는 원스톱 시스템' },
              ].map((item, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    background: '#fff',
                    borderRadius: '12px',
                    padding: '20px 24px',
                    marginBottom: index < 3 ? '16px' : '0',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.04)',
                  }}
                >
                  <span
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '36px',
                      height: '36px',
                      background: '#F5A623',
                      color: '#fff',
                      borderRadius: '8px',
                      fontFamily: 'Pretendard',
                      fontSize: '16px',
                      fontWeight: 700,
                      flexShrink: 0,
                    }}
                  >
                    {item.num}
                  </span>
                  <p
                    style={{
                      fontFamily: 'Pretendard',
                      fontSize: '17px',
                      fontWeight: 500,
                      color: '#333',
                      margin: 0,
                    }}
                  >
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @media screen and (max-width: 1024px) {
          .checkup_grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .medimoa_checkup {
            flex-direction: column !important;
          }
          .medimoa_checkup > div:first-child {
            flex: none !important;
            width: 100% !important;
          }
        }
        @media screen and (max-width: 768px) {
          .checkup_grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
