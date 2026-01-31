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

      {/* Content Section 3: 메디모아의원의 강점 - 원본 이미지 사용 */}
      <section style={{ padding: '80px 0' }}>
        <div className="w1240">
          <div style={{ textAlign: 'center', position: 'relative' }} data-aos="fade-up">
            {/* 데스크탑 이미지 */}
            <div className="pc_block" style={{ position: 'relative', display: 'inline-block' }}>
              <Image
                src="/images/about/intro/intro_1_2.png"
                alt="메디모아의원의 강점"
                width={1200}
                height={800}
                style={{ width: '100%', height: 'auto', borderRadius: '20px' }}
              />
              {/* 성장 클리닉 바로가기 클릭 영역 - puberty_2로 이동 (1cm 아래로 조정) */}
              <Link 
                href="/pages/puberty/puberty_2" 
                style={{ position: 'absolute', top: '47%', left: '5%', width: '22%', height: '4%', cursor: 'pointer', zIndex: 10 }}
                aria-label="성장 클리닉 바로가기"
              />
              {/* 성조숙증 클리닉 바로가기 클릭 영역 - puberty_1로 이동 (1.5~2cm 위로 조정) */}
              <Link 
                href="/pages/puberty/puberty_1" 
                style={{ position: 'absolute', top: '88%', left: '5%', width: '24%', height: '4%', cursor: 'pointer', zIndex: 10 }}
                aria-label="성조숙증 클리닉 바로가기"
              />
            </div>
            
            {/* 모바일 이미지 */}
            <div className="mobile_block" style={{ position: 'relative' }}>
              <Image
                src="/images/about/intro/intro_1_2_m.png"
                alt="메디모아의원의 강점"
                width={600}
                height={1200}
                style={{ width: '100%', height: 'auto', borderRadius: '20px' }}
              />
              {/* 성장 클리닉 바로가기 클릭 영역 - puberty_2로 이동 */}
              <Link 
                href="/pages/puberty/puberty_2" 
                style={{ position: 'absolute', top: '43%', left: '50%', transform: 'translateX(-50%)', width: '55%', height: '3%', cursor: 'pointer', zIndex: 10 }}
                aria-label="성장 클리닉 바로가기"
              />
              {/* 성조숙증 클리닉 바로가기 클릭 영역 - puberty_1로 이동 */}
              <Link 
                href="/pages/puberty/puberty_1" 
                style={{ position: 'absolute', bottom: '2%', left: '50%', transform: 'translateX(-50%)', width: '55%', height: '3%', cursor: 'pointer', zIndex: 10 }}
                aria-label="성조숙증 클리닉 바로가기"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
