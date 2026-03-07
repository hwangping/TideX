# TideX

Dünyadaki herhangi bir kıyı için gerçek zamanlı ve tahmini gelgitler

Canlı uygulama: [https://tide-x.vercel.app](https://tide-x.vercel.app)

## Genel bakış

TideX artık yalnızca depo kökünden dağıtılan tek bir gelgit web uygulaması. GitHub kullanıcıları için bu, masaüstü, mobil tarayıcı ve ana ekrana kurulum için tek bir kod tabanı anlamına geliyor.

## Öne çıkanlar

- Haritada herhangi bir kıyı noktasını seçin veya doğrudan mevcut konumunuza gidin.
- OpenStreetMap verileriyle yakındaki adlandırılmış plajları bulun.
- 24 saatlik gelgit eğrisini, yüksek gelgit saatlerini ve 15 günlük referans çizgilerini görüntüleyin.
- Gelgit yüksekliğini, rüzgar hamlesini ve rüzgar yönünü aynı görünümde karşılaştırın.
- Doğrudan veri penceresi dışındaki tarihler için harmonik fallback ile geçmiş, bugün ve gelecek günleri gezin.
- Aynı duyarlı PWA'yı masaüstünde, mobil webde ve ana ekranda kullanın.

## Ücretsiz veri kaynakları

- Open-Meteo Marine: gelgit / deniz seviyesi serileri
- Open-Meteo Forecast: rüzgar hamlesi hızı ve yönü
- OpenStreetMap döşemeleri: temel harita
- Overpass API: yakındaki plajları bulma
- Nominatim: seçilen noktalar için ters coğrafi kodlama

## Tahmin yaklaşımı

1. Seçilen nokta ve tarih için doğrudan gelgit serisi varsa önce onu kullanın.
1. Günlük eğri monoton kübik enterpolasyonla yumuşatılır.
1. Kısmi boşluklar harmonik tamamlama ile doldurulur.
1. Doğrudan veri yoksa harmonik gelgit modeline geri düşülür.
1. Yüksek gelgit saatleri yerel ekstremum tespiti ve ikinci dereceden enterpolasyonla iyileştirilir.

## Uygulama olarak yükle

1. [https://tide-x.vercel.app](https://tide-x.vercel.app) adresini Safari, Chrome veya başka bir modern tarayıcıda açın.
1. Tarayıcı menüsünden `Ana ekrana ekle` veya `Uygulamayı yükle` seçeneğini kullanın.
1. Aynı web dağıtımını koruyarak TideX'i normal bir uygulama gibi başlatın.

## Uluslararasılaştırma

- Çalışma zamanı dil paketleri `locales/` içinde bulunur ve JSON olarak yüklenir.
- Depo 42 dil paketi içerir; Arapça, İbranice ve Urduca için RTL desteği de vardır.
- Dil dosyalarını düzenledikten sonra `locales/index.json` dosyasını yeniden oluşturmak için `node scripts/generate-locales.mjs` çalıştırın.

## Proje yapısı

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

## Yerel geliştirme

Depo kökünü herhangi bir statik dosya sunucusuyla servis edin:

```bash
cd TideX
python3 -m http.server 5173
```

Ardından `http://localhost:5173` adresini açın.

## Dağıtım

- Depo kökünü Vercel, Netlify, Cloudflare Pages veya herhangi bir statik barındırmaya dağıtın.
- Derleme adımı gerekmez.
- Kök uygulama zaten PWA manifest, ikonlar ve service worker içerir.

## Uyarı

- TideX seyahat planlama ve kıyı farkındalığı içindir; sertifikalı seyir aracı değildir.
- Gerçek koşullar basınç, dalga, nehir akışı, yerel batimetri ve hava nedeniyle farklı olabilir.
