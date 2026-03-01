# TideX iPhone (PWA)

这个目录是独立的 iPhone 可安装版本，不影响你原来的桌面版文件。

## 目录

- `index.html` / `styles.css` / `app.js`: TideX 主应用
- `manifest.webmanifest`: iPhone 安装配置
- `service-worker.js`: 离线缓存
- `icons/`: App 图标
- `offline.html`: 离线回退页

## 在 iPhone 上安装

1. 先把这个目录部署到 **HTTPS** 地址（推荐 GitHub Pages / Netlify / Cloudflare Pages）。
2. 用 iPhone 的 Safari 打开该 HTTPS 地址。
3. 点击 Safari 的分享按钮。
4. 选择“添加到主屏幕”。
5. 主屏幕会出现 TideX 图标，点击即可像 App 一样全屏启动。

## 本地测试

在 Mac 上运行：

```bash
cd /Users/hwang/TideX/TideX-iPhone
python3 -m http.server 5180
```

然后电脑访问：

- `http://localhost:5180`

注意：

- iPhone 真机的定位权限在非 HTTPS 下通常不可用。
- 需要联网才能获取地图瓦片和实时潮汐数据。
