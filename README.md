# Live-CrowdFunding-Frontend

Vue 3 기반 라이브 크라우드펀딩 프론트엔드입니다. 상품 탐색, 결제, 채팅·스트리밍과 관리자 화면을 포함합니다.

## 실행

```bash
npm ci
npm run dev
```

## 빌드

```bash
npm run build
npm run preview
```

## 개발 서버와 API

기본 개발 주소는 http://127.0.0.1:5173 입니다. API 프록시는 http://localhost:8080 을 사용합니다.
로컬 `key.pem`과 `cert.pem`이 모두 있으면 개발 서버가 HTTPS로 실행됩니다. 인증서는 Git에 올리지 않습니다.
프로덕션 빌드는 로컬 개발 인증서 없이 실행할 수 있습니다.

백엔드·결제·실시간 서비스 설정은 기능별 연동이 필요하며, 프론트엔드 빌드 성공만으로 해당 서비스의 동작을 보장하지 않습니다.

## 폴더 구조

```text
.
├── index.html
├── src/
│   ├── api/          # HTTP API 클라이언트
│   ├── assets/       # 이미지와 스타일
│   ├── components/   # 재사용 UI
│   ├── composables/ # 스트리밍 등 Vue 로직
│   ├── services/    # 실시간 서비스 연동
│   ├── layouts/      # 공통 화면 틀
│   ├── router/       # 화면 경로
│   ├── store/        # 클라이언트 상태
│   └── views/        # 페이지
├── public/           # 그대로 제공하는 정적 파일
└── docs/             # 개발 참고 문서
```

[로컬 페이지 안내](docs/local-routes.md)
