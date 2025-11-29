# Stage 1: 빌드 단계
FROM node:20-alpine AS builder

WORKDIR /app

# package.json과 package-lock.json 복사
COPY package*.json ./

# 의존성 설치
RUN npm ci

# 소스 코드 복사
COPY . .

# 환경 변수 설정 (빌드 타임에 주입)
ARG VITE_POWER_BI_SAFE_DRIVING_URL
ARG VITE_POWER_BI_MISSING_PERSON_URL
ARG VITE_POWER_BI_ILLEGAL_PARKING_URL

ENV VITE_POWER_BI_SAFE_DRIVING_URL=$VITE_POWER_BI_SAFE_DRIVING_URL
ENV VITE_POWER_BI_MISSING_PERSON_URL=$VITE_POWER_BI_MISSING_PERSON_URL
ENV VITE_POWER_BI_ILLEGAL_PARKING_URL=$VITE_POWER_BI_ILLEGAL_PARKING_URL

# 프로덕션 빌드
RUN npm run build

# Stage 2: 실행 단계 (Nginx)
FROM nginx:alpine

# 빌드된 파일 복사
COPY --from=builder /app/dist /usr/share/nginx/html

# Nginx 설정
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
