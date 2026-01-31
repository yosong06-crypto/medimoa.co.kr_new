'use client';

import Image from 'next/image';
import Link from 'next/link';
import SubNav from '@/components/common/SubNav';

const navItems = [
  { title: '인사말', path: '/pages/intro/intro_1', active: true },
  { title: '의료진', path: '/pages/intro/intro_2' },
  { title: '둘러보기', path: '/pages/intro/intro_3' },
  { title: '오시는길', path: '/pages/intro/intro_4' },
];

export default function Intro1Page() {
  return (
    <>
      {/* Sub Visual */}
      <div
        className="sub_visual"
        style={{ backgroundImage: 'url(/images/about/intro/sub_intro_bg.png)' }}
      >
        <div className="txt_wrap">
          <h2>의원소개</h2>
          <p>메디모아의원을 소개합니다</p>
        </div>
      </div>

      {/* Sub Navigation */}
      <SubNav items={navItems} />

      {/* Content Section 1 */}
      <section className="layout_about">
        <div className="w1240">
          <div className="sub_tit_wrap" data-aos="fade-up">
            <span className="small_txt">MEDIMOA CLINIC</span>
            <h3>
              아이들의 <span className="point">건강한 성장</span>을
              <br />
              함께 응원합니다
            </h3>
            <p>
              메디모아의원은 영유아기부터 청소년기까지 아이들의 건강과 발달을
              <br className="pc_block" />
              전문적으로 케어하는 의원입니다.
            </p>
          </div>

          <div className="con_wrap" data-aos="fade-up" data-aos-delay="100">
            <div className="img_wrap">
              <Image
                src="/images/about/intro/intro_1_1_img3.png"
                alt="메디모아의원"
                width={500}
                height={400}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
            <div className="txt_wrap">
              <dl>
                <dt>부모와 아이 모두를 위한 따뜻한 진료공간</dt>
                <dd>
                  메디모아의원은 영유아 건강검진부터 아동 발달과 성조숙증에 이르는 청소년기까지
                  전문의료진이 한 공간에서 원스톱 케어 시스템을 운영합니다.
                  <br />
                  <br />
                  아이들의 건강한 성장과 발달을 위해 최선을 다하며, 부모님의 걱정과 고민을
                  함께 나누는 따뜻한 진료공간이 되겠습니다.
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section 2 */}
      <section style={{ padding: '80px 0', background: '#fafafa' }}>
        <div className="w1240">
          <div className="sub_tit_wrap" data-aos="fade-up">
            <h3>메디모아의원의 약속</h3>
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
                title: '전문성',
                desc: '풍부한 임상경험과 전문성으로 정확한 진단과 치료를 제공합니다.',
              },
              {
                icon: '/images/about/intro/intro_5_1_2.svg',
                title: '신뢰',
                desc: '투명한 진료와 소통으로 부모님과의 신뢰를 쌓아갑니다.',
              },
              {
                icon: '/images/about/intro/intro_5_1_3.svg',
                title: '따뜻함',
                desc: '아이들의 눈높이에서 편안하고 따뜻하게 진료합니다.',
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

      {/* Content Section 3: 메디모아의원의 강점 */}
      <section className="intro_strength" style={{ padding: '80px 0', background: '#faf6ef' }}>
        <div className="w1240">
          {/* 타이틀 */}
          <div style={{ textAlign: 'center', marginBottom: '20px' }} data-aos="fade-up">
            <h3 style={{ fontFamily: 'PT Bandoche, sans-serif', fontSize: '42px', fontWeight: 700, color: '#262626', marginBottom: '15px' }}>
              메디모아의원의 <span style={{ color: '#eb5945' }}>강점</span>
            </h3>
            <p style={{ color: '#555', fontSize: '16px', lineHeight: '160%' }}>
              " 아이의 오늘을 살피고, 내일을 키우는<br/>성장 전문클리닉 "
            </p>
          </div>
          
          {/* 꽃 아이콘 */}
          <div style={{ textAlign: 'center', marginBottom: '50px' }} data-aos="fade-up">
            <svg width="50" height="60" viewBox="0 0 50 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="25" cy="12" rx="6" ry="10" fill="#f5c842"/>
              <ellipse cx="17" cy="18" rx="6" ry="10" fill="#f5c842" transform="rotate(-30 17 18)"/>
              <ellipse cx="33" cy="18" rx="6" ry="10" fill="#f5c842" transform="rotate(30 33 18)"/>
              <ellipse cx="15" cy="25" rx="5" ry="8" fill="#f5c842" transform="rotate(-60 15 25)"/>
              <ellipse cx="35" cy="25" rx="5" ry="8" fill="#f5c842" transform="rotate(60 35 25)"/>
              <circle cx="25" cy="20" r="5" fill="#e8a030"/>
              <path d="M25 25 L25 55" stroke="#5a8f5a" strokeWidth="2.5" strokeLinecap="round"/>
              <path d="M25 35 Q15 30 18 40 Q22 38 25 35" fill="#5a8f5a"/>
              <path d="M25 42 Q35 37 32 47 Q28 45 25 42" fill="#5a8f5a"/>
            </svg>
          </div>

          {/* 데스크탑: 가로 레이아웃 */}
          <div className="pc_block" style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
            {/* 성장 클리닉 */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '50px' }} data-aos="fade-right">
              <div style={{ flex: 1, paddingTop: '20px' }}>
                <span style={{ display: 'inline-block', background: '#f5c842', color: '#333', padding: '8px 20px', borderRadius: '5px', fontSize: '15px', fontWeight: 600, marginBottom: '20px' }}>성장 클리닉</span>
                <p style={{ color: '#404040', fontSize: '15px', fontWeight: 400, lineHeight: '170%', marginBottom: '20px' }}>
                  본원은 저신장 극복을 위한 정밀 검사와 전문 치료 시스템을 갖추고 있습니다. 약 2,900건 이상의 성장판 검사 데이터를 보유하고 있으며, 이를 기반으로 환자 개개인의 특성에 맞춘 체계적인 1:1 성장 솔루션을 제공합니다.
                </p>
                <Link href="/pages/puberty/puberty_1" style={{ color: '#333', fontSize: '14px', fontWeight: 500, textDecoration: 'none' }}>
                  성장 클리닉 바로가기 &gt;
                </Link>
              </div>
              <div style={{ flexShrink: 0, width: '400px' }}>
                <Image src="/images/main/main_5_img1.png" alt="성장 클리닉" width={400} height={300} style={{ width: '100%', height: 'auto', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
              </div>
            </div>

            {/* 성조숙증 클리닉 */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '50px' }} data-aos="fade-left">
              <div style={{ flex: 1, paddingTop: '20px' }}>
                <span style={{ display: 'inline-block', background: '#f5c842', color: '#333', padding: '8px 20px', borderRadius: '5px', fontSize: '15px', fontWeight: 600, marginBottom: '20px' }}>성조숙증 클리닉</span>
                <p style={{ color: '#333', fontSize: '16px', fontWeight: 600, marginBottom: '15px' }}>"성조숙증 걱정, 풍부한 임상 경험으로 답을 드립니다"</p>
                <p style={{ color: '#404040', fontSize: '15px', fontWeight: 400, lineHeight: '170%', marginBottom: '20px' }}>
                  아이의 성장이 너무 빨라 걱정이신가요? 저희는 지금까지 5,800건 이상의 치료 사례를 통해 수많은 아이들의 바른 성장을 도왔습니다. 정밀한 검사부터 치료 여부 결정까지, 부모님의 마음으로 꼼꼼하게 진단하고 아이 상태에 꼭 맞는 개별 맞춤 솔루션을 제안합니다.
                </p>
                <Link href="/pages/puberty/puberty_1" style={{ color: '#333', fontSize: '14px', fontWeight: 500, textDecoration: 'none' }}>
                  성조숙증 클리닉 바로가기 &gt;
                </Link>
              </div>
              <div style={{ flexShrink: 0, width: '400px' }}>
                <Image src="/images/main/main_5_img2.png" alt="성조숙증 클리닉" width={400} height={300} style={{ width: '100%', height: 'auto', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
              </div>
            </div>
          </div>

          {/* 모바일: 세로 레이아웃 */}
          <div className="mobile_block" style={{ flexDirection: 'column', gap: '40px' }}>
            {/* 성장 클리닉 */}
            <div style={{ textAlign: 'center' }} data-aos="fade-up">
              <span style={{ display: 'inline-block', background: '#f5c842', color: '#333', padding: '8px 20px', borderRadius: '5px', fontSize: '14px', fontWeight: 600, marginBottom: '15px' }}>성장 클리닉</span>
              <p style={{ color: '#404040', fontSize: '14px', fontWeight: 400, lineHeight: '170%', marginBottom: '15px', textAlign: 'left' }}>
                본원은 저신장 극복을 위한 정밀 검사와 전문 치료 시스템을 갖추고 있습니다. 약 2,900건 이상의 성장판 검사 데이터를 보유하고 있으며, 이를 기반으로 환자 개개인의 특성에 맞춘 체계적인 1:1 성장 솔루션을 제공합니다.
              </p>
              <div style={{ maxWidth: '300px', margin: '0 auto 15px' }}>
                <Image src="/images/main/main_5_img1.png" alt="성장 클리닉" width={300} height={225} style={{ width: '100%', height: 'auto', borderRadius: '15px', boxShadow: '0 5px 20px rgba(0,0,0,0.1)' }} />
              </div>
              <Link href="/pages/puberty/puberty_1" style={{ color: '#333', fontSize: '13px', fontWeight: 500, textDecoration: 'none' }}>
                성장 클리닉 바로가기 &gt;
              </Link>
            </div>

            {/* 성조숙증 클리닉 */}
            <div style={{ textAlign: 'center' }} data-aos="fade-up">
              <span style={{ display: 'inline-block', background: '#f5c842', color: '#333', padding: '8px 20px', borderRadius: '5px', fontSize: '14px', fontWeight: 600, marginBottom: '15px' }}>성조숙증 클리닉</span>
              <p style={{ color: '#333', fontSize: '15px', fontWeight: 600, marginBottom: '10px', textAlign: 'left' }}>"성조숙증 걱정, 풍부한 임상 경험으로 답을 드립니다"</p>
              <p style={{ color: '#404040', fontSize: '14px', fontWeight: 400, lineHeight: '170%', marginBottom: '15px', textAlign: 'left' }}>
                아이의 성장이 너무 빨라 걱정이신가요? 저희는 지금까지 5,800건 이상의 치료 사례를 통해 수많은 아이들의 바른 성장을 도왔습니다. 정밀한 검사부터 치료 여부 결정까지, 부모님의 마음으로 꼼꼼하게 진단하고 아이 상태에 꼭 맞는 개별 맞춤 솔루션을 제안합니다.
              </p>
              <div style={{ maxWidth: '300px', margin: '0 auto 15px' }}>
                <Image src="/images/main/main_5_img2.png" alt="성조숙증 클리닉" width={300} height={225} style={{ width: '100%', height: 'auto', borderRadius: '15px', boxShadow: '0 5px 20px rgba(0,0,0,0.1)' }} />
              </div>
              <Link href="/pages/puberty/puberty_1" style={{ color: '#333', fontSize: '13px', fontWeight: 500, textDecoration: 'none' }}>
                성조숙증 클리닉 바로가기 &gt;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
