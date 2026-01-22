'use client';

import Image from 'next/image';
import SubNav from '@/components/common/SubNav';

const navItems = [
  { title: '인사말', path: '/pages/intro/intro_1' },
  { title: '의료진', path: '/pages/intro/intro_2', active: true },
  { title: '둘러보기', path: '/pages/intro/intro_3' },
  { title: '오시는길', path: '/pages/intro/intro_4' },
];

export default function Intro2Page() {
  return (
    <>
      {/* Sub Visual */}
      <div
        className="sub_visual"
        style={{ backgroundImage: 'url(/images/about/intro/sub_intro_bg.png)' }}
      >
        <div className="txt_wrap">
          <h2>의료진 소개</h2>
          <p>메디모아의원의 전문 의료진을 소개합니다</p>
        </div>
      </div>

      {/* Sub Navigation */}
      <SubNav items={navItems} />

      {/* 의료진 소개 Section */}
      <section className="layout_about">
        <div className="w1240">
          <div className="sub_tit_wrap" data-aos="fade-up">
            <span className="small_txt">Medical Staff</span>
            <h3>
              <span className="point">전문 의료진</span>이 함께합니다
            </h3>
            <p>
              풍부한 임상 경험과 전문성을 갖춘 의료진이
              <br className="pc_block" />
              아이들의 건강한 성장을 위해 최선을 다합니다.
            </p>
          </div>

          {/* 대표원장 */}
          <div className="con_wrap" data-aos="fade-up" data-aos-delay="100">
            <div className="img_wrap">
              <Image
                src="/images/about/intro/intro_2_new1.png"
                alt="대표원장"
                width={400}
                height={500}
                style={{ width: '100%', height: 'auto', borderRadius: '20px' }}
                className="pc_block"
              />
              <Image
                src="/images/about/intro/intro_2_new1_m.png"
                alt="대표원장"
                width={300}
                height={400}
                style={{ width: '100%', height: 'auto', borderRadius: '20px' }}
                className="mobile_block"
              />
            </div>
            <div className="txt_wrap">
              <dl>
                <dt>대표원장 고창범</dt>
                <dd>
                  <strong style={{ display: 'block', marginBottom: '20px', color: 'var(--primary-500)' }}>
                    소아청소년과 전문의
                  </strong>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li style={{ marginBottom: '10px', color: 'var(--grayscale-800)', fontSize: '16px', lineHeight: 1.6 }}>
                      • 경희대학교 의과대학 졸업
                    </li>
                    <li style={{ marginBottom: '10px', color: 'var(--grayscale-800)', fontSize: '16px', lineHeight: 1.6 }}>
                      • 경희대학교병원 소아청소년과 전공의
                    </li>
                    <li style={{ marginBottom: '10px', color: 'var(--grayscale-800)', fontSize: '16px', lineHeight: 1.6 }}>
                      • 대한소아청소년과학회 정회원
                    </li>
                    <li style={{ marginBottom: '10px', color: 'var(--grayscale-800)', fontSize: '16px', lineHeight: 1.6 }}>
                      • 대한소아내분비학회 정회원
                    </li>
                    <li style={{ marginBottom: '10px', color: 'var(--grayscale-800)', fontSize: '16px', lineHeight: 1.6 }}>
                      • 성조숙증/저신장 전문 진료
                    </li>
                  </ul>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* 의료진 특징 */}
      <section style={{ padding: '80px 0', background: '#fafafa' }}>
        <div className="w1240">
          <div className="sub_tit_wrap" data-aos="fade-up">
            <h3>메디모아의원 의료진의 강점</h3>
          </div>

          <div
            style={{
              display: 'flex',
              gap: '30px',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            {[
              {
                icon: '/images/about/intro/intro_5_1_1.svg',
                title: '풍부한 임상 경험',
                desc: '다양한 증례 경험을 바탕으로 정확한 진단과 치료를 제공합니다.',
              },
              {
                icon: '/images/about/intro/intro_5_1_2.svg',
                title: '체계적인 진료 시스템',
                desc: '검사부터 치료까지 원스톱 케어 시스템으로 편리하게 진료받으실 수 있습니다.',
              },
              {
                icon: '/images/about/intro/intro_5_1_3.svg',
                title: '따뜻한 소통',
                desc: '부모님의 걱정을 함께 나누며 아이에게 맞는 최적의 치료를 제안합니다.',
              },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  flex: '1',
                  maxWidth: '320px',
                  minWidth: '280px',
                  background: '#fff',
                  borderRadius: '20px',
                  padding: '40px 30px',
                  textAlign: 'center',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                }}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={60}
                  height={60}
                  style={{ marginBottom: '20px' }}
                />
                <h4
                  style={{
                    fontFamily: 'Pretendard',
                    fontSize: '22px',
                    fontWeight: 600,
                    marginBottom: '12px',
                    color: 'var(--grayscale-800)',
                  }}
                >
                  {item.title}
                </h4>
                <p
                  style={{
                    fontFamily: 'Pretendard',
                    fontSize: '16px',
                    fontWeight: 300,
                    color: 'var(--grayscale-60001)',
                    lineHeight: 1.6,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 진료 분야 */}
      <section style={{ padding: '80px 0' }}>
        <div className="w1240">
          <div className="sub_tit_wrap" data-aos="fade-up">
            <h3>주요 진료 분야</h3>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '20px',
            }}
            data-aos="fade-up"
          >
            {[
              '성조숙증 / 저신장',
              '영유아 건강검진',
              '아동발달센터',
              '소아청소년 일반진료',
              '예방접종',
              '발달검진',
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  background: 'var(--grayscale-5002)',
                  padding: '25px 20px',
                  borderRadius: '12px',
                  textAlign: 'center',
                  fontFamily: 'Pretendard',
                  fontSize: '18px',
                  fontWeight: 500,
                  color: 'var(--grayscale-800)',
                  transition: 'all 0.3s',
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
