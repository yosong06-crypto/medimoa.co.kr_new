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

      {/* 이미지 섹션 - test_2_2: 발달 평가 영역 - 전체 너비 */}
      <section style={{ padding: '0' }}>
        <div data-aos="fade-up" style={{ textAlign: 'center' }}>
          <Image
            src="/images/services/test/test_2_2.png"
            alt="발달 평가 영역 안내"
            width={1920}
            height={640}
            style={{ width: '100%', height: 'auto' }}
            className="pc_block"
          />
          <Image
            src="/images/services/test/test_2_2_m.png"
            alt="발달 평가 영역 안내"
            width={800}
            height={600}
            style={{ width: '100%', height: 'auto' }}
            className="mobile_block"
          />
        </div>
      </section>

      {/* 이미지 섹션 - test_2_3: 발달검사 종류 - 전체 너비 */}
      <section style={{ padding: '0' }}>
        <div data-aos="fade-up" style={{ textAlign: 'center' }}>
          <Image
            src="/images/services/test/test_2_3.png"
            alt="발달검사 종류 안내"
            width={1920}
            height={640}
            style={{ width: '100%', height: 'auto' }}
            className="pc_block"
          />
          <Image
            src="/images/services/test/test_2_3_m.png"
            alt="발달검사 종류 안내"
            width={800}
            height={600}
            style={{ width: '100%', height: 'auto' }}
            className="mobile_block"
          />
        </div>
      </section>

      {/* 이미지 섹션 - test_2_4: 검사 결과에 따른 조치 - 전체 너비 */}
      <section style={{ padding: '0' }}>
        <div data-aos="fade-up" style={{ textAlign: 'center' }}>
          <Image
            src="/images/services/test/test_2_4.png"
            alt="검사 결과 및 조치 안내"
            width={1920}
            height={640}
            style={{ width: '100%', height: 'auto' }}
            className="pc_block"
          />
          <Image
            src="/images/services/test/test_2_4_m.png"
            alt="검사 결과 및 조치 안내"
            width={800}
            height={600}
            style={{ width: '100%', height: 'auto' }}
            className="mobile_block"
          />
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
