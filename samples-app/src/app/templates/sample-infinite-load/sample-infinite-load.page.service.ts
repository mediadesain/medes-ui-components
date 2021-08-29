import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SampleInfiniteLoadService {
  alldata: any = []; // All data loaded
  data: any = []; // Partial data will showing on page
  showitem: { start: number, end: number } = {
    start: 0,
    end: 0
  }; // Partial item will show
  showperitem: number = 20; // Total items will show
  
  constructor() {}

  getData(){
    // Get all data and set initial partial items
    const data = [
      {"basicSalary":1088.14,"birthDate":1518766136834,"email":"lavernefox@mediadesain.com","firstName":"Laverne","gender":"male","group":"yellow","id":"001RUO68HTQGAUJ429XJ","lastName":"Fox","status":"single"},
      {"basicSalary":1449.06,"birthDate":1494586141555,"email":"florinerussell@mediadesain.com","firstName":"Florine","gender":"female","group":"purple,green,yellow","id":"00343HY6JESFX5OK3KFE","lastName":"Russell","status":"divorce"},
      {"basicSalary":1514.5,"birthDate":1481388670673,"email":"morrisonmeadows@mediadesain.com","firstName":"Morrison","gender":"male","group":"green","id":"0099VLWPLNH7F1FE0CAG","lastName":"Meadows","status":"single"},
      {"basicSalary":2898.65,"birthDate":1496335056835,"email":"savannahbuckner@mediadesain.com","firstName":"Savannah","gender":"male","group":"green,purple","id":"00MQJE4CSXTNGCEZH12G","lastName":"Buckner","status":"marriage"},
      {"basicSalary":1213.46,"birthDate":1616332536905,"email":"duffywarren@mediadesain.com","firstName":"Duffy","gender":"female","group":"green","id":"014QLW130FG69YNVSGXQ","lastName":"Warren","status":"divorce"},
      {"basicSalary":3473.37,"birthDate":1548588689596,"email":"darleneconner@mediadesain.com","firstName":"Darlene","gender":"male","group":"blue","id":"01AN16TLNY6NPXBDQ456","lastName":"Conner","status":"divorce"},
      {"basicSalary":2727.24,"birthDate":1431046382213,"email":"wilkinsonstrong@mediadesain.com","firstName":"Wilkinson","gender":"male","group":"yellow","id":"01B2OFSUG9072TFH2JNN","lastName":"Strong","status":"single"},
      {"basicSalary":2711.21,"birthDate":1493208229431,"email":"melissachen@mediadesain.com","firstName":"Melissa","gender":"male","group":"blue","id":"01DXOYHEY97NMFH3CO7Z","lastName":"Chen","status":"single"},
      {"basicSalary":1454.45,"birthDate":1474149358310,"email":"spencehernandez@mediadesain.com","firstName":"Spence","gender":"female","group":"purple","id":"01NZC0B46T38X68ZEVZG","lastName":"Hernandez","status":"single"},
      {"basicSalary":1202.04,"birthDate":1540193140658,"email":"lynnchapman@mediadesain.com","firstName":"Lynn","gender":"female","group":"brown","id":"01P00GT7V4LEU4X3S8XM","lastName":"Chapman","status":"marriage"},
      {"basicSalary":2815.83,"birthDate":1494086815384,"email":"carneywhite@mediadesain.com","firstName":"Carney","gender":"male","group":"brown","id":"024GUF0Z8BKAJD5OU1KC","lastName":"White","status":"single"},
      {"basicSalary":2591.43,"birthDate":1537953675922,"email":"bairdwalton@mediadesain.com","firstName":"Baird","gender":"male","group":"green","id":"02FVMH9D0JN39QWAVZPT","lastName":"Walton","status":"divorce"},
      {"basicSalary":2395.22,"birthDate":1592429541745,"email":"katherinecunningham@mediadesain.com","firstName":"Katherine","gender":"female","group":"purple","id":"02LW44U8GMOE9JBZ8RMS","lastName":"Cunningham","status":"single"},
      {"basicSalary":1512.27,"birthDate":1430812455047,"email":"kramerdodson@mediadesain.com","firstName":"Kramer","gender":"female","group":"blue","id":"02LY9LLNP3UP5PHCM9B7","lastName":"Dodson","status":"marriage"},
      {"basicSalary":3531.78,"birthDate":1404143693851,"email":"mullinsbooker@mediadesain.com","firstName":"Mullins","gender":"male","group":"green","id":"045AH2I8OO58Q9G3P4UA","lastName":"Booker","status":"marriage"},
      {"basicSalary":3286.23,"birthDate":1487039338195,"email":"liliaserrano@mediadesain.com","firstName":"Lilia","gender":"male","group":"yellow","id":"04AQWXF7DOHTEANHTMTX","lastName":"Serrano","status":"divorce"},
      {"basicSalary":3133.82,"birthDate":1494253264744,"email":"concepcionware@mediadesain.com","firstName":"Concepcion","gender":"male","group":"blue","id":"04F1XB90T4IE8PIDR340","lastName":"Ware","status":"single"},
      {"basicSalary":3605.97,"birthDate":1521545018175,"email":"hancockball@mediadesain.com","firstName":"Hancock","gender":"male","group":"blue","id":"04FYJ9NB1B3M8EXLBXNR","lastName":"Ball","status":"marriage"},
      {"basicSalary":3582.68,"birthDate":1573231016876,"email":"earlinehahn@mediadesain.com","firstName":"Earline","gender":"female","group":"green","id":"060EM0KTOCJZZVXEJBJI","lastName":"Hahn","status":"single"},
      {"basicSalary":1057,"birthDate":1458046316430,"email":"adelinecook@mediadesain.com","firstName":"Adeline","gender":"female","group":"green","id":"060LUX4IJL16CWPPO3KF","lastName":"Cook","status":"single"},
      {"basicSalary":2385.34,"birthDate":1420553212256,"email":"taraboyd@mediadesain.com","firstName":"Tara","gender":"male","group":"yellow","id":"06NDR59ASJ5G1YG90JDK","lastName":"Boyd","status":"marriage"},
      {"basicSalary":1182.36,"birthDate":1449428375931,"email":"francisgoff@mediadesain.com","firstName":"Francis","gender":"female","group":"purple","id":"06QOLEFLP0I3HKYHZGBL","lastName":"Goff","status":"divorce"},
      {"basicSalary":2884.33,"birthDate":1501351922729,"email":"judithgentry@mediadesain.com","firstName":"Judith","gender":"female","group":"blue","id":"06TOHEZSKNXSMUNDQLPC","lastName":"Gentry","status":"marriage"},
      {"basicSalary":1713.42,"birthDate":1471992333703,"email":"englandnolan@mediadesain.com","firstName":"England","gender":"male","group":"purple","id":"07KAM0N21QGRUYEV3X9F","lastName":"Nolan","status":"single"},
      {"basicSalary":1146.53,"birthDate":1572950268727,"email":"mullinsfrye@mediadesain.com","firstName":"Mullins","gender":"male","group":"purple","id":"07Z16Y0Z1E9SQTNZ03Y0","lastName":"Frye","status":"marriage"},
      {"basicSalary":2689.28,"birthDate":1525799868028,"email":"randiriggs@mediadesain.com","firstName":"Randi","gender":"female","group":"green","id":"080T3QO0QUF1X0B2JEY3","lastName":"Riggs","status":"marriage"},
      {"basicSalary":1537.57,"birthDate":1478349881391,"email":"lowemathis@mediadesain.com","firstName":"Lowe","gender":"female","group":"purple","id":"086G78ZRH08NST0UV8JG","lastName":"Mathis","status":"marriage"},
      {"basicSalary":1410.97,"birthDate":1547805746006,"email":"sykeslevine@mediadesain.com","firstName":"Sykes","gender":"female","group":"blue","id":"08N5Q4X2WXPUXF04EDL8","lastName":"Levine","status":"single"},
      {"basicSalary":1219.9,"birthDate":1543566027849,"email":"mamiewynn@mediadesain.com","firstName":"Mamie","gender":"female","group":"green","id":"08RVB19OJFFA0THL0K7B","lastName":"Wynn","status":"divorce"},
      {"basicSalary":3601.06,"birthDate":1624230224523,"email":"elviahardy@mediadesain.com","firstName":"Elvia","gender":"female","group":"purple","id":"08YFU676S13BACNH3ANQ","lastName":"Hardy","status":"marriage"},
      {"basicSalary":2173.23,"birthDate":1593516220226,"email":"bonnerrichmond@mediadesain.com","firstName":"Bonner","gender":"male","group":"brown","id":"09FKJKMWLV5OH1PDAQQF","lastName":"Richmond","status":"single"},
      {"basicSalary":1776.74,"birthDate":1558228060724,"email":"altabradford@mediadesain.com","firstName":"Alta","gender":"female","group":"green","id":"09J1QHSMYRP5Y660172M","lastName":"Bradford","status":"divorce"},
      {"basicSalary":3795.29,"birthDate":1571776893754,"email":"hullreese@mediadesain.com","firstName":"Hull","gender":"male","group":"brown","id":"0A0DOETI0X2K5H0H4L7N","lastName":"Reese","status":"marriage"},
      {"basicSalary":1982.75,"birthDate":1505278405743,"email":"joannleon@mediadesain.com","firstName":"Joann","gender":"female","group":"blue","id":"0A4IVHC1KHP9E3PHDFJA","lastName":"Leon","status":"divorce"},
      {"basicSalary":2369.49,"birthDate":1500642154074,"email":"robertswatson@mediadesain.com","firstName":"Roberts","gender":"male","group":"yellow","id":"0A62VWWA7I01AVDNQ3TB","lastName":"Watson","status":"marriage"},
      {"basicSalary":2622.27,"birthDate":1402350489893,"email":"alvaradohahn@mediadesain.com","firstName":"Alvarado","gender":"male","group":"blue","id":"0AGU9ESZ9FR7TXZUKEWN","lastName":"Hahn","status":"single"},
      {"basicSalary":2194.37,"birthDate":1448075029738,"email":"hazelkelley@mediadesain.com","firstName":"Hazel","gender":"male","group":"blue","id":"0AM2W4JI9R1N1J3Q5IEA","lastName":"Kelley","status":"single"},
      {"basicSalary":1102.44,"birthDate":1479402844493,"email":"marcellamcknight@mediadesain.com","firstName":"Marcella","gender":"female","group":"green","id":"0BC5F0Z3BF9AYAS1H1UQ","lastName":"Mcknight","status":"divorce"},
      {"basicSalary":3541.03,"birthDate":1496984854755,"email":"lakishajoyce@mediadesain.com","firstName":"Lakisha","gender":"male","group":"blue","id":"0BI7D8PVHBDIQIWQSBLN","lastName":"Joyce","status":"divorce"},
      {"basicSalary":1976.92,"birthDate":1552161610751,"email":"amandabarrera@mediadesain.com","firstName":"Amanda","gender":"female","group":"blue","id":"0BP22EJ60DPJD7LW4U3K","lastName":"Barrera","status":"marriage"},
      {"basicSalary":2072.64,"birthDate":1606549810470,"email":"nonacarr@mediadesain.com","firstName":"Nona","gender":"male","group":"blue","id":"0BRKP07MEO225Y68R8T7","lastName":"Carr","status":"single"},
      {"basicSalary":1955.2,"birthDate":1531557241004,"email":"jaimesexton@mediadesain.com","firstName":"Jaime","gender":"male","group":"green","id":"0BVJC2NOZW15GLFSRVLB","lastName":"Sexton","status":"single"},
      {"basicSalary":1287.16,"birthDate":1494365318509,"email":"shanawhitley@mediadesain.com","firstName":"Shana","gender":"female","group":"yellow","id":"0C0V5JXHZQLGKAXFM7UI","lastName":"Whitley","status":"marriage"},
      {"basicSalary":3500.91,"birthDate":1491806386327,"email":"danielstrickland@mediadesain.com","firstName":"Daniel","gender":"male","group":"yellow","id":"0CCGE3D2PRNFRQW6CQS3","lastName":"Strickland","status":"marriage"},
      {"basicSalary":3337.37,"birthDate":1493890015528,"email":"brennanflores@mediadesain.com","firstName":"Brennan","gender":"male","group":"purple","id":"0CG01847TQXWRHDWRIFT","lastName":"Flores","status":"single"},
      {"basicSalary":3506.46,"birthDate":1597739529613,"email":"gainesmendez@mediadesain.com","firstName":"Gaines","gender":"female","group":"blue","id":"0CGJSV3ZSMVHJY3J7OY4","lastName":"Mendez","status":"divorce"},
      {"basicSalary":2853.43,"birthDate":1623120757437,"email":"fernwebb@mediadesain.com","firstName":"Fern","gender":"male","group":"brown","id":"0CIB4NWR7GNJZZLOKKC8","lastName":"Webb","status":"divorce"},
      {"basicSalary":1411.89,"birthDate":1453741259915,"email":"briannatucker@mediadesain.com","firstName":"Brianna","gender":"female","group":"yellow","id":"0CXXA49PCYVADLDJ9XC6","lastName":"Tucker","status":"divorce"},
      {"basicSalary":3206.04,"birthDate":1448204886130,"email":"lavonnecantu@mediadesain.com","firstName":"Lavonne","gender":"male","group":"green","id":"0D146JL1DJNTL798KMTX","lastName":"Cantu","status":"marriage"},
      {"basicSalary":3484.01,"birthDate":1587257275185,"email":"sherritorres@mediadesain.com","firstName":"Sherri","gender":"male","group":"yellow","id":"0DAEO9ETSD1I2QGC54LY","lastName":"Torres","status":"divorce"},
      {"basicSalary":1602.06,"birthDate":1544486478850,"email":"griffinspence@mediadesain.com","firstName":"Griffin","gender":"male","group":"blue","id":"0DECTWGBRFNCM43XDX6I","lastName":"Spence","status":"marriage"},
      {"basicSalary":1256.01,"birthDate":1540725135395,"email":"jacobsonware@mediadesain.com","firstName":"Jacobson","gender":"female","group":"blue","id":"0DQCQAMPNIOBWP43XBO8","lastName":"Ware","status":"single"},
      {"basicSalary":2996.89,"birthDate":1434371878912,"email":"suetorres@mediadesain.com","firstName":"Sue","gender":"male","group":"brown","id":"0E7EANK39QN97BFDTFPQ","lastName":"Torres","status":"marriage"},
      {"basicSalary":2832.61,"birthDate":1390404997815,"email":"eileenrichardson@mediadesain.com","firstName":"Eileen","gender":"female","group":"brown","id":"0FECFPN2MHJDR4Y069QL","lastName":"Richardson","status":"marriage"},
      {"basicSalary":3484.44,"birthDate":1389599989369,"email":"fayelittle@mediadesain.com","firstName":"Faye","gender":"female","group":"purple","id":"0FF1NU5VQ018BXIXNL70","lastName":"Little","status":"divorce"},
      {"basicSalary":2503.61,"birthDate":1468581047317,"email":"shannamoon@mediadesain.com","firstName":"Shanna","gender":"male","group":"purple","id":"0GKZRO8Q7X6FB00QVC9R","lastName":"Moon","status":"marriage"},
      {"basicSalary":2855.16,"birthDate":1400685880585,"email":"mcleancortez@mediadesain.com","firstName":"Mclean","gender":"female","group":"brown","id":"0H2GUXMS5PJKY3MR7G3W","lastName":"Cortez","status":"marriage"},
      {"basicSalary":1638.73,"birthDate":1507317809090,"email":"sparksparks@mediadesain.com","firstName":"Sparks","gender":"female","group":"yellow","id":"0HBO0P3KU7G0TY9BS8F2","lastName":"Parks","status":"divorce"},
      {"basicSalary":2001.24,"birthDate":1510570753505,"email":"fredabass@mediadesain.com","firstName":"Freda","gender":"female","group":"yellow","id":"0HHEWY2LZ4VAFQW82VWE","lastName":"Bass","status":"single"},
      {"basicSalary":1417.12,"birthDate":1416549834623,"email":"bradleybartlett@mediadesain.com","firstName":"Bradley","gender":"male","group":"yellow","id":"0HMVVXGW62FB7SK4EADO","lastName":"Bartlett","status":"marriage"},
      {"basicSalary":3893.65,"birthDate":1535219454577,"email":"alinecantrell@mediadesain.com","firstName":"Aline","gender":"male","group":"brown","id":"0HPVGCM07OY1B2HJAWS2","lastName":"Cantrell","status":"marriage"},
      {"basicSalary":1947.31,"birthDate":1490135329873,"email":"emersonguthrie@mediadesain.com","firstName":"Emerson","gender":"female","group":"yellow","id":"0I3FLCI3953J0HZB23WL","lastName":"Guthrie","status":"divorce"},
      {"basicSalary":3618.33,"birthDate":1533033439845,"email":"weeksrosales@mediadesain.com","firstName":"Weeks","gender":"male","group":"brown","id":"0IUVI39HZFKX218B5IG6","lastName":"Rosales","status":"single"},
      {"basicSalary":3149.73,"birthDate":1422544019155,"email":"agnesellison@mediadesain.com","firstName":"Agnes","gender":"female","group":"purple","id":"0J4J7JU4ZXIQDJJ902RI","lastName":"Ellison","status":"divorce"},
      {"basicSalary":2868.14,"birthDate":1519769192986,"email":"burksscott@mediadesain.com","firstName":"Burks","gender":"male","group":"green","id":"0J9UZWZNKQC6DPUHTGQ3","lastName":"Scott","status":"divorce"},
      {"basicSalary":3377.4,"birthDate":1511861770290,"email":"sofiasimmons@mediadesain.com","firstName":"Sofia","gender":"female","group":"green","id":"0JDHP1OQHUQBOF1MZ15R","lastName":"Simmons","status":"divorce"},
      {"basicSalary":1066.08,"birthDate":1490704383216,"email":"rosettadillon@mediadesain.com","firstName":"Rosetta","gender":"female","group":"blue","id":"0JHPSAJT7XY66OATWAHQ","lastName":"Dillon","status":"marriage"},
      {"basicSalary":2347.91,"birthDate":1557953295550,"email":"luciaallison@mediadesain.com","firstName":"Lucia","gender":"male","group":"brown","id":"0JPCXLV1IBZN5HTKJWF8","lastName":"Allison","status":"marriage"},
      {"basicSalary":1257.66,"birthDate":1536073333509,"email":"matildaallen@mediadesain.com","firstName":"Matilda","gender":"female","group":"green","id":"0JZN462EEZ08XIGKX9GM","lastName":"Allen","status":"single"},
      {"basicSalary":2768.84,"birthDate":1507899641813,"email":"raymonddudley@mediadesain.com","firstName":"Raymond","gender":"female","group":"purple","id":"0KWU0VW3MLQ6TTHLKJ44","lastName":"Dudley","status":"single"},
      {"basicSalary":2932.47,"birthDate":1528086144289,"email":"stewartbeach@mediadesain.com","firstName":"Stewart","gender":"male","group":"purple","id":"0LEEHQ3D0EXIZA73KCTL","lastName":"Beach","status":"marriage"},
      {"basicSalary":1049.52,"birthDate":1465047607007,"email":"morinhendrix@mediadesain.com","firstName":"Morin","gender":"female","group":"yellow","id":"0LPC0R9KBH6VVQ07OATY","lastName":"Hendrix","status":"single"},
      {"basicSalary":3054.84,"birthDate":1390131137452,"email":"sanchezbarnes@mediadesain.com","firstName":"Sanchez","gender":"female","group":"purple","id":"0M9IU2NQI9M8Q0WWWKUO","lastName":"Barnes","status":"single"},
      {"basicSalary":1396.11,"birthDate":1621027587399,"email":"vargasmiranda@mediadesain.com","firstName":"Vargas","gender":"male","group":"yellow","id":"0MO7LHTETBPTNE14SD12","lastName":"Miranda","status":"single"},
      {"basicSalary":3857.86,"birthDate":1577383654529,"email":"estradaconner@mediadesain.com","firstName":"Estrada","gender":"female","group":"blue","id":"0N1H00DC42BEWNA79BOT","lastName":"Conner","status":"single"},
      {"basicSalary":2002.62,"birthDate":1422950545741,"email":"kellyweber@mediadesain.com","firstName":"Kelly","gender":"male","group":"purple","id":"0NC4YJVYWVM5FW1BPAEA","lastName":"Weber","status":"marriage"},
      {"basicSalary":3836.52,"birthDate":1467603732048,"email":"gamblehansen@mediadesain.com","firstName":"Gamble","gender":"male","group":"purple","id":"0NVNP3CTU9Y16E6V99AM","lastName":"Hansen","status":"divorce"},
      {"basicSalary":2555.13,"birthDate":1461921641572,"email":"merrittfields@mediadesain.com","firstName":"Merritt","gender":"male","group":"purple","id":"0O39CB3PJFU696K1WXP1","lastName":"Fields","status":"marriage"},
      {"basicSalary":2340.63,"birthDate":1593690070649,"email":"reginabarber@mediadesain.com","firstName":"Regina","gender":"male","group":"yellow","id":"0O3EY4LIWONMGUXGS5B2","lastName":"Barber","status":"marriage"},
      {"basicSalary":1895.83,"birthDate":1540814026606,"email":"alejandracarlson@mediadesain.com","firstName":"Alejandra","gender":"female","group":"blue","id":"0PSNI9ESYB9X07JSPDGX","lastName":"Carlson","status":"single"},
      {"basicSalary":1395.59,"birthDate":1477032941056,"email":"leannahughes@mediadesain.com","firstName":"Leanna","gender":"female","group":"brown","id":"0QHSOTCK9UJFF1XK1CNP","lastName":"Hughes","status":"marriage"},
      {"basicSalary":2964.5,"birthDate":1516480238588,"email":"juanafranklin@mediadesain.com","firstName":"Juana","gender":"male","group":"green","id":"0QZ46D188YMQ1EKSWDKR","lastName":"Franklin","status":"marriage"},
      {"basicSalary":2451.92,"birthDate":1459455610108,"email":"taylorpatrick@mediadesain.com","firstName":"Taylor","gender":"male","group":"purple","id":"0S5DMALLAB0F5S7LF4MA","lastName":"Patrick","status":"divorce"},
      {"basicSalary":1000.17,"birthDate":1586862306583,"email":"vickywilkerson@mediadesain.com","firstName":"Vicky","gender":"female","group":"brown","id":"0SLR9YE5499FDFKIO3DD","lastName":"Wilkerson","status":"divorce"},
      {"basicSalary":1514.22,"birthDate":1419729084885,"email":"augustasullivan@mediadesain.com","firstName":"Augusta","gender":"female","group":"yellow","id":"0STPWBAPEF55UQSEMC2G","lastName":"Sullivan","status":"marriage"},
      {"basicSalary":3168.08,"birthDate":1481287149190,"email":"leliatalley@mediadesain.com","firstName":"Lelia","gender":"male","group":"green","id":"0SZWZAANLGBYOYD1DLQB","lastName":"Talley","status":"divorce"},
      {"basicSalary":1933.93,"birthDate":1563246158753,"email":"conwayallen@mediadesain.com","firstName":"Conway","gender":"female","group":"green","id":"0T1ICKMGC3J32GN6L65T","lastName":"Allen","status":"single"},
      {"basicSalary":1982.76,"birthDate":1450363949887,"email":"odessastafford@mediadesain.com","firstName":"Odessa","gender":"male","group":"green","id":"0T5OIECRT5LXA237HTWO","lastName":"Stafford","status":"marriage"},
      {"basicSalary":2189.8,"birthDate":1452154612650,"email":"lambertbailey@mediadesain.com","firstName":"Lambert","gender":"female","group":"yellow","id":"0TITAJ0VZTB0M59P1IPZ","lastName":"Bailey","status":"divorce"},
      {"basicSalary":1254.18,"birthDate":1415629878089,"email":"bessielevy@mediadesain.com","firstName":"Bessie","gender":"female","group":"blue","id":"0TN1PW88SXM6KM8RWG74","lastName":"Levy","status":"single"},
      {"basicSalary":1258.01,"birthDate":1474157290415,"email":"bernadineschultz@mediadesain.com","firstName":"Bernadine","gender":"male","group":"purple","id":"0TOZDCCQPKFY8BZKVAQE","lastName":"Schultz","status":"marriage"},
      {"basicSalary":2402.72,"birthDate":1581451849502,"email":"robbinssantiago@mediadesain.com","firstName":"Robbins","gender":"male","group":"green","id":"0U1QWR8OLUB7NHYLV75H","lastName":"Santiago","status":"divorce"},
      {"basicSalary":1368.96,"birthDate":1455476103119,"email":"holdersims@mediadesain.com","firstName":"Holder","gender":"male","group":"brown","id":"0U4Q6T3RAG9SSUIC53BK","lastName":"Sims","status":"single"},
      {"basicSalary":2127.01,"birthDate":1501595396919,"email":"shaunarivera@mediadesain.com","firstName":"Shauna","gender":"male","group":"green","id":"0UIYE2W8J6DDEG7KIP5Y","lastName":"Rivera","status":"marriage"},
      {"basicSalary":3537.17,"birthDate":1444154292838,"email":"janellejennings@mediadesain.com","firstName":"Janelle","gender":"female","group":"blue","id":"0UNU3MRXVXU60THRE7DS","lastName":"Jennings","status":"divorce"},
      {"basicSalary":3178.87,"birthDate":1459087684868,"email":"ermagallegos@mediadesain.com","firstName":"Erma","gender":"male","group":"purple","id":"0URLS8NOE5CWZ1JFO22T","lastName":"Gallegos","status":"divorce"},
      {"basicSalary":2080.24,"birthDate":1521846235525,"email":"reidwilkinson@mediadesain.com","firstName":"Reid","gender":"female","group":"purple","id":"0V87BIKSPECVGOVQCBYQ","lastName":"Wilkinson","status":"marriage"},
      {"basicSalary":2849.9,"birthDate":1451418402971,"email":"randolphhickman@mediadesain.com","firstName":"Randolph","gender":"female","group":"yellow","id":"0VFO9F36BQ3K4BX5S86E","lastName":"Hickman","status":"marriage"},
      {"basicSalary":2719.03,"birthDate":1451704612785,"email":"myersfields@mediadesain.com","firstName":"Myers","gender":"female","group":"green","id":"0VIXSBT0Q8OVQ3C3WZIC","lastName":"Fields","status":"single"},
      {"basicSalary":1350.67,"birthDate":1606639558561,"email":"sandyfisher@mediadesain.com","firstName":"Sandy","gender":"female","group":"yellow","id":"0VM8HPJW6VL26M9AO1XC","lastName":"Fisher","status":"divorce"},
      {"basicSalary":1643.86,"birthDate":1467732136733,"email":"esmeraldamayer@mediadesain.com","firstName":"Esmeralda","gender":"female","group":"green","id":"0VUIWPL43J97AK3BPXMD","lastName":"Mayer","status":"divorce"}
    ]
    this.data = data.slice(this.showitem.start, this.showitem.end + this.showperitem)
    this.alldata = data;
    this.showitem.end = this.showitem.end + this.showperitem;
  }
  
  loadMore(){
    // Get next partial items and marge to main data to show on page 
    this.showitem.start = this.showitem.start + this.showperitem;
    this.showitem.end = this.showitem.end + this.showperitem
    let more = this.alldata.slice(this.showitem.start, this.showitem.end)
    this.data = [...this.data, ...more]
  }

}
