

import MyartImage from "./components/section-1/images/MayART_T1_PC_CC_1x_EN._SY304_CB590890459_.jpg";
import Pharmacy from "./components/section-1/images/CC_low_3._SY304_CB592656736_.jpg";
import pc from './components/section-1/images/PC_CategoryCard_379X304_1._SY304_CB614835787_.jpg'
import mob1 from "./components/section-1/images/advertiesmentImages/D78091548_MayART_Central-Latest-Launches-Page_DEsign-SIM_PC_QuadCard_186X116_1._SY116_CB591041374_.jpg";

import mob2 from "./components/section-1/images/advertiesmentImages/D78091548_MayART_Central-Latest-Launches-Page_DEsign-SIM_PC_QuadCard_186X116_2._SY116_CB591041374_.jpg";
import mob3 from "./components/section-1/images/advertiesmentImages/D78091548_MayART_Central-Latest-Launches-Page_DEsign-SIM_PC_QuadCard_186X116_3._SY116_CB591041374_.jpg";

import mob4 from "./components/section-1/images/advertiesmentImages/D78091548_MayART_Central-Latest-Launches-Page_DEsign-SIM_PC_QuadCard_186X116_4._SY116_CB591041374_.jpg";

const storeData = [
  {
    type: "card",
    heading: "Great Summer sale",
    img: MyartImage,
    store: [],
    show: "See All",
  },
  {
    type: "card",
    heading: "Up to 50% off | Monitor blood sugar at home",
    img: Pharmacy,
    store: [],
    show: "See All",
  },
  {
    type: "card",
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
    type: "card",
    heading: "Bluetooth Calling Smartwatch starts at ₹1,999",
    img : pc,
    store: [],
    show: "See All",
  },
  {
    type: "card",
    heading: "Starting ₹79 | Amazon Brands & more",
    img : pc,
    store: [],
    show: "See All",
  },

  {
    type: "card",
    heading: "Bluetooth Calling Smartwatch starts at ₹1,999",
    img : pc,
    store: [],
    show: "See All",
  },

  {
    type: "card",
    heading: "Bluetooth Calling Smartwatch starts at ₹1,999",
    img : pc,
    store: [],
    show: "See All",
  },

  {
    type: "card",
    heading: "Bluetooth Calling Smartwatch starts at ₹1,999",
    img : pc,
    store: [],
    show: "See All",
  },
];

export default storeData;
