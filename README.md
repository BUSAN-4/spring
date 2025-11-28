# 부산시 스마트 도시 차량 서비스 - Frontend

부산시 스마트 도시 계획을 위한 차량 서비스 웹 애플리케이션의 프론트엔드입니다.

## 📋 프로젝트 개요

차량을 활용한 3가지 주요 서비스를 제공합니다:
1. **실시간 운전자 졸음 행동 탐지** - 차량 내부 카메라를 통한 졸음운전 탐지
2. **체납자 차량 번호판 탐지** - 차량 외부 카메라를 통한 번호판 인식 및 국세청 알림
3. **실종자 탐지** - 차량 외부 카메라를 통한 실종자 발견 및 경찰청 알림

## 🎯 주요 기능

### 일반 사용자
- 회원가입/로그인, 차량 등록/수정/삭제
- 안전습관 점수 조회 및 주행별 상세 기록

### 부산시 관리자
- 안전운전 관리 (PowerBI 대시보드)
- 불법주정차 단속 관리 및 상습위반차량 조회
- 실종자 관리 및 통계 시각화

### 시스템 관리자
- 전체 사용자 관리 및 활동 로그 모니터링
- 시스템 상태 대시보드

## 🛠 기술 스택

- **React** 19.2.0 + **TypeScript** 5.9.3
- **Vite** 7.2.4 - 빌드 도구
- **Material-UI** 5.14.20 - UI 컴포넌트
- **Zustand** 4.4.7 - 상태 관리
- **React Router DOM** 6.20.0 - 라우팅
- **PowerBI Client** 2.23.1 - 데이터 시각화

## 📁 프로젝트 구조

```
src/
├── components/    # 공통 컴포넌트 (Card, ProtectedRoute, PowerBI 등)
├── hooks/         # 커스텀 훅 (useAuth, useVehicle, usePowerBI)
├── layouts/       # 레이아웃 (Admin, City, User, Auth)
├── pages/         # 페이지 (admin, auth, city, user)
├── router/        # 라우팅 설정
├── store/         # Zustand 상태 관리 (auth, vehicle)
├── types/         # TypeScript 타입 정의
└── utils/         # 유틸리티 함수
```

## 🚀 시작하기

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build
```

## 🔐 인증

Mock 인증 시스템 사용:
- **일반 사용자**: 아무 아이디/비밀번호로 로그인 가능
- **부산시 관리자**: 인증 코드 `BUSAN2024` 필요
- **시스템 관리자**: 인증 코드 `SYSTEM2024` 필요

## 📊 PowerBI 통합

안전운전, 불법주정차, 실종자 현황 대시보드를 PowerBI로 임베드하여 제공합니다.
실제 연동을 위해서는 백엔드 API를 통해 Embed Token이 필요합니다.

## 🔄 상태 관리

- **authStore**: 사용자 인증 상태 (Zustand + LocalStorage persist)
- **vehicleStore**: 차량 정보 및 주행 기록

## 🎨 주요 특징

- Material Design 기반 반응형 UI
- 역할별 맞춤형 대시보드
- PowerBI를 통한 데이터 시각화
- TypeScript로 타입 안정성 확보

---

**마지막 업데이트**: 2025-11-25
