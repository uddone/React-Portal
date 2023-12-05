/* eslint-disable react/no-array-index-key */
import React from 'react';
import IconCard from 'components/cards/IconCard';
// import data from 'data/iconCardsDOMain';
import GlideComponent from 'components/carousel/GlideComponent';

const IconCardsCarousel = ({dt,len}) => {
  // const [carddata2,setCarddata2] = useState();
  console.log(dt,len)
  // useEffect(() => { 
  //   setCarddata2(dt)
  //   // console.log('pro : \n ',dt,'\n ',props)
  // },[])
  // if(!carddata2){
  //   console.log('s : ',carddata2)
  // }else{
  //   console.log('a :',carddata2)
  // }
  return (
    <div className='icon-cards-row'>
      <GlideComponent
        settings={{
          gap: 5,
          perView: 4,
          type: 'carousel',
          breakpoints: {
            320: { perView: 1 },
            576: { perView: 2 },
            1600: { perView: 3 },
            1800: { perView: 4 },
          },
          hideNav: true,
        }}
      >
        {dt && dt.map((item, index) => {
          return (
            <div key={`icon_card_${index}`} >
              <IconCard {...item} className="mb-4"/>
            </div>
          );
        })}
      
      {/* {carddata2 && carddata2.map((item, index) => {
          return (
            <div key={`icon_card_${index}`}>
              <IconCard {...item} className="mb-4" />
            </div>
          );
        })} */}
        
         {/* {carddata2 && carddata2.map((s) => {
           return (
          <p 
          key={s.title}
          >{s.index}</p>
          )
        })}  */}
      </GlideComponent>
    </div>
  );
};
export default IconCardsCarousel;
