# 🚀 Vercel 배포 가이드

Holy AI Studio를 Vercel에 배포하는 방법을 안내합니다.

## 📋 사전 준비사항

### 1. 필수 계정
- [Vercel](https://vercel.com) 계정
- [GitHub](https://github.com) 계정
- [PostgreSQL](https://www.postgresql.org) 데이터베이스 (Supabase, PlanetScale, Neon 등)
- [OpenAI](https://openai.com) API 키
- [토스페이먼츠](https://toss.im) 계정

### 2. 프로젝트 준비
```bash
# 저장소 클론
git clone https://github.com/your-username/holy-ai-studio.git
cd holy-ai-studio

# 의존성 설치
npm install

# Prisma 클라이언트 생성
npm run db:generate
```

## 🔧 환경변수 설정

### 로컬 개발용 (.env.local)
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

### 프로덕션용 (Vercel 환경변수)
Vercel 대시보드에서 다음 환경변수를 설정하세요:

```env
# 데이터베이스 (실제 PostgreSQL URL)
DATABASE_URL="postgresql://username:password@host:port/database"

# NextAuth (강력한 랜덤 키)
NEXTAUTH_SECRET="your-production-secret-key"
NEXTAUTH_URL="https://your-domain.vercel.app"

# OpenAI (실제 API 키)
OPENAI_API_KEY="sk-your-actual-openai-api-key"

# 토스페이먼츠 (실제 키)
TOSS_CLIENT_KEY="live_ck_your-actual-client-key"
TOSS_SECRET_KEY="live_sk_your-actual-secret-key"
NEXT_PUBLIC_TOSS_CLIENT_KEY="live_ck_your-actual-client-key"

# 앱 설정 (실제 도메인)
NEXT_PUBLIC_APP_URL="https://your-domain.vercel.app"
ADMIN_EMAIL="admin@yourdomain.com"
```

## 🚀 배포 방법

### 방법 1: Vercel CLI 사용 (권장)

#### 1. Vercel CLI 설치
```bash
npm install -g vercel
```

#### 2. 로그인
```bash
vercel login
```

#### 3. 배포
```bash
# 개발 배포 (프리뷰)
vercel

# 프로덕션 배포
vercel --prod
```

### 방법 2: 자동 배포 스크립트 사용

#### Windows
```bash
scripts/deploy.bat
```

#### macOS/Linux
```bash
chmod +x scripts/deploy.sh
./scripts/deploy.sh
```

### 방법 3: GitHub 연동 (자동 배포)

1. GitHub에 코드 푸시
2. Vercel에서 GitHub 저장소 연결
3. 환경변수 설정
4. 자동 배포 완료

## 📊 데이터베이스 설정

### 1. PostgreSQL 데이터베이스 생성
- [Supabase](https://supabase.com) (무료 티어 제공)
- [PlanetScale](https://planetscale.com) (무료 티어 제공)
- [Neon](https://neon.tech) (무료 티어 제공)

### 2. 데이터베이스 마이그레이션
```bash
# 로컬에서 마이그레이션
npm run db:push

# 또는 Vercel에서 자동 실행
# (배포 시 자동으로 실행됨)
```

### 3. 시드 데이터 생성 (선택사항)
```bash
npm run db:seed
```

## 🔒 보안 설정

### 1. 환경변수 보안
- 모든 민감한 정보는 환경변수로 관리
- `.env.local` 파일은 절대 Git에 커밋하지 않음
- Vercel 환경변수는 암호화되어 저장

### 2. CORS 설정
- `vercel.json`에서 CORS 헤더 설정
- API 라우트 보안 강화

### 3. 인증 보안
- NextAuth.js 세션 관리
- 관리자 권한 검증
- API 라우트 인증 미들웨어

## 📈 성능 최적화

### 1. 이미지 최적화
- Next.js Image 컴포넌트 사용
- 외부 도메인 허용 설정

### 2. 번들 최적화
- 코드 스플리팅
- 동적 임포트
- 트리 쉐이킹

### 3. 캐싱
- 정적 자산 캐싱
- API 응답 캐싱
- Redis 캐싱 (선택사항)

## 🔍 배포 후 확인사항

### 1. 헬스체크
```bash
curl https://your-domain.vercel.app/healthcheck
```

### 2. 기능 테스트
- [ ] 사용자 회원가입/로그인
- [ ] AI 콘텐츠 생성
- [ ] 크레딧 시스템
- [ ] 결제 시스템
- [ ] 관리자 패널

### 3. 성능 테스트
- [ ] 페이지 로딩 속도
- [ ] API 응답 시간
- [ ] 이미지 로딩
- [ ] 모바일 반응형

## 🛠 문제 해결

### 일반적인 문제들

#### 1. 빌드 실패
```bash
# 로컬에서 빌드 테스트
npm run build

# 타입 체크
npm run type-check

# 린트 검사
npm run lint
```

#### 2. 데이터베이스 연결 실패
- DATABASE_URL 확인
- 데이터베이스 접근 권한 확인
- 방화벽 설정 확인

#### 3. API 키 오류
- 환경변수 설정 확인
- API 키 유효성 확인
- 할당량 확인

#### 4. 결제 시스템 오류
- 토스페이먼츠 키 확인
- 웹훅 URL 설정
- 결제 테스트 모드 확인

## 📞 지원

문제가 발생하면 다음을 확인하세요:

1. **Vercel 로그**: Vercel 대시보드 > Functions > 로그 확인
2. **환경변수**: 모든 환경변수가 올바르게 설정되었는지 확인
3. **데이터베이스**: 연결 상태 및 스키마 확인
4. **API 키**: 유효성 및 할당량 확인

## 🎯 다음 단계

배포 완료 후:

1. **도메인 설정**: 커스텀 도메인 연결
2. **SSL 인증서**: 자동으로 설정됨
3. **모니터링**: Vercel Analytics 설정
4. **백업**: 데이터베이스 백업 설정
5. **스케일링**: 트래픽에 따른 자동 스케일링

---

**Happy Deploying! 🚀** 