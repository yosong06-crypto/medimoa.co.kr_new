'use client';

import Link from 'next/link';
import SubNav from '@/components/common/SubNav';
import { useParams } from 'next/navigation';

const navItems = [
  { title: '공지사항', path: '/pages/community/notice_list', active: true },
];

// 공지사항 상세 데이터
const noticeDetails: Record<string, { title: string; date: string; content: string }> = {
  '1': {
    title: '2025년 추석 연휴 진료 안내',
    date: '2025.09.20',
    content: `
      <h2>2025년 추석 연휴 진료 안내</h2>
      <p>안녕하세요, 메디모아의원입니다.</p>
      <p>2025년 추석 연휴 진료 일정을 안내해 드립니다.</p>
      
      <h3>휴진 안내</h3>
      <table class="notice_content_table">
        <thead>
          <tr>
            <th>날짜</th>
            <th>요일</th>
            <th>진료 여부</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>10월 4일 (토)</td>
            <td>토요일</td>
            <td><strong>정상 진료</strong> (10:00 - 14:00)</td>
          </tr>
          <tr>
            <td>10월 5일 (일)</td>
            <td>일요일 (추석 전날)</td>
            <td><strong style="color: var(--primary-500);">휴진</strong></td>
          </tr>
          <tr>
            <td>10월 6일 (월)</td>
            <td>추석 당일</td>
            <td><strong style="color: var(--primary-500);">휴진</strong></td>
          </tr>
          <tr>
            <td>10월 7일 (화)</td>
            <td>대체공휴일</td>
            <td><strong style="color: var(--primary-500);">휴진</strong></td>
          </tr>
          <tr>
            <td>10월 8일 (수)</td>
            <td>수요일</td>
            <td><strong>정상 진료</strong> (10:00 - 19:00)</td>
          </tr>
        </tbody>
      </table>
      
      <h3>응급 상황 안내</h3>
      <ul>
        <li>휴진 기간 중 응급 상황 발생 시 <strong>119</strong> 또는 가까운 응급실을 이용해 주세요.</li>
        <li>경기도 의료기관 정보: 경기도 응급의료정보센터 (https://www.e-gen.or.kr)</li>
      </ul>
      
      <h3>진료 예약 안내</h3>
      <ul>
        <li>추석 연휴 전후로 진료가 집중될 수 있으니, <strong>사전 예약</strong>을 권장합니다.</li>
        <li>예약 문의: <strong>031-294-1575</strong></li>
        <li>아동발달센터: <strong>031-548-0615</strong></li>
      </ul>
      
      <h3>약 처방 안내</h3>
      <p>만성질환 (고혈압, 당뇨 등) 환자분들께서는 연휴 전에 <strong>충분한 약</strong>을 처방받으시기 바랍니다.</p>
      
      <hr />
      
      <p>즐거운 추석 연휴 보내시고, 건강한 모습으로 뵙겠습니다.</p>
      <p>감사합니다.</p>
      <p><strong>메디모아의원 드림</strong></p>
    `,
  },
  '2': {
    title: '2025년 독감 예방접종 안내',
    date: '2025.09.15',
    content: `
      <h2>2025년 독감(인플루엔자) 예방접종 안내</h2>
      <p>안녕하세요, 메디모아의원입니다.</p>
      <p>2025-2026절기 독감 예방접종을 실시합니다.</p>
      
      <h3>접종 기간</h3>
      <ul>
        <li><strong>무료 접종</strong>: 2025년 10월 15일 ~ 2026년 4월 30일</li>
        <li><strong>유료 접종</strong>: 2025년 9월 20일부터 접종 가능</li>
      </ul>
      
      <h3>무료 접종 대상</h3>
      <table class="notice_content_table">
        <thead>
          <tr>
            <th>대상</th>
            <th>접종 시작일</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>생후 6개월 ~ 만 13세 어린이</td>
            <td>10월 15일</td>
          </tr>
          <tr>
            <td>만 65세 이상 어르신</td>
            <td>10월 15일</td>
          </tr>
          <tr>
            <td>임산부</td>
            <td>10월 15일</td>
          </tr>
        </tbody>
      </table>
      
      <h3>접종 백신</h3>
      <ul>
        <li><strong>4가 독감백신</strong> 사용 (A형 2종 + B형 2종)</li>
        <li>국가인증 정품 백신만 사용</li>
      </ul>
      
      <h3>접종 비용</h3>
      <table class="notice_content_table">
        <thead>
          <tr>
            <th>구분</th>
            <th>비용</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>무료 접종 대상자</td>
            <td><strong style="color: var(--primary-500);">무료</strong></td>
          </tr>
          <tr>
            <td>성인 (만 19세 ~ 64세)</td>
            <td>45,000원</td>
          </tr>
          <tr>
            <td>고용량 백신 (65세 이상 권장)</td>
            <td>65,000원</td>
          </tr>
        </tbody>
      </table>
      
      <h3>접종 전 주의사항</h3>
      <ol>
        <li><strong>컨디션이 좋은 날</strong> 접종하세요</li>
        <li>발열, 감기 증상이 있으면 접종을 미뤄주세요</li>
        <li>계란 알레르기가 있는 경우 사전에 알려주세요</li>
        <li>접종 후 <strong>15~30분간 원내 대기</strong> 후 귀가해 주세요</li>
      </ol>
      
      <h3>접종 후 주의사항</h3>
      <ul>
        <li>접종 부위가 붓거나 아플 수 있습니다 (정상 반응)</li>
        <li>접종 당일은 <strong>격렬한 운동, 음주, 사우나</strong>를 피해주세요</li>
        <li>고열, 두드러기 등 이상반응 시 즉시 내원해 주세요</li>
      </ul>
      
      <h3>예약 안내</h3>
      <ul>
        <li><strong>전화 예약</strong>: 031-294-1575</li>
        <li><strong>방문 예약</strong>: 메디모아의원 1층 접수처</li>
        <li>예약 없이 방문 시 대기 시간이 길어질 수 있습니다</li>
      </ul>
      
      <hr />
      
      <p>독감은 예방이 최선입니다. 건강한 겨울을 위해 미리 접종받으세요!</p>
      <p>감사합니다.</p>
      <p><strong>메디모아의원 드림</strong></p>
    `,
  },
};

export default function NoticeDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const notice = noticeDetails[id];

  if (!notice) {
    return (
      <>
        <div
          className="sub_visual"
          style={{ backgroundImage: 'url(/images/backgrounds/sub_community_bg.png)' }}
        >
          <div className="txt_wrap">
            <h2>공지사항</h2>
            <p>메디모아의원의 소식을 알려드립니다</p>
          </div>
        </div>
        <SubNav items={navItems} />
        <section className="notice_section">
          <div className="w1240" style={{ textAlign: 'center', padding: '100px 0' }}>
            <p style={{ fontSize: '18px', color: '#999' }}>존재하지 않는 공지사항입니다.</p>
            <Link
              href="/pages/community/notice_list"
              style={{
                display: 'inline-block',
                marginTop: '20px',
                padding: '12px 30px',
                background: 'var(--primary-500)',
                color: '#fff',
                borderRadius: '8px',
                textDecoration: 'none',
              }}
            >
              목록으로 돌아가기
            </Link>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      {/* Sub Visual */}
      <div
        className="sub_visual"
        style={{ backgroundImage: 'url(/images/backgrounds/sub_community_bg.png)' }}
      >
        <div className="txt_wrap">
          <h2>공지사항</h2>
          <p>메디모아의원의 소식을 알려드립니다</p>
        </div>
      </div>

      {/* Sub Navigation */}
      <SubNav items={navItems} />

      {/* 공지사항 상세 */}
      <section className="notice_section">
        <div className="w1240">
          {/* 제목 영역 */}
          <div
            style={{
              borderBottom: '2px solid var(--grayscale-800)',
              paddingBottom: '20px',
              marginBottom: '30px',
            }}
           
          >
            <h2
              style={{
                fontSize: '28px',
                fontWeight: 600,
                color: 'var(--grayscale-800)',
                marginBottom: '15px',
                lineHeight: '1.4',
              }}
            >
              {notice.title}
            </h2>
            <div
              style={{
                display: 'flex',
                gap: '20px',
                fontSize: '14px',
                color: 'var(--grayscale-60001)',
              }}
            >
              <span>등록일: {notice.date}</span>
            </div>
          </div>

          {/* 내용 영역 */}
          <div
            className="notice_content"
            style={{
              padding: '40px 0',
              minHeight: '400px',
              lineHeight: '1.8',
              fontSize: '16px',
              color: 'var(--grayscale-800)',
            }}
           
            dangerouslySetInnerHTML={{ __html: notice.content }}
          />

          {/* 버튼 영역 */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '10px',
              marginTop: '40px',
              paddingTop: '30px',
              borderTop: '1px solid #eee',
            }}
           
          >
            <Link
              href="/pages/community/notice_list"
              style={{
                display: 'inline-block',
                padding: '14px 40px',
                background: 'var(--grayscale-800)',
                color: '#fff',
                borderRadius: '8px',
                textDecoration: 'none',
                fontSize: '15px',
                fontWeight: 500,
              }}
            >
              목록으로
            </Link>
          </div>
        </div>
      </section>

      {/* 문의 안내 */}
      <section style={{ padding: '60px 0', background: '#fff' }}>
        <div className="w1240" style={{ textAlign: 'center' }}>
          <p
            style={{
              fontSize: '16px',
              color: 'var(--grayscale-60001)',
              marginBottom: '15px',
            }}
          >
            궁금한 사항이 있으시면 언제든지 문의해 주세요.
          </p>
          <a
            href="tel:031-294-1575"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              color: 'var(--primary-500)',
              fontSize: '22px',
              fontWeight: 600,
            }}
          >
            <i className="ri-phone-fill"></i>
            031-294-1575
          </a>
        </div>
      </section>

      {/* 상세 페이지 스타일 */}
      <style jsx global>{`
        .notice_content h2 {
          font-size: 24px;
          font-weight: 600;
          color: var(--grayscale-800);
          margin: 30px 0 15px;
        }
        .notice_content h3 {
          font-size: 20px;
          font-weight: 600;
          color: var(--grayscale-800);
          margin: 25px 0 12px;
          padding-left: 12px;
          border-left: 3px solid var(--primary-500);
        }
        .notice_content p {
          margin-bottom: 12px;
        }
        .notice_content ul, .notice_content ol {
          margin: 15px 0;
          padding-left: 25px;
        }
        .notice_content li {
          margin-bottom: 8px;
        }
        .notice_content hr {
          border: none;
          border-top: 1px solid #eee;
          margin: 30px 0;
        }
        .notice_content_table {
          width: 100%;
          border-collapse: collapse;
          margin: 15px 0;
        }
        .notice_content_table th,
        .notice_content_table td {
          padding: 12px 15px;
          border: 1px solid #ddd;
          text-align: left;
        }
        .notice_content_table th {
          background: var(--grayscale-5002);
          font-weight: 600;
        }
        .notice_content_table td strong {
          font-weight: 600;
        }
      `}</style>
    </>
  );
}
