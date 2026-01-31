'use client';

import Image from 'next/image';
import SubNav from '@/components/common/SubNav';

const navItems = [
  { title: '성조숙증', path: '/pages/puberty/puberty_1' },
  { title: '저신장', path: '/pages/puberty/puberty_2', active: true },
];

const symptoms = [
  { icon: '/images/services/puberty/puberty_2_4_icon1.svg', title: '표준 성장 곡선', desc: '또래 대비 3백분위수 미만' },
  { icon: '/images/services/puberty/puberty_2_4_icon2.svg', title: '성장 속도 저하', desc: '연간 4cm 미만 성장' },
  { icon: '/images/services/puberty/puberty_2_4_icon3.svg', title: '또래 비교', desc: '반에서 키가 제일 작은 경우' },
  { icon: '/images/services/puberty/puberty_2_4_icon4.svg', title: '가족력', desc: '부모 모두 키가 작은 경우' },
];

export default function Puberty2Page() {
  return (
    <>
      {/* Sub Visual */}
      <div
        className="sub_visual"
        style={{ backgroundImage: 'url(/images/services/puberty/sub_puberty_bg.png)' }}
      >
        <div className="txt_wrap">
          <h2>저신장</h2>
          <p>성장 잠재력을 최대한 발휘할 수 있도록</p>
        </div>
      </div>

      {/* Sub Navigation */}
      <SubNav items={navItems} />

      {/* 저신장이란 */}
      <section className="layout_about">
        <div className="w1240">
          <div className="sub_tit_wrap" data-aos="fade-up">
            <span className="small_txt">Short Stature</span>
            <h3>
              <span className="point">저신장</span>이란?
            </h3>
            <p>
              저신장은 같은 연령, 같은 성별의 아이들 중에서
              <br className="pc_block" />
              키가 하위 3% 미만인 경우를 말합니다.
            </p>
          </div>

          <div className="con_wrap" data-aos="fade-up" data-aos-delay="100">
            <div className="img_wrap">
              <Image
                src="/images/services/puberty/puberty_2_1_img1.png"
                alt="저신장"
                width={500}
                height={400}
                style={{ width: '100%', height: 'auto', borderRadius: '20px' }}
                className="pc_block"
              />
              <Image
                src="/images/services/puberty/puberty_2_1_img1_m.png"
                alt="저신장"
                width={400}
                height={350}
                style={{ width: '100%', height: 'auto', borderRadius: '20px' }}
                className="mobile_block"
              />
            </div>
            <div className="txt_wrap">
              <dl>
                <dt>성장판이 열려있을 때 치료해야 합니다</dt>
                <dd>
                  저신장의 원인은 다양합니다. 유전적 요인, 영양 부족, 만성질환, 성장호르몬 결핍 등이 있습니다.
                  <br /><br />
                  중요한 것은 성장판이 닫히기 전에 원인을 파악하고 적절한 치료를 시작하는 것입니다.
                  성장판이 닫히면 더 이상 키 성장을 기대하기 어렵습니다.
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* 저신장 원인 - 이미지 제거, 텍스트 가운데 정렬 */}
      <section className="layout_cause" style={{ background: '#fafafa' }}>
        <div className="w1240">
          <div className="sub_tit_wrap" data-aos="fade-up">
            <h3>저신장의 원인</h3>
          </div>

          <div className="con_wrap" style={{ justifyContent: 'center' }}>
            <ul data-aos="fade-up" style={{ width: '100%', maxWidth: '900px', margin: '0 auto' }}>
              <li>
                <span>01</span>
                <p>가족성 저신장 (유전적 요인)</p>
              </li>
              <li>
                <span>02</span>
                <p>체질성 성장지연</p>
              </li>
              <li>
                <span>03</span>
                <p>성장호르몬 결핍</p>
              </li>
              <li>
                <span>04</span>
                <p>갑상선 기능 저하</p>
              </li>
              <li>
                <span>05</span>
                <p>만성질환 (신장질환, 간질환 등)</p>
              </li>
              <li>
                <span>06</span>
                <p>영양 부족 또는 흡수 장애</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 저신장 증상 */}
      <section className="layout_test">
        <div className="w1240">
          <div className="sub_tit_wrap" data-aos="fade-up">
            <span className="small_txt" style={{ color: '#fff' }}>Warning Signs</span>
            <h3 style={{ color: '#fff' }}>저신장 의심 신호</h3>
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

      {/* 검사 방법 - 표 형식 */}
      <section style={{ padding: '100px 0' }}>
        <div className="w1240">
          <div className="sub_tit_wrap" data-aos="fade-up">
            <h3>저신장 검사</h3>
            <p>
              정확한 원인 파악을 위해 다양한 검사를 시행합니다.
            </p>
          </div>

          <div data-aos="fade-up" style={{ overflowX: 'auto' }}>
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontFamily: 'Pretendard',
                fontSize: '16px',
                minWidth: '600px',
              }}
            >
              <thead>
                <tr style={{ background: '#eb5945' }}>
                  <th style={{ padding: '18px 20px', color: '#fff', fontWeight: 600, textAlign: 'left', borderRadius: '12px 0 0 0' }}>
                    검사 항목
                  </th>
                  <th style={{ padding: '18px 20px', color: '#fff', fontWeight: 600, textAlign: 'left', borderRadius: '0 12px 0 0' }}>
                    검사 내용
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ background: '#fff', borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '20px', fontWeight: 600, color: '#333', verticalAlign: 'top', width: '180px' }}>
                    뼈나이 검사
                  </td>
                  <td style={{ padding: '20px', color: '#666', lineHeight: 1.7 }}>
                    왼쪽 손목 X-ray 촬영으로 실제 나이와 뼈 나이를 비교하여 성장 잠재력을 평가합니다.
                  </td>
                </tr>
                <tr style={{ background: '#fafafa', borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '20px', fontWeight: 600, color: '#333', verticalAlign: 'top' }}>
                    혈액 검사
                  </td>
                  <td style={{ padding: '20px', color: '#666', lineHeight: 1.7 }}>
                    성장호르몬, 갑상선 호르몬, 빈혈 여부 등 기본적인 건강 상태를 확인합니다.
                  </td>
                </tr>
                <tr style={{ background: '#fff', borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '20px', fontWeight: 600, color: '#333', verticalAlign: 'top' }}>
                    성장호르몬 자극검사
                  </td>
                  <td style={{ padding: '20px', color: '#666', lineHeight: 1.7 }}>
                    성장호르몬 결핍 여부를 정밀하게 확인하기 위한 전문 검사입니다.
                  </td>
                </tr>
                <tr style={{ background: '#fafafa' }}>
                  <td style={{ padding: '20px', fontWeight: 600, color: '#333', verticalAlign: 'top', borderRadius: '0 0 0 12px' }}>
                    신체 계측
                  </td>
                  <td style={{ padding: '20px', color: '#666', lineHeight: 1.7, borderRadius: '0 0 12px 0' }}>
                    키, 체중, 신체 비율을 측정하고 성장 곡선을 분석하여 성장 패턴을 파악합니다.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 치료 방법 */}
      <section className="layout_cure" style={{ background: '#fafafa' }}>
        <div className="w1240">
          <div className="sub_tit_wrap" data-aos="fade-up">
            <h3>저신장 치료</h3>
            <p>
              원인에 따른 맞춤 치료를 진행합니다.
            </p>
          </div>

          <div className="con_wrap" data-aos="fade-up">
            <div className="img_wrap">
              <Image
                src="/images/services/puberty/puberty_2_5_img1.png"
                alt="저신장 치료"
                width={500}
                height={400}
                style={{ width: '100%', maxWidth: '500px', height: 'auto', borderRadius: '20px' }}
                className="pc_block"
              />
              <Image
                src="/images/services/puberty/puberty_2_5_img1_m.png"
                alt="저신장 치료"
                width={400}
                height={350}
                style={{ width: '100%', height: 'auto', borderRadius: '20px' }}
                className="mobile_block"
              />
            </div>
            <div className="txt_wrap">
              <strong>성장호르몬 치료</strong>
              <p>
                성장호르몬 결핍이 확인된 경우, 성장호르몬 주사 치료를 시행합니다.
                <br /><br />
                <b>매일 잠자기 전</b>에 피하주사로 투여하며, 성장판이 닫히기 전까지 치료를 지속합니다.
                <br /><br />
                치료 효과는 개인마다 다르지만, 조기에 치료를 시작할수록 더 좋은 결과를 기대할 수 있습니다.
                정기적인 경과 관찰과 함께 충분한 수면, 균형 잡힌 식사, 규칙적인 운동이 함께 병행되어야 합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 성장 관리 팁 - 표 형식 */}
      <section style={{ padding: '100px 0' }}>
        <div className="w1240">
          <div className="sub_tit_wrap" data-aos="fade-up">
            <h3>건강한 성장을 위한 생활 습관</h3>
          </div>

          <div data-aos="fade-up" style={{ overflowX: 'auto' }}>
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontFamily: 'Pretendard',
                fontSize: '16px',
                minWidth: '600px',
              }}
            >
              <thead>
                <tr style={{ background: '#F5A623' }}>
                  <th style={{ padding: '18px 20px', color: '#fff', fontWeight: 600, textAlign: 'left', borderRadius: '12px 0 0 0' }}>
                    생활 습관
                  </th>
                  <th style={{ padding: '18px 20px', color: '#fff', fontWeight: 600, textAlign: 'left', borderRadius: '0 12px 0 0' }}>
                    권장 사항
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ background: '#fff', borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '20px', fontWeight: 600, color: '#333', verticalAlign: 'top', width: '180px' }}>
                    충분한 수면
                  </td>
                  <td style={{ padding: '20px', color: '#666', lineHeight: 1.7 }}>
                    성장호르몬은 주로 밤 10시~새벽 2시에 분비됩니다. 하루 8시간 이상 수면을 권장합니다.
                  </td>
                </tr>
                <tr style={{ background: '#fafafa', borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '20px', fontWeight: 600, color: '#333', verticalAlign: 'top' }}>
                    균형 잡힌 식사
                  </td>
                  <td style={{ padding: '20px', color: '#666', lineHeight: 1.7 }}>
                    단백질, 칼슘, 비타민D가 풍부한 음식을 섭취하세요. 과도한 당분 섭취는 피합니다.
                  </td>
                </tr>
                <tr style={{ background: '#fff', borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '20px', fontWeight: 600, color: '#333', verticalAlign: 'top' }}>
                    규칙적인 운동
                  </td>
                  <td style={{ padding: '20px', color: '#666', lineHeight: 1.7 }}>
                    농구, 수영, 줄넘기 등 성장판을 자극하는 운동이 도움됩니다.
                  </td>
                </tr>
                <tr style={{ background: '#fafafa' }}>
                  <td style={{ padding: '20px', fontWeight: 600, color: '#333', verticalAlign: 'top', borderRadius: '0 0 0 12px' }}>
                    스트레스 관리
                  </td>
                  <td style={{ padding: '20px', color: '#666', lineHeight: 1.7, borderRadius: '0 0 12px 0' }}>
                    스트레스는 성장호르몬 분비를 방해합니다. 적절한 휴식과 취미활동을 권장합니다.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
