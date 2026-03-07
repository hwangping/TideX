const { DateTime } = window.luxon;

const LANGUAGE_OPTIONS = [
  { code: "en-US", label: "English (US)" },
  { code: "zh-CN", label: "简体中文" },
  { code: "es", label: "Español" },
  { code: "ja", label: "日本語" },
  { code: "de", label: "Deutsch" },
  { code: "fr", label: "Français" },
  { code: "ko", label: "한국어" },
  { code: "pt-BR", label: "Português (Brasil)" },
  { code: "ru", label: "Русский" },
  { code: "it", label: "Italiano" },
  { code: "zh-TW", label: "繁體中文" },
  { code: "ar", label: "العربية" },
  { code: "tr", label: "Türkçe" },
  { code: "id", label: "Bahasa Indonesia" },
  { code: "pl", label: "Polski" },
  { code: "vi", label: "Tiếng Việt" },
  { code: "th", label: "ไทย" },
  { code: "nl", label: "Nederlands" },
  { code: "sv", label: "Svenska" },
  { code: "da", label: "Dansk" },
  { code: "no", label: "Norsk" },
  { code: "fi", label: "Suomi" },
  { code: "he", label: "עברית" },
  { code: "cs", label: "Čeština" },
  { code: "ro", label: "Română" },
  { code: "hu", label: "Magyar" },
  { code: "el", label: "Ελληνικά" },
  { code: "uk", label: "Українська" },
  { code: "hi", label: "हिन्दी" },
  { code: "ms", label: "Bahasa Melayu" },
  { code: "mi", label: "Te Reo Māori" },
  { code: "ca", label: "Català" },
  { code: "bn", label: "বাংলা" },
  { code: "tl", label: "Tagalog" },
  { code: "sw", label: "Kiswahili" },
  { code: "ta", label: "தமிழ்" },
  { code: "te", label: "తెలుగు" },
  { code: "mr", label: "मराठी" },
  { code: "ur", label: "اردو" },
  { code: "bg", label: "Български" },
  { code: "hr", label: "Hrvatski" },
  { code: "sk", label: "Slovenčina" },
];

const DEFAULT_LANG = "en-US";
const LOCALE_VERSION = "20260307-i18n2";
const RTL_LANGS = new Set(["ar", "he", "ur"]);
const LANGUAGE_ALIASES = {
  en: "en-US",
  "en-us": "en-US",
  zh: "zh-CN",
  "zh-cn": "zh-CN",
  "zh-hans": "zh-CN",
  "zh-sg": "zh-CN",
  "zh-tw": "zh-TW",
  "zh-hk": "zh-TW",
  "zh-hant": "zh-TW",
  pt: "pt-BR",
  "pt-br": "pt-BR",
  in: "id",
  id: "id",
  nb: "no",
  "nb-no": "no",
  nn: "no",
  "nn-no": "no",
  no: "no",
  iw: "he",
  he: "he",
  fil: "tl",
  tl: "tl",
};
const INLINE_LOCALE_MAP = {
  "en-US": "en",
  "zh-CN": "zh-CN",
  "zh-TW": "zh-TW",
  es: "es",
  ja: "ja",
  de: "de",
  fr: "fr",
  ko: "ko",
  it: "it",
  vi: "vi",
  th: "th",
  ms: "ms",
};

const I18N = {
  en: {
    title: "TideX",
    subtitle: "Real-time and predicted tides for any coastline in the world",
    languageLabel: "Language",
    mapSection: "Location & Beaches",
    locateMe: "Use my location",
    mapHint: "Tap the map to choose any coast. Nearby beaches are listed below.",
    nearbyBeaches: "Nearby beaches",
    dateLabel: "Date",
    hourLabel: "Time",
    prevDay: "Prev day",
    now: "Now",
    nextDay: "Next day",
    refresh: "Refresh",
    currentLevel: "Selected time",
    currentWind: "Gust at time",
    rangeSection: "15-day tide outlook",
    dailyHigh: "Daily high tide",
    dailyLow: "Daily low tide",
    disclaimer: "For planning reference only. Do not use as a sole source for navigation or safety decisions.",
    locating: "Detecting your location...",
    locationDenied: "Location access denied. You can still choose on the map.",
    locationError: "Location failed. Please choose on the map.",
    locationUnsupported: "Your browser does not support geolocation.",
    loading: "Loading tide data...",
    fetchError: "Unable to load data for this point right now.",
    sourceObserved: "Source: Open-Meteo Marine",
    sourceHybrid: "Source: Direct tide + harmonic completion",
    sourcePredicted: "Source: Harmonic prediction (fallback)",
    timezoneLabel: "Timezone: {tz}",
    beachCount: "{count} beaches",
    noneBeaches: "No named beaches found nearby.",
    selectedLocation: "Selected",
    myLocation: "My location",
    fallbackNotice: "Using harmonic prediction because direct series is unavailable for this date.",
    tideHigh: "High",
    tideLow: "Low",
    windowHigh: "15d high",
    windowLow: "15d low",
  },
  "zh-CN": {
    title: "TideX",
    subtitle: "全球任意海岸实时查看与潮汐预测",
    languageLabel: "语言",
    mapSection: "位置与海滩",
    locateMe: "使用我的位置",
    mapHint: "点击地图可选择任意海岸位置，下方会列出附近海滩。",
    nearbyBeaches: "附近海滩",
    dateLabel: "日期",
    hourLabel: "时间",
    prevDay: "前一天",
    now: "现在",
    nextDay: "后一天",
    refresh: "刷新",
    currentLevel: "所选时刻",
    currentWind: "所选阵风",
    rangeSection: "前后15天潮汐总览",
    dailyHigh: "当日高潮",
    dailyLow: "当日低潮",
    disclaimer: "仅用于行程参考，不可作为航行或安全决策的唯一依据。",
    locating: "正在定位...",
    locationDenied: "定位权限被拒绝，仍可在地图上手动选择。",
    locationError: "定位失败，请在地图上手动选择。",
    locationUnsupported: "当前浏览器不支持地理定位。",
    loading: "正在加载潮汐数据...",
    fetchError: "当前无法加载该位置数据，请稍后重试。",
    sourceObserved: "数据源：Open-Meteo Marine",
    sourceHybrid: "数据源：直接潮汐 + 谐波补全",
    sourcePredicted: "数据源：谐波预测（回退）",
    timezoneLabel: "时区：{tz}",
    beachCount: "{count} 个海滩",
    noneBeaches: "附近未找到已命名海滩。",
    selectedLocation: "当前选择",
    myLocation: "我的位置",
    fallbackNotice: "该日期暂无直接序列，已使用谐波模型预测。",
    tideHigh: "高潮",
    tideLow: "低潮",
    windowHigh: "15天最高",
    windowLow: "15天最低",
  },
  "zh-TW": {
    title: "TideX",
    subtitle: "全球任意海岸即時查看與潮汐預測",
    languageLabel: "語言",
    mapSection: "位置與海灘",
    locateMe: "使用我的位置",
    mapHint: "點擊地圖可選擇任意海岸位置，下方會列出附近海灘。",
    nearbyBeaches: "附近海灘",
    dateLabel: "日期",
    hourLabel: "時間",
    prevDay: "前一天",
    now: "現在",
    nextDay: "後一天",
    refresh: "重新整理",
    currentLevel: "所選時刻",
    currentWind: "所選陣風",
    rangeSection: "前後15天潮汐總覽",
    dailyHigh: "當日高潮",
    dailyLow: "當日低潮",
    disclaimer: "僅供行程參考，不可作為航行或安全決策之唯一依據。",
    locating: "正在定位...",
    locationDenied: "定位權限被拒絕，仍可在地圖上手動選擇。",
    locationError: "定位失敗，請在地圖上手動選擇。",
    locationUnsupported: "目前瀏覽器不支援地理定位。",
    loading: "正在載入潮汐資料...",
    fetchError: "目前無法載入此位置資料，請稍後再試。",
    sourceObserved: "資料來源：Open-Meteo Marine",
    sourceHybrid: "資料來源：直接潮汐 + 諧波補全",
    sourcePredicted: "資料來源：諧波預測（回退）",
    timezoneLabel: "時區：{tz}",
    beachCount: "{count} 個海灘",
    noneBeaches: "附近找不到已命名海灘。",
    selectedLocation: "目前選擇",
    myLocation: "我的位置",
    fallbackNotice: "此日期暫無直接序列，已使用諧波模型預測。",
    tideHigh: "高潮",
    tideLow: "低潮",
    windowHigh: "15天最高",
    windowLow: "15天最低",
  },
  ja: {
    title: "TideX",
    subtitle: "世界中の海岸でリアルタイム潮位と予測を表示",
    languageLabel: "言語",
    mapSection: "位置とビーチ",
    locateMe: "現在地を使う",
    mapHint: "地図をタップして任意の沿岸地点を選択。近くのビーチは下に表示されます。",
    nearbyBeaches: "近くのビーチ",
    dateLabel: "日付",
    hourLabel: "時刻",
    prevDay: "前日",
    now: "現在",
    nextDay: "翌日",
    refresh: "更新",
    currentLevel: "選択時刻",
    dailyHigh: "当日の満潮",
    dailyLow: "当日の干潮",
    disclaimer: "計画の参考用です。航行や安全判断の唯一情報源として使わないでください。",
    locating: "現在地を取得中...",
    locationDenied: "位置情報が拒否されました。地図から手動選択できます。",
    locationError: "位置情報の取得に失敗しました。地図で選択してください。",
    locationUnsupported: "このブラウザは位置情報に対応していません。",
    loading: "潮汐データを読み込み中...",
    fetchError: "この地点のデータを取得できませんでした。",
    sourceObserved: "ソース: Open-Meteo Marine",
    sourcePredicted: "ソース: 調和予測 (フォールバック)",
    timezoneLabel: "タイムゾーン: {tz}",
    beachCount: "{count} 件のビーチ",
    noneBeaches: "近くに名前付きビーチが見つかりません。",
    selectedLocation: "選択地点",
    myLocation: "現在地",
    fallbackNotice: "この日付の直接系列がないため、調和予測を使用しています。",
    tideHigh: "満潮",
    tideLow: "干潮",
    windowHigh: "15日最高",
    windowLow: "15日最低",
  },
  ko: {
    title: "TideX",
    subtitle: "전 세계 해안의 실시간 조위 및 예측",
    languageLabel: "언어",
    mapSection: "위치 및 해변",
    locateMe: "내 위치 사용",
    mapHint: "지도에서 원하는 해안을 선택하세요. 아래에 주변 해변이 표시됩니다.",
    nearbyBeaches: "주변 해변",
    dateLabel: "날짜",
    hourLabel: "시간",
    prevDay: "이전 날",
    now: "현재",
    nextDay: "다음 날",
    refresh: "새로고침",
    currentLevel: "선택 시각",
    dailyHigh: "일일 만조",
    dailyLow: "일일 간조",
    disclaimer: "일정 참고용입니다. 항해/안전 판단의 유일한 근거로 사용하지 마세요.",
    locating: "위치를 확인하는 중...",
    locationDenied: "위치 권한이 거부되었습니다. 지도에서 직접 선택할 수 있습니다.",
    locationError: "위치 확인 실패. 지도에서 선택해 주세요.",
    locationUnsupported: "브라우저가 위치 정보를 지원하지 않습니다.",
    loading: "조위 데이터를 불러오는 중...",
    fetchError: "현재 이 지점 데이터를 불러올 수 없습니다.",
    sourceObserved: "출처: Open-Meteo Marine",
    sourcePredicted: "출처: 조화 예측 (대체)",
    timezoneLabel: "시간대: {tz}",
    beachCount: "해변 {count}개",
    noneBeaches: "근처에 이름이 있는 해변이 없습니다.",
    selectedLocation: "선택 위치",
    myLocation: "내 위치",
    fallbackNotice: "해당 날짜의 직접 시계열이 없어 조화 예측을 사용합니다.",
    tideHigh: "만조",
    tideLow: "간조",
    windowHigh: "15일 최고",
    windowLow: "15일 최저",
  },
  fr: {
    title: "TideX",
    subtitle: "Marées en temps réel et prévisions pour toutes les côtes du monde",
    languageLabel: "Langue",
    mapSection: "Position et plages",
    locateMe: "Utiliser ma position",
    mapHint: "Touchez la carte pour choisir n'importe quelle côte. Les plages proches sont listées ci-dessous.",
    nearbyBeaches: "Plages proches",
    dateLabel: "Date",
    hourLabel: "Heure",
    prevDay: "Jour -1",
    now: "Maintenant",
    nextDay: "Jour +1",
    refresh: "Actualiser",
    currentLevel: "Heure sélectionnée",
    dailyHigh: "Pleine mer du jour",
    dailyLow: "Basse mer du jour",
    disclaimer: "Référence de planification uniquement. Ne pas utiliser comme unique source de navigation ou de sécurité.",
    locating: "Détection de votre position...",
    locationDenied: "Accès à la localisation refusé. Vous pouvez choisir sur la carte.",
    locationError: "Échec de la localisation. Choisissez un point sur la carte.",
    locationUnsupported: "La géolocalisation n'est pas supportée par votre navigateur.",
    loading: "Chargement des données de marée...",
    fetchError: "Impossible de charger les données pour ce point pour le moment.",
    sourceObserved: "Source : Open-Meteo Marine",
    sourcePredicted: "Source : Prévision harmonique (secours)",
    timezoneLabel: "Fuseau : {tz}",
    beachCount: "{count} plages",
    noneBeaches: "Aucune plage nommée trouvée à proximité.",
    selectedLocation: "Sélection",
    myLocation: "Ma position",
    fallbackNotice: "Prévision harmonique utilisée car la série directe est indisponible pour cette date.",
    tideHigh: "Pleine",
    tideLow: "Basse",
    windowHigh: "Max 15 j",
    windowLow: "Min 15 j",
  },
  es: {
    title: "TideX",
    subtitle: "Mareas en tiempo real y pronóstico para cualquier costa del mundo",
    languageLabel: "Idioma",
    mapSection: "Ubicación y playas",
    locateMe: "Usar mi ubicación",
    mapHint: "Toca el mapa para elegir cualquier costa. Abajo verás playas cercanas.",
    nearbyBeaches: "Playas cercanas",
    dateLabel: "Fecha",
    hourLabel: "Hora",
    prevDay: "Día anterior",
    now: "Ahora",
    nextDay: "Día siguiente",
    refresh: "Actualizar",
    currentLevel: "Hora seleccionada",
    dailyHigh: "Pleamar del día",
    dailyLow: "Bajamar del día",
    disclaimer: "Solo para referencia de planificación. No usar como única fuente para navegación o seguridad.",
    locating: "Detectando tu ubicación...",
    locationDenied: "Permiso de ubicación denegado. Puedes elegir en el mapa.",
    locationError: "Error de ubicación. Elige un punto en el mapa.",
    locationUnsupported: "Tu navegador no soporta geolocalización.",
    loading: "Cargando datos de marea...",
    fetchError: "No se pudo cargar la información para este punto.",
    sourceObserved: "Fuente: Open-Meteo Marine",
    sourcePredicted: "Fuente: Predicción armónica (respaldo)",
    timezoneLabel: "Zona horaria: {tz}",
    beachCount: "{count} playas",
    noneBeaches: "No se encontraron playas con nombre cerca.",
    selectedLocation: "Seleccionado",
    myLocation: "Mi ubicación",
    fallbackNotice: "Se usa predicción armónica porque no hay serie directa para esta fecha.",
    tideHigh: "Pleamar",
    tideLow: "Bajamar",
    windowHigh: "Máx 15 d",
    windowLow: "Mín 15 d",
  },
  de: {
    title: "TideX",
    subtitle: "Echtzeit- und Prognose-Gezeiten für jede Küste weltweit",
    languageLabel: "Sprache",
    mapSection: "Position & Strände",
    locateMe: "Meinen Standort nutzen",
    mapHint: "Auf die Karte tippen, um jede Küste auszuwählen. Nahe Strände stehen unten.",
    nearbyBeaches: "Nahe Strände",
    dateLabel: "Datum",
    hourLabel: "Uhrzeit",
    prevDay: "Vortag",
    now: "Jetzt",
    nextDay: "Nächster Tag",
    refresh: "Aktualisieren",
    currentLevel: "Gewählte Zeit",
    dailyHigh: "Tageshochwasser",
    dailyLow: "Tagestiefwasser",
    disclaimer: "Nur zur Planung. Nicht als einzige Quelle für Navigation oder Sicherheit verwenden.",
    locating: "Standort wird ermittelt...",
    locationDenied: "Standortzugriff verweigert. Auswahl auf der Karte ist möglich.",
    locationError: "Standort fehlgeschlagen. Bitte auf der Karte wählen.",
    locationUnsupported: "Ihr Browser unterstützt keine Geolokalisierung.",
    loading: "Gezeitendaten werden geladen...",
    fetchError: "Daten für diesen Punkt konnten nicht geladen werden.",
    sourceObserved: "Quelle: Open-Meteo Marine",
    sourcePredicted: "Quelle: Harmonische Vorhersage (Fallback)",
    timezoneLabel: "Zeitzone: {tz}",
    beachCount: "{count} Strände",
    noneBeaches: "Keine benannten Strände in der Nähe gefunden.",
    selectedLocation: "Ausgewählt",
    myLocation: "Mein Standort",
    fallbackNotice: "Harmonische Vorhersage, da direkte Reihe für dieses Datum fehlt.",
    tideHigh: "Hoch",
    tideLow: "Niedrig",
    windowHigh: "15T Hoch",
    windowLow: "15T Tief",
  },
  it: {
    title: "TideX",
    subtitle: "Maree in tempo reale e previsioni per qualsiasi costa del mondo",
    languageLabel: "Lingua",
    mapSection: "Posizione e spiagge",
    locateMe: "Usa la mia posizione",
    mapHint: "Tocca la mappa per scegliere qualsiasi costa. Sotto trovi le spiagge vicine.",
    nearbyBeaches: "Spiagge vicine",
    dateLabel: "Data",
    hourLabel: "Ora",
    prevDay: "Giorno prec.",
    now: "Adesso",
    nextDay: "Giorno succ.",
    refresh: "Aggiorna",
    currentLevel: "Ora selezionata",
    dailyHigh: "Alta marea giornaliera",
    dailyLow: "Bassa marea giornaliera",
    disclaimer: "Solo come riferimento. Non usare come unica fonte per navigazione o sicurezza.",
    locating: "Rilevamento posizione...",
    locationDenied: "Accesso posizione negato. Puoi scegliere sulla mappa.",
    locationError: "Errore posizione. Scegli un punto sulla mappa.",
    locationUnsupported: "Il browser non supporta la geolocalizzazione.",
    loading: "Caricamento dati di marea...",
    fetchError: "Impossibile caricare i dati per questo punto.",
    sourceObserved: "Fonte: Open-Meteo Marine",
    sourcePredicted: "Fonte: Previsione armonica (fallback)",
    timezoneLabel: "Fuso orario: {tz}",
    beachCount: "{count} spiagge",
    noneBeaches: "Nessuna spiaggia nominata trovata nelle vicinanze.",
    selectedLocation: "Selezionato",
    myLocation: "La mia posizione",
    fallbackNotice: "Usata previsione armonica perché la serie diretta non è disponibile per questa data.",
    tideHigh: "Alta",
    tideLow: "Bassa",
    windowHigh: "Max 15 g",
    windowLow: "Min 15 g",
  },
  vi: {
    title: "TideX",
    subtitle: "Theo dõi và dự báo thủy triều thời gian thực cho mọi bờ biển",
    languageLabel: "Ngôn ngữ",
    mapSection: "Vị trí & bãi biển",
    locateMe: "Dùng vị trí của tôi",
    mapHint: "Chạm bản đồ để chọn mọi bờ biển. Danh sách bãi biển gần sẽ hiện bên dưới.",
    nearbyBeaches: "Bãi biển gần đây",
    dateLabel: "Ngày",
    hourLabel: "Giờ",
    prevDay: "Ngày trước",
    now: "Hiện tại",
    nextDay: "Ngày sau",
    refresh: "Làm mới",
    currentLevel: "Thời điểm chọn",
    dailyHigh: "Triều cao trong ngày",
    dailyLow: "Triều thấp trong ngày",
    disclaimer: "Chỉ để tham khảo kế hoạch. Không dùng làm nguồn duy nhất cho điều hướng hoặc an toàn.",
    locating: "Đang xác định vị trí...",
    locationDenied: "Bạn đã từ chối vị trí. Vẫn có thể chọn trên bản đồ.",
    locationError: "Không lấy được vị trí. Hãy chọn trên bản đồ.",
    locationUnsupported: "Trình duyệt không hỗ trợ định vị.",
    loading: "Đang tải dữ liệu thủy triều...",
    fetchError: "Không thể tải dữ liệu cho vị trí này lúc này.",
    sourceObserved: "Nguồn: Open-Meteo Marine",
    sourcePredicted: "Nguồn: Dự báo điều hòa (dự phòng)",
    timezoneLabel: "Múi giờ: {tz}",
    beachCount: "{count} bãi biển",
    noneBeaches: "Không tìm thấy bãi biển có tên ở gần.",
    selectedLocation: "Đã chọn",
    myLocation: "Vị trí của tôi",
    fallbackNotice: "Đang dùng dự báo điều hòa vì không có chuỗi trực tiếp cho ngày này.",
    tideHigh: "Cao",
    tideLow: "Thấp",
    windowHigh: "Đỉnh 15N",
    windowLow: "Đáy 15N",
  },
  th: {
    title: "TideX",
    subtitle: "ดูและพยากรณ์น้ำขึ้นน้ำลงแบบเรียลไทม์ทั่วโลก",
    languageLabel: "ภาษา",
    mapSection: "ตำแหน่งและชายหาด",
    locateMe: "ใช้ตำแหน่งของฉัน",
    mapHint: "แตะแผนที่เพื่อเลือกชายฝั่งใดก็ได้ และดูรายชื่อชายหาดใกล้เคียงด้านล่าง",
    nearbyBeaches: "ชายหาดใกล้เคียง",
    dateLabel: "วันที่",
    hourLabel: "เวลา",
    prevDay: "วันก่อน",
    now: "ตอนนี้",
    nextDay: "วันถัดไป",
    refresh: "รีเฟรช",
    currentLevel: "เวลาที่เลือก",
    dailyHigh: "น้ำขึ้นสูงสุดรายวัน",
    dailyLow: "น้ำลงต่ำสุดรายวัน",
    disclaimer: "ใช้เพื่ออ้างอิงการวางแผนเท่านั้น ไม่ควรใช้เป็นแหล่งเดียวสำหรับการเดินเรือหรือความปลอดภัย",
    locating: "กำลังตรวจหาตำแหน่ง...",
    locationDenied: "ไม่ได้รับสิทธิ์ตำแหน่ง คุณยังเลือกบนแผนที่ได้",
    locationError: "ไม่สามารถระบุตำแหน่งได้ กรุณาเลือกบนแผนที่",
    locationUnsupported: "เบราว์เซอร์ไม่รองรับการระบุตำแหน่ง",
    loading: "กำลังโหลดข้อมูลน้ำขึ้นน้ำลง...",
    fetchError: "ไม่สามารถโหลดข้อมูลตำแหน่งนี้ได้ในขณะนี้",
    sourceObserved: "แหล่งข้อมูล: Open-Meteo Marine",
    sourcePredicted: "แหล่งข้อมูล: การพยากรณ์ฮาร์มอนิก (สำรอง)",
    timezoneLabel: "เขตเวลา: {tz}",
    beachCount: "{count} ชายหาด",
    noneBeaches: "ไม่พบชายหาดที่มีชื่อใกล้เคียง",
    selectedLocation: "ตำแหน่งที่เลือก",
    myLocation: "ตำแหน่งของฉัน",
    fallbackNotice: "ใช้การพยากรณ์ฮาร์มอนิกเพราะไม่มีข้อมูลตรงสำหรับวันที่นี้",
    tideHigh: "น้ำขึ้น",
    tideLow: "น้ำลง",
    windowHigh: "สูงสุด 15 วัน",
    windowLow: "ต่ำสุด 15 วัน",
  },
  ms: {
    title: "TideX",
    subtitle: "Semak dan ramal pasang surut masa nyata di mana-mana pantai dunia",
    languageLabel: "Bahasa",
    mapSection: "Lokasi & pantai",
    locateMe: "Guna lokasi saya",
    mapHint: "Tekan peta untuk pilih mana-mana pantai. Pantai berhampiran dipaparkan di bawah.",
    nearbyBeaches: "Pantai berhampiran",
    dateLabel: "Tarikh",
    hourLabel: "Masa",
    prevDay: "Hari sebelumnya",
    now: "Sekarang",
    nextDay: "Hari berikutnya",
    refresh: "Muat semula",
    currentLevel: "Masa dipilih",
    dailyHigh: "Air pasang harian",
    dailyLow: "Air surut harian",
    disclaimer: "Untuk rujukan perancangan sahaja. Jangan guna sebagai satu-satunya sumber navigasi atau keselamatan.",
    locating: "Mengesan lokasi anda...",
    locationDenied: "Kebenaran lokasi ditolak. Anda masih boleh pilih pada peta.",
    locationError: "Lokasi gagal dikesan. Sila pilih pada peta.",
    locationUnsupported: "Pelayar anda tidak menyokong geolokasi.",
    loading: "Memuat data pasang surut...",
    fetchError: "Tidak dapat memuat data untuk lokasi ini sekarang.",
    sourceObserved: "Sumber: Open-Meteo Marine",
    sourcePredicted: "Sumber: Ramalan harmonik (sandaran)",
    timezoneLabel: "Zon masa: {tz}",
    beachCount: "{count} pantai",
    noneBeaches: "Tiada pantai bernama ditemui berdekatan.",
    selectedLocation: "Dipilih",
    myLocation: "Lokasi saya",
    fallbackNotice: "Menggunakan ramalan harmonik kerana siri langsung tiada untuk tarikh ini.",
    tideHigh: "Pasang",
    tideLow: "Surut",
    windowHigh: "Tinggi 15h",
    windowLow: "Rendah 15h",
  },
};

const CONSTITUENT_PERIODS_HOURS = [12.4206, 12.0, 12.6583, 23.9345, 25.8193, 24.0659, 11.9672, 26.8684];
const CONSTITUENT_OMEGAS = CONSTITUENT_PERIODS_HOURS.map((p) => (2 * Math.PI) / p);
const DENSE_INTERVAL_MINUTES = 5;
const MODEL_PAST_DAYS = 5;
const MODEL_FUTURE_DAYS = 10;
const MIN_MODEL_POINTS = 48;
const WIND_MARKER_INTERVAL_HOURS = 6;

const dom = {
  language: document.getElementById("language"),
  locateBtn: document.getElementById("locate-btn"),
  dateInput: document.getElementById("date-input"),
  hourInput: document.getElementById("hour-input"),
  hourValue: document.getElementById("hour-value"),
  nowBtn: document.getElementById("now-btn"),
  prevDayBtn: document.getElementById("prev-day-btn"),
  nextDayBtn: document.getElementById("next-day-btn"),
  refreshBtn: document.getElementById("refresh-btn"),
  sourcePill: document.getElementById("source-pill"),
  timezonePill: document.getElementById("timezone-pill"),
  locationPill: document.getElementById("location-pill"),
  statusText: document.getElementById("status-text"),
  beachMeta: document.getElementById("beach-meta"),
  beachList: document.getElementById("beach-list"),
  currentLevel: document.getElementById("current-level"),
  currentLevelTime: document.getElementById("current-level-time"),
  currentWind: document.getElementById("current-wind"),
  currentWindTime: document.getElementById("current-wind-time"),
  dailyHigh: document.getElementById("daily-high"),
  dailyHighTime: document.getElementById("daily-high-time"),
  dailyLow: document.getElementById("daily-low"),
  dailyLowTime: document.getElementById("daily-low-time"),
  chart: document.getElementById("chart"),
};

const state = {
  lang: DEFAULT_LANG,
  timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC",
  map: null,
  chart: null,
  selectedMarker: null,
  userMarker: null,
  selected: null,
  selectedName: "",
  selectedDate: null,
  selectedHour: 12,
  sampledSeries: [],
  windSeries: [],
  windHourly: [],
  referenceExtremes: null,
  source: "observed",
  beaches: [],
  requestId: 0,
  localeBundle: null,
  fallbackLocaleBundle: null,
  localeCache: new Map(),
  modelCache: new Map(),
};

const SERIES_LABELS = {
  tide: {
    en: "Tide",
    "zh-CN": "潮位",
    "zh-TW": "潮位",
  },
  wind: {
    en: "Gust",
    "zh-CN": "阵风",
    "zh-TW": "陣風",
  },
};

const WIND_DIRECTION_LABELS = {
  short: {
    en: ["N", "NE", "E", "SE", "S", "SW", "W", "NW"],
    "zh-CN": ["北", "东北", "东", "东南", "南", "西南", "西", "西北"],
    "zh-TW": ["北", "東北", "東", "東南", "南", "西南", "西", "西北"],
  },
  full: {
    en: ["North", "Northeast", "East", "Southeast", "South", "Southwest", "West", "Northwest"],
    "zh-CN": ["北风", "东北风", "东风", "东南风", "南风", "西南风", "西风", "西北风"],
    "zh-TW": ["北風", "東北風", "東風", "東南風", "南風", "西南風", "西風", "西北風"],
  },
};

const WIND_STRENGTH_LABELS = {
  en: ["Calm", "Light", "Breeze", "Moderate", "Strong", "Gale"],
  "zh-CN": ["无风", "轻风", "和风", "中等", "较强", "大风"],
  "zh-TW": ["無風", "輕風", "和風", "中等", "較強", "大風"],
};

function getInlineLocaleKey(code) {
  return INLINE_LOCALE_MAP[code] || "en";
}

function getInlineSeriesLabel(kind, code = state.lang) {
  const labels = SERIES_LABELS[kind] || {};
  const inlineKey = getInlineLocaleKey(code);
  return labels[inlineKey] || labels.en || kind;
}

function getInlineWindDirectionLabels(short = false, code = state.lang) {
  const field = short ? "short" : "full";
  const labelSet = WIND_DIRECTION_LABELS[field] || {};
  const inlineKey = getInlineLocaleKey(code);
  return labelSet[inlineKey] || labelSet.en || [];
}

function getInlineWindStrengthLabels(code = state.lang) {
  const inlineKey = getInlineLocaleKey(code);
  return WIND_STRENGTH_LABELS[inlineKey] || WIND_STRENGTH_LABELS.en || [];
}

function buildInlineLocaleBundle(code) {
  const inlineKey = getInlineLocaleKey(code);
  const option = LANGUAGE_OPTIONS.find((item) => item.code === code);
  return {
    code,
    label: option?.label || code,
    dir: RTL_LANGS.has(code) ? "rtl" : "ltr",
    template: !INLINE_LOCALE_MAP[code],
    messages: {
      ...I18N.en,
      ...(I18N[inlineKey] || {}),
    },
    seriesLabels: {
      tide: getInlineSeriesLabel("tide", code),
      wind: getInlineSeriesLabel("wind", code),
    },
    windDirectionLabels: {
      short: getInlineWindDirectionLabels(true, code),
      full: getInlineWindDirectionLabels(false, code),
    },
    windStrengthLabels: getInlineWindStrengthLabels(code),
  };
}

async function fetchLocaleBundle(code) {
  const response = await fetch(`./locales/${encodeURIComponent(code)}.json?v=${LOCALE_VERSION}`, {
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error(`locale-${response.status}`);
  }
  return response.json();
}

async function ensureLocaleBundle(code) {
  if (state.localeCache.has(code)) {
    return state.localeCache.get(code);
  }

  let bundle;
  try {
    bundle = await fetchLocaleBundle(code);
  } catch {
    bundle = buildInlineLocaleBundle(code);
  }

  state.localeCache.set(code, bundle);
  return bundle;
}

function applyDocumentLocale() {
  const dir = state.localeBundle?.dir || (RTL_LANGS.has(state.lang) ? "rtl" : "ltr");
  document.documentElement.lang = state.lang;
  document.documentElement.dir = dir;
}

async function setLanguage(langCode, rerender = true) {
  const normalized = normalizeLanguage(langCode);
  const fallback = await ensureLocaleBundle(DEFAULT_LANG);
  const locale = normalized === DEFAULT_LANG ? fallback : await ensureLocaleBundle(normalized);

  state.lang = normalized;
  state.fallbackLocaleBundle = fallback;
  state.localeBundle = locale || fallback;

  if (dom.language) {
    dom.language.value = normalized;
  }

  applyDocumentLocale();

  if (rerender) {
    applyStaticI18n();
  }
}

function normalizeLanguage(lang) {
  if (!lang) return DEFAULT_LANG;
  const lower = lang.toLowerCase();
  if (LANGUAGE_ALIASES[lower]) return LANGUAGE_ALIASES[lower];
  const exact = LANGUAGE_OPTIONS.find((item) => item.code.toLowerCase() === lower);
  if (exact) return exact.code;
  const base = lower.split("-")[0];
  if (LANGUAGE_ALIASES[base]) return LANGUAGE_ALIASES[base];
  const partial = LANGUAGE_OPTIONS.find(
    (item) => item.code.toLowerCase() === base || item.code.toLowerCase().startsWith(`${base}-`)
  );
  return partial ? partial.code : DEFAULT_LANG;
}

function t(key, vars = {}) {
  const localeMessages = state.localeBundle?.messages || {};
  const fallbackMessages = state.fallbackLocaleBundle?.messages || I18N.en;
  let text = localeMessages[key] ?? fallbackMessages[key] ?? I18N.en[key] ?? key;
  Object.entries(vars).forEach(([name, value]) => {
    text = text.replaceAll(`{${name}}`, String(value));
  });
  return text;
}

function fillLanguageSelector() {
  dom.language.innerHTML = "";
  LANGUAGE_OPTIONS.forEach((option) => {
    const el = document.createElement("option");
    el.value = option.code;
    el.textContent = option.label;
    dom.language.appendChild(el);
  });
}

function applyStaticI18n() {
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.getAttribute("data-i18n");
    node.textContent = t(key);
  });
  updateHourLabel();
  updateSourceAndTimezone();
  renderBeachList();
  renderStats();
  if (state.sampledSeries.length > 0) {
    renderChart();
  }
}

function setStatus(message, isError = false) {
  dom.statusText.textContent = message || "";
  dom.statusText.style.color = isError ? "var(--danger)" : "var(--text-soft)";
}

function updateHourLabel() {
  const hh = String(Number(state.selectedHour)).padStart(2, "0");
  dom.hourValue.textContent = `${hh}:00`;
}

function formatCoord(value, isLat) {
  const abs = Math.abs(value).toFixed(4);
  if (isLat) return `${abs}°${value >= 0 ? "N" : "S"}`;
  return `${abs}°${value >= 0 ? "E" : "W"}`;
}

function updateLocationPill() {
  if (!state.selected) {
    dom.locationPill.textContent = "--";
    return;
  }
  const namePart = state.selectedName ? `${state.selectedName} · ` : "";
  dom.locationPill.textContent = `${t("selectedLocation")}: ${namePart}${formatCoord(state.selected.lat, true)}, ${formatCoord(state.selected.lng, false)}`;
}

function updateSourceAndTimezone() {
  dom.sourcePill.textContent =
    state.source === "predicted"
      ? t("sourcePredicted")
      : state.source === "hybrid"
        ? t("sourceHybrid")
        : t("sourceObserved");
  dom.timezonePill.textContent = t("timezoneLabel", { tz: state.timezone });
}

function setDateAndHourFromNow() {
  const now = DateTime.now().setZone(state.timezone);
  state.selectedDate = now.toISODate();
  state.selectedHour = now.hour;
  syncDateControls();
}

function syncDateControls() {
  if (state.selectedDate) dom.dateInput.value = state.selectedDate;
  dom.hourInput.value = String(state.selectedHour);
  updateHourLabel();
}

function shiftDay(offset) {
  const shifted = DateTime.fromISO(state.selectedDate, { zone: state.timezone }).plus({ days: offset });
  state.selectedDate = shifted.toISODate();
  syncDateControls();
  loadTideData();
}

function initMap() {
  state.map = L.map("map", { zoomControl: false, worldCopyJump: true }).setView([20, 0], 2);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(state.map);

  L.control.zoom({ position: "topright" }).addTo(state.map);

  state.map.on("click", (event) => {
    setSelectedLocation(event.latlng.lat, event.latlng.lng, "", true);
  });
}

function initChart() {
  state.chart = echarts.init(dom.chart, null, { renderer: "canvas" });
  state.chart.setOption({
    animationDuration: 420,
    animationEasing: "cubicOut",
    title: {
      text: "",
    },
    xAxis: { type: "time" },
    yAxis: { type: "value" },
    series: [],
  });
}

function bindEvents() {
  dom.language.addEventListener("change", async () => {
    await setLanguage(dom.language.value);
  });

  dom.dateInput.addEventListener("change", () => {
    if (!dom.dateInput.value) return;
    state.selectedDate = dom.dateInput.value;
    loadTideData();
  });

  dom.hourInput.addEventListener("input", () => {
    state.selectedHour = Number(dom.hourInput.value);
    updateHourLabel();
    renderChart();
    renderStats();
  });

  dom.prevDayBtn.addEventListener("click", () => shiftDay(-1));
  dom.nextDayBtn.addEventListener("click", () => shiftDay(1));

  dom.nowBtn.addEventListener("click", () => {
    setDateAndHourFromNow();
    loadTideData();
  });

  dom.refreshBtn.addEventListener("click", () => loadTideData());
  dom.locateBtn.addEventListener("click", () => locateUser());

  window.addEventListener("resize", () => {
    state.chart?.resize();
    setTimeout(() => state.map?.invalidateSize(), 60);
  });
}

function toLocalDateString(ms) {
  return DateTime.fromMillis(ms).setZone(state.timezone).toFormat("HH:mm");
}

function formatHeight(value) {
  if (!Number.isFinite(value)) return "--";
  return `${value.toFixed(2)} m`;
}

function formatWindSpeed(value) {
  if (!Number.isFinite(value)) return "--";
  return `${value.toFixed(1)} m/s`;
}

function formatWindDirection(degrees, short = false) {
  if (!Number.isFinite(degrees)) return "--";
  const normalized = ((degrees % 360) + 360) % 360;
  const field = short ? "short" : "full";
  const labels =
    state.localeBundle?.windDirectionLabels?.[field] ||
    state.fallbackLocaleBundle?.windDirectionLabels?.[field] ||
    getInlineWindDirectionLabels(short);
  return labels[Math.round(normalized / 45) % labels.length];
}

function formatWindDirectionArrow(degrees) {
  if (!Number.isFinite(degrees)) return "·";
  const normalized = (((degrees + 180) % 360) + 360) % 360;
  const arrows = ["↑", "↗", "→", "↘", "↓", "↙", "←", "↖"];
  return arrows[Math.round(normalized / 45) % arrows.length];
}

function getWindStrengthLabel(value) {
  if (!Number.isFinite(value)) return "--";
  const labels =
    state.localeBundle?.windStrengthLabels ||
    state.fallbackLocaleBundle?.windStrengthLabels ||
    getInlineWindStrengthLabels();
  if (value < 0.3) return labels[0];
  if (value < 3.4) return labels[1];
  if (value < 5.5) return labels[2];
  if (value < 8.0) return labels[3];
  if (value < 13.9) return labels[4];
  return labels[5];
}

function formatWind(value, direction) {
  if (!Number.isFinite(value)) return "--";
  const directionLabel = formatWindDirection(direction);
  const strengthLabel = getWindStrengthLabel(value);
  return Number.isFinite(direction)
    ? `${formatWindSpeed(value)} · ${directionLabel} · ${strengthLabel}`
    : `${formatWindSpeed(value)} · ${strengthLabel}`;
}

function getSeriesLabel(kind) {
  return (
    state.localeBundle?.seriesLabels?.[kind] ||
    state.fallbackLocaleBundle?.seriesLabels?.[kind] ||
    getInlineSeriesLabel(kind)
  );
}

function formatSummaryDate(dateStr) {
  return DateTime.fromISO(dateStr, { zone: state.timezone }).setLocale(state.lang).toFormat("LL/dd");
}

function haversineKm(lat1, lon1, lat2, lon2) {
  const toRad = (v) => (v * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  return 6371 * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

async function reverseGeocode(lat, lng) {
  try {
    const languageTag = state.lang === "zh-CN" ? "zh" : state.lang;
    const url = new URL("https://nominatim.openstreetmap.org/reverse");
    url.searchParams.set("format", "jsonv2");
    url.searchParams.set("lat", String(lat));
    url.searchParams.set("lon", String(lng));
    url.searchParams.set("zoom", "11");
    url.searchParams.set("accept-language", languageTag);

    const response = await fetch(url);
    if (!response.ok) return "";
    const data = await response.json();
    if (!data?.display_name) return "";
    return String(data.display_name)
      .split(",")
      .slice(0, 3)
      .join(",")
      .trim();
  } catch {
    return "";
  }
}

async function setSelectedLocation(lat, lng, name = "", moveMap = true) {
  state.selected = { lat, lng };
  state.selectedName = name;
  updateLocationPill();

  if (!state.selectedMarker) {
    state.selectedMarker = L.marker([lat, lng]).addTo(state.map);
  } else {
    state.selectedMarker.setLatLng([lat, lng]);
  }

  if (moveMap) {
    const currentZoom = state.map.getZoom();
    state.map.setView([lat, lng], Math.max(currentZoom, 8), { animate: true, duration: 0.55 });
  }

  loadTideData();

  if (!name) {
    const requestedLat = lat;
    const requestedLng = lng;
    reverseGeocode(lat, lng).then((resolvedName) => {
      if (
        state.selected &&
        Math.abs(state.selected.lat - requestedLat) < 1e-7 &&
        Math.abs(state.selected.lng - requestedLng) < 1e-7
      ) {
        state.selectedName = resolvedName;
        updateLocationPill();
      }
    });
  }
}

function inferBeachName(tags = {}) {
  const code = state.lang.toLowerCase();
  if (tags[`name:${code}`]) return tags[`name:${code}`];
  const short = code.split("-")[0];
  if (tags[`name:${short}`]) return tags[`name:${short}`];
  if (tags.name) return tags.name;
  if (tags["name:en"]) return tags["name:en"];
  return "";
}

async function fetchBeachesByRadius(lat, lng, radiusMeters) {
  const query = `
[out:json][timeout:25];
(
  node["natural"="beach"](around:${radiusMeters},${lat},${lng});
  way["natural"="beach"](around:${radiusMeters},${lat},${lng});
  relation["natural"="beach"](around:${radiusMeters},${lat},${lng});
);
out center;
`;

  const response = await fetch("https://overpass-api.de/api/interpreter", {
    method: "POST",
    body: query,
  });

  if (!response.ok) {
    throw new Error(`overpass-${response.status}`);
  }

  const data = await response.json();
  const elements = Array.isArray(data?.elements) ? data.elements : [];

  return elements
    .map((item) => {
      const itemLat = item.lat ?? item.center?.lat;
      const itemLng = item.lon ?? item.center?.lon;
      if (!Number.isFinite(itemLat) || !Number.isFinite(itemLng)) return null;
      const name = inferBeachName(item.tags || {});
      if (!name) return null;
      const distanceKm = haversineKm(lat, lng, itemLat, itemLng);
      return {
        id: `${name}:${itemLat.toFixed(4)}:${itemLng.toFixed(4)}`,
        name,
        lat: itemLat,
        lng: itemLng,
        distanceKm,
      };
    })
    .filter(Boolean)
    .sort((a, b) => a.distanceKm - b.distanceKm);
}

async function loadNearbyBeaches(lat, lng) {
  dom.beachMeta.textContent = t("loading");
  dom.beachList.innerHTML = "";

  try {
    let beaches = await fetchBeachesByRadius(lat, lng, 28000);
    if (beaches.length < 5) {
      const wider = await fetchBeachesByRadius(lat, lng, 72000);
      beaches = [...beaches, ...wider];
    }

    const deduped = [];
    const seen = new Set();
    beaches.forEach((beach) => {
      if (seen.has(beach.id)) return;
      seen.add(beach.id);
      deduped.push(beach);
    });

    state.beaches = deduped;
    renderBeachList();

    dom.beachMeta.textContent =
      state.beaches.length > 0 ? t("beachCount", { count: state.beaches.length }) : t("noneBeaches");
  } catch {
    state.beaches = [];
    renderBeachList();
    dom.beachMeta.textContent = t("noneBeaches");
  }
}

function renderBeachList() {
  dom.beachList.innerHTML = "";

  if (!state.beaches || state.beaches.length === 0) {
    return;
  }

  state.beaches.forEach((beach) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "chip";

    if (
      state.selected &&
      haversineKm(state.selected.lat, state.selected.lng, beach.lat, beach.lng) < 0.25
    ) {
      button.classList.add("active");
    }

    const distance = beach.distanceKm < 10 ? beach.distanceKm.toFixed(1) : beach.distanceKm.toFixed(0);
    button.textContent = `${beach.name} · ${distance} km`;

    button.addEventListener("click", () => {
      setSelectedLocation(beach.lat, beach.lng, beach.name, true);
    });

    dom.beachList.appendChild(button);
  });
}

async function locateUser() {
  if (!navigator.geolocation) {
    setStatus(t("locationUnsupported"), true);
    return;
  }

  setStatus(t("locating"));

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;

      if (!state.userMarker) {
        state.userMarker = L.circleMarker([lat, lng], {
          radius: 7,
          color: "#0b7fc4",
          weight: 2,
          fillColor: "#8ce2ff",
          fillOpacity: 0.85,
        }).addTo(state.map);
      } else {
        state.userMarker.setLatLng([lat, lng]);
      }

      setSelectedLocation(lat, lng, t("myLocation"), true);
      loadNearbyBeaches(lat, lng);
      setStatus("");
    },
    (error) => {
      if (error.code === error.PERMISSION_DENIED) {
        setStatus(t("locationDenied"), true);
      } else {
        setStatus(t("locationError"), true);
      }
    },
    {
      enableHighAccuracy: true,
      timeout: 12000,
      maximumAge: 60000,
    }
  );
}

function parseHourlySeries(payload) {
  const rawTimes = payload?.hourly?.time || [];
  const rawValues = payload?.hourly?.sea_level_height_msl || [];

  const series = [];
  for (let i = 0; i < rawTimes.length; i += 1) {
    if (rawValues[i] === null || rawValues[i] === undefined) continue;
    const t = Number(rawTimes[i]);
    const v = Number(rawValues[i]);
    if (!Number.isFinite(t) || !Number.isFinite(v)) continue;
    series.push({
      time: t * 1000,
      value: v,
    });
  }

  return series.sort((a, b) => a.time - b.time);
}

function parseWindSeries(payload) {
  const rawTimes = payload?.hourly?.time || [];
  const rawSpeeds = payload?.hourly?.wind_gusts_10m || [];
  const rawDirections = payload?.hourly?.wind_direction_10m || [];

  const series = [];
  for (let i = 0; i < rawTimes.length; i += 1) {
    if (rawSpeeds[i] === null || rawSpeeds[i] === undefined) continue;
    const t = Number(rawTimes[i]);
    const speed = Number(rawSpeeds[i]);
    const direction =
      rawDirections[i] === null || rawDirections[i] === undefined ? NaN : Number(rawDirections[i]);
    if (!Number.isFinite(t) || !Number.isFinite(speed)) continue;
    series.push({
      time: t * 1000,
      value: speed,
      direction,
    });
  }

  return series.sort((a, b) => a.time - b.time);
}

async function fetchMarineSeries(lat, lng, startDate, endDate, model) {
  const url = new URL("https://marine-api.open-meteo.com/v1/marine");
  url.searchParams.set("latitude", String(lat));
  url.searchParams.set("longitude", String(lng));
  url.searchParams.set("hourly", "sea_level_height_msl");
  url.searchParams.set("timezone", "auto");
  url.searchParams.set("timeformat", "unixtime");
  url.searchParams.set("cell_selection", "sea");
  url.searchParams.set("start_date", startDate);
  url.searchParams.set("end_date", endDate);
  if (model) {
    url.searchParams.set("models", model);
  }

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`marine-${response.status}`);
  }

  const data = await response.json();
  return {
    timezone: data.timezone || "UTC",
    series: parseHourlySeries(data),
  };
}

async function fetchWindSeries(lat, lng, startDate, endDate) {
  const url = new URL("https://api.open-meteo.com/v1/forecast");
  url.searchParams.set("latitude", String(lat));
  url.searchParams.set("longitude", String(lng));
  url.searchParams.set("hourly", "wind_gusts_10m,wind_direction_10m");
  url.searchParams.set("timezone", "auto");
  url.searchParams.set("timeformat", "unixtime");
  url.searchParams.set("wind_speed_unit", "ms");
  url.searchParams.set("start_date", startDate);
  url.searchParams.set("end_date", endDate);

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`wind-${response.status}`);
  }

  const data = await response.json();
  return {
    timezone: data.timezone || "UTC",
    series: parseWindSeries(data),
  };
}

function getDayBounds(dateStr, timezone) {
  const start = DateTime.fromISO(dateStr, { zone: timezone }).startOf("day");
  return {
    start,
    end: start.plus({ hours: 24 }),
    lastHour: start.plus({ hours: 23 }),
  };
}

function interpolateSeries(hourlySeries, targetMs) {
  if (!hourlySeries || hourlySeries.length === 0) return NaN;
  if (targetMs <= hourlySeries[0].time) return hourlySeries[0].value;
  if (targetMs >= hourlySeries[hourlySeries.length - 1].time) return hourlySeries[hourlySeries.length - 1].value;

  let left = 0;
  let right = hourlySeries.length - 1;
  while (left + 1 < right) {
    const mid = Math.floor((left + right) / 2);
    if (hourlySeries[mid].time <= targetMs) {
      left = mid;
    } else {
      right = mid;
    }
  }

  const a = hourlySeries[left];
  const b = hourlySeries[right];
  const ratio = (targetMs - a.time) / (b.time - a.time);
  return a.value + (b.value - a.value) * ratio;
}

function createMonotoneInterpolator(hourlySeries) {
  if (!hourlySeries || hourlySeries.length < 2) {
    return () => NaN;
  }

  const x = hourlySeries.map((p) => p.time);
  const y = hourlySeries.map((p) => p.value);
  const n = x.length;
  const delta = new Array(n - 1).fill(0);

  for (let i = 0; i < n - 1; i += 1) {
    const h = x[i + 1] - x[i];
    if (h <= 0) {
      delta[i] = 0;
    } else {
      delta[i] = (y[i + 1] - y[i]) / h;
    }
  }

  const m = new Array(n).fill(0);
  m[0] = delta[0];
  m[n - 1] = delta[n - 2];

  for (let i = 1; i < n - 1; i += 1) {
    if (delta[i - 1] * delta[i] <= 0) {
      m[i] = 0;
    } else {
      m[i] = (delta[i - 1] + delta[i]) / 2;
    }
  }

  for (let i = 0; i < n - 1; i += 1) {
    if (Math.abs(delta[i]) < 1e-14) {
      m[i] = 0;
      m[i + 1] = 0;
      continue;
    }

    const a = m[i] / delta[i];
    const b = m[i + 1] / delta[i];
    const s = Math.hypot(a, b);
    if (s > 3) {
      const scale = 3 / s;
      m[i] = scale * a * delta[i];
      m[i + 1] = scale * b * delta[i];
    }
  }

  return (targetMs) => {
    if (targetMs <= x[0]) return y[0];
    if (targetMs >= x[n - 1]) return y[n - 1];

    let left = 0;
    let right = n - 1;
    while (left + 1 < right) {
      const mid = Math.floor((left + right) / 2);
      if (x[mid] <= targetMs) left = mid;
      else right = mid;
    }

    const i = left;
    const h = x[i + 1] - x[i];
    if (h <= 0) return y[i];

    const tNorm = (targetMs - x[i]) / h;
    const t2 = tNorm * tNorm;
    const t3 = t2 * tNorm;

    const h00 = 2 * t3 - 3 * t2 + 1;
    const h10 = t3 - 2 * t2 + tNorm;
    const h01 = -2 * t3 + 3 * t2;
    const h11 = t3 - t2;

    return h00 * y[i] + h10 * h * m[i] + h01 * y[i + 1] + h11 * h * m[i + 1];
  };
}

function buildDenseSeries(hourlySeries, dateStr, timezone) {
  const { start, end } = getDayBounds(dateStr, timezone);
  const dense = [];
  const interpolator = createMonotoneInterpolator(hourlySeries);

  for (let time = start; time <= end; time = time.plus({ minutes: DENSE_INTERVAL_MINUTES })) {
    const ms = time.toMillis();
    dense.push({ time: ms, value: interpolator(ms) });
  }

  return dense;
}

function buildDenseWindSeries(hourlySeries, dateStr, timezone) {
  const { start, end } = getDayBounds(dateStr, timezone);
  const dense = [];
  const interpolator = createMonotoneInterpolator(hourlySeries);
  const firstTime = hourlySeries[0]?.time;
  const lastTime = hourlySeries[hourlySeries.length - 1]?.time;

  for (let time = start; time <= end; time = time.plus({ minutes: DENSE_INTERVAL_MINUTES })) {
    const ms = time.toMillis();
    dense.push({
      time: ms,
      value: ms >= firstTime && ms <= lastTime ? interpolator(ms) : null,
    });
  }

  return dense;
}

function coversFullDay(hourlySeries, dateStr, timezone) {
  if (!hourlySeries || hourlySeries.length < 20) return false;
  const { start, lastHour } = getDayBounds(dateStr, timezone);
  const startMs = start.toMillis();
  const lastHourMs = lastHour.toMillis();
  return (
    hourlySeries[0].time <= startMs + 30 * 60 * 1000 &&
    hourlySeries[hourlySeries.length - 1].time >= lastHourMs - 30 * 60 * 1000
  );
}

function mergeTideSeriesWithPrediction(hourlySeries, predictedSeries) {
  const interpolator = createMonotoneInterpolator(hourlySeries);
  const firstTime = hourlySeries[0]?.time ?? -Infinity;
  const lastTime = hourlySeries[hourlySeries.length - 1]?.time ?? -Infinity;

  return predictedSeries.map((point) => ({
    time: point.time,
    value:
      point.time >= firstTime && point.time <= lastTime ? interpolator(point.time) : point.value,
  }));
}

function findNearestSample(series, targetMs) {
  if (!series || series.length === 0) return null;
  let left = 0;
  let right = series.length - 1;
  while (left + 1 < right) {
    const mid = Math.floor((left + right) / 2);
    if (series[mid].time <= targetMs) {
      left = mid;
    } else {
      right = mid;
    }
  }

  const leftItem = series[left];
  const rightItem = series[right];
  return Math.abs(leftItem.time - targetMs) <= Math.abs(rightItem.time - targetMs) ? leftItem : rightItem;
}

function buildWindArrowData(hourlySeries) {
  return hourlySeries
    .filter((_, index) => index % WIND_MARKER_INTERVAL_HOURS === 0)
    .filter((point) => Number.isFinite(point.value) && Number.isFinite(point.direction))
    .map((point) => ({
      value: [point.time, point.value],
      directionArrow: formatWindDirectionArrow(point.direction),
      directionLabel: formatWindDirection(point.direction, true),
    }));
}

function getSeriesForDateFromWindow(series, dateStr, timezone) {
  if (!Array.isArray(series) || series.length === 0) return [];
  const { start, end } = getDayBounds(dateStr, timezone);
  const startMs = start.toMillis();
  const endMs = end.toMillis();
  return series.filter((point) => point.time >= startMs && point.time <= endMs);
}

async function fetchReferenceWindowSeries(lat, lng, startDate, endDate) {
  const candidates = ["best_match", null];
  let bestResult = null;

  for (const model of candidates) {
    try {
      const result = await fetchMarineSeries(lat, lng, startDate, endDate, model);
      if (!bestResult || result.series.length > bestResult.series.length) {
        bestResult = result;
      }
      if (result.series.length >= 24) {
        return result;
      }
    } catch {
      // try next model candidate
    }
  }

  return bestResult;
}

function solveLinearSystem(matrix, vector) {
  const n = vector.length;
  const a = matrix.map((row) => row.slice());
  const b = vector.slice();

  for (let col = 0; col < n; col += 1) {
    let pivot = col;
    for (let row = col + 1; row < n; row += 1) {
      if (Math.abs(a[row][col]) > Math.abs(a[pivot][col])) {
        pivot = row;
      }
    }

    if (Math.abs(a[pivot][col]) < 1e-10) {
      return null;
    }

    if (pivot !== col) {
      [a[col], a[pivot]] = [a[pivot], a[col]];
      [b[col], b[pivot]] = [b[pivot], b[col]];
    }

    const pivotValue = a[col][col];
    for (let j = col; j < n; j += 1) {
      a[col][j] /= pivotValue;
    }
    b[col] /= pivotValue;

    for (let row = 0; row < n; row += 1) {
      if (row === col) continue;
      const factor = a[row][col];
      if (Math.abs(factor) < 1e-12) continue;
      for (let j = col; j < n; j += 1) {
        a[row][j] -= factor * a[col][j];
      }
      b[row] -= factor * b[col];
    }
  }

  return b;
}

function fitHarmonicModel(series) {
  const refMs = series[0].time;
  const paramCount = 1 + CONSTITUENT_OMEGAS.length * 2;
  const ata = Array.from({ length: paramCount }, () => Array(paramCount).fill(0));
  const aty = Array(paramCount).fill(0);

  series.forEach((point) => {
    const tHours = (point.time - refMs) / 3600000;
    const features = [1];
    CONSTITUENT_OMEGAS.forEach((omega) => {
      features.push(Math.sin(omega * tHours));
      features.push(Math.cos(omega * tHours));
    });

    for (let i = 0; i < paramCount; i += 1) {
      aty[i] += features[i] * point.value;
      for (let j = i; j < paramCount; j += 1) {
        ata[i][j] += features[i] * features[j];
      }
    }
  });

  for (let i = 0; i < paramCount; i += 1) {
    for (let j = 0; j < i; j += 1) {
      ata[i][j] = ata[j][i];
    }
    ata[i][i] += 1e-6;
  }

  const coeffs = solveLinearSystem(ata, aty);
  if (!coeffs) {
    throw new Error("harmonic-fit-failed");
  }

  return {
    referenceMs: refMs,
    coefficients: coeffs,
  };
}

function predictHarmonicValue(model, timeMs) {
  const tHours = (timeMs - model.referenceMs) / 3600000;
  let value = model.coefficients[0];
  let idx = 1;

  CONSTITUENT_OMEGAS.forEach((omega) => {
    value += model.coefficients[idx] * Math.sin(omega * tHours);
    value += model.coefficients[idx + 1] * Math.cos(omega * tHours);
    idx += 2;
  });

  return value;
}

function buildPredictedDaySeries(model, dateStr, timezone) {
  const { start, end } = getDayBounds(dateStr, timezone);
  const result = [];

  for (let cursor = start; cursor <= end; cursor = cursor.plus({ minutes: DENSE_INTERVAL_MINUTES })) {
    const ms = cursor.toMillis();
    result.push({
      time: ms,
      value: predictHarmonicValue(model, ms),
    });
  }

  return result;
}

async function getHarmonicModel(lat, lng) {
  const key = `${lat.toFixed(2)},${lng.toFixed(2)},${DateTime.now().setZone(state.timezone).toISODate()}`;
  if (state.modelCache.has(key)) {
    return state.modelCache.get(key);
  }

  const anchor = DateTime.now().setZone(state.timezone).startOf("day");
  const candidates = [
    { past: MODEL_PAST_DAYS, future: MODEL_FUTURE_DAYS, model: "best_match" },
    { past: 4, future: 9, model: "best_match" },
    { past: 3, future: 8, model: "best_match" },
    { past: 2, future: 7, model: "best_match" },
    { past: MODEL_PAST_DAYS, future: MODEL_FUTURE_DAYS, model: null },
  ];

  let bestSeries = [];
  let bestTimezone = "UTC";

  for (const candidate of candidates) {
    const startDate = anchor.minus({ days: candidate.past }).toISODate();
    const endDate = anchor.plus({ days: candidate.future }).toISODate();

    try {
      const data = await fetchMarineSeries(lat, lng, startDate, endDate, candidate.model);
      if (data.series.length > bestSeries.length) {
        bestSeries = data.series;
        bestTimezone = data.timezone || "UTC";
      }

      if (data.series.length >= MIN_MODEL_POINTS) {
        const model = fitHarmonicModel(data.series);
        model.timezone = data.timezone || "UTC";
        state.modelCache.set(key, model);
        return model;
      }
    } catch {
      // keep trying candidate windows
    }
  }

  if (bestSeries.length >= 24) {
    const model = fitHarmonicModel(bestSeries);
    model.timezone = bestTimezone;
    state.modelCache.set(key, model);
    return model;
  }

  throw new Error("insufficient-history");
}

async function resolveSeriesForDate(lat, lng, dateStr) {
  const directCandidates = ["best_match", null];

  for (const model of directCandidates) {
    try {
      const direct = await fetchMarineSeries(lat, lng, dateStr, dateStr, model);
      if (direct.series.length >= 12) {
        if (coversFullDay(direct.series, dateStr, direct.timezone)) {
          return {
            source: "observed",
            timezone: direct.timezone,
            series: buildDenseSeries(direct.series, dateStr, direct.timezone),
            note: "",
          };
        }

        const harmonicModel = await getHarmonicModel(lat, lng);
        const timezone = direct.timezone || harmonicModel.timezone || state.timezone;
        const predictedSeries = buildPredictedDaySeries(harmonicModel, dateStr, timezone);
        return {
          source: "hybrid",
          timezone,
          series: mergeTideSeriesWithPrediction(direct.series, predictedSeries),
          note: "",
        };
      }
    } catch {
      // try next direct model candidate
    }
  }

  const harmonicModel = await getHarmonicModel(lat, lng);
  const timezone = harmonicModel.timezone || state.timezone;

  return {
    source: "predicted",
    timezone,
    series: buildPredictedDaySeries(harmonicModel, dateStr, timezone),
    note: t("fallbackNotice"),
  };
}

async function resolveWindSeries(lat, lng, dateStr) {
  const wind = await fetchWindSeries(lat, lng, dateStr, dateStr);
  return {
    timezone: wind.timezone,
    series: buildDenseWindSeries(wind.series, dateStr, wind.timezone),
    hourly: wind.series,
  };
}

function detectExtrema(series) {
  const highs = [];
  const lows = [];
  const refineExtremum = (index, isHigh) => {
    const left = series[index - 1];
    const mid = series[index];
    const right = series[index + 1];
    const step = mid.time - left.time;
    if (step <= 0 || right.time - mid.time <= 0) return mid;

    const y0 = left.value;
    const y1 = mid.value;
    const y2 = right.value;
    const denom = y0 - 2 * y1 + y2;
    if (Math.abs(denom) < 1e-12) return mid;

    const offset = (y0 - y2) / (2 * denom);
    if (Math.abs(offset) > 1) return mid;

    const a = 0.5 * (y0 - 2 * y1 + y2);
    const b = 0.5 * (y2 - y0);
    const refinedValue = a * offset * offset + b * offset + y1;
    const refinedTime = mid.time + offset * step;

    if (isHigh && refinedValue < y1) return mid;
    if (!isHigh && refinedValue > y1) return mid;
    return { time: refinedTime, value: refinedValue };
  };

  for (let i = 1; i < series.length - 1; i += 1) {
    const prev = series[i - 1].value;
    const curr = series[i].value;
    const next = series[i + 1].value;

    if (curr >= prev && curr > next) {
      highs.push(refineExtremum(i, true));
    }
    if (curr <= prev && curr < next) {
      lows.push(refineExtremum(i, false));
    }
  }

  const compress = (points, isHigh) => {
    const output = [];
    points.forEach((point) => {
      const last = output[output.length - 1];
      if (!last) {
        output.push(point);
        return;
      }
      if (point.time - last.time < 75 * 60 * 1000) {
        if ((isHigh && point.value > last.value) || (!isHigh && point.value < last.value)) {
          output[output.length - 1] = point;
        }
        return;
      }
      output.push(point);
    });
    return output;
  };

  return {
    highs: compress(highs, true),
    lows: compress(lows, false),
  };
}

function summarizeDailyExtrema(series) {
  const extrema = detectExtrema(series);
  const highSeries = extrema.highs.length > 0 ? extrema.highs : series;
  const lowSeries = extrema.lows.length > 0 ? extrema.lows : series;
  const high = highSeries.reduce((acc, item) => (item.value > acc.value ? item : acc), highSeries[0]);
  const low = lowSeries.reduce((acc, item) => (item.value < acc.value ? item : acc), lowSeries[0]);
  return { high, low };
}

async function resolveReferenceExtremes(lat, lng, timezone) {
  const harmonicModel = await getHarmonicModel(lat, lng);
  const zone = timezone || harmonicModel.timezone || state.timezone;
  const anchor = DateTime.now().setZone(zone).startOf("day");
  const startDate = anchor.minus({ days: MODEL_PAST_DAYS }).toISODate();
  const endDate = anchor.plus({ days: MODEL_FUTURE_DAYS }).toISODate();
  const directWindow = await fetchReferenceWindowSeries(lat, lng, startDate, endDate);
  const directSeries = directWindow?.series || [];
  let highest = null;
  let lowest = null;

  for (let offset = -MODEL_PAST_DAYS; offset <= MODEL_FUTURE_DAYS; offset += 1) {
    const date = anchor.plus({ days: offset }).toISODate();
    const predictedDaySeries = buildPredictedDaySeries(harmonicModel, date, zone);
    const directDaySeries = getSeriesForDateFromWindow(directSeries, date, zone);
    const daySeries =
      directDaySeries.length >= 12
        ? coversFullDay(directDaySeries, date, zone)
          ? buildDenseSeries(directDaySeries, date, zone)
          : mergeTideSeriesWithPrediction(directDaySeries, predictedDaySeries)
        : predictedDaySeries;
    const { high, low } = summarizeDailyExtrema(daySeries);
    if (!highest || high.value > highest.value) {
      highest = { ...high, date };
    }
    if (!lowest || low.value < lowest.value) {
      lowest = { ...low, date };
    }
  }

  return {
    high: highest,
    low: lowest,
  };
}

function buildReferenceLine(point, color, position) {
  if (!point || !Number.isFinite(point.value)) return null;
  return {
    yAxis: point.value,
    lineStyle: {
      color,
      type: "solid",
      width: 1.1,
      opacity: 0.85,
    },
    label: {
      show: true,
      formatter: formatSummaryDate(point.date),
      position,
      color,
      fontSize: 10,
      fontWeight: 700,
      backgroundColor: "rgba(255, 255, 255, 0.88)",
      borderRadius: 999,
      padding: [2, 7],
    },
  };
}

function renderChart() {
  if (!state.chart) return;
  if (!state.sampledSeries || state.sampledSeries.length === 0) {
    state.chart.clear();
    return;
  }

  const extrema = detectExtrema(state.sampledSeries);
  const selectedMs = DateTime.fromISO(
    `${state.selectedDate}T${String(state.selectedHour).padStart(2, "0")}:00`,
    { zone: state.timezone }
  ).toMillis();
  const tideLabel = getSeriesLabel("tide");
  const windLabel = getSeriesLabel("wind");
  const windColor = "#f97316";
  const hasWind = state.windSeries.some((point) => Number.isFinite(point.value));
  const tideValues = state.sampledSeries
    .map((point) => point.value)
    .filter((value) => Number.isFinite(value));
  const referenceValues = [state.referenceExtremes?.high?.value, state.referenceExtremes?.low?.value].filter(
    (value) => Number.isFinite(value)
  );
  const tideExtentValues = tideValues.concat(referenceValues);
  const tideMin = tideExtentValues.length > 0 ? Math.min(...tideExtentValues) : -1;
  const tideMax = tideExtentValues.length > 0 ? Math.max(...tideExtentValues) : 1;
  const tidePadding = Math.max((tideMax - tideMin) * 0.12, 0.25);
  const tideReferenceLines = [
    {
      xAxis: selectedMs,
      lineStyle: {
        color: "rgba(249, 115, 22, 0.72)",
        type: "dashed",
        width: 1.2,
      },
      label: {
        show: true,
        formatter: `${String(state.selectedHour).padStart(2, "0")}:00`,
        color: "#9a4c1c",
      },
    },
  ];
  const highReferenceLine = buildReferenceLine(
    state.referenceExtremes?.high,
    "#b45309",
    "insideEndTop"
  );
  const lowReferenceLine = buildReferenceLine(
    state.referenceExtremes?.low,
    "#0f766e",
    "insideEndBottom"
  );
  if (highReferenceLine) tideReferenceLines.push(highReferenceLine);
  if (lowReferenceLine) tideReferenceLines.push(lowReferenceLine);

  const markData = extrema.highs.map((point) => ({
    timeLabel: DateTime.fromMillis(point.time).setZone(state.timezone).toFormat("HH:mm"),
    coord: [point.time, point.value],
    value: point.value,
    itemStyle: { color: "#0ea5e9" },
    symbolSize: 9,
  }));

  const primaryColor =
    state.source === "predicted" ? "#0f9cd4" : state.source === "hybrid" ? "#0991ca" : "#0b7fc4";
  const chartSeries = [
    {
      name: tideLabel,
      type: "line",
      xAxisIndex: 0,
      yAxisIndex: 0,
      showSymbol: false,
      smooth: true,
      z: 3,
      lineStyle: {
        width: 2.8,
        color: primaryColor,
      },
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: "rgba(14, 166, 215, 0.36)" },
          { offset: 1, color: "rgba(14, 166, 215, 0.05)" },
        ]),
      },
      data: state.sampledSeries.map((item) => [item.time, item.value]),
      markPoint: {
        label: {
          formatter: (param) => `${param.data.timeLabel}`,
          color: "#0f3550",
          fontWeight: 600,
          fontSize: 10,
        },
        data: markData,
      },
      markLine: {
        symbol: ["none", "none"],
        silent: true,
        data: tideReferenceLines,
      },
    },
  ];

  if (hasWind) {
    chartSeries.push({
      name: windLabel,
      type: "line",
      xAxisIndex: 1,
      yAxisIndex: 1,
      showSymbol: false,
      smooth: true,
      connectNulls: false,
      z: 2,
      lineStyle: {
        width: 2,
        color: windColor,
      },
      areaStyle: {
        color: "rgba(249, 115, 22, 0.08)",
      },
      data: state.windSeries.map((item) => [item.time, item.value]),
      markLine: {
        symbol: ["none", "none"],
        silent: true,
        lineStyle: {
          color: "rgba(249, 115, 22, 0.35)",
          type: "dashed",
          width: 1,
        },
        label: { show: false },
        data: [{ xAxis: selectedMs }],
      },
    });
    chartSeries.push({
      name: windLabel,
      type: "scatter",
      xAxisIndex: 1,
      yAxisIndex: 1,
      symbol: "circle",
      symbolSize: 4,
      silent: true,
      tooltip: { show: false },
      itemStyle: {
        color: "rgba(249, 115, 22, 0.18)",
      },
      label: {
        show: true,
        formatter: (param) => `${param.data.directionArrow} ${param.data.directionLabel}`,
        position: "top",
        distance: 6,
        color: "#b45309",
        fontSize: 11,
        fontWeight: 600,
      },
      data: buildWindArrowData(state.windHourly),
    });
  }

  state.chart.setOption(
    {
      axisPointer: {
        link: [{ xAxisIndex: hasWind ? [0, 1] : [0] }],
      },
      grid: hasWind
        ? [
            {
              top: 24,
              left: 52,
              right: 18,
              height: "55%",
            },
            {
              left: 52,
              right: 18,
              top: "72%",
              height: "17%",
            },
          ]
        : [
            {
              top: 28,
              left: 52,
              right: 18,
              bottom: 52,
            },
          ],
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "line",
          lineStyle: { color: "rgba(11, 127, 196, 0.35)", width: 1.2 },
        },
        formatter: (params) => {
          const items = (Array.isArray(params) ? params : [params]).filter((item) => item.seriesType !== "scatter");
          if (items.length === 0) return "";
          const timestamp = items[0].value[0];
          const tideItem = items.find((item) => item.seriesName === tideLabel);
          const windItem = items.find((item) => item.seriesName === windLabel);
          const dt = DateTime.fromMillis(timestamp).setZone(state.timezone).toFormat("yyyy-LL-dd HH:mm");
          const lines = [dt];

          if (tideItem) {
            lines.push(`${tideItem.marker}${tideLabel}: ${Number(tideItem.value[1]).toFixed(2)} m`);
          }

          if (windItem && windItem.value[1] !== null && Number.isFinite(Number(windItem.value[1]))) {
            const windSample = findNearestSample(state.windHourly, timestamp);
            lines.push(`${windItem.marker}${windLabel}: ${formatWind(Number(windItem.value[1]), windSample?.direction)}`);
          }

          return lines.join("<br/>");
        },
      },
      xAxis: hasWind
        ? [
            {
              type: "time",
              gridIndex: 0,
              axisLabel: { show: false },
              axisTick: { show: false },
              axisLine: { show: false },
              splitLine: { show: false },
            },
            {
              type: "time",
              gridIndex: 1,
              axisLabel: {
                color: "#4a6a82",
                formatter: (value) => DateTime.fromMillis(value).setZone(state.timezone).toFormat("HH:mm"),
              },
              axisLine: { lineStyle: { color: "rgba(40, 89, 122, 0.28)" } },
              splitLine: { show: false },
            },
          ]
        : [
            {
              type: "time",
              gridIndex: 0,
              axisLabel: {
                color: "#4a6a82",
                formatter: (value) => DateTime.fromMillis(value).setZone(state.timezone).toFormat("HH:mm"),
              },
              axisLine: { lineStyle: { color: "rgba(40, 89, 122, 0.28)" } },
              splitLine: { show: false },
            },
          ],
      yAxis: hasWind
        ? [
            {
              type: "value",
              gridIndex: 0,
              min: tideMin - tidePadding,
              max: tideMax + tidePadding,
              axisLabel: {
                color: "#4a6a82",
                formatter: (value) => `${Number(value).toFixed(1)}m`,
              },
              splitLine: {
                lineStyle: { color: "rgba(40, 89, 122, 0.12)", type: "dashed" },
              },
            },
            {
              type: "value",
              gridIndex: 1,
              min: 0,
              splitNumber: 3,
              name: "m/s",
              nameLocation: "end",
              nameGap: 10,
              nameTextStyle: {
                color: "#b45309",
                fontSize: 10,
                fontWeight: 600,
              },
              axisLabel: {
                color: "#b45309",
                formatter: (value) => `${Number(value).toFixed(0)}`,
              },
              splitLine: { show: false },
              axisLine: {
                lineStyle: { color: "rgba(249, 115, 22, 0.45)" },
              },
            },
          ]
        : [
            {
              type: "value",
              gridIndex: 0,
              min: tideMin - tidePadding,
              max: tideMax + tidePadding,
              axisLabel: {
                color: "#4a6a82",
                formatter: (value) => `${Number(value).toFixed(1)}m`,
              },
              splitLine: {
                lineStyle: { color: "rgba(40, 89, 122, 0.12)", type: "dashed" },
              },
            },
          ],
      series: chartSeries,
    },
    true
  );
}

function renderStats() {
  if (!state.sampledSeries || state.sampledSeries.length === 0) {
    dom.currentLevel.textContent = "--";
    dom.currentLevelTime.textContent = "--";
    dom.currentWind.textContent = "--";
    dom.currentWindTime.textContent = "--";
    dom.dailyHigh.textContent = "--";
    dom.dailyHighTime.textContent = "--";
    dom.dailyLow.textContent = "--";
    dom.dailyLowTime.textContent = "--";
    return;
  }

  const selectedMs = DateTime.fromISO(
    `${state.selectedDate}T${String(state.selectedHour).padStart(2, "0")}:00`,
    { zone: state.timezone }
  ).toMillis();

  const current = interpolateSeries(state.sampledSeries, selectedMs);
  const windSample = findNearestSample(state.windHourly, selectedMs);
  const windIsNearSelection =
    windSample && Math.abs(windSample.time - selectedMs) <= 90 * 60 * 1000;
  const extrema = detectExtrema(state.sampledSeries);
  const highSeries = extrema.highs.length > 0 ? extrema.highs : state.sampledSeries;
  const lowSeries = extrema.lows.length > 0 ? extrema.lows : state.sampledSeries;
  const high = highSeries.reduce(
    (acc, item) => (item.value > acc.value ? item : acc),
    highSeries[0]
  );
  const low = lowSeries.reduce(
    (acc, item) => (item.value < acc.value ? item : acc),
    lowSeries[0]
  );

  dom.currentLevel.textContent = formatHeight(current);
  dom.currentLevelTime.textContent = toLocalDateString(selectedMs);
  dom.currentWind.textContent = windIsNearSelection ? formatWind(windSample.value, windSample.direction) : "--";
  dom.currentWindTime.textContent = windIsNearSelection ? toLocalDateString(windSample.time) : "--";

  dom.dailyHigh.textContent = formatHeight(high.value);
  dom.dailyHighTime.textContent = toLocalDateString(high.time);

  dom.dailyLow.textContent = formatHeight(low.value);
  dom.dailyLowTime.textContent = toLocalDateString(low.time);
}

async function loadTideData() {
  if (!state.selected || !state.selectedDate) return;

  const currentRequest = ++state.requestId;
  dom.refreshBtn.disabled = true;
  setStatus(t("loading"));

  try {
    const [tideResult, windResult] = await Promise.allSettled([
      resolveSeriesForDate(state.selected.lat, state.selected.lng, state.selectedDate),
      resolveWindSeries(state.selected.lat, state.selected.lng, state.selectedDate),
    ]);
    if (currentRequest !== state.requestId) return;

    if (tideResult.status !== "fulfilled") {
      throw tideResult.reason;
    }

    const resolved = tideResult.value;

    state.sampledSeries = resolved.series;
    state.source = resolved.source;
    state.timezone = resolved.timezone || state.timezone;
    state.windSeries = windResult.status === "fulfilled" ? windResult.value.series : [];
    state.windHourly = windResult.status === "fulfilled" ? windResult.value.hourly : [];
    try {
      state.referenceExtremes = await resolveReferenceExtremes(
        state.selected.lat,
        state.selected.lng,
        state.timezone
      );
    } catch {
      state.referenceExtremes = null;
    }
    if (currentRequest !== state.requestId) return;

    updateSourceAndTimezone();
    renderChart();
    renderStats();

    setStatus(resolved.note || "");
  } catch {
    if (currentRequest !== state.requestId) return;
    state.sampledSeries = [];
    state.windSeries = [];
    state.windHourly = [];
    state.referenceExtremes = null;
    renderChart();
    renderStats();
    setStatus(t("fetchError"), true);
  } finally {
    dom.refreshBtn.disabled = false;
  }
}

function startAutoRefresh() {
  setInterval(() => {
    if (!state.selectedDate || !state.selected) return;
    const today = DateTime.now().setZone(state.timezone).toISODate();
    if (state.selectedDate === today) {
      loadTideData();
    }
  }, 300000);
}

async function init() {
  fillLanguageSelector();
  initMap();
  initChart();
  bindEvents();

  await setLanguage(navigator.languages?.[0] || navigator.language, false);
  setDateAndHourFromNow();
  applyStaticI18n();

  setSelectedLocation(22.2956, 114.1698, "Victoria Harbour", false);
  locateUser();
  startAutoRefresh();
}

init().catch(() => {
  setStatus("Unable to initialize TideX.", true);
});
