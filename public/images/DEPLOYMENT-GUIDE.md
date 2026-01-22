# 🚀 MEDIMOA 완전 복제 배포 가이드

## 📊 프로젝트 요약

**목표**: medimoa.co.kr의 완벽한 복제 웹사이트 구축

### 수집된 자료
- **총 이미지**: 229개
- **다운로드 성공**: 229개
- **이미 존재**: 0개
- **실패**: 0개

### 페이지별 통계

#### /pages/child/child_1.php (_pages_child_child_1.php)
- 총 이미지: 105개
- 보이는 이미지: 92개
- 카테고리: common(7), logo(2), hero(6), others(32), services/child(25), services/puberty(4), about/tour(23), icons(6)

#### /pages/community/notice_list.php (_pages_community_notice_list.php)
- 총 이미지: 55개
- 보이는 이미지: 47개
- 카테고리: common(7), logo(2), hero(6), others(30), board(5), icons(4), backgrounds(1)

#### /pages/general/general_1.php (_pages_general_general_1.php)
- 총 이미지: 53개
- 보이는 이미지: 43개
- 카테고리: common(7), logo(2), hero(6), others(29), services/general(5), icons(4)

#### /pages/general/general_2.php (_pages_general_general_2.php)
- 총 이미지: 53개
- 보이는 이미지: 43개
- 카테고리: common(7), logo(2), hero(6), others(29), services/general(5), icons(4)

#### /pages/intro/intro_1.php (_pages_intro_intro_1.php)
- 총 이미지: 62개
- 보이는 이미지: 50개
- 카테고리: common(7), logo(2), hero(6), others(29), about/intro(14), icons(4)

#### /pages/intro/intro_2.php (_pages_intro_intro_2.php)
- 총 이미지: 58개
- 보이는 이미지: 46개
- 카테고리: common(7), logo(2), hero(6), others(30), about/intro(9), icons(4)

#### /pages/intro/intro_3.php (_pages_intro_intro_3.php)
- 총 이미지: 79개
- 보이는 이미지: 70개
- 카테고리: common(7), logo(2), hero(6), others(31), services/puberty(1), about/tour(23), about/intro(3), icons(6)

#### /pages/intro/intro_4.php (_pages_intro_intro_4.php)
- 총 이미지: 57개
- 보이는 이미지: 48개
- 카테고리: common(7), logo(2), hero(6), others(32), about/intro(6), icons(4)

#### /pages/puberty/puberty_1.php (_pages_puberty_puberty_1.php)
- 총 이미지: 70개
- 보이는 이미지: 59개
- 카테고리: common(7), logo(2), hero(6), others(30), services/puberty(21), icons(4)

#### /pages/puberty/puberty_2.php (_pages_puberty_puberty_2.php)
- 총 이미지: 64개
- 보이는 이미지: 53개
- 카테고리: common(7), logo(2), hero(6), others(30), services/puberty(15), icons(4)

#### /pages/test/test_1.php (_pages_test_test_1.php)
- 총 이미지: 57개
- 보이는 이미지: 45개
- 카테고리: common(7), logo(2), hero(6), others(29), services/test(8), icons(4), backgrounds(1)

#### /pages/test/test_2.php (_pages_test_test_2.php)
- 총 이미지: 57개
- 보이는 이미지: 45개
- 카테고리: common(7), logo(2), hero(6), others(29), services/test(8), icons(4), backgrounds(1)

#### / (home)
- 총 이미지: 96개
- 보이는 이미지: 87개
- 카테고리: common(7), logo(2), hero(6), others(35), main(24), board(5), icons(5), about/tour(12)


### 카테고리별 이미지 수
- **about/intro**: 27개
- **about/tour**: 24개
- **backgrounds**: 2개
- **board**: 5개
- **common**: 7개
- **hero**: 6개
- **icons**: 7개
- **logo**: 2개
- **main**: 24개
- **others**: 43개
- **services/child**: 25개
- **services/general**: 9개
- **services/puberty**: 32개
- **services/test**: 16개


## 📁 로컬 폴더 구조

```
C:\Users\song\Downloads\새 폴더\2\
├── about/intro/
├── about/tour/
├── backgrounds/
├── board/
├── common/
├── hero/
├── icons/
├── logo/
├── main/
├── others/
├── services/child/
├── services/general/
├── services/puberty/
├── services/test/
├── complete-image-mapping.json
├── nextjs-components/
│   ├── HeroSlider.tsx
│   └── ...
└── DEPLOYMENT-GUIDE.md (이 파일)
```

## 🔧 GCP VM 배포

### 1. 전체 폴더 업로드
```powershell
scp -r "C:\Users\song\Downloads\새 폴더\2\*" user@34.22.75.143:~/medimoa-website/public/images/
```

### 2. SSH 접속 후 확인
```bash
ssh user@34.22.75.143
cd ~/medimoa-website/public/images
ls -lh

# 카테고리별 이미지 수 확인
for dir in */; do echo "$dir: $(ls -1 $dir | wc -l)개"; done
```

### 3. Next.js 프로젝트에 컴포넌트 복사
```bash
cp -r nextjs-components/* ~/medimoa-website/components/
```

## 🎨 사용 예시

### complete-image-mapping.json 활용

```typescript
import mappingData from './complete-image-mapping.json';

// 특정 페이지의 이미지 가져오기
const homeImages = mappingData.images_by_page.home;

// 카테고리별 이미지 가져오기
const heroImages = mappingData.images_by_category.hero;

// Next.js 경로로 사용
<img src={heroImages[0].next_path} alt="Hero" />
```

## ✅ 검증 체크리스트

### 로컬 확인
- [ ] 모든 카테고리 폴더 생성 확인
- [ ] 각 폴더에 이미지 파일 존재 확인
- [ ] complete-image-mapping.json 생성 확인
- [ ] failed_downloads 확인 (실패한 이미지 재다운로드)

### GCP VM 확인
- [ ] SCP 업로드 완료
- [ ] public/images/ 폴더 구조 확인
- [ ] 이미지 파일 권한 확인 (chmod 644)
- [ ] Next.js 빌드 성공
- [ ] 개발 서버 실행: `npm run dev`

### 브라우저 확인
- [ ] http://34.22.75.143:3000 접속
- [ ] 메인 페이지 Hero 슬라이더 작동
- [ ] 모든 이미지 로딩 확인
- [ ] 개발자 도구 → Network → 404 에러 없는지 확인
- [ ] 각 서브페이지 접속 테스트

## 🐛 트러블슈팅

### 문제 1: 이미지가 안 보임
**원인**: 경로 문제
```typescript
// ❌ 잘못된 경로
<img src="images/hero/h_1.png" />

// ✅ 올바른 경로
<img src="/images/hero/h_1.png" />  // 앞에 슬래시!
```

### 문제 2: 일부 이미지 404
**확인**: complete-image-mapping.json의 failed_downloads 섹션 확인
```bash
# 실패한 이미지 재다운로드
python medimoa_complete_clone_solution.py
```

### 문제 3: GCP 업로드 실패
```bash
# 권한 문제 해결
chmod 600 ~/.ssh/id_rsa
ssh-add ~/.ssh/id_rsa

# 재시도
scp -v -r "C:\Users\song\Downloads\새 폴더\2" user@34.22.75.143:~/medimoa-website/public/images/
```

## 📞 다음 단계

1. ✅ 이 가이드 읽기
2. ✅ 로컬 체크리스트 완료
3. ✅ GCP VM 업로드
4. ✅ Next.js 컴포넌트 통합
5. ✅ 브라우저 테스트
6. ⬜ 실제 운영 배포

---
생성 시각: 2026-01-22 17:32:19
완벽한 복제를 위한 모든 자료가 준비되었습니다! 🎉
