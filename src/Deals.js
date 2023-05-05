import Deal1 from './components/section-1/images/deals/21lrB5796uL._AC_SY200_.jpg';
import Deal3 from './components/section-1/images/deals/316Wztr9-aL._AC_SY200_.jpg';
import Deal4 from './components/section-1/images/deals/31K3PaZ2ytL._AC_SY200_.jpg';
import Deal2 from './components/section-1/images/deals/41-uUmseGIL._AC_SY200_.jpg';
import Deal5 from './components/section-1/images/deals/41O9c-uunDL._AC_SY200_.jpg';
import Deal6 from './components/section-1/images/deals/41eW+ZpbDTL._AC_SY200_.jpg';
import Deal7 from './components/section-1/images/deals/41heWun9O4L._AC_SY200_.jpg';
import Deal8 from './components/section-1/images/deals/41wN8UcVDuL._AC_SY200_ (1).jpg';
import Deal9 from './components/section-1/images/deals/515TGoW6xRL._AC_SY200_.jpg';
import Deal10 from './components/section-1/images/deals/41wN8UcVDuL._AC_SY200_.jpg';

import './deal.css'

const todayDeals = [
    {img : Deal1 , offer : "17" , text : "Samsung Galaxy M14 5GSamsung Galaxy M14 5G"},
    {img : Deal2 , offer : "70" , text : "boAt New ANC Headphone Launch - R551boAt New ANC Headphone Launch - R…"},
    {img : Deal3 , offer : "76" , text : "Blockbuster Deals on Speakers, Soundbars and Audio AccessoriesBlockbuster Deals on Speakers, Sound…"},
    {img : Deal4 , offer : "73" , text : "Charging Solutions - Premium Offering from URBNCharging Solutions - Premium Offerin…"},
    {img : Deal5 , offer : "55" , text : "Never before prices on Mivi HeadsetsNever before prices on Mivi Headsets"},
    {img : Deal6 , offer : "44" , text : "Top Offers on Computer AccessoriesTop Offers on Computer Accessories"},
    {img : Deal7 , offer : "28" , text : "Deal of the Day on Nobel HygieneDeal of the Day on Nobel Hygiene  "},
    {img : Deal8 , offer : "38" , text : "Best Deals on Trolley and Backpack from MokobaraBest Deals on Trolley and Backpack fr…"},
    {img : Deal9 , offer : "58" , text : "ers on Noise HeadphonesCrazy Offers on Noise Headphones"},
    {img : Deal10 , offer : "58" , text : "Super Savings Deals by ARCATRON & FridoSuper Savings Deals by ARCATRON "},
  ]




  const Deals = () => {
   
    const truc = (str) => {
        return str.split(" ").length > 10 ? str.slice(0 , 30) + "..." : str;
      }
  
    return(
        <div className='deals-container'>
            <h3 style={{marginLeft:"1rem"}}>Today's Deals <span style={{color : "#456789"}}>See All Deals</span></h3>
        <div className='container'>
          {todayDeals.map((deal , index) => {
            return(
                <div className='deals' key={index}>
                    <div className='img-container'>
                     <img src={deal.img} alt="" />
                    </div>
                    <div className='info'>
                        <span className='offer'>{`up to ${deal.offer}% off`}</span>
                        <span>Deal of the day</span>
                    </div>
                    <span style={{marginTop : "10px"}}>{truc(deal.text)}</span>
                </div>
            )
         })}
        </div>
      </div>
    )
  }

  export default Deals;