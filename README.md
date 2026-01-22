# Medimoa 의원 클론 - Next.js 프로젝트

## 프로젝트 개요
- **이름**: Medimoa 의원 웹사이트 클론
- **목표**: 원본 사이트(https://medimoa.co.kr)와 100% 시각적/기능적 동일 복제
- **플랫폼**: Next.js 16 + TypeScript + Swiper + AOS
- **페이지 수**: 13개 (메인 1 + 서브 12)

## 미리보기 URL
- **샌드박스**: https://3000-i4rsin9n7u81w9gvoapvh-5634da27.sandbox.novita.ai

## 구현된 페이지 (13개 - 모두 HTTP 200 정상)

### 메인 페이지
| 경로 | 설명 | 상태 |
|------|------|------|
| `/` | 홈페이지 (Hero 슬라이더, 서비스 소개, 진료안내, 공지사항, 오시는길) | ✅ |

### 의원소개 (Intro)
| 경로 | 설명 | 상태 |
|------|------|------|
| `/pages/intro/intro_1` | 인사말 | ✅ |
| `/pages/intro/intro_2` | 의료진 | ✅ |
| `/pages/intro/intro_3` | 둘러보기 | ✅ |
| `/pages/intro/intro_4` | 오시는길 | ✅ |

### 성조숙증 성장 클리닉 (Puberty)
| 경로 | 설명 | 상태 |
|------|------|------|
| `/pages/puberty/puberty_1` | 성조숙증 | ✅ |
| `/pages/puberty/puberty_2` | 저신장 | ✅ |

### 아동발달센터 (Child)
| 경로 | 설명 | 상태 |
|------|------|------|
| `/pages/child/child_1` | 아동발달센터 | ✅ |

### 검사안내 (Test)
| 경로 | 설명 | 상태 |
|------|------|------|
| `/pages/test/test_1` | 국가영유아검진 | ✅ |
| `/pages/test/test_2` | 영유아발달검진 | ✅ |

### 일반진료 (General)
| 경로 | 설명 | 상태 |
|------|------|------|
| `/pages/general/general_1` | 소아청소년과 | ✅ |
| `/pages/general/general_2` | 내과 | ✅ |

### 커뮤니티 (Community)
| 경로 | 설명 | 상태 |
|------|------|------|
| `/pages/community/notice_list` | 공지사항 | ✅ |

## 기술 스택
- **프레임워크**: Next.js 16.1.4
- **언어**: TypeScript
- **스타일링**: CSS Modules + Global CSS (원본 스타일 적용)
- **애니메이션**: AOS (Animate on Scroll), Swiper
- **스크롤**: Lenis (Smooth Scroll)

## 프로젝트 구조
```
medimoa-nextjs/
├── public/
│   ├── images/           # 229개 이미지 자산
│   │   ├── about/        # 의원소개 관련 이미지
│   │   ├── hero/         # 메인 슬라이더 이미지 (6개)
│   │   ├── main/         # 메인 페이지 이미지
│   │   ├── services/     # 서비스 페이지 이미지
│   │   │   ├── puberty/  # 성조숙증/저신장
│   │   │   ├── child/    # 아동발달센터
│   │   │   ├── test/     # 검사안내
│   │   │   └── general/  # 일반진료
│   │   └── ...
│   └── css/              # 원본 CSS 파일
├── src/
│   ├── app/
│   │   ├── page.tsx      # 메인 페이지
│   │   ├── layout.tsx    # 루트 레이아웃
│   │   └── pages/        # 서브페이지들 (12개)
│   │       ├── intro/    # 의원소개 (4개)
│   │       ├── puberty/  # 성조숙증/저신장 (2개)
│   │       ├── child/    # 아동발달센터 (1개)
│   │       ├── test/     # 검사안내 (2개)
│   │       ├── general/  # 일반진료 (2개)
│   │       └── community/# 커뮤니티 (1개)
│   ├── components/
│   │   ├── layout/       # Header, Footer
│   │   └── common/       # SubNav, FloatingMenu
│   └── styles/           # 스타일 파일
├── package.json
└── ecosystem.config.cjs  # PM2 설정
```

## 설치 및 실행

### 1. 의존성 설치
```bash
npm install
```

### 2. 개발 서버 실행
```bash
npm run dev
```

### 3. PM2로 실행 (권장)
```bash
npm run build
pm2 start ecosystem.config.cjs
```

### 4. 프로덕션 빌드
```bash
npm run build
npm run start
```

## 배포 상태
- **플랫폼**: 샌드박스 개발 환경
- **상태**: ✅ 활성 (모든 13개 페이지 정상 작동)
- **마지막 업데이트**: 2026-01-22

## 주요 기능
- ✅ 반응형 레이아웃 (모바일/태블릿/데스크톱)
- ✅ 메인 Hero 슬라이더 (Swiper) - 6개 슬라이드
- ✅ 스크롤 애니메이션 (AOS)
- ✅ 스무스 스크롤 (Lenis)
- ✅ 서브 네비게이션
- ✅ 플로팅 메뉴 (블로그, 인스타, 카카오, 전화)
- ✅ 구글 맵 임베드
- ✅ 원본 이미지 229개 모두 포함

## 제외된 기능 (Phase 1 - 정적 페이지만)
- ❌ 온라인 예약 페이지
- ❌ 회원가입/로그인 기능
- ❌ CRUD 기능

## ZIP 다운로드
- **파일명**: `medimoa-nextjs-download.zip`
- **크기**: ~93MB
- **포함 내용**: 소스코드, 이미지 자산, 설정 파일
- **제외 내용**: node_modules, .next, .git

## 사용 가이드

### ZIP 다운로드 후 설정
```bash
# 1. ZIP 압축 해제
unzip medimoa-nextjs-download.zip

# 2. 디렉토리 이동
cd medimoa-nextjs

# 3. 의존성 설치
npm install

# 4. 개발 서버 실행
npm run dev

# 5. 브라우저에서 확인
# http://localhost:3000
```

## 개발 메모
- 원본 사이트 주소: https://medimoa.co.kr
- 원본 이미지 229개 모두 포함
- CSS는 원본 스타일을 최대한 반영
- URL 구조: 원본 유지 (예: /pages/intro/intro_1)

## 라이선스
이 프로젝트는 학습 및 개발 목적으로 제작되었습니다.
