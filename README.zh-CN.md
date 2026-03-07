# TideX

全球任意海岸实时查看与潮汐预测

在线地址: [https://tide-x.vercel.app](https://tide-x.vercel.app)

## 项目概览

TideX 现在是单一部署的潮汐 Web App。GitHub 用户只需要维护仓库根目录这一套代码，就可以同时覆盖桌面浏览器、手机浏览器和主屏幕安装场景。

## 核心能力

- 在地图上选择任意海岸点，或直接跳转到当前定位。
- 基于 OpenStreetMap 自动发现附近已命名海滩。
- 查看 24 小时潮位曲线、高潮时间标记，以及 15 天最高/最低参考线。
- 在同一视图中对照潮位、阵风风速和风向。
- 支持过去、当前和未来日期，超出直接数据窗口时自动回退到谐波预测。
- 同一套响应式 PWA 可用于桌面端、移动网页和主屏幕安装。

## 免费数据源

- Open-Meteo Marine：潮汐 / 海平面序列
- Open-Meteo Forecast：阵风风速与风向
- OpenStreetMap 瓦片：底图
- Overpass API：附近海滩检索
- Nominatim：所选位置反向地理编码

## 预测方案

1. 所选位置和日期有直接潮汐序列时，优先使用直接数据。
1. 日内曲线采用单调三次插值进行平滑。
1. 直接数据存在缺口时，使用谐波模型补齐。
1. 没有直接数据时，回退到谐波潮汐模型进行预测。
1. 高潮时间通过局部极值检测和二次插值进一步细化。

## 安装为应用

1. 在 Safari、Chrome 或其他现代浏览器中打开 [https://tide-x.vercel.app](https://tide-x.vercel.app)。
1. 通过浏览器菜单使用“添加到主屏幕”或“安装应用”。
1. 安装后仍然使用同一个 Web 部署地址，但体验接近原生应用。

## 国际化

- 运行时语言包位于 `locales/`，以 JSON 形式加载。
- 仓库内置 42 种语言包，并支持阿拉伯语、希伯来语、乌尔都语等 RTL 布局。
- 修改语言包后运行 `node scripts/generate-locales.mjs` 以重建 `locales/index.json`。

## 项目结构

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

## 本地开发

用任意静态文件服务器直接启动仓库根目录：

```bash
cd TideX
python3 -m http.server 5173
```

然后打开 `http://localhost:5173`。

## 部署说明

- 将仓库根目录部署到 Vercel、Netlify、Cloudflare Pages 或任意静态托管平台即可。
- 不需要构建步骤。
- 根目录版本已经包含 PWA manifest、图标和 service worker。

## 免责声明

- TideX 适合行程规划和海滩信息查看，不是认证航海导航工具。
- 真实海况会受气压、涌浪、河流入海、局部地形和天气等因素影响。
