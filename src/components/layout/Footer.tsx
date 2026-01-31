'use client';

import { useState } from 'react';
import Link from 'next/link';

type ModalType = 'privacy' | 'uninsured' | 'patient' | null;

export default function Footer() {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const openModal = (type: ModalType) => {
    setActiveModal(type);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setActiveModal(null);
    document.body.style.overflow = '';
  };

  return (
    <>
      <footer className="global_footer">
        <div className="con_wrap">
          <div className="info_wrap" data-aos="fade-right" data-aos-duration="1000">
            <img className="logo" src="/images/logo/t_logo.svg" alt="메디모아의원" />
            <div className="info">
              <div className="group">
                <div className="tit_wrap">
                  <span>주</span>
                  <span>소</span>
                </div>
                <p>경기 수원시 권선구 수인로 291 <br />
                서수원이마트 3층, 메디모아의원</p>
              </div>
              <div className="group">
                <div className="tit_wrap">
                  <span>대</span>
                  <span>표</span>
                  <span>번</span>
                  <span>호</span>
                </div>
                <a href="tel:031-294-1575">031)294-1575</a>
              </div>
              <div className="group">
                <div className="tit_wrap">
                  <span>아동발달센터 번호</span>
                </div>
                <a href="tel:031-548-0615">031)548-0615</a>
              </div>
              <div className="group">
                <div className="tit_wrap">
                  <span>진</span>
                  <span>료</span>
                  <span>시</span>
                  <span>간</span>
                </div>
                <ul>
                  <li>
                    <span>평일</span>
                    <span>10:00 - 19:00</span>
                  </li>
                  <li>
                    <span>주말/공휴일</span>
                    <span>10:00 - 14:00</span>
                  </li>
                  <li>
                    <span>둘째, 넷째주 일요일 휴진</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="map_wrap" data-aos="fade-left" data-aos-duration="1000">
            <div className="root_daum_roughmap">
              <iframe 
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=%EC%84%9C%EC%88%98%EC%9B%90%EC%9D%B4%EB%A7%88%ED%8A%B8&zoom=17"
                width="100%"
                height="360"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="foot_b">
          <ul className="pri_wrap">
            <li>
              <Link href="/">메디모아의원</Link>
            </li>
            <li>
              <button type="button" onClick={() => openModal('privacy')}>개인정보취급방침</button>
            </li>
            <li>
              <button type="button" onClick={() => openModal('uninsured')}>비급여항목</button>
            </li>
            <li>
              <button type="button" onClick={() => openModal('patient')}>환자권리</button>
            </li>
          </ul>
          <div className="bottom">
            <p>주소. 경기 수원시 권선구 수인로 291 서수원이마트 3층 메디모아의원</p>
            <p>대표자. 고창범</p>
            <p>사업자번호. 220-99-00457</p>
            <p>대표이메일. lovekidme@daum.net</p>
            <p>ⓒ 2025 메디모아의원</p>
          </div>
        </div>
      </footer>

      {/* 개인정보취급방침 모달 */}
      {activeModal === 'privacy' && (
        <div className="modal_overlay" onClick={closeModal}>
          <div className="modal_content" onClick={(e) => e.stopPropagation()}>
            <div className="modal_header">
              <h3>개인정보취급방침</h3>
              <button type="button" className="modal_close" onClick={closeModal}>×</button>
            </div>
            <div className="modal_body">
              <strong>메디모아의원 개인정보취급방침</strong>
              <p>◆ 메디모아의원은 개인정보 보호법 제30조에 따라 정보주체(고객)의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리 지침을 수립, 공개합니다.</p>

              <strong>1. 개인정보 수집/이용 목적</strong>
              <p>□ 개인정보의 수집 및 이용목적 회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다.</p>
              <p>ο 서비스 제공에 관한 계약 이행 및 서비스 제공에 따른 콘텐츠 제공</p>
              <p>ο 서비스 이용에 따른 본인확인, 개인 식별, 불량회원의 부정 이용 방지와 비인가 사용방지, 불만처리 등 민원처리, 고지사항 전달</p>
              <p>ο 마케팅 및 광고에 활용 이벤트 및 광고성 정보 제공 및 참여기회 제공, 인구통계학적 특성에 따른 서비스 제공 및 광고 게재, 접속 빈도 파악 또는 서비스 이용에 대한 통계</p>
              <p>ο 민원인의 신원 확인, 민원사항 확인, 사실조사를 위한 연락·통지, 처리결과 통보 등을 목적</p>

              <strong>2. 수집하려는 개인정보의 항목</strong>
              <p>□ 회원가입, 상담, 서비스 신청 등등을 위해 아래와 같은 개인정보를 수집하고 있습니다.</p>
              <p>ο 수집항목 : 이름, 생년월일, 로그인ID, 비밀번호, 휴대전화번호, 이메일 주소, 접속로그, 쿠키, 서비스이용기록</p>
              <p>ο 선택항목 : 지점, 관심분야, 이벤트선택항목, 가입경로, 메일링 및 SMS 서비스 수신여부</p>
              <p>ο 보유기간 : 별도 수신거부 또는 회원탈퇴를 요청하기 전까지 준영구</p>
              <p>ο 개인정보 수집방법 : 홈페이지(회원가입, 상담게시판, 예약게시판, 간편로그인 등)</p>

              <strong>3. 개인정보의 보유 및 이용기간</strong>
              <p>① 메디모아의원은 정보주체로부터 개인정보를 수집할 때 동의 받은 개인정보 보유ㆍ이용기간 또는 법령에 따른 개인정보 보유ㆍ이용기간 내에서 개인정보를 처리ㆍ보유합니다.</p>
              <p>② 구체적인 개인정보 처리 및 보유 기간은 다음과 같습니다.</p>
              <p>ο 고객 가입 및 관리 : 서비스 이용계약 또는 해지시까지, 다만 채권ㆍ채무관계 잔존시에는 해당 채권ㆍ채무관계 정산시까지</p>
              <p>ο 전자상거래에서의 계약ㆍ청약철회, 대금결제, 재화 등 공급기록 : 5년</p>
              <p>ο 진단 및 치료를 위해 수집된 경우 의료법 기준에 준함</p>

              <strong>4. 개인정보의 제3자 제공</strong>
              <p>메디모아의원은 정보주체의 별도 동의, 법률의 특별한 규정 등 개인정보 보호법 제17조에 해당하는 경우 외에는 개인정보를 제3자에게 제공하지 않습니다.</p>

              <strong>5. 정보주체의 권리ㆍ의무 및 행사방법</strong>
              <p>정보주체는 메디모아의원에 대해 언제든지 다음 각 호의 개인 정보 보호 관련 권리를 행사할 수 있습니다.</p>
              <p>① 개인정보 열람요구 ② 오류 등이 있을 경우 정정 요구 ③ 삭제요구 ④ 처리정지 요구</p>

              <strong>10. 개인정보 보호책임자</strong>
              <p>ο 개인정보 보호책임자</p>
              <p>- 성명 : 고창범</p>
              <p>- 연락처 : 031) 294-1575</p>

              <strong>13. 이 개인정보 취급방침은 2025년 5월 20일부터 적용됩니다.</strong>
            </div>
          </div>
        </div>
      )}

      {/* 환자권리 모달 */}
      {activeModal === 'patient' && (
        <div className="modal_overlay" onClick={closeModal}>
          <div className="modal_content" onClick={(e) => e.stopPropagation()}>
            <div className="modal_header">
              <h3>환자의 권리와 의무</h3>
              <button type="button" className="modal_close" onClick={closeModal}>×</button>
            </div>
            <div className="modal_body">
              <strong>환자권리장전</strong>
              <p>모든 환자는 인간으로서 존엄과 가치를 지니고, 건강한 삶을 영위하기 위해 다음과 같은 권리를 가지며 이에 따른 책임과 의무를 가진다.</p>

              <strong>환자의 권리</strong>
              <p>① 환자는 인간으로서의 존엄과 가치를 바탕으로 인격을 존중 받을 권리가 있다.</p>
              <p>② 환자는 국적, 성별, 연령, 종교, 경제·사회적 지위, 질병의 종류 등 어떤 이유로도 차별 받지 않으며, 평등한 의료 서비스를 받을 권리가 있다.</p>
              <p>③ 환자는 최선의 진료를 위하여 지정의 및 의료기관을 선택할 권리가 있다.</p>
              <p>④ 환자는 적법한 자격을 갖춘 의료인으로부터 의료행위를 제공받을 권리가 있다.</p>
              <p>⑤ 환자 및 보호자는 환자의 진료기록에 관한 정보 및 기록을 요구할 권리가 있다.</p>
              <p>⑥ 환자 및 보호자는 환자의 질병상태 및 치료 행위의 목적, 방법, 내용과 그 결과에 대해 설명을 듣고, 치료 방법 또는 치료 거부에 대해 선택할 권리가 있다.</p>
              <p>⑦ 환자 및 보호자는 의료행위와 관련된 문서에 서명하기 전에 그 내용에 대해 설명을 들을 권리가 있다.</p>
              <p>⑧ 환자 및 보호자는 의료행위에 소요된 의료비 내역에 대해 알 권리가 있다.</p>
              <p>⑨ 환자는 질병, 치료에 관련된 정보 및 사생활에 관한 모든 비밀을 침해 받지 않을 권리가 있다.</p>
              <p>⑩ 환자 및 보호자는 병원 내 의료서비스를 포함한 기타 사항에 대해 불만이 있을 경우, 의견을 표현하고 그에 대하여 답변을 들을 권리가 있다.</p>

              <strong>환자의 책임</strong>
              <p>① 환자는 현재 증상, 과거 병력, 약물 치료 및 기타 기록 등 진료에 관련된 사안을 직접 또는 법적 대리인을 통해 의료진에게 제공할 책임이 있다.</p>
              <p>② 본인의 치료와 관련해 모르는 점이 있을 때, 확인 할 책임이 있다.</p>
              <p>③ 환자는 의료진이 권장한 치료 계획에 참여하고, 치료에 협력할 책임이 있다.</p>
              <p>④ 환자는 치료 계획 불응 시 발생한 결과에 대한 책임이 있다.</p>
              <p>⑤ 환자는 다른 환자 및 의료진을 존중하며, 병원의 자산을 중요시 할 책임이 있다.</p>
              <p>⑥ 환자는 치료와 관련된 재정적 의무를 다할 책임이 있다.</p>
              <p>⑦ 환자는 병원의 규칙 및 규정에 따를 책임이 있다.</p>
            </div>
          </div>
        </div>
      )}

      {/* 비급여항목 모달 */}
      {activeModal === 'uninsured' && (
        <div className="modal_overlay" onClick={closeModal}>
          <div className="modal_content modal_wide" onClick={(e) => e.stopPropagation()}>
            <div className="modal_header">
              <h3>비급여 비용 안내</h3>
              <button type="button" className="modal_close" onClick={closeModal}>×</button>
            </div>
            <div className="modal_body">
              <p className="notice_txt">의료법 제45조 제1항 및 제2항과 시행규칙 제42조의 2 제1항 및 제2항에 의하여 비급여 진료비용을 고지합니다.<br />
              비급여 진료비용은 단일 개별 항목의 1회 비용이므로 진료과정에서 처방량에 따라 해당 항목의 비용이 달라질 수 있습니다.</p>
              
              <strong>제증명수수료</strong>
              <div className="table_scroll">
                <table className="cost_table">
                  <thead>
                    <tr>
                      <th>분류</th>
                      <th>명칭</th>
                      <th>기준</th>
                      <th>비용(원)</th>
                      <th>특이사항</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>제증명수수료</td>
                      <td>일반진단서</td>
                      <td>-</td>
                      <td>20,000</td>
                      <td>의료법 시행규칙에 따라 의사가 진찰하거나 검사한 결과를 종합하여 작성한 진단서</td>
                    </tr>
                    <tr>
                      <td>제증명수수료</td>
                      <td>영문 일반진단서</td>
                      <td>-</td>
                      <td>20,000</td>
                      <td>의료법 시행규칙에 따라 의사가 영문으로 작성한 일반 진단서</td>
                    </tr>
                    <tr>
                      <td>제증명수수료</td>
                      <td>통원확인서</td>
                      <td>-</td>
                      <td>1,000</td>
                      <td>환자의 인적사항과 외래 진료일을 기재하여 발급하는 확인서</td>
                    </tr>
                    <tr>
                      <td>제증명수수료</td>
                      <td>진료확인서</td>
                      <td>-</td>
                      <td>1,000</td>
                      <td>환자의 인적사항과 특정 진료내역을 기재하여 발급하는 확인서</td>
                    </tr>
                    <tr>
                      <td>제증명수수료</td>
                      <td>진료기록사본(1~5매)</td>
                      <td>1매당</td>
                      <td>1,000</td>
                      <td>진료기록부 등을 복사하는 경우 (1~5매까지, 1매당 금액)</td>
                    </tr>
                    <tr>
                      <td>제증명수수료</td>
                      <td>진료기록사본(6매 이상)</td>
                      <td>1매당</td>
                      <td>100</td>
                      <td>진료기록부 등을 복사하는 경우 (6매부터, 1매당 금액)</td>
                    </tr>
                    <tr>
                      <td>제증명수수료</td>
                      <td>진료비세부내역서</td>
                      <td>-</td>
                      <td>1,000</td>
                      <td>과거 진료비 세부내역서 발행시 1매당 금액</td>
                    </tr>
                    <tr>
                      <td>제증명수수료</td>
                      <td>제증명서 사본</td>
                      <td>-</td>
                      <td>1,000</td>
                      <td>기존의 제증명서를 복사(재발급)하는 경우</td>
                    </tr>
                    <tr>
                      <td>제증명수수료</td>
                      <td>영상기록 복사</td>
                      <td>CD</td>
                      <td>5,000</td>
                      <td>의료법에 따른 기록 열람 등의 요건을 충족할 경우 사본 발급</td>
                    </tr>
                    <tr>
                      <td>제증명수수료</td>
                      <td>보험회사 대리 서류발행</td>
                      <td>장당</td>
                      <td>1,000</td>
                      <td>기존의 제증명서를 복사(재발급)하는 경우</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <strong>코로나, 폐렴, 백일해검사</strong>
              <div className="table_scroll">
                <table className="cost_table">
                  <thead>
                    <tr>
                      <th>분류</th>
                      <th>명칭</th>
                      <th>비용(원)</th>
                      <th>특이사항</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>검사</td>
                      <td>코로나 PCR 검사</td>
                      <td>120,000</td>
                      <td rowSpan={5}>각 검사 시행시 보험 청구 서류를 원하시면 당일만 무료 발행입니다. 필요시 원내 데스크에 말씀해주세요.</td>
                    </tr>
                    <tr>
                      <td>검사</td>
                      <td>독감 코로나 동시 신속검사</td>
                      <td>40,000</td>
                    </tr>
                    <tr>
                      <td>검사</td>
                      <td>코로나 신속 항원검사</td>
                      <td>20,000</td>
                    </tr>
                    <tr>
                      <td>검사</td>
                      <td>인플루엔자 신속검사</td>
                      <td>30,000</td>
                    </tr>
                    <tr>
                      <td>검사</td>
                      <td>폐렴 원인균 진단검사</td>
                      <td>문의</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .modal_overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: 20px;
        }

        .modal_content {
          background: #fff;
          border-radius: 16px;
          max-width: 700px;
          width: 100%;
          max-height: 80vh;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .modal_content.modal_wide {
          max-width: 900px;
        }

        .modal_header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 25px;
          border-bottom: 1px solid #eee;
          background: #f9f9f9;
        }

        .modal_header h3 {
          font-family: 'Pretendard', sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: #333;
          margin: 0;
        }

        .modal_close {
          background: none;
          border: none;
          font-size: 28px;
          cursor: pointer;
          color: #999;
          line-height: 1;
          padding: 0;
        }

        .modal_close:hover {
          color: #333;
        }

        .modal_body {
          padding: 25px;
          overflow-y: auto;
          font-family: 'Pretendard', sans-serif;
          font-size: 14px;
          line-height: 1.8;
          color: #555;
        }

        .modal_body strong {
          display: block;
          font-size: 16px;
          font-weight: 600;
          color: #333;
          margin: 25px 0 10px;
        }

        .modal_body strong:first-child {
          margin-top: 0;
        }

        .modal_body p {
          margin: 8px 0;
        }

        .modal_body .notice_txt {
          background: #f5f5f5;
          padding: 15px;
          border-radius: 8px;
          margin-bottom: 20px;
          font-size: 13px;
        }

        .table_scroll {
          overflow-x: auto;
          margin: 15px 0;
        }

        .cost_table {
          width: 100%;
          border-collapse: collapse;
          font-size: 13px;
          min-width: 500px;
        }

        .cost_table th,
        .cost_table td {
          border: 1px solid #ddd;
          padding: 12px 10px;
          text-align: center;
        }

        .cost_table th {
          background: #eb5945;
          color: #fff;
          font-weight: 600;
        }

        .cost_table td {
          background: #fff;
        }

        .cost_table tbody tr:nth-child(even) td {
          background: #fafafa;
        }

        .cost_table td:last-child {
          text-align: left;
          font-size: 12px;
        }

        .foot_b .pri_wrap button {
          background: none;
          border: none;
          color: inherit;
          font-size: inherit;
          cursor: pointer;
          padding: 0;
        }

        .foot_b .pri_wrap button:hover {
          text-decoration: underline;
        }

        @media screen and (max-width: 768px) {
          .modal_content {
            max-height: 90vh;
          }

          .modal_header {
            padding: 15px 20px;
          }

          .modal_header h3 {
            font-size: 18px;
          }

          .modal_body {
            padding: 20px;
            font-size: 13px;
          }

          .modal_body strong {
            font-size: 15px;
          }
        }
      `}</style>
    </>
  );
}
