'use client';

import { useEffect } from 'react';

/**
 * SSR 친화적 스크롤 애니메이션 초기화 컴포넌트
 * 
 * 동작 방식:
 * 1. 컴포넌트 마운트 시 body에 'animate-ready' 클래스 추가
 * 2. Intersection Observer로 [data-animate] 요소 감시
 * 3. 뷰포트에 들어오면 'in-view' 클래스 추가 → 애니메이션 실행
 * 
 * 장점:
 * - JS 로드 전에도 콘텐츠가 보임 (opacity: 1 기본)
 * - JS 로드 실패 시에도 콘텐츠 정상 표시
 * - 서버 렌더링과 완벽 호환
 */
export default function AnimateOnScroll() {
  useEffect(() => {
    // 1. 애니메이션 준비 상태 표시
    document.body.classList.add('animate-ready');

    // 2. Intersection Observer 설정
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            // 한 번 애니메이션 후 감시 중단 (성능 최적화)
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1, // 10% 보이면 트리거
        rootMargin: '0px 0px -50px 0px', // 아래쪽 50px 여유
      }
    );

    // 3. 애니메이션 대상 요소 감시 시작
    const animateElements = document.querySelectorAll('[data-animate]');
    animateElements.forEach((el) => observer.observe(el));

    // 4. 클린업
    return () => {
      observer.disconnect();
      document.body.classList.remove('animate-ready');
    };
  }, []);

  return null; // UI 렌더링 없음
}
