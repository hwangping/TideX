# TideX

世界中の海岸でリアルタイム潮位と予測を表示

公開アプリ: [https://tide-x.vercel.app](https://tide-x.vercel.app)

## 概要

TideX は、リポジトリのルートだけを配備対象にする単一構成の潮汐 Web アプリになりました。GitHub 利用者は 1 つのコードベースでデスクトップ、モバイルブラウザ、ホーム画面インストールを扱えます。

## 主な機能

- 地図上で任意の海岸地点を選択するか、現在地へすぐ移動できます。
- OpenStreetMap のデータから近くの名前付きビーチを探せます。
- 24 時間の潮位曲線、高潮時刻マーカー、15 日間の高低基準線を確認できます。
- 潮位、突風、風向を同じ画面で比較できます。
- 過去・現在・未来の日付を扱え、直接データがない期間は調和予測へ自動で切り替わります。
- 同じレスポンシブ PWA をデスクトップ、モバイル Web、ホーム画面で利用できます。

## 無料データソース

- Open-Meteo Marine: 潮汐 / 海面系列
- Open-Meteo Forecast: 突風速度と風向
- OpenStreetMap タイル: ベースマップ
- Overpass API: 近隣ビーチ検索
- Nominatim: 選択地点の逆ジオコーディング

## 予測方式

1. 選択地点と日付に直接潮汐系列があれば、まずその系列を使います。
1. 日内の曲線は単調三次補間で滑らかにします。
1. 直接データが一部欠ける場合は、調和補完で穴を埋めます。
1. 直接データがない場合は、調和潮汐モデルにフォールバックします。
1. 高潮時刻は局所極値検出と二次補間でさらに細かく補正します。

## アプリとしてインストール

1. Safari、Chrome などの最新ブラウザで [https://tide-x.vercel.app](https://tide-x.vercel.app) を開きます。
1. ブラウザメニューから `ホーム画面に追加` または `アプリをインストール` を選びます。
1. 同じ Web 配備のまま、通常のアプリのように TideX を起動できます。

## 国際化

- 実行時ロケールパックは `locales/` にあり、JSON で読み込まれます。
- このリポジトリには 42 言語が含まれ、アラビア語・ヘブライ語・ウルドゥー語の RTL にも対応しています。
- ロケール編集後は `node scripts/generate-locales.mjs` を実行して `locales/index.json` を再生成してください。

## プロジェクト構成

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

## ローカル開発

任意の静的ファイルサーバーでリポジトリルートを配信します。

```bash
cd TideX
python3 -m http.server 5173
```

その後 `http://localhost:5173` を開きます。

## デプロイ

- リポジトリルートを Vercel、Netlify、Cloudflare Pages、または任意の静的ホスティングに配備します。
- ビルド工程は不要です。
- ルートアプリには PWA マニフェスト、アイコン、service worker がすでに含まれています。

## 免責事項

- TideX は行程計画や海岸状況の把握向けであり、認証済みの航海ナビゲーションではありません。
- 実際の海況は気圧、うねり、河川流入、局所地形、天候によって変化します。
