# TideX

TideX là ứng dụng web thủy triều toàn cầu được thiết kế ưu tiên di động. Người dùng có thể mở trực tiếp trên trình duyệt điện thoại (đã triển khai trên Vercel), chọn bất kỳ điểm bờ biển nào trên bản đồ, xem xu hướng mực nước biển và thời gian triều cao chính xác trong ngày.

## Truy cập trực tuyến

- Môi trường production (Vercel): `https://tide-x.vercel.app`

## Định hướng dự án

- Người dùng mục tiêu: lướt sóng, câu cá ven bờ, du lịch biển, hoạt động cảng
- Giá trị cốt lõi: chọn điểm toàn cầu, trực quan rõ ràng, thao tác mượt, không cần cài app
- Cách triển khai: frontend tĩnh thuần túy, dễ host trên Vercel/GitHub Pages/Netlify

## Tính năng chính

- Chọn vị trí bờ biển toàn cầu trên bản đồ
- Tự động lấy vị trí người dùng
- Danh sách bãi biển gần đó từ OpenStreetMap
- Biểu đồ thủy triều 24 giờ
- Đánh dấu thời gian triều cao trên biểu đồ
- Chọn ngày/giờ quá khứ, hiện tại, tương lai
- Tự động dùng dự báo điều hòa khi thiếu chuỗi dữ liệu trực tiếp
- Giao diện đa ngôn ngữ với 12 ngôn ngữ

## Trải nghiệm di động

- Giao diện responsive cho iPhone và Android
- Tối ưu thao tác chạm cho bản đồ, thanh trượt, nút bấm
- Thiết kế hiện đại, dễ đọc ngoài trời
- Frontend nhẹ, phản hồi nhanh

## Nguồn dữ liệu và logic dự báo (đều miễn phí)

- Chuỗi mực nước biển/thủy triều: Open-Meteo Marine API
- Bản đồ nền: OpenStreetMap
- POI bãi biển: OpenStreetMap Overpass API
- Reverse geocoding: Nominatim
- Dự báo: khớp điều hòa từ dữ liệu lịch sử khi thiếu dữ liệu ngày mục tiêu

## Thuật Toán Dự Báo (Tóm Tắt)

TideX dùng chiến lược 2 bước: ưu tiên dữ liệu trực tiếp, thiếu thì dùng mô hình dự báo.

- Ưu tiên chuỗi trực tiếp: nếu có dữ liệu mực nước theo giờ cho ngày chọn, hệ thống dùng trực tiếp.
- Làm mượt đường cong: chuỗi theo giờ được nội suy bậc ba đơn điệu để tăng độ mịn.
- Dự báo thay thế: khi thiếu dữ liệu trực tiếp, TideX khớp mô hình điều hòa từ dữ liệu lịch sử.
- Cách khớp mô hình: nhiều thành phần triều (cơ sở sin/cos) được ước lượng bằng bình phương tối thiểu.
- Thời điểm triều cao: phát hiện cực trị cục bộ rồi tinh chỉnh bằng nội suy bậc hai.

## Công nghệ sử dụng

- Frontend: HTML + CSS + JavaScript
- Bản đồ: Leaflet
- Biểu đồ: ECharts
- Xử lý thời gian: Luxon
- Triển khai: Vercel (static hosting)

## Chạy local

```bash
cd TideX
python3 -m http.server 5173
```

Mở: `http://localhost:5173`

## Gợi ý cấu hình Vercel

- Framework Preset: `Other`
- Build Command: để trống (site tĩnh)
- Output Directory: để trống (deploy thư mục gốc)
- Bật HTTPS để định vị ổn định hơn trên di động

## README các ngôn ngữ

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

## Lưu ý miễn trừ

- Dự án chỉ dùng để tham khảo và lập kế hoạch.
- Không dùng làm nguồn duy nhất cho điều hướng hoặc an toàn.
- Điều kiện thực tế có thể khác do gió, áp suất, địa hình ven biển.
