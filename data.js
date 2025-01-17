const dataCur = `[
    {
        "Cur_ID":440,"Date":"2024-05-11T00:00:00","Cur_Abbreviation":"AUD","Cur_Scale":1,"Cur_Name":"Австралийский доллар","Cur_OfficialRate":2.1237
    },
        {
            "Cur_ID":510,"Date":"2024-05-11T00:00:00","Cur_Abbreviation":"AMD","Cur_Scale":1000,"Cur_Name":"Армянских драмов","Cur_OfficialRate":8.3302
        },
        {
            "Cur_ID":441,"Date":"2024-05-11T00:00:00","Cur_Abbreviation":"BGN","Cur_Scale":1,"Cur_Name":"Болгарский лев","Cur_OfficialRate":1.7733
        },
        {
            "Cur_ID":514,"Date":"2024-05-11T00:00:00","Cur_Abbreviation":"BRL","Cur_Scale":10,"Cur_Name":"Бразильских реалов","Cur_OfficialRate":6.3674
        },
        {
            "Cur_ID":449,"Date":"2024-05-11T00:00:00","Cur_Abbreviation":"UAH","Cur_Scale":100,"Cur_Name":"Гривен","Cur_OfficialRate":8.2053
        },
        {
            "Cur_ID":450,"Date":"2024-05-11T00:00:00","Cur_Abbreviation":"DKK","Cur_Scale":10,"Cur_Name":"Датских крон","Cur_OfficialRate":4.6579
        },
        {
            "Cur_ID":513,"Date":"2024-05-11T00:00:00","Cur_Abbreviation":"AED","Cur_Scale":10,"Cur_Name":"Дирхамов ОАЭ","Cur_OfficialRate":8.7974
        },
        {
            "Cur_ID":431,"Date":"2024-05-11T00:00:00","Cur_Abbreviation":"USD","Cur_Scale":1,"Cur_Name":"Доллар США","Cur_OfficialRate":3.2313
        },
        {
            "Cur_ID":512,"Date":"2024-05-11T00:00:00","Cur_Abbreviation":"VND","Cur_Scale":100000,"Cur_Name":"Донгов","Cur_OfficialRate":12.7041
        },
        {
            "Cur_ID":451,"Date":"2024-05-11T00:00:00","Cur_Abbreviation":"EUR","Cur_Scale":1,"Cur_Name":"Евро","Cur_OfficialRate":3.4741
        },
        {
            "Cur_ID":452,"Date":"2024-05-11T00:00:00","Cur_Abbreviation":"PLN","Cur_Scale":10,"Cur_Name":"Злотых","Cur_OfficialRate":8.0516
        },
        {
            "Cur_ID":508,"Date":"2024-05-11T00:00:00","Cur_Abbreviation":"JPY","Cur_Scale":100,"Cur_Name":"Иен","Cur_OfficialRate":2.0795
        },
        {
            "Cur_ID":511,"Date":"2024-05-11T00:00:00","Cur_Abbreviation":"INR","Cur_Scale":100,"Cur_Name":"Индийских рупий","Cur_OfficialRate":3.8693
        },
        {
            "Cur_ID":461,"Date":"2024-05-11T00:00:00","Cur_Abbreviation":"IRR","Cur_Scale":100000,"Cur_Name":"Иранских риалов","Cur_OfficialRate":7.6821
        },
        {
            "Cur_ID":453,"Date":"2024-05-11T00:00:00","Cur_Abbreviation":"ISK","Cur_Scale":100,"Cur_Name":"Исландских крон","Cur_OfficialRate":2.3115
        },
        {
            "Cur_ID":371,"Date":"2024-05-11T00:00:00","Cur_Abbreviation":"CAD","Cur_Scale":1,"Cur_Name":"Канадский доллар","Cur_OfficialRate":2.3505
        },
        {
            "Cur_ID":462,"Date":"2024-05-11T00:00:00","Cur_Abbreviation":"CNY","Cur_Scale":10,"Cur_Name":"Китайских юаней","Cur_OfficialRate":4.4482
        },
        {
            "Cur_ID":394,"Date":"2024-05-11T00:00:00","Cur_Abbreviation":"KWD","Cur_Scale":1,"Cur_Name":"Кувейтский динар","Cur_OfficialRate":10.5083
        },
        {
            "Cur_ID":454,"Date":"2024-05-11T00:00:00","Cur_Abbreviation":"MDL","Cur_Scale":10,"Cur_Name":"Молдавских леев","Cur_OfficialRate":1.8205
        },
        {
            "Cur_ID":448,"Date":"2024-05-11T00:00:00","Cur_Abbreviation":"NZD","Cur_Scale":1,"Cur_Name":"Новозеландский доллар","Cur_OfficialRate":1.9353
        },
        {
            "Cur_ID":455,"Date":"2024-05-11T00:00:00","Cur_Abbreviation":"NOK","Cur_Scale":10,"Cur_Name":"Норвежских крон","Cur_OfficialRate":2.9578
        },
        {
            "Cur_ID":456,"Date":"2024-05-11T00:00:00","Cur_Abbreviation":"RUB","Cur_Scale":100,"Cur_Name":"Российских рублей","Cur_OfficialRate":3.5132
        },
        {
            "Cur_ID":457,"Date":"2024-05-11T00:00:00","Cur_Abbreviation":"XDR","Cur_Scale":1,"Cur_Name":"СДР (Специальные права заимствования)","Cur_OfficialRate":4.2697
        },
        {
            "Cur_ID":421,"Date":"2024-05-11T00:00:00","Cur_Abbreviation":"SGD","Cur_Scale":1,"Cur_Name":"Сингапурcкий доллар","Cur_OfficialRate":2.3834
        },
        {
            "Cur_ID":458,"Date":"2024-05-11T00:00:00","Cur_Abbreviation":"KGS","Cur_Scale":100,"Cur_Name":"Сомов","Cur_OfficialRate":3.6485
        },
        {
            "Cur_ID":459,"Date":"2024-05-11T00:00:00","Cur_Abbreviation":"KZT","Cur_Scale":1000,"Cur_Name":"Тенге","Cur_OfficialRate":7.3455
        },
        {
            "Cur_ID":460,"Date":"2024-05-11T00:00:00","Cur_Abbreviation":"TRY","Cur_Scale":10,"Cur_Name":"Турецких лир","Cur_OfficialRate":1.0033
        },
        {
            "Cur_ID":429,"Date":"2024-05-11T00:00:00","Cur_Abbreviation":"GBP","Cur_Scale":1,"Cur_Name":"Фунт стерлингов","Cur_OfficialRate":4.0374
        },
        {
            "Cur_ID":463,"Date":"2024-05-11T00:00:00","Cur_Abbreviation":"CZK","Cur_Scale":100,"Cur_Name":"Чешских крон","Cur_OfficialRate":13.8679
        },
        {
            "Cur_ID":464,"Date":"2024-05-11T00:00:00","Cur_Abbreviation":"SEK","Cur_Scale":10,"Cur_Name":"Шведских крон","Cur_OfficialRate":2.9628
        },
        {
            "Cur_ID":426,"Date":"2024-05-11T00:00:00","Cur_Abbreviation":"CHF","Cur_Scale":1,"Cur_Name":"Швейцарский франк","Cur_OfficialRate":3.5565
        }
    ]

`