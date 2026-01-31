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

          {/* 이미지 - 전체 너비 */}
          <div data-aos="fade-up" data-aos-delay="100" style={{ marginBottom: '60px' }}>
            <Image
              src="/images/services/test/test_2_1.png"
              alt="영유아발달검진"
              width={1920}
              height={640}
              style={{ width: '100%', height: 'auto', borderRadius: '20px' }}
              className="pc_block"
            />
            <Image
              src="/images/services/test/test_2_1_m.png"
              alt="영유아발달검진"
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

      {/* 발달 영역 */}
      <section style={{ padding: '100px 0', background: '#fafafa' }}>
        <div className="w1240">
          <div className="sub_tit_wrap" data-aos="fade-up">
            <h3>발달 평가 영역</h3>
            <p>
              아이의 발달을 5가지 영역으로 나누어 종합적으로 평가합니다.
            </p>
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
              { title: '대근육 운동', desc: '앉기, 걷기, 뛰기 등', icon: '🏃', color: '#FF6B6B' },
              { title: '소근육 운동', desc: '손 사용, 그리기 등', icon: '✋', color: '#4ECDC4' },
              { title: '인지', desc: '문제해결, 학습능력', icon: '🧠', color: '#45B7D1' },
              { title: '언어', desc: '말하기, 이해하기', icon: '💬', color: '#96CEB4' },
              { title: '사회성', desc: '또래관계, 정서발달', icon: '🤝', color: '#DDA0DD' },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  background: '#fff',
                  borderRadius: '16px',
                  padding: '30px 20px',
                  textAlign: 'center',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                  borderTop: `4px solid ${item.color}`,
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

      {/* 검사 종류 */}
      <section style={{ padding: '100px 0' }}>
        <div className="w1240">
          <div className="sub_tit_wrap" data-aos="fade-up">
            <h3>발달검사 종류</h3>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '30px',
            }}
            data-aos="fade-up"
          >
            {[
              {
                title: 'K-DST (한국형 영유아 발달선별검사)',
                desc: '국가영유아검진에서 사용되는 표준 검사 도구입니다. 대근육, 소근육, 인지, 언어, 사회성 5개 영역을 평가합니다.',
                target: '생후 4개월 ~ 71개월',
              },
              {
                title: 'Denver-II (덴버 발달선별검사)',
                desc: '전 세계적으로 널리 사용되는 발달선별검사입니다. 125개 문항을 통해 발달 상태를 종합적으로 평가합니다.',
                target: '출생 ~ 만 6세',
              },
              {
                title: 'Bayley-III (베일리 영유아 발달검사)',
                desc: '인지, 언어, 운동 영역의 발달 지수를 측정하는 정밀 검사입니다. 발달 지연이 의심될 때 시행합니다.',
                target: '생후 1개월 ~ 42개월',
              },
              {
                title: 'M-CHAT (자폐스펙트럼 선별검사)',
                desc: '자폐스펙트럼 장애의 조기 발견을 위한 선별검사입니다. 사회성 및 의사소통 발달을 평가합니다.',
                target: '생후 16개월 ~ 30개월',
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
                <h4
                  style={{
                    fontFamily: 'Pretendard',
                    fontSize: '18px',
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
                    lineHeight: 1.7,
                    marginBottom: '15px',
                  }}
                >
                  {item.desc}
                </p>
                <span
                  style={{
                    display: 'inline-block',
                    background: 'var(--primary-500)',
                    color: '#fff',
                    padding: '6px 12px',
                    borderRadius: '15px',
                    fontSize: '13px',
                    fontWeight: 500,
                  }}
                >
                  대상: {item.target}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 검사 후 조치 */}
      <section style={{ padding: '100px 0', background: '#fafafa' }}>
        <div className="w1240">
          <div className="sub_tit_wrap" data-aos="fade-up">
            <h3>검사 결과에 따른 조치</h3>
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
              {
                result: '정상 발달',
                action: '다음 검진 시기에 맞춰 정기적으로 검진을 받으세요.',
                color: '#4CAF50',
              },
              {
                result: '추적관찰 필요',
                action: '일정 기간 후 재검사를 통해 발달 상태를 확인합니다.',
                color: '#FF9800',
              },
              {
                result: '심층평가 필요',
                action: '정밀 검사 및 전문 치료 연계를 통해 적극적으로 치료합니다.',
                color: '#F44336',
              },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  background: '#fff',
                  borderRadius: '16px',
                  padding: '35px 25px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                  borderLeft: `5px solid ${item.color}`,
                }}
              >
                <h4
                  style={{
                    fontFamily: 'Pretendard',
                    fontSize: '20px',
                    fontWeight: 600,
                    marginBottom: '15px',
                    color: item.color,
                  }}
                >
                  {item.result}
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
                  {item.action}
                </p>
              </div>
            ))}
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
            📞 031-294-1575
          </a>
        </div>
      </section>
    </>
  );
}
