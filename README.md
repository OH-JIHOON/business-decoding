# business decoding

비즈니스 구조를 해석하고 인사이트를 축적하는 콘텐츠 플랫폼

## 기술 스택

- **프레임워크**: [Astro 5](https://astro.build)
- **스타일링**: [Tailwind CSS v4](https://tailwindcss.com)
- **배포**: [Cloudflare Pages](https://pages.cloudflare.com)
- **RSS**: @astrojs/rss
- **Sitemap**: @astrojs/sitemap

## 시작하기

### 설치

```bash
npm install
```

### 개발 서버

```bash
npm run dev
```

브라우저에서 `http://localhost:4321` 접속

### 빌드

```bash
npm run build
```

빌드 결과는 `dist/` 디렉토리에 생성됩니다.

### 미리보기

```bash
npm run preview
```

## 디렉토리 구조

```
src/
├── components/     # 재사용 가능한 컴포넌트
├── content/
│   └── posts/      # 마크다운 포스트 파일
├── layouts/        # 페이지 레이아웃
├── pages/          # 라우트 (페이지)
├── styles/         # 글로벌 CSS
└── utils/          # 유틸리티 함수
```

## 새 글 작성

`src/content/posts/` 에 마크다운(.md) 파일을 생성합니다:

```markdown
---
title: "글 제목"
date: "2026-04-01"
description: "글 설명"
tags: ["태그1", "태그2"]
---

본문 내용을 여기에 작성합니다.
```

## Cloudflare Pages 배포

1. GitHub에 저장소 생성 & 코드 푸시
2. [Cloudflare Pages](https://pages.cloudflare.com) 로그인
3. 새 프로젝트 → GitHub 저장소 연결
4. 빌드 설정:
   - **Build command**: `npm run build`
   - **Output directory**: `dist`
5. 배포!

## GA4 설정 (선택)

환경변수에 `PUBLIC_GA_ID` 추가:

```
PUBLIC_GA_ID=G-XXXXXXXXXX
```

## 라이선스

© business decoding. All rights reserved.
