# TideX

전 세계 해안의 실시간 조위 및 예측

실행 주소: [https://tide-x.vercel.app](https://tide-x.vercel.app)

## 개요

TideX는 이제 저장소 루트 하나만 배포하면 되는 단일 조수 웹 앱입니다. GitHub 사용자는 하나의 코드베이스로 데스크톱, 모바일 브라우저, 홈 화면 설치를 모두 관리할 수 있습니다.

## 주요 기능

- 지도에서 원하는 해안 지점을 선택하거나 현재 위치로 바로 이동할 수 있습니다.
- OpenStreetMap 데이터를 바탕으로 근처의 이름 있는 해변을 찾습니다.
- 24시간 조위 곡선, 만조 시간 표시, 15일 최고/최저 기준선을 볼 수 있습니다.
- 조위, 돌풍 속도, 풍향을 한 화면에서 비교할 수 있습니다.
- 과거, 현재, 미래 날짜를 탐색할 수 있으며 직접 데이터가 없으면 조화 예측으로 자동 전환됩니다.
- 같은 반응형 PWA를 데스크톱, 모바일 웹, 홈 화면에서 그대로 사용할 수 있습니다.

## 무료 데이터 소스

- Open-Meteo Marine: 조석 / 해수면 시계열
- Open-Meteo Forecast: 돌풍 속도와 풍향
- OpenStreetMap 타일: 기본 지도
- Overpass API: 주변 해변 검색
- Nominatim: 선택 지점 역지오코딩

## 예측 방식

1. 선택한 지점과 날짜에 직접 조석 시계열이 있으면 우선 사용합니다.
1. 일간 곡선은 단조 3차 보간으로 부드럽게 만듭니다.
1. 부분적으로 비는 구간은 조화 보완으로 채웁니다.
1. 직접 데이터가 없으면 조화 조석 모델로 대체합니다.
1. 만조 시각은 국소 극값 탐지와 2차 보간으로 더 정밀하게 다듬습니다.

## 앱으로 설치

1. Safari, Chrome 또는 최신 브라우저에서 [https://tide-x.vercel.app](https://tide-x.vercel.app)을 엽니다.
1. 브라우저 메뉴에서 `홈 화면에 추가` 또는 `앱 설치`를 사용합니다.
1. 같은 웹 배포를 유지한 채 일반 앱처럼 TideX를 실행할 수 있습니다.

## 국제화

- 런타임 언어 팩은 `locales/`에 있으며 JSON으로 로드됩니다.
- 저장소에는 42개 언어 팩이 포함되어 있고 아랍어, 히브리어, 우르두어 RTL도 지원합니다.
- 언어 파일을 수정한 뒤 `node scripts/generate-locales.mjs`를 실행해 `locales/index.json`을 다시 생성합니다.

## 프로젝트 구조

```text
TideX/
├─ index.html
├─ styles.css
├─ app.js
├─ locales/
├─ icons/
├─ manifest.webmanifest
├─ service-worker.js
├─ offline.html
├─ scripts/
│  ├─ generate-locales.mjs
│  └─ generate-readmes.mjs
├─ README.md
└─ README.<locale>.md
```

## 로컬 개발

아무 정적 파일 서버로 저장소 루트를 서빙하면 됩니다.

```bash
cd TideX
python3 -m http.server 5173
```

그다음 `http://localhost:5173`을 엽니다.

## 배포

- 저장소 루트를 Vercel, Netlify, Cloudflare Pages 또는 다른 정적 호스팅에 배포합니다.
- 빌드 단계는 필요하지 않습니다.
- 루트 앱에는 이미 PWA 매니페스트, 아이콘, service worker가 포함되어 있습니다.

## 면책

- TideX는 일정 계획과 해변 정보 확인용이며 인증된 항해 도구가 아닙니다.
- 실제 해안 상황은 기압, 너울, 하천 유입, 지역 지형, 날씨에 따라 달라질 수 있습니다.
