//d3.json("data.json", function(error, data){
//    if (error){return console.warn(error);}
var calculated_width = 1600;
var calculated_height = 900;
var data =
[
      {
        Name: "المنطقة الشرقية",
        Main: "1",
        A: "1",
        B: "0.999529350271207",
        Attribute: "Environment",
        Weight: "1.00",
      },
      {
        Name: "المنطقة الشرقية",
        Main: "0.99059219475",
        A: "0.9951062157280098",
        B: "0.9188809108115312",
        Attribute: "Jobs",
        Weight: "1.00",
      },
      {
        Name: "المنطقة الشرقية",
        Main: "0.9569890685",
        A: "0.9853276225904235",
        B: "0.8618136371757861",
        Attribute: "Safety",
        Weight: "1.00",
      },
      {
        Name: "الرياض",
        Main: "0.9413022715",
        A: "0.8631025337587965",
        B: "0.9270540563386235",
        Attribute: "Health",
        Weight: "1.00",
      },
      {
        Name: "مكة المكرمة",
        Main: "0.9319414930000001",
        A: "0.963224663735777",
        B: "0.8408346688498796",
        Attribute: "Safety",
        Weight: "1.00",
      },
      {
        Name: "عسير",
        Main: "0.919610618",
        A: "0.9086571219413055",
        B: "0.874517494783759",
        Attribute: "Safety",
        Weight: "1.00",
      },
      {
        Name: "القصيم",
        Main: "0.9106633905",
        A: "0.910663390633141",
        B: "0.910663390633141",
        Attribute: "Income",
        Weight: "1.00",
      },
      {
        Name: "حائل",
        Main: "0.9066774719999999",
        A: "0.8326535787493929",
        B: "0.8920326070877624",
        Attribute: "Health",
        Weight: "1.00",
      },
      {
        Name: "المدينة المنورة",
        Main: "0.9020212830000001",
        A: "0.902021283183333",
        B: "0.902021283183333",
        Attribute: "Income",
        Weight: "1.00",
      },
      {
        Name: "مكة المكرمة",
        Main: "0.8983689725",
        A: "0.8346915867080025",
        B: "0.8872474444512035",
        Attribute: "Work-Life Balance",
        Weight: "1.00",
      },
      {
        Name: "المدينة المنورة",
        Main: "0.893038724",
        A: "0.8226104689250016",
        B: "0.890872973943915",
        Attribute: "Health",
        Weight: "1.00",
      },
      {
        Name: "الرياض",
        Main: "0.8866129705000001",
        A: "0.894200360927796",
        B: "0.885602646699413",
        Attribute: "Environment",
        Weight: "1.00",
      },
      {
        Name: "عسير",
        Main: "0.879184426",
        A: "0.8431147284571889",
        B: "0.82313944954866",
        Attribute: "Work-Life Balance",
        Weight: "1.00",
      },
      {
        Name: "القصيم",
        Main: "0.8621337920000001",
        A: "0.877946298314999",
        B: "0.8148348188739255",
        Attribute: "Safety",
        Weight: "1.00",
      },
      {
        Name: "حائل",
        Main: "0.8604138545",
        A: "0.8944157262091206",
        B: "0.799505054821672",
        Attribute: "Safety",
        Weight: "1.00",
      },
      {
        Name: "المنطقة الشرقية",
        Main: "0.857936433",
        A: "0.8188621330910165",
        B: "0.814802096320872",
        Attribute: "Health",
        Weight: "1.00",
      },
      {
        Name: "الرياض",
        Main: "0.856260825",
        A: "0.8235386778447973",
        B: "0.8515203737197456",
        Attribute: "Education",
        Weight: "1.00",
      },
      {
        Name: "المدينة المنورة",
        Main: "0.8527523243333333",
        A: "0.8527523240348139",
        B: "0.8527523240348139",
        Attribute: "Housing",
        Weight: "1.00",
      },
      {
        Name: "عسير",
        Main: "0.8437294040000001",
        A: "0.7795429090678555",
        B: "0.826239935757909",
        Attribute: "Health",
        Weight: "1.00",
      },
      {
        Name: "القصيم",
        Main: "0.843160415",
        A: "0.866216912819083",
        B: "0.8138093298939597",
        Attribute: "Jobs",
        Weight: "1.00",
      },
      {
        Name: "تبوك",
        Main: "0.842299234",
        A: "0.788964946974724",
        B: "0.821032559596513",
        Attribute: "Work-Life Balance",
        Weight: "1.00",
      },
      {
        Name: "الحدود الشمالية",
        Main: "0.8383927445",
        A: "0.8881203977875796",
        B: "0.7702576954507545",
        Attribute: "Safety",
        Weight: "1.00",
      },
      {
        Name: "المدينة المنورة",
        Main: "0.8365767662500001",
        A: "0.8844236083561615",
        B: "0.7792971849235175",
        Attribute: "Jobs",
        Weight: "1.00",
      },
      {
        Name: "مكة المكرمة",
        Main: "0.8310793535",
        A: "0.8460136005010147",
        B: "0.7990363548541914",
        Attribute: "Jobs",
        Weight: "1.00",
      },
      {
        Name: "مكة المكرمة",
        Main: "0.8274424380000001",
        A: "0.840929477716666",
        B: "0.8182963339397955",
        Attribute: "Environment",
        Weight: "1.00",
      },
      {
        Name: "تبوك",
        Main: "0.819643025",
        A: "0.767494875425287",
        B: "0.799029500644534",
        Attribute: "Health",
        Weight: "1.00",
      },
      {
        Name: "الحدود الشمالية",
        Main: "0.80930927525",
        A: "0.8473801409358384",
        B: "0.7478207472976652",
        Attribute: "Jobs",
        Weight: "1.00",
      },
      {
        Name: "الرياض",
        Main: "0.80355679875",
        A: "0.8356133096648405",
        B: "0.7614945658312613",
        Attribute: "Jobs",
        Weight: "1.00",
      },
      {
        Name: "القصيم",
        Main: "0.802934214",
        A: "0.743163711671351",
        B: "0.7861229686608485",
        Attribute: "Health",
        Weight: "1.00",
      },
      {
        Name: "الباحة",
        Main: "0.802215959815476",
        A: "0.7735116071703135",
        B: "0.766740586457582",
        Attribute: "Work-Life Balance",
        Weight: "1.00",
      },
      {
        Name: "تبوك",
        Main: "0.8018089644999999",
        A: "0.8812584701547295",
        B: "0.721471545202108",
        Attribute: "Safety",
        Weight: "1.00",
      },
      {
        Name: "القصيم",
        Main: "0.8004528804141531",
        A: "0.7648837852471424",
        B: "0.7724212289953141",
        Attribute: "Work-Life Balance",
        Weight: "1.00",
      },
      {
        Name: "نجران",
        Main: "0.7938667426666667",
        A: "0.7262754011471637",
        B: "0.8346098916695404",
        Attribute: "Education",
        Weight: "1.00",
      },
      {
        Name: "مكة المكرمة",
        Main: "0.7916589049999999",
        A: "0.7442405691814583",
        B: "0.8099205483520736",
        Attribute: "Education",
        Weight: "1.00",
      },
      {
        Name: "حائل",
        Main: "0.7909199230367254",
        A: "0.738099201141569",
        B: "0.7773455506576945",
        Attribute: "Work-Life Balance",
        Weight: "1.00",
      },
      {
        Name: "الرياض",
        Main: "0.7889383817400087",
        A: "0.7889383817837686",
        B: "0.7889383817837686",
        Attribute: "Housing",
        Weight: "1.00",
      },
      {
        Name: "نجران",
        Main: "0.788024187",
        A: "0.787194119067878",
        B: "0.732442894286687",
        Attribute: "Work-Life Balance",
        Weight: "1.00",
      },
      {
        Name: "مكة المكرمة",
        Main: "0.7868979245000001",
        A: "0.732436444707424",
        B: "0.7741990870860715",
        Attribute: "Health",
        Weight: "1.00",
      },
      {
        Name: "الحدود الشمالية",
        Main: "0.7764098086666666",
        A: "0.770809666710385",
        B: "0.7566745544214766",
        Attribute: "Education",
        Weight: "1.00",
      },
      {
        Name: "الجوف",
        Main: "0.769238274",
        A: "0.823856235870318",
        B: "0.7272786304096395",
        Attribute: "Safety",
        Weight: "1.00",
      },
      {
        Name: "حائل",
        Main: "0.7602656729999999",
        A: "0.763294931115847",
        B: "0.7713465360323251",
        Attribute: "Environment",
        Weight: "1.00",
      },
      {
        Name: "الجوف",
        Main: "0.7574150073333333",
        A: "0.6604605656232622",
        B: "0.6604605656232622",
        Attribute: "Housing",
        Weight: "1.00",
      },
      {
        Name: "الجوف",
        Main: "0.7558528043333332",
        A: "0.7620095619444163",
        B: "0.7236142667050359",
        Attribute: "Education",
        Weight: "1.00",
      },
      {
        Name: "نجران",
        Main: "0.7520371615",
        A: "0.8378024469180021",
        B: "0.7166818524234565",
        Attribute: "Safety",
        Weight: "1.00",
      },
      {
        Name: "المدينة المنورة",
        Main: "0.7510229820000001",
        A: "0.8228421096784535",
        B: "0.743035872859373",
        Attribute: "Safety",
        Weight: "1.00",
      },
      {
        Name: "تبوك",
        Main: "0.7508822643333333",
        A: "0.7056686806576447",
        B: "0.771415752714065",
        Attribute: "Education",
        Weight: "1.00",
      },
      {
        Name: "حائل",
        Main: "0.7396807426666667",
        A: "0.7157060834144287",
        B: "0.7398999556353877",
        Attribute: "Education",
        Weight: "1.00",
      },
      {
        Name: "تبوك",
        Main: "0.7395918936666668",
        A: "0.7395918935730371",
        B: "0.7395918935730371",
        Attribute: "Housing",
        Weight: "1.00",
      },
      {
        Name: "الرياض",
        Main: "0.7387870325",
        A: "0.8678200634848955",
        B: "0.6492903628952795",
        Attribute: "Safety",
        Weight: "1.00",
      },
      {
        Name: "الجوف",
        Main: "0.73685354075",
        A: "0.8103858423203845",
        B: "0.666726779930188",
        Attribute: "Jobs",
        Weight: "1.00",
      },
      {
        Name: "نجران",
        Main: "0.7352930455",
        A: "0.7507907988794225",
        B: "0.7363957096552225",
        Attribute: "Environment",
        Weight: "1.00",
      },
      {
        Name: "حائل",
        Main: "0.7294558859999999",
        A: "0.7294558860781087",
        B: "0.7294558860781087",
        Attribute: "Housing",
        Weight: "1.00",
      },
      {
        Name: "تبوك",
        Main: "0.72623620675",
        A: "0.7584759612487241",
        B: "0.722338735408459",
        Attribute: "Jobs",
        Weight: "1.00",
      },
      {
        Name: "حائل",
        Main: "0.71727595025",
        A: "0.7490655444911853",
        B: "0.7081130386160881",
        Attribute: "Jobs",
        Weight: "1.00",
      },
      {
        Name: "المدينة المنورة",
        Main: "0.6959811203333333",
        A: "0.6573369544745343",
        B: "0.7170465851604018",
        Attribute: "Education",
        Weight: "1.00",
      },
      {
        Name: "نجران",
        Main: "0.69074317625",
        A: "0.7305474023449054",
        B: "0.6738944678855123",
        Attribute: "Jobs",
        Weight: "1.00",
      },
      {
        Name: "المنطقة الشرقية",
        Main: "0.6881047283333334",
        A: "0.6256514861174423",
        B: "0.7325226140026001",
        Attribute: "Education",
        Weight: "1.00",
      },
      {
        Name: "نجران",
        Main: "0.6821158876666668",
        A: "0.6821158877015318",
        B: "0.6821158877015318",
        Attribute: "Housing",
        Weight: "1.00",
      },
      {
        Name: "المدينة المنورة",
        Main: "0.677684604",
        A: "0.6809032316946371",
        B: "0.6901198427010785",
        Attribute: "Environment",
        Weight: "1.00",
      },
      {
        Name: "الباحة",
        Main: "0.6745098425",
        A: "0.764786247805784",
        B: "0.644695392815559",
        Attribute: "Safety",
        Weight: "1.00",
      },
      {
        Name: "عسير",
        Main: "0.6702363306666667",
        A: "0.6702363307230857",
        B: "0.6702363307230857",
        Attribute: "Housing",
        Weight: "1.00",
      },
      {
        Name: "القصيم",
        Main: "0.6685321163333334",
        A: "0.668532116289748",
        B: "0.668532116289748",
        Attribute: "Housing",
        Weight: "1.00",
      },
      {
        Name: "الحدود الشمالية",
        Main: "0.6460348035000001",
        A: "0.662841294461342",
        B: "0.6429686081110375",
        Attribute: "Environment",
        Weight: "1.00",
      },
      {
        Name: "الباحة",
        Main: "0.64428580925",
        A: "0.7052603941621375",
        B: "0.620796622842093",
        Attribute: "Jobs",
        Weight: "1.00",
      },
      {
        Name: "جازان",
        Main: "0.643771773",
        A: "0.6180659749371316",
        B: "0.629878912110902",
        Attribute: "Health",
        Weight: "1.00",
      },
      {
        Name: "القصيم",
        Main: "0.6429559844999999",
        A: "0.6611481115012305",
        B: "0.6407685742909786",
        Attribute: "Environment",
        Weight: "1.00",
      },
      {
        Name: "مكة المكرمة",
        Main: "0.618911676",
        A: "0.6189116761865637",
        B: "0.6189116761865637",
        Attribute: "Housing",
        Weight: "1.00",
      },
      {
        Name: "المدينة المنورة",
        Main: "0.6029759525",
        A: "0.541644758716535",
        B: "0.652151786198895",
        Attribute: "Work-Life Balance",
        Weight: "1.00",
      },
      {
        Name: "الحدود الشمالية",
        Main: "0.598231638",
        A: "0.5982316380584293",
        B: "0.5982316380584293",
        Attribute: "Housing",
        Weight: "1.00",
      },
      {
        Name: "الباحة",
        Main: "0.593006443",
        A: "0.5543759641596755",
        B: "0.608287018448469",
        Attribute: "Health",
        Weight: "1.00",
      },
      {
        Name: "تبوك",
        Main: "0.5922089895",
        A: "0.6263695387719745",
        B: "0.574818375767186",
        Attribute: "Environment",
        Weight: "1.00",
      },
      {
        Name: "المنطقة الشرقية",
        Main: "0.5902328663334886",
        A: "0.5902328663334886",
        B: "0.5902328663334886",
        Attribute: "Income",
        Weight: "1.00",
      },
      {
        Name: "الباحة",
        Main: "0.5873391193333334",
        A: "0.5821561215791613",
        B: "0.5869873194772209",
        Attribute: "Education",
        Weight: "1.00",
      },
      {
        Name: "جازان",
        Main: "0.585992175415784",
        A: "0.6793128980606613",
        B: "0.5479318732042757",
        Attribute: "Jobs",
        Weight: "1.00",
      },
      {
        Name: "الرياض",
        Main: "0.5694553984999999",
        A: "0.56945539823855",
        B: "0.56945539823855",
        Attribute: "Income",
        Weight: "1.00",
      },
      {
        Name: "نجران",
        Main: "0.5631531869999999",
        A: "0.506186471122757",
        B: "0.6010994061833015",
        Attribute: "Health",
        Weight: "1.00",
      },
      {
        Name: "الرياض",
        Main: "0.562566413",
        A: "0.4755412546989405",
        B: "0.6509494053402525",
        Attribute: "Work-Life Balance",
        Weight: "1.00",
      },
      {
        Name: "الباحة",
        Main: "0.558573062",
        A: "0.5585730618553341",
        B: "0.5585730618553341",
        Attribute: "Housing",
        Weight: "1.00",
      },
      {
        Name: "عسير",
        Main: "0.5544605503333334",
        A: "0.5265843619207566",
        B: "0.5791387300178453",
        Attribute: "Education",
        Weight: "1.00",
      },
      {
        Name: "جازان",
        Main: "0.544344764",
        A: "0.5443447638562007",
        B: "0.5443447638562007",
        Attribute: "Housing",
        Weight: "1.00",
      },
      {
        Name: "جازان",
        Main: "0.5376354695000001",
        A: "0.6096685417371954",
        B: "0.6081037494140055",
        Attribute: "Safety",
        Weight: "1.00",
      },
      {
        Name: "عسير",
        Main: "0.530015736",
        A: "0.529116129209412",
        B: "0.5580421100016291",
        Attribute: "Environment",
        Weight: "1.00",
      },
      {
        Name: "الحدود الشمالية",
        Main: "0.5268336315",
        A: "0.468589526848545",
        B: "0.5409015025041737",
        Attribute: "Health",
        Weight: "1.00",
      },
      {
        Name: "المنطقة الشرقية",
        Main: "0.5180862973333333",
        A: "0.518086297536577",
        B: "0.518086297536577",
        Attribute: "Housing",
        Weight: "1.00",
      },
      {
        Name: "المنطقة الشرقية",
        Main: "0.505386854031191",
        A: "0.40013111524205647",
        B: "0.6187831398603736",
        Attribute: "Work-Life Balance",
        Weight: "1.00",
      },
      {
        Name: "تبوك",
        Main: "0.504549519",
        A: "0.5045495190396365",
        B: "0.5045495190396365",
        Attribute: "Income",
        Weight: "1.00",
      },
      {
        Name: "القصيم",
        Main: "0.49997978433333334",
        A: "0.5005795097443917",
        B: "0.503826094770746",
        Attribute: "Education",
        Weight: "1.00",
      },
      {
        Name: "جازان",
        Main: "0.495862659862093",
        A: "0.47425671144948",
        B: "0.544070329405488",
        Attribute: "Work-Life Balance",
        Weight: "1.00",
      },
      {
        Name: "الجوف",
        Main: "0.468045113",
        A: "0.4316740981805115",
        B: "0.473101265822785",
        Attribute: "Health",
        Weight: "1.00",
      },
      {
        Name: "عسير",
        Main: "0.465735028",
        A: "0.5725298031199085",
        B: "0.44843819687600195",
        Attribute: "Jobs",
        Weight: "1.00",
      },
      {
        Name: "الحدود الشمالية",
        Main: "0.458984879946019",
        A: "0.409605993734777",
        B: "0.545960378492527",
        Attribute: "Work-Life Balance",
        Weight: "1.00",
      },
      {
        Name: "جازان",
        Main: "0.448802807",
        A: "0.452770797388327",
        B: "0.45223251718175134",
        Attribute: "Education",
        Weight: "1.00",
      },
      {
        Name: "الحدود الشمالية",
        Main: "0.43882683899999997",
        A: "0.43882683879830453",
        B: "0.43882683879830453",
        Attribute: "Income",
        Weight: "1.00",
      },
      {
        Name: "الباحة",
        Main: "0.4266370355",
        A: "0.4351910184996505",
        B: "0.44024468111121606",
        Attribute: "Environment",
        Weight: "1.00",
      },
      {
        Name: "جازان",
        Main: "0.423900524",
        A: "0.4458083590277935",
        B: "0.4317213444986055",
        Attribute: "Environment",
        Weight: "1.00",
      },
      {
        Name: "الجوف",
        Main: "0.414822679576433",
        A: "0.3711225477205925",
        B: "0.4768535336797855",
        Attribute: "Work-Life Balance",
        Weight: "1.00",
      },
      {
        Name: "عسير",
        Main: "0.401172805",
        A: "0.4011728047390965",
        B: "0.4011728047390965",
        Attribute: "Income",
        Weight: "1.00",
      },
      {
        Name: "حائل",
        Main: "0.3087290095",
        A: "0.308729009528146",
        B: "0.308729009528146",
        Attribute: "Income",
        Weight: "1.00",
      },
      {
        Name: "الجوف",
        Main: "0.30710925450000004",
        A: "0.3071092546984015",
        B: "0.3071092546984015",
        Attribute: "Income",
        Weight: "1.00",
      },
      {
        Name: "مكة المكرمة",
        Main: "0.302020002",
        A: "0.30202000198646806",
        B: "0.30202000198646806",
        Attribute: "Income",
        Weight: "1.00",
      },
      {
        Name: "الجوف",
        Main: "0.2397500195",
        A: "0.2497892645757915",
        B: "0.2538816465562825",
        Attribute: "Environment",
        Weight: "1.00",
      },
      {
        Name: "نجران",
        Main: "0.184115038",
        A: "0.184115037992639",
        B: "0.184115037992639",
        Attribute: "Income",
        Weight: "1.00",
      },
      {
        Name: "الباحة",
        Main: "0.1260184969046325",
        A: "0.12601849692812295",
        B: "0.12601849692812295",
        Attribute: "Income",
        Weight: "1.00",
      },
      {
        Name: "جازان",
        Main: "0.101545677910685",
        A: "0.10154567806491349",
        B: "0.10154567806491349",
        Attribute: "Income",
        Weight: "1.00",
      },
];
    var aggregated_data = [];
    var weights = {};
    var x,y;
    d3.nest()
      .key((d) => d.Attribute)
      .entries(data)
      .map((d) => (weights[d.key] = +d.values[0]["Weight"]));
    var hovered = [];
    var sortKey = "key";
    var abMode = false;
    var colors = d3
      .scaleOrdinal()
      .range([
        "#507109",
        "#5D830B",
        "#6A9410",
        "#7EAC13",
        "#8CB918",
        "#99C61D",
        "#A7D421",
        "#B7DF2A",
        "#C2EE2B",
        "#CEF63C",
        "#DBF679",
      ])
      .domain(Object.keys(weights));

    function flowerBloomer(flower) {
      var petelLength = d3.scaleLinear().range([0, 30]);
      var attribs = Object.keys(weights);
      var pie = d3
        .pie()
        .sort(null)
        .padAngle(0.09)
        .value((d) => d)(Object.values(weights));
      if (flower.selectAll("*").empty()) {
        //create
        flower
          .append("circle")
          .attr("class", "flowerbg")
          .attr("r", 40)
          .style("fill", "url(#radgrad)");
        flower
          .selectAll(".petels")
          .data(function (d) {
            return attribs.map((a) => {
              return {
                name: a,
                value: d.values.filter((v) => v.Attribute == a)[0]["Main"],
              };
            });
          })
          .enter()
          .append("g")
          .attr("class", "petels")
          .attr("data-attribute", (d) => d.name)
          .append("path")
          .attr("d", (p, i) => {
            var pied = pie[i];
            var val = petelLength(p.value);
            var sa = pied.startAngle + pied.padAngle;
            var ea = pied.endAngle - pied.padAngle;
            var ang =
              Math.min(sa, ea) + (Math.max(sa, ea) - Math.min(sa, ea)) / 2;

            return d3
              .line()
              .curve(d3.curveBundle.beta(1))
              .x((k) => k[0])
              .y((k) => k[1])([
              [0, 0],
              [val * 0.8 * Math.sin(sa), val * 0.8 * Math.cos(sa)],
              [val * 1.2 * Math.sin(ang), val * 1.2 * Math.cos(ang)],
              [val * 0.8 * Math.sin(ea), val * 0.8 * Math.cos(ea)],
              [0, 0],
            ]);
          })
          .attr("transform", (p, i) => {
            return `translate(0 25) rotate(${
              ((pie[i].startAngle + pie[i].padAngle) * 180) / Math.PI - 165
            })`;
          });
      }
      //update only
      flower
        .selectAll(".petels path")
        .attr("fill", (p) => {
          return colors(p.name);
        })
        .transition()
        .attr("d", (p, i) => {
          var pied = pie[i];
          var val = petelLength(p.value);
          var sa = pied.startAngle + pied.padAngle;
          var ea = pied.endAngle - pied.padAngle;
          var ang =
            Math.min(sa, ea) + (Math.max(sa, ea) - Math.min(sa, ea)) / 2;

          return d3
            .line()
            .curve(d3.curveBundle.beta(1))
            .x((k) => k[0])
            .y((k) => k[1])([
            [0, 0],
            [val * 0.8 * Math.sin(sa), val * 0.8 * Math.cos(sa)],
            [val * 1.2 * Math.sin(ang), val * 1.2 * Math.cos(ang)],
            [val * 0.8 * Math.sin(ea), val * 0.8 * Math.cos(ea)],
            [0, 0],
          ]);
        })
        .delay(1 * 1e3)
        .duration(3 * 1e3)
        .attr("transform", "translate(0 0) rotate(0)");
    }

    function plotAB(bud) {
      if (bud.selectAll("*").empty()) {
        //create
          // Males
        bud
          .append("circle")
          .attr("class", "nodeA")
          .attr("r", 6)
          .style("fill", "#188CB9"); //253356
          // Females
        bud
          .append("circle")
          .attr("class", "nodeB")
          .attr("r",6)
          .style("fill", "#B9188C"); //FF736C
          // Main
        bud
          .append("circle")
          .attr("class", "nodeCenter")
          .attr("r", 4)
          .style("fill", "#828282");
      }
      //update only
      bud.select(".nodeA").attr("cy", function (d) {
        return calculated_height - y(d.Main - d.A);
      });
      bud.select(".nodeB").attr("cy", function (d) {
        return calculated_height - y(d.Main - d.B);
      });
    }

    function balanceweights(w) {
      var sum = d3.sum(Object.values(w));
      var len = Object.keys(w).length;
      var n = {};
      Object.keys(w).map((d) => {
        n[d] = w[d] / (sum / len);
      });
      return n;
    }

    function update() {
      var balancedWeights = balanceweights(weights);
      var agg = d3
        .nest()
        .key(function (d) {
          return d["Name"];
        })
        .entries(data)
        .map(function (country) {
          country["Main"] =
            10 *
            d3.mean(
              country.values.map(
                (d) => balancedWeights[d["Attribute"]] * +d["Main"]
              )
            );
          country["A"] =
            10 *
            d3.mean(
              country.values.map(
                (d) => balancedWeights[d["Attribute"]] * +d["A"]
              )
            );
          country["B"] =
            10 *
            d3.mean(
              country.values.map(
                (d) => balancedWeights[d["Attribute"]] * +d["B"]
              )
            );
          return country;
        });
      agg = agg.sort(function (a, b) {
        return d3.ascending(a[sortKey], b[sortKey]);
      });
      aggregated_data = agg;

      var margin = { top: 40, right: 10, bottom: 10, left: 40 };
      x = d3
        .scaleBand()
        .range([0, calculated_width])
        .padding(0.4)
        .domain(
          aggregated_data.map(function (d) {
            return d.key;
          })
        );
      var paddingInPixel = x.bandwidth() * x.padding();
      y = d3
        .scaleLinear()
        .range([calculated_height, 0])
        .domain([
          0,
          d3.max(aggregated_data, function (d) {
            return Math.max(d["Main"], d["A"], d["B"]);
          }),
        ]);

      //set width and height of the chart
      dom_node.attr("height", calculated_height + margin.top + margin.bottom);
      dom_node
        .select("svg")
        .attr("width", calculated_width + margin.left + margin.right)
        .attr("height", calculated_height + margin.top + margin.bottom);
      //chart mode selection
      dom_node
        .select("svg")
        .select(".root")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
        .classed("abMode", abMode);
      //setup flowers
      var countries = dom_node
        .select("svg")
        .select(".root")
        .selectAll(".countries")
        .data(aggregated_data, (d) => d.key);
      //enters
      var countryEnter = countries
        .enter()
        .append("g")
        .attr("class", "countries")
        .attr("data-name", (d) => d["key"])
        .attr("transform", function (d) {
          var xd = x(d.key) + x.bandwidth() / 2;
          var yd = y(0);
          return "translate(" + xd + "," + yd + ")";
        });
      countryEnter
        .transition()
        .duration(3 * 1e3)
        .attr("transform", function (d) {
          var xd = x(d.key) + x.bandwidth() / 2;
          var yd = y(d["Main"]);
          return "translate(" + xd + "," + yd + ")";
        });
      countryEnter
        .append("rect")
        .attr("class", "hoverhelper")
        .attr("x", -x.bandwidth() / 2 - paddingInPixel)
        .attr("y", function (d) {
          return -y(d["Main"]);
        })
        .attr("width", x.bandwidth() + paddingInPixel * 2)
        .attr("height", function (d) {
          return calculated_height;
        })
        .attr("fill", "rgba(0,0,0,0)");
      countryEnter
        .append("rect")
        .attr("class", "bar")
        .attr("width", 1)
        .attr("height", function (d) {
          return calculated_height - y(d["Main"]);
        })
        .style("fill", "url(#grad)");
      countryEnter.append("g").attr("class", "flower").call(flowerBloomer);
      countryEnter.append("g").attr("class", "plotab").call(plotAB);
      countryEnter
        .append("text")
        .attr("class", "labelBg")
        .text(function (d) {
          return d.key;
        });
      countryEnter
        .append("text")
        .attr("class", "label")
        .text(function (d) {
          return d.key;
        });
      countryEnter.on("click", function (d) {
        if (hovered[0] == d.key) {
          hovered = [];
          d3.select(this).classed("hover", 0);
        } else {
          hovered = [d.key];
          dom_node
            .selectAll(".countries")
            .classed("hover", (a) => a.key == d.key);
          d3.select(this).each(function () {
            this.parentNode.appendChild(this);
          });
        }
      });

      //updates only
      countries
        .transition()
        .duration(1 * 1e3)
        .attr("transform", function (d) {
          var xd = x(d.key) + x.bandwidth() / 2;
          var yd = y(d["Main"]);
          return "translate(" + xd + "," + yd + ")";
        });
      countries.select(".bar").attr("height", function (d) {
        return calculated_height - y(d["Main"]);
      });

      countries.select(".flower").call(flowerBloomer);
      countries.select(".plotab").call(plotAB);

      //exits
      countries.exit().remove();

      // update the y Axis
      var yscale = d3.scaleLinear()
            .domain([0, 1])
            .range([calculated_height - 50, 0]); dom_node.select(".leftaxis").call(d3.axisLeft(yscale));
    }

    var dom_node = d3.select("#App").style("display", "block");
    //event handlers..
    var switcher = dom_node.select(".switched");
    switcher.select(".alpha").on("click", function () {
      dom_node.select(".switched").classed("alpha", true);
      dom_node.select(".switched").classed("ranked", false);
      sortKey = "key";
      update();
    });
    switcher.select(".ranked").on("click", function () {
      dom_node.select(".switched").classed("alpha", false);
      dom_node.select(".switched").classed("ranked", true);
      sortKey = "Main";
      update();
    });
    switcher.select(".flowering").on("click", function () {
      dom_node.select(".switched").classed("flowering", true);
      dom_node.select(".switched").classed("budding", false);
      abMode = false;
        // Hide gender legend
        var x = document.getElementById("legend");
        x.style.display = "none";
        var y = document.getElementById("color-scale");
        y.style.display = "inline";
      update();
    });
    switcher.select(".budding").on("click", function () {
      dom_node.select(".switched").classed("flowering", false);
      dom_node.select(".switched").classed("budding", true);
      abMode = true;
      // Show gender legend
        var x = document.getElementById("legend");
        x.style.display = "inline";
        var y = document.getElementById("color-scale");
        y.style.display = "none";
      update();
    });
    update();
//}