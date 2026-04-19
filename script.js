// script.js

// ==========================================
// DEFAULT CHART OF ACCOUNTS (Fallback)
// ==========================================
const DEFAULT_COA = [
          
        // ===== 1: الأصول (Assets) =====
        
        {
          code: "101",
          nameAr: "الأصول الثابتة",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "101001",
          nameAr: "الأصول الثابتة - ثلاجات التبريد",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "101001001",
          nameAr: "الأصول الثابتة - ثلاجة التبريد  - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "101001002",
          nameAr: "الأصول الثابتة - ثلاجة التبريد  - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "101001003",
          nameAr: "الأصول الثابتة - ثلاجة التبريد  - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "101001004",
          nameAr: "الأصول الثابتة - ثلاجة التبريد  - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "101001005",
          nameAr: "الأصول الثابتة - ثلاجة التبريد  - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "101001006",
          nameAr: "الأصول الثابتة - ثلاجة التبريد  - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "101001007",
          nameAr: "الأصول الثابتة - ثلاجة التبريد  - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "101001008",
          nameAr: "الأصول الثابتة - ثلاجة التبريد  - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "101001009",
          nameAr: "الأصول الثابتة - ثلاجة التبريد  - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "101001010",
          nameAr: "الأصول الثابتة - ثلاجة التبريد  - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "101002",
          nameAr: "الأصول الثابتة - كباسات التبريد",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "101002001",
          nameAr: "الأصول الثابتة - كباتسات تبريد - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "101002002",
          nameAr: "الأصول الثابتة - كباتسات تبريد - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "101002003",
          nameAr: "الأصول الثابتة - كباتسات تبريد - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "101002004",
          nameAr: "الأصول الثابتة - كباتسات تبريد - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "101002005",
          nameAr: "الأصول الثابتة - كباتسات تبريد - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "101002006",
          nameAr: "الأصول الثابتة - كباتسات تبريد - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "101002007",
          nameAr: "الأصول الثابتة - كباتسات تبريد - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "101002008",
          nameAr: "الأصول الثابتة - كباتسات تبريد - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "101002009",
          nameAr: "الأصول الثابتة - كباتسات تبريد - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "101002010",
          nameAr: "الأصول الثابتة - كباتسات تبريد - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "101003",
          nameAr: "الأصول الثابتة - كمبيوتر و طابعات و برامج",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "101003001",
          nameAr: "الأصول الثابتة - كمبيوتر  وطابعات - Lap top",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "101003002",
          nameAr: "الأصول الثابتة - كمبيوتر  وطابعات - Disk top",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "101003003",
          nameAr: "الأصول الثابتة - كمبيوتر  وطابعات -  طابعات",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "101003004",
          nameAr: "الأصول الثابتة - كمبيوتر  وطابعات - ماكينة تصوير",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "101003005",
          nameAr: "الأصول الثابتة - كمبيوتر  وطابعات -  تابلت",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "101003006",
          nameAr: "الأصول الثابتة - كمبيوتر  وطابعات - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "101003007",
          nameAr: "الأصول الثابتة - كمبيوتر  وطابعات - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "101003008",
          nameAr: "الأصول الثابتة - كمبيوتر  وطابعات - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "101003009",
          nameAr: "الأصول الثابتة - كمبيوتر  وطابعات - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "101003010",
          nameAr: "الأصول الثابتة - كمبيوتر  وطابعات - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "101004",
          nameAr: "الأصول الثابتة - ماكينات التعبئة و التغليف",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "101004001",
          nameAr: "الأصول الثابتة - ماكينات التعبئة و التغليف - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "101004002",
          nameAr: "الأصول الثابتة - ماكينات التعبئة و التغليف - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "101004003",
          nameAr: "الأصول الثابتة - ماكينات التعبئة و التغليف - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "101004004",
          nameAr: "الأصول الثابتة - ماكينات التعبئة و التغليف - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "101004005",
          nameAr: "الأصول الثابتة - ماكينات التعبئة و التغليف - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "101004006",
          nameAr: "الأصول الثابتة - ماكينات التعبئة و التغليف - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "101004007",
          nameAr: "الأصول الثابتة - ماكينات التعبئة و التغليف - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "101004008",
          nameAr: "الأصول الثابتة - ماكينات التعبئة و التغليف - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "101004009",
          nameAr: "الأصول الثابتة - ماكينات التعبئة و التغليف - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "101004010",
          nameAr: "الأصول الثابتة - ماكينات التعبئة و التغليف - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "101005",
          nameAr: "الأصول الثابتة -  الميزان الالكترونى",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "101005001",
          nameAr: "الأصول الثابتة - الميزان الالكترونى - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "101005002",
          nameAr: "الأصول الثابتة - الميزان الالكترونى - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "101005003",
          nameAr: "الأصول الثابتة - الميزان الالكترونى - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "101005004",
          nameAr: "الأصول الثابتة - الميزان الالكترونى - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "101005005",
          nameAr: "الأصول الثابتة - الميزان الالكترونى - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "101005006",
          nameAr: "الأصول الثابتة - الميزان الالكترونى - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "101005007",
          nameAr: "الأصول الثابتة - الميزان الالكترونى - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "101005008",
          nameAr: "الأصول الثابتة - الميزان الالكترونى - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "101005009",
          nameAr: "الأصول الثابتة - الميزان الالكترونى - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "101005010",
          nameAr: "الأصول الثابتة - الميزان الالكترونى - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "102",
          nameAr: "البنوك و النقدية",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "102001",
          nameAr: "حسابات البنوك",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "102001001",
          nameAr: "حساب بنك - CIB - بالجنية المصرى",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "102001002",
          nameAr: "حساب بنك - CIB - بالدولار ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "102001003",
          nameAr: "حساب بنك -  CPS - CIB ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "102001004",
          nameAr: "حساب بنك - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "102001005",
          nameAr: "حساب بنك - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "102001006",
          nameAr: "حساب بنك - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "102001007",
          nameAr: "حساب بنك - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "102001008",
          nameAr: "حساب بنك - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "102001009",
          nameAr: "حساب بنك - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "102001010",
          nameAr: "حساب بنك - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "102002",
          nameAr: "حسابات النقدية ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "102002001",
          nameAr: "نقدية بالخزينة - الرئيسية -  بالجنية المصرى",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "102002002",
          nameAr: "نقدية بالخزينة - الرئيسية - بالدولار",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "102002003",
          nameAr: "نقدية بالخزينة - الرئيسية - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "102002004",
          nameAr: "نقدية بالخزينة - الرئيسية - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "102002005",
          nameAr: "نقدية بالخزينة - الرئيسية - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "102002006",
          nameAr: "نقدية بالخزينة - الرئيسية - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "102002007",
          nameAr: "نقدية بالخزينة - الرئيسية - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "102002008",
          nameAr: "نقدية بالخزينة - الرئيسية - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "102002009",
          nameAr: "نقدية بالخزينة - الرئيسية - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "102002010",
          nameAr: "نقدية بالخزينة - الرئيسية - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "102003",
          nameAr: "العهد المؤقتة",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "102003001",
          nameAr: "العهد المؤقتة - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "102003002",
          nameAr: "العهد المؤقتة - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "102003003",
          nameAr: "العهد المؤقتة - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "102003004",
          nameAr: "العهد المؤقتة - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "102003005",
          nameAr: "العهد المؤقتة - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "102003006",
          nameAr: "العهد المؤقتة - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "102003007",
          nameAr: "العهد المؤقتة - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "102003008",
          nameAr: "العهد المؤقتة - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "102003009",
          nameAr: "العهد المؤقتة - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "102003010",
          nameAr: "العهد المؤقتة - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "103",
          nameAr: "العملاء",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "103001",
          nameAr: "عملاء - محليين",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "103001001",
          nameAr: "عملاء - محليين - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "103001002",
          nameAr: "عملاء - محليين - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "103001003",
          nameAr: "عملاء - محليين - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "103001004",
          nameAr: "عملاء - محليين - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "103001005",
          nameAr: "عملاء - محليين - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "103001006",
          nameAr: "عملاء - محليين - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "103001007",
          nameAr: "عملاء - محليين - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "103001008",
          nameAr: "عملاء - محليين - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "103001009",
          nameAr: "عملاء - محليين - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "103001010",
          nameAr: "عملاء - محليين - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "103002",
          nameAr: "عملاء - جملة",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "103002001",
          nameAr: "عملاء - جملة - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "103002002",
          nameAr: "عملاء - جملة - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "103002003",
          nameAr: "عملاء - جملة - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "103002004",
          nameAr: "عملاء - جملة - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "103002005",
          nameAr: "عملاء - جملة - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "103002006",
          nameAr: "عملاء - جملة - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "103002007",
          nameAr: "عملاء - جملة - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "103002008",
          nameAr: "عملاء - جملة - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "103002009",
          nameAr: "عملاء - جملة - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "103002010",
          nameAr: "عملاء - جملة - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "103003",
          nameAr: "عملاء - تصدير",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "103003001",
          nameAr: "عملاء - تصدير -",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "103003002",
          nameAr: "عملاء - تصدير -",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "103003003",
          nameAr: "عملاء - تصدير -",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "103003004",
          nameAr: "عملاء - تصدير -",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "103003005",
          nameAr: "عملاء - تصدير -",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "103003006",
          nameAr: "عملاء - تصدير -",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "103003007",
          nameAr: "عملاء - تصدير -",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "103003008",
          nameAr: "عملاء - تصدير -",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "103003009",
          nameAr: "عملاء - تصدير -",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "103003010",
          nameAr: "عملاء - تصدير -",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "104",
          nameAr: "مدينون متنوعون ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "104001",
          nameAr: "الإيرادات المستحقة",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "104001001",
          nameAr: "الإيرادات المستحقة -",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "104001002",
          nameAr: "الإيرادات المستحقة -",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "104001003",
          nameAr: "الإيرادات المستحقة -",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "104001004",
          nameAr: "الإيرادات المستحقة -",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "104001005",
          nameAr: "الإيرادات المستحقة -",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "104001006",
          nameAr: "الإيرادات المستحقة -",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "104001007",
          nameAr: "الإيرادات المستحقة -",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "104001008",
          nameAr: "الإيرادات المستحقة -",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "104001009",
          nameAr: "الإيرادات المستحقة -",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "104001010",
          nameAr: "الإيرادات المستحقة -",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "104002",
          nameAr: "المصروفات المقدمة ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "104002001",
          nameAr: "مصروفات مقدمة  - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "104002002",
          nameAr: "مصروفات مقدمة  - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "104002003",
          nameAr: "مصروفات مقدمة  - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "104002004",
          nameAr: "مصروفات مقدمة  - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "104002005",
          nameAr: "مصروفات مقدمة  - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "104002006",
          nameAr: "مصروفات مقدمة  - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "104002007",
          nameAr: "مصروفات مقدمة  - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "104002008",
          nameAr: "مصروفات مقدمة  - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "104002009",
          nameAr: "مصروفات مقدمة  - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "104002010",
          nameAr: "مصروفات مقدمة  - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "104003",
          nameAr: "تأمينات لدى الغير",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "104003001",
          nameAr: "تأمينات لدى الغير -",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "104003002",
          nameAr: "تأمينات لدى الغير -",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "104003003",
          nameAr: "تأمينات لدى الغير -",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "104003004",
          nameAr: "تأمينات لدى الغير -",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "104003005",
          nameAr: "تأمينات لدى الغير -",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "104003006",
          nameAr: "تأمينات لدى الغير -",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "104003007",
          nameAr: "تأمينات لدى الغير -",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "104003008",
          nameAr: "تأمينات لدى الغير -",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "104003009",
          nameAr: "تأمينات لدى الغير -",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "104003010",
          nameAr: "تأمينات لدى الغير -",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "104004",
          nameAr: "ضرائب مدينة ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "104004001",
          nameAr: "ضرائب مدينة - خصم من المنبع",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "104004002",
          nameAr: "ضرائب مدينة - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "104004003",
          nameAr: "ضرائب مدينة - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "104004004",
          nameAr: "ضرائب مدينة - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "104004005",
          nameAr: "ضرائب مدينة - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "104004006",
          nameAr: "ضرائب مدينة - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "104004007",
          nameAr: "ضرائب مدينة - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "104004008",
          nameAr: "ضرائب مدينة - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "104004009",
          nameAr: "ضرائب مدينة - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "104004010",
          nameAr: "ضرائب مدينة - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "104005",
          nameAr: "أرصدة مدينة أخرى ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "104005001",
          nameAr: "أرصدة مدينة أخرى - سلف عاملين",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "104005002",
          nameAr: "أرصدة مدينة أخرى -",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "104005003",
          nameAr: "أرصدة مدينة أخرى - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "104005004",
          nameAr: "أرصدة مدينة أخرى - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "104005005",
          nameAr: "أرصدة مدينة أخرى - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "104005006",
          nameAr: "أرصدة مدينة أخرى - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "104005007",
          nameAr: "أرصدة مدينة أخرى - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "104005008",
          nameAr: "أرصدة مدينة أخرى - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "104005009",
          nameAr: "أرصدة مدينة أخرى - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "104005010",
          nameAr: "أرصدة مدينة أخرى - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "105",
          nameAr: "المخزون",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "105001",
          nameAr: "مخزن - الثلاجة رقم 1 ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "105001001",
          nameAr: "مخزون - ثلاجة رقم 1 - تمور خام",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "105001002",
          nameAr: "مخزون - ثلاجة رقم 1 - تمور تحت التشغيل",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "105001003",
          nameAr: "مخزون - ثلاجة رقم 1 - تمور جاهزة للبيع",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "105001004",
          nameAr: "مخزون - ثلاجة رقم 1 - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "105001005",
          nameAr: "مخزون - ثلاجة رقم 1 - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "105001006",
          nameAr: "مخزون - ثلاجة رقم 1 - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "105001007",
          nameAr: "مخزون - ثلاجة رقم 1 - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "105001008",
          nameAr: "مخزون - ثلاجة رقم 1 - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "105001009",
          nameAr: "مخزون - ثلاجة رقم 1 - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "105001010",
          nameAr: "مخزون - ثلاجة رقم 1 - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "105002",
          nameAr: "مخزن - الثلاجة رقم 2",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "105002001",
          nameAr: "مخزون - ثلاجة رقم 2 - تمور خام",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "105002002",
          nameAr: "مخزون - ثلاجة رقم 2 - تمور تحت التشغيل",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "105002003",
          nameAr: "مخزون - ثلاجة رقم 2 - تمور جاهزة للبيع",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "105002004",
          nameAr: "مخزون - ثلاجة رقم 2 - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "105002005",
          nameAr: "مخزون - ثلاجة رقم 2 - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "105002006",
          nameAr: "مخزون - ثلاجة رقم 2 - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "105002007",
          nameAr: "مخزون - ثلاجة رقم 2 - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "105002008",
          nameAr: "مخزون - ثلاجة رقم 2 - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "105002009",
          nameAr: "مخزون - ثلاجة رقم 2 - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "105002010",
          nameAr: "مخزون - ثلاجة رقم 2 - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "105003",
          nameAr: "مخزن - الثلاجة رقم 3",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "105003001",
          nameAr: "مخزون - ثلاجة رقم 3 - تمور خام",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "105003002",
          nameAr: "مخزون - ثلاجة رقم 3 - تمور تحت التشغيل",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "105003003",
          nameAr: "مخزون - ثلاجة رقم 3 - تمور جاهزة للبيع",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "105003004",
          nameAr: "مخزون - ثلاجة رقم 3 - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "105003005",
          nameAr: "مخزون - ثلاجة رقم 3 - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "105003006",
          nameAr: "مخزون - ثلاجة رقم 3 - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "105003007",
          nameAr: "مخزون - ثلاجة رقم 3 - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "105003008",
          nameAr: "مخزون - ثلاجة رقم 3 - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "105003009",
          nameAr: "مخزون - ثلاجة رقم 3 - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "105003010",
          nameAr: "مخزون - ثلاجة رقم 3 - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "105004",
          nameAr: "مخزن - مواد التعبئة و التغليف",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "105004001",
          nameAr: "مواد التعبئة و التغليف - كرتون ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "105004002",
          nameAr: "مواد التعبئة و التغليف - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "105004003",
          nameAr: "مواد التعبئة و التغليف - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "105004004",
          nameAr: "مواد التعبئة و التغليف - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "105004005",
          nameAr: "مواد التعبئة و التغليف - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "105004006",
          nameAr: "مواد التعبئة و التغليف - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "105004007",
          nameAr: "مواد التعبئة و التغليف - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "105004008",
          nameAr: "مواد التعبئة و التغليف - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "105004009",
          nameAr: "مواد التعبئة و التغليف - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "105004010",
          nameAr: "مواد التعبئة و التغليف - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "105005",
          nameAr: "مخزن - مواد ومهمات",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "105005001",
          nameAr: "مواد و مهمات - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "105005002",
          nameAr: "مواد و مهمات - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "105005003",
          nameAr: "مواد و مهمات - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "105005004",
          nameAr: "مواد و مهمات - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "105005005",
          nameAr: "مواد و مهمات - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "105005006",
          nameAr: "مواد و مهمات - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "105005007",
          nameAr: "مواد و مهمات - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "105005008",
          nameAr: "مواد و مهمات - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "105005009",
          nameAr: "مواد و مهمات - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },
        {
          code: "105005010",
          nameAr: "مواد و مهمات - ",
          nameEn: "",
          type: "assets",
          typeAr: "أصول",
        },

        // ===== 2: الإلتزامات و حقوق الملكية (Liabilities & Equity) =====
        {
          code: "201",
          nameAr: "حسابات رأس المال",
          nameEn: "",
          type: "equity",
          typeAr: "حقوق ملكية",
        },
        {
          code: "201001",
          nameAr: "رأس المال المدفوع",
          nameEn: "",
          type: "equity",
          typeAr: "حقوق ملكية",
        },
        {
          code: "201001001",
          nameAr: "رأس المال - راس المال المدفوع",
          nameEn: "",
          type: "equity",
          typeAr: "حقوق ملكية",
        },
        {
          code: "201001002",
          nameAr: "رأس المال -",
          nameEn: "",
          type: "equity",
          typeAr: "حقوق ملكية",
        },
        {
          code: "201001003",
          nameAr: "رأس المال -",
          nameEn: "",
          type: "equity",
          typeAr: "حقوق ملكية",
        },
        {
          code: "201001004",
          nameAr: "رأس المال -",
          nameEn: "",
          type: "equity",
          typeAr: "حقوق ملكية",
        },
        {
          code: "201001005",
          nameAr: "رأس المال -",
          nameEn: "",
          type: "equity",
          typeAr: "حقوق ملكية",
        },
        {
          code: "201001006",
          nameAr: "رأس المال -",
          nameEn: "",
          type: "equity",
          typeAr: "حقوق ملكية",
        },
        {
          code: "201001007",
          nameAr: "رأس المال -",
          nameEn: "",
          type: "equity",
          typeAr: "حقوق ملكية",
        },
        {
          code: "201001008",
          nameAr: "رأس المال -",
          nameEn: "",
          type: "equity",
          typeAr: "حقوق ملكية",
        },
        {
          code: "201001009",
          nameAr: "رأس المال -",
          nameEn: "",
          type: "equity",
          typeAr: "حقوق ملكية",
        },
        {
          code: "201001010",
          nameAr: "رأس المال -",
          nameEn: "",
          type: "equity",
          typeAr: "حقوق ملكية",
        },
        {
          code: "201002",
          nameAr: "زيادة رأس المال",
          nameEn: "",
          type: "equity",
          typeAr: "حقوق ملكية",
        },
        {
          code: "201002001",
          nameAr: "زيادة رأس المال - ",
          nameEn: "",
          type: "equity",
          typeAr: "حقوق ملكية",
        },
        {
          code: "201002002",
          nameAr: "زيادة رأس المال - ",
          nameEn: "",
          type: "equity",
          typeAr: "حقوق ملكية",
        },
        {
          code: "201002003",
          nameAr: "زيادة رأس المال - ",
          nameEn: "",
          type: "equity",
          typeAr: "حقوق ملكية",
        },
        {
          code: "201002004",
          nameAr: "زيادة رأس المال - ",
          nameEn: "",
          type: "equity",
          typeAr: "حقوق ملكية",
        },
        {
          code: "201002005",
          nameAr: "زيادة رأس المال - ",
          nameEn: "",
          type: "equity",
          typeAr: "حقوق ملكية",
        },
        {
          code: "201002006",
          nameAr: "زيادة رأس المال - ",
          nameEn: "",
          type: "equity",
          typeAr: "حقوق ملكية",
        },
        {
          code: "201002007",
          nameAr: "زيادة رأس المال - ",
          nameEn: "",
          type: "equity",
          typeAr: "حقوق ملكية",
        },
        {
          code: "201002008",
          nameAr: "زيادة رأس المال - ",
          nameEn: "",
          type: "equity",
          typeAr: "حقوق ملكية",
        },
        {
          code: "201002009",
          nameAr: "زيادة رأس المال - ",
          nameEn: "",
          type: "equity",
          typeAr: "حقوق ملكية",
        },
        {
          code: "201002010",
          nameAr: "زيادة رأس المال - ",
          nameEn: "",
          type: "equity",
          typeAr: "حقوق ملكية",
        },
        {
          code: "201003",
          nameAr: "الارباح و الخسائر",
          nameEn: "",
          type: "equity",
          typeAr: "حقوق ملكية",
        },
        {
          code: "201003001",
          nameAr: "الارباح و الخسائر - أرباح وخسائر العام",
          nameEn: "",
          type: "equity",
          typeAr: "حقوق ملكية",
        },
        {
          code: "201003002",
          nameAr: "الارباح و الخسائر - سنوات سابقة",
          nameEn: "",
          type: "equity",
          typeAr: "حقوق ملكية",
        },
        {
          code: "201003003",
          nameAr: "الارباح و الخسائر - تقييم حسابات جارية بالعملة الاجنبية",
          nameEn: "",
          type: "equity",
          typeAr: "حقوق ملكية",
        },
        {
          code: "201003004",
          nameAr: "الارباح و الخسائر - ",
          nameEn: "",
          type: "equity",
          typeAr: "حقوق ملكية",
        },
        {
          code: "201003005",
          nameAr: "الارباح و الخسائر - ",
          nameEn: "",
          type: "equity",
          typeAr: "حقوق ملكية",
        },
        {
          code: "201003006",
          nameAr: "الارباح و الخسائر - ",
          nameEn: "",
          type: "equity",
          typeAr: "حقوق ملكية",
        },
        {
          code: "201003007",
          nameAr: "الارباح و الخسائر - ",
          nameEn: "",
          type: "equity",
          typeAr: "حقوق ملكية",
        },
        {
          code: "201003008",
          nameAr: "الارباح و الخسائر - ",
          nameEn: "",
          type: "equity",
          typeAr: "حقوق ملكية",
        },
        {
          code: "201003009",
          nameAr: "الارباح و الخسائر - ",
          nameEn: "",
          type: "equity",
          typeAr: "حقوق ملكية",
        },
        {
          code: "201003010",
          nameAr: "الارباح و الخسائر - ",
          nameEn: "",
          type: "equity",
          typeAr: "حقوق ملكية",
        },
        {
          code: "202",
          nameAr: "التزمات غير متداولة",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "202001",
          nameAr: "التزمات الايجار ",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "202001001",
          nameAr: " الايجار - ",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "202001002",
          nameAr: " الايجار - ",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "202001003",
          nameAr: " الايجار - ",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "202001004",
          nameAr: " الايجار - ",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "202001005",
          nameAr: " الايجار - ",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "202001006",
          nameAr: " الايجار - ",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "202001007",
          nameAr: " الايجار - ",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "202001008",
          nameAr: " الايجار - ",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "202001009",
          nameAr: " الايجار - ",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "202001010",
          nameAr: " الايجار - ",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "202002",
          nameAr: "قروض طويلة الاجل",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "202002001",
          nameAr: " قروض طويلة الاجل - ",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "202002002",
          nameAr: " قروض طويلة الاجل - ",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "202002003",
          nameAr: " قروض طويلة الاجل - ",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "202002004",
          nameAr: " قروض طويلة الاجل - ",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "202002005",
          nameAr: " قروض طويلة الاجل - ",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "202002006",
          nameAr: " قروض طويلة الاجل - ",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "202002007",
          nameAr: " قروض طويلة الاجل - ",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "202002008",
          nameAr: " قروض طويلة الاجل - ",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "202002009",
          nameAr: " قروض طويلة الاجل - ",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "202002010",
          nameAr: " قروض طويلة الاجل - ",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "203",
          nameAr: "التزمات متداولة",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "203001",
          nameAr: "الموردين ",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "203001001",
          nameAr: "الموردين - ",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "203001002",
          nameAr: "الموردين - ",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "203001003",
          nameAr: "الموردين - ",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "203001004",
          nameAr: "الموردين - ",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "203001005",
          nameAr: "الموردين - ",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "203001006",
          nameAr: "الموردين - ",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "203001007",
          nameAr: "الموردين - ",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "203001008",
          nameAr: "الموردين - ",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "203001009",
          nameAr: "الموردين - ",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "203001010",
          nameAr: "الموردين - ",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "203002",
          nameAr: "المخصصات",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "203002001",
          nameAr: " مخصصات - ",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "203002002",
          nameAr: " مخصصات - ",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "203002003",
          nameAr: " مخصصات - ",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "203002004",
          nameAr: " مخصصات - ",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "203002005",
          nameAr: " مخصصات - ",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "203002006",
          nameAr: " مخصصات - ",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "203002007",
          nameAr: " مخصصات - ",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "203002008",
          nameAr: " مخصصات - ",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "203002009",
          nameAr: " مخصصات - ",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "203002010",
          nameAr: " مخصصات - ",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "203003",
          nameAr: "حساب جارى الشركاء",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "203003001",
          nameAr: "حساب جارى الشركاء- ",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "203003002",
          nameAr: "حساب جارى الشركاء- ",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "203003003",
          nameAr: "حساب جارى الشركاء- ",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "203003004",
          nameAr: "حساب جارى الشركاء- ",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "203003005",
          nameAr: "حساب جارى الشركاء- ",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "203003006",
          nameAr: "حساب جارى الشركاء- ",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "203003007",
          nameAr: "حساب جارى الشركاء- ",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "203003008",
          nameAr: "حساب جارى الشركاء- ",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "203003009",
          nameAr: "حساب جارى الشركاء- ",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "203003010",
          nameAr: "حساب جارى الشركاء- ",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "203004",
          nameAr: "ضرائب دائنة ",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "203004001",
          nameAr: "ضرائب دائنة - ضرائب القيمة المضافة",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "203004002",
          nameAr: "ضرائب دائنة - ضرائب كسب العمل",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "203004003",
          nameAr: "ضرائب دائنة - ضرائب الارباح التجارية و الصناعية 1%",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "203004004",
          nameAr: "ضرائب دائنة - ضرائب الارباح التجارية و الصناعية 3%",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "203004005",
          nameAr: "ضرائب دائنة - ضرائب الارباح التجارية و الصناعية 5%",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "203004006",
          nameAr: "ضرائب دائنة -  ضرائب الدخل ( مصلحة الضرائب العامة )",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "203004007",
          nameAr: "ضرائب دائنة -  المساهمة التكافلية - تأمين صحى",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "203004008",
          nameAr: "ضرائب دائنة - ضريبة توزيعات أرباح ",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "203004009",
          nameAr: "ضرائب دائنة - ",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "203004010",
          nameAr: "ضرائب دائنة - ",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "203005",
          nameAr: "المصروفات المستحقة",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "203005001",
          nameAr: "المصروفات المستحقة - صافى المرتبات المستحقة",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "203005002",
          nameAr: "المصروفات المستحقة - إيجارات مستحقة",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "203005003",
          nameAr: "المصروفات المستحقة - مصروفات مستحقة",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "203005004",
          nameAr: "المصروفات المستحقة - ",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "203005005",
          nameAr: "المصروفات المستحقة - ",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "203005006",
          nameAr: "المصروفات المستحقة - ",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "203005007",
          nameAr: "المصروفات المستحقة - ",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "203005008",
          nameAr: "المصروفات المستحقة - ",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "203005009",
          nameAr: "المصروفات المستحقة - ",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "203005010",
          nameAr: "المصروفات المستحقة - ",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "203006",
          nameAr: "أرصدة دائنة اخرى - متنوعة ",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "203006001",
          nameAr: "أرصدة دائنة اخرى - حصة الشركة فى أرصدة دائنة اخرى ",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "203006002",
          nameAr: "أرصدة دائنة اخرى - حصة العامل فى أرصدة دائنة اخرى ",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "203006003",
          nameAr: "أرصدة دائنة اخرى - الهيئة القومية للتأمينات الاجتماعية",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "203006004",
          nameAr: "أرصدة دائنة اخرى - صندوق الشهداء",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "203006005",
          nameAr: "أرصدة دائنة اخرى - ضرائب مؤجلة",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "203006006",
          nameAr: "أرصدة دائنة اخرى - مساهمة تكافلية افراد - اعانة كرونا",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "203006007",
          nameAr: "أرصدة دائنة اخرى - ",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "203006008",
          nameAr: "أرصدة دائنة اخرى - ",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "203006009",
          nameAr: "أرصدة دائنة اخرى - ",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "203006010",
          nameAr: "أرصدة دائنة اخرى - ",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "203007",
          nameAr: "مجمع الإهلاك",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "203007001",
          nameAr: "مجمع الإهلاك - الاصول الثابتة - ",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "203007002",
          nameAr: "مجمع الإهلاك - الاصول الثابتة - ",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "203007003",
          nameAr: "مجمع الإهلاك - الاصول الثابتة - ",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "203007004",
          nameAr: "مجمع الإهلاك - الاصول الثابتة - ",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "203007005",
          nameAr: "مجمع الإهلاك - الاصول الثابتة - ",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "203007006",
          nameAr: "مجمع الإهلاك - الاصول الثابتة - ",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "203007007",
          nameAr: "مجمع الإهلاك - الاصول الثابتة - ",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "203007008",
          nameAr: "مجمع الإهلاك - الاصول الثابتة - ",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "203007009",
          nameAr: "مجمع الإهلاك - الاصول الثابتة - ",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "203007010",
          nameAr: "مجمع الإهلاك - الاصول الثابتة - ",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "203007011",
          nameAr: "مجمع الإهلاك - الاصول الثابتة - ",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "203007012",
          nameAr: "مجمع الإهلاك - الاصول الثابتة - ",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "203007013",
          nameAr: "مجمع الإهلاك - الاصول الثابتة - ",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "203007014",
          nameAr: "مجمع الإهلاك - الاصول الثابتة - ",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "203007015",
          nameAr: "مجمع الإهلاك - الاصول الثابتة - ",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "203007016",
          nameAr: "مجمع الإهلاك - الاصول الثابتة - ",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "203007017",
          nameAr: "مجمع الإهلاك - الاصول الثابتة - ",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "203007018",
          nameAr: "مجمع الإهلاك - الاصول الثابتة - ",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "203007019",
          nameAr: "مجمع الإهلاك - الاصول الثابتة - ",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },
        {
          code: "203007020",
          nameAr: "مجمع الإهلاك - الاصول الثابتة - ",
          nameEn: "",
          type: "liabilities",
          typeAr: "خصوم",
        },

        // ===== 3: المصروفات (Expenses) =====
        {
          code: "301",
          nameAr: "مصروفات العمليات و التشغيل",
          nameEn: "",
          type: "expenses",
          typeAr: "مصروفات",
        },
        {
          code: "301001",
          nameAr: "مصروفات التشغيل",
          nameEn: "",
          type: "expenses",
          typeAr: "مصروفات",
        },
        {
          code: "301001001",
          nameAr: "مصروفات التشغيل -  تكلفة مبيعات  - تمور خام",
          nameEn: "",
          type: "expenses",
          typeAr: "مصروفات",
        },
        {
          code: "301001002",
          nameAr: "مصروفات التشغيل - تكلفة البضاعة - جاهزة للبيع",
          nameEn: "",
          type: "expenses",
          typeAr: "مصروفات",
        },
        {
          code: "301001003",
          nameAr: "مصروفات التشغيل - تحميل و تنزيل",
          nameEn: "",
          type: "expenses",
          typeAr: "مصروفات",
        },
        {
          code: "301001004",
          nameAr: "مصروفات التشغيل -  تبخير التمور",
          nameEn: "",
          type: "expenses",
          typeAr: "مصروفات",
        },
        {
          code: "301001005",
          nameAr: "مصروفات التشغيل -  نقل و نولون",
          nameEn: "",
          type: "expenses",
          typeAr: "مصروفات",
        },
        {
          code: "301001006",
          nameAr: "مصروفات التشغيل - إعاشة عمال",
          nameEn: "",
          type: "expenses",
          typeAr: "مصروفات",
        },
        {
          code: "301001007",
          nameAr: "مصروفات التشغيل -  أجور و مرتبات",
          nameEn: "",
          type: "expenses",
          typeAr: "مصروفات",
        },
        {
          code: "301001008",
          nameAr: "مصروفات التشغيل - تأمينات اجتماعية",
          nameEn: "",
          type: "expenses",
          typeAr: "مصروفات",
        },
        {
          code: "301001009",
          nameAr: "مصروفات التشغيل - ",
          nameEn: "",
          type: "expenses",
          typeAr: "مصروفات",
        },
        {
          code: "301001010",
          nameAr: "مصروفات التشغيل - ",
          nameEn: "",
          type: "expenses",
          typeAr: "مصروفات",
        },
        {
          code: "301001011",
          nameAr: "مصروفات التشغيل - ",
          nameEn: "",
          type: "expenses",
          typeAr: "مصروفات",
        },
        {
          code: "301001012",
          nameAr: "مصروفات التشغيل - ",
          nameEn: "",
          type: "expenses",
          typeAr: "مصروفات",
        },
        {
          code: "301001013",
          nameAr: "مصروفات التشغيل - ",
          nameEn: "",
          type: "expenses",
          typeAr: "مصروفات",
        },
        {
          code: "301001014",
          nameAr: "مصروفات التشغيل - ",
          nameEn: "",
          type: "expenses",
          typeAr: "مصروفات",
        },
        {
          code: "301001015",
          nameAr: "مصروفات التشغيل - ",
          nameEn: "",
          type: "expenses",
          typeAr: "مصروفات",
        },
        {
          code: "301001016",
          nameAr: "مصروفات التشغيل - ",
          nameEn: "",
          type: "expenses",
          typeAr: "مصروفات",
        },
        {
          code: "301001017",
          nameAr: "مصروفات التشغيل - ",
          nameEn: "",
          type: "expenses",
          typeAr: "مصروفات",
        },
        {
          code: "301001018",
          nameAr: "مصروفات التشغيل - ",
          nameEn: "",
          type: "expenses",
          typeAr: "مصروفات",
        },
        {
          code: "301001019",
          nameAr: "مصروفات التشغيل - ",
          nameEn: "",
          type: "expenses",
          typeAr: "مصروفات",
        },
        {
          code: "301001020",
          nameAr: "مصروفات التشغيل - ",
          nameEn: "",
          type: "expenses",
          typeAr: "مصروفات",
        },
        {
          code: "302",
          nameAr: "مصروفات الإدارة العامة",
          nameEn: "",
          type: "expenses",
          typeAr: "مصروفات",
        },
        {
          code: "302001",
          nameAr: "مصروفات عمومية و إدارية - وتسويقية ",
          nameEn: "",
          type: "expenses",
          typeAr: "مصروفات",
        },
        {
          code: "302001001",
          nameAr: "مصروفات  عمومية - أجور و مرتبات",
          nameEn: "",
          type: "expenses",
          typeAr: "مصروفات",
        },
        {
          code: "302001002",
          nameAr: "مصروفات عمومية - إيجار المقر",
          nameEn: "",
          type: "expenses",
          typeAr: "مصروفات",
        },
        {
          code: "302001003",
          nameAr: "مصروفات عمومية - اتصالات و انترنت ",
          nameEn: "",
          type: "expenses",
          typeAr: "مصروفات",
        },
        {
          code: "302001004",
          nameAr: "مصروفات عمومية - ادوات مكتبية وتصوير و أحبار",
          nameEn: "",
          type: "expenses",
          typeAr: "مصروفات",
        },
        {
          code: "302001005",
          nameAr: "مصروفات عمومية - مصاريف كمبيوتر ، وبرامج ",
          nameEn: "",
          type: "expenses",
          typeAr: "مصروفات",
        },
        {
          code: "302001006",
          nameAr: "مصروفات عمومية - بوفية و ضيافة",
          nameEn: "",
          type: "expenses",
          typeAr: "مصروفات",
        },
        {
          code: "302001007",
          nameAr: "مصروفات عمومية - مصاريف سيارات ",
          nameEn: "",
          type: "expenses",
          typeAr: "مصروفات",
        },
        {
          code: "302001008",
          nameAr: "مصروفات عمومية - كهرباء",
          nameEn: "",
          type: "expenses",
          typeAr: "مصروفات",
        },
        {
          code: "302001009",
          nameAr: "مصروفات عمومية - مستلزمات طبية ",
          nameEn: "",
          type: "expenses",
          typeAr: "مصروفات",
        },
        {
          code: "302001010",
          nameAr: "مصروفات عمومية - أتعاب محاماه ",
          nameEn: "",
          type: "expenses",
          typeAr: "مصروفات",
        },
        {
          code: "302001011",
          nameAr: "مصروفات عمومية - مصروفات وعمولات بنكية",
          nameEn: "",
          type: "expenses",
          typeAr: "مصروفات",
        },
        {
          code: "302001012",
          nameAr: "مصروفات عمومية - ",
          nameEn: "",
          type: "expenses",
          typeAr: "مصروفات",
        },
        {
          code: "302001013",
          nameAr: "مصروفات عمومية - تأمينات اجتماعية",
          nameEn: "",
          type: "expenses",
          typeAr: "مصروفات",
        },
        {
          code: "302001014",
          nameAr: "مصروفات عمومية - مراقبين حسابات",
          nameEn: "",
          type: "expenses",
          typeAr: "مصروفات",
        },
        {
          code: "302001015",
          nameAr: "مصروفات عمومية - انتقالات",
          nameEn: "",
          type: "expenses",
          typeAr: "مصروفات",
        },
        {
          code: "302001016",
          nameAr: "مصروفات عمومية - إكراميات ",
          nameEn: "",
          type: "expenses",
          typeAr: "مصروفات",
        },
        {
          code: "302001017",
          nameAr: "مصروفات عمومية - مصاريف إدارية متنوعة",
          nameEn: "",
          type: "expenses",
          typeAr: "مصروفات",
        },
        {
          code: "302001018",
          nameAr: "مصروفات عمومية - دعاية و إعلان",
          nameEn: "",
          type: "expenses",
          typeAr: "مصروفات",
        },
        {
          code: "302001019",
          nameAr: "مصروفات عمومية - مصروف اهلاك الاصول الثابتة",
          nameEn: "",
          type: "expenses",
          typeAr: "مصروفات",
        },
        {
          code: "302001020",
          nameAr: "مصروفات عمومية - رسوم - دمغات - غرامات",
          nameEn: "",
          type: "expenses",
          typeAr: "مصروفات",
        },
        {
          code: "302001021",
          nameAr: "مصروفات عمومية - رسوم طريق ",
          nameEn: "",
          type: "expenses",
          typeAr: "مصروفات",
        },
        {
          code: "302001022",
          nameAr: "مصروفات عمومية - مصروفات بريدية",
          nameEn: "",
          type: "expenses",
          typeAr: "مصروفات",
        },
        {
          code: "302001023",
          nameAr: "مصروفات عمومية - ",
          nameEn: "",
          type: "expenses",
          typeAr: "مصروفات",
        },
        {
          code: "302001024",
          nameAr: "مصروفات عمومية - استشارات و خدمات تأمينية",
          nameEn: "",
          type: "expenses",
          typeAr: "مصروفات",
        },
        {
          code: "302001025",
          nameAr: "مصروفات عمومية -  حوافز و مكافأت ",
          nameEn: "",
          type: "expenses",
          typeAr: "مصروفات",
        },
        {
          code: "302001026",
          nameAr: "مصروفات عمومية -  مصروفات سفر",
          nameEn: "",
          type: "expenses",
          typeAr: "مصروفات",
        },
        {
          code: "302001027",
          nameAr: "مصروفات عمومية - مصاريف صيانة و نظافة ",
          nameEn: "",
          type: "expenses",
          typeAr: "مصروفات",
        },
        {
          code: "302001028",
          nameAr: "مصروفات عمومية - مساهمة تكافلية - تأمين صحى ",
          nameEn: "",
          type: "expenses",
          typeAr: "مصروفات",
        },
        {
          code: "302001029",
          nameAr: "مصروفات عمومية -",
          nameEn: "",
          type: "expenses",
          typeAr: "مصروفات",
        },
        {
          code: "302001030",
          nameAr: "مصروفات عمومية - ",
          nameEn: "",
          type: "expenses",
          typeAr: "مصروفات",
        },
        {
          code: "302001031",
          nameAr: "مصروفات عمومية - ",
          nameEn: "",
          type: "expenses",
          typeAr: "مصروفات",
        },
        {
          code: "302001032",
          nameAr: "مصروفات عمومية - ",
          nameEn: "",
          type: "expenses",
          typeAr: "مصروفات",
        },
        {
          code: "302001033",
          nameAr: "مصروفات عمومية - ",
          nameEn: "",
          type: "expenses",
          typeAr: "مصروفات",
        },
        {
          code: "302001034",
          nameAr: "مصروفات عمومية - ",
          nameEn: "",
          type: "expenses",
          typeAr: "مصروفات",
        },
        {
          code: "302001035",
          nameAr: "مصروفات عمومية - ",
          nameEn: "",
          type: "expenses",
          typeAr: "مصروفات",
        },
        {
          code: "302001036",
          nameAr: "مصروفات عمومية - ",
          nameEn: "",
          type: "expenses",
          typeAr: "مصروفات",
        },
        {
          code: "302001037",
          nameAr: "مصروفات عمومية - ",
          nameEn: "",
          type: "expenses",
          typeAr: "مصروفات",
        },
        {
          code: "302001038",
          nameAr: "مصروفات عمومية - ",
          nameEn: "",
          type: "expenses",
          typeAr: "مصروفات",
        },
        {
          code: "302001039",
          nameAr: "مصروفات عمومية - ",
          nameEn: "",
          type: "expenses",
          typeAr: "مصروفات",
        },
        {
          code: "302001040",
          nameAr: "مصروفات عمومية - ",
          nameEn: "",
          type: "expenses",
          typeAr: "مصروفات",
        },

        // ===== 4: الإيرادات (Revenues) =====
        {
          code: "401",
          nameAr: "إيرادات مباشرة",
          nameEn: "",
          type: "revenues",
          typeAr: "إيرادات",
        },
        {
          code: "401001",
          nameAr: "إيرادات المشاريع",
          nameEn: "",
          type: "revenues",
          typeAr: "إيرادات",
        },
        {
          code: "401001001",
          nameAr: "إيرادات - مبيعات تمور خام ",
          nameEn: "",
          type: "revenues",
          typeAr: "إيرادات",
        },
        {
          code: "401001002",
          nameAr: "إيرادات - مبيعات  تمود جاهزة للبيع ",
          nameEn: "",
          type: "revenues",
          typeAr: "إيرادات",
        },
        {
          code: "401001003",
          nameAr: "إيرادات -",
          nameEn: "",
          type: "revenues",
          typeAr: "إيرادات",
        },
        {
          code: "401001004",
          nameAr: "إيرادات -",
          nameEn: "",
          type: "revenues",
          typeAr: "إيرادات",
        },
        {
          code: "401001005",
          nameAr: "إيرادات -",
          nameEn: "",
          type: "revenues",
          typeAr: "إيرادات",
        },
        {
          code: "401001006",
          nameAr: "إيرادات -",
          nameEn: "",
          type: "revenues",
          typeAr: "إيرادات",
        },
        {
          code: "401001007",
          nameAr: "إيرادات -",
          nameEn: "",
          type: "revenues",
          typeAr: "إيرادات",
        },
        {
          code: "401001008",
          nameAr: "إيرادات -",
          nameEn: "",
          type: "revenues",
          typeAr: "إيرادات",
        },
        {
          code: "401001009",
          nameAr: "إيرادات -",
          nameEn: "",
          type: "revenues",
          typeAr: "إيرادات",
        },
        {
          code: "401001010",
          nameAr: "إيرادات -",
          nameEn: "",
          type: "revenues",
          typeAr: "إيرادات",
        },
        {
          code: "401001011",
          nameAr: "إيرادات -",
          nameEn: "",
          type: "revenues",
          typeAr: "إيرادات",
        },
        {
          code: "401001012",
          nameAr: "إيرادات -",
          nameEn: "",
          type: "revenues",
          typeAr: "إيرادات",
        },
        {
          code: "401001013",
          nameAr: "إيرادات -",
          nameEn: "",
          type: "revenues",
          typeAr: "إيرادات",
        },
        {
          code: "401001014",
          nameAr: "إيرادات -",
          nameEn: "",
          type: "revenues",
          typeAr: "إيرادات",
        },
        {
          code: "401001015",
          nameAr: "إيرادات -",
          nameEn: "",
          type: "revenues",
          typeAr: "إيرادات",
        },
        {
          code: "401001016",
          nameAr: "إيرادات -",
          nameEn: "",
          type: "revenues",
          typeAr: "إيرادات",
        },
        {
          code: "401001017",
          nameAr: "إيرادات -",
          nameEn: "",
          type: "revenues",
          typeAr: "إيرادات",
        },
        {
          code: "401001018",
          nameAr: "إيرادات -",
          nameEn: "",
          type: "revenues",
          typeAr: "إيرادات",
        },
        {
          code: "401001019",
          nameAr: "إيرادات -",
          nameEn: "",
          type: "revenues",
          typeAr: "إيرادات",
        },
        {
          code: "401001020",
          nameAr: "إيرادات -",
          nameEn: "",
          type: "revenues",
          typeAr: "إيرادات",
        },
        {
          code: "402",
          nameAr: "الإيرادات غير مباشرة",
          nameEn: "",
          type: "revenues",
          typeAr: "إيرادات",
        },
        {
          code: "402001",
          nameAr: "إيرادات غير مباشرة",
          nameEn: "",
          type: "revenues",
          typeAr: "إيرادات",
        },
        {
          code: "402001001",
          nameAr: "إيرادات غير مباشرة - فوائد بنكية ",
          nameEn: "",
          type: "revenues",
          typeAr: "إيرادات",
        },
        {
          code: "402001002",
          nameAr: "إيرادات غير مباشرة - خصم مكتسب",
          nameEn: "",
          type: "revenues",
          typeAr: "إيرادات",
        },
        {
          code: "402001003",
          nameAr: "إيرادات غير مباشرة - ارباح وخسائر تقيم عملة",
          nameEn: "",
          type: "revenues",
          typeAr: "إيرادات",
        },
        {
          code: "402001004",
          nameAr: "إيرادات غير مباشرة -  فوائد مكتسبة ",
          nameEn: "",
          type: "revenues",
          typeAr: "إيرادات",
        },
        {
          code: "402001005",
          nameAr: "إيرادات غير مباشرة - ",
          nameEn: "",
          type: "revenues",
          typeAr: "إيرادات",
        },
        {
          code: "402001006",
          nameAr: "إيرادات غير مباشرة - ",
          nameEn: "",
          type: "revenues",
          typeAr: "إيرادات",
        },
        {
          code: "402001007",
          nameAr: "إيرادات غير مباشرة - ",
          nameEn: "",
          type: "revenues",
          typeAr: "إيرادات",
        },
        {
          code: "402001008",
          nameAr: "إيرادات غير مباشرة - ",
          nameEn: "",
          type: "revenues",
          typeAr: "إيرادات",
        },
        {
          code: "402001009",
          nameAr: "إيرادات غير مباشرة - ",
          nameEn: "",
          type: "revenues",
          typeAr: "إيرادات",
        },
        {
          code: "402001010",
          nameAr: "إيرادات غير مباشرة - ",
          nameEn: "",
          type: "revenues",
          typeAr: "إيرادات",
        },
      ];

// ==========================================
// STATE MANAGEMENT
// ==========================================
let STATE = {
  entries: [],
  beginningBalances: {},
  chartOfAccounts: []
};

function loadState() {
  try {
    const saved = localStorage.getItem("accounting_system_data");
    if (saved) {
      STATE = JSON.parse(saved);
      if (!STATE.beginningBalances) STATE.beginningBalances = {};
      if (!STATE.entries) STATE.entries = [];
      if (!STATE.chartOfAccounts || STATE.chartOfAccounts.length === 0) {
        STATE.chartOfAccounts = [...DEFAULT_COA];
        saveState();
      }
    } else {
      // First time init
      STATE.chartOfAccounts = [...DEFAULT_COA];
      saveState();
    }
  } catch (e) {
    console.error("Error loading state:", e);
    STATE.chartOfAccounts = [...DEFAULT_COA];
  }
}

function saveState() {
  try {
    localStorage.setItem("accounting_system_data", JSON.stringify(STATE));
  } catch (e) {
    showToast("خطأ في حفظ البيانات! Error saving data", "error");
  }
}

// ==========================================
// UTILITY FUNCTIONS
// ==========================================
function formatNumber(num) {
  if (num === 0 || num === undefined || num === null) return "-";
  return new Intl.NumberFormat("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(num);
}

function formatNumberAlways(num) {
  return new Intl.NumberFormat("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(num || 0);
}

function getAccountByCode(code) {
  return STATE.chartOfAccounts.find((a) => a.code === code);
}

function getAccountType(code) {
  if (!code) return "";
  const first = code.charAt(0);
  switch (first) {
    case "1": return "أصول Assets";
    case "2": return "خصوم/ملكية Liab./Equity";
    case "3": return "مصروفات Expenses";
    case "4": return "إيرادات Revenues";
    default: return "";
  }
}

function getAccountClassification(code) {
  if (!code) return "";
  const first = code.charAt(0);
  switch (first) {
    case "1": return "assets";
    case "2": return "liabilities";
    case "3": return "expenses";
    case "4": return "revenues";
    default: return "";
  }
}

function getNextJournalNo() {
  if (STATE.entries.length === 0) return 1;
  const maxNo = Math.max(...STATE.entries.map((e) => e.journalNo));
  return maxNo + 1;
}

function showToast(message, type = "info") {
  const container = document.getElementById("toastContainer");
  if(!container) return;
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  const icons = { success: "✅", error: "❌", info: "ℹ️" };
  toast.innerHTML = `<span>${icons[type] || ""}</span><span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.animation = "slideOut 0.3s ease forwards";
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}


// ==========================================
// CHART OF ACCOUNTS (Dynamic adding/deleting)
// ==========================================
function renderCOA() {
  const tbody = document.getElementById("coaTableBody");
  if(!tbody) return;
  
  const searchTerm = (document.getElementById("coaSearch")?.value || "").toLowerCase();

  let filtered = STATE.chartOfAccounts;
  if (searchTerm) {
    filtered = STATE.chartOfAccounts.filter(
      (a) => a.code.includes(searchTerm) || a.nameAr.includes(searchTerm) || (a.nameEn && a.nameEn.toLowerCase().includes(searchTerm))
    );
  }

  // Sort by code purely numerical if possible
  filtered.sort((a,b) => a.code.localeCompare(b.code, undefined, {numeric: true}));

  let html = "";
  filtered.forEach((acc) => {
    const typeClass = "coa-type-" + acc.code.charAt(0);
    html += `<tr>
          <td class="coa-code">${acc.code}</td>
          <td style="text-align:right; font-weight: 600;">${acc.nameAr} <span style="font-size:0.7rem;color:var(--text-muted);">${acc.nameEn || ''}</span></td>
          <td><span class="coa-type-badge ${typeClass}">${acc.typeAr}</span></td>
          <td style="color:var(--text-secondary); font-size:0.8rem;">${acc.classification || getAccountType(acc.code)}</td>
          <td style="display:flex; gap:6px; justify-content:center;">
            <button class="btn btn-ghost" style="padding:4px 8px; font-size:0.75rem;" onclick="editAccountName('${acc.code}')">تعديل ✏️</button>
            <button class="btn btn-ghost" style="padding:4px 8px; font-size:0.75rem;" onclick="editBeginningBalance('${acc.code}')">رصيد 💰</button>
            <button class="btn btn-danger" style="padding:4px 8px; font-size:0.75rem;" onclick="deleteAccount('${acc.code}')">حذف 🗑️</button>
          </td>
      </tr>`;
  });
  tbody.innerHTML = html;

  document.getElementById("coaCountAssets").textContent = STATE.chartOfAccounts.filter((a) => a.code.startsWith("1")).length;
  document.getElementById("coaCountLiabilities").textContent = STATE.chartOfAccounts.filter((a) => a.code.startsWith("2")).length;
  document.getElementById("coaCountExpenses").textContent = STATE.chartOfAccounts.filter((a) => a.code.startsWith("3")).length;
  document.getElementById("coaCountRevenues").textContent = STATE.chartOfAccounts.filter((a) => a.code.startsWith("4")).length;

  const mainDropdown = document.getElementById("mainAccCode");
  if (mainDropdown) {
    const mainCodes = ["101","102","103","104","105","201","202","203","301","302","401","402"];
    const currentVal = mainDropdown.value;
    const optionsHtml = mainCodes.map(code => {
        const acc = getAccountByCode(code);
        const name = acc ? acc.nameAr : code;
        return `<option value="${code}">${code} - ${name}</option>`;
    }).join("");
    mainDropdown.innerHTML = optionsHtml;
    
    if (currentVal && mainCodes.includes(currentVal)) {
        mainDropdown.value = currentVal;
    } else if (mainCodes.length > 0) {
        mainDropdown.value = mainCodes[0];
    }
  }

  // Populate Type and Classification dropdowns based on existing rows
  const uniqueTypes = new Set();
  const uniqueClasses = new Set();
  STATE.chartOfAccounts.forEach(acc => {
      if(acc.typeAr) uniqueTypes.add(acc.typeAr);
      const cls = acc.classification || getAccountType(acc.code);
      if(cls) uniqueClasses.add(cls);
  });
  
  const typeDropdown = document.getElementById("newAccType");
  if(typeDropdown) {
      const curTypeVal = typeDropdown.value;
      typeDropdown.innerHTML = Array.from(uniqueTypes).map(t => `<option value="${t}">${t}</option>`).join("");
      if(curTypeVal && uniqueTypes.has(curTypeVal)) typeDropdown.value = curTypeVal;
  }
  
  const classDropdown = document.getElementById("newAccClass");
  if(classDropdown) {
      const curClassVal = classDropdown.value;
      classDropdown.innerHTML = Array.from(uniqueClasses).map(c => `<option value="${c}">${c}</option>`).join("");
      if(curClassVal && uniqueClasses.has(curClassVal)) classDropdown.value = curClassVal;
  }
}

function filterCOA() { renderCOA(); }

function generateNextCode(mainCode) {
  if (!mainCode) return "";
  const expectedChildLength = mainCode.length + 3;
  const children = STATE.chartOfAccounts.filter((a) => a.code.startsWith(mainCode) && a.code.length === expectedChildLength);
  
  if (children.length === 0) {
    return mainCode + "001";
  }
  
  let max = 0;
  children.forEach((a) => {
    const sub = a.code.substring(mainCode.length);
    const num = parseInt(sub);
    if (!isNaN(num) && num > max) max = num;
  });
  
  return mainCode + (max + 1).toString().padStart(3, "0");
}

function addAccount() {
  loadState(); // Ensure we have latest state before saving

  const mainDropdown = document.getElementById("mainAccCode");
  const mainCode = mainDropdown ? mainDropdown.value : "";
  
  const legacyCodeInput = document.getElementById("newAccCode");
  let code = "";
  if (legacyCodeInput && legacyCodeInput.value.trim()) {
    code = legacyCodeInput.value.trim();
  } else if (mainCode) {
    code = generateNextCode(mainCode);
  }
  
  const nameAr = document.getElementById("newAccNameAr").value.trim();
  const customType = document.getElementById("newAccType") ? document.getElementById("newAccType").value : "فرعي";
  const customClass = document.getElementById("newAccClass") ? document.getElementById("newAccClass").value : "";
  
  if(!code || !nameAr) {
    showToast("يرجى اختيار الحساب الرئيسي وإدخال اسم الحساب العربي", "error");
    return;
  }

  // Determine classification from first digit for 'type'
  const firstDigit = code.charAt(0);
  let type = "other";
  
  if(firstDigit === "1") { type="assets"; }
  else if(firstDigit === "2") { type="liabilities"; }
  else if(firstDigit === "3") { type="expenses"; }
  else if(firstDigit === "4") { type="revenues"; }
  else {
      showToast("يجب أن يبدأ الكود بـ 1 أو 2 أو 3 أو 4", "error");
      return;
  }

  // Set the visual badge TypeAr directly from the dropdown
  let typeAr = customType;

  // Check if exists
  if(getAccountByCode(code)) {
    showToast("كود الحساب موجود بالفعل!", "error");
    return;
  }

  const newAcc = { code, nameAr, nameEn: "", type, typeAr, classification: customClass };
  STATE.chartOfAccounts.push(newAcc);
  
  const beginDr = parseFloat(document.getElementById("newAccBeginDr")?.value) || 0;
  const beginCr = parseFloat(document.getElementById("newAccBeginCr")?.value) || 0;

  if (beginDr > 0 || beginCr > 0) {
    if (!STATE.beginningBalances) STATE.beginningBalances = {};
    STATE.beginningBalances[code] = { dr: beginDr, cr: beginCr };
  }
  
  saveState();
  
  if (document.getElementById("newAccCode")) document.getElementById("newAccCode").value = "";
  document.getElementById("newAccNameAr").value = "";
  if (document.getElementById("newAccNameEn")) document.getElementById("newAccNameEn").value = "";
  if (document.getElementById("newAccClass")) document.getElementById("newAccClass").value = "";
  if (document.getElementById("newAccBeginDr")) document.getElementById("newAccBeginDr").value = "";
  if (document.getElementById("newAccBeginCr")) document.getElementById("newAccBeginCr").value = "";
  
  showToast("تمت إضافة الحساب بنجاح", "success");
  renderCOA();
}

function deleteAccount(code) {
  loadState(); // Ensure we have latest state before deleting

  // Check if account is used in any entry
  const isUsed = STATE.entries.some(entry => entry.lines.some(line => line.code === code));
  
  if(isUsed) {
    showToast("لا يمكن حذف الحساب لأنه مستخدم في قيود يومية!", "error");
    return;
  }

  // Check if account is a parent with children
  const hasChildren = STATE.chartOfAccounts.some((a) => a.code.startsWith(code) && a.code !== code);
  if(hasChildren) {
    showToast("لا يمكن حذف هذا الحساب لوجود حسابات فرعية تحته!", "error");
    return;
  }

  if(confirm("هل أنت متأكد من حذف هذا الحساب؟")) {
    STATE.chartOfAccounts = STATE.chartOfAccounts.filter(a => a.code !== code);
    saveState();
    showToast("تم حذف الحساب بنجاح", "success");
    renderCOA();
  }
}

function editAccountName(code) {
  loadState(); // Ensure we have the latest state
  const acc = STATE.chartOfAccounts.find(a => a.code === code);
  if (!acc) return;
  
  const newName = prompt("تعديل اسم الحساب:", acc.nameAr);
  if (newName && newName.trim() !== "") {
    const updatedName = newName.trim();
    acc.nameAr = updatedName;
    
    // Also update this name in all historical journal entries to keep consistency
    STATE.entries.forEach(entry => {
        entry.lines.forEach(line => {
            if (line.code === code) {
                line.accountName = updatedName;
            }
        });
    });
    
    saveState();
    showToast("تم تعديل اسم الحساب بنجاح", "success");
    renderCOA();
  }
}

function editBeginningBalance(code) {
  loadState();
  const acc = STATE.chartOfAccounts.find(a => a.code === code);
  if (!acc) return;
  
  const currentBal = STATE.beginningBalances[code] || { dr: 0, cr: 0 };
  
  const drStr = prompt(`تعديل الرصيد الافتتاحي المدين (Dr) لحساب: ${acc.nameAr}`, currentBal.dr);
  if (drStr === null) return;
  
  const crStr = prompt(`تعديل الرصيد الافتتاحي الدائن (Cr) لحساب: ${acc.nameAr}`, currentBal.cr);
  if (crStr === null) return;

  const dr = parseFloat(drStr) || 0;
  const cr = parseFloat(crStr) || 0;

  if (dr > 0 || cr > 0) {
    if (!STATE.beginningBalances) STATE.beginningBalances = {};
    STATE.beginningBalances[code] = { dr, cr };
  } else {
    if (STATE.beginningBalances && STATE.beginningBalances[code]) {
      delete STATE.beginningBalances[code];
    }
  }

  saveState();
  showToast("تم تحديث الرصيد الافتتاحي بنجاح", "success");
  renderCOA();
}

// ==========================================
// JOURNAL ENTRY
// ==========================================
let entryRows = [];
let entryRowId = 0;

function initEntryPage() {
  const jnInput = document.getElementById("journalNo");
  if (!jnInput) return; // not on entry page
  
  if (!jnInput.value) jnInput.value = getNextJournalNo();
  const dateInput = document.getElementById("entryDate");
  if (!dateInput.value) dateInput.value = new Date().toISOString().split("T")[0];

  if (entryRows.length === 0) {
    addEntryRow(); addEntryRow();
  }
}

function addEntryRow() {
  entryRowId++;
  const id = entryRowId;
  entryRows.push(id);

  const container = document.getElementById("entryRowsContainer");
  if(!container) return;
  
  const row = document.createElement("div");
  row.className = "entry-row";
  row.id = "entry-row-" + id;

  const date = document.getElementById("entryDate")?.value || "";
  const jn = document.getElementById("journalNo")?.value || "";
  const cc = document.getElementById("costCentre")?.value || "";
  const expl = document.getElementById("entryExplanation")?.value || "";

  row.innerHTML = `
      <input type="date" value="${date}" class="row-date" readonly style="font-size:0.75rem; background:#fafafa; border-color:#e5e5e5; color:#a3a3a3;">
      <div style="position:relative;">
          <input type="text" class="row-code" placeholder="الكود" oninput="onCodeInput(${id}, this)" onfocus="onCodeFocus(${id}, this)" onblur="setTimeout(()=>hideDropdown(${id}), 200)">
          <div class="search-dropdown" id="dropdown-${id}"></div>
      </div>
      <input type="text" class="row-account-name" placeholder="اسم الحساب" readonly style="background:#fafafa; border-color:#e5e5e5;">
      <input type="number" class="row-dr" placeholder="مدين" min="0" step="0.01" oninput="onAmountChange(${id})">
      <input type="number" class="row-cr" placeholder="دائن" min="0" step="0.01" oninput="onAmountChange(${id})">
      <input type="text" value="${jn}" class="row-jn" readonly style="font-size:0.75rem;text-align:center; background:#fafafa; border-color:#e5e5e5; color:#a3a3a3;">
      <input type="text" value="${expl}" class="row-explanation" placeholder="البيان">
      <input type="text" value="${cc}" class="row-cc" placeholder="مركز التكلفة">
      <input type="text" class="row-type" readonly style="font-size:0.75rem; background:#fafafa; border-color:#e5e5e5; color:#a3a3a3;">
      <input type="number" class="row-numerical" placeholder="#" readonly style="font-size:0.75rem;text-align:center; background:#fafafa; border-color:#e5e5e5; color:#a3a3a3;">
      <button class="remove-row-btn" onclick="removeEntryRow(${id})" title="حذف">✕</button>
  `;
  container.appendChild(row);
  updateRowNumbers();
}

function removeEntryRow(id) {
  const row = document.getElementById("entry-row-" + id);
  if (row) {
    row.style.animation = "slideOut 0.2s ease";
    setTimeout(() => {
      row.remove();
      entryRows = entryRows.filter((r) => r !== id);
      updateRowNumbers();
      updateBalanceCheck();
    }, 200);
  }
}

function updateRowNumbers() {
  const container = document.getElementById("entryRowsContainer");
  if(!container) return;
  const rows = container.querySelectorAll(".entry-row");
  rows.forEach((row, i) => {
    const numInput = row.querySelector(".row-numerical");
    if (numInput) numInput.value = i + 1;
  });
}

function onCodeInput(id, input) {
  const code = input.value.trim();
  const dropdown = document.getElementById("dropdown-" + id);
  const row = document.getElementById("entry-row-" + id);

  if (code.length === 0) {
    dropdown.classList.remove("show");
    row.querySelector(".row-account-name").value = "";
    row.querySelector(".row-type").value = "";
    return;
  }

  const matches = STATE.chartOfAccounts.filter((a) => a.code.includes(code) || a.nameAr.includes(code)).slice(0, 8);
  if (matches.length > 0) {
    dropdown.innerHTML = matches.map((a) => `
          <div class="search-dropdown-item" onmousedown="selectAccount(${id}, '${a.code}')">
              <span style="font-weight:600;">${a.nameAr}</span>
              <span class="code">${a.code}</span>
          </div>
      `).join("");
    dropdown.classList.add("show");
  } else {
    dropdown.classList.remove("show");
  }

  const exact = getAccountByCode(code);
  if (exact) {
    row.querySelector(".row-account-name").value = exact.nameAr + (exact.nameEn ? " " + exact.nameEn : "");
    row.querySelector(".row-type").value = getAccountType(code);
    dropdown.classList.remove("show");
  }
}

function onCodeFocus(id, input) {
  if (input.value.trim()) onCodeInput(id, input);
}

function hideDropdown(id) {
  const dropdown = document.getElementById("dropdown-" + id);
  if (dropdown) dropdown.classList.remove("show");
}

function selectAccount(id, code) {
  const row = document.getElementById("entry-row-" + id);
  const acc = getAccountByCode(code);
  if (acc && row) {
    row.querySelector(".row-code").value = code;
    row.querySelector(".row-account-name").value = acc.nameAr + (acc.nameEn ? " " + acc.nameEn : "");
    row.querySelector(".row-type").value = getAccountType(code);
  }
  hideDropdown(id);
}

function onAmountChange(id) { updateBalanceCheck(); }

function updateBalanceCheck() {
  const container = document.getElementById("entryRowsContainer");
  if(!container) return;
  const rows = container.querySelectorAll(".entry-row");
  let totalDr = 0, totalCr = 0;

  rows.forEach((row) => {
    totalDr += parseFloat(row.querySelector(".row-dr")?.value) || 0;
    totalCr += parseFloat(row.querySelector(".row-cr")?.value) || 0;
  });

  const balanceEl = document.getElementById("balanceCheck");
  const saveBtn = document.getElementById("saveEntryBtn");
  const isBalanced = Math.abs(totalDr - totalCr) < 0.005 && totalDr > 0;

  if (isBalanced) {
    balanceEl.className = "balance-display balanced";
    balanceEl.innerHTML = `<span>✅</span><span>متوازن Balanced</span><span class="money" style="margin-right:auto;">Dr: ${formatNumberAlways(totalDr)} | Cr: ${formatNumberAlways(totalCr)}</span>`;
    if(saveBtn) saveBtn.disabled = false;
  } else {
    balanceEl.className = "balance-display unbalanced";
    const diff = Math.abs(totalDr - totalCr);
    balanceEl.innerHTML = `<span>❌</span><span>غير متوازن Unbalanced (الفرق Diff: ${formatNumberAlways(diff)})</span><span class="money" style="margin-right:auto;">Dr: ${formatNumberAlways(totalDr)} | Cr: ${formatNumberAlways(totalCr)}</span>`;
    if(saveBtn) saveBtn.disabled = true;
  }
}

function saveEntry() {
  loadState(); // Ensure we have the latest state before saving to prevent overwrites
  
  const journalNo = parseInt(document.getElementById("journalNo").value);
  const date = document.getElementById("entryDate").value;
  const costCentre = document.getElementById("costCentre").value || "عام";
  const explanation = document.getElementById("entryExplanation").value;

  if (!journalNo || !date) { showToast("يرجى ملء رقم القيد والتاريخ", "error"); return; }
  if (STATE.entries.find((e) => e.journalNo === journalNo)) { showToast(`رقم القيد ${journalNo} موجود بالفعل!`, "error"); return; }

  const container = document.getElementById("entryRowsContainer");
  const rows = container.querySelectorAll(".entry-row");
  const lines = [];
  let totalDr = 0, totalCr = 0;

  for (const row of rows) {
    const code = row.querySelector(".row-code")?.value?.trim();
    const accountName = row.querySelector(".row-account-name")?.value?.trim();
    const dr = parseFloat(row.querySelector(".row-dr")?.value) || 0;
    const cr = parseFloat(row.querySelector(".row-cr")?.value) || 0;
    const lineExplanation = row.querySelector(".row-explanation")?.value || explanation;
    const lineCc = row.querySelector(".row-cc")?.value || costCentre;
    const lineType = row.querySelector(".row-type")?.value || "";

    if (!code) { showToast("يرجى ملء كود الحساب لجميع السطور", "error"); return; }
    if (dr === 0 && cr === 0) { showToast("يجب إدخال مبلغ مدين أو دائن لكل سطر", "error"); return; }
    if (dr < 0 || cr < 0) { showToast("لا يمكن إدخال قيم سالبة في المدين أو الدائن", "error"); return; }

    totalDr += dr; totalCr += cr;
    lines.push({ code, accountName, dr, cr, explanation: lineExplanation, costCentre: lineCc, type: lineType });
  }

  if (Math.abs(totalDr - totalCr) > 0.005) { showToast("القيد غير متوازن! مجموع المدين لا يساوي مجموع الدائن", "error"); return; }

  STATE.entries.push({ journalNo, date, costCentre, explanation, lines, totalDr, totalCr, savedAt: new Date().toISOString() });
  saveState();
  showToast(`تم حفظ القيد رقم ${journalNo} بنجاح ✓`, "success");
  clearEntry();
  document.getElementById("journalNo").value = getNextJournalNo();
}

function clearEntry() {
  entryRows = []; entryRowId = 0;
  const container = document.getElementById("entryRowsContainer");
  if(container) container.innerHTML = "";
  
  if(document.getElementById("entryExplanation")) document.getElementById("entryExplanation").value = "";
  if(document.getElementById("costCentre")) document.getElementById("costCentre").value = "";
  addEntryRow(); addEntryRow();
  updateBalanceCheck();
}

// ==========================================
// SAVED ENTRIES
// ==========================================
function renderSavedEntries() {
  const container = document.getElementById("savedEntriesContainer");
  if(!container) return;
  const searchTerm = (document.getElementById("searchEntries")?.value || "").toLowerCase();

  let entries = [...STATE.entries].reverse();
  if (searchTerm) {
    entries = entries.filter((e) => e.journalNo.toString().includes(searchTerm) || (e.explanation || "").toLowerCase().includes(searchTerm) || e.lines.some((l) => l.accountName?.toLowerCase().includes(searchTerm) || l.code?.includes(searchTerm)));
  }

  if (entries.length === 0) {
    container.innerHTML = `
          <div class="glass-card" style="padding:60px;text-align:center;">
              <span style="font-size:3rem; opacity:0.5;">📭</span>
              <p style="color:var(--text-secondary);font-weight:700;font-size:1.1rem;margin-top:16px;">لا توجد قيود محفوظة بعد</p>
              <p style="color:var(--text-muted);font-size:0.85rem;font-family:'JetBrains Mono',monospace;">No saved entries yet</p>
          </div>`;
    return;
  }

  let html = "";
  entries.forEach((entry) => {
    html += `<div class="glass-card" style="padding:0;margin-bottom:16px;overflow:hidden;">
          <div style="padding:16px 24px;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid var(--border-light);background:#fafafa;">
              <div style="display:flex;align-items:center;gap:16px;">
                  <span style="font-family:'JetBrains Mono',monospace;font-weight:800;color:var(--accent-primary);font-size:1.1rem;">#${entry.journalNo}</span>
                  <span style="color:var(--text-muted);font-size:0.85rem;font-weight:600;">${entry.date}</span>
                  <span style="color:var(--text-secondary);font-size:0.9rem;font-weight:600;">${entry.explanation || ""}</span>
              </div>
              <div style="display:flex;align-items:center;gap:16px;">
                  <span class="money" style="color:var(--success);font-size:0.9rem;">Dr: ${formatNumberAlways(entry.totalDr)}</span>
                  <span class="money" style="color:var(--danger);font-size:0.9rem;">Cr: ${formatNumberAlways(entry.totalCr)}</span>
                  <button class="btn btn-danger" style="padding:8px 12px;font-size:0.8rem;" onclick="deleteEntry(${entry.journalNo})">حذف 🗑️</button>
              </div>
          </div>
          <table style="width:100%;font-size:0.85rem;">
              <thead>
                  <tr><th style="padding:10px;">الكود</th><th style="padding:10px;">اسم الحساب</th><th style="padding:10px;">مدين Dr</th><th style="padding:10px;">دائن Cr</th><th style="padding:10px;">مركز التكلفة</th></tr>
              </thead>
              <tbody>`;

    entry.lines.forEach((line) => {
      html += `<tr>
              <td style="padding:10px;font-family:'JetBrains Mono',monospace;font-weight:700;">${line.code}</td>
              <td style="padding:10px;text-align:right;">${line.accountName}</td>
              <td style="padding:10px;" class="money">${line.dr > 0 ? formatNumber(line.dr) : "-"}</td>
              <td style="padding:10px;" class="money">${line.cr > 0 ? formatNumber(line.cr) : "-"}</td>
              <td style="padding:10px;">${line.costCentre || ""}</td>
          </tr>`;
    });
    html += `</tbody></table></div>`;
  });
  container.innerHTML = html;
}

function deleteEntry(journalNo) {
  if (confirm(`هل تريد حذف القيد رقم ${journalNo}؟`)) {
    loadState(); // Ensure we have the latest state before deleting
    STATE.entries = STATE.entries.filter((e) => e.journalNo !== journalNo);
    saveState(); renderSavedEntries();
    showToast(`تم حذف القيد رقم ${journalNo}`, "info");
  }
}

// ==========================================
// TRIAL BALANCE
// ==========================================
function computeAccountBalances() {
  const balances = {};
  STATE.chartOfAccounts.forEach((acc) => {
    balances[acc.code] = { code: acc.code, nameAr: acc.nameAr, nameEn: acc.nameEn, type: acc.type, beginDr: 0, beginCr: 0, moveDr: 0, moveCr: 0 };
  });

  for (const code in STATE.beginningBalances) {
    if (balances[code]) { balances[code].beginDr = STATE.beginningBalances[code].dr || 0; balances[code].beginCr = STATE.beginningBalances[code].cr || 0; }
  }

  STATE.entries.forEach((entry) => {
    entry.lines.forEach((line) => {
      if (!balances[line.code]) {
        const acc = getAccountByCode(line.code);
        balances[line.code] = { code: line.code, nameAr: acc ? acc.nameAr : line.accountName, nameEn: acc ? acc.nameEn : "", type: getAccountClassification(line.code), beginDr: 0, beginCr: 0, moveDr: 0, moveCr: 0 };
      }
      balances[line.code].moveDr += line.dr || 0; balances[line.code].moveCr += line.cr || 0;
    });
  });

  for (const code in balances) {
    const b = balances[code];
    b.totalDr = b.beginDr + b.moveDr; b.totalCr = b.beginCr + b.moveCr;
    const net = b.totalDr - b.totalCr;
    if (net > 0) { b.balDr = net; b.balCr = 0; } else { b.balDr = 0; b.balCr = Math.abs(net); }
  }
  return balances;
}

function renderTrialBalance() {
  const balances = computeAccountBalances();
  const tbody = document.getElementById("trialBalanceBody");
  const tfoot = document.getElementById("trialBalanceFoot");
  if(!tbody) return;

  const activeAccounts = Object.values(balances).filter((b) => b.beginDr > 0 || b.beginCr > 0 || b.moveDr > 0 || b.moveCr > 0).sort((a, b) => a.code.localeCompare(b.code, undefined, {numeric: true}));

  let totals = { beginDr: 0, beginCr: 0, moveDr: 0, moveCr: 0, totalDr: 0, totalCr: 0, balDr: 0, balCr: 0 };
  let html = "";
  
  activeAccounts.forEach((acc) => {
    totals.beginDr += acc.beginDr; totals.beginCr += acc.beginCr; totals.moveDr += acc.moveDr; totals.moveCr += acc.moveCr;
    totals.totalDr += acc.totalDr; totals.totalCr += acc.totalCr; totals.balDr += acc.balDr; totals.balCr += acc.balCr;
    html += `<tr>
          <td style="font-family:'JetBrains Mono',monospace;font-weight:700;">${acc.code}</td>
          <td style="text-align:right; font-weight:600;">${acc.nameAr} <span style="font-size:0.7rem;color:var(--text-muted);">${acc.nameEn || ''}</span></td>
          <td class="money">${formatNumber(acc.beginDr)}</td><td class="money">${formatNumber(acc.beginCr)}</td>
          <td class="money">${formatNumber(acc.moveDr)}</td><td class="money">${formatNumber(acc.moveCr)}</td>
          <td class="money">${formatNumber(acc.totalDr)}</td><td class="money">${formatNumber(acc.totalCr)}</td>
          <td class="money" style="color:${acc.balDr > 0 ? "var(--success)" : "inherit"};">${formatNumber(acc.balDr)}</td>
          <td class="money" style="color:${acc.balCr > 0 ? "var(--danger)" : "inherit"};">${formatNumber(acc.balCr)}</td>
      </tr>`;
  });

  if (activeAccounts.length === 0) {
    html = `<tr><td colspan="10" style="padding:60px;text-align:center;color:var(--text-secondary);font-weight:700;">لا توجد حركات بعد - أضف قيود يومية أولاً</td></tr>`;
  }

  tbody.innerHTML = html;
  tfoot.innerHTML = `<tr>
      <td colspan="2" style="font-weight:800;text-align:center;">الإجمالي Total</td>
      <td class="money">${formatNumberAlways(totals.beginDr)}</td><td class="money">${formatNumberAlways(totals.beginCr)}</td>
      <td class="money">${formatNumberAlways(totals.moveDr)}</td><td class="money">${formatNumberAlways(totals.moveCr)}</td>
      <td class="money">${formatNumberAlways(totals.totalDr)}</td><td class="money">${formatNumberAlways(totals.totalCr)}</td>
      <td class="money">${formatNumberAlways(totals.balDr)}</td><td class="money">${formatNumberAlways(totals.balCr)}</td>
  </tr>`;
}

// ==========================================
// INCOME STATEMENT
// ==========================================
function renderIncomeStatement() {
  const balances = computeAccountBalances();
  const container = document.getElementById("incomeStatementContent");
  if(!container) return;

  const revenueAccounts = Object.values(balances).filter((b) => b.code.startsWith("4") && (b.totalDr > 0 || b.totalCr > 0)).sort((a, b) => a.code.localeCompare(b.code, undefined, {numeric: true}));
  const expenseAccounts = Object.values(balances).filter((b) => b.code.startsWith("3") && (b.totalDr > 0 || b.totalCr > 0)).sort((a, b) => a.code.localeCompare(b.code, undefined, {numeric: true}));

  let totalRevenues = 0, totalExpenses = 0;
  revenueAccounts.forEach((acc) => totalRevenues += acc.totalCr - acc.totalDr);
  expenseAccounts.forEach((acc) => totalExpenses += acc.totalDr - acc.totalCr);
  const netProfit = totalRevenues - totalExpenses;

  let html = `<div class="fs-section"><div class="fs-section-title">💰 الإيرادات Revenues</div>`;
  if (revenueAccounts.length === 0) html += `<div class="fs-row" style="color:var(--text-muted);justify-content:center;">لا توجد إيرادات بعد</div>`;
  else revenueAccounts.forEach((acc) => html += `<div class="fs-row"><span><span style="font-family:'JetBrains Mono',monospace;font-weight:700;font-size:0.8rem;margin-left:8px;">${acc.code}</span> ${acc.nameAr}</span><span class="money">${formatNumberAlways(acc.totalCr - acc.totalDr)}</span></div>`);
  html += `<div class="fs-row total"><span>إجمالي الإيرادات Total Revenues</span><span class="money">${formatNumberAlways(totalRevenues)}</span></div></div>`;

  html += `<div class="fs-section" style="margin-top: 24px;"><div class="fs-section-title">📉 المصروفات Expenses</div>`;
  if (expenseAccounts.length === 0) html += `<div class="fs-row" style="color:var(--text-muted);justify-content:center;">لا توجد مصروفات بعد</div>`;
  else expenseAccounts.forEach((acc) => html += `<div class="fs-row"><span><span style="font-family:'JetBrains Mono',monospace;font-weight:700;font-size:0.8rem;margin-left:8px;">${acc.code}</span> ${acc.nameAr}</span><span class="money">(${formatNumberAlways(acc.totalDr - acc.totalCr)})</span></div>`);
  html += `<div class="fs-row total"><span>إجمالي المصروفات Total Expenses</span><span class="money">(${formatNumberAlways(totalExpenses)})</span></div></div>`;

  html += `<div class="fs-row ${netProfit >= 0 ? "net-profit" : "net-loss"}">
      <span>${netProfit >= 0 ? "🎉 صافي الربح Net Profit" : "📛 صافي الخسارة Net Loss"}</span>
      <span class="money" style="font-size:1.2rem;">${formatNumberAlways(Math.abs(netProfit))}</span>
  </div>`;

  container.innerHTML = html;
}

// ==========================================
// BALANCE SHEET
// ==========================================
function renderBalanceSheet() {
  const balances = computeAccountBalances();
  const container = document.getElementById("balanceSheetContent");
  const equationDiv = document.getElementById("balanceSheetEquation");
  if(!container) return;

  let totalRevenues = 0, totalExpenses = 0;
  Object.values(balances).forEach((b) => {
    if (b.code.startsWith("4")) totalRevenues += b.totalCr - b.totalDr;
    if (b.code.startsWith("3")) totalExpenses += b.totalDr - b.totalCr;
  });
  const netProfit = totalRevenues - totalExpenses;

  const assetAccounts = Object.values(balances).filter((b) => b.code.startsWith("1") && (b.totalDr > 0 || b.totalCr > 0)).sort((a, b) => a.code.localeCompare(b.code, undefined, {numeric: true}));
  const liabEquityAccounts = Object.values(balances).filter((b) => b.code.startsWith("2") && (b.totalDr > 0 || b.totalCr > 0)).sort((a, b) => a.code.localeCompare(b.code, undefined, {numeric: true}));

  let totalAssets = 0, totalLiabEquity = 0;
  assetAccounts.forEach((acc) => totalAssets += acc.totalDr - acc.totalCr);
  liabEquityAccounts.forEach((acc) => totalLiabEquity += acc.totalCr - acc.totalDr);
  const totalRHS = totalLiabEquity + netProfit;

  let leftHtml = `<div><div class="fs-section"><div class="fs-section-title">🏛️ الأصول Assets</div>`;
  if (assetAccounts.length === 0) leftHtml += `<div class="fs-row" style="color:var(--text-muted);justify-content:center;">لا توجد أصول</div>`;
  else assetAccounts.forEach((acc) => leftHtml += `<div class="fs-row"><span><span style="font-family:'JetBrains Mono',monospace;font-weight:700;font-size:0.8rem;margin-left:8px;">${acc.code}</span> ${acc.nameAr}</span><span class="money">${formatNumberAlways(acc.totalDr - acc.totalCr)}</span></div>`);
  leftHtml += `<div class="fs-row total"><span>إجمالي الأصول Total Assets</span><span class="money">${formatNumberAlways(totalAssets)}</span></div></div></div>`;

  let rightHtml = `<div><div class="fs-section"><div class="fs-section-title">🏦 الخصوم وحقوق الملكية Liabilities & Equity</div>`;
  if (liabEquityAccounts.length === 0 && netProfit === 0) rightHtml += `<div class="fs-row" style="color:var(--text-muted);justify-content:center;">لا توجد خصوم</div>`;
  else liabEquityAccounts.forEach((acc) => rightHtml += `<div class="fs-row"><span><span style="font-family:'JetBrains Mono',monospace;font-weight:700;font-size:0.8rem;margin-left:8px;">${acc.code}</span> ${acc.nameAr}</span><span class="money">${formatNumberAlways(acc.totalCr - acc.totalDr)}</span></div>`);
  
  if (netProfit !== 0) rightHtml += `<div class="fs-row" style="color:${netProfit >= 0 ? "var(--success)" : "var(--danger)"}; font-weight:700;"><span>📊 ${netProfit >= 0 ? "صافي ربح الفترة" : "صافي خسارة الفترة"}</span><span class="money">${formatNumberAlways(netProfit)}</span></div>`;
  rightHtml += `<div class="fs-row total"><span>إجمالي الخصوم وحقوق الملكية + الربح</span><span class="money">${formatNumberAlways(totalRHS)}</span></div></div></div>`;

  container.innerHTML = leftHtml + rightHtml;
  const isBalanced = Math.abs(totalAssets - totalRHS) < 0.01;
  equationDiv.innerHTML = `<div class="balance-display ${isBalanced ? "balanced" : "unbalanced"}" style="justify-content:center;font-size:1.1rem;"><span>${isBalanced ? "✅" : "❌"}</span><span class="money">الأصول (${formatNumberAlways(totalAssets)}) ${isBalanced ? "=" : "≠"} الخصوم + حقوق الملكية + صافي الربح (${formatNumberAlways(totalRHS)})</span></div>`;
}

// ==========================================
// DASHBOARD
// ==========================================
function renderDashboard() {
  const container = document.getElementById("dashboardStats");
  if(!container) return; // not on dashboard page

  const balances = computeAccountBalances();
  let totalRevenues = 0, totalExpenses = 0, totalAssets = 0, totalLiab = 0;
  
  Object.values(balances).forEach((b) => {
    if (b.code.startsWith("4")) totalRevenues += b.totalCr - b.totalDr;
    if (b.code.startsWith("3")) totalExpenses += b.totalDr - b.totalCr;
    if (b.code.startsWith("1")) totalAssets += b.totalDr - b.totalCr;
    if (b.code.startsWith("2")) totalLiab += b.totalCr - b.totalDr;
  });

  const netProfit = totalRevenues - totalExpenses;

  container.innerHTML = `
      <div class="stat-card"><div class="stat-value">${STATE.entries.length}</div><div class="stat-label">عدد القيود Total Entries</div></div>
      <div class="stat-card"><div class="stat-value" style="color:var(--success);">${formatNumberAlways(totalRevenues)}</div><div class="stat-label">إجمالي الإيرادات Total Revenue</div></div>
      <div class="stat-card"><div class="stat-value" style="color:var(--warning);">${formatNumberAlways(totalExpenses)}</div><div class="stat-label">إجمالي المصروفات Total Expenses</div></div>
      <div class="stat-card"><div class="stat-value" style="color:${netProfit >= 0 ? "var(--success)" : "var(--danger)"};">${formatNumberAlways(netProfit)}</div><div class="stat-label">${netProfit >= 0 ? "صافي الربح Net Profit" : "صافي الخسارة Net Loss"}</div></div>
  `;

  document.getElementById("balanceSummary").innerHTML = `
      <div class="fs-row"><span>🏛️ إجمالي الأصول</span><span class="money">${formatNumberAlways(totalAssets)}</span></div>
      <div class="fs-row"><span>🏦 إجمالي الخصوم وحقوق الملكية</span><span class="money">${formatNumberAlways(totalLiab)}</span></div>
      <div class="fs-row"><span>💰 إجمالي الإيرادات</span><span class="money" style="color:var(--success);">${formatNumberAlways(totalRevenues)}</span></div>
      <div class="fs-row"><span>📉 إجمالي المصروفات</span><span class="money" style="color:var(--warning);">${formatNumberAlways(totalExpenses)}</span></div>
      <div class="fs-row total" style="margin-top:12px;"><span>${netProfit >= 0 ? "🎉 صافي الربح" : "📛 صافي الخسارة"}</span><span class="money" style="color:${netProfit >= 0 ? "var(--success)" : "var(--danger)"};">${formatNumberAlways(Math.abs(netProfit))}</span></div>
  `;

  const recent = [...STATE.entries].reverse().slice(0, 5);
  if (recent.length === 0) {
    document.getElementById("recentEntries").innerHTML = `<div style="text-align:center;padding:40px;color:var(--text-muted);"><span style="font-size:2rem;opacity:0.5;">📭</span><p style="margin-top:12px;font-weight:700;">لا توجد قيود بعد</p></div>`;
  } else {
    let recentHtml = "";
    recent.forEach((e) => {
      recentHtml += `<div style="padding:16px; margin-bottom:12px; background:#fafafa; border:1px solid var(--border-light); border-radius:8px; display:flex; justify-content:space-between; align-items:center;">
              <div><span style="font-family:'JetBrains Mono',monospace;font-weight:800;color:var(--accent-primary);">#${e.journalNo}</span><span style="color:var(--text-muted);font-size:0.8rem;margin-right:12px;font-weight:600;">${e.date}</span><div style="font-size:0.9rem;font-weight:600;margin-top:4px;color:var(--text-secondary);">${e.explanation || ""}</div></div>
              <span class="money" style="font-size:1rem;font-weight:800;color:var(--accent-primary);">${formatNumberAlways(e.totalDr)}</span>
          </div>`;
    });
    document.getElementById("recentEntries").innerHTML = recentHtml;
  }
}

// ==========================================
// DATA MANAGEMENT & EXCEL EXPORT
// ==========================================
function confirmClearData() { 
  const modal = document.getElementById("confirmModal");
  if(modal) modal.classList.add("show"); 
}
function closeModal() { 
  const modal = document.getElementById("confirmModal");
  if(modal) modal.classList.remove("show"); 
}
function clearAllData() { 
  STATE = { entries: [], beginningBalances: {}, chartOfAccounts: [...DEFAULT_COA] }; 
  saveState(); 
  closeModal(); 
  // Refresh current page
  location.reload();
}

function exportToExcel() {
  if (!window.XLSX) { showToast("مكتبة Excel غير محملة بعد، حاول مرة أخرى", "error"); return; }
  const wb = XLSX.utils.book_new();
  const dateStr = new Date().toLocaleDateString("ar-EG");
  function setCols(ws, widths) { ws["!cols"] = widths.map((w) => ({ wch: w })); }

  // Sheet 1: COA
  const coaData = [["نظام المحاسبة المتكامل – دليل الحسابات", "", "", "", ""], [`تاريخ التصدير: ${dateStr}`, "", "", "", ""], ["", "", "", "", ""], ["كود الحساب", "اسم الحساب (عربي)", "Account Name (EN)", "النوع", "التصنيف"]];
  STATE.chartOfAccounts.forEach((acc) => { const typeMap = { assets: "أصول", liabilities: "خصوم", equity: "حقوق ملكية", expenses: "مصروفات", revenues: "إيرادات" }; coaData.push([acc.code, acc.nameAr, acc.nameEn||'', typeMap[acc.type] || acc.typeAr || acc.type, acc.classification || getAccountType(acc.code)]); });
  const wsCOA = XLSX.utils.aoa_to_sheet(coaData); wsCOA["!merges"] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: 4 } }, { s: { r: 1, c: 0 }, e: { r: 1, c: 4 } }]; setCols(wsCOA, [14, 30, 32, 18, 26]); XLSX.utils.book_append_sheet(wb, wsCOA, "دليل الحسابات");

  // Sheet 2: Journal Entries
  const jeData = [["نظام المحاسبة المتكامل – قيود اليومية", "", "", "", "", "", "", ""], [`تاريخ التصدير: ${dateStr}  |  عدد القيود: ${STATE.entries.length}`, "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", ""], ["رقم القيد", "التاريخ", "البيان", "كود الحساب", "اسم الحساب", "مدين (Dr)", "دائن (Cr)", "مركز التكلفة"]];
  let jeGrandDr = 0, jeGrandCr = 0;
  STATE.entries.forEach((entry) => {
    entry.lines.forEach((line, idx) => { jeData.push([idx === 0 ? entry.journalNo : "", idx === 0 ? entry.date : "", idx === 0 ? entry.explanation || "" : "", line.code, line.accountName || "", line.dr > 0 ? line.dr : "", line.cr > 0 ? line.cr : "", line.costCentre || ""]); jeGrandDr += line.dr || 0; jeGrandCr += line.cr || 0; });
    jeData.push(["", "", `إجمالي القيد #${entry.journalNo}`, "", "", entry.totalDr, entry.totalCr, ""]); jeData.push(["", "", "", "", "", "", "", ""]);
  });
  jeData.push(["", "", "الإجمالي الكلي Grand Total", "", "", jeGrandDr, jeGrandCr, ""]);
  const wsJE = XLSX.utils.aoa_to_sheet(jeData); wsJE["!merges"] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: 7 } }, { s: { r: 1, c: 0 }, e: { r: 1, c: 7 } }]; setCols(wsJE, [12, 14, 28, 12, 30, 16, 16, 18]); XLSX.utils.book_append_sheet(wb, wsJE, "قيود اليومية");

  // Sheet 3: Trial Balance
  const balances = computeAccountBalances(); const activeAccounts = Object.values(balances).filter((b) => b.beginDr > 0 || b.beginCr > 0 || b.moveDr > 0 || b.moveCr > 0).sort((a, b) => a.code.localeCompare(b.code, undefined, {numeric: true}));
  const tbData = [["نظام المحاسبة المتكامل – ميزان المراجعة", "", "", "", "", "", "", "", "", ""], [`تاريخ التصدير: ${dateStr}`, "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", ""], ["", "", "رصيد أول المدة", "", "الحركة خلال الفترة", "", "ميزان بالمجاميع", "", "ميزان بالأرصدة", ""], ["كود", "اسم الحساب", "مدين Dr", "دائن Cr", "مدين Dr", "دائن Cr", "مدين Dr", "دائن Cr", "مدين Dr", "دائن Cr"]];
  let tbTotals = { beginDr: 0, beginCr: 0, moveDr: 0, moveCr: 0, totalDr: 0, totalCr: 0, balDr: 0, balCr: 0 };
  activeAccounts.forEach((acc) => { tbTotals.beginDr += acc.beginDr; tbTotals.beginCr += acc.beginCr; tbTotals.moveDr += acc.moveDr; tbTotals.moveCr += acc.moveCr; tbTotals.totalDr += acc.totalDr; tbTotals.totalCr += acc.totalCr; tbTotals.balDr += acc.balDr; tbTotals.balCr += acc.balCr; tbData.push([acc.code, `${acc.nameAr} ${acc.nameEn}`, acc.beginDr || "", acc.beginCr || "", acc.moveDr || "", acc.moveCr || "", acc.totalDr || "", acc.totalCr || "", acc.balDr || "", acc.balCr || ""]); });
  tbData.push(["", "", "", "", "", "", "", "", "", ""]); tbData.push(["الإجمالي", "Total", tbTotals.beginDr, tbTotals.beginCr, tbTotals.moveDr, tbTotals.moveCr, tbTotals.totalDr, tbTotals.totalCr, tbTotals.balDr, tbTotals.balCr]);
  const wsTB = XLSX.utils.aoa_to_sheet(tbData); wsTB["!merges"] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: 9 } }, { s: { r: 1, c: 0 }, e: { r: 1, c: 9 } }, { s: { r: 3, c: 2 }, e: { r: 3, c: 3 } }, { s: { r: 3, c: 4 }, e: { r: 3, c: 5 } }, { s: { r: 3, c: 6 }, e: { r: 3, c: 7 } }, { s: { r: 3, c: 8 }, e: { r: 3, c: 9 } }]; setCols(wsTB, [10, 36, 14, 14, 14, 14, 14, 14, 14, 14]); XLSX.utils.book_append_sheet(wb, wsTB, "ميزان المراجعة");

  // Sheet 4: Income Statement
  const revenueAccounts = Object.values(balances).filter((b) => b.code.startsWith("4") && (b.totalDr > 0 || b.totalCr > 0)).sort((a, b) => a.code.localeCompare(b.code, undefined, {numeric: true}));
  const expenseAccounts = Object.values(balances).filter((b) => b.code.startsWith("3") && (b.totalDr > 0 || b.totalCr > 0)).sort((a, b) => a.code.localeCompare(b.code, undefined, {numeric: true}));
  let totalRevenues = 0, totalExpenses = 0; revenueAccounts.forEach((acc) => totalRevenues += acc.totalCr - acc.totalDr); expenseAccounts.forEach((acc) => totalExpenses += acc.totalDr - acc.totalCr); const netProfit = totalRevenues - totalExpenses;
  const isData = [["نظام المحاسبة المتكامل – قائمة الدخل", "", ""], [`Income Statement  |  تاريخ التصدير: ${dateStr}`, "", ""], ["", "", ""], ["البيان", "كود الحساب", "المبلغ"], ["══ الإيرادات Revenues ══", "", ""]];
  revenueAccounts.forEach((acc) => isData.push([acc.nameAr + " " + (acc.nameEn||''), acc.code, acc.totalCr - acc.totalDr])); isData.push(["إجمالي الإيرادات  Total Revenues", "", totalRevenues]); isData.push(["", "", ""]); isData.push(["══ المصروفات Expenses ══", "", ""]); expenseAccounts.forEach((acc) => isData.push([acc.nameAr + " " + (acc.nameEn||''), acc.code, acc.totalDr - acc.totalCr])); isData.push(["إجمالي المصروفات  Total Expenses", "", totalExpenses]); isData.push(["", "", ""]); isData.push([netProfit >= 0 ? "صافي الربح  Net Profit" : "صافي الخسارة  Net Loss", "", netProfit]);
  const wsIS = XLSX.utils.aoa_to_sheet(isData); wsIS["!merges"] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: 2 } }, { s: { r: 1, c: 0 }, e: { r: 1, c: 2 } }]; setCols(wsIS, [42, 14, 18]); XLSX.utils.book_append_sheet(wb, wsIS, "قائمة الدخل");

  // Sheet 5: Balance Sheet
  const assetAccounts = Object.values(balances).filter((b) => b.code.startsWith("1") && (b.totalDr > 0 || b.totalCr > 0)).sort((a, b) => a.code.localeCompare(b.code, undefined, {numeric: true}));
  const liabEquityAccounts = Object.values(balances).filter((b) => b.code.startsWith("2") && (b.totalDr > 0 || b.totalCr > 0)).sort((a, b) => a.code.localeCompare(b.code, undefined, {numeric: true}));
  let totalAssets = 0, totalLiabEquity = 0; assetAccounts.forEach((acc) => totalAssets += acc.totalDr - acc.totalCr); liabEquityAccounts.forEach((acc) => totalLiabEquity += acc.totalCr - acc.totalDr); const totalRHS = totalLiabEquity + netProfit;
  const bsData = [["نظام المحاسبة المتكامل – الميزانية العمومية", "", "", "", "", ""], [`Balance Sheet  |  تاريخ التصدير: ${dateStr}`, "", "", "", "", ""], ["", "", "", "", "", ""], ["الأصول  Assets", "", "", "الخصوم وحقوق الملكية  Liabilities & Equity", "", ""], ["كود", "اسم الحساب", "المبلغ", "كود", "اسم الحساب", "المبلغ"]];
  const maxRows = Math.max(assetAccounts.length, liabEquityAccounts.length);
  for (let i = 0; i < maxRows; i++) { const a = assetAccounts[i]; const l = liabEquityAccounts[i]; bsData.push([a ? a.code : "", a ? a.nameAr + " " + (a.nameEn||'') : "", a ? a.totalDr - a.totalCr : "", l ? l.code : "", l ? l.nameAr + " " + (l.nameEn||'') : "", l ? l.totalCr - l.totalDr : ""]); }
  if (netProfit !== 0) bsData.push(["", "", "", "", netProfit >= 0 ? "صافي ربح الفترة  Net Profit" : "صافي خسارة الفترة  Net Loss", netProfit]);
  bsData.push(["", "", "", "", "", ""]); bsData.push(["إجمالي الأصول  Total Assets", "", totalAssets, "إجمالي الخصوم + حقوق الملكية  Total L&E + Net P/L", "", totalRHS]); bsData.push(["", "", "", "", "", ""]);
  const isBalanced = Math.abs(totalAssets - totalRHS) < 0.01; bsData.push([isBalanced ? "✔ الميزانية متوازنة  Balanced" : "✘ الميزانية غير متوازنة  NOT Balanced", "", "", "", "", ""]);
  const wsBS = XLSX.utils.aoa_to_sheet(bsData); wsBS["!merges"] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: 5 } }, { s: { r: 1, c: 0 }, e: { r: 1, c: 5 } }, { s: { r: 3, c: 0 }, e: { r: 3, c: 2 } }, { s: { r: 3, c: 3 }, e: { r: 3, c: 5 } }]; setCols(wsBS, [10, 34, 16, 10, 34, 16]); XLSX.utils.book_append_sheet(wb, wsBS, "الميزانية العمومية");

  const fileName = `accounting_report_${new Date().toISOString().split("T")[0]}.xlsx`;
  XLSX.writeFile(wb, fileName); showToast("✅ تم تصدير ملف Excel بنجاح", "success");
}

// ==========================================
// EVENT LISTENERS & INITIALIZATION
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  loadState(); 
  
  ["entryDate", "journalNo", "costCentre", "entryExplanation"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener("input", () => {
        const container = document.getElementById("entryRowsContainer");
        if (!container) return;
        const rows = container.querySelectorAll(".entry-row");
        rows.forEach((row) => {
          if (id === "entryDate") row.querySelector(".row-date").value = el.value;
          if (id === "journalNo") row.querySelector(".row-jn").value = el.value;
          if (id === "costCentre") row.querySelector(".row-cc").value = el.value;
          if (id === "entryExplanation") row.querySelector(".row-explanation").value = el.value;
        });
      });
    }
  });

  const page = document.body.dataset.page;
  switch (page) {
    case "dashboard": renderDashboard(); break;
    case "coa": renderCOA(); break;
    case "entry": initEntryPage(); break;
    case "trialbalance": renderTrialBalance(); break;
    case "income": renderIncomeStatement(); break;
    case "balancesheet": renderBalanceSheet(); break;
    case "savedentries": renderSavedEntries(); break;
  }
});

document.addEventListener("keydown", (e) => {
  if (e.ctrlKey && e.key === "s") {
    e.preventDefault();
    if (document.body.dataset.page === "entry") saveEntry();
  }
});
