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

          {/* 이미지 - 전체 너비 */}
          <div data-aos="fade-up" data-aos-delay="100" style={{ marginBottom: '60px' }}>
            <Image
              src="/images/services/test/test_1_1.png"
              alt="국가영유아검진"
              width={1920}
              height={640}
              style={{ width: '100%', height: 'auto', borderRadius: '20px' }}
              className="pc_block"
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

      {/* 이미지 섹션 - test_1_2 (검진 시기 및 항목) */}
      <section style={{ padding: '80px 0', background: '#fafafa' }}>
        <div className="w1240">
          <div data-aos="fade-up" style={{ textAlign: 'center' }}>
            <Image
              src="/images/services/test/test_1_2.png"
              alt="검진 시기 및 항목"
              width={1920}
              height={640}
              style={{ width: '100%', height: 'auto', borderRadius: '20px' }}
              className="pc_block"
            />
            <Image
              src="/images/services/test/test_1_2_m.png"
              alt="검진 시기 및 항목"
              width={800}
              height={600}
              style={{ width: '100%', height: 'auto', borderRadius: '20px' }}
              className="mobile_block"
            />
          </div>
        </div>
      </section>

      {/* 이미지 섹션 - test_1_3 (검진 내용) */}
      <section style={{ padding: '80px 0' }}>
        <div className="w1240">
          <div data-aos="fade-up" style={{ textAlign: 'center' }}>
            <Image
              src="/images/services/test/test_1_3.png"
              alt="검진 내용"
              width={1920}
              height={640}
              style={{ width: '100%', height: 'auto', borderRadius: '20px' }}
              className="pc_block"
            />
            <Image
              src="/images/services/test/test_1_3_m.png"
              alt="검진 내용"
              width={800}
              height={600}
              style={{ width: '100%', height: 'auto', borderRadius: '20px' }}
              className="mobile_block"
            />
          </div>
        </div>
      </section>

      {/* 이미지 섹션 - test_1_4 (검진 안내) */}
      <section style={{ padding: '80px 0', background: '#fafafa' }}>
        <div className="w1240">
          <div data-aos="fade-up" style={{ textAlign: 'center' }}>
            <Image
              src="/images/services/test/test_1_4.png"
              alt="검진 안내"
              width={1920}
              height={640}
              style={{ width: '100%', height: 'auto', borderRadius: '20px' }}
              className="pc_block"
            />
            <Image
              src="/images/services/test/test_1_4_m.png"
              alt="검진 안내"
              width={800}
              height={600}
              style={{ width: '100%', height: 'auto', borderRadius: '20px' }}
              className="mobile_block"
            />
          </div>
        </div>
      </section>
    </>
  );
}
