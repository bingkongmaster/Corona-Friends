const coronaData = [

    //경기도
    
    //강북 10
    {name:'성우사우나',latitude:37.6761548586276,longitude:127.047872695316},
    {name:'서울의료원',latitude:37.6128675208202,longitude:127.098092484676},
    {name:'남양주보건소',latitude:37.610500142345956,longitude:127.1711727565189},
    {name:'고려대학교안암병원',latitude:37.5872090646066,longitude:127.026462112346},
    {name:'인제대학교 서울백병원',latitude:37.5650659596588,longitude:126.988836276594},
    {name:'금호프라자약국',latitude:37.548013878295514,longitude:127.02244344299524},
    {name:'중앙할인마트',latitude:37.5572919402688,longitude:127.02854302438},
    {name:'파리바게뜨 성동금호점',latitude:37.548016351058195,longitude:127.02362372465636},
    {name:'유앤강마취통증의학과의원',latitude:37.5478111305054,longitude:127.022564465345},
    {name:'CU 금호대우점',latitude:37.5466583978054,longitude:127.019499743226},
    //강남 7
    {name:'부천덕산초등학교 대장분교장',latitude:37.542233464259,longitude:126.791177816437},
    {name:'원불교 여의도교당',latitude:37.5179818815075,longitude:126.932862948932},
    {name:'에이치플러스양지병원 선별진료소',latitude:37.4841408396364,longitude:126.932573266171},
    {name:'봉천지오마트',latitude:37.4859379665577,longitude:126.938472690994},
    {name:'한중교회',latitude:37.4837482095293,longitude:126.941414179443},
    {name:'다정약국',latitude:37.50451674838989,longitude:127.1049647851047},
    {name:'코로나19 강동구보건소 선별진료소',latitude:37.5292687705028,longitude:127.125614688949},
    //인천광역시 1
    {name:'용현시장',latitude:37.4584741094343,longitude:126.653753461842},
    //안양시3
    {name:'안양샘병원',latitude:37.3934063978896,longitude:126.924463864201},
    {name:'범계역 4호선',latitude:37.3897837540429,longitude:126.950783269518},
    {name:'한림대학교성심병원 선별진료소',latitude:37.3917052792552,longitude:126.962038549409},
    //의왕시 2
    {name:'CU 군포공단점',latitude:37.3536438432853,longitude:126.95593115767},
    {name:'롯데제과 의왕물류센터',latitude:37.3521646980036,longitude:126.962126189192},
    //광주시 2
    {name:'이마트24 광주벌원점',latitude:37.407371405778,longitude:127.23702816844},
    {name:'현대자동차블루핸즈 동부현대모터스',latitude:37.4059981331869,longitude:127.265893324187},
    //수원시 7
    {name:'페리카나 파장2점',latitude:37.3073534222113,longitude:127.000234624969},
    {name:'법무사손승일사무소',latitude:37.275633311213,longitude:127.050526926159},
    {name:'코로나19 아주대학교병원 선별진료소',latitude:37.2795882832803,longitude:127.04761136662},
    {name:'효원공원',latitude:37.2642559549944,longitude:127.038271669275},
    {name:'수원버스터미널',latitude:37.2510800199137,longitude:127.019838107679},
    {name:'GS25 영통번영점',latitude:37.2538102899412,longitude:127.076916014825},
    {name:'파리바게뜨 영통벽산점',latitude:37.2374714190481,longitude:127.060184305733},
    //화성시 1
    {name:'화성휴게소 목포방향',latitude:37.1435821990311,longitude:126.879150025179},

    //충청북도

    //해미면 1
    {name:'해미호떡',latitude:36.7114816422568,longitude:126.545807435787},
    //세종시 9
    {name:'24시한뚝수육국밥 세종시도담점',latitude:36.5140006106485,longitude:127.258585374428},
    {name:'제본공작소',latitude:36.4860883930675,longitude:127.257671218952},
    {name:'디에떼 에스프레소 국세청점',latitude:36.4829114317277,longitude:127.259923812411},
    {name:'예예공인중개사사무소',latitude:36.482637051021186,longitude:127.25929239558258},
    {name:'최고당돈가스 세종시점',latitude:36.4820811068641,longitude:127.260501318338},
    {name:'원조멸치국수 세종첫마을점',latitude:36.4808696177655,longitude:127.260653489561},
    {name:'이마트 세종점',latitude:36.4709595318378,longitude:127.251002432636},
    {name:'세종고속시외버스터미널',latitude:36.4692263518772,longitude:127.273664167394},
    {name:'계룡산온천사우나찜질방',latitude:36.3655881150026,longitude:127.252539988797},
    //대전광역시 39+1?
    //유성구 8
    {name:'서들경헤어샵',latitude:36.3605477108835,longitude:127.341419919194},
    {name:'허니마켓',latitude:36.3595454131494,longitude:127.336404015805},
    {name:'만수불고기',latitude:36.3584132248304,longitude:127.336515015229},
    {name:'다빈치의원',latitude:36.3579850861732,longitude:127.334939998884},
    {name:'유성농협하나로마트 장대점',latitude:36.3577301581843,longitude:127.335865872582},
    {name:'황산옥',latitude:36.3586470571452,longitude:127.346766244436},
    {name:'유성면옥',latitude:36.3491958260476,longitude:127.326177341304},
    {name:'도안참사랑약국',latitude:36.34654101209422,longitude:127.33463253547517},
    //중구 11
    {name:'캠코캐피탈타워',latitude:36.3583166251537,longitude:127.387440130166},
    {name:'오렌지타운사무실',latitude:36.3398823214066,longitude:127.390721651652},
    {name:'탄방고을',latitude:36.33982747892947,longitude:127.39205803930662},
    {name:'둔산전자타운',latitude:36.3401100934427,longitude:127.393810488674},
    {name:'노루페인트 한빛공사',latitude:36.3275644133448,longitude:127.38647704844},
    {name:'글로리약국',latitude:36.327659756793,longitude:127.405570984918},
    {name:'코스모내과',latitude:36.3275912836177,longitude:127.405566175225},
    {name:'TR이노베이션침향',latitude:36.32220797816324,longitude:127.41048503952243},
    {name:'새서울내과영상의학과의원',latitude:36.3218352085866,longitude:127.413790558964},
    {name:'이화당약국',latitude:36.32198756912729,longitude:127.41455308716316},
    {name:'열매노인요양원',latitude:36.2962130386256,longitude:127.380074702497},
    //동구 12
    {name:'튼튼약국',latitude:36.3460499237059,longitude:127.341305373966},
    {name:'유진약국',latitude:36.36623732738945,longitude:127.43919443356612},
    {name:'베스트이비인후과',latitude:36.3662337227816,longitude:127.439194413308},
    {name:'바른몸의원',latitude:36.36621343043237,longitude:127.43932132474806},
    {name:'글로벌튼튼병원',latitude:36.3578385779827,longitude:127.43322447758},
    {name:'장터할인마트 가양점',latitude:36.3499602431832,longitude:127.450363575246},
    {name:'하나도매마트',latitude:36.3485611050861,longitude:127.451456155629},
    {name:'연세의원',latitude:36.34827704756795,longitude:127.45126736332311},
    {name:'새가양약국',latitude:36.3480903142817,longitude:127.451079133786},
    {name:'대전가양동우체국',latitude:36.345921944331,longitude:127.445835428297},
    {name:'김태명의원',latitude:36.3223951661253,longitude:127.460753261671},
    {name:'판암미소약국',latitude:36.32237695412351,longitude:127.46080215433012},
    //계룡시 1
    {name:'썬스파 불한증막사우나',latitude:36.288918821117,longitude:127.242256408753},
    //논산
    {name:'논산계룡농협가야곡지점',latitude:36.1338243616575,longitude:127.159375821005},
    {name:'논산시보건소 선별진료소',latitude:36.1962508186435,longitude:127.103828361866},
    {name:'순천향대학병원',latitude:36.8027211587879,longitude:127.135932840124},
    {name:'태양빌딩 한국의료기연합',latitude:36.2015641921471,longitude:127.088256128139},
    {name:'누가의료기',latitude:36.45091918941072,longitude:127.42692376091675},
    {name:'천안의료원',latitude:36.7755151541405,longitude:127.179163389121},

    //전라북도

    //익산시 5
    {name:'설빙 영등점',latitude:35.9582610532142,longitude:126.977005066484},
    {name:'익산역',latitude:35.94021109194706,longitude:126.94629271132125},
    {name:'차스타임',latitude:35.917445750342864,longitude:127.06280691915879},
    {name:'봉구스밥버거 전주우석대점',latitude:35.9150778232105,longitude:127.068402194099},
    {name:'행복추풍령감자탕묵은지',latitude:35.9148140564925,longitude:127.069452259464},
    //전주시 1
    {name:'전북대학교병원',latitude:35.8466992851741,longitude:127.141358173651},
    //광주광역시 3
    {name:'이마트에브리데이 일곡동점',latitude:35.2045553831021,longitude:126.897189145189},
    {name:'이안 PC카페',latitude:35.2039764760338,longitude:126.899047967841},
    {name:'광주역',latitude:35.1653524622591,longitude:126.909264297873},

    //경상도
    
    //대구광역시 4
    {name:'대구외국인노동자지원센터',latitude:35.8588927929654,longitude:128.464357074059},
    {name:'대실역 대구2호선',latitude:35.8576058595846,longitude:128.465249990912},
    {name:'성서산업단지역 대구2호선',latitude:35.8517148505664,longitude:128.507000383565},
    {name:'원조대덕돼지국밥 본점',latitude:35.8616793942056,longitude:128.637960470432},
    //경주시 1
    {name:'신경주역',latitude:35.7983754706903,longitude:129.13899826575},
    //울산시 1
    {name:'울산역',latitude:35.5515431908006,longitude:129.138660047414},

    //제주도 13
    {name:'바당좀녀의집',latitude:33.5185225509122,longitude:126.490286832136},
    {name:'제주공항',latitude:33.5070789578184,longitude:126.492769004244},
    {name:'야호농수산',latitude:33.5075092119462,longitude:126.504626679107},
    {name:'동문재래시장',latitude:33.5118051071048,longitude:126.526011881406},
    {name:'유리의성',latitude:33.31462248889241,longitude:126.27368999831845},
    {name:'카멜리아힐',latitude:33.2896344311608,longitude:126.370009467525},
    {name:'라메르',latitude:33.2470708838172,longitude:126.512028507323},
    {name:'에코랜드테마파크',latitude:33.4483387252476,longitude:126.670278657345},
    {name:'제주워터서커스',latitude:33.4240787366136,longitude:126.743773641249},
    {name:'나그네식당',latitude:33.4065199197459,longitude:126.817833045845},
    {name:'우리 승마장',latitude:33.3868566807769,longitude:126.812478736979},
    {name:'블루마운틴커피박물관',latitude:33.38008626381226,longitude:126.83729267113661},
    {name:'광치기해변',latitude:33.452086460427,longitude:126.92449048608},

]

export default coronaData;