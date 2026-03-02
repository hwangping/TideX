# TideX

TideX는 모바일 우선으로 설계된 글로벌 조석(潮汐) 웹 앱입니다. 사용자는 휴대폰 브라우저에서 바로 접속할 수 있으며(현재 Vercel 배포), 지도에서 원하는 해안을 선택해 실시간 조위 추세와 당일 만조 시간을 확인할 수 있습니다.

## 접속 주소

- 운영 환경(Vercel): `https://tide-x.vercel.app`

## 프로젝트 방향

- 대상 사용자: 서핑, 갯바위/연안 낚시, 해안 여행, 항만 활동 사용자
- 핵심 가치: 전 세계 위치 선택, 읽기 쉬운 시각화, 빠른 조작, 설치 없이 사용
- 배포 방식: 순수 정적 프런트엔드로 Vercel/GitHub Pages/Netlify에 배포 가능

## 핵심 기능

- 전 세계 해안 지도 선택
- 사용자 현재 위치 자동 감지
- OpenStreetMap 기반 주변 해변 목록 표시
- 24시간 조위 곡선 시각화
- 만조 시각을 곡선 위에 표시
- 과거/현재/미래 날짜와 시간 선택
- 목표 날짜의 직접 데이터가 없으면 조화 예측 자동 대체
- 12개 언어 지원

## 모바일 사용성

- iPhone/Android 반응형 레이아웃
- 지도, 슬라이더, 버튼의 터치 조작 최적화
- 야외에서도 읽기 쉬운 깔끔한 UI
- 초기 로드 후 부드러운 상호작용

## 데이터 소스 및 예측 로직 (모두 무료)

- 해수면/조위 시계열: Open-Meteo Marine API
- 지도 타일: OpenStreetMap
- 해변 POI: OpenStreetMap Overpass API
- 역지오코딩: Nominatim
- 예측 로직: 직접 시계열이 부족할 때 과거 데이터를 활용한 조화 적합

## 예측 알고리즘 (요약)

TideX는 "직접 데이터 우선, 부족 시 모델 예측"의 2단계 방식으로 동작합니다.

- 직접 시계열 우선: 선택 날짜의 시간별 해수면 데이터가 있으면 해당 값을 우선 사용합니다.
- 곡선 보정: 시간 단위 데이터를 단조 3차 보간으로 고해상도화해 더 부드러운 곡선을 만듭니다.
- 대체 예측: 직접 데이터가 없으면 과거 시계열로 조화 모델을 적합합니다.
- 적합 방법: 여러 분조 성분(사인/코사인 기저)을 최소제곱으로 추정합니다.
- 만조 시각: 국소 극값 검출 후 2차 보간으로 시각을 보정해 정확도를 높입니다.

## 기술 스택

- 프런트엔드: HTML + CSS + JavaScript
- 지도: Leaflet
- 차트: ECharts
- 시간 처리: Luxon
- 배포: Vercel(정적 호스팅)

## 로컬 실행

```bash
cd TideX
python3 -m http.server 5173
```

접속: `http://localhost:5173`

## Vercel 배포 권장 설정

- Framework Preset: `Other`
- Build Command: 비움(정적 사이트)
- Output Directory: 비움(루트 직접 배포)
- HTTPS 사용 권장(위치 권한 및 모바일 안정성)

## README 언어 버전

- English: [`README.en.md`](./README.en.md)
- 简体中文: [`README.zh-CN.md`](./README.zh-CN.md)
- 繁體中文: [`README.zh-TW.md`](./README.zh-TW.md)
- 日本語: [`README.ja.md`](./README.ja.md)
- 한국어: [`README.ko.md`](./README.ko.md)
- Français: [`README.fr.md`](./README.fr.md)
- Español: [`README.es.md`](./README.es.md)
- Deutsch: [`README.de.md`](./README.de.md)
- Italiano: [`README.it.md`](./README.it.md)
- Tiếng Việt: [`README.vi.md`](./README.vi.md)
- ไทย: [`README.th.md`](./README.th.md)
- Bahasa Melayu: [`README.ms.md`](./README.ms.md)

## 면책 고지

- 본 프로젝트는 계획/참고 용도입니다.
- 항해, 구조, 안전 관련 의사결정의 유일한 근거로 사용하면 안 됩니다.
- 실제 해상 상태는 바람, 기압, 지형 등에 따라 모델과 다를 수 있습니다.
