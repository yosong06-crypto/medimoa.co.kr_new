'use client';

import Image from 'next/image';
import SubNav from '@/components/common/SubNav';

const navItems = [
  { title: '국가영유아검진', path: '/pages/test/test_1' },
  { title: '영유아발달검진', path: '/pages/test/test_2', active: true },
];

export default function Test2Page() {
  return (
    <>
      {/* Sub Visual */}
      <div
        className="sub_visual"
        style={{ backgroundImage: 'url(/images/backgrounds/sub_test_bg.png)' }}
      >
        <div className="txt_wrap">
          <h2>영유아발달검진</h2>
          <p>아이의 발달 상태를 정밀하게 평가합니다</p>
        </div>
      </div>

      {/* Sub Navigation */}
      <SubNav items={navItems} />

      {/* 영유아발달검진 소개 */}
      <section className="layout_about">
        <div className="w1240">
          <div className="sub_tit_wrap" data-aos="fade-up">
            <span className="small_txt">Developmental Screening</span>
            <h3>
              <span className="point">영유아발달검진</span>이란?
            </h3>
            <p>
              아이의 발달 상태를 표준화된 검사 도구를 통해 평가하고,
              <br className="pc_block" />
              발달 지연을 조기에 발견하여 적절한 치료를 연계하는 검사입니다.
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
              }}>발달 지연, 조기 발견이 중요합니다</dt>
              <dd style={{
                fontFamily: 'Pretendard, sans-serif',
                fontSize: '18px',
                fontWeight: 300,
                color: '#525252',
                lineHeight: 1.7,
              }}>
                <span style={{ color: '#eb5945' }}>영유아</span>기는 <span style={{ color: '#eb5945' }}>뇌 발달</span>이 가장 활발하게 <span style={{ color: '#eb5945' }}>이루어지는 시기</span>입니다. 이 시기에
                발달 지연을 조기에 <span style={{ color: '#eb5945' }}>발견</span>하<span style={{ color: '#eb5945' }}>고 적절한 치료</span>를 받으면 정상 발달에 가까워질
                수 있습니다.
                <br /><br />
                <span style={{ color: '#eb5945' }}>메디모아의원</span>에서는 K-DST, Denver-II 등 표준화된 검사 도구를 사용하여
                아이의 발달 상태를 정밀하게 <span style={{ color: '#eb5945' }}>평가</span>합니다.
              </dd>
            </dl>
          </div>
        </div>
      </section>

      {/* 발달검사 종류 */}
      <section style={{ padding: '100px 0', background: '#FFF8E7' }}>
        <div className="w1240">
          <div className="sub_tit_wrap" data-aos="fade-up">
            <h3>발달검사 종류</h3>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '20px',
            }}
            className="test_type_grid"
            data-aos="fade-up"
          >
            {[
              {
                title: 'Bayley-III',
                desc: '영유아의 인지, 언어, 운동, 사회성, 적응 행동 발달을 종합적으로 평가하는 검사',
              },
              {
                title: 'SMS',
                desc: '아동의 사회적 기능 발달 수준을 연령에 따라 측정하는 검사',
              },
              {
                title: 'Denver-II',
                desc: '만 6세까지의 아동을 대상으로 개인·사회성, 언어, 운동 발달을 선별하는 기초 검사',
              },
              {
                title: 'CBCL',
                desc: '정서·행동 문제를 부모 보고식으로 평가하는 아동 행동평가 척도 검사',
              },
              {
                title: 'CARS',
                desc: '자폐 스펙트럼 장애 여부와 그 정도를 평가하는 대표적인 관찰 기반 검사',
              },
              {
                title: 'PCT',
                desc: '취학 전 아동의 기초 학습 능력 및 인지 발달 수준을 평가하는 검사',
              },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  background: '#fff',
                  borderRadius: '12px',
                  padding: '28px 30px',
                  borderLeft: '4px solid #F5A623',
                }}
              >
                <h4
                  style={{
                    fontFamily: 'Pretendard',
                    fontSize: '18px',
                    fontWeight: 600,
                    marginBottom: '12px',
                    color: '#333',
                  }}
                >
                  {item.title}
                </h4>
                <p
                  style={{
                    fontFamily: 'Pretendard',
                    fontSize: '15px',
                    fontWeight: 400,
                    color: '#666',
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 영유아 발달검사 대상 */}
      <section style={{ padding: '100px 0', background: '#fff' }}>
        <div className="w1240">
          <div className="sub_tit_wrap" data-aos="fade-up">
            <h3>영유아 발달검사 대상</h3>
            <p style={{ marginTop: '10px' }}>
              <strong style={{ color: '#eb5945' }}>대상자:</strong> 생후 12개월부터 만 6세까지 (영유아 대상)<br />
              <strong style={{ color: '#eb5945' }}>소요시간:</strong> 2~3시간 (검사 구성에 따라 상이)
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '24px',
            }}
            className="target_grid"
            data-aos="fade-up"
          >
            {[
              {
                num: '01',
                text: '언어 능력 등 발달 지연이 느껴질 때',
              },
              {
                num: '02',
                text: '뛰거나 걷기 등 운동 발달이 더디다고 느껴질 때',
              },
              {
                num: '03',
                text: '각종 대인관계나 낯가림이 심할 때',
              },
              {
                num: '04',
                text: '주의 집중력에 관한 문제가 있을 때',
              },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  background: '#fff',
                  borderRadius: '16px',
                  padding: '30px 24px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                  textAlign: 'center',
                }}
              >
                <span
                  style={{
                    display: 'block',
                    fontFamily: 'Pretendard',
                    fontSize: '28px',
                    fontWeight: 700,
                    color: '#F5A623',
                    marginBottom: '16px',
                  }}
                >
                  {item.num}
                </span>
                <p
                  style={{
                    fontFamily: 'Pretendard',
                    fontSize: '15px',
                    fontWeight: 500,
                    color: '#333',
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 메디모아의원 영유아 발달검사 */}
      <section style={{ padding: '100px 0', background: '#FFF8E7' }}>
        <div className="w1240">
          <div className="sub_tit_wrap" data-aos="fade-up">
            <h3>메디모아의원 영유아 발달검사</h3>
          </div>

          <div
            style={{
              display: 'flex',
              gap: '40px',
              alignItems: 'center',
            }}
            className="medimoa_dev"
            data-aos="fade-up"
          >
            {/* 이미지 영역 */}
            <div style={{ flex: '0 0 45%', position: 'relative' }}>
              <Image
                src="/images/services/test/test_2_1.png"
                alt="메디모아의원 영유아 발달검사"
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
                { num: '1', text: '소아청소년과 전문의와 치료사의 협진 체계' },
                { num: '2', text: '표준화된 검사 도구 사용 및 세밀한 평가 진행' },
                { num: '3', text: '검사 결과를 토대로 맞춤 치료 연계 가능' },
                { num: '4', text: '검사 후 보호자 상담을 통해 현재 상태를 정확히 안내' },
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

      {/* 검사 예약 안내 */}
      <section style={{ padding: '80px 0', background: 'var(--primary-500)' }}>
        <div className="w1240" style={{ textAlign: 'center' }}>
          <h3
            style={{
              fontFamily: 'PT Bandoche',
              fontSize: '32px',
              color: '#fff',
              marginBottom: '20px',
            }}
            data-aos="fade-up"
          >
            발달검진 예약 안내
          </h3>
          <p
            style={{
              fontSize: '18px',
              color: 'rgba(255,255,255,0.9)',
              marginBottom: '30px',
              lineHeight: 1.7,
            }}
            data-aos="fade-up"
          >
            발달검진은 사전 예약이 필요합니다.
            <br />
            전화 또는 방문 예약 부탁드립니다.
          </p>
          <a
            href="tel:031-294-1575"
            style={{
              display: 'inline-block',
              background: '#fff',
              color: 'var(--primary-500)',
              padding: '15px 40px',
              borderRadius: '30px',
              fontSize: '20px',
              fontWeight: 600,
            }}
            data-aos="fade-up"
          >
            031-294-1575
          </a>
        </div>
      </section>

      <style jsx>{`
        @media screen and (max-width: 1024px) {
          .test_type_grid {
            grid-template-columns: 1fr !important;
          }
          .target_grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .medimoa_dev {
            flex-direction: column !important;
          }
          .medimoa_dev > div:first-child {
            flex: none !important;
            width: 100% !important;
          }
        }
        @media screen and (max-width: 768px) {
          .target_grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
