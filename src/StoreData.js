

import MyartImage from "./components/section-1/images/MayART_T1_PC_CC_1x_EN._SY304_CB590890459_.jpg";
import Pharmacy from "./components/section-1/images/CC_low_3._SY304_CB592656736_.jpg";
import pc from './components/section-1/images/PC_CategoryCard_379X304_1._SY304_CB614835787_.jpg'
import clearneceStore from './components/section-1/images/Clearance_store_Desktop_CC_1x._SY304_CB628315133_.jpg'
import mob1 from "./components/section-1/images/advertiesmentImages/D78091548_MayART_Central-Latest-Launches-Page_DEsign-SIM_PC_QuadCard_186X116_1._SY116_CB591041374_.jpg";

import mob2 from "./components/section-1/images/advertiesmentImages/D78091548_MayART_Central-Latest-Launches-Page_DEsign-SIM_PC_QuadCard_186X116_2._SY116_CB591041374_.jpg";
import mob3 from "./components/section-1/images/advertiesmentImages/D78091548_MayART_Central-Latest-Launches-Page_DEsign-SIM_PC_QuadCard_186X116_3._SY116_CB591041374_.jpg";
import mob4 from "./components/section-1/images/advertiesmentImages/D78091548_MayART_Central-Latest-Launches-Page_DEsign-SIM_PC_QuadCard_186X116_4._SY116_CB591041374_.jpg";
// import mob5 from './components/section-1/images/MF-1-186-116._SY116_CB636110853_.jpg';
// import mob6 from './components/section-1/images/MF-2-186-116._SY116_CB636110853_.jpg'
// import mob7 from './components/section-1/images/MF-3-186-116._SY116_CB636110853_.jpg'
// import mob8 from './components/section-1/images/MF-4-186-116._SY116_CB636110853_.jpg'
// import mob9 from './components/section-1/images/advertiesmentImages/kitchen186._SY116_CB592083129_.jpg'
// import mob10 from './components/section-1/images/advertiesmentImages/xcm_banners_tile4-home_186x116_in-en._SY116_CB612501080_.jpg'
// import mob11 from './components/section-1/images/advertiesmentImages/xcm_banners_tile2-kitchen_186x116_in-en._SY116_CB612501062_.jpg'
import man from './components/section-1/images/advertiesmentImages/61t4dx-94TL._AC_UL600_FMwebp_QL65_.webp'
// deals images
import Bag from './components/section-1/images/advertiesmentImages/bag.jpg'
import shoes from './components/section-1/81JyI9C7exL._AC_UL600_FMwebp_QL65_.webp'

const storeData = [
  {
    type: "great-summber-sale",
    heading: "Great Summer sale",
    img: MyartImage,
    store: [],
    show: "See All",
  },
  {
    type: "pharmacy",
    heading: "Up to 50% off | Monitor blood sugar at home",
    img: Pharmacy,
    store: [],
    show: "See All",
  },
  {
    type: "upcomings-mobiles",
    heading: "Latest and upcoming launches",
    store: [
      {
        text: "OnePlus Nord CE 3 Lite 5G | Starting ₹19,999",
        img: mob1,
      },
      {
        text: "Samsung M14 5G | Starting ₹14,990",
        img: mob2,
      },
      {
        text: "Realme narzo N55 | Starting ₹10,999",
        img: mob3,
      },
      {
        text: "Explore all new launches",
        img: mob4,
      },
    ],

    show: "See All offers",
  },
  {
    type: "bluetooths",
    heading: "Bluetooth Calling Smartwatch starts at ₹1,999",
    img : pc,
    store: [],
    show: "See All",
  },
  {
    type: "t-shirt",
    heading: "Starting ₹79 | Amazon Brands & more",
    img : man,
    store: [],
    show: "See All",
  },

  {
    type: "bags",
    heading: "Up to 60% off | Styles for men",
    // img : pc,
    img: Bag,
    store: [],
    show: "See All",
  },

  {
    type: "shoes",
    heading: "Up to 70% off | Clearance store",
    img: shoes,
    // img : clearneceStore,
    store: [],
    show: "See All",
  },

  {
    type: "electronics",
    heading: "Starting ₹79 | Amazon Brands & more",
    img : clearneceStore,
    store: [],
    show: "See All",
  },
];


// export default ;
export default storeData;