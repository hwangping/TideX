# TideX

TideX はモバイルファーストで設計されたグローバル潮汐 Web アプリです。ユーザーはスマートフォンのブラウザから直接アクセスでき（Vercel にデプロイ済み）、地図上で任意の海岸地点を選び、潮位トレンドと当日の満潮時刻を確認できます。

## アクセス

- 本番環境（Vercel）：`https://tide-x.vercel.app`

## プロジェクトの位置づけ

- 対象ユーザー：サーフィン、岸釣り、海辺の旅行、港湾関連活動など
- 提供価値：世界中の地点選択、見やすい可視化、直感的な操作、インストール不要
- 配置方法：静的フロントエンドのみ。Vercel/GitHub Pages/Netlify で運用可能

## 主な機能

- 世界地図から任意の海岸地点を選択
- 端末の現在地を自動取得
- OpenStreetMap から近隣ビーチを一覧表示
- 24 時間の潮位カーブを表示
- 満潮時刻をカーブ上に明示
- 過去・現在・未来の日付/時刻を切り替え
- 対象日の直接データがない場合は調和予測へ自動フォールバック
- 12 言語対応の UI

## モバイル体験

- iPhone / Android 向けのレスポンシブ設計
- 地図、スライダー、ボタンをタッチ操作向けに最適化
- 屋外でも読みやすいシンプルなデザイン
- 軽量フロントエンドでスムーズな操作感

## データソースと予測ロジック（すべて無料）

- 海面/潮位系列：Open-Meteo Marine API
- 地図タイル：OpenStreetMap
- ビーチ POI：OpenStreetMap Overpass API
- 逆ジオコーディング：Nominatim
- 予測：直接系列が不足する場合、履歴系列を用いた調和フィッティング

## 潮汐予測アルゴリズム（概要）

TideX は「直接データ優先、欠損時はモデル予測」という二段階で潮位を生成します。

- 直接系列優先：選択日の時間別海面データがある場合はそれを優先使用。
- 曲線の高精細化：時間データを単調三次補間で細分化し、より滑らかな曲線を作成。
- フォールバック予測：直接系列が不足する場合、履歴データから調和モデルを構築。
- 推定方法：複数の分潮成分（正弦/余弦基底）を最小二乗で推定。
- 満潮時刻：局所極値を検出し、二次補間で時刻を微調整して精度を向上。

## 技術スタック

- フロントエンド：HTML + CSS + JavaScript
- 地図：Leaflet
- チャート：ECharts
- 時刻処理：Luxon
- 配置：Vercel（静的ホスティング）

## ローカル開発

```bash
cd TideX
python3 -m http.server 5173
```

アクセス：`http://localhost:5173`

## Vercel デプロイ設定

- Framework Preset：`Other`
- Build Command：空欄（静的サイト）
- Output Directory：空欄（ルートをそのまま配信）
- HTTPS を有効化（位置情報権限の安定性向上）

## README 言語版

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

## 免責事項

- 本プロジェクトは計画・参考用途です。
- 航行、安全、救助に関する最終判断の唯一情報源としては使用しないでください。
- 実際の海況は風・気圧・地形等によりモデルと差が出る場合があります。
