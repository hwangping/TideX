# TideX

TideX 是一个面向移动端优先设计的全球潮汐 Web App。用户可以直接在手机浏览器访问（已部署于 Vercel），在地图上选择任意海岸点位，实时查看潮水高度曲线，并查看当天高潮时间。

## 在线访问

- 生产环境（Vercel）：`https://tide-x.vercel.app`

## 项目定位

- 目标用户：冲浪、海钓、赶海、海边旅行、港口活动等需要快速查看潮汐变化的人
- 核心价值：全球可选点、可视化清晰、交互直观、无需安装即可用
- 部署方式：纯前端静态站点，可直接托管在 Vercel/GitHub Pages/Netlify

## 核心功能

- 全球地图选点：点击地图选择任意海岸位置
- 自动定位：自动获取用户当前位置
- 附近海滩推荐：基于 OpenStreetMap 查询并列出附近海滩
- 24 小时潮位曲线：展示全天潮水高度变化趋势
- 高潮时间标注：在曲线上标出每个高潮的时间点
- 时间选择：支持过去、现在、未来日期和小时切换
- 数据回退预测：当目标日期无直接序列时，自动启用谐波模型进行预测
- 多语言支持：12 种语言无缝切换

## 移动端体验

- 响应式布局：优先适配 iPhone 和 Android 手机
- 触控友好：地图、滑块、按钮均针对手指操作优化
- 视觉风格：现代、简洁、对比清晰，便于户外快速读取
- 性能策略：前端轻量化实现，首屏加载后交互流畅

## 数据来源与预测逻辑（全部免费）

- 海平面/潮汐序列：Open-Meteo Marine API
- 地图底图：OpenStreetMap
- 海滩 POI：OpenStreetMap Overpass API
- 地理反查：Nominatim
- 预测模型：在缺失目标日期直接数据时，使用历史序列做谐波拟合预测

## 潮汐预测算法（简述）

TideX 的预测流程是“优先使用直接数据，缺失时再做模型预测”：

- 直接序列优先：目标日期若可获取海平面小时序列，优先使用该序列。
- 曲线细化：对小时序列做单调三次插值（Monotone Cubic Interpolation），生成更平滑的高频曲线。
- 模型回退：当目标日期缺少直接序列时，使用历史潮位序列进行谐波拟合。
- 拟合方式：采用多组潮汐分潮（正弦/余弦基函数）做最小二乘求解，再生成目标日期潮位曲线。
- 高潮时间：通过局部极值检测并做二次细化，得到更准确的高潮时刻。

## 技术栈

- 前端：原生 HTML + CSS + JavaScript
- 地图：Leaflet
- 图表：ECharts
- 时间处理：Luxon
- 部署：Vercel（静态站点）

## 本地开发

```bash
cd TideX
python3 -m http.server 5173
```

打开：`http://localhost:5173`

## Vercel 部署建议

- Framework Preset 选择 `Other`
- Build Command 留空（纯静态）
- Output Directory 留空（根目录部署）
- 确保启用 HTTPS（定位权限与移动端体验更稳定）

## 多语言 README

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

## 免责声明

- 本项目仅用于行程与活动参考。
- 不可作为航行、救援或高风险决策的唯一依据。
- 实际海况可能受风、气压、地形等因素影响，与模型存在差异。
