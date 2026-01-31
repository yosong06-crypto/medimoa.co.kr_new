'use client';

import Image from 'next/image';
import SubNav from '@/components/common/SubNav';

const navItems = [
  { title: '성조숙증', path: '/pages/puberty/puberty_1', active: true },
  { title: '저신장', path: '/pages/puberty/puberty_2' },
];

const symptoms = [
  { icon: '/images/services/puberty/puberty_1_4_icon1.jpg', title: '여아 8세 이전', desc: '가슴 발달 시작' },
  { icon: '/images/services/puberty/puberty_1_4_icon2.jpg', title: '남아 9세 이전', desc: '고환 크기 증가' },
  { icon: '/images/services/puberty/puberty_1_4_icon3.jpg', title: '급격한 성장', desc: '또래보다 빠른 키 성장' },
  { icon: '/images/services/puberty/puberty_1_4_icon4.jpg', title: '체취 변화', desc: '성인처럼 체취가 나는 경우' },
  { icon: '/images/services/puberty/puberty_1_4_icon5.jpg', title: '여드름 발생', desc: '피지 분비 증가' },
];

export default function Puberty1Page() {
  return (
    <>
      {/* Sub Visual */}
      <div
        className="sub_visual"
        style={{ backgroundImage: 'url(/images/services/puberty/sub_puberty_bg.png)' }}
      >
        <div className="txt_wrap">
          <h2>성조숙증</h2>
          <p>조기 발견과 적절한 치료로 건강한 성장을</p>
        </div>
      </div>

      {/* Sub Navigation */}
      <SubNav items={navItems} />

      {/* 성조숙증이란 */}
      <section className="layout_about">
        <div className="w1240">
          <div className="sub_tit_wrap" data-aos="fade-up">
            <span className="small_txt">Precocious Puberty</span>
            <h3>
              <span className="point">성조숙증</span>이란?
            </h3>
            <p>
              성조숙증은 또래보다 2차 성징이 빠르게 나타나는 질환입니다.
              <br className="pc_block" />
              조기에 발견하여 적절히 치료하면 정상적인 성장을 할 수 있습니다.
            </p>
          </div>

          <div className="con_wrap" data-aos="fade-up" data-aos-delay="100">
            <div className="img_wrap">
              <Image
                src="/images/services/puberty/puberty_1_1_img1.png"
                alt="성조숙증"
                width={500}
                height={400}
                style={{ width: '100%', height: 'auto', borderRadius: '20px' }}
                className="pc_block"
              />
              <Image
                src="/images/services/puberty/puberty_1_1_img1_m.png"
                alt="성조숙증"
                width={400}
                height={350}
                style={{ width: '100%', height: 'auto', borderRadius: '20px' }}
                className="mobile_block"
              />
            </div>
            <div className="txt_wrap">
              <dl>
                <dt>조기 발견이 중요합니다</dt>
                <dd>
                  성조숙증은 여아의 경우 만 8세 이전, 남아의 경우 만 9세 이전에 2차 성징이 나타나는 경우를 말합니다.
                  <br /><br />
                  성조숙증이 나타나면 처음에는 또래보다 키가 크지만, 성장판이 일찍 닫혀 최종 성인 키가 작아질 수 있습니다.
                  또한 신체적, 정서적으로 준비되지 않은 상태에서 사춘기를 맞이하게 됩니다.
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* 성조숙증 원인 */}
      <section className="layout_cause" style={{ background: '#fafafa' }}>
        <div className="w1240">
          <div className="sub_tit_wrap" data-aos="fade-up">
            <h3>성조숙증의 원인</h3>
          </div>

          <div className="con_wrap">
            <ul data-aos="fade-up">
              <li>
                <span>01</span>
                <p>비만 또는 과체중</p>
              </li>
              <li>
                <span>02</span>
                <p>환경호르몬 노출 (플라스틱, 화학물질 등)</p>
              </li>
              <li>
                <span>03</span>
                <p>과도한 스트레스</p>
              </li>
              <li>
                <span>04</span>
                <p>가족력 (유전적 요인)</p>
              </li>
              <li>
                <span>05</span>
                <p>뇌종양, 갑상선 질환 등 기저질환</p>
              </li>
            </ul>
            <div className="img_wrap" data-aos="fade-up" data-aos-delay="100">
              <Image
                src="/images/services/puberty/puberty_1_2_img1.jpg"
                alt="성조숙증 원인"
                width={400}
                height={300}
                style={{ width: '100%', maxWidth: '400px', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 성조숙증 증상 */}
      <section className="layout_test">
        <div className="w1240">
          <div className="sub_tit_wrap" data-aos="fade-up">
            <span className="small_txt" style={{ color: '#fff' }}>Symptoms</span>
            <h3 style={{ color: '#fff' }}>성조숙증 의심 증상</h3>
          </div>

          <ul data-aos="fade-up">
            {symptoms.map((item, index) => (
              <li key={index}>
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={80}
                  height={80}
                />
                <strong>{item.title}</strong>
                <p>{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 치료 방법 */}
      <section className="layout_cure">
        <div className="w1240">
          <div className="sub_tit_wrap" data-aos="fade-up">
            <h3>성조숙증 치료</h3>
            <p>
              메디모아의원에서는 체계적인 검사와 진단을 통해
              <br className="pc_block" />
              개인별 맞춤 치료를 제공합니다.
            </p>
          </div>

          <div className="con_wrap" data-aos="fade-up">
            <div className="img_wrap">
              <Image
                src="/images/services/puberty/puberty_1_5_img1.png"
                alt="성조숙증 치료"
                width={500}
                height={400}
                style={{ width: '100%', maxWidth: '500px', height: 'auto', borderRadius: '20px' }}
                className="pc_block"
              />
              <Image
                src="/images/services/puberty/puberty_1_5_img1_m.png"
                alt="성조숙증 치료"
                width={400}
                height={350}
                style={{ width: '100%', height: 'auto', borderRadius: '20px' }}
                className="mobile_block"
              />
            </div>
            <div className="txt_wrap">
              <strong>성선자극호르몬 분비호르몬 작용제 (GnRH agonist) 치료</strong>
              <p>
                성조숙증 치료의 핵심은 사춘기 진행을 늦추어 성장판이 닫히는 시기를 연장하는 것입니다.
                <br /><br />
                <b>GnRH 작용제</b>는 뇌하수체에서 성호르몬 분비를 억제하여 사춘기 진행을 늦추고,
                아이가 충분히 성장할 시간을 확보해 줍니다.
                <br /><br />
                4주 간격으로 피하 또는 근육주사로 투여하며, 성장판이 닫히기 전까지 치료를 지속합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 치료 과정 */}
      <section style={{ padding: '100px 0', background: '#fafafa' }}>
        <div className="w1240">
          <div className="sub_tit_wrap" data-aos="fade-up">
            <h3>메디모아의원 치료 과정</h3>
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
              { step: '01', title: '상담 및 문진', desc: '증상 확인 및 병력 청취' },
              { step: '02', title: '신체 검사', desc: '성장 상태 및 2차 성징 확인' },
              { step: '03', title: '검사', desc: '혈액검사, 뼈나이 검사, 호르몬 검사' },
              { step: '04', title: '진단 및 치료 계획', desc: '검사 결과 설명 및 맞춤 치료 계획 수립' },
              { step: '05', title: '치료 진행', desc: '정기적 주사 치료 및 경과 관찰' },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  background: '#fff',
                  borderRadius: '16px',
                  padding: '30px 25px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                  textAlign: 'center',
                }}
              >
                <span
                  style={{
                    display: 'inline-block',
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    background: 'var(--primary-500)',
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
    </>
  );
}
