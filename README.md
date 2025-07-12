# Holy AI Studio 🚀

AI 기반 멀티플랫폼 콘텐츠 생성 도구. 하나의 주제로 11개 SNS 플랫폼 최적화 콘텐츠 자동 생성

## ✨ 주요 기능

- 🤖 **AI 기반 콘텐츠 생성**: OpenAI GPT-4를 활용한 고품질 콘텐츠 생성
- 📱 **11개 플랫폼 지원**: 인스타그램, 페이스북, 트위터, 틱톡, 유튜브 등
- 🎨 **이미지 생성**: DALL-E 3를 활용한 맞춤형 이미지 생성
- 💳 **크레딧 시스템**: 사용량 기반 과금 시스템
- 🔐 **사용자 인증**: NextAuth.js 기반 안전한 인증
- 💰 **결제 시스템**: 토스페이먼츠 연동
- 👨‍💼 **관리자 패널**: 사용자 관리 및 시스템 모니터링

## 🛠 기술 스택

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, Prisma ORM
- **Database**: PostgreSQL
- **Authentication**: NextAuth.js
- **AI**: OpenAI GPT-4, DALL-E 3
- **Payment**: 토스페이먼츠
- **UI Components**: Radix UI, shadcn/ui

## 🚀 빠른 시작

### 1. 저장소 클론
```bash
git clone https://github.com/your-username/holy-ai-studio.git
cd holy-ai-studio
```

### 2. 의존성 설치
```bash
npm install
```

### 3. 환경변수 설정
`.env.local` 파일을 생성하고 다음 내용을 추가하세요:

```env
# 데이터베이스
DATABASE_URL="postgresql://username:password@localhost:5432/holy_ai_studio"

# NextAuth
NEXTAUTH_SECRET="your-very-long-and-random-secret-key-here"
NEXTAUTH_URL="http://localhost:3000"

# OpenAI
OPENAI_API_KEY="sk-your-openai-api-key"

# 토스페이먼츠
TOSS_CLIENT_KEY="test_ck_D5GePWvyJnrK0W0k6q8gLzN97Eoq"
TOSS_SECRET_KEY="test_sk_D4yKeq5bgrpKRd0JYbLVGX0lzW6Y"
NEXT_PUBLIC_TOSS_CLIENT_KEY="test_ck_D5GePWvyJnrK0W0k6q8gLzN97Eoq"

# 앱 설정
NEXT_PUBLIC_APP_URL="http://localhost:3000"
ADMIN_EMAIL="your-admin-email@example.com"
```

### 4. 데이터베이스 설정
```bash
# Prisma 클라이언트 생성
npm run db:generate

# 데이터베이스 마이그레이션
npm run db:push

# (선택사항) 시드 데이터 생성
npm run db:seed
```

### 5. 개발 서버 실행
```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

## 📁 프로젝트 구조

```
holy-ai-studio/
├── app/                    # Next.js App Router
│   ├── api/               # API 라우트
│   ├── admin/             # 관리자 페이지
│   ├── dashboard/         # 사용자 대시보드
│   └── globals.css        # 전역 스타일
├── components/            # React 컴포넌트
│   ├── ui/               # 기본 UI 컴포넌트
│   ├── layout/           # 레이아웃 컴포넌트
│   ├── dashboard/        # 대시보드 컴포넌트
│   └── admin/            # 관리자 컴포넌트
├── lib/                  # 유틸리티 및 설정
│   ├── auth.ts           # 인증 설정
│   ├── db.ts             # 데이터베이스 설정
│   ├── ai.ts             # AI 엔진
│   └── payment.ts        # 결제 시스템
├── prisma/               # 데이터베이스 스키마
│   └── schema.prisma     # Prisma 스키마
└── types/                # TypeScript 타입 정의
```

## 🎯 주요 페이지

- **홈페이지** (`/`): 서비스 소개 및 로그인
- **대시보드** (`/dashboard`): 사용자 메인 페이지
- **콘텐츠 생성** (`/dashboard/content`): AI 콘텐츠 생성
- **크레딧 관리** (`/dashboard/credits`): 크레딧 및 구독 관리
- **관리자 패널** (`/admin`): 시스템 관리 (관리자만 접근)

## 💳 플랜 및 가격

- **무료 플랜**: 200 크레딧 (가입 시)
- **Pro 플랜**: 1,000 크레딧/월 (299,000원)
- **Premium 플랜**: 2,000 크레딧/월 (499,000원)
- **VIP 플랜**: 5,000 크레딧/월 (999,000원)

## 🔧 개발 명령어

```bash
# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm run start

# 린트 검사
npm run lint

# 린트 자동 수정
npm run lint:fix

# 타입 체크
npm run type-check

# 데이터베이스 관련
npm run db:generate    # Prisma 클라이언트 생성
npm run db:push        # 스키마 적용
npm run db:studio      # Prisma Studio 실행
npm run db:seed        # 시드 데이터 생성
npm run db:reset       # 데이터베이스 초기화

# 배포
npm run deploy         # 빌드 및 데이터베이스 업데이트
```

## 🚀 배포

### Vercel 배포 (권장)

1. [Vercel](https://vercel.com)에 계정 생성
2. GitHub 저장소 연결
3. 환경변수 설정
4. 자동 배포 완료

### 수동 배포

```bash
# 프로덕션 빌드
npm run build

# 데이터베이스 마이그레이션
npm run db:push

# 서버 실행
npm run start
```

## 🔒 보안

- 모든 API 엔드포인트에 인증 검증
- 관리자 권한 확인
- CORS 설정
- 환경변수 보안
- SQL 인젝션 방지 (Prisma ORM)

## 📊 모니터링

- 헬스체크 엔드포인트: `/healthcheck`
- 에러 바운더리로 클라이언트 에러 처리
- 서버 로그 및 모니터링
- 성능 메트릭 추적

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 `LICENSE` 파일을 참조하세요.

## 📞 지원

- 이메일: support@holyaistudio.com
- 문서: [docs.holyaistudio.com](https://docs.holyaistudio.com)
- 이슈: [GitHub Issues](https://github.com/your-username/holy-ai-studio/issues)

## 🎯 로드맵

### 단기 계획 (1-3개월)
- [ ] 자동 업로드 시스템
- [ ] 콘텐츠 스케줄링
- [ ] 성과 분석 대시보드
- [ ] 팀 협업 기능

### 중기 계획 (3-6개월)
- [ ] GPT-4 Turbo 업그레이드
- [ ] 이미지 편집 기능
- [ ] 동영상 생성 기능
- [ ] 음성 생성 기능

### 장기 계획 (6개월+)
- [ ] 해외 진출 (다국어 지원)
- [ ] 엔터프라이즈 플랜
- [ ] API 서비스 제공
- [ ] 파트너십 프로그램

---

**Holy AI Studio** - AI로 만드는 더 나은 콘텐츠 🌟 