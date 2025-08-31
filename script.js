// 信用卡方案資料
const creditCardPlans = [
    {
        name: "Pay著刷",
        rewardRate: "3.8%",
        description: "台新Pay綁定支付享11萬家通路最高回饋",
        details: [
            "台新Pay綁定支付享11萬家通路 3.8%",
            "適用通路：台灣Pay場域、新光三越、7-11、全家、萊爾富、OK、IKEA、路易莎咖啡、台灣大車隊等",
            "詳見台新Pay官網"
        ],
        keywords: ["台新Pay", "支付", "通路", "3.8%", "超商", "IKEA", "路易莎", "車隊"]
    },
    {
        name: "天天刷",
        rewardRate: "3.3%",
        description: "超商量販、通勤交通、停車租車專屬回饋",
        details: [
            "超商量販｜7-11及全家(兩大超商限使用台新Pay綁定支付)、家樂福、大買家",
            "通勤交通｜台鐵、高鐵、台灣大車隊、LINEGO、Yoxi、Uber",
            "停車租車｜嘟嘟房、Autopass(車麻吉)、城市車旅、ViViPark、USPACE、UDRIVE、iRent、和運租車、格上租車"
        ],
        keywords: ["超商", "交通", "停車", "租車", "台鐵", "高鐵", "Uber", "3.3%", "天天"]
    },
    {
        name: "大筆刷",
        rewardRate: "3.3%",
        description: "百貨購物、Outlet、居家裝修專屬回饋",
        details: [
            "指定百貨｜新光三越、遠東SOGO、廣三SOGO、遠東百貨、微風、台北101、遠東巨城、南紡購物中心、漢神百貨、漢神巨蛋、誠品生活、Mitsui Shopping Park LaLaport(南港/台中)",
            "指定Outlet｜MITSUI OUTLET PARK (林口/台中港/台南)、華泰名品城、SKM Park Outlets",
            "居家裝修｜IKEA、特力屋、HOLA、宜得利、瑪黑家居"
        ],
        keywords: ["百貨", "Outlet", "裝修", "購物", "IKEA", "特力屋", "3.3%", "大筆"]
    },
    {
        name: "好饗刷",
        rewardRate: "3.3%",
        description: "餐飲美食、展演購票、飯店樂園專屬回饋",
        details: [
            "全臺餐飲(不含餐券)",
            "外送平台｜Uber Eats、Foodpanda",
            "展演購票｜拓元售票、KKTIX、年代售票、寬宏售票、OPENTIX兩廳院文化生活",
            "指定飯店｜晶華國際酒店集團、台灣萬豪國際集團旗下飯店、煙波飯店、老爺酒店集團、福華集團、漢來飯店事業群、台北君悅酒店、高雄洲際酒店、礁溪寒沐",
            "指定樂園｜義大遊樂世界、麗寶樂園、六福村主題遊樂園、九族文化村、劍湖山世界主題遊樂園、X-Park、國立海洋生物博物館、遠雄海洋公園、大魯閣、小人國主題樂園",
            "加油充電｜中油直營、台亞直營、全國加油、源點EVOASIS、華城電能EVALUE"
        ],
        keywords: ["餐飲", "美食", "外送", "展演", "飯店", "樂園", "加油", "充電", "3.3%", "好饗"]
    },
    {
        name: "數趣刷",
        rewardRate: "3.3%",
        description: "網購平台、線上課程、時尚品味專屬回饋",
        details: [
            "網購平台｜蝦皮、momo、酷澎(Coupang)、PChome、Yahoo、Amazon、東森、博客來、Richart Mart",
            "線上課程｜Hahow、PressPlay、Amazing Talker、Udemy、Kobo、Readmoo",
            "時尚品味｜UNIQLO、GU、ZARA、NET、lativ、GAP"
        ],
        keywords: ["網購", "線上", "課程", "時尚", "蝦皮", "momo", "UNIQLO", "ZARA", "3.3%", "數趣"]
    },
    {
        name: "玩旅刷",
        rewardRate: "3.3%",
        description: "海外消費、航空公司、訂房旅行專屬回饋",
        details: [
            "海外消費(含實體及線上)",
            "航空公司｜華航、長榮、星宇、虎航、國泰航空、華信、立榮",
            "訂房旅行｜Klook、KKday、AIRSIM、Agoda、Booking.com、Trip.com、Airbnb、Hotels.com、Expedia、雄獅旅遊、易遊網、東南旅遊"
        ],
        keywords: ["海外", "航空", "旅行", "訂房", "華航", "長榮", "星宇", "Agoda", "Booking", "3.3%", "玩旅"]
    },
    {
        name: "假日刷",
        rewardRate: "2%",
        description: "節假日不限通路消費專屬回饋",
        details: [
            "節假日不限通路(含保費)消費享2% (含LINE Pay及街口支付綁定)",
            "國內節假日的定義，依行政院人事行政總處公告之國定例假日為準(不含天災假)"
        ],
        keywords: ["假日", "節日", "保費", "LINE Pay", "街口", "2%", "不限通路"]
    }
];

// DOM 元素
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const plansContainer = document.getElementById('plansContainer');

// 初始化頁面
function initPage() {
    renderPlans(creditCardPlans);
    setupEventListeners();
}

// 設定事件監聽器
function setupEventListeners() {
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    // 即時搜尋功能
    searchInput.addEventListener('input', function() {
        if (this.value.trim() === '') {
            renderPlans(creditCardPlans);
        } else {
            performSearch();
        }
    });
}

// 執行搜尋
function performSearch() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    
    if (searchTerm === '') {
        renderPlans(creditCardPlans);
        return;
    }
    
    const filteredPlans = creditCardPlans.filter(plan => {
        // 搜尋方案名稱
        if (plan.name.toLowerCase().includes(searchTerm)) {
            return true;
        }
        
        // 搜尋回饋率
        if (plan.rewardRate.includes(searchTerm)) {
            return true;
        }
        
        // 搜尋描述
        if (plan.description.toLowerCase().includes(searchTerm)) {
            return true;
        }
        
        // 搜尋詳細內容
        if (plan.details.some(detail => detail.toLowerCase().includes(searchTerm))) {
            return true;
        }
        
        // 搜尋關鍵字
        if (plan.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm))) {
            return true;
        }
        
        return false;
    });
    
    renderPlans(filteredPlans);
}

// 渲染方案卡片
function renderPlans(plans) {
    plansContainer.innerHTML = '';
    
    if (plans.length === 0) {
        plansContainer.innerHTML = `
            <div class="no-results">
                <h3>沒有找到符合的方案</h3>
                <p>請嘗試其他搜尋關鍵字</p>
            </div>
        `;
        return;
    }
    
    plans.forEach(plan => {
        const planCard = createPlanCard(plan);
        plansContainer.appendChild(planCard);
    });
}

// 建立方案卡片
function createPlanCard(plan) {
    const card = document.createElement('div');
    card.className = 'plan-card';
    
    const detailsList = plan.details.map(detail => `<li>${detail}</li>`).join('');
    
    card.innerHTML = `
        <div class="plan-header">
            <div class="plan-name">${plan.name}</div>
            <div class="reward-rate">${plan.rewardRate}</div>
        </div>
        <div class="plan-description">${plan.description}</div>
        <div class="plan-details">
            <h4>適用通路：</h4>
            <ul>${detailsList}</ul>
        </div>
    `;
    
    return card;
}

// 頁面載入完成後初始化
document.addEventListener('DOMContentLoaded', initPage);
