# TideX

TideX 是一個行動裝置優先設計的全球潮汐 Web App。使用者可直接在手機瀏覽器開啟（已部署於 Vercel），在地圖上選擇任意海岸點位，查看即時潮位趨勢與當日高潮精準時間。

## 線上存取

- 正式環境（Vercel）：`https://tide-x.vercel.app`

## 專案定位

- 目標使用者：衝浪、岸釣、海邊旅遊、港口活動與日常潮汐查詢
- 核心價值：全球選點、可視化清楚、操作流暢、免安裝即可使用
- 部署型態：純前端靜態網站，可直接部署於 Vercel/GitHub Pages/Netlify

## 核心功能

- 全球地圖選點：可點選任意海岸位置
- 自動定位：取得使用者目前位置
- 附近海灘清單：透過 OpenStreetMap 查詢附近海灘
- 24 小時潮位曲線：呈現全天潮位變化趨勢
- 高潮時間標記：在曲線上標示每次高潮的精準時間
- 時間切換：可選過去、現在與未來日期/小時
- 預測回退：目標日期缺少直接序列時，自動啟用諧波預測
- 多語系介面：支援 12 種語言

## 行動端體驗

- 響應式版面：優先適配 iPhone 與 Android
- 觸控優化：地圖、滑桿與按鈕皆為手指操作優化
- 視覺設計：現代簡潔、對比清晰，戶外閱讀更直覺
- 效能策略：前端輕量化，首屏後互動流暢

## 資料來源與預測邏輯（全部免費）

- 海平面/潮汐序列：Open-Meteo Marine API
- 地圖底圖：OpenStreetMap
- 海灘 POI：OpenStreetMap Overpass API
- 反向地理編碼：Nominatim
- 預測邏輯：缺少目標日期直接資料時，以歷史序列進行諧波擬合預測

## 潮汐預測演算法（簡述）

TideX 的預測流程為「優先使用直接資料，缺失時再啟用模型預測」：

- 直接序列優先：若目標日期可取得海平面小時序列，優先使用該序列。
- 曲線細化：對小時序列做單調三次插值（Monotone Cubic Interpolation），產生更平滑的高頻曲線。
- 模型回退：當目標日期缺少直接序列時，使用歷史潮位序列做諧波擬合。
- 擬合方式：以多組分潮（正弦/餘弦基函數）進行最小平方求解，再產生目標日期潮位曲線。
- 高潮時間：透過局部極值偵測與二次細化，提升高潮時刻精度。

## 技術棧

- 前端：HTML + CSS + JavaScript
- 地圖：Leaflet
- 圖表：ECharts
- 時間處理：Luxon
- 部署：Vercel（靜態託管）

## 本機開發

```bash
cd TideX
python3 -m http.server 5173
```

開啟：`http://localhost:5173`

## Vercel 部署建議

- Framework Preset：`Other`
- Build Command：留空（純靜態站）
- Output Directory：留空（直接部署根目錄）
- 請啟用 HTTPS（定位權限與行動端體驗更穩定）

## README 語言版本

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

## 免責聲明

- 本專案僅供行程與活動參考。
- 不可作為航行、救援或高風險安全決策的唯一依據。
- 實際海況會受風、氣壓、地形等因素影響，可能與模型存在差異。
