'use client';

import Image from 'next/image';
import SubNav from '@/components/common/SubNav';

const navItems = [
  { title: '아동발달센터', path: '/pages/child/child_1', active: true },
];

// 치료 담당자 정보 (한 줄 2명 × 3줄 구성)
const therapists = [
  { 
    image: '/images/services/child/child_1_2_img1.jpg', 
    name: '언어치료사', 
    title: '언어치료',
    desc: '언어발달 지연, 말더듬, 발음 문제를 전문적으로 평가하고 치료합니다. 아이의 언어 이해력과 표현력을 체계적으로 향상시켜 원활한 의사소통을 돕습니다.'
  },
  { 
    image: '/images/services/child/child_1_2_img2.jpg', 
    name: '놀이치료사', 
    title: '놀이치료',
    desc: '놀이를 매개로 아이의 정서적 어려움과 행동 문제를 탐색하고 치료합니다. 안전한 환경에서 자유로운 표현을 통해 심리적 안정을 도모합니다.'
  },
  { 
    image: '/images/services/child/child_1_2_img3.jpg', 
    name: '감각통합치료사', 
    title: '감각통합치료',
    desc: '감각 자극에 대한 처리 능력을 향상시키는 전문 치료를 제공합니다. 촉각, 전정감각, 고유수용감각 등을 통합하여 일상생활 적응력을 높입니다.'
  },
  { 
    image: '/images/services/child/child_1_2_img4.jpg', 
    name: '인지치료사', 
    title: '인지치료',
    desc: '학습 능력과 주의집중력 향상을 위한 인지 훈련을 진행합니다. 기억력, 문제해결력, 실행 기능 등을 체계적으로 평가하고 개선합니다.'
  },
  { 
    image: '/images/services/child/child_1_2_img5.jpg', 
    name: '사회성치료사', 
    title: '사회성 그룹치료',
    desc: '또래 관계 형성과 사회적 기술 습득을 돕는 그룹 프로그램을 운영합니다. 소통 방법, 감정 조절, 협동 능력을 실제 상황에서 연습합니다.'
  },
  { 
    image: '/images/services/child/child_1_2_img6.jpg', 
    name: '미술치료사', 
    title: '미술치료',
    desc: '미술 활동을 통해 아이의 내면을 표현하고 심리적 안정을 도모합니다. 창작 과정에서 자아 존중감과 정서 조절 능력을 향상시킵니다.'
  },
];

const programs = [
  { icon: '/images/services/child/child_1_2_img1.jpg', title: '언어치료', desc: '언어발달 지연, 말더듬, 발음 교정' },
  { icon: '/images/services/child/child_1_2_img2.jpg', title: '놀이치료', desc: '정서적 어려움, 행동 문제 개선' },
  { icon: '/images/services/child/child_1_2_img3.jpg', title: '감각통합치료', desc: '감각 처리 능력 향상' },
  { icon: '/images/services/child/child_1_2_img4.jpg', title: '인지치료', desc: '학습 능력, 주의집중력 향상' },
  { icon: '/images/services/child/child_1_2_img5.jpg', title: '사회성 그룹치료', desc: '또래 관계, 사회적 기술 향상' },
  { icon: '/images/services/child/child_1_2_img6.jpg', title: '미술치료', desc: '정서 표현, 심리 안정' },
  { icon: '/images/services/child/child_1_2_img7.jpg', title: '음악치료', desc: '정서 안정, 의사소통 능력 향상' },
];

const targetAreas = [
  { 
    icon: '/images/services/child/child_1_4_img1.svg', 
    title: '발달지연', 
    desc: '전반적인 발달이 느린 아이',
    detail: '인지, 언어, 운동, 사회성 등 전반적인 발달 영역에서 또래에 비해 느린 발달을 보이는 경우입니다. 조기 개입을 통해 발달 격차를 줄이고 잠재력을 최대한 끌어올립니다.'
  },
  { 
    icon: '/images/services/child/child_1_4_img2.svg', 
    title: '언어발달지연', 
    desc: '또래보다 말이 느린 아이',
    detail: '언어 이해력이나 표현력이 또래에 비해 늦은 경우입니다. 말을 시작하는 시기가 늦거나, 어휘력이 부족하거나, 문장 구성이 어려운 아이들에게 전문 언어치료를 제공합니다.'
  },
  { 
    icon: '/images/services/child/child_1_4_img3.svg', 
    title: 'ADHD', 
    desc: '주의력결핍 과잉행동장애',
    detail: '주의력 부족, 과잉행동, 충동성이 특징인 신경발달장애입니다. 집중력 향상, 자기조절 능력 훈련을 통해 학교생활과 일상생활 적응을 돕습니다.'
  },
  { 
    icon: '/images/services/child/child_1_4_img4.svg', 
    title: '자폐스펙트럼', 
    desc: '사회적 상호작용의 어려움',
    detail: '사회적 의사소통과 상호작용에 어려움을 보이며, 제한적이고 반복적인 행동 패턴을 보이는 경우입니다. 개별화된 치료 프로그램으로 사회성과 의사소통 능력을 향상시킵니다.'
  },
];

export default function Child1Page() {
  return (
    <>
      {/* Sub Visual */}
      <div
        className="sub_visual"
        style={{ backgroundImage: 'url(/images/services/child/sub_child_bg.png)' }}
      >
        <div className="txt_wrap">
          <h2>아동발달센터</h2>
          <p>발달 지연 조기 발견 및 전문 케어</p>
        </div>
      </div>

      {/* Sub Navigation */}
      <SubNav items={navItems} />

      {/* 아동발달센터 소개 */}
      <section className="child_1_1">
        <div className="w1240">
          <div className="txt_wrap" data-aos="fade-right">
            <div className="sub_tit_wrap" style={{ marginBottom: '30px' }}>
              <span className="small_txt">Child Development Center</span>
              <h3>
                우리 아이의 숨겨진 잠재력,
                <br />
                <span className="point_txt">전문가와 함께 깨워주세요</span>
              </h3>
            </div>
            <p>
              메디모아의원 아동발달센터는 영유아부터 청소년기까지 성장 과정에서 겪는
              <b> 언어, 인지, 정서, 사회성 문제</b>를 체계적으로 진단하고 해결합니다.
              <br /><br />
              발달 지연은 조기 발견과 <b>골든타임</b>을 놓치지 않는 것이 무엇보다 중요합니다.
              풍부한 임상 경험을 가진 전문 치료진이 아이의 밝은 미래를 위해
              <b> 최적의 맞춤 치료 솔루션</b>을 제공하겠습니다.
            </p>
          </div>
          <div className="img_wrap" data-aos="fade-left">
            <Image
              src="/images/services/child/child_1_1_img1.jpg"
              alt="아동발달센터"
              width={500}
              height={400}
              style={{ width: '100%', maxWidth: '500px', height: 'auto', borderRadius: '20px' }}
            />
          </div>
        </div>
      </section>

      {/* 치료 담당자 소개 */}
      <section className="child_1_2">
        <div className="w1240">
          <div className="sub_tit_wrap" data-aos="fade-up" style={{ marginBottom: '50px' }}>
            <h3 style={{ color: '#fff' }}>치료 담당자 소개</h3>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '18px' }}>
              각 분야 전문 치료사가 아이의 발달을 책임집니다.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '25px',
            }}
            data-aos="fade-up"
            className="therapist_grid"
          >
            {therapists.map((item, index) => (
              <div
                key={index}
                style={{
                  background: 'rgba(255,255,255,0.98)',
                  borderRadius: '20px',
                  padding: '25px',
                  display: 'flex',
                  gap: '20px',
                  alignItems: 'flex-start',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                }}
                className="therapist_card"
              >
                <div style={{ flexShrink: 0 }}>
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={100}
                    height={100}
                    style={{ 
                      borderRadius: '16px', 
                      objectFit: 'cover',
                      width: '100px',
                      height: '100px',
                    }}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <h4
                    style={{
                      fontFamily: 'Pretendard',
                      fontSize: '20px',
                      fontWeight: 600,
                      marginBottom: '6px',
                      color: 'rgb(112, 144, 81)',
                    }}
                  >
                    {item.title}
                  </h4>
                  <span
                    style={{
                      display: 'inline-block',
                      fontFamily: 'Pretendard',
                      fontSize: '14px',
                      fontWeight: 500,
                      color: 'var(--grayscale-60001)',
                      marginBottom: '12px',
                    }}
                  >
                    {item.name}
                  </span>
                  <p
                    style={{
                      fontFamily: 'Pretendard',
                      fontSize: '15px',
                      fontWeight: 300,
                      color: 'var(--grayscale-800)',
                      lineHeight: 1.6,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 대상 */}
      <section style={{ padding: '100px 0' }}>
        <div className="w1240">
          <div className="sub_tit_wrap" data-aos="fade-up">
            <Image
              src="/images/services/child/child_1_3_icon.svg"
              alt="아이콘"
              width={40}
              height={40}
              style={{ marginBottom: '15px' }}
            />
            <h3>치료 대상</h3>
            <p style={{ fontSize: '18px' }}>
              다음과 같은 경우 아동발달센터 상담을 권장합니다.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '25px',
              marginBottom: '60px',
            }}
            data-aos="fade-up"
            className="target_grid"
          >
            {targetAreas.map((item, index) => (
              <div
                key={index}
                style={{
                  background: '#fff',
                  borderRadius: '20px',
                  padding: '30px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                }}
                className="target_card"
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={50}
                    height={50}
                  />
                  <div>
                    <h4
                      style={{
                        fontFamily: 'Pretendard',
                        fontSize: '20px',
                        fontWeight: 600,
                        marginBottom: '4px',
                        color: 'var(--grayscale-800)',
                      }}
                    >
                      {item.title}
                    </h4>
                    <span
                      style={{
                        fontFamily: 'Pretendard',
                        fontSize: '14px',
                        fontWeight: 400,
                        color: 'rgb(112, 144, 81)',
                      }}
                    >
                      {item.desc}
                    </span>
                  </div>
                </div>
                <p
                  style={{
                    fontFamily: 'Pretendard',
                    fontSize: '15px',
                    fontWeight: 300,
                    color: 'var(--grayscale-60001)',
                    lineHeight: 1.7,
                    paddingLeft: '65px',
                  }}
                  className="target_detail"
                >
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

          {/* 증상 체크리스트 */}
          <div
            style={{
              background: '#fff',
              borderRadius: '20px',
              padding: '40px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
            }}
            data-aos="fade-up"
          >
            <h4
              style={{
                fontFamily: 'PT Bandoche',
                fontSize: '26px',
                fontWeight: 400,
                marginBottom: '25px',
                color: 'var(--grayscale-800)',
                textAlign: 'center',
              }}
            >
              이런 경우 상담을 받아보세요
            </h4>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '15px',
              }}
            >
              {[
                '또래보다 말이 늦거나 발음이 부정확해요',
                '눈 맞춤이 어렵고 사회성이 부족해요',
                '산만하고 집중을 못 해요',
                '또래 관계가 어려워요',
                '감정 조절이 어렵고 쉽게 짜증을 내요',
                '발달이 또래보다 전반적으로 느려요',
                '특정 행동을 반복하거나 집착해요',
                '학습에 어려움을 겪어요',
              ].map((item, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '14px 16px',
                    background: 'var(--grayscale-5002)',
                    borderRadius: '8px',
                  }}
                >
                  <span style={{ color: 'var(--primary-500)', fontWeight: 700, fontSize: '16px' }}>✓</span>
                  <span style={{ fontSize: '16px', color: 'var(--grayscale-800)' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 치료 과정 */}
      <section style={{ padding: '100px 0', background: '#fafafa' }}>
        <div className="w1240">
          <div className="sub_tit_wrap" data-aos="fade-up">
            <h3>치료 과정</h3>
          </div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '20px',
              justifyContent: 'center',
            }}
            data-aos="fade-up"
          >
            {[
              { step: '01', title: '초기 상담', desc: '발달 상태 파악 및 문진' },
              { step: '02', title: '발달 평가', desc: '표준화된 검사 도구로 정밀 평가' },
              { step: '03', title: '치료 계획 수립', desc: '검사 결과 기반 맞춤 치료 계획' },
              { step: '04', title: '치료 진행', desc: '전문 치료사와 1:1 개별 치료' },
              { step: '05', title: '경과 상담', desc: '정기적 평가 및 부모 상담' },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  flex: '1',
                  minWidth: '180px',
                  maxWidth: '220px',
                  background: '#fff',
                  borderRadius: '16px',
                  padding: '30px 20px',
                  textAlign: 'center',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                }}
              >
                <span
                  style={{
                    display: 'inline-block',
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    background: 'rgb(112, 144, 81)',
                    color: '#fff',
                    lineHeight: '50px',
                    fontWeight: 700,
                    fontSize: '18px',
                    marginBottom: '15px',
                  }}
                >
                  {item.step}
                </span>
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
                    fontSize: '15px',
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

      {/* 연락처 */}
      <section style={{ padding: '80px 0', background: 'rgb(112, 144, 81)' }}>
        <div className="w1240" style={{ textAlign: 'center' }}>
          <h3
            style={{
              fontFamily: 'PT Bandoche',
              fontSize: '36px',
              color: '#fff',
              marginBottom: '20px',
            }}
            data-aos="fade-up"
          >
            아동발달센터 상담 문의
          </h3>
          <p
            style={{
              fontSize: '20px',
              color: 'rgba(255,255,255,0.9)',
              marginBottom: '30px',
            }}
            data-aos="fade-up"
          >
            전문 상담사가 친절하게 안내해 드립니다.
          </p>
          <a
            href="tel:031-548-0615"
            style={{
              display: 'inline-block',
              background: '#fff',
              color: 'rgb(112, 144, 81)',
              padding: '16px 44px',
              borderRadius: '30px',
              fontSize: '22px',
              fontWeight: 600,
            }}
            data-aos="fade-up"
          >
            031-548-0615
          </a>
        </div>
      </section>
    </>
  );
}
