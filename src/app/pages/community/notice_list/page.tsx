'use client';

import Link from 'next/link';
import Image from 'next/image';
import SubNav from '@/components/common/SubNav';

const navItems = [
  { title: '공지사항', path: '/pages/community/notice_list', active: true },
];

// 샘플 공지사항 데이터
const notices = [
  {
    id: 1,
    title: '2025년 1월 진료 안내',
    content: '안녕하세요, 메디모아의원입니다. 2025년 1월 진료 일정을 안내드립니다.',
    date: '2025.01.15',
    views: 156,
  },
  {
    id: 2,
    title: '설 연휴 진료 안내',
    content: '설 연휴 기간 진료 일정을 안내드립니다.',
    date: '2025.01.10',
    views: 203,
  },
  {
    id: 3,
    title: '독감 예방접종 안내',
    content: '2024-2025절기 독감 예방접종을 실시합니다.',
    date: '2025.01.05',
    views: 312,
  },
  {
    id: 4,
    title: '12월 휴진 안내',
    content: '12월 휴진 일정을 안내드립니다.',
    date: '2024.12.20',
    views: 145,
  },
  {
    id: 5,
    title: '영유아 건강검진 예약 안내',
    content: '국가 영유아 건강검진 예약 관련 안내입니다.',
    date: '2024.12.15',
    views: 278,
  },
  {
    id: 6,
    title: '아동발달센터 프로그램 안내',
    content: '아동발달센터 신규 프로그램을 안내드립니다.',
    date: '2024.12.10',
    views: 189,
  },
  {
    id: 7,
    title: '진료 시간 변경 안내',
    content: '진료 시간이 일부 변경되었습니다.',
    date: '2024.12.05',
    views: 421,
  },
  {
    id: 8,
    title: '성장클리닉 상담 안내',
    content: '성장클리닉 무료 상담 이벤트를 진행합니다.',
    date: '2024.11.28',
    views: 267,
  },
];

export default function NoticeListPage() {
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

      {/* 공지사항 리스트 */}
      <section className="notice_section">
        <div className="w1240">
          <div className="sub_tit_wrap" data-aos="fade-up">
            <span className="small_txt">Notice</span>
            <h3>공지사항</h3>
          </div>

          {/* 검색 영역 */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              marginBottom: '30px',
              gap: '10px',
            }}
            data-aos="fade-up"
          >
            <select
              style={{
                padding: '10px 15px',
                border: '1px solid #ddd',
                borderRadius: '8px',
                fontSize: '14px',
                color: 'var(--grayscale-800)',
                background: '#fff',
              }}
            >
              <option value="title">제목</option>
              <option value="content">내용</option>
              <option value="all">제목+내용</option>
            </select>
            <input
              type="text"
              placeholder="검색어를 입력하세요"
              style={{
                padding: '10px 15px',
                border: '1px solid #ddd',
                borderRadius: '8px',
                fontSize: '14px',
                width: '250px',
                outline: 'none',
              }}
            />
            <button
              style={{
                padding: '10px 25px',
                background: 'var(--primary-500)',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                fontSize: '14px',
                cursor: 'pointer',
              }}
            >
              검색
            </button>
          </div>

          {/* 공지사항 테이블 */}
          <div
            style={{
              overflowX: 'auto',
            }}
            data-aos="fade-up"
          >
            <table className="notice_table">
              <thead>
                <tr>
                  <th style={{ width: '80px' }}>번호</th>
                  <th>제목</th>
                  <th style={{ width: '120px' }}>등록일</th>
                  <th style={{ width: '100px' }}>조회수</th>
                </tr>
              </thead>
              <tbody>
                {notices.map((notice, index) => (
                  <tr key={notice.id}>
                    <td>{notices.length - index}</td>
                    <td className="title">
                      <Link href={`/pages/community/notice_list?id=${notice.id}`}>
                        {notice.title}
                      </Link>
                    </td>
                    <td>{notice.date}</td>
                    <td>{notice.views}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 페이지네이션 */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '5px',
              marginTop: '40px',
            }}
            data-aos="fade-up"
          >
            <button
              style={{
                width: '36px',
                height: '36px',
                border: '1px solid #ddd',
                borderRadius: '8px',
                background: '#fff',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <i className="ri-arrow-left-s-line"></i>
            </button>
            {[1, 2, 3, 4, 5].map((page) => (
              <button
                key={page}
                style={{
                  width: '36px',
                  height: '36px',
                  border: page === 1 ? '1px solid var(--primary-500)' : '1px solid #ddd',
                  borderRadius: '8px',
                  background: page === 1 ? 'var(--primary-500)' : '#fff',
                  color: page === 1 ? '#fff' : 'var(--grayscale-800)',
                  cursor: 'pointer',
                  fontWeight: page === 1 ? 600 : 400,
                  fontSize: '14px',
                }}
              >
                {page}
              </button>
            ))}
            <button
              style={{
                width: '36px',
                height: '36px',
                border: '1px solid #ddd',
                borderRadius: '8px',
                background: '#fff',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <i className="ri-arrow-right-s-line"></i>
            </button>
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
    </>
  );
}
