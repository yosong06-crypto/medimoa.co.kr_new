'use client';

import Image from 'next/image';
import SubNav from '@/components/common/SubNav';

const navItems = [
  { title: '아동발달센터', path: '/pages/child/child_1', active: true },
];

const programs = [
  { icon: '/images/services/child/child_1_2_img1.svg', title: '언어치료', desc: '언어발달 지연, 말더듬, 발음 교정' },
  { icon: '/images/services/child/child_1_2_img2.svg', title: '놀이치료', desc: '정서적 어려움, 행동 문제 개선' },
  { icon: '/images/services/child/child_1_2_img3.svg', title: '감각통합치료', desc: '감각 처리 능력 향상' },
  { icon: '/images/services/child/child_1_2_img4.svg', title: '인지치료', desc: '학습 능력, 주의집중력 향상' },
  { icon: '/images/services/child/child_1_2_img5.svg', title: '사회성 그룹치료', desc: '또래 관계, 사회적 기술 향상' },
  { icon: '/images/services/child/child_1_2_img6.svg', title: '미술치료', desc: '정서 표현, 심리 안정' },
  { icon: '/images/services/child/child_1_2_img7.svg', title: '음악치료', desc: '정서 안정, 의사소통 능력 향상' },
];

const targetAreas = [
  { icon: '/images/services/child/child_1_4_img1.svg', title: '발달지연', desc: '전반적인 발달이 느린 아이' },
  { icon: '/images/services/child/child_1_4_img2.svg', title: '언어발달지연', desc: '또래보다 말이 느린 아이' },
  { icon: '/images/services/child/child_1_4_img3.svg', title: 'ADHD', desc: '주의력결핍 과잉행동장애' },
  { icon: '/images/services/child/child_1_4_img4.svg', title: '자폐스펙트럼', desc: '사회적 상호작용의 어려움' },
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
                <span className="point_txt">아이의 발달</span>을
                <br />
                세심하게 케어합니다
              </h3>
            </div>
            <p>
              메디모아의원 아동발달센터는 영유아기부터 청소년기까지 아이들의
              <b>언어, 인지, 정서, 사회성 발달</b>을 전문적으로 평가하고 치료합니다.
              <br /><br />
              발달 지연의 조기 발견과 적절한 치료는 아이의 미래에 큰 영향을 미칩니다.
              전문 치료사와 함께 아이의 건강한 성장을 응원합니다.
            </p>
          </div>
          <div className="img_wrap" data-aos="fade-left">
            <Image
              src="/images/services/child/child_1_1_img1.svg"
              alt="아동발달센터"
              width={500}
              height={400}
              style={{ width: '100%', maxWidth: '500px', height: 'auto' }}
            />
          </div>
        </div>
      </section>

      {/* 치료 프로그램 */}
      <section className="child_1_2">
        <div className="w1240">
          <div className="sub_tit_wrap" data-aos="fade-up" style={{ marginBottom: '50px' }}>
            <h3 style={{ color: '#fff' }}>치료 프로그램</h3>
            <p style={{ color: 'rgba(255,255,255,0.8)' }}>
              아이의 특성에 맞는 맞춤형 치료 프로그램을 제공합니다.
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
            {programs.map((item, index) => (
              <div
                key={index}
                style={{
                  background: 'rgba(255,255,255,0.95)',
                  borderRadius: '16px',
                  padding: '30px 20px',
                  textAlign: 'center',
                  transition: 'transform 0.3s',
                }}
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={70}
                  height={70}
                  style={{ marginBottom: '15px' }}
                />
                <h4
                  style={{
                    fontFamily: 'Pretendard',
                    fontSize: '17px',
                    fontWeight: 600,
                    marginBottom: '8px',
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
            <p>
              다음과 같은 경우 아동발달센터 상담을 권장합니다.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '25px',
              marginBottom: '60px',
            }}
            data-aos="fade-up"
          >
            {targetAreas.map((item, index) => (
              <div
                key={index}
                style={{
                  background: 'var(--grayscale-5002)',
                  borderRadius: '20px',
                  padding: '35px 25px',
                  textAlign: 'center',
                }}
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
                    fontSize: '20px',
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
                    lineHeight: 1.6,
                  }}
                >
                  {item.desc}
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
                fontSize: '24px',
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
                    padding: '12px 15px',
                    background: 'var(--grayscale-5002)',
                    borderRadius: '8px',
                  }}
                >
                  <span style={{ color: 'var(--primary-500)', fontWeight: 700 }}>✓</span>
                  <span style={{ fontSize: '15px', color: 'var(--grayscale-800)' }}>{item}</span>
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
                    fontSize: '17px',
                    fontWeight: 600,
                    marginBottom: '8px',
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

      {/* 연락처 */}
      <section style={{ padding: '80px 0', background: 'rgb(112, 144, 81)' }}>
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
            아동발달센터 상담 문의
          </h3>
          <p
            style={{
              fontSize: '18px',
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
              padding: '15px 40px',
              borderRadius: '30px',
              fontSize: '20px',
              fontWeight: 600,
            }}
            data-aos="fade-up"
          >
            📞 031-548-0615
          </a>
        </div>
      </section>
    </>
  );
}
