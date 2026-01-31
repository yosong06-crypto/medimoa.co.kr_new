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

      {/* 이미지 섹션 - general_2_2: 진료 분야 + 만성질환 관리 + 건강검진 + 예방접종 안내 */}
      <section style={{ padding: '80px 0', background: '#fafafa' }}>
        <div className="w1240">
          <div data-aos="fade-up" style={{ textAlign: 'center' }}>
            <Image
              src="/images/services/general/general_2_2.png"
              alt="내과 진료 분야 및 건강검진 안내"
              width={1920}
              height={640}
              style={{ width: '100%', height: 'auto', borderRadius: '20px' }}
              className="pc_block"
            />
            <Image
              src="/images/services/general/general_2_2_m.png"
              alt="내과 진료 분야 및 건강검진 안내"
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
