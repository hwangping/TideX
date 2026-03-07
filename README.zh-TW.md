# TideX

全球任意海岸即時查看與潮汐預測

線上應用: [https://tide-x.vercel.app](https://tide-x.vercel.app)

## 專案概覽

TideX 現在是單一部署的潮汐 Web App。對 GitHub 使用者來說，只需要維護倉庫根目錄這一套程式碼，就能同時覆蓋桌面瀏覽器、手機瀏覽器與主畫面安裝。

## 核心能力

- 在地圖上選擇任意海岸點，或直接跳到目前定位。
- 基於 OpenStreetMap 自動尋找附近已命名海灘。
- 查看 24 小時潮位曲線、高潮時間標記，以及 15 天最高/最低參考線。
- 在同一視圖中對照潮位、陣風風速與風向。
- 支援過去、現在與未來日期，超出直接資料視窗時會自動回退到諧波預測。
- 同一套響應式 PWA 可用於桌面端、行動網頁與主畫面安裝。

## 免費資料來源

- Open-Meteo Marine：潮汐 / 海平面序列
- Open-Meteo Forecast：陣風風速與風向
- OpenStreetMap 瓦片：底圖
- Overpass API：附近海灘搜尋
- Nominatim：所選位置反向地理編碼

## 預測方法

1. 所選位置與日期若有直接潮汐序列，會優先使用直接資料。
1. 日內曲線採用單調三次插值進行平滑。
1. 直接資料有缺口時，使用諧波模型補齊。
1. 沒有直接資料時，回退到諧波潮汐模型進行預測。
1. 高潮時間會透過局部極值檢測與二次插值進一步細化。

## 安裝為應用程式

1. 在 Safari、Chrome 或其他現代瀏覽器中開啟 [https://tide-x.vercel.app](https://tide-x.vercel.app)。
1. 透過瀏覽器選單使用「加入主畫面」或「安裝應用程式」。
1. 安裝後仍使用同一個 Web 部署，但體驗更接近原生 App。

## 國際化

- 執行時語言包位於 `locales/`，以 JSON 形式載入。
- 倉庫內含 42 種語言包，並支援阿拉伯語、希伯來語、烏爾都語等 RTL 佈局。
- 修改語言檔後，執行 `node scripts/generate-locales.mjs` 以重建 `locales/index.json`。

## 專案結構

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

## 本機開發

用任意靜態檔案伺服器直接啟動倉庫根目錄：

```bash
cd TideX
python3 -m http.server 5173
```

接著開啟 `http://localhost:5173`。

## 部署說明

- 將倉庫根目錄部署到 Vercel、Netlify、Cloudflare Pages 或任何靜態主機即可。
- 不需要建置步驟。
- 根目錄版本已經包含 PWA manifest、圖示與 service worker。

## 免責聲明

- TideX 適合行程規劃與海灘資訊參考，不是認證航海導航工具。
- 真實海況會受到氣壓、湧浪、河流入海、局部地形與天氣等因素影響。
