# TideX

Triều theo thời gian thực và dự báo cho mọi bờ biển trên thế giới

Ứng dụng trực tuyến: [https://tide-x.vercel.app](https://tide-x.vercel.app)

## Tổng quan

TideX hiện là một ứng dụng web thủy triều duy nhất được triển khai từ thư mục gốc của kho mã. Với người dùng GitHub, điều này có nghĩa là một codebase duy nhất cho desktop, trình duyệt di động và cài đặt lên màn hình chính.

## Điểm nổi bật

- Chọn bất kỳ điểm ven biển nào trên bản đồ hoặc chuyển thẳng tới vị trí hiện tại.
- Tìm các bãi biển có tên ở gần từ dữ liệu OpenStreetMap.
- Xem đường cong thủy triều 24 giờ với mốc giờ triều cao và đường tham chiếu 15 ngày.
- So sánh độ cao thủy triều, gió giật và hướng gió trong cùng một chế độ xem.
- Duyệt ngày quá khứ, hiện tại và tương lai với cơ chế fallback điều hòa ngoài cửa sổ dữ liệu trực tiếp.
- Dùng cùng một PWA đáp ứng trên desktop, web di động và màn hình chính.

## Nguồn dữ liệu miễn phí

- Open-Meteo Marine: chuỗi thủy triều / mực nước biển
- Open-Meteo Forecast: tốc độ gió giật và hướng gió
- Ô bản đồ OpenStreetMap: bản đồ nền
- Overpass API: tìm bãi biển lân cận
- Nominatim: mã hóa địa lý ngược cho điểm đã chọn

## Cách dự báo

1. Ưu tiên chuỗi thủy triều trực tiếp khi có sẵn cho điểm và ngày đã chọn.
1. Làm mượt đường cong trong ngày bằng nội suy bậc ba đơn điệu.
1. Bù các đoạn thiếu bằng phần hoàn thiện điều hòa.
1. Khi không có dữ liệu trực tiếp, hệ thống quay về mô hình thủy triều điều hòa.
1. Tinh chỉnh giờ triều cao bằng phát hiện cực trị cục bộ và nội suy bậc hai.

## Cài như ứng dụng

1. Mở [https://tide-x.vercel.app](https://tide-x.vercel.app) bằng Safari, Chrome hoặc trình duyệt hiện đại khác.
1. Dùng `Thêm vào màn hình chính` hoặc `Cài đặt ứng dụng` từ menu trình duyệt.
1. Khởi chạy TideX như một ứng dụng bình thường trong khi vẫn dùng cùng một bản triển khai web.

## Quốc tế hóa

- Gói ngôn ngữ runtime nằm trong `locales/` và được tải từ JSON.
- Kho mã có 42 gói ngôn ngữ, bao gồm hỗ trợ RTL cho tiếng Ả Rập, Do Thái và Urdu.
- Sau khi chỉnh sửa tệp ngôn ngữ, chạy `node scripts/generate-locales.mjs` để tạo lại `locales/index.json`.

## Cấu trúc dự án

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

## Phát triển cục bộ

Phục vụ thư mục gốc của kho mã bằng bất kỳ máy chủ tĩnh nào:

```bash
cd TideX
python3 -m http.server 5173
```

Sau đó mở `http://localhost:5173`.

## Triển khai

- Triển khai thư mục gốc lên Vercel, Netlify, Cloudflare Pages hoặc bất kỳ dịch vụ static hosting nào.
- Không cần bước build.
- Ứng dụng gốc đã bao gồm manifest PWA, biểu tượng và service worker.

## Lưu ý

- TideX dành cho lập kế hoạch chuyến đi và bối cảnh bãi biển, không phải công cụ hàng hải được chứng nhận.
- Điều kiện thực tế có thể khác do áp suất, sóng, dòng sông, địa hình đáy biển cục bộ và thời tiết.
