'use client';

import Link from 'next/link';
import SubNav from '@/components/common/SubNav';
import { useState } from 'react';

const navItems = [
  { title: '공지사항', path: '/pages/community/notice_list', active: true },
];

// 공지사항 데이터 (Markdown 파일에서 추출한 frontmatter 기반)
// 실제 배포 시 content/notices/ 폴더의 Markdown 파일에서 읽어옴
const notices = [
  {
    id: 1,
    title: '2025년 추석 연휴 진료 안내',
    date: '2025.09.20',
    slug: '001_추석연휴_진료안내',
  },
  {
    id: 2,
    title: '2025년 독감 예방접종 안내',
    date: '2025.09.15',
    slug: '002_독감예방접종_안내',
  },
];

export default function NoticeListPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState('title');

  // 검색 필터링
  const filteredNotices = notices.filter((notice) => {
    if (!searchTerm) return true;
    if (searchType === 'title') {
      return notice.title.toLowerCase().includes(searchTerm.toLowerCase());
    }
    return notice.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

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
              value={searchType}
              onChange={(e) => setSearchType(e.target.value)}
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
              <option value="all">전체</option>
            </select>
            <input
              type="text"
              placeholder="검색어를 입력하세요"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
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
              onClick={() => {}}
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

          {/* 공지사항 테이블 - 조회수 컬럼 제거 */}
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
                </tr>
              </thead>
              <tbody>
                {filteredNotices.length > 0 ? (
                  filteredNotices.map((notice, index) => (
                    <tr key={notice.id}>
                      <td>{filteredNotices.length - index}</td>
                      <td className="title">
                        <Link href={`/pages/community/notice_detail/${notice.id}`}>
                          {notice.title}
                        </Link>
                      </td>
                      <td>{notice.date}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={3} style={{ textAlign: 'center', padding: '40px 0', color: '#999' }}>
                      검색 결과가 없습니다.
                    </td>
                  </tr>
                )}
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
            <button
              style={{
                width: '36px',
                height: '36px',
                border: '1px solid var(--primary-500)',
                borderRadius: '8px',
                background: 'var(--primary-500)',
                color: '#fff',
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: '14px',
              }}
            >
              1
            </button>
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
