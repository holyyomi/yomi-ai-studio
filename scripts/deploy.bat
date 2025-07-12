@echo off
chcp 65001 >nul

echo 🚀 Holy AI Studio 배포를 시작합니다...

REM 1. 의존성 설치
echo 📦 의존성을 설치합니다...
call npm install

REM 2. Prisma 클라이언트 생성
echo 🗄️ Prisma 클라이언트를 생성합니다...
call npm run db:generate

REM 3. 타입 체크
echo 🔍 TypeScript 타입을 확인합니다...
call npm run type-check

REM 4. 린트 검사
echo 🧹 코드 품질을 확인합니다...
call npm run lint

REM 5. 빌드
echo 🏗️ 프로덕션 빌드를 시작합니다...
call npm run build

REM 6. Vercel 배포
echo 🚀 Vercel에 배포합니다...
call vercel --prod

echo ✅ 배포가 완료되었습니다!
echo 🌐 배포된 URL을 확인하세요.

pause 