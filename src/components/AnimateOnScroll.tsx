'use client';

import { useEffect } from 'react';

/**
 * SSR 친화적 스크롤 애니메이션 초기화 컴포넌트
 * 
 * 동작 방식:
 * 1. 컴포넌트 마운트 시 body에 'animate-ready' 클래스 추가
 * 2. Intersection Observer로 [data-animate] 요소 감시
 * 3. 뷰포트에 들어오면 'in-view' 클래스 추가 → 애니메이션 실행
 * 4. Fallback: 3초 후 모든 요소 강제 표시
 */
export default function AnimateOnScroll() {
  useEffect(() => {
    // Intersection Observer 지원 체크
    if (!('IntersectionObserver' in window)) {
      // 지원하지 않으면 애니메이션 비활성화 (모든 요소 기본 표시)
      return;
    }

    // 약간의 지연 후 애니메이션 시작 (페이지 렌더링 완료 대기)
    const initTimeout = setTimeout(() => {
      // 1. 애니메이션 준비 상태 표시
      document.body.classList.add('animate-ready');

      const animateElements = document.querySelectorAll('[data-animate]');
      
      // 2. Intersection Observer 설정
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in-view');
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.05, // 5% 보이면 트리거 (더 민감하게)
          rootMargin: '50px 0px 0px 0px', // 위쪽 50px 여유 (화면 위 요소도 감지)
        }
      );

      // 3. 애니메이션 대상 요소 감시 시작
      animateElements.forEach((el) => observer.observe(el));

      // 4. Fallback: 3초 후 모든 요소 강제 표시 (Observer 실패 대비)
      const fallbackTimeout = setTimeout(() => {
        animateElements.forEach((el) => {
          el.classList.add('in-view');
        });
      }, 3000);

      // 클린업 함수 저장
      (window as any).__animateCleanup = () => {
        observer.disconnect();
        clearTimeout(fallbackTimeout);
      };
    }, 100); // 100ms 지연 후 시작

    // 클린업
    return () => {
      clearTimeout(initTimeout);
      if ((window as any).__animateCleanup) {
        (window as any).__animateCleanup();
      }
      document.body.classList.remove('animate-ready');
    };
  }, []);

  return null;
}
